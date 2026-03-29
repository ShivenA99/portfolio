"use client";

import { useEffect, useState, useCallback } from "react";
import { sections } from "@/lib/data";

interface SectionObserverState {
  activeSection: string;
  progress: number;
  accent: string;
  bgTint: string;
}

const DEFAULT_STATE: SectionObserverState = {
  activeSection: "hero",
  progress: 0,
  accent: sections[0].accent,
  bgTint: sections[0].bgTint,
};

export function useSectionObserver(): SectionObserverState {
  const [state, setState] = useState<SectionObserverState>(DEFAULT_STATE);

  const updateProgress = useCallback(() => {
    const sectionEls = sections
      .map((s) => ({
        ...s,
        el: document.getElementById(s.id),
      }))
      .filter((s) => s.el !== null);

    if (sectionEls.length === 0) return;

    const viewportHeight = window.innerHeight;
    const scrollY = window.scrollY;
    const viewportCenter = scrollY + viewportHeight / 2;

    // Find which section the viewport center is within
    for (const section of sectionEls) {
      const el = section.el!;
      const rect = el.getBoundingClientRect();
      const top = rect.top + scrollY;
      const bottom = top + rect.height;

      if (viewportCenter >= top && viewportCenter <= bottom) {
        const progress = Math.min(
          1,
          Math.max(0, (viewportCenter - top) / rect.height)
        );

        setState({
          activeSection: section.id,
          progress,
          accent: section.accent,
          bgTint: section.bgTint,
        });
        return;
      }
    }
  }, []);

  useEffect(() => {
    // Initial update
    updateProgress();

    // Throttled scroll handler (~60fps)
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateProgress();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [updateProgress]);

  return state;
}
