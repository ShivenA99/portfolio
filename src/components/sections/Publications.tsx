"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FileText, ExternalLink, CheckCircle2, Clock } from "lucide-react";
import { publications } from "@/lib/data";

export default function Publications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="publications" className="py-24 relative" ref={ref}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-4">
            <span className="gradient-text">Publications</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald to-mint rounded-full" />
        </motion.div>

        {/* Publication cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {publications.map((pub, idx) => (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + idx * 0.1, duration: 0.6 }}
              className="glass rounded-2xl p-6"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-emerald-dim shrink-0">
                  <FileText size={20} className="text-emerald" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold font-heading leading-snug mb-2">
                    {pub.title}
                  </h3>
                  <p className="text-xs text-muted mb-3">{pub.venue}</p>

                  <div className="flex items-center justify-between gap-2">
                    {/* Status badge */}
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full ${
                        pub.status === "Accepted"
                          ? "bg-emerald/15 text-emerald"
                          : "bg-amber-500/15 text-amber-500"
                      }`}
                    >
                      {pub.status === "Accepted" ? (
                        <CheckCircle2 size={12} />
                      ) : (
                        <Clock size={12} />
                      )}
                      {pub.status}
                    </span>

                    {/* Link */}
                    {pub.link && (
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-emerald hover:text-mint transition-colors"
                      >
                        arXiv
                        <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
