import { useState } from 'react';

const COLS = 8;
const ROWS = 4;
const CELL = 40;
const PAD = 24;
const WIDTH = PAD * 2 + COLS * CELL;
const HEIGHT = PAD * 2 + ROWS * CELL;

const modes = [
    { id: 'naive', label: 'Naive · Column Access' },
    { id: 'transposed', label: 'Transposed · Row Access' },
    { id: 'tiled', label: 'Tiled · L1 Reuse' },
];

const cellX = (c) => PAD + c * CELL;
const cellY = (r) => PAD + r * CELL;

const CacheDiagram = () => {
    const [mode, setMode] = useState('naive');

    const targetCol = 5;
    const targetRow = 1;
    const lineStart = targetCol < 4 ? 0 : 4;
    const tileRows = [0, 1];
    const tileCols = [0, 1, 2, 3];

    return (
        <div className="eink-border p-5 md:p-6 mb-14">
            <p className="font-mono text-xs opacity-60 mb-4">HOW THE ACCESS PATTERN MOVES THROUGH MEMORY</p>

            <div className="flex flex-wrap gap-2 mb-6">
                {modes.map((m) => (
                    <button
                        key={m.id}
                        type="button"
                        onClick={() => setMode(m.id)}
                        aria-pressed={mode === m.id}
                        className={`eink-border px-3 py-1.5 font-mono text-xs font-bold transition-colors ${
                            mode === m.id
                                ? 'bg-[#ae0001] text-[#d3a625] dark:bg-[#d3a625] dark:text-[#1a1a1a] border-[#ae0001] dark:border-[#d3a625]'
                                : 'hover:bg-gray-200 dark:hover:bg-gray-800'
                        }`}
                    >
                        {m.label}
                    </button>
                ))}
            </div>

            <svg
                viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
                className="w-full h-auto max-w-md mx-auto"
                role="img"
                aria-label={
                    mode === 'naive'
                        ? 'Diagram: reading a single column of matrix B pulls a full cache line per row, using only one of four loaded values each time.'
                        : mode === 'transposed'
                          ? 'Diagram: reading a row of transposed B uses every value in each cache line it pulls.'
                          : 'Diagram: a small tile of B stays resident in L1 and is reused across multiple iterations.'
                }
            >
                <defs>
                    <pattern id="hatch" width="6" height="6" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
                        <line x1="0" y1="0" x2="0" y2="6" className="stroke-current" strokeOpacity="0.35" strokeWidth="1.5" />
                    </pattern>
                </defs>

                {/* base grid */}
                {Array.from({ length: ROWS }).map((_, r) =>
                    Array.from({ length: COLS }).map((_, c) => {
                        let fillClass = 'fill-current';
                        let fillOpacity = 0.04;
                        let overlay = null;

                        if (mode === 'naive') {
                            const withinTargetLine = c >= lineStart && c < lineStart + 4;
                            if (withinTargetLine) {
                                fillOpacity = 0.1;
                                if (c === targetCol) {
                                    fillClass = 'fill-[#ae0001] dark:fill-[#d3a625]';
                                    fillOpacity = 1;
                                } else {
                                    overlay = 'hatch';
                                }
                            }
                        } else if (mode === 'transposed') {
                            if (r === targetRow) {
                                fillClass = 'fill-[#ae0001] dark:fill-[#d3a625]';
                                fillOpacity = 0.85;
                            }
                        } else if (mode === 'tiled') {
                            if (tileRows.includes(r) && tileCols.includes(c)) {
                                fillClass = 'fill-[#ae0001] dark:fill-[#d3a625]';
                                fillOpacity = 0.18;
                            }
                        }

                        return (
                            <g key={`${r}-${c}`}>
                                <rect
                                    x={cellX(c)}
                                    y={cellY(r)}
                                    width={CELL}
                                    height={CELL}
                                    className={fillClass}
                                    fillOpacity={fillOpacity}
                                    stroke="currentColor"
                                    strokeOpacity="0.25"
                                />
                                {overlay && (
                                    <rect
                                        x={cellX(c)}
                                        y={cellY(r)}
                                        width={CELL}
                                        height={CELL}
                                        fill="url(#hatch)"
                                    />
                                )}
                            </g>
                        );
                    })
                )}

                {/* cache-line boundary marker */}
                {mode === 'naive' && (
                    <rect
                        x={cellX(lineStart)}
                        y={PAD}
                        width={CELL * 4}
                        height={CELL * ROWS}
                        fill="none"
                        stroke="currentColor"
                        strokeOpacity="0.5"
                        strokeDasharray="4 3"
                    />
                )}
                {mode === 'transposed' && (
                    <rect
                        x={cellX(0)}
                        y={cellY(targetRow)}
                        width={CELL * 8}
                        height={CELL}
                        fill="none"
                        stroke="currentColor"
                        strokeOpacity="0.6"
                        strokeWidth="1.5"
                    />
                )}
                {mode === 'tiled' && (
                    <rect
                        x={cellX(0)}
                        y={cellY(0)}
                        width={CELL * 4}
                        height={CELL * 2}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-[#ae0001] dark:text-[#d3a625]"
                    />
                )}
            </svg>

            <p className="font-mono text-xs opacity-70 mt-5 leading-relaxed max-w-md mx-auto text-center">
                {mode === 'naive' && (
                    <>Each row pulls a 4-value cache line to use <span className="font-bold">one</span> value — three are loaded and thrown away.</>
                )}
                {mode === 'transposed' && (
                    <>Reading along the row uses <span className="font-bold">every</span> value in the cache line that gets pulled.</>
                )}
                {mode === 'tiled' && (
                    <>The tile stays resident in L1 and gets reused across iterations instead of re-fetched from memory.</>
                )}
            </p>
        </div>
    );
};

export default CacheDiagram;
