"use client";

import AnimatedSection from "./AnimatedSection";
import { GraduationCap, Brain, Trophy, Code2 } from "lucide-react";

const highlights = [
  {
    icon: Brain,
    label: "AI Research",
    description: "Multi-agent systems, LLM robustness, AI safety",
  },
  {
    icon: GraduationCap,
    label: "Education",
    description: "MS CS @ ASU, BE ECE @ BITS Pilani",
  },
  {
    icon: Trophy,
    label: "Achievements",
    description: "2x 1st Place HackASU, EACL 2026 publication",
  },
  {
    icon: Code2,
    label: "Engineering",
    description: "3 years full-stack development experience",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-cyan to-transparent" />
            <span className="text-cyan text-sm font-medium tracking-wider uppercase">
              About
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">
            A bit about <span className="gradient-text">me</span>
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-5 gap-12">
          <AnimatedSection className="lg:col-span-3 space-y-5" delay={0.1}>
            <p className="text-muted leading-relaxed">
              I&apos;m a Graduate AI Researcher in the{" "}
              <span className="text-foreground font-medium">CoRAL Lab</span> at
              Arizona State University, working under the guidance of{" "}
              <span className="text-foreground font-medium">Dr. Vivek Gupta</span>{" "}
              on multi-agent systems, LLM robustness, and AI safety. My research
              has been published at EACL 2026, with three additional papers
              currently under review at ACL 2026.
            </p>
            <p className="text-muted leading-relaxed">
              Before pursuing my master&apos;s, I spent three years as a Software
              Engineer at AasPaas Online Services, where I led full-stack migrations
              for enterprise healthcare platforms including Siemens Healthineers and
              CitiusTech. This industry experience grounds my research in
              real-world engineering challenges.
            </p>
            <p className="text-muted leading-relaxed">
              I&apos;m passionate about building AI systems that are not only capable
              but also robust, safe, and trustworthy. Whether it&apos;s designing
              multi-agent architectures for education or developing invisible
              watermarking techniques for exam integrity, I aim to create
              research that has tangible real-world impact.
            </p>
          </AnimatedSection>

          <div className="lg:col-span-2 space-y-4">
            {highlights.map((item, i) => (
              <AnimatedSection key={item.label} delay={0.15 + i * 0.1}>
                <div className="glass glass-hover rounded-xl p-4 flex items-start gap-4 transition-all duration-300">
                  <div className="p-2.5 rounded-lg bg-gradient-to-br from-cyan/10 to-purple/10 border border-cyan/10 shrink-0">
                    <item.icon size={18} className="text-cyan" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground mb-1">
                      {item.label}
                    </h3>
                    <p className="text-xs text-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
