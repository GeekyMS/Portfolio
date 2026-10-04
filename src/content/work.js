// Selected work: the four flagship projects, each with a résumé-derived
// WHAT side and a curiosity-driven WHY side. Content per the portfolio PRD.

export const selectedWork = [
    {
        slug: 'kernels',
        index: '01',
        tag: 'Engineering',
        category: 'Performance',
        year: '2026',
        title: 'High-Performance Kernels',
        what: {
            subtitle: 'CPU → CUDA',
            bullets: [
                {
                    metric: '2.83×',
                    text: 'speedup at N=1024 (2.21 → 6.26 GFLOP/s) by exploiting cache-line locality and L1-resident tiling.',
                },
                {
                    metric: '1.54×',
                    text: 'from pre-transposing B alone, eliminating column-stride cache misses.',
                },
                {
                    metric: '429 GFLOP/s',
                    text: 'after porting the kernel to CUDA, untiled: about 69× the tuned single-threaded CPU baseline.',
                },
                {
                    metric: '16.3×',
                    text: 'speedup from separable Gaussian convolution over direct convolution, on 1024 × 1024 images with a 15 × 15 kernel.',
                },
            ],
            technologies: ['C++', 'CUDA', 'Nsight Compute', 'SLURM'],
        },
        why: {
            question: 'Why did an access pattern that hurt on CPU become useful on GPU?',
            body: "I knew cache locality mattered, but knowing the phrase and being able to explain the performance difference were two different things. I wanted a controlled problem where I could change one variable at a time and explain the result from the hardware upward. Then the strangest part happened: the access pattern that hurt most on CPU became useful on GPU.",
        },
        href: '/work/kernels',
        githubUrl: 'https://github.com/GeekyMS/CUDA-learning',
        caseStudy: {
            tagline: "The algorithm didn't change. The memory access pattern did.",
            sections: [
                {
                    heading: 'The Baseline',
                    body: 'At N = 1024, the naive triple-loop matmul ran at 2.21 GFLOP/s. Same arithmetic as every version that followed — this is what "unoptimized" looks like on this machine.',
                },
                {
                    heading: 'The Transpose Experiment',
                    body: 'The naive kernel walked B column-by-column — B[0][j], B[1][j], B[2][j] — a stride that scatters across cache lines. Pre-transposing B into row-major BT turned that into a sequential read. No new arithmetic, no new algorithm. Just a 1.54× speedup, entirely from how memory was traversed.',
                },
                {
                    heading: 'Tiling',
                    body: 'Blocking the computation into L1-resident tiles kept the working set hot and pushed the result to 6.26 GFLOP/s — a 2.83× speedup over baseline.',
                },
                {
                    heading: 'CUDA',
                    body: "Porting to CUDA, I expected the CPU intuition to carry over directly. It didn't fully: the access pattern that hurt on CPU became advantageous on GPU, because a warp reading contiguous columns of B turns into a single coalesced memory transaction, while A gets broadcast across threads. Untiled, the CUDA kernel reached 429 GFLOP/s.",
                },
                {
                    heading: 'Beyond Matmul',
                    body: 'The same habit carried over to convolution. Implementing a separable Gaussian instead of the direct 2D form delivered a 16.3× speedup over direct convolution on 1024 × 1024 images with a 15 × 15 kernel.',
                },
            ],
            takeaway: '"Optimized" is incomplete unless you specify the machine.',
        },
    },
    {
        slug: 'transformer',
        index: '02',
        tag: 'Engineering',
        category: 'ML Systems',
        year: '2026',
        title: 'Transformer From Scratch',
        what: {
            subtitle: 'NumPy → C++',
            bullets: [
                {
                    metric: '1e-5',
                    text: 'tolerance: implemented a GPT-style transformer (embedding, LayerNorm, multi-head causal attention, GELU MLP) with a hand-derived backward pass, including the softmax/attention Jacobian, matching PyTorch to 1e-5.',
                },
                {
                    metric: null,
                    text: 'Verified gradients operator-by-operator against finite differences, and confirmed the training loop end-to-end by matching initial cross-entropy to the theoretical ln(V) untrained baseline.',
                },
                {
                    metric: null,
                    text: 'Ported the operator set to a custom C++ tensor library with a hand-written arena allocator and reverse-mode autograd tape, cross-validated against the NumPy reference through a binary dump/compare test harness.',
                },
            ],
            technologies: ['Python', 'NumPy', 'C++', 'PyTorch'],
        },
        why: {
            question: 'What actually has to happen for loss.backward() to work?',
            body: "I was comfortable writing loss.backward(). I wasn't comfortable being unable to explain what happened next. So I started stripping abstractions away: first PyTorch, then automatic differentiation, then NumPy itself. At some point the project stopped being purely about calculus and became a runtime and memory-management problem.",
        },
        href: '/work/transformer',
        githubUrl: 'https://github.com/GeekyMS/PersonalTransformer',
        caseStudy: {
            tagline: 'What exactly happens after loss.backward()?',
            sections: [
                {
                    heading: 'Why NumPy',
                    body: 'Starting from NumPy removes framework automation while keeping convenient numerical primitives — a middle ground between "trust the framework" and "trust nothing."',
                },
                {
                    heading: 'The Backward Pass',
                    body: 'Softmax and attention were the deep example: forward pass, then the Jacobian, then the vector-Jacobian product, then the actual implementation. Deriving the attention backward pass by hand forced an honest answer to what autograd was actually doing at each step.',
                },
                {
                    heading: 'Verification',
                    body: 'Every operator was checked two ways: analytically against a hand-derived gradient, and numerically against finite differences — both converging with PyTorch to 1e-5 tolerance. End to end, the untrained model\'s initial cross-entropy matched the theoretical ln(V) baseline.',
                },
                {
                    heading: 'C++',
                    body: 'Porting the operator set to C++ exposed what NumPy had been hiding: memory ownership, saved intermediates, graph traversal, tensor representation. That meant a hand-written arena allocator and a reverse-mode autograd tape. The project evolved naturally from mathematics into systems.',
                },
            ],
            takeaway: 'Autodiff begins as calculus and quickly becomes a runtime problem.',
        },
    },
];

