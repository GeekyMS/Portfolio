const Navbar = () => {
    return (
        <nav className = "fixed top-0 w-full bg-gray-900/90 backdrop-blur-mid z-50">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="text-white text-xl font-bold">
                        RA
                    </div>

                    <div className="hidden md:flex space-x-8">
                    <a href="#Home" className="text-gray-300 hover:text-white transition-colors no-underline">
                    Home
                    </a>
                    <a href="#Projects" className="text-gray-300 hover:text-white transition-colors no-underline">
                    Projects
                    </a>
                    <a href="#About" className="text-gray-300 hover:text-white transition-colors no-underline">
                    About
                    </a>
                    <a href="#Education" className="text-gray-300 hover:text-white transition-colors no-underline">
                    Education
                    </a>
                    <a href="#Contact" className="text-gray-300 hover:text-white transition-colors no-underline">
                    Contact
                    </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;