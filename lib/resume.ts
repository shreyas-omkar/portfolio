export type Link = { label: string; href: string; icon: "mail" | "github" | "linkedin" | "file" };

export const profile = {
  name: "Shreyas Hegde",
  tagline: "Compiler enthusiast, systems geek.",
  bio:
    "I build compilers, GPU runtimes, and low-level tools, currently deep in LLVM, heterogeneous dispatch, and making GPU kernels fast in Julia.",
  status: [
    "GSoC'26 @ JuliaGPU",
    "Research Intern @ IIT Kanpur",
    "Contributor @ GCC Rust",
  ],
  links: [
    { label: "Email", href: "mailto:shreyashegde@acm.org", icon: "mail" },
    { label: "GitHub", href: "https://github.com/shreyas-omkar", icon: "github" },
    { label: "LinkedIn", href: "https://linkedin.com/in/shreyas-omkar", icon: "linkedin" },
    { label: "Resume", href: "/resume.pdf", icon: "file" },
  ] satisfies Link[],
};

export type LinkedInPost = { src: string; height: number; href: string };

// Newest first, then the order they were pinned/sent, top to bottom.
export const linkedInPosts: LinkedInPost[] = [
  {
    src: "https://www.linkedin.com/embed/feed/update/urn:li:share:7508135195754049537?collapsed=1",
    height: 670,
    href: "https://www.linkedin.com/feed/update/urn:li:share:7508135195754049537",
  },
  {
    src: "https://www.linkedin.com/embed/feed/update/urn:li:share:7458806441034899456?collapsed=1",
    height: 670,
    href: "https://www.linkedin.com/feed/update/urn:li:share:7458806441034899456",
  },
  {
    src: "https://www.linkedin.com/embed/feed/update/urn:li:share:7459223784089227264?collapsed=1",
    height: 670,
    href: "https://www.linkedin.com/feed/update/urn:li:share:7459223784089227264",
  },
  {
    src: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7440854252979392512?collapsed=1",
    height: 628,
    href: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7440854252979392512",
  },
  {
    src: "https://www.linkedin.com/embed/feed/update/urn:li:share:7421238510352871424?collapsed=1",
    height: 580,
    href: "https://www.linkedin.com/feed/update/urn:li:share:7421238510352871424",
  },
];

export type Experience = {
  title: string;
  sub: string;
  date: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    title: "JuliaGPU: GSoC'26 Mentee / Maintainer",
    sub: "Remote",
    date: "May 2026 to Present",
    bullets: [
      "Maintainer of JuliaGPU, an organisation implementing vendor-specific and vendor-agnostic GPU/GPGPU kernels in Julia.",
      "Google Summer of Code mentee adding vendor-agnostic kernels in AcceleratedKernels.jl.",
      "Optimising KernelAbstractions.jl so vendor-agnostic kernels nearly match vendor-specific performance.",
    ],
  },
  {
    title: "Indian Institute of Technology, Kanpur: Research Intern",
    sub: "Hybrid",
    date: "May 2025 to Present",
    bullets: [
      "Heterogeneous dispatch systems for CPU / GPU / QPU.",
      "Cache warming and prediction-based dispatch.",
    ],
  },
];

export type ContribOrg = { name: string; logo: string; url: string };

// Reputed orgs contributed to, pulled from
// github.com/shreyas-omkar/shreyas-omkar/blob/main/CONTRIBUTIONS.md on 2026-08-23.
// Personal / own repos (SiMG, SecureWipe, shreyas-omkar) are left out, since
// those are one-off or already shown under Projects.
export const contribOrgs: ContribOrg[] = [
  { name: "JuliaGPU", logo: "/orgs/juliagpu.png", url: "https://github.com/JuliaGPU" },
  { name: "Rust-GCC", logo: "/orgs/rust-gcc.png", url: "https://github.com/Rust-GCC" },
  { name: "JuliaLang", logo: "/orgs/julialang.png", url: "https://github.com/JuliaLang" },
  { name: "Emscripten", logo: "/orgs/emscripten.png", url: "https://github.com/emscripten-core" },
];

export type Contribution = {
  org: string;
  repo: string;
  title: string;
  status: "merged" | "open" | "closed";
  url: string;
};

