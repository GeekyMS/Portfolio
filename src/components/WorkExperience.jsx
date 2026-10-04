import { Link } from 'react-router-dom';
import FlipProjectTile from './FlipProjectTile';
import { experienceWork } from '../content/work';
import useScrollReveal from './useScrollReveal';

const WorkExperience = () => {
    const sectionRef = useScrollReveal();

    return (
        <section ref={sectionRef} id="Experience" className="py-20 px-4 border-t-2 border-current">
            <div className="max-w-6xl mx-auto">
                <div data-reveal className="mb-12">
                    <div className="eink-title">
                        <h2 className="text-4xl font-black m-0">01 / Work Experience</h2>
                    </div>
                </div>

                <div data-reveal-group className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {experienceWork.map((role) => (
                        <FlipProjectTile key={role.slug} {...role} />
                    ))}
                </div>

                <div className="mt-10">
                    <Link
                        to="/experience"
                        className="link-arrow"
                    >
                        ALL EXPERIENCE →
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default WorkExperience;
