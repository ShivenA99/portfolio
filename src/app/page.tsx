"use client";

import SmoothScroll from "@/components/providers/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Publications from "@/components/sections/Publications";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import { sections } from "@/lib/data";

const sectionComponents = [
  { Component: Hero, index: 0 },
  { Component: About, index: 1 },
  { Component: Experience, index: 2 },
  { Component: Projects, index: 3 },
  { Component: Publications, index: 4 },
  { Component: Skills, index: 5 },
  { Component: Contact, index: 6 },
];

export default function Home() {
  return (
    <SmoothScroll>
      <Navbar />
      <main>
        {sectionComponents.map(({ Component, index }) => (
          <div
            key={sections[index].id}
            style={{ backgroundColor: sections[index].bgTint }}
          >
            <Component />
          </div>
        ))}
      </main>
      <Footer />
    </SmoothScroll>
  );
}
