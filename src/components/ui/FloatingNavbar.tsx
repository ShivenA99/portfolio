"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useTheme } from "next-themes";
import { IconSun, IconMoon } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: { name: string; link: string }[];
  className?: string;
}) => {
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      if (y < 60) {
        setVisible(true);
      } else {
        setVisible(y < lastY.current);
      }
      lastY.current = y;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDark = resolvedTheme === "dark";

  return (
    <AnimatePresence>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: visible ? 0 : -80, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-[5000] flex items-center justify-between px-6 md:px-10 h-14",
          className
        )}
        style={{
          background: "color-mix(in srgb, var(--bg) 85%, transparent)",
          backdropFilter: "blur(12px) saturate(160%)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        {/* Wordmark */}
        <Link
          href="#home"
          className="font-semibold text-sm tracking-tight transition-colors duration-200"
          style={{
            fontFamily: "var(--font-jakarta, var(--font-heading))",
            color: "var(--fg)",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--fg)")}
        >
          Shiven Agarwal
        </Link>

        {/* Nav links */}
        <div className="flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="px-3 py-1.5 text-sm rounded-md transition-colors duration-150"
              style={{ color: "var(--muted)", fontFamily: "var(--font-body)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--fg)";
                (e.currentTarget as HTMLAnchorElement).style.background = "var(--surface)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--muted)";
                (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
              }}
              {...(item.link.endsWith(".pdf") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {item.name}
            </Link>
          ))}

          {/* Theme toggle */}
          <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="ml-2 p-1.5 rounded-md transition-colors duration-150"
            style={{ color: "var(--muted)" }}
            aria-label="Toggle theme"
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.color = "var(--fg)";
              (e.currentTarget as HTMLButtonElement).style.background = "var(--surface)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.color = "var(--muted)";
              (e.currentTarget as HTMLButtonElement).style.background = "transparent";
            }}
          >
            {isDark ? <IconSun size={16} /> : <IconMoon size={16} />}
          </button>
        </div>
      </motion.nav>
    </AnimatePresence>
  );
};
