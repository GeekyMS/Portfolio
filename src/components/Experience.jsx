import GlassCard from "./GlassCard";
import useScrollAnimation from "./useScrollAnimation";

const Experience = ({theme}) => {
    const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3, triggerOnce: false });
    const [experiencesRef, experiencesVisible] = useScrollAnimation({ threshold: 0.2, triggerOnce: false });
    
    const Experiences = [
        { id: 1, title: 'AI Intern | EOTSS', 
            description: [
                "Building AI & Cloud Infra."
            ],
            date: 'May 2026 - Present | Amherst, MA'},
        { id: 2, title: 'Incoming Undergraduate Course Assistant | CICS UMass', 
            description: [
                "Fostering student learning and academic development within the College of Information and Computer Science through structured instruction and course execution assistance.",
                "Strengthening interpersonal communication, technical leadership, and collaborative skills by working closely with faculty and graduate teaching assistants.",
                "Managing tactical course workflows including objective grading, conducting dynamic laboratory modules, and hosting dedicated office hours to clarify core computational concepts."
            ],
            date: 'Incoming Fall \'26 | Amherst, MA'},
        { id: 3, title: 'Undergraduate Researcher | ML4Ed Lab', 
            description: [
                "Researching LLM degradation under long-context overload, improving pipeline pass rate from 64% to 84% across a 25-paper benchmark via a deterministic validation gate.",
                "Engineered a self-correcting feedback loop where Verifier and Error Analyst agents diagnose failures and inject corrective context, eliminating hallucinated output boundaries.",
                "Identified a novel failure mode where context overload causes models to bypass self-correction entirely, developing targeted interventions for edge-case formats."
            ],
            date: 'September 2025 - Present | Amherst, MA'},
        { id: 4, title: 'Team Leader & Instructor | Tech Know', 
            description: [
                "Led a team of 5 instructors for a city-wide Python educational initiative, advancing accessible learning for 150+ students.",
                "Taught Python fundamentals and advanced topics, including OpenCV, to a cohort of 30+ students."
            ],
            date: 'August 2023 | Srinagar, India'},
    ]
    
    return (
        <section id="Experience" className="py-20 px-4 border-t-2 border-current">
            <div className="max-w-6xl mx-auto">
                <div 
                    ref={titleRef}
                    className={`mb-12 transition-all duration-1000 ${
                        titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                >
                    <div className="eink-border p-4 inline-block bg-[#f0f0f0] dark:bg-[#1a1a1a]">
                        <h2 className="text-4xl font-black m-0">Experience</h2>
                    </div>
                </div>
                
                <div 
                    ref={experiencesRef}
                    className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-1000 delay-300 ${
                        experiencesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                    }`}
                >
                    {Experiences.map(experience => (
                        <GlassCard key={experience.id} theme={theme}>
                            <h3 className="text-2xl font-bold mb-4 text-current transition-colors duration-300 group-hover:text-[#ae0001] dark:group-hover:text-[#d3a625]">
                                {experience.title}
                            </h3>
                            <p className="text-sm opacity-70 mb-4 font-mono">{experience.date}</p>
                            
                            <ul className="list-none mb-4 space-y-2 text-sm opacity-90 font-mono">
                                {experience.description.map((point, idx) => (
                                <li key={idx} className="flex items-start">
                                    <span className="mr-3 font-bold text-current transition-colors duration-300 group-hover:text-[#ae0001] dark:group-hover:text-[#d3a625]">▹</span>
                                    {point}
                                </li>
                                )) }
                            </ul>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Experience;