import useTypewriter from './useTypewriter';
import useScrollAnimation from './useScrollAnimation';
import { useEffect } from "react";

const Hero = ({ theme }) => {
    const mainText = "Hi, I'm Raza";
    const subText = "Computer Science | AI/ML Enthusiast | Full-Stack Developer";
    const description = "Building intelligent systems that shape tomorrow's world";
    const description2 = "Currently Pursuing Computer Science at UMass Amherst"

    const { displayedText: mainDisplay, isComplete: mainComplete } = useTypewriter(mainText, 100, 500);
    const { displayedText: subDisplay, isComplete: subComplete } = useTypewriter(subText, 80, mainComplete ? 800 : 999999);
    const { displayedText: descDisplay, isComplete: descComplete } = useTypewriter(description, 50, subComplete ? 1000 : 999999);
    const { displayedText: descDisplay2, isComplete: desc2Complete } = useTypewriter(description2, 50, descComplete ? 800 : 999999);

    const [scrollRef, isVisible] = useScrollAnimation({ threshold: 0.2, triggerOnce: false });

    useEffect(() => {
        const canvas = document.getElementById("heroCanvas");
        const ctx = canvas.getContext("2d");

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        const particles = Array.from({ length: 80 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 1.2,
        vy: (Math.random() - 0.5) * 1.2,
        }));

        let mouse = { x: null, y: null };

        canvas.addEventListener("mousemove", (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
            });

            function draw() {
            ctx.clearRect(0, 0, width, height);

            particles.forEach((p, i) => {
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > width) p.vx *= -1;
                if (p.y < 0 || p.y > height) p.vy *= -1;

                ctx.beginPath();
                ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
                ctx.fillStyle = "rgba(100, 150, 255, 0.7)";
                ctx.fill();

                for (let j = i + 1; j < particles.length; j++) {
                const p2 = particles[j];
                const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
                if (dist < 100) {
                    ctx.strokeStyle = `rgba(150, 100, 255, ${1 - dist / 100})`;
                    ctx.lineWidth = 0.5;
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                }
                }

            if (mouse.x && mouse.y) {
            const dist = Math.hypot(p.x - mouse.x, p.y - mouse.y);
            if (dist < 150) {
                ctx.strokeStyle = `rgba(255, 100, 200, ${0.6 + (1 - dist / 150) * 0.4})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(mouse.x, mouse.y);
                ctx.stroke();
            }
            }
        });

        requestAnimationFrame(draw);
        }

        draw();

        const resize = () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        };
        window.addEventListener("resize", resize);

        return () => {
        window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <section id='Home' className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        <canvas id="heroCanvas" className="absolute inset-0 w-full h-full"></canvas>
        <div className="max-w-4xl mx-auto text-center z-10">
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                {mainDisplay}
            </span>
            {!mainComplete && (
                <span className="animate-pulse text-blue-400">|</span>
            )}
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-600 dark:text-gray-300">
            {subDisplay}
            {!subComplete && mainComplete && (
                <span className="animate-pulse text-purple-400">|</span>
            )}
            </h2>

            <div className="space-y-4 mb-12">
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                {descDisplay}
                {!descComplete && subComplete && (
                    <span className="animate-pulse text-pink-400">|</span>
                )}
                </p>

                <p className="text-md md:text-lg text-gray-500 dark:text-gray-500 max-w-2xl mx-auto leading-relaxed font-medium">
                {descDisplay2}
                {!desc2Complete && descComplete && (
                    <span className="animate-pulse text-indigo-400">|</span>
                )}
                </p>
            </div>

            <div 
            ref={scrollRef}
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 ${
                desc2Complete || descDisplay2.length > 10
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-4'
            }`}
            >
            <a href='#Projects' className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl
                ${theme === 'dark' 
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500' 
                : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600'
                }`}>
                View My Work
            </a>
            
            <a href='#Contact' className='px-8 py-4 rounded-2xl font-semibold transition-all duration-400 transform hover:scale-105 border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 dark:border-white/30 dark:text-white dark:hover:border-white/50 dark:hover:bg-gray-100 dark:hover:text-gray-700'>
                Contact Me
            </a>
            </div>
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60" />
            <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-pulse opacity-40" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse opacity-50" style={{ animationDelay: '2s' }} />
        </div>
        </section>
    );
};

export default Hero;