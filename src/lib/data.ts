// ──────────────────────────────────────────────
// Portfolio Data — Single Source of Truth
// Matches JSM data structure for component compatibility
// ──────────────────────────────────────────────

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
  { name: "Resume", link: "/resume.pdf" },
];

export const gridItems = [
  {
    id: 1,
    title: "I research multi-agent AI systems and LLM robustness at ASU's CoRAL Lab",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "",
    spareImg: "",
  },
  {
    id: 2,
    title: "Collaborating globally on AI safety research",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly push boundaries",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "AI researcher with a passion for building intelligent systems.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 5,
    title: "Currently building multi-agent evaluation frameworks",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 6,
    title: "Want to collaborate on research or projects?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "GamED.AI",
    tag: "Ed-Tech",
    des: "Multi-agent system on LangGraph generating educational games from exam questions. 1st Place HackASU 2026.",
    accent: "#10B981",
    iconLists: ["LG", "FA", "NX", "GC"],
    link: "https://shivena99.github.io/GamED-AI/acl-demo/",
    linkLabel: "Live Demo",
  },
  {
    id: 2,
    title: "IntegrityShield",
    tag: "AI Safety",
    des: "Invisible watermarking protecting exam PDFs from AI solving, achieving 91-94% blocking rate. EACL 2026.",
    accent: "#3B82F6",
    iconLists: ["FL", "Re", "Py"],
    link: "https://github.com/shivena99/IntegrityShield",
    linkLabel: "GitHub",
  },
  {
    id: 3,
    title: "SentinelEdge",
    tag: "On-Device ML",
    des: "On-device scam call detection with federated learning and differential privacy. 1st Place HackASU 2026.",
    accent: "#F59E0B",
    iconLists: ["Wh", "XG", "FA", "Re"],
    link: "https://github.com/shivena99/SentinelEdge",
    linkLabel: "GitHub",
  },
  {
    id: 4,
    title: "DeALOG",
    tag: "Multi-Agent QA",
    des: "Decentralized multi-agent framework for multimodal question answering. ACL 2026 Under Review.",
    accent: "#A855F7",
    iconLists: ["Py", "MA", "LM"],
    link: "https://arxiv.org/abs/2602.00996",
    linkLabel: "Paper",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Graduate AI Researcher",
    desc: "Published at EACL 2026, 3 papers under review at ACL 2026. Building multi-agent systems, LLM evaluation, and AI safety tools at CoRAL Lab.",
    className: "md:col-span-2",
    thumbnail: "AI",
  },
  {
    id: 2,
    title: "Associate Software Engineer",
    desc: "Migrated 15+ modules for Siemens Healthineers, built OCR triaging platform for CitiusTech, and created mental health chatbot with AWS.",
    className: "md:col-span-2",
    thumbnail: "SE",
  },
];

export const socialMedia = [
  {
    id: 1,
    name: "GitHub",
    link: "https://github.com/shivena99",
  },
  {
    id: 2,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/shiven-agarwal/",
  },
];

// ── Legacy exports for backward compatibility ──

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  location: string;
}

export const personalInfo: PersonalInfo = {
  name: "Shiven Agarwal",
  title: "Graduate AI Researcher",
  email: "sagar147@asu.edu",
  phone: "(602) 384-1481",
  github: "https://github.com/shivena99",
  linkedin: "https://www.linkedin.com/in/shiven-agarwal/",
  location: "Tempe, AZ",
};

export const publications = [
  {
    title: "IntegrityShield: Safeguarding Exam Integrity Against LLMs",
    venue: "EACL 2026 Demo",
    status: "Accepted" as const,
    link: "https://arxiv.org/abs/2601.11093",
  },
  {
    title: "GamED.AI: Multi-Agent Educational Game Generation",
    venue: "ACL 2026",
    status: "Under Review" as const,
  },
  {
    title: "DeALOG: Decentralized Multi-Agent Multimodal QA",
    venue: "ACL 2026",
    status: "Under Review" as const,
    link: "https://arxiv.org/abs/2602.00996",
  },
  {
    title: "Multi-Agent Robustness Evaluation",
    venue: "ACL 2026",
    status: "Under Review" as const,
  },
];

export const skills = [
  {
    category: "Languages",
    items: ["Python", "C++", "JavaScript", "TypeScript", "SQL"],
  },
  {
    category: "Development",
    items: ["FastAPI", "Flask", "React", "Next.js", "Node.js", "PostgreSQL", "Docker", "Git"],
  },
  {
    category: "Cloud",
    items: ["AWS", "GCP", "GitHub Actions"],
  },
  {
    category: "ML / AI",
    items: ["PyTorch", "Scikit-Learn", "Transformers", "LangGraph", "XGBoost", "Federated Learning"],
  },
];
