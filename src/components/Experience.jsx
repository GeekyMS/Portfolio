import GlassCard from "./GlassCard";
import useScrollAnimation from "./useScrollAnimation";

const Experience = ({theme}) => {
    const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3, triggerOnce: false });
    const [experiencesRef, projectsVisible] = useScrollAnimation({ threshold: 0.2, triggerOnce: false });
    
    const Experiences = [
        { id: 1, title: 'Undergraduate Researcher - ML4ED Lab UMass', 
            description: [
        `Engineering a Retrieval-Augmented Generation (RAG) system that uses vector databases and transformer LLMs to 
        automate the creation of "Related Works" sections for academic papers`,
        "Designing and implementing a novel benchmarking pipeline with custom metrics to rigorously evaluate model outputs for factual grounding, hallucination rates, and semantic alignment",
        `Contributing to a research platform that is projecting a 10-15% reduction in factual hallucinations compared to baseline LLMs 
        and is projected to increase overall research throughput by over 10%`],
            date: 'September 2025 - Present'},
        { id: 2, title: 'Orientation Leader', 
            description: [
        `Contributed to the successful execution of a university-wide orientation for over 8,800 students and families through
        direct support and logistical assistance.`,
        "Drove digital outreach by managing a social media strategy that generated over 15,500 views.",
        `Mentored new students by leading small-group discussions and guiding them to college-specific resources to ensure
        a successful academic and social transition.`,
        `Served as a student panelist during Q&A sessions, addressing parent concerns and providing firsthand information
        about the university experience.`],
            date: 'May 2025 - August 2025'},
    ]
    
    const glowColors = theme === 'dark' ? 'blue' : 'purple';
    
    return (
        <section id="Experience" className="py-20 px-4">
            <div className="max-w-8xl mx-auto">
                <h2 
                    ref={titleRef}
                    className={`text-4xl font-bold text-center mb-12 transition-all duration-1000 ${
                        titleVisible 
                        ? 'opacity-100 translate-x-0 md:translate-y-0' 
                        : 'opacity-0 -translate-x-8 md:translate-x-0 md:translate-y-10'
                    }`}
                >
                    Experience
                </h2>
                
                <div 
                    ref={experiencesRef}
                    className={`grid grid-cols-1 md:grid-cols-2 gap-8 p-4 sm:p-20 transition-all duration-1000 delay-300 ${
                        projectsVisible 
                        ? 'opacity-100 translate-x-0 md:translate-y-0' 
                        : 'opacity-0 translate-x-8 md:translate-x-0 md:translate-y-20'
                    }`}
                >
                    {Experiences.map(experience => (
                        <GlassCard key={experience.id} glowColor={glowColors} rotateDirection={experience.id == 1 ? 'left' : 'right'} theme={theme}>
                            <h3 className="text-2xl font-bold text-purple-500 dark:text-blue-400 mb-6">{experience.title}</h3>
                            <p className="text-sm text-gray-700 dark:text-gray-300">{experience.date}</p>
                            {Array.isArray(experience.description) ? (
                                <ul className="list-disc list-inside text-gray-700 dark:text-white mb-4 space-y-2">
                                    {experience.description.map((point, idx) => (
                                    <li key={idx} className="flex items-start group/item">
                                    <span className="w-2 h-2  bg-purple-500 dark:bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0 transition-all duration-300 group-hover/item:w-3 group-hover/item:h-3"></span>
                                    {point}</li>
                                    ))}
                                </ul>
                                ) : (
                                <p className="text-gray-400 mb-4">{experience.description}</p>
                                )}
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Experience;