"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-cyan/[0.07] blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-purple/[0.07] blur-[120px] animate-pulse" />
      </div>

      {/* Dot pattern overlay */}
      <div className="absolute inset-0 dot-pattern opacity-40" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-wider uppercase rounded-full border border-cyan/20 text-cyan bg-cyan/[0.05]">
            Open to Research Collaborations
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text">Shiven Agarwal</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-4 leading-relaxed"
        >
          Graduate AI Researcher at{" "}
          <span className="text-foreground font-medium">Arizona State University</span>
          , building intelligent multi-agent systems and making LLMs more robust and safe.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-sm text-muted mb-10"
        >
          Published at EACL 2026 &middot; 3 papers under review at ACL 2026 &middot; 2x Hackathon Winner
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center justify-center gap-4 mb-16"
        >
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-6 py-3 text-sm font-medium rounded-xl bg-gradient-to-r from-cyan to-purple text-white hover:opacity-90 transition-opacity duration-200 shadow-lg shadow-cyan/20"
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-6 py-3 text-sm font-medium rounded-xl border border-white/[0.1] text-foreground hover:bg-white/[0.04] transition-all duration-200"
          >
            View Projects
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex items-center justify-center gap-5"
        >
          <motion.a
            href="https://github.com/shivena99"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl border border-white/[0.06] text-muted hover:text-cyan hover:border-cyan/30 hover:bg-cyan/[0.05] transition-all duration-200"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="GitHub"
          >
            <GithubIcon size={20} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/shiven-agarwal/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl border border-white/[0.06] text-muted hover:text-cyan hover:border-cyan/30 hover:bg-cyan/[0.05] transition-all duration-200"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={20} />
          </motion.a>
          <motion.a
            href="mailto:sagar147@asu.edu"
            className="p-3 rounded-xl border border-white/[0.06] text-muted hover:text-cyan hover:border-cyan/30 hover:bg-cyan/[0.05] transition-all duration-200"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Email"
          >
            <Mail size={20} />
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="text-muted/50"
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
