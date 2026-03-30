"use client";

import { navItems } from "@/lib/data";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import Research from "@/components/Research";
import Background from "@/components/Background";
import Footer from "@/components/Footer";
import BackgroundGames from "@/components/BackgroundGames";

export default function Home() {
  return (
    <main
      style={{
        background: "var(--bg)",
        color: "var(--fg)",
        minHeight: "100vh",
      }}
    >
      <FloatingNav navItems={navItems} />
      <Hero />

      {/* All sections below hero share a relative stacking context.
          BackgroundGames lives at z-0; content sits at z-10. */}
      <div className="relative">
        <BackgroundGames />
        <div className="relative" style={{ zIndex: 10 }}>
          <RecentProjects />
          <Research />
          <Background />
          <Footer />
        </div>
      </div>
    </main>
  );
}
