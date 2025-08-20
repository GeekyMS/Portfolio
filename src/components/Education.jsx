import GlassCard from "./GlassCard";
const Education = ({theme}) => {
    const glowColor = theme === 'dark' ? 'blue' : 'purple';
    return(
        <section id="Education" className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-16">Education</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <GlassCard glowColor={glowColor} rotateDirection="left" theme={theme}>
                        <h3 className="text-2xl font-bold text-purple-500 dark:text-blue-400 mb-4">University of Massachusetts Amherst</h3>
                        <div className="mb-6">
                            <p className="text-lg font-semibold text-gray-700 dark:text-white mb-2">Honors Bachelor of Science in Computer Science</p>
                            <p className="text-green-400 text-right font-bold">GPA: 4.0/4.0</p>
                        </div>
                        
                        <div className="text-gray-700 dark:text-white">
                            <p className="font-semibold mb-3">Relevant Coursework:</p>
                            <ul className="space-y-2">
                                <li className="flex items-center group/item">
                                    <span className="w-2 h-2 bg-purple-500 dark:bg-blue-400 rounded-full mr-3 flex-shrink-0 transition-all duration-300 group-hover/item:w-3 group-hover/item:h-3"></span>
                                    Object Oriented Programming
                                </li>
                                <li className="flex items-center group/item">
                                    <span className="w-2 h-2 bg-purple-500 dark:bg-blue-400 rounded-full mr-3 flex-shrink-0 transition-all duration-300 group-hover/item:w-3 group-hover/item:h-3"></span>
                                    Calculus I & II
                                </li>
                                <li className="flex items-center group/item">
                                    <span className="w-2 h-2 bg-purple-500 dark:bg-blue-400 rounded-full mr-3 flex-shrink-0 transition-all duration-300 group-hover/item:w-3 group-hover/item:h-3"></span>
                                    Linear Algebra
                                </li>
                            </ul>
                        </div>
                    </GlassCard>
                    <GlassCard glowColor="green" rotateDirection="right" theme={theme}>
                        <h3 className="text-2xl font-bold text-green-400 mb-6">Honors & Awards</h3>
                        <ul className="space-y-4 text-gray-700 dark:text-white">
                            <li className="flex items-center group/item">
                                <span className="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0 transition-all duration-300 group-hover/item:w-3 group-hover/item:h-3"></span>
                                Dean's List - All Semesters
                            </li>
                            <li className="flex items-center group/item">
                                <span className="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0 transition-all duration-300 group-hover/item:w-3 group-hover/item:h-3"></span>
                                Hack(H)er 413 Winner
                            </li>
                            <li className="flex items-center group/item">
                                <span className="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0 transition-all duration-300 group-hover/item:w-3 group-hover/item:h-3"></span>
                                Chancellor's Awardee
                            </li>
                            <li className="flex items-center group/item">
                                <span className="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0 transition-all duration-300 group-hover/item:w-3 group-hover/item:h-3"></span>
                                JEE Mains 99.46 Percentile
                            </li>
                            <li className="flex items-center group/item">
                                <span className="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0 transition-all duration-300 group-hover/item:w-3 group-hover/item:h-3"></span>
                                Top 5% JEE Advanced
                            </li>
                        </ul>
                    </GlassCard>
                </div>
            </div>
        </section>
    )
}
export default Education;