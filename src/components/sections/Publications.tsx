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
      <div ref={ref} className="max-w-6xl mx-auto px-6 md:px-12 py-24 md:py-32">
        {/* Section header */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease }}
          className="font-mono text-xs uppercase tracking-widest text-[#FF6B6B] mb-2"
        >
          Publications
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.05, ease }}
          className="font-heading text-3xl font-bold mb-12"
        >
          Research Papers
        </motion.h2>

        {/* Paper entries */}
        <div className="flex flex-col">
          {publications.map((pub, idx) => (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + idx * 0.1, ease }}
              className="bg-white/[0.03] rounded-xl p-6 mb-4 hover:bg-white/[0.05] transition-all"
            >
              <div className="flex flex-col gap-2">
                {/* Top row: title + status badge */}
                <div className="flex justify-between items-start">
                  <p className="font-heading text-base font-semibold flex-1 mr-4">
                    {pub.title}
                  </p>
                  {pub.status === "Accepted" ? (
                    <span className="shrink-0 bg-emerald-500/15 text-emerald-400 px-3 py-1 rounded-full text-xs font-mono">
                      Accepted
                    </span>
                  ) : (
                    <span className="shrink-0 border border-amber-500/30 text-amber-400 px-3 py-1 rounded-full text-xs font-mono">
                      Under Review
                    </span>
                  )}
                </div>

                {/* Venue + year */}
                <p className="font-mono text-xs text-muted">{pub.venue}</p>

                {/* Links */}
                {pub.link && (
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-xs text-[#FF6B6B] hover:underline underline-offset-4 w-fit"
                  >
                    arXiv
                    <ExternalLink size={11} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
