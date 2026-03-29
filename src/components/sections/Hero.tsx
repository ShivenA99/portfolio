"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { personalInfo, sections } from "@/lib/data";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

const heroAccent = sections[0].accent;

const researchAreas = [
  "Agentic AI",
  "LLM Evaluation",
  "AI Safety",
  "Privacy-Preserving ML",
];

const ease = [0.25, 0.1, 0.25, 1] as const;

const nameWords = personalInfo.name.split(" ");

export default function Hero() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-end pb-32 overflow-hidden"
    >
      {/* Dot grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 dot-grid"
      />

      <div ref={ref} className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12">
        {/* Available for work badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease }}
          className="mb-12"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 font-mono text-xs text-emerald-400">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for work
          </span>
        </motion.div>

        {/* Name — word-by-word stagger */}
        <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight mb-2">
          {nameWords.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 + i * 0.1, ease }}
              className="inline-block mr-[0.3em]"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.28, ease }}
          className="font-body text-lg md:text-xl text-muted mt-2 mb-4"
        >
          Graduate AI Researcher &middot; Arizona State University
        </motion.p>

        {/* Bio paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.34, ease }}
          className="text-muted text-base max-w-xl mb-8"
        >
          I build multi-agent AI systems and study LLM robustness at ASU&apos;s
          CoRAL Lab, with papers at EACL 2026 and ACL 2026.
        </motion.p>

        {/* Research area tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4, ease }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {researchAreas.map((area, i) => (
            <motion.span
              key={area}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.08, ease }}
              className="px-4 py-2 font-mono text-xs rounded-full bg-white/[0.04] hover:bg-white/[0.08] transition-colors border border-white/[0.06] text-muted hover:text-white cursor-default"
            >
              {area}
            </motion.span>
          ))}
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.56, ease }}
          className="flex items-center gap-6 font-mono text-base"
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted hover:text-emerald-400 transition-colors duration-200 hover:underline underline-offset-4"
          >
            <GithubIcon size={16} />
            <span>GitHub</span>
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted hover:text-emerald-400 transition-colors duration-200 hover:underline underline-offset-4"
          >
            <LinkedinIcon size={16} />
            <span>LinkedIn</span>
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-muted hover:text-emerald-400 transition-colors duration-200 hover:underline underline-offset-4"
          >
            {personalInfo.email}
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.7, ease }}
          className="mt-16 mb-8 flex justify-start"
        >
          <span className="text-muted/60 text-xl animate-bounce select-none">
            &#8595;
          </span>
        </motion.div>
      </div>
    </section>
  );
}
