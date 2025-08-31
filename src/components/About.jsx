import GlassCard from "./GlassCard";
import useScrollAnimation from "./useScrollAnimation";

import pythonImg from '/python.png';
import cImg from '/C.png';
import cppImg from '/cpp.png';
import javascriptImg from '/javascript.png';
import htmlImg from '/html.png';
import cssImg from '/css.png';

const About = ({theme}) => {

    const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.2 });
    const [card1Ref, card1Visible] = useScrollAnimation({ threshold: 0.3 });
    const [card2Ref, card2Visible] = useScrollAnimation({ threshold: 0.3 });
    const [techTitleRef, techTitleVisible] = useScrollAnimation({ threshold: 0.4 });
    const [techIconsRef, techIconsVisible] = useScrollAnimation({ threshold: 0.3 });

    const glowColors = theme === 'dark' ? 'blue' : 'purple';

    return (
        <section id="About" className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <h2
                    ref={titleRef}
                    className={`text-4xl font-bold text-center mb-16 transition-all duration-1000 ${
                        titleVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-10'
                    }`}
                >
                    About Me & My Skills
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* AI & Machine Learning Card */}
                    <div
                        ref={card1Ref}
                        className={`transition-all duration-1000 transform ${
                            card1Visible
                            ? 'opacity-100 translate-x-0 rotate-0'
                            : 'opacity-0 -translate-x-10 -rotate-3'
                        }`}
                    >
                        <GlassCard glowColor={glowColors} rotateDirection="left" theme={theme}>
                            <h3 className="text-2xl font-bold text-purple-600 dark:text-blue-400 mb-6">AI & Machine Learning</h3>
                            <ul className="space-y-4 text-gray-700 dark:text-white">
                                <li className="flex items-start group/item">
                                    <span className="w-2 h-2  bg-purple-500 dark:bg-blue-400 rounded-full mr-3 mt-1.5 flex-shrink-0 transition-all duration-300 group-hover/item:w-3 group-hover/item:h-3"></span>
                                    Python
                                </li>
                                <li className="flex items-start group/item">
                                    <span className="w-2 h-2  bg-purple-500 dark:bg-blue-400 rounded-full mr-3 mt-1.5 flex-shrink-0 transition-all duration-300 group-hover/item:w-3 group-hover/item:h-3"></span>
                                    PyTorch
                                </li>
                                <li className="flex items-start group/item">
                                    <span className="w-2 h-2  bg-purple-500 dark:bg-blue-400 rounded-full mr-3 mt-1.5 flex-shrink-0 transition-all duration-300 group-hover/item:w-3 group-hover/item:h-3"></span>
                                    Scikit-Learn
                                </li>
                                <li className="flex items-start group/item">
                                    <span className="w-2 h-2  bg-purple-500 dark:bg-blue-400 rounded-full mr-3 mt-1.5 flex-shrink-0 transition-all duration-300 group-hover/item:w-3 group-hover/item:h-3"></span>
                                    Pandas
                                </li>
                                <li className="flex items-start group/item">
                                    <span className="w-2 h-2  bg-purple-500 dark:bg-blue-400 rounded-full mr-3 mt-1.5 flex-shrink-0 transition-all duration-300 group-hover/item:w-3 group-hover/item:h-3"></span>
                                    Numpy
                                </li>
                                <li className="flex items-start group/item">
                                    <span className="w-2 h-2  bg-purple-500 dark:bg-blue-400 rounded-full mr-3 mt-1.5 flex-shrink-0 transition-all duration-300 group-hover/item:w-3 group-hover/item:h-3"></span>
                                    OpenCV
                                </li>
                                <li className="flex items-start group/item">
                                    <span className="w-2 h-2  bg-purple-500 dark:bg-blue-400 rounded-full mr-3 mt-1.5 flex-shrink-0 transition-all duration-300 group-hover/item:w-3 group-hover/item:h-3"></span>
                                    Mediapipe
                                </li>
                            </ul>
                        </GlassCard>
                    </div>

                    {/* Full Stack Web Development Card */}
                    <div
                        ref={card2Ref}
                        className={`transition-all duration-1000 delay-200 transform ${
                            card2Visible
                            ? 'opacity-100 translate-x-0 rotate-0'
                            : 'opacity-0 translate-x-10 rotate-3'
                        }`}
                    >
                        <GlassCard glowColor={glowColors} rotateDirection="right" theme={theme}>
                            <h3 className="text-2xl font-bold text-purple-600 dark:text-blue-400 mb-6">Full Stack Web Development</h3>
                            <ul className="space-y-4 text-gray-700 dark:text-white">
                                <li className="flex items-start group/item">
                                    <span className="w-2 h-2  bg-purple-500 dark:bg-blue-400 rounded-full mr-3 mt-1.5 flex-shrink-0 transition-all duration-300 group-hover/item:w-3 group-hover/item:h-3"></span>
                                    JavaScript, HTML, CSS
                                </li>
                                <li className="flex items-start group/item">
                                    <span className="w-2 h-2  bg-purple-500 dark:bg-blue-400 rounded-full mr-3 mt-1.5 flex-shrink-0 transition-all duration-300 group-hover/item:w-3 group-hover/item:h-3"></span>
                                    React
                                </li>
                                <li className="flex items-start group/item">
                                    <span className="w-2 h-2  bg-purple-500 dark:bg-blue-400 rounded-full mr-3 mt-1.5 flex-shrink-0 transition-all duration-300 group-hover/item:w-3 group-hover/item:h-3"></span>
                                    Flask
                                </li>
                                <li className="flex items-start group/item">
                                    <span className="w-2 h-2  bg-purple-500 dark:bg-blue-400 rounded-full mr-3 mt-1.5 flex-shrink-0 transition-all duration-300 group-hover/item:w-3 group-hover/item:h-3"></span>
                                    Django
                                </li>
                                <li className="flex items-start group/item">
                                    <span className="w-2 h-2  bg-purple-500 dark:bg-blue-400 rounded-full mr-3 mt-1.5 flex-shrink-0 transition-all duration-300 group-hover/item:w-3 group-hover/item:h-3"></span>
                                    Node.js
                                </li>
                                <li className="flex items-start group/item">
                                    <span className="w-2 h-2  bg-purple-500 dark:bg-blue-400 rounded-full mr-3 mt-1.5 flex-shrink-0 transition-all duration-300 group-hover/item:w-3 group-hover/item:h-3"></span>
                                    Database Management
                                </li>
                                <li className="flex items-start group/item">
                                    <span className="w-2 h-2  bg-purple-500 dark:bg-blue-400 rounded-full mr-3 mt-1.5 flex-shrink-0 transition-all duration-300 group-hover/item:w-3 group-hover/item:h-3"></span>
                                    Modular Design
                                </li>
                            </ul>
                        </GlassCard>
                    </div>

                    {/* Core Technologies Section */}
                    <div
                        ref={techTitleRef}
                        className={`mt-16 text-center md:col-span-2 transition-all duration-1000 ${
                            techTitleVisible
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-10'
                        }`}
                    >
                        <h3 className="text-2xl font-bold text-center justify-center mb-8">Core Technologies</h3>
                        <div
                            ref={techIconsRef}
                            className={`flex flex-wrap justify-center items-center gap-8 transition-all duration-1000 delay-300 ${
                                techIconsVisible
                                ? 'opacity-100 scale-100'
                                : 'opacity-0 scale-75'
                            }`}
                        >

                            <div
                                className="w-10 h-16 bg-contain bg-no-repeat bg-center opacity-100 animate-float"
                                style={{ backgroundImage: `url(${pythonImg})` }}
                            ></div>

                            <div
                                className="w-10 h-16 bg-contain bg-no-repeat bg-center opacity-100 animate-float"
                                style={{ backgroundImage: `url(${cImg})`, animationDelay: '0.2s' }}
                            ></div>

                            <div
                                className="w-10 h-16 bg-contain bg-no-repeat bg-center opacity-100 animate-float"
                                style={{ backgroundImage: `url(${cppImg})`, animationDelay: '0.4s' }}
                            ></div>

                            <div
                                className="w-10 h-18 bg-contain bg-no-repeat bg-center opacity-100 animate-float"
                                style={{ backgroundImage: `url(${javascriptImg})`, animationDelay: '0.6s' }}
                            ></div>

                            <div
                                className="w-10 h-20 bg-contain bg-no-repeat bg-center opacity-100 animate-float"
                                style={{ backgroundImage: `url(${htmlImg})`, animationDelay: '0.8s' }}
                            ></div>

                            <div
                                className="w-10 h-12 bg-contain bg-no-repeat bg-center opacity-100 animate-float"
                                style={{ backgroundImage: `url(${cssImg})`, animationDelay: '1.0s' }}
                            ></div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About;