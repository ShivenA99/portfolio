"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experience, education, sections } from "@/lib/data";

const expAccent = sections[2].accent;
const ease = [0.25, 0.1, 0.25, 1] as const;

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div ref={ref} className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease }}
          className="font-mono text-sm mb-12"
        >
          <span style={{ color: expAccent }}>training_log</span>
          <span className="text-muted">/</span>
        </motion.h2>

        {/* Experience entries */}
        <div className="space-y-4">
          {experience.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.08 + idx * 0.08, ease }}
              className="bg-white/[0.02] rounded-lg p-6"
            >
              {/* Timestamp */}
              <p className="font-mono text-sm text-muted mb-2">
                {exp.period}
              </p>

              {/* Title @ Company */}
              <h3 className="font-heading font-medium text-foreground mb-1">
                {exp.title}
                <span className="text-muted"> @ </span>
                <span style={{ color: expAccent }}>{exp.company}</span>
              </h3>

              {/* Location */}
              <p className="font-mono text-xs text-muted mb-4">
                {exp.location}
              </p>

              {/* Bullets */}
              <ul className="space-y-2 pl-4">
                {exp.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-muted"
                  >
                    <span
                      className="mt-1.5 h-1 w-1 rounded-full shrink-0"
                      style={{ backgroundColor: expAccent }}
                    />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Education - compact inline items */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.32, ease }}
          className="mt-12"
        >
          <p className="font-mono text-xs text-muted mb-4">education/</p>
          <div className="flex flex-wrap gap-4">
            {education.map((edu) => (
              <div
                key={edu.school}
                className="flex items-baseline gap-2 font-mono text-sm"
              >
                <span className="text-xs text-muted">{edu.period}</span>
                <span className="font-heading font-medium text-foreground">
                  {edu.degree}
                </span>
                <span className="text-muted">&mdash;</span>
                <span className="text-muted text-xs">{edu.school}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
