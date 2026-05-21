import GlassCard from "./GlassCard";
import useScrollAnimation from "./useScrollAnimation";

const ReadingList = ({ theme }) => {
    const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3, triggerOnce: false });
    const [gridRef, gridVisible] = useScrollAnimation({ threshold: 0.2, triggerOnce: false });

    const books = [
        {
            id: 1,
            title: "Crafting Interpreters",
            author: "Robert Nystrom",
            category: "PL_THEORY",
            progress: 13,
            // 13% represented in a 20-character block format
            bar: "███░░░░░░░░░░░░░░░░░",
            target: "Studying bytecode virtual machines, scanning, and compilation mechanics to anchor independent systems research."
        },
        {
            id: 2,
            title: "Designing Data-Intensive Applications",
            author: "Martin Kleppmann",
            category: "SYSTEMS_ENG",
            progress: 1,
            // 1% represented in a 20-character block format
            bar: "░░░░░░░░░░░░░░░░░░░░",
            target: "Mastering storage engines, stream processing, and data encoding models to optimize large-scale AI pipelines."
        }
    ];

    return (
        <section id="ReadingList" className="py-20 px-4 border-t-2 border-current">
            <div className="max-w-6xl mx-auto">
                <div 
                    ref={titleRef}
                    className={`mb-12 transition-all duration-1000 ${
                        titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                >
                    <div className="eink-border p-4 inline-block bg-[#f0f0f0] dark:bg-[#1a1a1a]">
                        <h2 className="text-4xl font-black m-0">Reading List</h2>
                    </div>
                </div>

                <div 
                    ref={gridRef}
                    className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-1000 delay-300 ${
                        gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                    }`}
                >
                    {books.map((book) => (
                        <GlassCard key={book.id} theme={theme}>
                            <span className="text-xs font-mono opacity-50 block mb-2">
                                [{book.category}]
                            </span>

                            <h3 className="text-xl font-bold mb-1 text-current transition-colors duration-300 group-hover:text-[#ae0001] dark:group-hover:text-[#d3a625]">
                                {book.title}
                            </h3>

                            <p className="text-sm font-mono opacity-70 mb-6">
                                Author: {book.author}
                            </p>

                            <div className="mb-6 font-mono text-xs">
                                <div className="flex justify-between mb-1">
                                    <span>PROGRESS_BAR</span>
                                    <span className="font-bold text-current transition-colors duration-300 group-hover:text-[#ae0001] dark:group-hover:text-[#d3a625]">
                                        {book.progress}%
                                    </span>
                                </div>
                                <div className="tracking-widest select-none opacity-80 text-current transition-colors duration-300 group-hover:text-[#ae0001] dark:group-hover:text-[#d3a625]">
                                    {book.bar}
                                </div>
                            </div>

                            <div className="text-xs font-mono opacity-90 border-t border-dashed border-current pt-4">
                                <span className="font-bold mr-1 text-current transition-colors duration-300 group-hover:text-[#ae0001] dark:group-hover:text-[#d3a625]">
                                    &gt; OBJECTIVE:
                                </span>{" "}
                                {book.target}
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ReadingList;