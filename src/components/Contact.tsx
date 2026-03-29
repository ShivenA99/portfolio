"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Mail, Phone, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "sagar147@asu.edu",
    href: "mailto:sagar147@asu.edu",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(602) 384-1481",
    href: "tel:+16023841481",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "github.com/shivena99",
    href: "https://github.com/shivena99",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/shiven-agarwal",
    href: "https://www.linkedin.com/in/shiven-agarwal/",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-b from-cyan/[0.04] to-purple/[0.04] blur-[120px]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-transparent to-cyan" />
              <span className="text-cyan text-sm font-medium tracking-wider uppercase">
                Contact
              </span>
              <div className="h-px flex-1 max-w-[60px] bg-gradient-to-l from-transparent to-cyan" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Let&apos;s <span className="gradient-text">connect</span>
            </h2>
            <p className="text-muted leading-relaxed mb-12">
              I&apos;m always interested in research collaborations, open-source
              projects, and conversations about AI safety and multi-agent systems.
              Feel free to reach out!
            </p>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {contactLinks.map((link, i) => (
            <AnimatedSection key={link.label} delay={0.1 + i * 0.08}>
              <motion.a
                href={link.href}
                target={link.href.startsWith("mailto") || link.href.startsWith("tel") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto") || link.href.startsWith("tel") ? undefined : "noopener noreferrer"}
                className="glass rounded-xl p-5 flex items-center gap-4 glass-hover transition-all duration-300 group block"
                whileHover={{ y: -2 }}
              >
                <div className="p-2.5 rounded-lg bg-gradient-to-br from-cyan/10 to-purple/10 border border-cyan/10 shrink-0">
                  <link.icon size={18} className="text-cyan" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-muted uppercase tracking-wider mb-0.5">
                    {link.label}
                  </p>
                  <p className="text-sm text-foreground font-medium truncate group-hover:text-cyan transition-colors duration-200">
                    {link.value}
                  </p>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-muted opacity-0 group-hover:opacity-100 group-hover:text-cyan transition-all duration-200 shrink-0"
                />
              </motion.a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
