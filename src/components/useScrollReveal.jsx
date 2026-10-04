import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import useReducedMotion from './useReducedMotion';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const REVEAL_OFFSET = 40;

// Attach the returned ref to a section. Inside it:
//   data-reveal        fades and lifts the element in once when it scrolls into view
//   data-reveal-group  does the same for each direct child, staggered
const useScrollReveal = () => {
    const scopeRef = useRef(null);
    const reducedMotion = useReducedMotion();

    useGSAP(() => {
        if (reducedMotion) return;

        gsap.utils.toArray('[data-reveal]').forEach((element) => {
            gsap.from(element, {
                opacity: 0,
                y: REVEAL_OFFSET,
                duration: 0.9,
                ease: 'power3.out',
                clearProps: 'transform',
                scrollTrigger: { trigger: element, start: 'top 88%', once: true },
            });
        });

        gsap.utils.toArray('[data-reveal-group]').forEach((group) => {
            gsap.from(group.children, {
                opacity: 0,
                y: REVEAL_OFFSET + 10,
                duration: 0.9,
                ease: 'power3.out',
                stagger: 0.15,
                clearProps: 'transform',
                scrollTrigger: { trigger: group, start: 'top 85%', once: true },
            });
        });
    }, { scope: scopeRef, dependencies: [reducedMotion] });

    return scopeRef;
};

export default useScrollReveal;
