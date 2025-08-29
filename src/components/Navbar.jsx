import { useState } from 'react';
import ThemeSwitcher from "./ThemeSwitcher";
import { Menu, X } from 'lucide-react';

const Navbar = ({theme, onThemeSwitch}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navLinks = [
        { href: "#Home", text: "Home" },
        { href: "#Experience", text: "Experience" },
        { href: "#Projects", text: "Projects" },
        { href: "#About", text: "About" },
        { href: "#Education", text: "Education" },
        { href: "#Contact", text: "Contact" },
    ];

    return (
        <nav className="fixed top-0 w-full bg-white/80 dark:bg-black/80 backdrop-blur-md z-50">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="text-purple-600 dark:text-white text-xl font-bold">
                        RA
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="dark:text-gray-300 dark:hover:text-white text-purple-600 hover:text-purple-500 transition-colors no-underline"
                            >
                                {link.text}
                            </a>
                        ))}
                        <ThemeSwitcher theme={theme} onThemeSwitch={onThemeSwitch} />
                    </div>

                    <div className="md:hidden flex items-center">
                        <ThemeSwitcher theme={theme} onThemeSwitch={onThemeSwitch} />
                        <button onClick={toggleMenu} className="ml-4 text-gray-800 dark:text-gray-200">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white dark:bg-black/90`}>
                {navLinks.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        onClick={toggleMenu}
                        className="block py-2 px-4 text-sm dark:text-gray-300 dark:hover:text-white text-purple-600 hover:text-purple-500 transition-colors no-underline"
                    >
                        {link.text}
                    </a>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;