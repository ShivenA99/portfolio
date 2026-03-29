"use client";

import { useEffect, useState, useCallback } from "react";

interface MousePosition {
  x: number;
  y: number;
  isActive: boolean;
}

export function useMousePosition(): MousePosition {
  const [position, setPosition] = useState<MousePosition>({
    x: 0,
    y: 0,
    isActive: false,
  });

  const onMove = useCallback((e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY, isActive: true });
  }, []);

  useEffect(() => {
    // Detect touch-only devices
    const isTouchOnly =
      typeof window !== "undefined" &&
      "ontouchstart" in window &&
      !window.matchMedia("(pointer: fine)").matches;

    if (isTouchOnly) return;

    // Throttle to ~60fps via rAF
    let frameId: number | null = null;
    const throttledMove = (e: MouseEvent) => {
      if (frameId !== null) return;
      frameId = requestAnimationFrame(() => {
        onMove(e);
        frameId = null;
      });
    };

    const onLeave = () => {
      setPosition((prev) => ({ ...prev, isActive: false }));
    };

    window.addEventListener("mousemove", throttledMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", throttledMove);
      document.removeEventListener("mouseleave", onLeave);
      if (frameId !== null) cancelAnimationFrame(frameId);
    };
  }, [onMove]);

  return position;
}
