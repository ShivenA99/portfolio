// ──────────────────────────────────────────────
// Portfolio Data — Single Source of Truth
// ──────────────────────────────────────────────

export const navItems = [
  { name: "Work", link: "#projects" },
  { name: "Research", link: "#research" },
  { name: "Background", link: "#background" },
  { name: "Contact", link: "#contact" },
  { name: "Resume", link: "/portfolio/resume.pdf" },
];

export const projects = [
  {
    id: 1,
    title: "GamED.AI",
    tag: "Ed-Tech",
    award: "1st Place HackASU 2025 · ACL 2026 Demo",
    des: "Multi-agent system on LangGraph generating Bloom's-aligned educational games from exam questions. Accepted at ACL 2026 Demo.",
    accent: "#C84B2F",
    icon: "graduation",
    iconLists: ["LangGraph", "FastAPI", "Next.js", "GCP"],
    link: "https://shivena99.github.io/GamED-AI/acl-demo/",
    linkLabel: "Live Demo",
  },
  {
    id: 2,
    title: "IntegrityShield",
    tag: "AI Safety",
    award: "EACL 2026",
    des: "Invisible watermarking protecting exam PDFs from AI solving — 91–94% blocking rate. Published at EACL 2026 Demo.",
    accent: "#1D6A8A",
    icon: "shield",
    iconLists: ["Flask", "React", "Python"],
    link: "https://github.com/shivena99/IntegrityShield",
    linkLabel: "GitHub",
  },
  {
    id: 3,
    title: "SentinelEdge",
    tag: "On-Device ML",
    award: "1st Place HackASU 2026",
    des: "On-device scam call detection using federated learning and differential privacy. Real-time inference on edge hardware.",
    accent: "#B45309",
    icon: "wave",
    iconLists: ["Whisper", "XGBoost", "FastAPI", "React"],
    link: "https://github.com/shivena99/SentinelEdge",
    linkLabel: "GitHub",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Graduate AI Researcher",
    company: "CoRAL, Arizona State University",
    period: "Aug 2024 – Present",
    desc: "Published at EACL 2026. 2 papers accepted and 1 under review at ACL 2026. Building multi-agent evaluation frameworks, LLM robustness tools, and AI safety systems. 1st place at HackASU 2025 and 2026.",
  },
  {
    id: 2,
    title: "Associate Software Engineer",
    company: "AasPaas Online Services",
    period: "Jul 2021 – Jul 2024",
    desc: "Migrated 15+ modules for Siemens Healthineers. Built OCR triaging platform for CitiusTech. Created AWS-backed mental health chatbot serving production users.",
  },
];

export const publications = [
  {
    title: "IntegrityShield: Safeguarding Exam Integrity Against LLMs",
    venue: "EACL 2026 Demo",
    status: "Accepted" as const,
    link: "https://arxiv.org/abs/2601.11093",
  },
  {
    title: "GamED.AI: Multi-Agent Educational Game Generation",
    venue: "ACL 2026 Demo",
    status: "Accepted" as const,
  },
  {
    title: "DeALOG: Decentralized Multi-Agent Multimodal QA",
    venue: "ACL 2026 Findings",
    status: "Accepted" as const,
    link: "https://arxiv.org/abs/2602.00996",
  },
];

export const skills = [
  {
    category: "Languages",
    items: ["Python", "C++", "JavaScript", "TypeScript", "SQL"],
  },
  {
    category: "ML / AI",
    items: ["PyTorch", "Transformers", "LangGraph", "Scikit-Learn", "XGBoost", "Federated Learning"],
  },
  {
    category: "Development",
    items: ["FastAPI", "Flask", "React", "Next.js", "Node.js", "PostgreSQL", "Docker", "Git"],
  },
  {
    category: "Cloud",
    items: ["AWS", "GCP", "GitHub Actions"],
  },
];

export const personalInfo = {
  name: "Shiven Agarwal",
  title: "Graduate AI Researcher",
  email: "sagar147@asu.edu",
  github: "https://github.com/shivena99",
  linkedin: "https://www.linkedin.com/in/shiven-agarwal/",
  location: "Tempe, AZ",
  coralUrl: "https://coral-lab-asu.github.io/",
  hackAsuUrl: "https://hackasu-2025.devpost.com/",
};
