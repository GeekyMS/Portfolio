const Education = () => {
    return(
        <section id="Education" className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-16">Education</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gray-800 rounded-lg p-6 transition-transform duration-300 hover:scale-105 hover:-translate-y-2">
                        <h3 className="text-2xl font-bold text-blue-400 mb-2">University of Massachusetts Amherst</h3>
                        <p className="text-lg font-semibold mb-1">Honors Bachelor of Science in Computer Science <p className=" text-green-400 mb-4 text-right">GPA: 4.0/4.0</p></p>
                        
                        <p className="text-gray-300">
                        Relevant Coursework:
                        <ul className="list-disc list-inside space-y-1">
                            <li>Object Oriented Programming</li>
                            <li>Calculus I & II</li>
                            <li>Linear Algebra</li>
                        </ul>
                        </p>
                    </div>

                    <div className="bg-gray-800 rounded-lg p-6 transition-transform duration-300 hover:scale-105 hover:-translate-y-2">
                        <h3 className="text-2xl font-bold text-blue-400 mb-2">Honors & Awards</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>Dean's List - All Semesters</li>
                        <li>Hack(H)er 413 Winner</li>
                        <li>Chancellor's Awardee</li>
                        <li>JEE Mains 99.46 Percentile</li>
                        <li>Top 5% JEE Advanced</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Education;