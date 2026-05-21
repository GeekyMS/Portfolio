import GlassCard from "./GlassCard";
import useScrollAnimation from "./useScrollAnimation";

const Education = ({theme}) => {
    const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3, triggerOnce: false });
    const [card1Ref, card1Visible] = useScrollAnimation({ threshold: 0.3, triggerOnce: false });
    const [card2Ref, card2Visible] = useScrollAnimation({ threshold: 0.3, triggerOnce: false });

    return(
        <section id="Education" className="py-20 px-4 border-t-2 border-current">
            <div className="max-w-4xl mx-auto">
                <div 
                    ref={titleRef}
                    className={`mb-16 transition-all duration-1000 ${
                        titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                >
                    <div className="eink-border p-4 inline-block bg-[#f0f0f0] dark:bg-[#1a1a1a]">
                        <h2 className="text-4xl font-black m-0">Education</h2>
                    </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div 
                        ref={card1Ref}
                        className={`transition-all duration-1000 transform ${
                            card1Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                    >
                        <GlassCard theme={theme}>
                            <h3 className="text-2xl font-bold mb-4 text-current transition-colors duration-300 group-hover:text-[#ae0001] dark:group-hover:text-[#d3a625]">
                                University of Massachusetts Amherst
                            </h3>
                            <div className="mb-6 font-mono">
                                <p className="text-lg font-bold mb-2">B.S. in Computer Science</p>
                                <p className="text-current transition-colors duration-300 group-hover:text-[#ae0001] dark:group-hover:text-[#d3a625] font-bold">GPA: 4.0/4.0</p>
                            </div>
                            
                            <div className="text-sm opacity-90 font-mono">
                                <p className="font-bold mb-3">Relevant Coursework:</p>
                                <ul className="space-y-2">
                                    {['Object Oriented Programming', 'Data Structures', 'Probability Theory', 'Calculus I, II & III', 'Linear Algebra'].map((course, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <span className="w-2 h-2 bg-current mr-3 mt-1.5 flex-shrink-0 rounded-none transition-colors duration-300 group-hover:bg-[#ae0001] dark:group-hover:bg-[#d3a625]"></span>
                                        {course}
                                    </li>
                                    ))}
                                </ul>
                            </div>
                        </GlassCard>
                    </div>
                    
                    <div 
                        ref={card2Ref}
                        className={`transition-all duration-1000 delay-200 transform ${
                            card2Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                    >
                        <GlassCard theme={theme}>
                            <h3 className="text-2xl font-bold mb-6 text-current transition-colors duration-300 group-hover:text-[#ae0001] dark:group-hover:text-[#d3a625]">
                                Honors & Awards
                            </h3>
                            <ul className="space-y-4 text-sm opacity-90 font-mono">
                                {["Dean's List Honors", "$64,000 Chancellor's Award", "HackUMass XIII Winner", 'Hack(H)er 413 Winner', 'JEE Mains 99.46 Percentile', 'Top 5% JEE Advanced'].map((award, idx) => (
                                <li key={idx} className="flex items-start">
                                    <span className="w-2 h-2 bg-current mr-3 mt-1.5 flex-shrink-0 rounded-none transition-colors duration-300 group-hover:bg-[#ae0001] dark:group-hover:text-[#d3a625] group-hover:bg-[#ae0001] dark:group-hover:bg-[#d3a625]"></span>
                                    {award}
                                </li>
                                ))}
                            </ul>
                        </GlassCard>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Education;