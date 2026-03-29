"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills, sections } from "@/lib/data";

const skillsAccent = sections[5].accent;
const ease = [0.25, 0.1, 0.25, 1] as const;

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div ref={ref} className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease }}
          className="font-mono text-sm mb-12"
        >
          <span style={{ color: skillsAccent }}>capabilities</span>
          <span className="text-muted">/</span>
        </motion.h2>

        {/* 4 columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((category, catIdx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.08 + catIdx * 0.08, ease }}
            >
              {/* Category header */}
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted mb-3">
                {category.category}
              </h3>

              {/* Skills as plain text list */}
              <ul className="space-y-1">
                {category.items.map((skill) => (
                  <li
                    key={skill}
                    className="text-sm text-muted py-1 hover:text-white transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
