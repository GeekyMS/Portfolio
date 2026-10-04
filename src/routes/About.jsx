import { Link } from 'react-router-dom';
import useDocumentTitle from '../components/useDocumentTitle';
import { currentlyItems } from '../content/work';

const exploring = ['Performance engineering', 'GPU programming', 'ML systems', 'Evaluation and reliability'];

const About = () => {
    useDocumentTitle('About');
    return (
        <div className="pt-32 pb-20 px-4">
            <div className="max-w-2xl mx-auto">
                <div className="mb-12">
                    <div className="eink-title">
                        <h1 className="text-4xl font-black m-0">About</h1>
                    </div>
                </div>

                <p className="text-lg leading-relaxed mb-4">
                    I like problems where the convenient abstraction eventually stops being enough.
                </p>
                <p className="text-lg leading-relaxed mb-4 opacity-90">
                    Sometimes that means looking below matrix multiplication into cache lines and warp
                    accesses. Sometimes it means implementing backpropagation instead of calling it.
                </p>
                <p className="text-lg leading-relaxed mb-16 opacity-90">
                    And sometimes it means building queues, verification layers, and evaluation systems
                    around models — because a working model is not the same thing as a reliable system.
                </p>

                <section className="mb-16">
                    <h2 className="text-xl font-bold mb-4">Currently Exploring</h2>
                    <ul className="grid grid-cols-2 gap-3 font-mono text-sm">
                        {exploring.map((item) => (
                            <li key={item} className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 bg-current flex-shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="mb-16">
                    <h2 className="text-xl font-bold mb-4">Currently</h2>
                    <ul className="space-y-2 font-mono text-sm">
                        {currentlyItems.map((item) => (
                            <li key={item.role}>
                                <span className="font-bold">{item.role}</span>
                                <span className="opacity-60"> · {item.context}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="mb-16">
                    <h2 className="text-xl font-bold mb-4">Education</h2>
                    <p className="font-mono text-sm">
                        <span className="font-bold">University of Massachusetts Amherst</span>
                        <br />
                        B.S. in Computer Science · Commonwealth Honors College · GPA 4.0/4.0 · May 2028
                        <br />
                        Chancellor's Award · HackUMass XIII Winner · Hack(H)er413 Winner · Dean's List
                    </p>
                </section>

                <Link
                    to="/"
                    className="link-arrow"
                >
                    ← BACK HOME
                </Link>
            </div>
        </div>
    );
};

export default About;
