"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { education, stats, sections } from "@/lib/data";

const aboutAccent = sections[1].accent;
const ease = [0.25, 0.1, 0.25, 1] as const;

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div ref={ref} className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease }}
          className="font-mono text-sm mb-12"
        >
          <span style={{ color: aboutAccent }}>model_card</span>
          <span className="text-muted">.json</span>
        </motion.h2>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Bio - spans 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.08, ease }}
            className="lg:col-span-2 bg-white/[0.02] rounded-lg p-6"
          >
            <p className="text-muted leading-relaxed">
              Graduate AI Researcher at Arizona State University&apos;s CoRAL Lab,
              leading end-to-end development of research systems across agentic AI,
              LLM evaluation, AI safety, and privacy-preserving ML. With 3+ years
              of industry experience building production systems, I bridge the gap
              between research and real-world impact.
            </p>
          </motion.div>

          {/* Location + Status */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.16, ease }}
            className="bg-white/[0.02] rounded-lg p-6"
          >
            <p className="font-mono text-xs text-muted mb-3">location</p>
            <p className="text-foreground text-sm mb-4">Tempe, Arizona</p>
            <p className="font-mono text-xs text-muted mb-3">status</p>
            <p className="text-sm" style={{ color: "#10B981" }}>
              Open to opportunities
            </p>
          </motion.div>

          {/* Education */}
          {education.map((edu, i) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.24 + i * 0.08, ease }}
              className="bg-white/[0.02] rounded-lg p-6"
            >
              <p className="font-mono text-xs text-muted mb-3">education[{i}]</p>
              <p className="text-sm font-heading font-medium text-foreground">
                {edu.degree}
              </p>
              <p className="text-sm text-muted">{edu.school}</p>
              <p className="text-xs text-muted mt-1">{edu.period}</p>
            </motion.div>
          ))}

          {/* Research interests */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.4, ease }}
            className="bg-white/[0.02] rounded-lg p-6"
          >
            <p className="font-mono text-xs text-muted mb-3">research_focus</p>
            <div className="flex flex-wrap gap-2">
              {["Agentic AI", "LLM Evaluation", "AI Safety", "Privacy-Preserving ML"].map(
                (interest) => (
                  <span
                    key={interest}
                    className="px-2.5 py-1 text-xs rounded-full font-mono bg-white/[0.04] transition-colors duration-200 hover:text-white cursor-default"
                    style={{ color: aboutAccent }}
                  >
                    {interest}
                  </span>
                )
              )}
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.48, ease }}
          className="mt-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.48 + i * 0.08, ease }}
                className="bg-white/[0.02] rounded-lg p-6 text-center"
              >
                <p className="font-heading text-2xl font-bold text-foreground">
                  {stat.value}
                </p>
                <p
                  className="font-mono text-xs uppercase tracking-wider mt-1"
                  style={{ color: aboutAccent }}
                >
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
