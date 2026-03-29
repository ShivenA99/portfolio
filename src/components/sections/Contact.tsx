"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { personalInfo, sections } from "@/lib/data";

const contactAccent = sections[6].accent;
const ease = [0.25, 0.1, 0.25, 1] as const;

const contactEntries = [
  { key: "email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  {
    key: "phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone.replace(/\D/g, "")}`,
  },
  { key: "github", value: "shivena99", href: personalInfo.github },
  { key: "linkedin", value: "shiven-agarwal", href: personalInfo.linkedin },
  { key: "location", value: personalInfo.location, href: undefined as string | undefined },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div ref={ref} className="max-w-2xl mx-auto px-6 md:px-12 text-center">
        {/* Section header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease }}
          className="font-mono text-sm mb-2"
        >
          <span style={{ color: contactAccent }}>open_channel</span>
          <span className="text-muted">/</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.08, ease }}
          className="text-sm text-muted mb-12"
        >
          Accepting incoming connections
        </motion.p>

        {/* Contact grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
          {contactEntries.map((entry, idx) => (
            <motion.div
              key={entry.key}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.16 + idx * 0.08, ease }}
              className="flex items-center gap-3 font-mono text-sm"
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
                  className="transition-colors duration-200 hover:underline underline-offset-4"
                  style={{ color: contactAccent }}
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
