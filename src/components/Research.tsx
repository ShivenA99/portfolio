"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { publications } from "@/lib/data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};
const rowVariant = {
  hidden: { opacity: 0, x: -12 },
  show: { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] as const } },
};

export default function Research() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="research" className="py-24 px-6 md:px-10 lg:px-20">
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <span className="section-label">Research</span>

        {/* Two-column context */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-4 mb-14">
          <div>
            <h2
              className="heading-xl mb-4"
              style={{ fontFamily: "var(--font-jakarta, var(--font-heading))" }}
            >
              Research &amp; Publications
            </h2>
            <p style={{ fontSize: "0.95rem", color: "var(--muted)", lineHeight: 1.7 }}>
              My research focuses on{" "}
              <span style={{ color: "var(--fg)", fontWeight: 500 }}>multi-agent robustness</span>,{" "}
              <span style={{ color: "var(--fg)", fontWeight: 500 }}>LLM safety</span>, and{" "}
              <span style={{ color: "var(--fg)", fontWeight: 500 }}>educational AI</span> — building
              systems that are both capable and trustworthy.
            </p>
          </div>
          <div
            className="flex flex-col gap-3 justify-center"
            style={{ borderLeft: "1px solid var(--border)", paddingLeft: 28 }}
          >
            <div>
              <span
                style={{
                  fontFamily: "var(--font-jakarta, var(--font-heading))",
                  fontWeight: 800,
                  fontSize: "2rem",
                  color: "var(--accent)",
                }}
              >
                1
              </span>
              <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "var(--muted)", marginLeft: 8, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Accepted paper
              </span>
            </div>
            <div>
              <span
                style={{
                  fontFamily: "var(--font-jakarta, var(--font-heading))",
                  fontWeight: 800,
                  fontSize: "2rem",
                  color: "var(--accent)",
                }}
              >
                3
              </span>
              <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "var(--muted)", marginLeft: 8, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Under review at ACL
              </span>
            </div>
            <div>
              <span
                style={{
                  fontFamily: "var(--font-jakarta, var(--font-heading))",
                  fontWeight: 800,
                  fontSize: "2rem",
                  color: "var(--accent)",
                }}
              >
                CoRAL
              </span>
              <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "var(--muted)", marginLeft: 8, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                ASU
              </span>
            </div>
          </div>
        </div>

        {/* Publication list */}
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="flex flex-col"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          {publications.map((pub, idx) => (
            <motion.div
              key={idx}
              variants={rowVariant}
              className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 py-5"
              style={{ borderBottom: "1px solid var(--border)" }}
            >
              {/* Left: title + venue */}
              <div className="flex flex-col gap-1 flex-1">
                <div className="flex items-start gap-3">
                  {/* Index */}
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.68rem",
                      color: "var(--muted)",
                      minWidth: 20,
                      paddingTop: 3,
                      letterSpacing: "0.06em",
                    }}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div className="flex flex-col gap-1">
                    <span
                      style={{
                        fontFamily: "var(--font-jakarta, var(--font-heading))",
                        fontWeight: 600,
                        fontSize: "0.95rem",
                        color: "var(--fg)",
                        lineHeight: 1.4,
                      }}
                    >
                      {pub.title}
                    </span>
                    <div className="flex items-center gap-3">
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.72rem",
                          color: "var(--muted)",
                          letterSpacing: "0.04em",
                        }}
                      >
                        {pub.venue}
                      </span>
                      {"link" in pub && pub.link && (
                        <a
                          href={pub.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline-reveal"
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.72rem",
                            color: "var(--accent)",
                            letterSpacing: "0.04em",
                          }}
                        >
                          arXiv →
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: status badge */}
              <span
                style={{
                  fontSize: "0.68rem",
                  fontFamily: "var(--font-mono)",
                  fontWeight: 600,
                  padding: "3px 10px",
                  borderRadius: 4,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                  ...(pub.status === "Accepted"
                    ? {
                        background: "color-mix(in srgb, #22c55e 15%, transparent)",
                        color: "#16a34a",
                        border: "1px solid color-mix(in srgb, #22c55e 30%, transparent)",
                      }
                    : {
                        background: "color-mix(in srgb, #f59e0b 15%, transparent)",
                        color: "#b45309",
                        border: "1px solid color-mix(in srgb, #f59e0b 30%, transparent)",
                      }),
                }}
              >
                {pub.status}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
