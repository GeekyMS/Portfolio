import { Link } from 'react-router-dom';
import useDocumentTitle from '../components/useDocumentTitle';
import { ArrowRight } from 'lucide-react';
import { notes } from '../content/notes';

const Notes = () => {
    useDocumentTitle('Notes');
    return (
        <div className="pt-32 pb-20 px-4">
            <div className="max-w-3xl mx-auto">
                <div className="mb-12">
                    <div className="eink-title">
                        <h1 className="text-4xl font-black m-0">Notes</h1>
                    </div>
                </div>

                <ul className="space-y-4">
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

export default Notes;
