"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "@/lib/data";

const ease = [0.25, 0.1, 0.25, 1] as const;

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div ref={ref} className="max-w-6xl mx-auto px-6 md:px-12 py-24 md:py-32">
        {/* Section header */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease }}
          className="font-mono text-xs uppercase tracking-widest text-white/60 mb-2"
        >
          Skills
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.05, ease }}
          className="font-heading text-3xl font-bold mb-12"
        >
          Capabilities
        </motion.h2>

        {/* 4 columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {skills.map((category, catIdx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + catIdx * 0.1, ease }}
            >
              {/* Category header */}
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted/60 mb-4">
                {category.category}
              </h3>

              {/* Skills as pills */}
              <div className="flex flex-col gap-2">
                {category.items.map((skill, skillIdx) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, y: 8 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: 0.2 + catIdx * 0.1 + skillIdx * 0.05,
                      ease,
                    }}
                    className="bg-white/[0.03] px-3 py-2 rounded-lg text-sm hover:bg-white/[0.06] hover:text-white transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
