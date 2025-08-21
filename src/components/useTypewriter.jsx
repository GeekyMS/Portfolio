import { useState, useEffect } from 'react';

const useTypewriter = (text, speed = 50, startDelay = 500) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        if (!text) return;
        
        setDisplayedText('');
        setIsComplete(false);
        
        const startTimeout = setTimeout(() => {
        let index = 0;
        
        const typeInterval = setInterval(() => {
            if (index < text.length) {
            setDisplayedText(text.slice(0, index + 1));
            index++;
            } else {
            clearInterval(typeInterval);
            setIsComplete(true);
            }
        }, speed);
        
        return () => clearInterval(typeInterval);
        }, startDelay);
        
        return () => clearTimeout(startTimeout);
    }, [text, speed, startDelay]);

    return { displayedText, isComplete };
};

export default useTypewriter;