export const experienceWork = [
    {
        slug: 'eotss',
        index: '01',
        tag: 'Engineering',
        category: 'Production Systems',
        year: '2026',
        title: 'EOTSS',
        what: {
            subtitle: 'AI Software Engineering Intern · Massachusetts EOTSS · May–Aug 2026',
            bullets: [
                {
                    metric: '~85%',
                    text: 'reduction in discovery time on a multimodal search platform over ~100K ecological restoration images.',
                },
                {
                    metric: '0 failed jobs',
                    text: 'across 300+ image bursts, by decoupling ingestion from model inference.',
                },
                {
                    metric: '~56%',
                    text: 'lower model inference cost on the search endpoint through prompt caching.',
                },
                {
                    metric: null,
                    accent: 'SSO',
                    text: 'Integrated enterprise single sign-on (SSO) for state agency staff.',
                },
            ],
            technologies: ['AWS', 'Bedrock', 'Vision-Language Models', 'Search'],
        },
        why: {
            question: 'What separates an AI capability from a production system people can depend on?',
            body: '"Use AI to search these images" sounded like a model problem. The VLM was only one box. Then came the actual questions: what happens when hundreds of images arrive together? What happens when one inference fails? What happens when each model call has a real marginal cost? What changes when actual staff depend on the answer?',
        },
        href: '/experience/eotss',
        caseStudy: {
            tagline: 'A model demo was the easy part. Making it dependable was the project.',
            sections: [
                {
                    heading: 'The Naive System',
                    body: 'Conceptually it was simple: image → VLM → tags → search. That system exists in a notebook. It does not survive contact with ~100K real images, bursty uploads, partial failures, real inference cost, and staff who need the answer to be right.',
                },
                {
                    heading: 'Approach',
                    body: 'The system keeps ingestion and model inference separate, so a problem in one never takes down the other, and it sits behind enterprise single sign-on for agency staff.',
                },
                {
                    heading: 'Reliability',
                    body: 'Decoupling ingestion from inference meant a failed model call never blocked the next upload. Across 300+ image bursts, that boundary held: zero failed jobs.',
                },
                {
                    heading: 'Retrieval',
                    body: 'Search performance came from deliberate storage and indexing decisions — the retrieval path needed to stay fast as the corpus grew, not just be correct.',
                },
                {
                    heading: 'Cost',
                    body: 'Structuring each prompt so its stable part could be cached, instead of reprocessed on every request, cut model inference cost roughly 56%.',
                },
            ],
            takeaway: 'Most of production AI engineering happened around the model rather than inside it.',
        },
    },
    {
        slug: 'ml4ed',
        index: '02',
        tag: 'Research',
        category: 'Research',
        year: '2025–26',
        title: 'ML4Ed',
        what: {
            subtitle: 'Undergraduate Research',
            bullets: [
                {
                    metric: '64% → 76%',
                    text: 'improvement in document section-boundary extraction on a 25-paper benchmark, using a multi-agent LLM pipeline that pairs ML layout detection with deterministic PDF-grounding gates.',
                },
                {
                    metric: null,
                    text: 'Built a Verifier / Error Analyst feedback loop that converged on corrections within three iterations.',
                },
                {
                    metric: null,
                    text: 'Designed a five-tier evaluation framework for LLM-generated long-form text: citation metrics, LLM-as-Judge scoring across seven quality dimensions, argumentative-role analysis, coherence, and text similarity, validated against human A/B and Likert protocols.',
                },
            ],
            technologies: ['LLMs', 'Python', 'Document Processing'],
        },
        why: {
            question: 'How do you build around a probabilistic component that can fail confidently?',
            body: "The model wasn't just getting answers wrong — it could be confidently wrong. That changed the question from \"Can the LLM extract this?\" to \"What evidence would make me trust the extraction?\" And eventually: \"How do we even know whether the system got better?\"",
        },
        href: '/experience/ml4ed',
        caseStudy: {
            tagline: 'What do you build around a model that can be confidently wrong?',
            sections: [
                {
                    heading: 'The Failure Class',
                    body: "Before the architecture, the failure mode: the extractor didn't fail loudly. It produced plausible, confidently wrong section boundaries — the kind of error that survives a casual read.",
                },
                {
                    heading: 'Architecture Evolution',
                    body: 'The system evolved in stages: a bare Extractor, then Extractor + Grounding, then Extractor → Verifier → Error Analyst in a corrective loop, then a targeted Null Challenger agent for the non-standard formats that loop kept surfacing, after finding that models confidently return false nulls under strict semantic criteria. Each stage existed because the previous one had a failure mode it could not see itself.',
                },
                {
                    heading: 'Evaluation',
                    body: 'Section-boundary extraction improved from 64% to 76% on a 25-paper benchmark — evidence of the architectural evolution, not the whole story. The harder problem was designing a five-tier evaluation framework (citation, LLM-as-Judge, role, coherence, similarity), validated against human A/B and Likert protocols, that could actually tell true improvement from noise.',
                },
            ],
            takeaway: 'Evaluation is not something applied after an AI system. It is part of the system.',
        },
    },
];

export const archiveWork = [
    {
        slug: 'datavault',
        year: '2025',
        title: 'DataVault',
        summary: 'Privacy-preserving natural-language retrieval over AES-256 encrypted data · Winner, HackUMass XIII',
        why: {
            question: 'Can natural-language access stay useful without exposing raw sensitive data to the model?',
        },
        githubUrl: 'https://github.com/P-Bhanu-Sohan/DataVault',
    },
    {
        slug: 'sentinel',
        year: '2025',
        title: 'Project Sentinel',
        summary: 'ML-based intrusion detection',
        githubUrl: 'https://github.com/GeekyMS/Autonomous-AI-Cybersecurity-Agent.git',
    },
];

export const currentlyItems = [
    { role: 'Undergraduate Researcher', context: 'ML4Ed Lab · UMass Amherst' },
    { role: 'Learning', context: 'how to write performant, hardware-aware code' },
];
