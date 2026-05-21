import { useState } from 'react';
import ThemeSwitcher from "./ThemeSwitcher";
import { Menu, X } from 'lucide-react';

const Navbar = ({theme, onThemeSwitch}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { href: "#Home", text: "Home" },
        { href: "#Experience", text: "Experience" },
        { href: "#Projects", text: "Projects" },
        { href: "#About", text: "About" },
        { href: "#Education", text: "Education" },
        { href: "#Contact", text: "Contact" },
    ];

    return (
        <nav className="fixed top-0 w-full bg-[#f0f0f0] dark:bg-[#1a1a1a] border-b-2 border-current z-50 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="text-xl font-black eink-border px-2 py-1">
                        RA
                    </div>

                    <div className="hidden md:flex items-center space-x-8 text-sm font-bold">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="hover:underline underline-offset-4 decoration-2 transition-all no-underline text-current"
                            >
                                {link.text}
                            </a>
                        ))}
                        <ThemeSwitcher theme={theme} onThemeSwitch={onThemeSwitch} />
                    </div>

                    <div className="md:hidden flex items-center">
                        <ThemeSwitcher theme={theme} onThemeSwitch={onThemeSwitch} />
                        <button onClick={toggleMenu} className="ml-4">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-[#f0f0f0] dark:bg-[#1a1a1a] border-b-2 border-current`}>
                {navLinks.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        onClick={toggleMenu}
                        className="block py-4 px-4 text-sm font-bold border-t-2 border-current hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors no-underline text-current"
                    >
                        {link.text}
                    </a>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;