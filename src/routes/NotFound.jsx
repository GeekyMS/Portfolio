import { Link } from 'react-router-dom';
import useDocumentTitle from '../components/useDocumentTitle';

const NotFound = () => {
    useDocumentTitle('Page not found');

    return (
        <div className="pt-32 pb-20 px-4">
            <div className="max-w-2xl mx-auto">
                <div className="mb-12">
                    <div className="eink-title">
                        <h1 className="text-4xl font-black m-0">404 / Not Found</h1>
                    </div>
                </div>

                <p className="text-lg leading-relaxed mb-8">
                    That page doesn&apos;t exist, or it moved. The work and the writing are still where they were.
                </p>

                <Link to="/" className="link-arrow">
                    ← BACK HOME
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
