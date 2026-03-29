"use client";

import { personalInfo } from "@/lib/data";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Mail } from "lucide-react";

export default function Footer() {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16">
        {/* Social links row */}
        <div className="flex items-center justify-center gap-6 mb-8">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-foreground transition-colors duration-200"
            aria-label="GitHub"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-foreground transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={20} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-muted hover:text-foreground transition-colors duration-200"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>

        {/* Copyright + built with */}
        <div className="text-center space-y-2">
          <p className="text-sm font-mono text-muted">
            &copy; 2026 Shiven Agarwal
          </p>
          <p className="text-sm font-mono text-muted/50">
            Built with Next.js
          </p>
        </div>

        {/* Back to top */}
        <div className="mt-8 text-center">
          <a
            href="#"
            onClick={scrollToTop}
            className="text-sm font-mono text-muted hover:text-foreground transition-colors duration-200"
          >
            &uarr; Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
