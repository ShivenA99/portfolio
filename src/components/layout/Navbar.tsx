"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Download } from "lucide-react";
import { useTheme } from "next-themes";
import { navLinks } from "@/lib/data";
import { useSectionObserver } from "@/hooks/useSectionObserver";

export default function Navbar() {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { activeSection, accent } = useSectionObserver();

  const compressed = scrollDirection === "down";

  const handleScroll = useCallback(() => {
    const currentY = window.scrollY;
    // Store previous scroll position on the window object
    const prevY = (window as unknown as { __prevScrollY?: number }).__prevScrollY ?? 0;
    if (currentY > prevY && currentY > 80) {
      setScrollDirection("down");
    } else if (currentY < prevY) {
      setScrollDirection("up");
    }
    (window as unknown as { __prevScrollY: number }).__prevScrollY = currentY;
  }, []);

  useEffect(() => {
    setMounted(true);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        borderBottom: `1px solid ${accent}0A`,
        backgroundColor: "rgba(3, 7, 18, 0.85)",
      }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            compressed ? "h-12" : "h-16"
          }`}
        >
          {/* Logo */}
          <a
            href="#"
            className="font-mono text-lg font-bold tracking-tight text-foreground"
          >
            SA
          </a>

          {/* Center: Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3 py-1.5 text-sm transition-colors duration-200 rounded"
                  style={{
                    color: isActive ? accent : undefined,
                  }}
                >
                  <span
                    className={
                      isActive ? "font-medium" : "text-muted hover:text-foreground"
                    }
                  >
                    {link.label}
                  </span>
                </a>
              );
            })}
          </div>

          {/* Right: Theme toggle + Resume */}
          <div className="hidden md:flex items-center gap-2">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded text-muted hover:text-foreground transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              </button>
            )}
            <a
              href="/portfolio/resume.pdf"
              download
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-mono rounded border transition-colors"
              style={{
                borderColor: `${accent}33`,
                color: accent,
              }}
            >
              <Download size={14} />
              Resume
            </a>
          </div>

          {/* Mobile: buttons */}
          <div className="flex md:hidden items-center gap-2">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded text-muted hover:text-foreground transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              </button>
            )}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded text-muted hover:text-foreground transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden"
            style={{
              backgroundColor: "rgba(3, 7, 18, 0.95)",
              borderTop: `1px solid ${accent}0A`,
            }}
          >
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-2 text-sm rounded transition-colors"
                    style={{
                      color: isActive ? accent : undefined,
                    }}
                  >
                    <span
                      className={
                        isActive
                          ? "font-medium"
                          : "text-muted hover:text-foreground"
                      }
                    >
                      {link.label}
                    </span>
                  </a>
                );
              })}
              <a
                href="/portfolio/resume.pdf"
                download
                className="flex items-center gap-1.5 px-3 py-2 text-sm font-mono transition-colors"
                style={{ color: accent }}
              >
                <Download size={14} />
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
