"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { ExternalLink, Trophy, FileText } from "lucide-react";

const projects = [
  {
    title: "GamED.AI",
    subtitle: "Multi-Agent Ed-Tech Platform",
    badges: [
      { label: "1st Place HackASU 2025", icon: Trophy, color: "text-yellow-400 border-yellow-400/20 bg-yellow-400/[0.05]" },
      { label: "ACL 2026 Under Review", icon: FileText, color: "text-purple border-purple/20 bg-purple/[0.05]" },
    ],
    description:
      "A multi-agent system built on LangGraph that generates interactive educational games from exam questions. Leverages SAM3 and VLM-based computer vision pipelines to extract and transform visual content into engaging learning experiences.",
    tech: ["LangGraph", "FastAPI", "Next.js", "GCP Cloud Run", "SAM3", "VLM"],
    gradient: "from-cyan to-blue-500",
  },
  {
    title: "IntegrityShield",
    subtitle: "AI Safety & Exam Integrity",
    badges: [
      { label: "EACL 2026 Demo Accepted", icon: FileText, color: "text-green-400 border-green-400/20 bg-green-400/[0.05]" },
    ],
    description:
      "An invisible watermarking system designed to protect exam PDFs from being solved by AI models. Achieves a 91-94% blocking rate against state-of-the-art LLMs while remaining imperceptible to human test-takers.",
    tech: ["Flask", "React", "PyMuPDF", "Python", "LLM Evaluation"],
    gradient: "from-purple to-pink-500",
  },
  {
    title: "SentinelEdge",
    subtitle: "On-Device ML for Scam Detection",
    badges: [
      { label: "1st Place HackASU 2026", icon: Trophy, color: "text-yellow-400 border-yellow-400/20 bg-yellow-400/[0.05]" },
    ],
    description:
      "Real-time on-device scam call detection system that combines Whisper speech-to-text with XGBoost classification. Employs federated learning and differential privacy to continuously improve while protecting user data.",
    tech: ["Whisper", "XGBoost", "FastAPI", "React", "Federated Learning"],
    gradient: "from-green-400 to-cyan",
  },
  {
    title: "DeALOG",
    subtitle: "Decentralized Multi-Agent QA",
    badges: [
      { label: "ACL 2026 Under Review", icon: FileText, color: "text-purple border-purple/20 bg-purple/[0.05]" },
    ],
    description:
      "A decentralized multi-agent framework for multimodal question answering. Agents collaborate through structured dialogue to decompose and solve complex questions spanning text, tables, and images.",
    tech: ["Python", "Multi-Agent", "LLMs", "Multimodal QA"],
    gradient: "from-orange-400 to-purple",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 relative">
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-cyan/[0.03] blur-[120px]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-cyan to-transparent" />
            <span className="text-cyan text-sm font-medium tracking-wider uppercase">
              Projects
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-16">
            Things I&apos;ve <span className="gradient-text">built</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <AnimatedSection key={project.title} delay={0.1 + i * 0.1}>
              <motion.div
                className="glass rounded-2xl p-6 sm:p-8 h-full flex flex-col glass-hover transition-all duration-300 group relative overflow-hidden"
                whileHover={{ y: -4 }}
              >
                {/* Gradient accent top bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${project.gradient} opacity-60 group-hover:opacity-100 transition-opacity`}
                />

                <div className="mb-4">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-cyan transition-colors duration-200">
                      {project.title}
                    </h3>
                    <ExternalLink
                      size={16}
                      className="text-muted opacity-0 group-hover:opacity-100 transition-opacity mt-1 shrink-0"
                    />
                  </div>
                  <p className="text-sm text-purple font-medium">
                    {project.subtitle}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.badges.map((badge) => (
                    <span
                      key={badge.label}
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-medium rounded-full border ${badge.color}`}
                    >
                      <badge.icon size={12} />
                      {badge.label}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-muted leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-[11px] font-mono text-muted rounded-md bg-white/[0.03] border border-white/[0.06]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