// Status reflects each PR's live state on GitHub (open / merged / closed
// without merging), checked via `gh api repos/<repo>/pulls/<n>` on 2026-09-24,
// against github.com/shreyas-omkar/shreyas-omkar/blob/main/CONTRIBUTIONS.md.
// Own repos (SiMG, SecureWipe, shreyas-omkar) are left out.
export const contributions: Contribution[] = [
  { org: "JuliaGPU", repo: "AcceleratedKernels.jl", title: "feat: Add multi-argument map and map!", status: "open", url: "https://github.com/JuliaGPU/AcceleratedKernels.jl/pull/130" },
  { org: "JuliaGPU", repo: "AcceleratedKernels.jl", title: "feat: Support sort(A; dims=1) in RadixSort via a segmented radix", status: "open", url: "https://github.com/JuliaGPU/AcceleratedKernels.jl/pull/129" },
  { org: "JuliaGPU", repo: "GPUArrays.jl", title: "feat: sort / sort! delegated to AcceleratedKernels", status: "open", url: "https://github.com/JuliaGPU/GPUArrays.jl/pull/788" },
  { org: "JuliaGPU", repo: "GPUArrays.jl", title: "feat: Add accumulate, cumsum and cumprod using AcceleratedKernels", status: "open", url: "https://github.com/JuliaGPU/GPUArrays.jl/pull/787" },
  { org: "JuliaGPU", repo: "GPUArrays.jl", title: "feat: Adding Base.reverse / reverse! support using AcceleratedKernels.jl", status: "open", url: "https://github.com/JuliaGPU/GPUArrays.jl/pull/786" },
  { org: "vishruth-thimmaiah", repo: "segfault26", title: "feat: add accelerator backend on LLDB's accelerator-plugin framework", status: "open", url: "https://github.com/vishruth-thimmaiah/segfault26/pull/25" },
  { org: "vishruth-thimmaiah", repo: "segfault26", title: "feat: add OpenCL vector type support to variable inspection", status: "merged", url: "https://github.com/vishruth-thimmaiah/segfault26/pull/23" },
  { org: "JuliaGPU", repo: "GPUArrays.jl", title: "Add a sorting interface", status: "closed", url: "https://github.com/JuliaGPU/GPUArrays.jl/pull/776" },
  { org: "JuliaGPU", repo: "AcceleratedKernels.jl", title: "Add BitonicSort, a GPU sorting network for small arrays and short slices", status: "merged", url: "https://github.com/JuliaGPU/AcceleratedKernels.jl/pull/126" },
  { org: "JuliaGPU", repo: "AcceleratedKernels.jl", title: "perf(sort): packed-key fast path for sort(A; dims=1)", status: "closed", url: "https://github.com/JuliaGPU/AcceleratedKernels.jl/pull/121" },
  { org: "JuliaGPU", repo: "AMDGPU.jl", title: "Guard empty-array launch in out-of-place reverse", status: "merged", url: "https://github.com/JuliaGPU/AMDGPU.jl/pull/1069" },
  { org: "JuliaGPU", repo: "AcceleratedKernels.jl", title: "Add start/stop keywords to reverse and reverse!", status: "closed", url: "https://github.com/JuliaGPU/AcceleratedKernels.jl/pull/119" },
  { org: "JuliaGPU", repo: "AcceleratedKernels.jl", title: "perf(reverse): use a dedicated kernel for the dims reversal", status: "closed", url: "https://github.com/JuliaGPU/AcceleratedKernels.jl/pull/118" },
  { org: "JuliaGPU", repo: "AcceleratedKernels.jl", title: "Add dims support to sort, sort!, sortperm and sortperm!", status: "merged", url: "https://github.com/JuliaGPU/AcceleratedKernels.jl/pull/117" },
  { org: "JuliaGPU", repo: "AcceleratedKernels.jl", title: "Fix DecoupledLookback with a device-scope memory fence", status: "merged", url: "https://github.com/JuliaGPU/AcceleratedKernels.jl/pull/116" },
  { org: "JuliaGPU", repo: "AcceleratedKernels.jl", title: "feat(findall): Add findall kernel", status: "merged", url: "https://github.com/JuliaGPU/AcceleratedKernels.jl/pull/115" },
  { org: "JuliaGPU", repo: "AcceleratedKernels.jl", title: "Add dims support to reverse and reverse!", status: "merged", url: "https://github.com/JuliaGPU/AcceleratedKernels.jl/pull/114" },
  { org: "JuliaGPU", repo: "AcceleratedKernels.jl", title: "fix(accumulate): keep GPU scans uniform and non-divergent across backends", status: "closed", url: "https://github.com/JuliaGPU/AcceleratedKernels.jl/pull/112" },
  { org: "JuliaGPU", repo: "AcceleratedKernels.jl", title: "Make GPU scans process multiple items per thread", status: "merged", url: "https://github.com/JuliaGPU/AcceleratedKernels.jl/pull/108" },
  { org: "JuliaGPU", repo: "AcceleratedKernels.jl", title: "Make GPU reductions process multiple items per thread", status: "merged", url: "https://github.com/JuliaGPU/AcceleratedKernels.jl/pull/107" },
  { org: "JuliaGPU", repo: "AcceleratedKernels.jl", title: "Reduce: vectorize contiguous by-block loads", status: "merged", url: "https://github.com/JuliaGPU/AcceleratedKernels.jl/pull/105" },
  { org: "JuliaGPU", repo: "AcceleratedKernels.jl", title: "ci(opencl): run POCL under --check-bounds=auto; skip scan on POCL", status: "closed", url: "https://github.com/JuliaGPU/AcceleratedKernels.jl/pull/104" },
  { org: "JuliaGPU", repo: "AcceleratedKernels.jl", title: "Fix OpenCL/POCL CI: run under --check-bounds=auto, skip scan on POCL", status: "closed", url: "https://github.com/JuliaGPU/AcceleratedKernels.jl/pull/103" },
  { org: "JuliaGPU", repo: "AcceleratedKernels.jl", title: "Add reverse! and reverse", status: "merged", url: "https://github.com/JuliaGPU/AcceleratedKernels.jl/pull/102" },
  { org: "JuliaGPU", repo: "AcceleratedKernels.jl", title: "Fix DecoupledLookback cross-block coherence (completes #91)", status: "closed", url: "https://github.com/JuliaGPU/AcceleratedKernels.jl/pull/98" },
  { org: "JuliaGPU", repo: "AcceleratedKernels.jl", title: "Optimize Radix sort", status: "merged", url: "https://github.com/JuliaGPU/AcceleratedKernels.jl/pull/97" },
  { org: "JuliaGPU", repo: "AcceleratedKernels.jl", title: "Optimize GPU radix sort: ballot kernels, fused range, skip-pass, tuning", status: "closed", url: "https://github.com/JuliaGPU/AcceleratedKernels.jl/pull/93" },
  { org: "JuliaGPU", repo: "KernelAbstractions.jl", title: "feat(intrinsics): add KI.vload / KI.vstore! for wide vector memory operations", status: "closed", url: "https://github.com/JuliaGPU/KernelAbstractions.jl/pull/719" },
  { org: "JuliaGPU", repo: "AcceleratedKernels.jl", title: "Add opt-in GPU radix sort via sort alg keyword", status: "merged", url: "https://github.com/JuliaGPU/AcceleratedKernels.jl/pull/90" },
  { org: "JuliaGPU", repo: "GPUArrays.jl", title: "Delegate mapreducedim! to AcceleratedKernels.jl", status: "closed", url: "https://github.com/JuliaGPU/GPUArrays.jl/pull/725" },
  { org: "JuliaGPU", repo: "AcceleratedKernels.jl", title: "Expand dimensional mapreduce / reduce", status: "merged", url: "https://github.com/JuliaGPU/AcceleratedKernels.jl/pull/83" },
  { org: "JuliaGPU", repo: "cuTile.jl", title: "Subtype AbstractArray for TileArray", status: "closed", url: "https://github.com/JuliaGPU/cuTile.jl/pull/176" },
  { org: "JuliaGPU", repo: "GPUArrays.jl", title: "feat: add GPU-native kron support for Diagonal matrices", status: "merged", url: "https://github.com/JuliaGPU/GPUArrays.jl/pull/690" },
  { org: "JuliaGPU", repo: "cuTile.jl", title: "Add alias-aware token threading for memory operations", status: "merged", url: "https://github.com/JuliaGPU/cuTile.jl/pull/89" },
  { org: "Rust-GCC", repo: "gccrs", title: "gccrs: avoid ICE when canonical path record is missing", status: "open", url: "https://github.com/Rust-GCC/gccrs/pull/4415" },
  { org: "JuliaGPU", repo: "GPUArrays.jl", title: "Specialize ReshapedArray to resolve setindex! ambiguities", status: "merged", url: "https://github.com/JuliaGPU/GPUArrays.jl/pull/680" },
  { org: "JuliaGPU", repo: "GPUArrays.jl", title: "feat: Implement issorted for AbstractGPUArray without scalar indexing", status: "merged", url: "https://github.com/JuliaGPU/GPUArrays.jl/pull/678" },
  { org: "JuliaLang", repo: "julia", title: "Fix OutOfMemory in arrayshow with unsigned indices", status: "open", url: "https://github.com/JuliaLang/julia/pull/59925" },
  { org: "Emscripten", repo: "emscripten", title: "[memoryprofiler] Add CSS class to parent div", status: "merged", url: "https://github.com/emscripten-core/emscripten/pull/25595" },
  { org: "Rust-GCC", repo: "gccrs", title: "gccrs: Fix ICE in no input file", status: "open", url: "https://github.com/Rust-GCC/gccrs/pull/4240" },
  { org: "Rust-GCC", repo: "gccrs", title: "gcc: Prevent ICE on no input file", status: "closed", url: "https://github.com/Rust-GCC/gccrs/pull/4203" },
];

