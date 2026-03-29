"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { publications } from "@/lib/data";

const fadeIn = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function Publications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="publications" className="py-24 relative" ref={ref}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section header */}
        <motion.h2
          custom={0}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          className="font-mono text-sm mb-12"
        >
          <span style={{ color: "#FF6B6B" }}>knowledge_base</span>
          <span className="text-muted">/</span>
        </motion.h2>

        {/* Paper entries - separated by whitespace, NOT cards */}
        <div className="space-y-8">
          {publications.map((pub, idx) => (
            <motion.div
              key={pub.title}
              custom={1 + idx}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-6"
            >
              {/* Left: status badge */}
              <div className="shrink-0">
                {pub.status === "Accepted" ? (
                  <span
                    className="inline-block px-2.5 py-1 text-xs font-mono rounded-full"
                    style={{
                      backgroundColor: "rgba(16, 185, 129, 0.15)",
                      color: "#10B981",
                    }}
                  >
                    Accepted
                  </span>
                ) : (
                  <span
                    className="inline-block px-2.5 py-1 text-xs font-mono rounded-full border"
                    style={{
                      borderColor: "rgba(245, 158, 11, 0.3)",
                      color: "#F59E0B",
                    }}
                  >
                    Under Review
                  </span>
                )}
              </div>

              {/* Center: title + venue */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-heading font-medium text-foreground leading-snug">
                  {pub.title}
                </p>
                <p className="text-xs text-muted mt-1">{pub.venue}</p>
              </div>

              {/* Right: arXiv link */}
              <div className="shrink-0">
                {pub.link ? (
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono transition-colors hover:opacity-80"
                    style={{ color: "#FF6B6B" }}
                  >
                    arXiv
                    <ExternalLink size={11} />
                  </a>
                ) : (
                  <span className="text-xs font-mono text-muted/40">&mdash;</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
