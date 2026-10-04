import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { selectedWork, experienceWork } from '../content/work';
import CacheDiagram from '../components/case-study/CacheDiagram';
import useDocumentTitle from '../components/useDocumentTitle';
import BulletText from '../components/BulletText';

const ProjectPage = () => {
    const { slug } = useParams();
    const project = [...selectedWork, ...experienceWork].find((p) => p.slug === slug);
    useDocumentTitle(project?.title);

    if (!project) return <Navigate to="/work" replace />;

    const { title, tag, category, year, what, why, caseStudy, githubUrl } = project;
    const backTo = project.href.startsWith('/experience') ? '/experience' : '/work';

    return (
        <div className="pt-32 pb-24 px-4">
            <article className="max-w-3xl mx-auto">
                <Link
                    to={backTo}
                    className="inline-block font-mono text-xs font-bold opacity-70 hover:opacity-100 mb-8"
                >
                    ← {backTo === '/experience' ? 'WORK EXPERIENCE' : 'WORK'}
                </Link>

                <p className="font-mono text-xs opacity-60 mb-4">
                    {tag && `${tag.toUpperCase()} · `}{category.toUpperCase()} / {year}
                </p>
                <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">{title}</h1>

                {githubUrl && (
                    <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-arrow inline-flex items-center gap-1 mb-8"
                    >
                        VIEW ON GITHUB <ArrowUpRight size={14} />
                    </a>
                )}

                {caseStudy && (
                    <p className="text-xl md:text-2xl font-bold leading-snug mb-16 opacity-90">
                        {caseStudy.tagline}
                    </p>
                )}

                <section className="eink-border p-6 md:p-8 mb-16">
                    <p className="font-mono text-xs opacity-60 mb-4">WHAT SHIPPED</p>
                    {what.subtitle && (
                        <p className="font-mono text-sm opacity-70 mb-4">{what.subtitle}</p>
                    )}
                    <ul className="space-y-4 mb-6">
                        {what.bullets.map((b, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm font-mono leading-relaxed">
                                <span className="mt-1.5 w-1.5 h-1.5 bg-current flex-shrink-0" />
                                <span>
                                    {b.metric && (
                                        <span className="font-black text-accent mr-1">
                                            {b.metric}
                                        </span>
                                    )}
                                    <BulletText text={b.text} accent={b.accent} />
                                </span>
                            </li>
                        ))}
                    </ul>
                    <div className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs opacity-60">
                        {what.technologies.map((t) => (
                            <span key={t}>{t}</span>
                        ))}
                    </div>
                </section>

                <section className="mb-16">
                    <p className="font-mono text-xs opacity-60 mb-4">THE QUESTION</p>
                    <h2 className="text-2xl font-bold mb-4 leading-snug">{why.question}</h2>
                    <p className="leading-relaxed opacity-90">{why.body}</p>
                </section>

                {caseStudy?.sections?.map((s) => (
                    <div key={s.heading}>
                        <section className="mb-14">
                            <h3 className="text-xl font-bold mb-3">{s.heading}</h3>
                            <p className="leading-relaxed opacity-90">{s.body}</p>
                        </section>
                        {project.slug === 'kernels' && s.heading === 'Tiling' && <CacheDiagram />}
                    </div>
                ))}

                {caseStudy?.takeaway && (
                    <blockquote className="eink-border eink-shadow p-6 md:p-8 mt-16 text-xl font-bold leading-snug">
                        {caseStudy.takeaway}
                    </blockquote>
                )}
            </article>
        </div>
    );
};

export default ProjectPage;
