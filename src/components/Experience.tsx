"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Graduate AI Researcher",
    organization: "CoRAL Lab, Arizona State University",
    period: "Aug 2024 - Present",
    description: [
      "Published at EACL 2026 with 3 papers under review at ACL 2026, focusing on multi-agent systems, LLM robustness, and AI safety under Dr. Vivek Gupta",
      "Built GamED.AI, a multi-agent system on LangGraph generating educational games from exam questions using SAM3/VLM computer vision (1st Place HackASU 2025)",
      "Developed IntegrityShield, an invisible watermarking system protecting exam PDFs from AI solving with 91-94% blocking rate (EACL 2026 Demo)",
      "Created SentinelEdge, on-device scam call detection with federated learning and differential privacy (1st Place HackASU 2026)",
    ],
  },
  {
    type: "work",
    title: "Associate Software Engineer",
    organization: "AasPaas Online Services",
    period: "Jul 2021 - Jul 2024",
    description: [
      "Migrated 15+ modules on Siemens Healthineers' oncology patient portal from legacy .NET to modern Angular and Node.js architecture",
      "Developed patient form triaging platform for CitiusTech integrating Tesseract OCR for automated document processing",
      "Built a mental health chatbot in React Native leveraging AWS Lex for natural language understanding and Lambda for serverless backend",
    ],
  },
];

const education = [
  {
    degree: "MS Computer Science",
    school: "Arizona State University",
    period: "Aug 2024 - May 2026 (Expected)",
    detail: "Research focus: NLP, Multi-Agent Systems, AI Safety",
  },
  {
    degree: "BE (Hons.) Electronics & Communication",
    school: "BITS Pilani, Hyderabad Campus",
    period: "Aug 2017 - Jul 2021",
    detail: "",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 relative">
      {/* Subtle background accent */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-purple/[0.03] blur-[100px] -translate-y-1/2" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-cyan to-transparent" />
            <span className="text-cyan text-sm font-medium tracking-wider uppercase">
              Experience
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-16">
            Where I&apos;ve <span className="gradient-text">worked</span>
          </h2>
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-cyan/30 via-purple/30 to-transparent hidden sm:block" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <AnimatedSection key={i} delay={0.1 + i * 0.15}>
                <div className="flex gap-6">
                  {/* Timeline dot */}
                  <div className="hidden sm:flex flex-col items-center">
                    <motion.div
                      className="w-10 h-10 rounded-full glass border border-cyan/20 flex items-center justify-center shrink-0"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Briefcase size={16} className="text-cyan" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <motion.div
                    className="flex-1 glass rounded-2xl p-6 sm:p-8 glass-hover transition-all duration-300 group"
                    whileHover={{ x: 4 }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-cyan transition-colors duration-200">
                          {exp.title}
                        </h3>
                        <p className="text-sm text-purple font-medium">
                          {exp.organization}
                        </p>
                      </div>
                      <span className="text-xs text-muted font-mono bg-white/[0.03] px-3 py-1 rounded-full border border-white/[0.06] whitespace-nowrap self-start">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-3">
                      {exp.description.map((item, j) => (
                        <li
                          key={j}
                          className="text-sm text-muted leading-relaxed flex items-start gap-3"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan/50 mt-1.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Education */}
        <AnimatedSection delay={0.2} className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap size={20} className="text-cyan" />
            <h3 className="text-xl font-semibold">Education</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                className="glass rounded-xl p-6 glass-hover transition-all duration-300"
                whileHover={{ y: -2 }}
              >
                <h4 className="font-semibold text-foreground mb-1">
                  {edu.degree}
                </h4>
                <p className="text-sm text-purple font-medium mb-2">
                  {edu.school}
                </p>
                <p className="text-xs text-muted font-mono">{edu.period}</p>
                {edu.detail && (
                  <p className="text-xs text-muted mt-2">{edu.detail}</p>
                )}
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
