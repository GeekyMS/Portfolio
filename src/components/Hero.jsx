import { lazy, Suspense, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import useTypewriter from './useTypewriter';
import useReducedMotion from './useReducedMotion';
import DotField from './hero/DotField';

gsap.registerPlugin(useGSAP);

// three.js stays out of the main bundle until the hero mounts.
const HeroScene = lazy(() => import('./hero/HeroScene'));

const Hero = () => {
    const mainText = "RAZA";
    const subText = "I BUILD SYSTEMS TO FIND OUT WHAT THE ABSTRACTION IS HIDING.";
    const description = "CS @ UMass Amherst. Systems, performance, and reliable ML infrastructure.";

    const { displayedText: mainDisplay, isComplete: mainComplete } = useTypewriter(mainText, 100, 200);
    const { displayedText: subDisplay, isComplete: subComplete } = useTypewriter(subText, 35, mainComplete ? 300 : 999999);
    const { displayedText: descDisplay, isComplete: descComplete } = useTypewriter(description, 20, subComplete ? 400 : 999999);

    const reducedMotion = useReducedMotion();
    const sectionRef = useRef(null);

    useGSAP(() => {
        if (reducedMotion) return;
        gsap.from('[data-hero-scene]', { opacity: 0, scale: 0.9, duration: 1.4, ease: 'power3.out' });
    }, { scope: sectionRef, dependencies: [reducedMotion] });

    return (
        <section ref={sectionRef} id='Home' className="min-h-[100dvh] flex items-center px-4 pt-20 pb-12 relative overflow-hidden">
            <DotField reducedMotion={reducedMotion} />
            <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-8 md:gap-12 items-center z-10">
                <div data-hero-scene className="relative w-full max-w-[520px] aspect-square mx-auto">
                    <Suspense fallback={null}>
                        <HeroScene reducedMotion={reducedMotion} />
                    </Suspense>
                </div>

                <div className="text-center md:text-left p-4 md:p-8">
                    <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter">
                        {mainDisplay}
                        {!mainComplete && <span className="animate-pulse">_</span>}
                    </h1>

                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-8 opacity-80">
                        {subDisplay}
                        {!subComplete && mainComplete && <span className="animate-pulse">_</span>}
                    </h2>

                    <div className="space-y-4 mb-12">
                        <p className="text-lg md:text-xl max-w-xl mx-auto md:mx-0 leading-relaxed">
                            {descDisplay}
                            {!descComplete && subComplete && <span className="animate-pulse">_</span>}
                        </p>
                    </div>

                    <div className={`flex flex-col sm:flex-row gap-6 justify-center md:justify-start items-center transition-all duration-1000 ${
                            descComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`}
                    >
                        <a href='#Experience' className="eink-border eink-shadow bg-fg text-surface px-8 py-4 font-bold transition-all duration-150 hover:translate-y-[4px] hover:translate-x-[4px] hover:shadow-none hover:bg-accent hover:text-accent-fg hover:border-accent no-underline">
                            EXPLORE THE WORK →
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
