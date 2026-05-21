import GlassCard from "./GlassCard";
import { Mail, Linkedin, Github } from "lucide-react";
import useScrollAnimation from "./useScrollAnimation";

const Contact = ({theme}) => {
    const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3, triggerOnce: false });
    const [descRef, descVisible] = useScrollAnimation({ threshold: 0.3, triggerOnce: false });
    const [cardsRef, cardsVisible] = useScrollAnimation({ threshold: 0.2, triggerOnce: false });

    return(
        <section id="Contact" className="py-20 px-4 border-t-2 border-current">
            <div className="max-w-4xl mx-auto text-center">
                <div 
                    ref={titleRef}
                    className={`mb-8 transition-all duration-1000 ${
                        titleVisible 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-10'
                    }`}
                >
                    <div className="eink-border p-4 inline-block bg-[#f0f0f0] dark:bg-[#1a1a1a]">
                        <h2 className="text-4xl font-black m-0">Connect With Me</h2>
                    </div>
                </div>
                
                <p 
                    ref={descRef}
                    className={`text-sm opacity-70 mb-12 transition-all duration-1000 delay-200 ${
                        descVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                >
                    Ready to collaborate to make the future smarter and more efficient?<br></br>Let's Connect!
                </p>
                
                <div 
                    ref={cardsRef}
                    className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-400 ${
                        cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                    }`}
                >
                        <a href="mailto:ralaqaband@umass.edu" className="block no-underline text-current">
                            <GlassCard theme={theme}>
                                <div className="text-center py-4 flex flex-col items-center justify-center">
                                    <div className="inline-flex items-center justify-center w-14 h-14 mb-6 transition-colors duration-300 border-2 border-current text-current group-hover:text-[#ae0001] group-hover:border-[#ae0001] dark:group-hover:text-[#d3a625] dark:group-hover:border-[#d3a625]">
                                        <Mail size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Email</h3>
                                    <p className="text-xs break-all w-full px-2 opacity-80">
                                        ralaqaband@umass.edu
                                    </p>
                                </div>
                            </GlassCard>
                        </a>

                        <a href="https://linkedin.com/in/razaalaqaband" target="_blank" rel="noopener noreferrer" className="block no-underline text-current">
                            <GlassCard theme={theme}>
                                <div className="text-center py-4 flex flex-col items-center justify-center">
                                    <div className="inline-flex items-center justify-center w-14 h-14 mb-6 transition-colors duration-300 border-2 border-current text-current group-hover:text-[#ae0001] group-hover:border-[#ae0001] dark:group-hover:text-[#d3a625] dark:group-hover:border-[#d3a625]">
                                        <Linkedin size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">LinkedIn</h3>
                                    <p className="text-xs opacity-80">
                                        Raza Alaqaband
                                    </p>
                                </div>
                            </GlassCard>
                        </a>

                        <a href="https://github.com/GeekyMS" target="_blank" rel="noopener noreferrer" className="block no-underline text-current">
                            <GlassCard theme={theme}>
                                <div className="text-center py-4 flex flex-col items-center justify-center">
                                    <div className="inline-flex items-center justify-center w-14 h-14 mb-6 transition-colors duration-300 border-2 border-current text-current group-hover:text-[#ae0001] group-hover:border-[#ae0001] dark:group-hover:text-[#d3a625] dark:group-hover:border-[#d3a625]">
                                        <Github size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">GitHub</h3>
                                    <p className="text-xs opacity-80">
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