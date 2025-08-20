import GlassCard from "./GlassCard";

const About = ({theme}) => {
    const glowColors = theme === 'dark' ? 'blue' : 'purple';
    return (
        <section id="About" className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-16">About Me & My Skills</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
                
                <GlassCard glowColor={glowColors} rotateDirection="left" theme={theme}>
                        <h3 className="text-2xl font-bold text-purple-600 dark:text-blue-400 mb-6">AI & Machine Learning</h3>
                        <ul className="space-y-4 text-gray-700 dark:text-white">
                            <li className="flex items-center group/item">
                                <span className="w-2 h-2  bg-purple-500 dark:bg-blue-400 rounded-full mr-3 flex-shrink-0 transition-all duration-300 group-hover/item:w-3 group-hover/item:h-3"></span>
                                Python
                            </li>
                            <li className="flex items-center group/item">
                                <span className="w-2 h-2  bg-purple-500 dark:bg-blue-400 rounded-full mr-3 flex-shrink-0 transition-all duration-300 group-hover/item:w-3 group-hover/item:h-3"></span>
                                PyTorch
                            </li>
                            <li className="flex items-center group/item">
                                <span className="w-2 h-2  bg-purple-500 dark:bg-blue-400 rounded-full mr-3 flex-shrink-0 transition-all duration-300 group-hover/item:w-3 group-hover/item:h-3"></span>
                                Scikit-Learn
                            </li>
                            <li className="flex items-center group/item">
                                <span className="w-2 h-2  bg-purple-500 dark:bg-blue-400 rounded-full mr-3 flex-shrink-0 transition-all duration-300 group-hover/item:w-3 group-hover/item:h-3"></span>
                                Pandas
                            </li>
                            <li className="flex items-center group/item">
                                <span className="w-2 h-2  bg-purple-500 dark:bg-blue-400 rounded-full mr-3 flex-shrink-0 transition-all duration-300 group-hover/item:w-3 group-hover/item:h-3"></span>
                                Numpy
                            </li>
                            <li className="flex items-center group/item">
                                <span className="w-2 h-2  bg-purple-500 dark:bg-blue-400 rounded-full mr-3 flex-shrink-0 transition-all duration-300 group-hover/item:w-3 group-hover/item:h-3"></span>
                                OpenCV
                            </li>
                            <li className="flex items-center group/item">
                                <span className="w-2 h-2  bg-purple-500 dark:bg-blue-400 rounded-full mr-3 flex-shrink-0 transition-all duration-300 group-hover/item:w-3 group-hover/item:h-3"></span>
                                Mediapipe
                            </li>
                        </ul>
                    </GlassCard>


                    <GlassCard glowColor={glowColors} rotateDirection="right" theme={theme}>
                        <h3 className="text-2xl font-bold text-purple-600 dark:text-blue-400 mb-6">Full Stack Web Development</h3>
                        <ul className="space-y-4 text-gray-700 dark:text-white">
                            <li className="flex items-center group/item">
                                <span className="w-2 h-2  bg-purple-500 dark:bg-blue-400 rounded-full mr-3 flex-shrink-0 transition-all duration-300 group-hover/item:w-3 group-hover/item:h-3"></span>
                                JavaScript, HTML, CSS
                            </li>
                            <li className="flex items-center group/item">
                                <span className="w-2 h-2  bg-purple-500 dark:bg-blue-400 rounded-full mr-3 flex-shrink-0 transition-all duration-300 group-hover/item:w-3 group-hover/item:h-3"></span>
                                React
                            </li>
                            <li className="flex items-center group/item">
                                <span className="w-2 h-2  bg-purple-500 dark:bg-blue-400 rounded-full mr-3 flex-shrink-0 transition-all duration-300 group-hover/item:w-3 group-hover/item:h-3"></span>
                                Flask
                            </li>
                            <li className="flex items-center group/item">
                                <span className="w-2 h-2  bg-purple-500 dark:bg-blue-400 rounded-full mr-3 flex-shrink-0 transition-all duration-300 group-hover/item:w-3 group-hover/item:h-3"></span>
                                Django
                            </li>
                            <li className="flex items-center group/item">
                                <span className="w-2 h-2  bg-purple-500 dark:bg-blue-400 rounded-full mr-3 flex-shrink-0 transition-all duration-300 group-hover/item:w-3 group-hover/item:h-3"></span>
                                Node.js
                            </li>
                            <li className="flex items-center group/item">
                                <span className="w-2 h-2  bg-purple-500 dark:bg-blue-400 rounded-full mr-3 flex-shrink-0 transition-all duration-300 group-hover/item:w-3 group-hover/item:h-3"></span>
                                Database Management
                            </li>
                            <li className="flex items-center group/item">
                                <span className="w-2 h-2  bg-purple-500 dark:bg-blue-400 rounded-full mr-3 flex-shrink-0 transition-all duration-300 group-hover/item:w-3 group-hover/item:h-3"></span>
                                Modular Design
                            </li>
                        </ul>
                    </GlassCard>

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