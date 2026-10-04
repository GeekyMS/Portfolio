import { useEffect, useRef } from 'react';
import { foregroundColor, observeTheme } from './theme';

const SPACING = 36;
const BASE_RADIUS = 1.1;
const MAX_FLARES = 14;
const SPAWN_EVERY_MS = 90;

// Regular dot grid. A handful of random dots flare to full brightness and fade,
// like stars. Static when the user prefers reduced motion.
const DotField = ({ reducedMotion }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width = 0;
        let height = 0;
        let cols = 0;
        let rows = 0;
        let rafId = 0;
        let lastSpawn = 0;
        let inView = true;
        let fg = foregroundColor();
        const flares = [];

        const dotX = (col) => SPACING / 2 + col * SPACING;
        const dotY = (row) => SPACING / 2 + row * SPACING;

        const draw = (now) => {
            ctx.clearRect(0, 0, width, height);

            ctx.fillStyle = fg;
            ctx.globalAlpha = 0.2;
            ctx.beginPath();
            for (let row = 0; row < rows; row++) {
                for (let col = 0; col < cols; col++) {
                    const x = dotX(col);
                    const y = dotY(row);
                    ctx.moveTo(x + BASE_RADIUS, y);
                    ctx.arc(x, y, BASE_RADIUS, 0, Math.PI * 2);
                }
            }
            ctx.fill();

            for (let i = flares.length - 1; i >= 0; i--) {
                const flare = flares[i];
                const age = (now - flare.born) / flare.life;
                if (age >= 1) {
                    flares.splice(i, 1);
                    continue;
                }
                const intensity = Math.sin(Math.PI * age);
                ctx.globalAlpha = 0.2 + 0.8 * intensity;
                ctx.beginPath();
                ctx.arc(dotX(flare.col), dotY(flare.row), BASE_RADIUS + 1.3 * intensity, 0, Math.PI * 2);
                ctx.fill();
            }
            ctx.globalAlpha = 1;
        };

        const frame = (now) => {
            rafId = requestAnimationFrame(frame);
            if (now - lastSpawn > SPAWN_EVERY_MS && flares.length < MAX_FLARES) {
                flares.push({
                    col: Math.floor(Math.random() * cols),
                    row: Math.floor(Math.random() * rows),
                    born: now,
                    life: 1400 + Math.random() * 1800,
                });
                lastSpawn = now;
            }
            draw(now);
        };

        const start = () => {
            if (rafId || reducedMotion) return;
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
            const rect = canvas.getBoundingClientRect();
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            width = rect.width;
            height = rect.height;
            canvas.width = Math.round(width * dpr);
            canvas.height = Math.round(height * dpr);
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            cols = Math.ceil(width / SPACING);
            rows = Math.ceil(height / SPACING);
            flares.length = 0;
            draw(performance.now());
        };

        const resizeObserver = new ResizeObserver(resize);
        resizeObserver.observe(canvas);

        const visibilityObserver = new IntersectionObserver(([entry]) => {
            inView = entry.isIntersecting;
            sync();
        });
        visibilityObserver.observe(canvas);

        const stopThemeObserver = observeTheme(() => {
            fg = foregroundColor();
            if (!rafId) draw(performance.now());
        });

        document.addEventListener('visibilitychange', sync);
        sync();

        return () => {
            stop();
            resizeObserver.disconnect();
            visibilityObserver.disconnect();
            stopThemeObserver();
            document.removeEventListener('visibilitychange', sync);
        };
    }, [reducedMotion]);

    return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" aria-hidden="true" />;
};

export default DotField;
