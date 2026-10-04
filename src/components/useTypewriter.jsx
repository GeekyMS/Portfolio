import { useState, useEffect } from 'react';

const useTypewriter = (text, speed = 50, startDelay = 500) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        if (!text) return;

        setDisplayedText('');
        setIsComplete(false);

        let typeInterval;
        const startTimeout = setTimeout(() => {
            let index = 0;

            typeInterval = setInterval(() => {
                if (index < text.length) {
                    setDisplayedText(text.slice(0, index + 1));
                    index++;
                } else {
                    clearInterval(typeInterval);
                    setIsComplete(true);
                }
            }, speed);
        }, startDelay);

        return () => {
            clearTimeout(startTimeout);
            clearInterval(typeInterval);
        };
    }, [text, speed, startDelay]);

    return { displayedText, isComplete };
};

export default useTypewriter;
