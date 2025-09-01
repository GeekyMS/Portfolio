import GlassCard from "./GlassCard";
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import useScrollAnimation from "./useScrollAnimation";

const Projects = ({theme}) => {
    const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3, triggerOnce: false });
    const [projectsRef, projectsVisible] = useScrollAnimation({ threshold: 0.2, triggerOnce: false });
    
    const projects = [
        { id: 1, title: 'Project Sentinel', 
            description: [
        "Developed and deployed a full-stack, autonomous cybersecurity platform capable of real-time threat monitoring and AI-driven analysis.",
        "Trained an XGBoost machine learning model to classify malicious network traffic, achieving 95.9% accuracy and 98.7% recall on test data.",
        "Integrated LLMs (via OpenAI API) to generate human-readable reports that explain attack types, compare classifier confidence, and provide actionable security insights.",
        "Built a React-based dashboard with real-time visualizations of network anomalies, color-coded by severity for intuitive monitoring.",
        "Designed a modular Flask backend that streams ML and LLM outputs seamlessly to the frontend.",
        "Delivered a fully operational system demonstrating end-to-end capability—from packet sniffing to threat explanation and visualization."],
            date: 'June 2025 - August 2025', githubUrl: 'https://github.com/GeekyMS/Autonomous-AI-Cybersecurity-Agent.git' },
        { id: 2, title: 'PennyWise ', description: [`Built a financial management platform enabling students to track expenses, loans, and savings through interactive dashboards.`,
        `Engineered a scalable Django backend with relational data models and implemented advanced SQL queries for efficient data handling.`,
        `Designed the front-end in HTML, CSS, and JavaScript with a focus on usability, accessibility, and clear financial visualization.`,
        `Worked with a team to deliver a functional prototype within a 24-hour hackathon; awarded Best Beginner Hack for innovation, usability, and technical execution.`
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
                        ? 'opacity-100 translate-x-0 md:translate-y-0' 
                        : 'opacity-0 -translate-x-8 md:translate-x-0 md:translate-y-10'
                    }`}
                >
                    Featured Projects
                </h2>
                
                <div 
                    ref={projectsRef}
                    className={`grid grid-cols-1 md:grid-cols-2 gap-8 p-4 sm:p-20 transition-all duration-1000 delay-300 ${
                        projectsVisible 
                        ? 'opacity-100 translate-x-0 md:translate-y-0' 
                        : 'opacity-0 translate-x-8 md:translate-x-0 md:translate-y-20'
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
                                    <li key={idx} className="flex items-start group/item">
                                    <span className="w-2 h-2  bg-purple-500 dark:bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0 transition-all duration-300 group-hover/item:w-3 group-hover/item:h-3"></span>
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