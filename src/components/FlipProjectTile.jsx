import { useState } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import useReducedMotion from './useReducedMotion';
import BulletText from './BulletText';

const FlipProjectTile = ({ index, title, tag, category, year, what, why, href, githubUrl }) => {
    const [flipped, setFlipped] = useState(false);
    const reducedMotion = useReducedMotion();

    const toggleFlip = () => setFlipped((f) => !f);

    return (
        <article
            className="relative [perspective:1600px]"
            aria-label={`${title} — ${flipped ? 'why it exists' : 'what shipped'}`}
        >
            <div
                className={`relative grid h-full min-h-[360px] transition-transform duration-[400ms] ease-in-out [transform-style:preserve-3d] [grid-template-areas:'stack'] ${
                    reducedMotion ? '' : flipped ? '[transform:rotateY(180deg)]' : ''
                }`}
            >
                {/* WHAT face */}
                <div
                    aria-hidden={!reducedMotion && flipped}
                    className={`[grid-area:stack] eink-border eink-shadow bg-surface p-6 md:p-8 flex flex-col [backface-visibility:hidden] ${
                        reducedMotion
                            ? `transition-opacity duration-200 ${flipped ? 'opacity-0 pointer-events-none' : 'opacity-100'}`
                            : ''
                    }`}
                >
                    <div className="flex items-baseline justify-between mb-4 font-mono text-xs opacity-60">
                        <span>
                            {index} / {tag && `${tag.toUpperCase()} · `}{category.toUpperCase()} / {year}
                        </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-black mb-1">{title}</h3>
                    {what.subtitle && (
                        <p className="font-mono text-sm opacity-70 mb-6">{what.subtitle}</p>
                    )}

                    <ul className="space-y-4 mb-6 flex-1">
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

                    <div className="flex flex-wrap gap-x-3 gap-y-1 mb-6 font-mono text-xs opacity-60">
                        {what.technologies.map((t) => (
                            <span key={t}>{t}</span>
                        ))}
                    </div>

                    <div className="flex items-center gap-5">
                        <button
                            type="button"
                            onClick={toggleFlip}
                            tabIndex={!reducedMotion && flipped ? -1 : 0}
                            className="eink-border px-4 py-2 font-mono text-xs font-bold transition-colors hover:bg-accent hover:text-accent-fg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
                        >
                            WHY? ↻
                        </button>
                        {githubUrl && (
                            <a
                                href={githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                tabIndex={!reducedMotion && flipped ? -1 : 0}
                                aria-label={`${title} on GitHub`}
                                className="inline-flex items-center gap-1 font-mono text-xs font-bold underline underline-offset-4 hover:text-accent"
                            >
                                GITHUB <ArrowUpRight size={14} />
                            </a>
                        )}
                    </div>
                </div>

                {/* WHY face */}
                <div
                    aria-hidden={!reducedMotion && !flipped}
                    className={`[grid-area:stack] eink-border eink-shadow bg-surface p-6 md:p-8 flex flex-col [backface-visibility:hidden] ${
                        reducedMotion
                            ? `transition-opacity duration-200 ${flipped ? 'opacity-100' : 'opacity-0 pointer-events-none'}`
                            : '[transform:rotateY(180deg)]'
                    }`}
                >
                    <p className="font-mono text-xs opacity-60 mb-6">WHY THIS EXISTS</p>

                    <h3 className="text-xl md:text-2xl font-bold mb-6 leading-snug">
                        {why.question}
                    </h3>

                    <p className="text-sm leading-relaxed opacity-90 mb-6 flex-1">
                        {why.body}
                    </p>

                    <div className="flex items-center justify-between gap-4">
                        <a
                            href={href}
                            tabIndex={!reducedMotion && !flipped ? -1 : 0}
                            className="inline-flex items-center gap-1 font-mono text-xs font-bold underline underline-offset-4 hover:text-accent"
                        >
                            READ THE STORY <ArrowRight size={14} />
                        </a>
                        <button
                            type="button"
                            onClick={toggleFlip}
                            tabIndex={!reducedMotion && !flipped ? -1 : 0}
                            className="eink-border px-4 py-2 font-mono text-xs font-bold transition-colors hover:bg-accent hover:text-accent-fg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
                        >
                            WHAT? ↻
                        </button>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default FlipProjectTile;
