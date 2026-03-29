export interface NavLink {
  label: string;
  href: string;
}

export interface Education {
  degree: string;
  school: string;
  period: string;
}

export interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}

export interface Project {
  title: string;
  tag: string;
  tagDetail: string;
  accent: string;
  description: string;
  tech: string[];
  link?: string;
  linkLabel?: string;
}

export interface Publication {
  title: string;
  venue: string;
  status: "Accepted" | "Under Review";
  link?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Publications", href: "#publications" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const personalInfo = {
  name: "Shiven Agarwal",
  title: "Graduate AI Researcher",
  email: "sagar147@asu.edu",
  phone: "(602) 384-1481",
  github: "https://github.com/shivena99",
  linkedin: "https://www.linkedin.com/in/shiven-agarwal/",
  location: "Tempe, AZ",
};

export const education: Education[] = [
  {
    degree: "MS Computer Science",
    school: "Arizona State University",
    period: "Aug 2024 - May 2026",
  },
  {
    degree: "BE Electronics & Communication",
    school: "BITS Pilani Hyderabad",
    period: "Aug 2017 - Jul 2021",
  },
];

export const experience: ExperienceItem[] = [
  {
    title: "Graduate AI Researcher",
    company: "CoRAL Lab, Arizona State University",
    location: "Tempe, AZ",
    period: "Aug 2024 - Present",
    bullets: [
      "Published at EACL 2026 with 3 papers under review at ACL 2026",
      "Leading end-to-end development of research systems across agentic AI, LLM evaluation, AI safety, and privacy-preserving ML",
    ],
  },
  {
    title: "Associate Software Engineer",
    company: "AasPaas Online Services",
    location: "Hyderabad, India",
    period: "Jul 2021 - Jul 2024",
    bullets: [
      "Migrated 15+ modules on Siemens Healthineers' oncology patient portal from .NET to Angular and Node.js",
      "Developed patient form triaging platform for CitiusTech with Tesseract OCR",
      "Built mental health chatbot in React Native with AWS Lex and Lambda",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "GamED.AI",
    tag: "Ed-Tech",
    tagDetail: "1st Place HackASU 2025 | ACL 2026 Under Review",
    accent: "#10B981",
    description:
      "Multi-agent system on LangGraph generating educational games from exam questions.",
    tech: ["LangGraph", "FastAPI", "Next.js", "GCP Cloud Run", "SAM3", "VLM"],
    link: "https://shivena99.github.io/GamED-AI/acl-demo/",
    linkLabel: "Live Demo",
  },
  {
    title: "IntegrityShield",
    tag: "AI Safety",
    tagDetail: "EACL 2026 Demo Accepted",
    accent: "#3B82F6",
    description:
      "Invisible watermarking protecting exam PDFs from AI solving, achieving 91-94% blocking rate.",
    tech: ["Flask", "React", "PyMuPDF", "Python"],
    link: "https://github.com/shivena99/IntegrityShield",
    linkLabel: "GitHub",
  },
  {
    title: "SentinelEdge",
    tag: "On-Device ML",
    tagDetail: "1st Place HackASU 2026",
    accent: "#F59E0B",
    description:
      "On-device scam call detection with federated learning and differential privacy.",
    tech: ["Whisper", "XGBoost", "FastAPI", "React"],
    link: "https://github.com/shivena99/SentinelEdge",
    linkLabel: "GitHub",
  },
  {
    title: "DeALOG",
    tag: "Multi-Agent QA",
    tagDetail: "ACL 2026 Under Review",
    accent: "#34D399",
    description:
      "Decentralized multi-agent framework for multimodal question answering.",
    tech: ["Python", "Multi-Agent", "LLMs"],
    link: "https://arxiv.org/abs/2602.00996",
    linkLabel: "Paper",
  },
];

export const publications: Publication[] = [
  {
    title: "IntegrityShield: Safeguarding Exam Integrity Against LLMs",
    venue: "EACL 2026 Demo",
    status: "Accepted",
    link: "https://arxiv.org/abs/2601.11093",
  },
  {
    title: "GamED.AI: Multi-Agent Educational Game Generation",
    venue: "ACL 2026",
    status: "Under Review",
  },
  {
    title: "DeALOG: Decentralized Multi-Agent Multimodal QA",
    venue: "ACL 2026",
    status: "Under Review",
    link: "https://arxiv.org/abs/2602.00996",
  },
  {
    title: "Multi-Agent Robustness Evaluation",
    venue: "ACL 2026",
    status: "Under Review",
  },
];

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    items: ["Python", "C++", "JavaScript", "TypeScript", "SQL"],
  },
  {
    category: "Development",
    items: [
      "FastAPI",
      "Flask",
      "React",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Docker",
      "Git",
    ],
  },
  {
    category: "Cloud",
    items: ["AWS", "GCP", "GitHub Actions"],
  },
  {
    category: "ML / AI",
    items: [
      "PyTorch",
      "Scikit-Learn",
      "Transformers",
      "LangGraph",
      "XGBoost",
      "Federated Learning",
    ],
  },
];

export const stats = [
  { label: "Publications", value: "4" },
  { label: "Hackathon Wins", value: "2" },
  { label: "Years Experience", value: "3+" },
  { label: "Research Areas", value: "4" },
];
