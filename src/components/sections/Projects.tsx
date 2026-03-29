"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects, sections } from "@/lib/data";

const projAccent = sections[3].accent;
const ease = [0.25, 0.1, 0.25, 1] as const;

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div ref={ref} className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease }}
          className="font-mono text-sm mb-12"
        >
          <span style={{ color: projAccent }}>deployments</span>
          <span className="text-muted">/</span>
        </motion.h2>

        {/* Project cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.08 + idx * 0.08, ease }}
              whileHover={{ y: -2 }}
              className="bg-white/[0.02] rounded-lg overflow-hidden hover:bg-white/[0.04] transition-colors duration-200"
              style={{
                borderTop: `2px solid ${project.accent}`,
              }}
            >
              <div className="p-6">
                {/* Title + Tag */}
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <span
                    className="inline-flex items-center px-2 py-0.5 text-xs font-mono rounded-full shrink-0 ml-2"
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
                      className="inline-flex items-center px-2 py-0.5 rounded text-xs font-mono bg-white/[0.04] text-muted"
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
                    className="inline-flex items-center gap-1.5 text-sm font-mono transition-colors duration-200 hover:underline underline-offset-4"
                    style={{ color: project.accent }}
                  >
                    {project.linkLabel}
                    <ExternalLink size={13} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
