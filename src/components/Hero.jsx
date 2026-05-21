import useTypewriter from './useTypewriter';
import { useEffect, useRef, useCallback } from "react";

const Hero = ({ theme }) => {
    const mainText = "HI, I'M RAZA";
    const subText = "COMPUTER SCIENCE | AI/ML | FULL-STACK";
    const description = "Building intelligent systems that shape tomorrow's world.";

    const { displayedText: mainDisplay, isComplete: mainComplete } = useTypewriter(mainText, 100, 200);
    const { displayedText: subDisplay, isComplete: subComplete } = useTypewriter(subText, 35, mainComplete ? 300 : 999999);
    const { displayedText: descDisplay, isComplete: descComplete } = useTypewriter(description, 20, subComplete ? 400 : 999999);

    const gridAnimRef = useRef(null);
    const mapAnimRef = useRef(null);
    const mapProgressRef = useRef(0);
    const isHoveredRef = useRef(false);

    const drawGrid = useCallback((canvas, ctx, offsetRef) => {
        const width = canvas.width;
        const height = canvas.height;
        ctx.clearRect(0, 0, width, height);
        const isDark = document.documentElement.classList.contains('dark');
        ctx.strokeStyle = isDark ? 'rgba(240, 240, 240, 0.1)' : 'rgba(26, 26, 26, 0.1)';
        ctx.lineWidth = 1;
        const gridSize = 40;
        offsetRef.current = (offsetRef.current + 0.2) % gridSize;
        const off = offsetRef.current;
        for (let x = off; x < width; x += gridSize) {
            ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, height); ctx.stroke();
        }
        for (let y = off; y < height; y += gridSize) {
            ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(width, y); ctx.stroke();
        }
    }, []);

    const corridors = [
        { x1: 0.05, y1: 0.28, x2: 0.38, y2: 0.28, label: 'Great Hall', lx: 0.16, ly: 0.25 },
        { x1: 0.38, y1: 0.08, x2: 0.38, y2: 0.72, label: 'Main Staircase', lx: 0.395, ly: 0.06 },
        { x1: 0.38, y1: 0.48, x2: 0.72, y2: 0.48, label: 'Charms Corridor', lx: 0.48, ly: 0.45 },
        { x1: 0.72, y1: 0.12, x2: 0.72, y2: 0.88, label: 'Astronomy Tower', lx: 0.735, ly: 0.10 },
        { x1: 0.14, y1: 0.65, x2: 0.55, y2: 0.65, label: 'Dungeons', lx: 0.26, ly: 0.62 },
        { x1: 0.55, y1: 0.65, x2: 0.55, y2: 0.33, label: '', lx: 0, ly: 0 },
        { x1: 0.55, y1: 0.33, x2: 0.72, y2: 0.33, label: 'Defence Classroom', lx: 0.555, ly: 0.30 },
        { x1: 0.08, y1: 0.28, x2: 0.08, y2: 0.88, label: 'West Wing', lx: 0.01, ly: 0.55 },
        { x1: 0.08, y1: 0.88, x2: 0.72, y2: 0.88, label: 'Trophy Room', lx: 0.28, ly: 0.92 },
        { x1: 0.38, y1: 0.72, x2: 0.55, y2: 0.72, label: '', lx: 0, ly: 0 },
        { x1: 0.38, y1: 0.08, x2: 0.72, y2: 0.08, label: 'Library', lx: 0.50, ly: 0.05 },
        { x1: 0.82, y1: 0.28, x2: 0.96, y2: 0.28, label: 'Owlery', lx: 0.84, ly: 0.25 },
        { x1: 0.82, y1: 0.28, x2: 0.82, y2: 0.72, label: '', lx: 0, ly: 0 },
        { x1: 0.72, y1: 0.48, x2: 0.82, y2: 0.48, label: '', lx: 0, ly: 0 },
    ];

    const rooms = [
        { x: 0.03, y: 0.14, w: 0.14, h: 0.14, label: "Headmaster's" },
        { x: 0.62, y: 0.14, w: 0.10, h: 0.12, label: 'Potions' },
        { x: 0.74, y: 0.60, w: 0.12, h: 0.20, label: 'Hospital Wing' },
        { x: 0.84, y: 0.48, w: 0.13, h: 0.20, label: 'Common Room' },
    ];

    const footsteps = [
        ...Array.from({ length: 7 }, (_, i) => ({
            x: 0.10 + i * 0.038, y: 0.28 + (i % 2 === 0 ? -0.018 : 0.018), angle: 5, delay: i * 0.10
        })),
        ...Array.from({ length: 6 }, (_, i) => ({
            x: 0.38 + (i % 2 === 0 ? -0.012 : 0.012), y: 0.30 + i * 0.038, angle: 90, delay: 0.55 + i * 0.09
        })),
    ];

    const drawMap = useCallback((canvas, ctx, progress, isDark) => {
        const W = canvas.width;
        const H = canvas.height;
        const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

        ctx.clearRect(0, 0, W, H);

        const bgErase   = isDark ? 'rgba(26, 26, 26, 1)'      : 'rgba(240, 240, 240, 1)';
        const gridLine  = isDark ? 'rgba(240, 240, 240, 0.1)'  : 'rgba(26, 26, 26, 0.1)';
        const inkColor  = isDark ? 'rgba(240, 240, 240, 0.55)' : 'rgba(26, 26, 26, 0.55)';
        const inkFaint  = isDark ? 'rgba(240, 240, 240, 0.28)' : 'rgba(26, 26, 26, 0.28)';
        const inkStrong = isDark ? 'rgba(240, 240, 240, 0.8)'  : 'rgba(26, 26, 26, 0.8)';

        // Grid as base
        ctx.strokeStyle = gridLine;
        ctx.lineWidth = 1;
        const gridSize = 40;
        for (let x = 0; x < W; x += gridSize) {
            ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
        }
        for (let y = 0; y < H; y += gridSize) {
            ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
        }

        const drawProgress = clamp((progress - 0.04) * 1.1, 0, 1);

        corridors.forEach((c, idx) => {
            const segDelay = idx / corridors.length;
            const segP = clamp((drawProgress - segDelay * 0.45) * 2.2, 0, 1);
            if (segP <= 0) return;

            const x1 = c.x1 * W, y1 = c.y1 * H;
            const x2 = c.x2 * W, y2 = c.y2 * H;
            const ex = x1 + (x2 - x1) * segP;
            const ey = y1 + (y2 - y1) * segP;
            const isVertical = Math.abs(c.x2 - c.x1) < 0.01;
            const wallOff = 5;
            const ox = isVertical ? wallOff : 0;
            const oy = isVertical ? 0 : wallOff;

            ctx.globalAlpha = clamp(drawProgress * 2, 0, 1);
            ctx.fillStyle = bgErase;
            if (isVertical) {
                ctx.fillRect(x1, Math.min(y1, ey), wallOff, Math.abs(ey - y1));
            } else {
                ctx.fillRect(Math.min(x1, ex), y1, Math.abs(ex - x1), wallOff);
            }
            ctx.globalAlpha = 1;

            ctx.beginPath();
            ctx.strokeStyle = inkColor;
            ctx.lineWidth = 1;
            ctx.lineCap = 'square';
            ctx.moveTo(x1, y1);
            ctx.lineTo(ex, ey);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(x1 + ox, y1 + oy);
            ctx.lineTo(ex + ox, ey + oy);
            ctx.stroke();

            if (c.label && segP > 0.65) {
                ctx.globalAlpha = clamp((segP - 0.65) * 2.8, 0, 0.45);
                ctx.font = `italic 10px 'Palatino Linotype', Palatino, serif`;
                ctx.fillStyle = inkFaint;
                ctx.textAlign = 'left';
                ctx.fillText(c.label, c.lx * W, c.ly * H);
                ctx.globalAlpha = 1;
            }
        });

        rooms.forEach((r, idx) => {
            const roomP = clamp((drawProgress - 0.28 - idx * 0.08) * 3.5, 0, 1);
            if (roomP <= 0) return;

            const rx = r.x * W, ry = r.y * H, rw = r.w * W, rh = r.h * H;

            ctx.globalAlpha = roomP;
            ctx.fillStyle = bgErase;
            ctx.fillRect(rx + 1, ry + 1, rw - 2, rh - 2);

            ctx.globalAlpha = roomP * 0.85;
            ctx.strokeStyle = inkStrong;
            ctx.lineWidth = 1.5;
            ctx.strokeRect(rx, ry, rw, rh);

            if (roomP > 0.5) {
                ctx.globalAlpha = clamp((roomP - 0.5) * 2, 0, 0.55);
                ctx.font = `italic 9px 'Palatino Linotype', Palatino, serif`;
                ctx.fillStyle = inkColor;
                ctx.textAlign = 'center';
                ctx.fillText(r.label, (r.x + r.w / 2) * W, (r.y + r.h / 2 + 0.012) * H);
            }

            ctx.globalAlpha = 1;
        });

        const stepP = clamp((progress - 0.45) * 2.2, 0, 1);
        footsteps.forEach((s) => {
            const sa = clamp((stepP - s.delay) * 3.5, 0, 1);
            if (sa <= 0) return;
            ctx.globalAlpha = sa * 0.6;
            ctx.save();
            ctx.translate(s.x * W, s.y * H);
            ctx.rotate(s.angle * Math.PI / 180);
            ctx.fillStyle = inkStrong;
            ctx.beginPath();
            ctx.ellipse(0, 0, 3.5, 5.5, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.beginPath();
            ctx.ellipse(5, -1, 2.2, 3.2, 0.3, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
            ctx.globalAlpha = 1;
        });
    }, []);

    useEffect(() => {
        const canvas = document.getElementById("heroCanvas");
        const ctx = canvas.getContext("2d");
        const offsetRef = { current: 0 };

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener("resize", resize);

        const runGrid = () => {
            if (!isHoveredRef.current && mapProgressRef.current < 0.01) {
                drawGrid(canvas, ctx, offsetRef);
                gridAnimRef.current = requestAnimationFrame(runGrid);
            }
        };

        const runMap = () => {
            const isDark = document.documentElement.classList.contains('dark');
            const target = isHoveredRef.current ? 1 : 0;
            const speed = 0.022;

            mapProgressRef.current += (target - mapProgressRef.current) * speed;
            if (Math.abs(mapProgressRef.current - target) < 0.002) mapProgressRef.current = target;

            drawMap(canvas, ctx, mapProgressRef.current, isDark);

            if (mapProgressRef.current > 0.002 || isHoveredRef.current) {
                mapAnimRef.current = requestAnimationFrame(runMap);
            } else {
                mapProgressRef.current = 0;
                runGrid();
            }
        };

        const section = document.getElementById('Home');

        const handleEnter = () => {
            isHoveredRef.current = true;
            if (gridAnimRef.current) cancelAnimationFrame(gridAnimRef.current);
            if (mapAnimRef.current) cancelAnimationFrame(mapAnimRef.current);
            mapAnimRef.current = requestAnimationFrame(runMap);
        };

        const handleLeave = () => {
            isHoveredRef.current = false;
            if (mapAnimRef.current) cancelAnimationFrame(mapAnimRef.current);
            mapAnimRef.current = requestAnimationFrame(runMap);
        };

        section.addEventListener('mouseenter', handleEnter);
        section.addEventListener('mouseleave', handleLeave);
        runGrid();

        return () => {
            window.removeEventListener("resize", resize);
            section.removeEventListener('mouseenter', handleEnter);
            section.removeEventListener('mouseleave', handleLeave);
            if (gridAnimRef.current) cancelAnimationFrame(gridAnimRef.current);
            if (mapAnimRef.current) cancelAnimationFrame(mapAnimRef.current);
        };
    }, [theme, drawGrid, drawMap]);

    return (
        <section id='Home' className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
            <canvas id="heroCanvas" className="absolute inset-0 w-full h-full"></canvas>
            <div className="max-w-4xl mx-auto text-center z-10 p-8 bg-transparent">
                <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter">
                    {mainDisplay}
                    {!mainComplete && <span className="animate-pulse">_</span>}
                </h1>

                <h2 className="text-2xl md:text-3xl font-bold mb-8 opacity-80">
                    {subDisplay}
                    {!subComplete && mainComplete && <span className="animate-pulse">_</span>}
                </h2>

                <div className="space-y-4 mb-12">
                    <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        {descDisplay}
                        {!descComplete && subComplete && <span className="animate-pulse">_</span>}
                    </p>
                </div>

                <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 ${
                        descComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                >
                    <a href='#Projects' className="eink-border eink-shadow bg-[#1a1a1a] text-[#f0f0f0] dark:bg-[#f0f0f0] dark:text-[#1a1a1a] px-8 py-4 font-bold transition-all duration-150 hover:translate-y-[4px] hover:translate-x-[4px] hover:shadow-none hover:bg-[#ae0001] hover:text-[#d3a625] dark:hover:bg-[#d3a625] dark:hover:text-[#1a1a1a] hover:border-[#ae0001] dark:hover:border-[#d3a625] no-underline">
                        VIEW MY WORK
                    </a>

                    <a href='#Contact' className="eink-border eink-shadow bg-transparent px-8 py-4 font-bold transition-all duration-150 hover:translate-y-[4px] hover:translate-x-[4px] hover:shadow-none hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-[#ae0001] dark:hover:text-[#d3a625] hover:border-[#ae0001] dark:hover:border-[#d3a625] no-underline text-current">
                        CONTACT ME
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;