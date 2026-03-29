"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Download } from "lucide-react";
import { useTheme } from "next-themes";
import { navLinks } from "@/lib/data";
import { useSectionObserver } from "@/hooks/useSectionObserver";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { activeSection, accent } = useSectionObserver();

  const handleScroll = useCallback(() => {
    const currentY = window.scrollY;
    const prevY =
      (window as unknown as { __prevScrollY?: number }).__prevScrollY ?? 0;
    if (currentY > prevY && currentY > 80) {
      setVisible(false);
    } else if (currentY < prevY) {
      setVisible(true);
    }
    (window as unknown as { __prevScrollY: number }).__prevScrollY = currentY;
  }, []);

  useEffect(() => {
    setMounted(true);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] as const }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        borderBottom: `1px solid ${accent}0A`,
        backgroundColor: "rgba(3, 7, 18, 0.85)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#"
            onClick={scrollToTop}
            className="font-mono font-bold text-lg tracking-wider text-foreground"
          >
            SA
          </a>

          {/* Center: Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative text-sm transition-colors duration-200 pb-1"
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
                  {/* Active underline indicator */}
                  <span
                    className="absolute bottom-0 left-0 h-[2px] transition-all duration-300"
                    style={{
                      width: isActive ? "100%" : "0%",
                      backgroundColor: accent,
                    }}
                  />
                </a>
              );
            })}
          </div>

          {/* Right: Theme toggle + Resume */}
          <div className="hidden md:flex items-center gap-4">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded text-muted hover:text-foreground transition-colors duration-200"
                aria-label="Toggle theme"
              >
                <motion.span
                  key={theme}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] as const }}
                  className="block"
                >
                  {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                </motion.span>
              </button>
            )}
            <a
              href="/portfolio/resume.pdf"
              download
              className="flex items-center gap-1.5 px-4 py-2 text-sm font-mono rounded-lg border transition-colors duration-200"
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
                className="p-2 rounded text-muted hover:text-foreground transition-colors duration-200"
                aria-label="Toggle theme"
              >
                <motion.span
                  key={theme}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] as const }}
                  className="block"
                >
                  {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                </motion.span>
              </button>
            )}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded text-muted hover:text-foreground transition-colors duration-200"
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
            <div className="px-6 py-3 space-y-1">
              {navLinks.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-2 text-sm rounded transition-colors duration-200"
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
                className="flex items-center gap-1.5 px-3 py-2 text-sm font-mono transition-colors duration-200"
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
