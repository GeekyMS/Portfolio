import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { buildShapes } from './heroShapes';
import { foregroundColor, observeTheme } from './theme';

const vertexShader = `
    attribute vec3 aTo;
    attribute float aSeed;
    uniform float uMorph;
    uniform float uTime;
    uniform float uSize;
    uniform float uPixelRatio;
    varying float vAlpha;

    void main() {
        vec3 p = mix(position, aTo, uMorph);

        // Dots scatter outward mid-morph, then settle into the next shape.
        float scatter = sin(3.14159265 * uMorph);
        p += normalize(p + vec3(0.0001)) * scatter * (0.1 + 0.4 * aSeed);

        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mv;

        // Fake a single light so dots shrink and fade on the shadowed side,
        // which is what gives the halftone look.
        vec3 normal = normalize(mat3(modelViewMatrix) * normalize(p + vec3(0.0001)));
        float lit = clamp(dot(normal, normalize(vec3(-0.5, 0.7, 0.6))) * 0.5 + 0.5, 0.0, 1.0);

        float depth = clamp((-mv.z - 3.2) / 2.0, 0.0, 1.0);
        float twinkle = 0.85 + 0.15 * sin(uTime * 1.6 + aSeed * 40.0);

        vAlpha = mix(0.18, 1.0, lit) * mix(1.0, 0.45, depth);
        gl_PointSize = uSize * uPixelRatio * mix(0.45, 1.15, lit) * (4.2 / -mv.z) * twinkle;
    }
`;

const fragmentShader = `
    uniform vec3 uColor;
    varying float vAlpha;

    void main() {
        float d = length(gl_PointCoord - vec2(0.5));
        if (d > 0.5) discard;
        float edge = smoothstep(0.5, 0.35, d);
        gl_FragColor = vec4(uColor, edge * vAlpha);
    }
`;

const HOLD_SECONDS = 3;
const MORPH_SECONDS = 2;

const HeroScene = ({ reducedMotion }) => {
    const mountRef = useRef(null);

    useEffect(() => {
        const mount = mountRef.current;
        if (!mount) return undefined;

        let renderer;
        try {
            renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false, powerPreference: 'low-power' });
        } catch {
            // No WebGL: the dot field behind the hero still renders.
            return undefined;
        }

        const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
        renderer.setPixelRatio(pixelRatio);
        renderer.setClearColor(0x000000, 0);
        renderer.domElement.className = 'block w-full h-full';
        renderer.domElement.setAttribute('aria-hidden', 'true');
        mount.appendChild(renderer.domElement);

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 50);
        camera.position.z = 4.2;

        const count = window.innerWidth < 768 ? 3500 : 6000;
        const shapes = buildShapes(count);
        const seeds = new Float32Array(count);
        for (let i = 0; i < count; i++) seeds[i] = Math.random();

        const fromAttr = new THREE.BufferAttribute(new Float32Array(shapes[0]), 3);
        const toAttr = new THREE.BufferAttribute(new Float32Array(shapes[1]), 3);
        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', fromAttr);
        geometry.setAttribute('aTo', toAttr);
        geometry.setAttribute('aSeed', new THREE.BufferAttribute(seeds, 1));

        const uniforms = {
            uMorph: { value: 0 },
            uTime: { value: 0 },
            uSize: { value: 3.4 },
            uPixelRatio: { value: pixelRatio },
            uColor: { value: new THREE.Color(foregroundColor()) },
        };
        const material = new THREE.ShaderMaterial({
            uniforms,
            vertexShader,
            fragmentShader,
            transparent: true,
            depthWrite: false,
        });
        const points = new THREE.Points(geometry, material);
        points.frustumCulled = false;
        scene.add(points);

        const render = () => renderer.render(scene, camera);

        // Pointer parallax and idle spin.
        let yaw = 0.6;
        let tiltX = 0.25;
        let tiltY = 0;
        let targetX = 0.25;
        let targetY = 0;
        const onPointerMove = (event) => {
            targetY = (event.clientX / window.innerWidth - 0.5) * 0.9;
            targetX = (event.clientY / window.innerHeight - 0.5) * 0.5 + 0.25;
        };

        const clock = new THREE.Clock();
        let rafId = 0;
        const frame = () => {
            rafId = requestAnimationFrame(frame);
            const dt = Math.min(clock.getDelta(), 0.05);
            uniforms.uTime.value += dt;
            yaw += dt * 0.18;
            tiltX += (targetX - tiltX) * 0.05;
            tiltY += (targetY - tiltY) * 0.05;
            points.rotation.set(tiltX, yaw + tiltY, 0);
            render();
        };

        let inView = true;
        const start = () => {
            if (rafId || reducedMotion) return;
            clock.getDelta();
            rafId = requestAnimationFrame(frame);
        };
        const stop = () => {
            cancelAnimationFrame(rafId);
            rafId = 0;
        };
        const sync = () => {
            if (inView && !document.hidden) start();
            else stop();
        };

        const resize = () => {
            const width = mount.clientWidth;
            const height = mount.clientHeight;
            if (!width || !height) return;
            renderer.setSize(width, height, false);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            uniforms.uSize.value = Math.max(2.2, Math.min(4, width / 150));
            if (reducedMotion) {
                points.rotation.set(tiltX, yaw, 0);
                render();
            }
        };

        const resizeObserver = new ResizeObserver(resize);
        resizeObserver.observe(mount);

        const visibilityObserver = new IntersectionObserver(([entry]) => {
            inView = entry.isIntersecting;
            sync();
        });
        visibilityObserver.observe(mount);

        const stopThemeObserver = observeTheme(() => {
            uniforms.uColor.value.set(foregroundColor());
            if (reducedMotion) render();
        });

        // Morph cycle: hold, morph to the next shape, repeat.
        let shapeIndex = 0;
        let tween;
        const queueMorph = () => {
            fromAttr.array.set(shapes[shapeIndex]);
            toAttr.array.set(shapes[(shapeIndex + 1) % shapes.length]);
            fromAttr.needsUpdate = true;
            toAttr.needsUpdate = true;
            uniforms.uMorph.value = 0;
            tween = gsap.to(uniforms.uMorph, {
                value: 1,
                duration: MORPH_SECONDS,
                delay: HOLD_SECONDS,
                ease: 'power3.inOut',
                onComplete: () => {
                    shapeIndex = (shapeIndex + 1) % shapes.length;
                    queueMorph();
                },
            });
        };

        if (!reducedMotion) {
            queueMorph();
            window.addEventListener('pointermove', onPointerMove, { passive: true });
        }
        document.addEventListener('visibilitychange', sync);
        sync();

        return () => {
            stop();
            if (tween) tween.kill();
            resizeObserver.disconnect();
            visibilityObserver.disconnect();
            stopThemeObserver();
            window.removeEventListener('pointermove', onPointerMove);
            document.removeEventListener('visibilitychange', sync);
            geometry.dispose();
            material.dispose();
            renderer.dispose();
            renderer.forceContextLoss();
            if (renderer.domElement.parentNode === mount) mount.removeChild(renderer.domElement);
        };
    }, [reducedMotion]);

    return <div ref={mountRef} className="absolute inset-0" />;
};

export default HeroScene;
