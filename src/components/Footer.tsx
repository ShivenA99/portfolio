"use client";

import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Shiven Agarwal. Built with Next.js
            &amp; Tailwind CSS.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/shivena99"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-cyan transition-colors duration-200"
              aria-label="GitHub"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/shiven-agarwal/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-cyan transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={16} />
            </a>
            <a
              href="mailto:sagar147@asu.edu"
              className="text-muted hover:text-cyan transition-colors duration-200"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