// Live data (stars, language, description, url) pulled from the pinned repos
// on github.com/shreyas-omkar via `gh api graphql` on 2026-08-22.
export type Project = {
  name: string;
  org: string;
  url: string;
  image: string;
  language: string;
  languageColor: string;
  stars: number;
  description: string;
};

export const projects: Project[] = [
  {
    name: "SecureWipe",
    org: "pointblank-club",
    url: "https://github.com/pointblank-club/SecureWipe",
    image: "/repos/securewipe.png",
    language: "C++",
    languageColor: "#f34b7d",
    stars: 46,
    description:
      "Cross-platform, forensic-grade secure data wiping tool, built as an ISO on Tiny Core Linux. Implements device-level wipe workflows (ATA Secure Erase, NVMe Sanitize, SCSI SANITIZE, ADB/Fastboot) with verification to guarantee irrecoverable deletion.",
  },
  {
    name: "AcceleratedKernels.jl",
    org: "JuliaGPU",
    url: "https://github.com/JuliaGPU/AcceleratedKernels.jl",
    image: "/repos/accelerated-kernels.png",
    language: "Julia",
    languageColor: "#a270ba",
    stars: 202,
    description:
      "Cross-architecture parallel algorithms for Julia's CPU and GPU backends, targeting multithreaded CPUs and GPUs via Intel oneAPI, AMD ROCm, Apple Metal, and Nvidia CUDA. I contribute vendor-agnostic kernels here as part of GSoC'26.",
  },
  {
    name: "Compromyler",
    org: "vishruth-thimmaiah/compromylr",
    url: "https://github.com/vishruth-thimmaiah/compromylr",
    image: "/repos/compromylr.png",
    language: "C++",
    languageColor: "#f34b7d",
    stars: 4,
    description:
      'A tri-layer binary analysis system that detects compromised compilers, inspired by Ken Thompson\'s "Reflections on Trusting Trust." Uses Diverse Double Compilation, CFG similarity (Ghidra + BinDiff), and ptrace-based syscall tracing. 1st place, Aegis Sandbox 2.0.',
  },
  {
    name: "SiMG",
    org: "ShreyashSri",
    url: "https://github.com/ShreyashSri/SiMG",
    image: "/repos/simg.png",
    language: "TypeScript",
    languageColor: "#3178c6",
    stars: 1,
    description:
      "A cross-platform Electron app that cryptographically verifies medical DICOM images before they reach an AI inference model, catching supply-chain attacks, adversarial converter compromises, and pipeline failures. Runner-up, HackNockturne 2.0.",
  },
  {
    name: "Steensgaard",
    org: "shreyas-omkar",
    url: "https://github.com/shreyas-omkar/Steensgaard",
    image: "/repos/steensgaard.png",
    language: "C++",
    languageColor: "#f34b7d",
    stars: 2,
    description: "An LLVM pass implementing Steensgaard's pointer analysis.",
  },
  {
    name: "Lisp-Compiler",
    org: "shreyas-omkar",
    url: "https://github.com/shreyas-omkar/Lisp-Compiler",
    image: "/repos/lisp-compiler.png",
    language: "Zig",
    languageColor: "#ec915c",
    stars: 4,
    description:
      "A minimal Lisp interpreter written in Zig that parses and evaluates arithmetic expressions using an AST, built for learning, performance, and fun.",
  },
];

