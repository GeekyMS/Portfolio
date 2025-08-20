import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = ({theme, onThemeSwitch}) => {
    return (
        <nav className = "fixed top-0 w-full bg-white dark:bg-black/90 backdrop-blur-mid z-50">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="text-purple-600 dark:text-white text-xl font-bold">
                        RA
                    </div>

                    <div className="hidden md:flex space-x-8">
                    <a href="#Home" className="dark:text-gray-300 dark:hover:text-white text-purple-600 hover:text-purple-500 transition-colors no-underline">
                    Home
                    </a>
                    <a href="#Projects" className="dark:text-gray-300 dark:hover:text-white text-purple-600 hover:text-purple-500 transition-colors no-underline">
                    Projects
                    </a>
                    <a href="#About" className="dark:text-gray-300 dark:hover:text-white text-purple-600 hover:text-purple-500 transition-colors no-underline">
                    About
                    </a>
                    <a href="#Education" className="dark:text-gray-300 dark:hover:text-white text-purple-600 hover:text-purple-500 transition-colors no-underline">
                    Education
                    </a>
                    <a href="#Contact" className="dark:text-gray-300 dark:hover:text-white text-purple-600 hover:text-purple-500 transition-colors no-underline">
                    Contact
                    </a>
                    <ThemeSwitcher theme={theme} onThemeSwitch={onThemeSwitch} />
                    </div>
                    
                </div>
            </div>
        </nav>
    )
}

export default Navbar;