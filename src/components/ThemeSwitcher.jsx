import { Moon, Sun } from 'lucide-react';

const ThemeSwitcher = ({ theme, onThemeSwitch }) => {
    return (
    <button
        type="button"
        role="switch"
        aria-checked={theme === 'dark'}
        aria-label="Dark mode"
        onClick={onThemeSwitch}
        className={`relative inline-flex h-6 w-12 items-center border-2 border-current transition-colors rounded-none
                    ${theme === 'dark' ? 'bg-ink' : 'bg-crimson'}`}
    >
        <Moon 
            size={12} 
            className={`absolute left-1 transition-opacity duration-200 stroke-2
                    ${theme === 'dark' ? 'opacity-100 text-gold' : 'opacity-100 text-paper'}`} 
        />
        <Sun 
            size={12} 
            className={`absolute right-1 transition-opacity duration-200 stroke-2
                ${theme === 'dark' ? 'opacity-100 text-gold' : 'opacity-100 text-paper'}`} 
        />
        
        <span
        className={`inline-block h-4 w-4 transform transition-transform rounded-none border border-current
                    ${theme === 'dark' ? 'translate-x-6 bg-gold' : 'translate-x-1 bg-paper'}`}
        />
    </button>
    );
};

export default ThemeSwitcher;