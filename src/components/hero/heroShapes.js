const TAU = Math.PI * 2;

// Deterministic PRNG so every mount builds identical shapes.
const mulberry32 = (seed) => () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

// Centers the cloud, scales it to unit radius, then orders points by azimuth so
// point i in one shape lands near point i in the next and morphs read as flow
// instead of noise.
const finalize = (points, count) => {
    const min = [Infinity, Infinity, Infinity];
    const max = [-Infinity, -Infinity, -Infinity];
    for (let i = 0; i < count; i++) {
        for (let a = 0; a < 3; a++) {
            const v = points[i * 3 + a];
            if (v < min[a]) min[a] = v;
            if (v > max[a]) max[a] = v;
        }
    }
    const center = [0, 1, 2].map((a) => (min[a] + max[a]) / 2);
    let radius = 0;
    for (let i = 0; i < count; i++) {
        const x = points[i * 3] - center[0];
        const y = points[i * 3 + 1] - center[1];
        const z = points[i * 3 + 2] - center[2];
        radius = Math.max(radius, Math.hypot(x, y, z));
    }

    const order = Array.from({ length: count }, (_, i) => i);
    const azimuth = (i) => Math.atan2(points[i * 3 + 2] - center[2], points[i * 3] - center[0]);
    order.sort((a, b) => azimuth(a) - azimuth(b));

    const out = new Float32Array(count * 3);
    order.forEach((src, dst) => {
        out[dst * 3] = (points[src * 3] - center[0]) / radius;
        out[dst * 3 + 1] = (points[src * 3 + 1] - center[1]) / radius;
        out[dst * 3 + 2] = (points[src * 3 + 2] - center[2]) / radius;
    });
    return out;
};

const buildSphere = (count) => {
    const points = new Float32Array(count * 3);
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < count; i++) {
        const y = 1 - (2 * (i + 0.5)) / count;
        const r = Math.sqrt(1 - y * y);
        const theta = i * golden;
        points[i * 3] = Math.cos(theta) * r;
        points[i * 3 + 1] = y;
        points[i * 3 + 2] = Math.sin(theta) * r;
    }
    return finalize(points, count);
};

// Points on the six faces snapped to a grid, which gives the lattice look.
const buildCube = (count) => {
    const rng = mulberry32(7);
    const steps = 8;
    const snap = (v) => Math.round(v * steps) / steps;
    const points = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        const face = i % 6;
        const axis = face >> 1;
        const sign = face & 1 ? 1 : -1;
        const u = snap(rng() * 2 - 1);
        const v = snap(rng() * 2 - 1);
        const p = [0, 0, 0];
        p[axis] = sign;
        p[(axis + 1) % 3] = u;
        p[(axis + 2) % 3] = v;
        points[i * 3] = p[0];
        points[i * 3 + 1] = p[1];
        points[i * 3 + 2] = p[2];
    }
    return finalize(points, count);
};

// Möbius strip: a band with a half twist, so it has one side and one edge.
const buildMobius = (count) => {
    const rng = mulberry32(21);
    const halfWidth = 0.42;
    const points = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        const u = ((i + rng()) / count) * TAU;
        const v = rng() * 2 - 1;
        const radius = 1 + v * halfWidth * Math.cos(u / 2);
        points[i * 3] = radius * Math.cos(u);
        points[i * 3 + 1] = radius * Math.sin(u);
        points[i * 3 + 2] = v * halfWidth * Math.sin(u / 2);
    }
    return finalize(points, count);
};

// Order is the morph cycle: sphere (rest) > lattice > Möbius strip > back to sphere.
export const buildShapes = (count) => [
    buildSphere(count),
    buildCube(count),
    buildMobius(count),
];
