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
    <section id="experience" className="relative">
      <div ref={ref} className="max-w-6xl mx-auto px-6 md:px-12 py-24 md:py-32">
        {/* Section header */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease }}
          className="font-mono text-xs uppercase tracking-widest text-[#F59E0B] mb-2"
        >
          Experience
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.04, ease }}
          className="font-heading text-3xl font-bold mb-12"
        >
          Where I&apos;ve Worked
        </motion.h2>

        {/* Timeline container */}
        <div className="relative pl-8">
          {/* Vertical timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[#F59E0B]/40 to-transparent" />

          {/* Experience entries */}
          {experience.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.08 + idx * 0.08, ease }}
              className="relative mb-6"
            >
              {/* Timeline dot */}
              <div
                className="absolute -left-8 top-8 w-2 h-2 rounded-full -translate-x-1/2"
                style={{ backgroundColor: expAccent }}
              />

              {/* Entry card */}
              <div className="bg-white/[0.03] rounded-xl p-8">
                {/* Timestamp */}
                <p className="font-mono text-xs text-[#F59E0B]/60 mb-2">
                  {exp.period}
                </p>

                {/* Role title */}
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  {exp.title}
                </h3>

                {/* Company */}
                <p className="text-[#F59E0B] font-medium mt-1">{exp.company}</p>

                {/* Location */}
                <p className="font-mono text-xs text-muted mt-1 mb-4">
                  {exp.location}
                </p>

                {/* Bullets */}
                <ul className="pl-4 space-y-2">
                  {exp.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-muted text-sm leading-relaxed"
                    >
                      <span
                        className="mt-1.5 h-1 w-1 rounded-full shrink-0"
                        style={{ backgroundColor: expAccent }}
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education grid at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.4,
            delay: 0.08 + experience.length * 0.08,
            ease,
          }}
          className="mt-12"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-[#F59E0B] mb-4">
            Education
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {education.map((edu, i) => (
              <motion.div
                key={edu.school}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.4,
                  delay: 0.16 + experience.length * 0.08 + i * 0.08,
                  ease,
                }}
                className="bg-white/[0.03] rounded-xl p-8"
              >
                <p className="font-heading font-semibold text-foreground">
                  {edu.degree}
                </p>
                <p className="text-sm text-muted">{edu.school}</p>
                <p className="font-mono text-xs text-muted mt-1">{edu.period}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
