const About = () => {
    return (
        <section id="About" className="py-20 px-4 bg-gray-900">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-16">About Me & My Skills</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
                
                <div className="bg-gray-800 p-6 rounded-lg flex flex-col transition-transform duration-300 hover:scale-105 hover:-translate-y-2">
                    <h3 className="text-2xl font-bold text-blue-400 mb-4 text-center">AI & Machine Learning</h3>
                    <div className="flex-grow">
                    <ul className="space-y-2 text-gray-300">
                        <li>Python</li>
                        <li>PyTorch</li>
                        <li>Scikit-learn</li>
                        <li>Pandas</li>
                        <li>NumPy</li>
                        <li>OpenCV</li>
                        <li>Mediapipe</li>
                    </ul>
                    </div>
                </div>


                <div className="bg-gray-800 p-6 rounded-lg flex flex-col transition-transform duration-300 hover:scale-105 hover:-translate-y-2">
                    <h3 className="text-2xl font-bold text-blue-400 mb-4 text-center">Full-Stack Web Development</h3>
                    <div className="flex-grow">
                    <ul className="space-y-2 text-gray-300">
                        <li>JavaScript, HTML, CSS</li>
                        <li>React</li>
                        <li>Flask</li>
                        <li>Django</li>
                        <li>Node.js</li>
                        <li>Database Management</li>
                        <li>Modular Design</li>
                    </ul>
                    </div>
                </div>

                <div className="mt-16 text-center w-full">
                <h3 className="text-2xl font-bold text-center justify-center mb-8">Core Technologies</h3>
                <div className="flex flex-wrap justify-center items-center gap-8">
                    
                    <div 
                    className="w-10 h-16 bg-contain bg-no-repeat bg-center opacity-100 animate-float"
                    style={{ backgroundImage: "url('/python.png')" }}
                    ></div>

                    <div 
                    className="w-10 h-16 bg-contain bg-no-repeat bg-center opacity-100 animate-float"
                    style={{ backgroundImage: "url('/C.png')", animationDelay: '0.2s' }}
                    ></div>

                    <div 
                    className="w-10 h-16 bg-contain bg-no-repeat bg-center opacity-100 animate-float"
                    style={{ backgroundImage: "url('/cpp.png')", animationDelay: '0.4s' }}
                    ></div>

                    <div 
                    className="w-10 h-18 bg-contain bg-no-repeat bg-center opacity-100 animate-float"
                    style={{ backgroundImage: "url('/javascript.png')", animationDelay: '0.6s' }}
                    ></div>

                    <div 
                    className="w-10 h-20 bg-contain bg-no-repeat bg-center opacity-100 animate-float"
                    style={{ backgroundImage: "url('/html.png')", animationDelay: '0.8s' }}
                    ></div>
                    
                    <div 
                    className="w-10 h-12 bg-contain bg-no-repeat bg-center opacity-100 animate-float"
                    style={{ backgroundImage: "url('/css.png')", animationDelay: '1.0s' }}
                    ></div>

                </div>
                </div>

                </div>
            </div>
            </section>
    )
}
export default About;