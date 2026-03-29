"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "C++", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Frameworks",
    skills: ["FastAPI", "Flask", "React", "Next.js", "Node.js"],
  },
  {
    title: "AI / ML",
    skills: [
      "PyTorch",
      "Scikit-Learn",
      "Transformers",
      "LangGraph",
      "XGBoost",
      "Federated Learning",
    ],
  },
  {
    title: "Infrastructure",
    skills: [
      "PostgreSQL",
      "Docker",
      "Git",
      "AWS",
      "GCP",
      "GitHub Actions",
    ],
  },
];

export default function Skills() {
  return (
    <section className="py-24 sm:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-cyan to-transparent" />
            <span className="text-cyan text-sm font-medium tracking-wider uppercase">
              Skills
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-16">
            Tech <span className="gradient-text">stack</span>
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, i) => (
            <AnimatedSection key={category.title} delay={0.1 + i * 0.08}>
              <div className="glass rounded-xl p-6 h-full">
                <h3 className="text-sm font-semibold text-cyan mb-4 tracking-wider uppercase">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, j) => (
                    <motion.span
                      key={skill}
                      className="px-3 py-1.5 text-xs font-medium text-muted rounded-lg bg-white/[0.03] border border-white/[0.06] hover:border-cyan/20 hover:text-foreground hover:bg-cyan/[0.05] transition-all duration-200 cursor-default"
                      whileHover={{ scale: 1.05, y: -1 }}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + j * 0.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
