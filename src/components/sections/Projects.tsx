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
    <section id="projects" className="relative">
      <div ref={ref} className="max-w-6xl mx-auto px-6 md:px-12 py-24 md:py-32">
        {/* Section header */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease }}
          className="font-mono text-xs uppercase tracking-widest text-[#A855F7] mb-2"
        >
          Projects
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.04, ease }}
          className="font-heading text-3xl font-bold mb-12"
        >
          What I&apos;ve Built
        </motion.h2>

        {/* Project cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.08 + idx * 0.08, ease }}
              whileHover={{
                y: -4,
                boxShadow: `0 8px 30px ${project.accent}1A`,
              }}
              style={{ transition: "box-shadow 0.2s ease" }}
              className="bg-white/[0.03] rounded-xl overflow-hidden"
            >
              {/* Top accent bar */}
              <div
                className="h-0.5 w-full"
                style={{ backgroundColor: project.accent }}
              />

              {/* Card body */}
              <div className="p-8">
                {/* Title + Category badge */}
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <span
                    className="uppercase text-xs font-mono tracking-wider shrink-0 ml-2"
                    style={{ color: project.accent }}
                  >
                    {project.tag}
                  </span>
                </div>

                {/* Award / conference */}
                <p className="font-mono text-xs text-muted mb-3">
                  {project.tagDetail}
                </p>

                {/* Description */}
                <p className="text-muted text-sm leading-relaxed mt-3">
                  {project.description}
                </p>

                {/* Tech pills */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="bg-white/[0.04] px-3 py-1.5 rounded-full text-xs font-mono text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                {project.link && (
                  <div className="mt-4 flex gap-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs hover:underline underline-offset-4 inline-flex items-center gap-1.5"
                      style={{ color: project.accent }}
                    >
                      {project.linkLabel}
                      <ExternalLink size={12} />
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
