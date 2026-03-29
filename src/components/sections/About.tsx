"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, MapPin, Briefcase, BookOpen } from "lucide-react";
import { education, stats } from "@/lib/data";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald to-mint rounded-full" />
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Bio card - spans 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="lg:col-span-2 glass rounded-2xl p-6"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-emerald-dim">
                <Briefcase size={20} className="text-emerald" />
              </div>
              <div>
                <h3 className="text-lg font-semibold font-heading mb-2">
                  Who I Am
                </h3>
                <p className="text-muted leading-relaxed">
                  I&apos;m a Graduate AI Researcher at Arizona State University&apos;s CoRAL Lab,
                  where I lead end-to-end development of research systems across agentic AI,
                  LLM evaluation, AI safety, and privacy-preserving ML. With 3+ years of
                  industry experience building production systems and a passion for pushing
                  the boundaries of what AI can do, I bridge the gap between research and
                  real-world impact.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Location card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="glass rounded-2xl p-6"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-emerald-dim">
                <MapPin size={20} className="text-emerald" />
              </div>
              <div>
                <h3 className="text-lg font-semibold font-heading mb-1">
                  Based In
                </h3>
                <p className="text-muted">Tempe, Arizona</p>
                <p className="text-sm text-muted/70 mt-1">
                  Open to relocate
                </p>
              </div>
            </div>
          </motion.div>

          {/* Education cards */}
          {education.map((edu, i) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
              className="glass rounded-2xl p-6"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-emerald-dim">
                  <GraduationCap size={20} className="text-emerald" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold font-heading">
                    {edu.degree}
                  </h3>
                  <p className="text-muted text-sm">{edu.school}</p>
                  <p className="text-xs text-muted/70 mt-1">{edu.period}</p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Research interests card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="glass rounded-2xl p-6"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-emerald-dim">
                <BookOpen size={20} className="text-emerald" />
              </div>
              <div>
                <h3 className="text-lg font-semibold font-heading mb-2">
                  Research Interests
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Agentic AI",
                    "LLM Evaluation",
                    "AI Safety",
                    "Privacy-Preserving ML",
                  ].map((interest) => (
                    <span
                      key={interest}
                      className="px-3 py-1 text-xs rounded-full bg-emerald-dim text-emerald"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass rounded-2xl p-5 text-center"
            >
              <p className="text-2xl sm:text-3xl font-bold gradient-text font-heading">
                {stat.value}
              </p>
              <p className="text-sm text-muted mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
