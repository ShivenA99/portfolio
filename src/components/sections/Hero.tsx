"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

const researchAreas = [
  "Agentic AI",
  "LLM Evaluation",
  "AI Safety",
  "Privacy-Preserving ML",
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Dot grid - fades in */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 dot-grid"
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6">
        {/* System Active indicator */}
        <div className="mb-12 flex items-center gap-2 font-mono text-xs text-muted">
          <motion.span
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block h-2 w-2 rounded-full"
            style={{ backgroundColor: "#10B981" }}
          />
          <span>System Active</span>
        </div>

        {/* Name */}
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-[56px] font-bold text-white leading-tight mb-4">
          {personalInfo.name}
        </h1>

        {/* Subtitle */}
        <p className="font-body text-lg sm:text-xl text-muted mb-8">
          Graduate AI Researcher &middot; Arizona State University
        </p>

        {/* Research area tags */}
        <div className="flex flex-wrap gap-2 mb-12">
          {researchAreas.map((area) => (
            <span
              key={area}
              className="px-3 py-1 font-mono text-xs rounded-full border border-white/10 text-muted"
            >
              {area}
            </span>
          ))}
        </div>

        {/* Social links */}
        <div className="flex items-center gap-6 font-mono text-sm">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted hover:text-white transition-colors"
          >
            <GithubIcon size={16} />
            <span>GitHub</span>
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted hover:text-white transition-colors"
          >
            <LinkedinIcon size={16} />
            <span>LinkedIn</span>
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-muted hover:text-white transition-colors"
          >
            {personalInfo.email}
          </a>
        </div>
      </div>
    </section>
  );
}
