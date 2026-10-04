import { Link } from 'react-router-dom';
import FlipProjectTile from './FlipProjectTile';
import { selectedWork } from '../content/work';
import useScrollReveal from './useScrollReveal';

const FeaturedWork = () => {
    const sectionRef = useScrollReveal();

    return (
        <section ref={sectionRef} id="Projects" className="py-20 px-4 border-t-2 border-current">
            <div className="max-w-6xl mx-auto">
                <div data-reveal className="mb-6">
                    <div className="eink-title">
                        <h2 className="text-4xl font-black m-0">02 / Selected Work</h2>
                    </div>
                </div>

                <p data-reveal className="font-mono text-sm opacity-70 mb-12 max-w-2xl">
                    The résumé tells you what I built. Flip a project to see why I built it.
                </p>

                <div data-reveal-group className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {selectedWork.map((project) => (
                        <FlipProjectTile key={project.slug} {...project} />
                    ))}
                </div>

                <div className="mt-10">
                    <Link
                        to="/work"
                        className="link-arrow"
                    >
                        EARLIER WORK →
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedWork;
