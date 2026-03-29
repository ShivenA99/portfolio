"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects } from "@/lib/data";

const fadeIn = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section header */}
        <motion.h2
          custom={0}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          className="font-mono text-sm mb-12"
        >
          <span style={{ color: "#A855F7" }}>deployments</span>
          <span className="text-muted">/</span>
        </motion.h2>

        {/* Project cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              custom={1 + idx}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              className="group rounded-xl p-6 transition-all duration-200 hover:-translate-y-0.5"
              style={{
                backgroundColor: "rgba(168, 85, 247, 0.03)",
                borderTop: `2px solid ${project.accent}`,
                boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 4px 12px rgba(0,0,0,0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 1px 3px rgba(0,0,0,0.2)";
              }}
            >
              {/* Title + Status */}
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {project.title}
                </h3>
                <span
                  className="px-2 py-0.5 text-xs font-mono rounded-full shrink-0 ml-2"
                  style={{
                    backgroundColor: `${project.accent}15`,
                    color: project.accent,
                  }}
                >
                  {project.tag}
                </span>
              </div>

              {/* Tag detail */}
              <p className="font-mono text-xs text-muted mb-3">
                {project.tagDetail}
              </p>

              {/* Description */}
              <p className="text-sm text-muted leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Tech pills */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 text-xs font-mono rounded text-muted"
                    style={{ backgroundColor: "rgba(255,255,255,0.04)" }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Link */}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-mono transition-colors hover:opacity-80"
                  style={{ color: project.accent }}
                >
                  {project.linkLabel}
                  <ExternalLink size={13} />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
