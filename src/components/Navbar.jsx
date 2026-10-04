import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import ThemeSwitcher from "./ThemeSwitcher";
import { Menu, X } from 'lucide-react';

const Navbar = ({theme, onThemeSwitch}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { to: "/experience", text: "Experience" },
        { to: "/work", text: "Work" },
        { to: "/about", text: "About" },
    ];

    return (
        <nav aria-label="Primary" className="fixed top-0 w-full bg-surface border-b-2 border-current z-50 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <Link to="/" className="text-xl font-black eink-border px-2 py-1 select-none no-underline text-current">
                        RA
                    </Link>

                    <div className="hidden md:flex items-center space-x-8 text-sm font-bold font-mono">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                className="hover:underline underline-offset-4 decoration-2 transition-all no-underline text-current hover:text-accent aria-[current=page]:underline"
                            >
                                {link.text}
                            </NavLink>
                        ))}
                        <ThemeSwitcher theme={theme} onThemeSwitch={onThemeSwitch} />
                    </div>

                    <div className="md:hidden flex items-center">
                        <ThemeSwitcher theme={theme} onThemeSwitch={onThemeSwitch} />
                        <button
                            type="button"
                            onClick={toggleMenu}
                            aria-label={isOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={isOpen}
                            aria-controls="mobile-menu"
                            className="ml-4"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            <div id="mobile-menu" className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-surface border-b-2 border-current`}>
                {navLinks.map((link) => (
                    <NavLink
                        key={link.to}
                        to={link.to}
                        onClick={toggleMenu}
                        className="block py-4 px-4 text-sm font-bold font-mono border-t-2 border-current hover:bg-fg/10 transition-colors no-underline text-current hover:text-accent aria-[current=page]:bg-fg/10"
                    >
                        {link.text}
                    </NavLink>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