export type Achievement = { bold: string; rest: string };

export const achievements: Achievement[] = [
  {
    bold: "Selected: Google Summer of Code 2026",
    rest: "The Julia Language.",
  },
  {
    bold: "1st place: Aegis Sandbox 2.0",
    rest: "Designed a compiler that injects vulnerabilities into every binary it compiles, plus a tool to test the integrity of the compiler.",
  },
  {
    bold: "Runner-up: HackNockturne 2.0",
    rest: "A solution to safely process DICOM files from medical imaging devices using SiMG, a custom binary, for comparison and processing.",
  },
];

export type SkillItem = { name: string; icon: string };

export const skills: { group: string; items: SkillItem[] }[] = [
  {
    group: "Languages",
    items: [
      { name: "C", icon: "c" },
      { name: "C++", icon: "cplusplus" },
      { name: "Zig", icon: "zig" },
      { name: "Julia", icon: "julia" },
      { name: "Bash", icon: "gnubash" },
      { name: "TypeScript", icon: "typescript" },
    ],
  },
  {
    group: "Compilers",
    items: [
      { name: "LLVM / Clang", icon: "llvm" },
      { name: "GCC / GDB", icon: "gnu" },
      { name: "CMake", icon: "cmake" },
      { name: "Make", icon: "make" },
    ],
  },
  {
    group: "Tooling",
    items: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "Linux", icon: "linux" },
    ],
  },
];

export const education = {
  school: "Dayananda Sagar College of Engineering",
  date: "Jul 2024 to Jun 2028",
  sub: "B.E., Information Science and Engineering · GPA 9.8/10 · Bengaluru, India",
};
