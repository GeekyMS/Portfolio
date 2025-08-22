import { useState } from 'react';

const GlassCard = ({ 
children, 
className = "",
glowColor = "blue",
rotateDirection = "left",
theme = "Dark", 
...props 
}) => {
const [isHovered, setIsHovered] = useState(false);


const colorMap = {
blue: {
    dark: {
    refraction: "to-blue-500/20",
    glow: "from-blue-600/50 via-purple-600/50 to-blue-600/50"
    },
    light: {
    refraction: "to-blue-300/30", 
    glow: "from-blue-400/40 via-indigo-400/40 to-blue-400/40"
    }
},
green: {
    dark: {
    refraction: "to-green-500/20", 
    glow: "from-green-600/50 via-purple-600/50 to-green-600/50"
    },
    light: {
    refraction: "to-green-400/30",
    glow: "from-green-500/40 via-emerald-500/40 to-green-500/40"
    }
},
purple: {
    dark: {
    refraction: "to-purple-600/20",
    glow: "from-purple-600/50 via-pink-600/50 to-purple-600/50"
    },
    light: {
    refraction: "to-purple-400/30",
    glow: "from-purple-400/40 via-pink-400/40 to-purple-500/40"
    }
},
pink: {
    dark: {
    refraction: "to-pink-500/20",
    glow: "from-pink-600/50 via-purple-600/50 to-pink-600/50"
    },
    light: {
    refraction: "to-pink-300/30",
    glow: "from-pink-400/40 via-rose-400/40 to-pink-400/40"
    }
},
orange: {
    dark: {
    refraction: "to-orange-500/20",
    glow: "from-orange-600/50 via-red-600/50 to-orange-600/50"
    },
    light: {
    refraction: "to-orange-300/30",
    glow: "from-orange-400/40 via-amber-400/40 to-orange-400/40"
    }
}
};

const themeKey = theme === "Dark" ? "dark" : "light";
const colors = colorMap[glowColor]?.[themeKey] || colorMap.blue.dark;
const rotation = rotateDirection === "left" ? "-rotate-1" : "rotate-1";

return (
<div 
    className={`relative group cursor-pointer transition-all duration-700 ease-out transform
    ${isHovered ? `scale-105 ${rotation}` : 'scale-100 rotate-0'}
    ${className}`}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    {...props}
>
    <div className={`absolute inset-0 rounded-3xl transition-all duration-700 ease-out
    ${theme === "Dark" 
        ? (isHovered ? 'bg-white/20 backdrop-blur-xl' : 'bg-white/10 backdrop-blur-lg')
        : (isHovered ? 'bg-gray-600/15 backdrop-blur-xl' : 'bg-black/8 backdrop-blur-lg')
    }`} 
    />
    
    <div className={`absolute inset-0 rounded-3xl transition-all duration-700 ease-out
    ${isHovered 
        ? `bg-gradient-to-br ${theme === "Dark" ? "from-white/30" : "from-gray-600/20"} via-transparent ${colors.refraction}` 
        : `bg-gradient-to-br ${theme === "Dark" ? "from-white/20" : "from-gray-600/15"} via-transparent ${colors.refraction.replace('/20', '/15').replace('/30', '/20')}`
    }`} 
    />
    
    <div className={`absolute top-0 left-0 right-0 h-32 rounded-t-3xl transition-all duration-700 ease-out
    ${theme === "Dark"
        ? (isHovered 
            ? 'bg-gradient-to-b from-white/40 via-white/20 to-transparent opacity-100' 
            : 'bg-gradient-to-b from-white/30 via-white/15 to-transparent opacity-70')
        : (isHovered
            ? 'bg-gradient-to-b from-gray-600/25 via-gray-600/15 to-transparent opacity-100'
            : 'bg-gradient-to-b from-gray-600/20 via-gray-600/10 to-transparent opacity-70')
    }`} 
    />
    
    <div className={`absolute inset-0 rounded-3xl shadow-2xl 
    ${theme === "Dark" 
        ? 'border border-white/30 shadow-gray-700/50' 
        : 'border border-black/20 shadow-gray-500/30'
    }`} 
    />
    
    <div className="relative p-8 z-10">
    {children}
    </div>
    
    <div className={`absolute -inset-1 rounded-3xl transition-all duration-700 ease-out -z-10
    ${isHovered 
        ? `bg-gradient-to-r ${colors.glow} opacity-100 blur-xl` 
        : `bg-gradient-to-r ${colors.glow.replace('/50', '/20')} opacity-0 blur-lg`
    }`} 
    />
</div>
);
};

export default GlassCard;