"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "@/lib/data";

const fadeIn = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section header */}
        <motion.h2
          custom={0}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          className="font-mono text-sm mb-12"
        >
          <span style={{ color: "#E5E7EB" }}>capabilities</span>
          <span className="text-muted">/</span>
        </motion.h2>

        {/* 4 columns */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((category, catIdx) => (
            <motion.div
              key={category.category}
              custom={1 + catIdx}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
            >
              {/* Category header - monospace */}
              <h3 className="font-mono text-xs text-muted mb-4 uppercase tracking-wider">
                {category.category}
              </h3>

              {/* Skills as plain text list */}
              <ul className="space-y-2">
                {category.items.map((skill) => (
                  <li
                    key={skill}
                    className="text-sm text-foreground hover:text-white transition-colors cursor-default py-0.5"
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
