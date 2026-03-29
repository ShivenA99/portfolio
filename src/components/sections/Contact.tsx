"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { personalInfo } from "@/lib/data";

const fadeIn = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const contactEntries = [
  { key: "email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  {
    key: "phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone.replace(/\D/g, "")}`,
  },
  { key: "github", value: "shivena99", href: personalInfo.github },
  { key: "linkedin", value: "shiven-agarwal", href: personalInfo.linkedin },
  { key: "location", value: personalInfo.location, href: undefined },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section header */}
        <motion.h2
          custom={0}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          className="font-mono text-sm mb-2"
        >
          <span style={{ color: "#10B981" }}>open_channel</span>
          <span className="text-muted">/</span>
        </motion.h2>

        <motion.p
          custom={1}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          className="text-sm text-muted mb-12"
        >
          Accepting incoming connections
        </motion.p>

        {/* Contact entries as monospace key:value pairs */}
        <div className="space-y-4 max-w-lg">
          {contactEntries.map((entry, idx) => (
            <motion.div
              key={entry.key}
              custom={2 + idx}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              className="font-mono text-sm flex items-baseline gap-2"
            >
              <span className="text-muted">{entry.key}:</span>
              {entry.href ? (
                <a
                  href={entry.href}
                  target={entry.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    entry.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="transition-colors hover:opacity-80"
                  style={{ color: "#10B981" }}
                >
                  {entry.value}
                </a>
              ) : (
                <span className="text-foreground">{entry.value}</span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
