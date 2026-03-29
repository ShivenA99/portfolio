"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { education, stats, sections } from "@/lib/data";

const aboutAccent = sections[1].accent;
const ease = [0.25, 0.1, 0.25, 1] as const;

const researchInterests = [
  "Agentic AI",
  "LLM Evaluation",
  "AI Safety",
  "Privacy-Preserving ML",
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative">
      <div ref={ref} className="max-w-6xl mx-auto px-6 md:px-12 py-24 md:py-32">
        {/* Section header */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease }}
          className="font-mono text-xs uppercase tracking-widest text-[#0891B2] mb-2"
        >
          About
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.04, ease }}
          className="font-heading text-3xl font-bold mb-12"
        >
          Who I Am
        </motion.h2>

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Bio card - spans 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.08, ease }}
            whileHover={{ y: -2 }}
            className="md:col-span-2 bg-white/[0.03] rounded-xl p-8 hover:bg-white/[0.05] transition-all duration-300"
          >
            <p className="text-muted leading-relaxed">
              Graduate AI Researcher at Arizona State University&apos;s CoRAL Lab,
              leading end-to-end development of research systems across agentic AI,
              LLM evaluation, AI safety, and privacy-preserving ML. With 3+ years
              of industry experience building production systems, I bridge the gap
              between research and real-world impact.
            </p>
          </motion.div>

          {/* Location + Status card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.16, ease }}
            whileHover={{ y: -2 }}
            className="bg-white/[0.03] rounded-xl p-8 hover:bg-white/[0.05] transition-all duration-300"
          >
            <p className="font-mono text-xs uppercase tracking-wider text-muted mb-3">
              Location
            </p>
            <p className="text-foreground text-sm mb-4">Tempe, Arizona</p>
            <p className="font-mono text-xs uppercase tracking-wider text-muted mb-3">
              Status
            </p>
            <p className="text-sm" style={{ color: "#10B981" }}>
              Open to opportunities
            </p>
          </motion.div>

          {/* Education cards - two side by side */}
          {education.map((edu, i) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.24 + i * 0.08, ease }}
              whileHover={{ y: -2 }}
              className="bg-white/[0.03] rounded-xl p-8 hover:bg-white/[0.05] transition-all duration-300"
            >
              <p className="font-mono text-xs uppercase tracking-wider text-muted mb-3">
                Education
              </p>
              <p className="text-sm font-heading font-semibold text-foreground">
                {edu.degree}
              </p>
              <p className="text-sm text-muted">{edu.school}</p>
              <p className="text-xs text-muted mt-1">{edu.period}</p>
            </motion.div>
          ))}

          {/* Research interests card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.4, ease }}
            whileHover={{ y: -2 }}
            className="bg-white/[0.03] rounded-xl p-8 hover:bg-white/[0.05] transition-all duration-300"
          >
            <p className="font-mono text-xs uppercase tracking-wider text-muted mb-3">
              Research Focus
            </p>
            <div className="flex flex-wrap gap-2">
              {researchInterests.map((interest, i) => (
                <motion.span
                  key={interest}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.44 + i * 0.08, ease }}
                  className="bg-[#0891B2]/10 text-[#0891B2] px-3 py-1.5 rounded-full text-sm font-mono"
                >
                  {interest}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.48 + i * 0.08, ease }}
              whileHover={{ y: -2 }}
              className="bg-white/[0.03] rounded-xl p-8 text-center hover:bg-white/[0.05] transition-all duration-300"
            >
              <p
                className="font-heading text-3xl font-bold"
                style={{ color: aboutAccent }}
              >
                {stat.value}
              </p>
              <p className="font-mono text-xs uppercase tracking-wider text-muted mt-1">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
