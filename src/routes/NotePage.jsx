import { useParams, Link, Navigate } from 'react-router-dom';
import { notes } from '../content/notes';
import useDocumentTitle from '../components/useDocumentTitle';

const NotePage = () => {
    const { slug } = useParams();
    const note = notes.find((n) => n.slug === slug);
    useDocumentTitle(note?.title);

    if (!note) return <Navigate to="/notes" replace />;

    return (
        <div className="pt-32 pb-24 px-4">
            <article className="max-w-2xl mx-auto">
                <Link
                    to="/notes"
                    className="inline-block font-mono text-xs font-bold opacity-70 hover:opacity-100 mb-8"
                >
                    ← NOTES
                </Link>

                <h1 className="text-3xl md:text-4xl font-black mb-8 leading-tight">{note.title}</h1>

                {note.question && (
                    <section className="mb-10">
                        <p className="font-mono text-xs opacity-60 mb-3">QUESTION</p>
                        <p className="text-lg leading-relaxed opacity-90">{note.question}</p>
                    </section>
                )}

                <div className="eink-border p-6 font-mono text-sm opacity-70">
                    Full note coming soon.
                </div>

                {note.connectedWork && (
                    <div className="mt-10">
                        <p className="font-mono text-xs opacity-60 mb-2">CONNECTED WORK</p>
                        <Link
                            to={note.connectedWork}
                            className="font-mono text-sm font-bold underline underline-offset-4 hover:text-accent"
                        >
                            {note.connectedWork} →
                        </Link>
                    </div>
                )}
            </article>
        </div>
    );
};

export default NotePage;
