import { Link } from 'react-router-dom';
import useDocumentTitle from '../components/useDocumentTitle';
import FlipProjectTile from '../components/FlipProjectTile';
import { experienceWork } from '../content/work';

const Experience = () => {
    useDocumentTitle('Work Experience');
    return (
        <div className="pt-32 pb-20 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="mb-12">
                    <div className="eink-title">
                        <h1 className="text-4xl font-black m-0">Work Experience</h1>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {experienceWork.map((role) => (
                        <FlipProjectTile key={role.slug} {...role} />
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

export default Experience;
