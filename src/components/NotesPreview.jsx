import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { notes } from '../content/notes';
import useScrollReveal from './useScrollReveal';

const NotesPreview = () => {
    const sectionRef = useScrollReveal();

    return (
        <section ref={sectionRef} id="Notes" className="py-20 px-4 border-t-2 border-current">
            <div className="max-w-6xl mx-auto">
                <div data-reveal className="mb-12">
                    <div className="eink-title">
                        <h2 className="text-4xl font-black m-0">05 / Notes</h2>
                    </div>
                </div>

                <ul data-reveal-group className="space-y-4">
                    {notes.map((note) => (
                        <li key={note.slug}>
                            <Link
                                to={`/notes/${note.slug}`}
                                className="group flex items-center justify-between eink-border px-5 py-4 no-underline text-current transition-colors hover:bg-fg/10"
                            >
                                <span className="font-mono text-sm font-bold group-hover:text-accent">
                                    {note.title}
                                </span>
                                <ArrowRight size={16} className="opacity-60 group-hover:opacity-100" />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default NotesPreview;
