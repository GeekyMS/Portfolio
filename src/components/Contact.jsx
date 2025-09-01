import GlassCard from "./GlassCard";
import { Mail, Linkedin, Github } from "lucide-react";
import useScrollAnimation from "./useScrollAnimation";

const Contact = ({theme}) => {
    const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3, triggerOnce: false });
    const [descRef, descVisible] = useScrollAnimation({ threshold: 0.3, triggerOnce: false });
    const [cardsRef, cardsVisible] = useScrollAnimation({ threshold: 0.2, triggerOnce: false });

    return(
        <section id="Contact" className="py-20 px-4">
            <div className="max-w-2xl mx-auto text-center">
                <h2 
                    ref={titleRef}
                    className={`text-4xl font-bold mb-8 transition-all duration-1000 ${
                        titleVisible 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-10'
                    }`}
                >
                    Connect With Me
                </h2>
                
                <p 
                    ref={descRef}
                    className={`text-gray-400 mb-12 transition-all duration-1000 delay-200 ${
                        descVisible 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-10'
                    }`}
                >
                    Ready to collaborate to make the future smarter and more efficient?<br></br>Let's Connect!
                </p>
                
                <div 
                    ref={cardsRef}
                    className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-400 ${
                        cardsVisible 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-20'
                    }`}
                >
                        <a 
                            href="mailto:ralaqaband@umass.edu"
                            className="block"
                        >
                            <GlassCard 
                                glowColor="green" 
                                rotateDirection="left" 
                                theme={theme}
                                className="cursor-pointer hover:scale-105 transition-transform duration-300"
                            >
                                <div className="text-center py-8">
                                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 transition-all duration-300
                                            ${theme === 'dark' 
                                            ? 'bg-green-500/20 text-green-400' 
                                            : 'bg-green-500/10 text-green-600'  
                                        }`}>
                                        <Mail size={32} />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                                        Email
                                    </h3>
                                    <p className="text-sm text-gray-800 dark:text-white">
                                        ralaqaband@umass.edu
                                    </p>
                                </div>
                            </GlassCard>
                        </a>

                        <a 
                            href="https://linkedin.com/in/razaalaqaband"
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="block"
                        >
                            <GlassCard 
                                glowColor="blue" 
                                rotateDirection="right" 
                                theme={theme}
                                className="cursor-pointer hover:scale-105 transition-transform duration-300"
                            >
                                <div className="text-center py-8">
                                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 transition-all duration-300
                                        ${theme === 'dark' 
                                            ? 'bg-blue-500/20 text-blue-400' 
                                            : 'bg-blue-500/10 text-blue-600'
                                        }`}>
                                        <Linkedin size={32} />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                                        LinkedIn
                                    </h3>
                                    <p className="text-sm text-gray-800 dark:text-white">
                                        Raza Alaqaband
                                    </p>
                                </div>
                            </GlassCard>
                        </a>

                        <a 
                            href="https://github.com/GeekyMS"
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="block"
                        >
                            <GlassCard 
                                glowColor="purple" 
                                rotateDirection="left" 
                                theme={theme}
                                className="cursor-pointer hover:scale-105 transition-transform duration-300"
                            >
                                <div className="text-center py-8">
                                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 transition-all duration-300
                                        ${theme === 'dark' 
                                            ? 'bg-purple-500/20 text-purple-400' 
                                            : 'bg-purple-500/10 text-purple-600'
                                        }`}>
                                        <Github size={32} />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                                        GitHub
                                    </h3>
                                    <p className="text-sm text-gray-800 dark:text-white">
                                        GeekyMS
                                    </p>
                                </div>
                            </GlassCard>
                        </a>
                    </div>
            </div>
        </section>
    )
}
export default Contact;