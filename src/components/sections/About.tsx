"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { education } from "@/lib/data";

const fadeIn = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section header */}
        <motion.h2
          custom={0}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          className="font-mono text-sm mb-12"
        >
          <span style={{ color: "#0891B2" }}>model_card</span>
          <span className="text-muted">.json</span>
        </motion.h2>

        {/* Bento grid - no borders, tonal bg shifts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Bio - spans 2 cols */}
          <motion.div
            custom={1}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            className="lg:col-span-2 rounded-xl p-6"
            style={{ backgroundColor: "rgba(8, 145, 178, 0.04)" }}
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
            custom={2}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            className="rounded-xl p-6"
            style={{ backgroundColor: "rgba(8, 145, 178, 0.04)" }}
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
              custom={3 + i}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              className="rounded-xl p-6"
              style={{ backgroundColor: "rgba(8, 145, 178, 0.04)" }}
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
            custom={5}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            className="rounded-xl p-6"
            style={{ backgroundColor: "rgba(8, 145, 178, 0.04)" }}
          >
            <p className="font-mono text-xs text-muted mb-3">research_focus</p>
            <div className="flex flex-wrap gap-2">
              {["Agentic AI", "LLM Evaluation", "AI Safety", "Privacy-Preserving ML"].map(
                (interest) => (
                  <span
                    key={interest}
                    className="px-2.5 py-1 text-xs rounded-full border font-mono"
                    style={{
                      borderColor: "rgba(8, 145, 178, 0.2)",
                      color: "#0891B2",
                    }}
                  >
                    {interest}
                  </span>
                )
              )}
            </div>
          </motion.div>

          {/* Stats as key:value pairs in monospace */}
          <motion.div
            custom={6}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            className="lg:col-span-3 rounded-xl p-6"
            style={{ backgroundColor: "rgba(8, 145, 178, 0.04)" }}
          >
            <p className="font-mono text-xs text-muted mb-4">metrics</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-sm">
              <div>
                <span className="text-muted">publications: </span>
                <span style={{ color: "#0891B2" }}>4</span>
              </div>
              <div>
                <span className="text-muted">hackathon_wins: </span>
                <span style={{ color: "#0891B2" }}>2</span>
              </div>
              <div>
                <span className="text-muted">years_exp: </span>
                <span style={{ color: "#0891B2" }}>&quot;3+&quot;</span>
              </div>
              <div>
                <span className="text-muted">research_areas: </span>
                <span style={{ color: "#0891B2" }}>4</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
