import { useState } from 'react';

const GlassCard = ({ 
    children, 
    className = "",
    ...props 
}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className={`group eink-border p-1 bg-transparent transition-all cubic-bezier(0.175, 0.885, 0.32, 1.275) duration-300 cursor-pointer
            ${isHovered 
                ? 'scale-[1.03] -translate-y-2 -translate-x-2 shadow-[8px_8px_0px_#1a1a1a] dark:shadow-[8px_8px_0px_#f0f0f0] bg-gray-200 dark:bg-gray-800' 
                : 'scale-100 translate-y-0 translate-x-0 eink-shadow'
            } 
            ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            {...props}
        >
            {/* Inner Blueprint Frame */}
            <div className="eink-border p-6 h-full w-full relative transition-colors duration-150 overflow-hidden border-current">
                <div className="relative z-10">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default GlassCard;