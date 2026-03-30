"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { workExperience, skills, personalInfo } from "@/lib/data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const itemVariant = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const categoryColors: Record<string, string> = {
  Languages:   "#C84B2F",
  "ML / AI":   "#1D6A8A",
  Development: "#5B5EA6",
  Cloud:       "#B45309",
};

export default function Background() {
  const expRef = useRef(null);
  const skillsRef = useRef(null);
  const expInView = useInView(expRef, { once: true, margin: "-80px" });
  const skillsInView = useInView(skillsRef, { once: true, margin: "-80px" });

  return (
    <section id="background" className="py-24 px-6 md:px-10 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <span className="section-label">Background</span>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mt-6">
          {/* ── Experience timeline ─────────────── */}
          <div>
            <h2
              className="heading-xl mb-10"
              style={{ fontFamily: "var(--font-jakarta, var(--font-heading))" }}
            >
              Experience
            </h2>

            <motion.div
              ref={expRef}
              variants={container}
              initial="hidden"
              animate={expInView ? "show" : "hidden"}
              className="relative"
            >
              {/* Vertical line */}
              <div
                className="absolute left-[5px] top-2 bottom-2"
                style={{ width: 1, background: "var(--border)" }}
              />

              {workExperience.map((role, idx) => (
                <motion.div
                  key={role.id}
                  variants={itemVariant}
                  className="relative flex gap-6 pb-10 last:pb-0"
                >
                  {/* Dot */}
                  <div
                    className="relative z-10 mt-1.5 shrink-0"
                    style={{
                      width: 11,
                      height: 11,
                      borderRadius: "50%",
                      background: idx === 0 ? "var(--accent)" : "var(--border)",
                      border: `2px solid ${idx === 0 ? "var(--accent)" : "var(--border)"}`,
                      boxShadow: idx === 0 ? "0 0 0 3px color-mix(in srgb, var(--accent) 20%, transparent)" : "none",
                    }}
                  />

                  {/* Content */}
                  <div className="flex flex-col gap-1.5">
                    <div className="flex flex-wrap items-baseline gap-2">
                      <h3
                        style={{
                          fontFamily: "var(--font-jakarta, var(--font-heading))",
                          fontWeight: 700,
                          fontSize: "1rem",
                          color: "var(--fg)",
                        }}
                      >
                        {role.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      {role.id === 1 ? (
                        <a
                          href={personalInfo.coralUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            fontSize: "0.82rem",
                            color: "var(--accent)",
                            fontWeight: 500,
                            textDecoration: "none",
                            borderBottom: "1px solid color-mix(in srgb, var(--accent) 40%, transparent)",
                            transition: "border-color 0.2s",
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.borderBottomColor = "var(--accent)")}
                          onMouseLeave={(e) => (e.currentTarget.style.borderBottomColor = "color-mix(in srgb, var(--accent) 40%, transparent)")}
                        >
                          {role.company}
                        </a>
                      ) : (
                        <span style={{ fontSize: "0.82rem", color: "var(--accent)", fontWeight: 500 }}>
                          {role.company}
                        </span>
                      )}
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.7rem",
                          color: "var(--muted)",
                          letterSpacing: "0.04em",
                        }}
                      >
                        {role.period}
                      </span>
                    </div>
                    <p
                      style={{
                        fontSize: "0.85rem",
                        color: "var(--muted)",
                        lineHeight: 1.65,
                        marginTop: 4,
                      }}
                    >
                      {role.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* ── Skills ─────────────────────────── */}
          <div>
            <h2
              className="heading-xl mb-10"
              style={{ fontFamily: "var(--font-jakarta, var(--font-heading))" }}
            >
              Stack
            </h2>

            <motion.div
              ref={skillsRef}
              variants={container}
              initial="hidden"
              animate={skillsInView ? "show" : "hidden"}
              className="flex flex-col gap-7"
            >
              {skills.map((group) => {
                const color = categoryColors[group.category] ?? "var(--accent)";
                return (
                  <motion.div key={group.category} variants={itemVariant}>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.68rem",
                        fontWeight: 600,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color,
                        display: "block",
                        marginBottom: 8,
                      }}
                    >
                      {group.category}
                    </span>
                    <p
                      style={{
                        fontSize: "0.9rem",
                        color: "var(--fg)",
                        lineHeight: 1.8,
                      }}
                    >
                      {group.items.join(" · ")}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
