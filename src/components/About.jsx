import GlassCard from "./GlassCard";
import useScrollAnimation from "./useScrollAnimation";

import pythonImg from '/python.png';
import cImg from '/C.png';
import cppImg from '/cpp.png';
import javascriptImg from '/javascript.png';
import htmlImg from '/html.png';
import cssImg from '/css.png';

const About = ({theme}) => {

    const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.2, triggerOnce: false });
    const [card1Ref, card1Visible] = useScrollAnimation({ threshold: 0.3, triggerOnce: false });
    const [card2Ref, card2Visible] = useScrollAnimation({ threshold: 0.3, triggerOnce: false });
    const [techTitleRef, techTitleVisible] = useScrollAnimation({ threshold: 0.4, triggerOnce: false });
    const [techIconsRef, techIconsVisible] = useScrollAnimation({ threshold: 0.3, triggerOnce: false });

    return (
        <section id="About" className="py-20 px-4 border-t-2 border-current">
            <div className="max-w-4xl mx-auto">
                <div 
                    ref={titleRef}
                    className={`mb-16 transition-all duration-1000 ${
                        titleVisible
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-10'
                    }`}
                >
                    <div className="eink-border p-4 inline-block bg-[#f0f0f0] dark:bg-[#1a1a1a]">
                        <h2 className="text-4xl font-black m-0">About Me & My Skills</h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    <div
                        ref={card1Ref}
                        className={`transition-all duration-1000 transform ${card1Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    >
                        <GlassCard theme={theme}>
                            <h3 className="text-2xl font-bold text-current transition-colors duration-300 group-hover:text-[#ae0001] dark:group-hover:text-[#d3a625] mb-6">
                                AI & Machine Learning
                            </h3>
                            <ul className="space-y-4 font-mono text-sm opacity-90">
                                {['Python', 'PyTorch', 'LangChain', 'Scikit-Learn', 'Pandas', 'NumPy', 'ChromaDB', 'OpenCV', 'Mediapipe'].map((skill, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <span className="w-2 h-2 bg-current mr-3 mt-1.5 flex-shrink-0 rounded-none transition-colors duration-300 group-hover:bg-[#ae0001] dark:group-hover:bg-[#d3a625]"></span>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </GlassCard>
                    </div>

                    <div
                        ref={card2Ref}
                        className={`transition-all duration-1000 delay-200 transform ${card2Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    >
                        <GlassCard theme={theme}>
                            <h3 className="text-2xl font-bold text-current transition-colors duration-300 group-hover:text-[#ae0001] dark:group-hover:text-[#d3a625] mb-6">
                                Architecture & Development
                            </h3>
                            <ul className="space-y-4 font-mono text-sm opacity-90">
                                {['JavaScript, HTML, CSS', 'React, Flask, Django', 'C++, Java, SQL', 'AWS (S3, Lambda)', 'Docker, Vultr Cloud', 'REST APIs, gRPC', 'PostgreSQL', 'Linux (Ubuntu), Bash'].map((skill, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <span className="w-2 h-2 bg-current mr-3 mt-1.5 flex-shrink-0 rounded-none transition-colors duration-300 group-hover:bg-[#ae0001] dark:group-hover:bg-[#d3a625]"></span>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </GlassCard>
                    </div>

                    <div
                        ref={techTitleRef}
                        className={`mt-16 text-center md:col-span-2 transition-all duration-1000 ${
                            techTitleVisible
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-10'
                        }`}
                    >
                        <h3 className="text-2xl font-bold text-center mb-8">Core Technologies</h3>
                        <div
                            ref={techIconsRef}
                            className={`flex flex-wrap justify-center items-center gap-8 transition-all duration-1000 delay-300 ${
                                techIconsVisible
                                ? 'opacity-100 scale-100'
                                : 'opacity-0 scale-75'
                            }`}
                        >
                            <div className="w-10 h-16 bg-contain bg-no-repeat bg-center opacity-100 animate-float grayscale opacity-50 cursor-pointer transform transition-all duration-300 cubic-bezier(0.175, 0.885, 0.32, 1.275) hover:-translate-y-3" style={{ backgroundImage: `url(${pythonImg})` }}></div>
                            <div className="w-10 h-16 bg-contain bg-no-repeat bg-center opacity-100 animate-float grayscale opacity-50 cursor-pointer transform transition-all duration-300 cubic-bezier(0.175, 0.885, 0.32, 1.275) hover:-translate-y-3" style={{ backgroundImage: `url(${cImg})`, animationDelay: '0.2s' }}></div>
                            <div className="w-10 h-16 bg-contain bg-no-repeat bg-center opacity-100 animate-float grayscale opacity-50 cursor-pointer transform transition-all duration-300 cubic-bezier(0.175, 0.885, 0.32, 1.275) hover:-translate-y-3" style={{ backgroundImage: `url(${cppImg})`, animationDelay: '0.4s' }}></div>
                            <div className="w-10 h-18 bg-contain bg-no-repeat bg-center opacity-100 animate-float grayscale opacity-50 cursor-pointer transform transition-all duration-300 cubic-bezier(0.175, 0.885, 0.32, 1.275) hover:-translate-y-3" style={{ backgroundImage: `url(${javascriptImg})`, animationDelay: '0.6s' }}></div>
                            <div className="w-10 h-20 bg-contain bg-no-repeat bg-center opacity-100 animate-float grayscale opacity-50 cursor-pointer transform transition-all duration-300 cubic-bezier(0.175, 0.885, 0.32, 1.275) hover:-translate-y-3" style={{ backgroundImage: `url(${htmlImg})`, animationDelay: '0.8s' }}></div>
                            <div className="w-10 h-12 bg-contain bg-no-repeat bg-center opacity-100 animate-float grayscale opacity-50 cursor-pointer transform transition-all duration-300 cubic-bezier(0.175, 0.885, 0.32, 1.275) hover:-translate-y-3" style={{ backgroundImage: `url(${cssImg})`, animationDelay: '1.0s' }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About;