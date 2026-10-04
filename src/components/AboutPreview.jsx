import { Link } from 'react-router-dom';
import useScrollReveal from './useScrollReveal';

const AboutPreview = () => {
    const sectionRef = useScrollReveal();

    return (
        <section ref={sectionRef} id="About" className="py-20 px-4 border-t-2 border-current">
            <div data-reveal-group className="max-w-3xl mx-auto">
                <div className="mb-8">
                    <div className="eink-title">
                        <h2 className="text-4xl font-black m-0">About</h2>
                    </div>
                </div>

                <p className="text-lg leading-relaxed mb-4">
                    I like problems where the convenient abstraction eventually stops being enough.
                </p>
                <p className="text-lg leading-relaxed mb-8 opacity-90">
                    Sometimes that means looking below matrix multiplication into cache lines and warp
                    accesses. Sometimes it means implementing backpropagation instead of calling it. And
                    sometimes it means building queues, verification layers, and evaluation systems around
                    models — because a working model is not the same thing as a reliable system.
                </p>

                <Link
                    to="/about"
                    className="link-arrow"
                >
                    MORE ABOUT ME →
                </Link>
            </div>
        </section>
    );
};

export default AboutPreview;
