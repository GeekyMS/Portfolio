import { Link } from 'react-router-dom';
import useDocumentTitle from '../components/useDocumentTitle';
import { ArrowUpRight } from 'lucide-react';
import FlipProjectTile from '../components/FlipProjectTile';
import { selectedWork, archiveWork } from '../content/work';

const Work = () => {
    useDocumentTitle('Work');
    return (
        <div className="pt-32 pb-20 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="mb-12">
                    <div className="eink-title">
                        <h1 className="text-4xl font-black m-0">Work</h1>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    {selectedWork.map((project) => (
                        <FlipProjectTile key={project.slug} {...project} />
                    ))}
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-black">Earlier Work</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {archiveWork.map((project) => (
                        <div key={project.slug} className="eink-border p-6 flex flex-col gap-2">
                            <div className="flex items-start justify-between">
                                <div>
                                    <p className="font-mono text-xs opacity-60 mb-1">{project.year}</p>
                                    <h3 className="text-xl font-bold">{project.title}</h3>
                                </div>
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`View ${project.title} on GitHub`}
                                    className="text-current hover:text-accent"
                                >
                                    <ArrowUpRight size={22} />
                                </a>
                            </div>
                            <p className="font-mono text-sm opacity-80">{project.summary}</p>
                            {project.why && (
                                <p className="font-mono text-xs opacity-60 mt-2 italic">
                                    {project.why.question}
                                </p>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-12">
                    <Link
                        to="/"
                        className="link-arrow"
                    >
                        ← BACK HOME
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Work;
