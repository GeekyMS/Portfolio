const Projects = () => {
    
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
    
    return (
        <section id="Projects" className="py-20 px-4">
            <div className="max-w-8xl mx-auto ">
                <h2 className="text-4xl font-bold text-center mb-12">
                    Featured Projects
                </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-20">
                        {projects.map(project => (
                            <div key={project.id} className="flex-shrink-0 bg-gray-800 rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-105 hover:-translate-y-2">
                                <div className="p-6 flex flex-col h-full">
                                    <div className="flex-grow">
                                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                                    <p className="text-sm text-gray-500 mb-4">{project.date}</p>
                                    <p className="text-gray-400 mb-4">
                                    {Array.isArray(project.description) ? (
                                    <ul className="list-disc list-inside text-gray-400 mb-4 space-y-2">
                                        {project.description.map((point, idx) => (
                                        <li key={idx}>{point}</li>
                                        ))}
                                    </ul>
                                    ) : (
                                    <p className="text-gray-400 mb-4">{project.description}</p>
                                    )}
                                    </p>
                                    </div>
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-300 transition-colors self-start">View on Github</a>
                                </div>
                            </div>
                        ))}
                    </div>
            </div>
        </section>
    )
}
export default Projects;