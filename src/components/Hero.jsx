const Hero = () => {
    return(
        <section id="Home" className="min-h-screen flex items-center justify-center px-4">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                    Hi, I'm <span className="text-blue-400">Raza</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 md-8 leading-relaxed">
                    Full-Stack AI/ML Developer and CyberSecurity Analyst
                </p>
                <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
                    I create modern AI/ML applications that solve real-world problems.<br/>
                    Passionate about clean code, user experience, and cutting-edge technology.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#Projects" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                    My Work
                </a>
                <a href="#Contact" className="border border-gray-600 hover:border-gray-400 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                    Let's Connect
                </a>
        </div>
            </div>
        </section>
    )
}

export default Hero;