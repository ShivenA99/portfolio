"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { publications, sections } from "@/lib/data";

const pubAccent = sections[4].accent;
const ease = [0.25, 0.1, 0.25, 1] as const;

export default function Publications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="publications" className="py-24 md:py-32 relative">
      <div ref={ref} className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease }}
          className="font-mono text-sm mb-12"
        >
          <span style={{ color: pubAccent }}>knowledge_base</span>
          <span className="text-muted">/</span>
        </motion.h2>

        {/* Paper entries */}
        <div className="space-y-4">
          {publications.map((pub, idx) => (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.08 + idx * 0.08, ease }}
              className="flex items-start gap-4 py-4"
            >
              {/* Status badge */}
              <div className="shrink-0 pt-0.5">
                {pub.status === "Accepted" ? (
                  <span className="inline-block px-2 py-0.5 text-xs font-mono rounded-full bg-emerald-500/20 text-emerald-400">
                    Accepted
                  </span>
                ) : (
                  <span className="inline-block px-2 py-0.5 text-xs font-mono rounded-full border border-amber-500/30 text-amber-400">
                    Under Review
                  </span>
                )}
              </div>

              {/* Title + venue */}
              <div className="flex-1 min-w-0">
                <p className="font-heading text-base font-medium text-foreground leading-snug">
                  {pub.title}
                </p>
                <p className="font-mono text-xs text-muted mt-1">{pub.venue}</p>
              </div>

              {/* arXiv link */}
              <div className="shrink-0">
                {pub.link ? (
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono transition-colors duration-200 hover:underline underline-offset-4"
                    style={{ color: pubAccent }}
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
