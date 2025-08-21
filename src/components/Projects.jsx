import GlassCard from "./GlassCard";
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import useScrollAnimation from "./useScrollAnimation";

const Projects = ({theme}) => {
    const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3 });
    const [projectsRef, projectsVisible] = useScrollAnimation({ threshold: 0.2 });
    
    const projects = [
        { id: 1, title: 'AI-Powered Autonomous Cybersecurity Agent', 
            description: [
        "Building an AI agent that monitors live network traffic, detects anomalies using a trained ML model, and explains threats via GPT-4",
        "Extracting real-time packet features with Scapy and classifying threats using scikit-learn",
        "Integrating OpenAI's API to generate human-readable summaries of detected threats",
        "Logging flagged activity and LLM interpretations for auditability and future response automation",
        "Designing a modular, scalable software pipeline that integrates machine learning with real-time data stream processing"],
            date: 'June 2025 - August 2025', githubUrl: 'https://github.com/GeekyMS/Autonomous-AI-Cybersecurity-Agent.git' },
        { id: 2, title: 'PennyWise ', description: [`Awarded "Best Beginner Hack" at UMass Amherst's 24-hour Hack(H)er413 for a smart financial management
        platform aimed at helping students manage their finances.`,
        `Architected and implemented a modular and scalable full-stack web application using HTML, CSS, and
        JavaScript (frontend) and Python with Django (backend), delivering a seamless user experience.`,
        `Collaborated closely with a team to integrate diverse tools under tight deadlines, ensuring system stability and
        consistent performance across all components.`
        ],
            date: 'February 2025', githubUrl: 'https://github.com/GeekyMS/PennyWise-Hackher413.git' },
    ]
    
    const glowColors = theme === 'dark' ? 'blue' : 'purple';
    
    return (
        <section id="Projects" className="py-20 px-4">
            <div className="max-w-8xl mx-auto">
                <h2 
                    ref={titleRef}
                    className={`text-4xl font-bold text-center mb-12 transition-all duration-1000 ${
                        titleVisible 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-10'
                    }`}
                >
                    Featured Projects
                </h2>
                
                <div 
                    ref={projectsRef}
                    className={`grid grid-cols-1 md:grid-cols-2 gap-8 p-20 transition-all duration-1000 delay-300 ${
                        projectsVisible 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-20'
                    }`}
                >
                    {projects.map(project => (
                        <GlassCard key={project.id} glowColor={glowColors} rotateDirection={project.id == 1 ? 'left' : 'right'} theme={theme}>
                            <a 
                                href={project.githubUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="absolute top-4 right-4 z-20 opacity-100 group-hover/card:opacity-100 transition-all duration-300 transform translate-y-1 group-hover/card:translate-y-0"
                                aria-label={`View ${project.title} on GitHub`}
                            >
                                <div>
                                    <ArrowUpRight size={18} color={glowColors == 'blue' ? '#42a5f5' : '#9C27B0'}/>
                                </div>
                            </a>
                            <h3 className="text-2xl font-bold text-purple-500 dark:text-blue-400 mb-6">{project.title}</h3>
                            <p className="text-sm text-gray-700 dark:text-gray-300">{project.date}</p>
                            {Array.isArray(project.description) ? (
                                <ul className="list-disc list-inside text-gray-700 dark:text-white mb-4 space-y-2">
                                    {project.description.map((point, idx) => (
                                    <li key={idx} className="flex items-center group/item">
                                    <span className="w-2 h-2  bg-purple-500 dark:bg-blue-400 rounded-full mr-3 flex-shrink-0 transition-all duration-300 group-hover/item:w-3 group-hover/item:h-3"></span>
                                    {point}</li>
                                    ))}
                                </ul>
                                ) : (
                                <p className="text-gray-400 mb-4">{project.description}</p>
                                )}
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Projects;