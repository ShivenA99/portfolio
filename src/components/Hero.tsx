"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IconMail } from "@tabler/icons-react";
import { FloatingBackground } from "./ui/FloatingBackground";
import { personalInfo } from "@/lib/data";

/* ── Magnetic button ──────────────────────── */
function MagneticButton({
  href,
  children,
  className,
  style,
  target,
  rel,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  target?: string;
  rel?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 220, damping: 18, mass: 0.6 });
  const y = useSpring(rawY, { stiffness: 220, damping: 18, mass: 0.6 });

  const handleMove = (e: React.MouseEvent) => {
    const rect = ref.current!.getBoundingClientRect();
    rawX.set((e.clientX - rect.left - rect.width / 2) * 0.32);
    rawY.set((e.clientY - rect.top - rect.height / 2) * 0.32);
  };

  const handleLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      className={className}
      style={{ x, y, ...style }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </motion.a>
  );
}

/* ── Stagger config ───────────────────────── */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
};

/* ── Stats row ────────────────────────────── */
const stats = [
  { label: "EACL 2026", note: "Published" },
  { label: "1st Place ×2", note: "HackASU '25 & '26" },
  { label: "4 Papers", note: "All accepted" },
  { label: "3+ yrs", note: "Industry" },
];

export default function Hero() {
  /* ── Mouse tracking for parallax ─────────── */
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springX = useSpring(rawX, { stiffness: 55, damping: 22, mass: 0.8 });
  const springY = useSpring(rawY, { stiffness: 55, damping: 22, mass: 0.8 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    rawX.set(e.clientX - rect.left - rect.width / 2);
    rawY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-10 lg:px-20 pt-28 pb-16"
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <FloatingBackground springX={springX} springY={springY} />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* ── Left: Content ───────────────────── */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-6"
        >
          {/* Eyebrow */}
          <motion.div variants={item}>
            <span
              className="section-label"
              style={{ color: "var(--muted)" }}
            >
              Graduate AI Researcher &nbsp;·&nbsp; Arizona State University
            </span>
          </motion.div>

          {/* Name */}
          <motion.div variants={item}>
            <h1
              className="heading-display"
              style={{ fontFamily: "var(--font-jakarta, var(--font-heading))" }}
            >
              Shiven
              <br />
              Agarwal
              <span style={{ color: "var(--accent)" }}>.</span>
            </h1>
          </motion.div>

          {/* Bio */}
          <motion.p
            variants={item}
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.65,
              color: "var(--muted)",
              maxWidth: 480,
            }}
          >
            Building multi-agent AI systems that{" "}
            <span style={{ color: "var(--fg)", fontWeight: 500 }}>learn</span>,{" "}
            <span style={{ color: "var(--fg)", fontWeight: 500 }}>reason</span>, and{" "}
            <span style={{ color: "var(--fg)", fontWeight: 500 }}>protect</span>.
            Researching LLM robustness and AI safety at ASU&apos;s CoRAL.
          </motion.p>

          {/* Stats row */}
          <motion.div
            variants={item}
            className="flex flex-wrap gap-x-6 gap-y-3 pt-1"
          >
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col">
                <span
                  style={{
                    fontFamily: "var(--font-jakarta, var(--font-heading))",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    color: "var(--fg)",
                  }}
                >
                  {s.label}
                </span>
                <span
                  style={{
                    fontSize: "0.7rem",
                    fontFamily: "var(--font-mono)",
                    color: "var(--muted)",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  {s.note}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Divider */}
          <motion.div
            variants={item}
            style={{ height: 1, background: "var(--border)", width: "100%" }}
          />

          {/* CTAs — magnetic */}
          <motion.div variants={item} className="flex flex-wrap items-center gap-4">
            <MagneticButton
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 hover:brightness-110 active:scale-95"
              style={{
                background: "var(--accent)",
                color: "#fff",
                fontFamily: "var(--font-jakarta, var(--font-heading))",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              View my work
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </MagneticButton>

            <MagneticButton
              href="/portfolio/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 hover:brightness-95 active:scale-95"
              style={{
                background: "var(--surface)",
                color: "var(--fg)",
                border: "1px solid var(--border)",
                fontFamily: "var(--font-jakarta, var(--font-heading))",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              Resume
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M6.5 2v7M3 6l3.5 3.5L10 6M2.5 11h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </MagneticButton>
          </motion.div>

          {/* Social links */}
          <motion.div variants={item} className="flex items-center gap-5">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="underline-reveal flex items-center gap-1.5 text-sm transition-colors duration-200"
              style={{ color: "var(--muted)", fontFamily: "var(--font-mono)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--fg)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--muted)")}
            >
              <FaGithub className="w-4 h-4" />
              GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="underline-reveal flex items-center gap-1.5 text-sm transition-colors duration-200"
              style={{ color: "var(--muted)", fontFamily: "var(--font-mono)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--fg)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--muted)")}
            >
              <FaLinkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="underline-reveal flex items-center gap-1.5 text-sm transition-colors duration-200"
              style={{ color: "var(--muted)", fontFamily: "var(--font-mono)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--fg)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--muted)")}
            >
              <IconMail className="w-4 h-4" />
              Email
            </a>
          </motion.div>
        </motion.div>

        {/* ── Right: Decorative spacer (floating elements positioned absolutely) */}
        <div className="hidden lg:block" aria-hidden="true" />
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        style={{ color: "var(--muted)" }}
      >
        <span style={{ fontSize: "0.65rem", fontFamily: "var(--font-mono)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
