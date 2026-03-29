"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experience, education } from "@/lib/data";

const fadeIn = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-24 relative" ref={ref}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section header */}
        <motion.h2
          custom={0}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          className="font-mono text-sm mb-12"
        >
          <span style={{ color: "#F59E0B" }}>training_log</span>
          <span className="text-muted">/</span>
        </motion.h2>

        {/* Log entries */}
        <div className="space-y-10">
          {experience.map((exp, idx) => (
            <motion.div
              key={exp.company}
              custom={1 + idx}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
            >
              {/* Timestamp + role */}
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 mb-3">
                <span className="font-mono text-xs text-muted shrink-0">
                  [{exp.period}]
                </span>
                <div>
                  <span className="font-heading font-medium text-foreground">
                    {exp.title}
                  </span>
                  <span className="text-muted"> @ </span>
                  <span style={{ color: "#F59E0B" }}>{exp.company}</span>
                </div>
              </div>

              {/* Location */}
              <p className="font-mono text-xs text-muted ml-0 sm:ml-[calc(theme(spacing.4)+140px)] mb-3">
                {exp.location}
              </p>

              {/* Bullets - indented */}
              <ul className="space-y-2 ml-0 sm:ml-[calc(theme(spacing.4)+140px)]">
                {exp.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-muted"
                  >
                    <span
                      className="mt-1.5 h-1 w-1 rounded-full shrink-0"
                      style={{ backgroundColor: "#F59E0B" }}
                    />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Education - compact entries at bottom */}
        <motion.div
          custom={4}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          className="mt-16 pt-8"
          style={{ borderTop: "1px solid rgba(245, 158, 11, 0.08)" }}
        >
          <p className="font-mono text-xs text-muted mb-6">education/</p>
          <div className="space-y-4">
            {education.map((edu) => (
              <div
                key={edu.school}
                className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4"
              >
                <span className="font-mono text-xs text-muted shrink-0">
                  [{edu.period}]
                </span>
                <div>
                  <span className="text-sm font-heading font-medium text-foreground">
                    {edu.degree}
                  </span>
                  <span className="text-sm text-muted"> &mdash; {edu.school}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
