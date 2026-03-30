"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <footer
      id="contact"
      className="py-24 px-6 md:px-10 lg:px-20"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-5xl mx-auto">
        <span className="section-label">Contact</span>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-6 flex flex-col gap-8"
        >
          <h2
            className="heading-xl"
            style={{
              fontFamily: "var(--font-jakarta, var(--font-heading))",
              maxWidth: 480,
            }}
          >
            Let&apos;s build something together.
          </h2>

          <div className="flex flex-col gap-2">
            <span style={{ fontSize: "0.72rem", fontFamily: "var(--font-mono)", color: "var(--muted)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Email
            </span>
            <a
              href={`mailto:${personalInfo.email}`}
              className="underline-reveal w-fit"
              style={{
                fontFamily: "var(--font-jakarta, var(--font-heading))",
                fontWeight: 700,
                fontSize: "clamp(1.2rem, 3vw, 1.8rem)",
                color: "var(--fg)",
                letterSpacing: "-0.01em",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--fg)")}
            >
              {personalInfo.email}
            </a>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="underline-reveal text-sm"
              style={{ color: "var(--muted)", fontFamily: "var(--font-mono)", letterSpacing: "0.04em" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--fg)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--muted)")}
            >
              GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="underline-reveal text-sm"
              style={{ color: "var(--muted)", fontFamily: "var(--font-mono)", letterSpacing: "0.04em" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--fg)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--muted)")}
            >
              LinkedIn
            </a>
            <a
              href={`/portfolio/resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline-reveal text-sm"
              style={{ color: "var(--muted)", fontFamily: "var(--font-mono)", letterSpacing: "0.04em" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--fg)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--muted)")}
            >
              Resume
            </a>
          </div>

          <div
            className="flex items-center justify-between pt-8"
            style={{ borderTop: "1px solid var(--border)" }}
          >
            <span style={{ fontSize: "0.78rem", fontFamily: "var(--font-mono)", color: "var(--muted)", letterSpacing: "0.04em" }}>
              © 2026 Shiven Agarwal
            </span>
            <span style={{ fontSize: "0.78rem", fontFamily: "var(--font-mono)", color: "var(--muted)", letterSpacing: "0.04em" }}>
              Tempe, AZ
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
