const Contact = () => {
    return(
        <section id="Contact" className="py-20 px-4">
            <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Connect With Me</h2>
            <p className="text-gray-400 mb-12">
            Ready to collaborate to make the future smarter and more efficient?<br></br>Let's Connect!
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a
                href="mailto:ralaqaband@umass.edu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative block p-8 h-48 bg-gray-900 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 group"
            >
            <div 
                className="absolute inset-0 bg-no-repeat bg-center bg-contain opacity-100 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundImage: "url('/email-image.png')",
                    backgroundSize: "100px",}}
            ></div>
            <div className="relative z-10 flex items-center justify-center h-full">
                <span className="text-2xl font-bold text-white">Email
                <p className="text-sm text-gray-500 mb-4">ralaqaband@umass.edu</p>
                </span>
            </div>

            </a>
            <a
                href="https://www.linkedin.com/in/razaalaqaband" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative block p-8 h-48 bg-gray-900 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 group"
            >
            <div 
                className="absolute inset-0 bg-no-repeat bg-center bg-contain opacity-100 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundImage: "url('/linkedin-logo.png')" }}
            ></div>
            <div className="relative z-10 flex items-center justify-center h-full">
                <span className="text-2xl font-bold text-white">LinkedIn
                <p className="text-sm text-gray-500 mb-4">Raza Alaqaband</p>
                </span>
            </div>
            </a>
            <a
                href="https://github.com/GeekyMS" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative block p-8 h-48 bg-gray-900 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 group"
            >
            <div 
                className="absolute inset-0 bg-no-repeat bg-center bg-contain opacity-100 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundImage: "url('/github-logo.png')" }}
            ></div>
            <div className="relative z-10 flex items-center justify-center h-full">
                <span className="text-2xl font-bold text-white">GitHub
                    <p className="text-sm text-gray-500 mb-4">GeekyMS</p>
                </span>
            </div>

            </a>
            </div>
        </div>
        </section>
    )
}
export default Contact;