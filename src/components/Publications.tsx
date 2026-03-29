"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { FileText, ExternalLink } from "lucide-react";

const publications = [
  {
    title: "IntegrityShield: Invisible Watermarking for Exam PDF Protection from AI Solving",
    venue: "EACL 2026",
    status: "Demo Paper Accepted",
    statusColor: "text-green-400 bg-green-400/[0.08] border-green-400/20",
    description:
      "An invisible watermarking system that protects exam PDFs from being solved by AI models, achieving a 91-94% blocking rate while remaining imperceptible to humans.",
  },
  {
    title: "GamED.AI: Multi-Agent Educational Game Generation from Exam Content",
    venue: "ACL 2026",
    status: "Under Review",
    statusColor: "text-yellow-400 bg-yellow-400/[0.08] border-yellow-400/20",
    description:
      "A multi-agent framework leveraging LangGraph to transform examination questions into interactive educational games using computer vision pipelines.",
  },
  {
    title: "DeALOG: Decentralized Multi-Agent Framework for Multimodal Question Answering",
    venue: "ACL 2026",
    status: "Under Review",
    statusColor: "text-yellow-400 bg-yellow-400/[0.08] border-yellow-400/20",
    description:
      "A decentralized approach to multimodal QA where specialized agents collaborate through structured dialogue to answer complex questions across modalities.",
  },
  {
    title: "Multi-Agent Robustness and Safety in Large Language Models",
    venue: "ACL 2026",
    status: "Under Review",
    statusColor: "text-yellow-400 bg-yellow-400/[0.08] border-yellow-400/20",
    description:
      "Research on improving the robustness and safety properties of LLM-based multi-agent systems under adversarial conditions.",
  },
];

export default function Publications() {
  return (
    <section id="publications" className="py-24 sm:py-32 relative">
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-purple/[0.03] blur-[100px]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-cyan to-transparent" />
            <span className="text-cyan text-sm font-medium tracking-wider uppercase">
              Publications
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-16">
            Research <span className="gradient-text">output</span>
          </h2>
        </AnimatedSection>

        <div className="space-y-4">
          {publications.map((pub, i) => (
            <AnimatedSection key={i} delay={0.1 + i * 0.08}>
              <motion.div
                className="glass rounded-xl p-6 glass-hover transition-all duration-300 group"
                whileHover={{ x: 4 }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-gradient-to-br from-cyan/10 to-purple/10 border border-cyan/10 shrink-0 mt-0.5">
                    <FileText size={18} className="text-cyan" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-base font-semibold text-foreground group-hover:text-cyan transition-colors duration-200 leading-snug">
                        {pub.title}
                      </h3>
                      <ExternalLink
                        size={14}
                        className="text-muted opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-1"
                      />
                    </div>
                    <div className="flex flex-wrap items-center gap-2 mt-2 mb-3">
                      <span className="text-xs font-semibold text-purple">
                        {pub.venue}
                      </span>
                      <span
                        className={`inline-flex px-2 py-0.5 text-[11px] font-medium rounded-full border ${pub.statusColor}`}
                      >
                        {pub.status}
                      </span>
                    </div>
                    <p className="text-sm text-muted leading-relaxed">
                      {pub.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
