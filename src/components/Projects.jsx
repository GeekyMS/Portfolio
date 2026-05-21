import GlassCard from "./GlassCard";
import { ArrowUpRight } from 'lucide-react';
import useScrollAnimation from "./useScrollAnimation";

const Projects = ({theme}) => {
    const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3, triggerOnce: false });
    const [projectsRef, projectsVisible] = useScrollAnimation({ threshold: 0.2, triggerOnce: false });
    
    const projects = [
        { id: 1, title: 'DataVault', 
            description: [
                "Won HackUMass XIII by building a privacy-preserving pipeline enabling natural-language querying over AES-256 encrypted data.",
                "Implemented PII anonymization and ethical-AI guardrails preventing raw-data exposure.",
                "Engineered a secure ingestion and storage architecture using custom gRPC connectors and a zero-memory database.",
                "Deployed a Dockerized CI/CD pipeline on Vultr Cloud for reliable, reproducible cloud execution."
            ],
            date: 'November 2025 | Winner, HackUMass XIII', githubUrl: 'https://github.com/P-Bhanu-Sohan/DataVault' },
        { id: 2, title: 'Project Sentinel', 
            description: [
                "Achieved 98.7% recall and 95.9% accuracy in real-time network intrusion detection by training and tuning an XGBoost classifier on the CICIDS2017 dataset.",
                "Integrated OpenAI's API to automatically translate raw network attack data into actionable, human-readable security reports.",
                "Developed a full-stack interface with a Flask backend and dynamic React dashboard for real-time visualization of network threats."
            ],
            date: 'June 2025 - August 2025', githubUrl: 'https://github.com/GeekyMS/Autonomous-AI-Cybersecurity-Agent.git' },
    ]
    
    return (
        <section id="Projects" className="py-20 px-4 border-t-2 border-current">
            <div className="max-w-6xl mx-auto">
                <div 
                    ref={titleRef}
                    className={`mb-12 transition-all duration-1000 ${
                        titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                >
                    <div className="eink-border p-4 inline-block bg-[#f0f0f0] dark:bg-[#1a1a1a]">
                        <h2 className="text-4xl font-black m-0">Featured Operations</h2>
                    </div>
                </div>
                
                <div 
                    ref={projectsRef}
                    className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-1000 delay-300 ${
                        projectsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                    }`}
                >
                    {projects.map(project => (
                        <GlassCard key={project.id} theme={theme}>
                            <a 
                                href={project.githubUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="absolute top-4 right-4 z-20 transition-all duration-300 hover:-translate-y-1 hover:translate-x-1"
                                aria-label={`View ${project.title} on GitHub`}
                            >
                                <ArrowUpRight size={28} className="text-current transition-colors duration-300 group-hover:text-[#ae0001] dark:group-hover:text-[#d3a625]" />
                            </a>
                            <h3 className="text-2xl font-bold mb-4 text-current transition-colors duration-300 group-hover:text-[#ae0001] dark:group-hover:text-[#d3a625]">
                                {project.title}
                            </h3>
                            <p className="text-sm opacity-70 mb-4 font-mono">{project.date}</p>
                            
                            <ul className="list-none mb-4 space-y-2 text-sm opacity-90 font-mono">
                                {project.description.map((point, idx) => (
                                <li key={idx} className="flex items-start">
                                    <span className="mr-3 font-bold text-current transition-colors duration-300 group-hover:text-[#ae0001] dark:group-hover:text-[#d3a625]">▹</span>
                                    {point}
                                </li>
                                ))}
                            </ul>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Projects;