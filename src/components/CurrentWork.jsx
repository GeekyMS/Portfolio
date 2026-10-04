import { currentlyItems } from '../content/work';
import useScrollReveal from './useScrollReveal';

const CurrentWork = () => {
    const sectionRef = useScrollReveal();

    return (
        <section ref={sectionRef} id="Currently" className="py-20 px-4 border-t-2 border-current">
            <div className="max-w-6xl mx-auto">
                <div data-reveal className="mb-8">
                    <div className="eink-title">
                        <h2 className="text-4xl font-black m-0">03 / Currently</h2>
                    </div>
                </div>

                <div data-reveal className="flex flex-wrap gap-x-2 gap-y-3 font-mono text-sm">
                    {currentlyItems.map((item, idx) => (
                        <span key={item.role} className="flex items-center">
                            <span className="font-bold">{item.role}</span>
                            <span className="opacity-60 ml-2">· {item.context}</span>
                            {idx < currentlyItems.length - 1 && (
                                <span className="mx-4 opacity-40">/</span>
                            )}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CurrentWork;
