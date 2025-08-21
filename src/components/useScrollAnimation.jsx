import { useState, useEffect, useRef } from 'react';

const useScrollAnimation = (options = {}) => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    const {
        threshold = 0.1,
        triggerOnce = true,
        rootMargin = '0px 0px -50px 0px'
    } = options;

    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
            setIsVisible(true);
            if (triggerOnce) {
                observer.unobserve(entry.target);
            }
            } else if (!triggerOnce) {
            setIsVisible(false);
            }
        },
        {
            threshold,
            rootMargin
        }
        );

        if (elementRef.current) {
        observer.observe(elementRef.current);
        }

        return () => {
        if (elementRef.current) {
            observer.unobserve(elementRef.current);
        }
        };
    }, [threshold, triggerOnce, rootMargin]);

    return [elementRef, isVisible];
};

export default useScrollAnimation;