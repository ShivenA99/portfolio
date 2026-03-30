"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { projects } from "@/lib/data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const rowVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as [number,number,number,number] } },
};

/* ── Ghost icon watermarks per project ───────── */
const GhostIcons: Record<string, React.ReactNode> = {
  graduation: (
    <svg viewBox="0 0 110 90" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
      {/* Mortarboard */}
      <polygon points="55,8 5,36 55,64 105,36" />
      <path d="M25 48 L25 72 Q55 84 85 72 L85 48" />
      {/* Tassel cord */}
      <line x1="100" y1="36" x2="100" y2="58" />
      <circle cx="100" cy="61" r="3.5" />
      {/* Diploma scroll */}
      <rect x="38" y="52" width="34" height="22" rx="2" opacity="0.5" />
      <line x1="44" y1="60" x2="72" y2="60" opacity="0.5" />
      <line x1="44" y1="66" x2="66" y2="66" opacity="0.5" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 80 96" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
      <path d="M40 4 L76 18 L76 54 Q76 82 40 92 Q4 82 4 54 L4 18 Z" />
      {/* Lock body */}
      <rect x="27" y="46" width="26" height="20" rx="3" />
      {/* Lock shackle */}
      <path d="M31 46 L31 38 Q31 28 40 28 Q49 28 49 38 L49 46" />
      {/* Keyhole */}
      <circle cx="40" cy="54" r="3" />
      <line x1="40" y1="57" x2="40" y2="63" />
    </svg>
  ),
  wave: (
    <svg viewBox="0 0 130 68" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      {/* Waveform bars */}
      <polyline points="2,34 12,14 22,54 32,8 42,60 52,22 62,44 72,10 82,50 92,26 102,42 112,16 122,48 128,34" />
      {/* Phone icon */}
      <path d="M8 72 Q6 66 10 62 L16 60 L20 66 L16 68 Q20 76 28 78 L30 74 L36 76 L34 82 Q28 86 22 82 Z" transform="scale(0.55) translate(170, 30)" />
    </svg>
  ),
};

function ProjectRow({ item, index }: { item: typeof projects[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const icon = GhostIcons[item.icon] ?? null;

  return (
    <motion.div variants={rowVariant}>
      <a
        href={item.link || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="group block py-7 relative overflow-hidden transition-all duration-250"
        style={{
          borderTop: `1px solid var(--border)`,
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Ghost icon watermark — fades in on hover at right */}
        {icon && (
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              right: -12,
              top: "50%",
              transform: `translateY(-50%) scale(${hovered ? 1 : 0.88})`,
              opacity: hovered ? 0.13 : 0,
              color: "var(--fg)",
              width: 120,
              height: 100,
              transition: "opacity 0.35s ease, transform 0.35s ease",
              pointerEvents: "none",
            }}
          >
            {icon}
          </div>
        )}

        <div className="flex flex-col gap-3">
          {/* Top row: number + title + award */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-baseline gap-4">
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  color: hovered ? "var(--accent)" : "var(--muted)",
                  letterSpacing: "0.08em",
                  minWidth: 20,
                  paddingTop: 4,
                  transition: "color 0.2s",
                }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3
                className="heading-lg transition-colors duration-200"
                style={{
                  color: hovered ? "var(--accent)" : "var(--fg)",
                  fontFamily: "var(--font-jakarta, var(--font-heading))",
                }}
              >
                {item.title}
              </h3>
            </div>

            {/* Tag + award */}
            <div className="flex items-center gap-2 shrink-0 flex-wrap justify-end">
              <span
                style={{
                  fontSize: "0.7rem",
                  fontFamily: "var(--font-mono)",
                  color: "var(--muted)",
                  background: "var(--surface)",
                  padding: "2px 8px",
                  borderRadius: 4,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                {item.tag}
              </span>
              {item.award && (
                <span
                  style={{
                    fontSize: "0.7rem",
                    fontFamily: "var(--font-mono)",
                    color: "var(--accent)",
                    background: "var(--accent-light)",
                    padding: "2px 8px",
                    borderRadius: 4,
                    letterSpacing: "0.06em",
                  }}
                >
                  {item.award}
                </span>
              )}
            </div>
          </div>

          {/* Description */}
          <p
            style={{
              fontSize: "0.9rem",
              color: "var(--muted)",
              lineHeight: 1.65,
              paddingLeft: 36,
              maxWidth: 680,
            }}
          >
            {item.des}
          </p>

          {/* Footer row: stack + link */}
          <div
            className="flex items-center justify-between"
            style={{ paddingLeft: 36 }}
          >
            <div className="flex flex-wrap gap-1.5">
              {item.iconLists.map((tech) => (
                <span
                  key={tech}
                  style={{
                    fontSize: "0.68rem",
                    fontFamily: "var(--font-mono)",
                    color: "var(--muted)",
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    padding: "2px 8px",
                    borderRadius: 4,
                    letterSpacing: "0.04em",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
            <span
              className="flex items-center gap-1.5 text-sm font-medium transition-all duration-200"
              style={{
                fontFamily: "var(--font-jakarta, var(--font-heading))",
                color: hovered ? "var(--accent)" : "var(--muted)",
              }}
            >
              {item.linkLabel || "View"}
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                style={{
                  transform: hovered ? "translate(2px, -2px)" : "translate(0, 0)",
                  transition: "transform 0.2s ease",
                }}
              >
                <path
                  d="M2 11L11 2M11 2H5M11 2v6"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>
      </a>
    </motion.div>
  );
}

export default function RecentProjects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 px-6 md:px-10 lg:px-20">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="flex items-end justify-between mb-2">
          <span className="section-label">Work</span>
        </div>
        <div
          className="flex items-end justify-between pb-6"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          <h2
            className="heading-xl"
            style={{ fontFamily: "var(--font-jakarta, var(--font-heading))" }}
          >
            Selected Work
          </h2>
        </div>

        {/* Project list */}
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {projects.map((item, index) => (
            <ProjectRow key={item.id} item={item} index={index} />
          ))}
        </motion.div>

        {/* Bottom border */}
        <div style={{ borderTop: "1px solid var(--border)" }} />
      </div>
    </section>
  );
}
