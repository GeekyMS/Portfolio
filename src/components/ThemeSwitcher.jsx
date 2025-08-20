import { Moon, Sun } from 'lucide-react';

const ThemeSwitcher = ({ theme, onThemeSwitch }) => {
    return (
    <button
        onClick={onThemeSwitch}
        className={`relative inline-flex h-4.5 w-8 items-center rounded-full transition-colors
                    ${theme === 'dark' ? 'bg-gray-700' : 'bg-purple-600'}`}
    >
        <Moon 
            size={10} 
            className={`absolute left-1 transition-opacity duration-200 stroke-2
                    ${theme === 'dark' ? 'opacity-100 text-gray-300' : 'opacity-100 text-white'}`} 
        />
        <Sun 
            size={10} 
            className={`absolute right-1 transition-opacity duration-200 stroke-2
                ${theme === 'dark' ? 'opacity-100 text-gray-300' : 'opacity-100 text-white'}`} 
        />
        
        <span
        className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform
                    ${theme === 'dark' ? 'translate-x-4.5' : 'translate-x-0.5'}`}
        />
    </button>
    );
};

export default ThemeSwitcher;