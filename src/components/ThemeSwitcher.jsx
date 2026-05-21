import { Moon, Sun } from 'lucide-react';

const ThemeSwitcher = ({ theme, onThemeSwitch }) => {
    return (
    <button
        onClick={onThemeSwitch}
        className={`relative inline-flex h-6 w-12 items-center border-2 border-current transition-colors rounded-none
                    ${theme === 'dark' ? 'bg-[#1a1a1a]' : 'bg-[#ae0001]'}`}
    >
        <Moon 
            size={12} 
            className={`absolute left-1 transition-opacity duration-200 stroke-2
                    ${theme === 'dark' ? 'opacity-100 text-[#d3a625]' : 'opacity-100 text-[#f0f0f0]'}`} 
        />
        <Sun 
            size={12} 
            className={`absolute right-1 transition-opacity duration-200 stroke-2
                ${theme === 'dark' ? 'opacity-100 text-[#d3a625]' : 'opacity-100 text-[#f0f0f0]'}`} 
        />
        
        <span
        className={`inline-block h-4 w-4 transform transition-transform rounded-none border border-current
                    ${theme === 'dark' ? 'translate-x-6 bg-[#d3a625]' : 'translate-x-1 bg-[#f0f0f0]'}`}
        />
    </button>
    );
};

export default ThemeSwitcher;