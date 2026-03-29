"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, Code, Globe, MapPin } from "lucide-react";
import { personalInfo } from "@/lib/data";

const ease = [0.25, 0.1, 0.25, 1] as const;

const contactItems = [
  {
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: Mail,
    isExternal: false,
  },
  {
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone.replace(/\D/g, "")}`,
    icon: Phone,
    isExternal: false,
  },
  {
    label: "GitHub",
    value: "shivena99",
    href: personalInfo.github,
    icon: Code,
    isExternal: true,
  },
  {
    label: "LinkedIn",
    value: "shiven-agarwal",
    href: personalInfo.linkedin,
    icon: Globe,
    isExternal: true,
  },
  {
    label: "Location",
    value: personalInfo.location,
    href: undefined as string | undefined,
    icon: MapPin,
    isExternal: false,
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div ref={ref} className="max-w-6xl mx-auto px-6 md:px-12 py-24 md:py-32">
        {/* Section header */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease }}
          className="font-mono text-xs uppercase tracking-widest text-[#10B981] mb-2"
        >
          Contact
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.05, ease }}
          className="font-heading text-3xl font-bold mb-4"
        >
          Get in Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1, ease }}
          className="text-muted text-lg mb-12"
        >
          Open to research collaborations, new opportunities, and interesting
          conversations.
        </motion.p>

        {/* Contact grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
          {contactItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.15 + idx * 0.1, ease }}
                className="bg-white/[0.03] rounded-xl p-5 flex items-center gap-4 hover:bg-white/[0.05] transition-all"
              >
                <Icon className="w-5 h-5 text-[#10B981] shrink-0" />
                <div className="flex flex-col">
                  <span className="font-mono text-xs text-muted">
                    {item.label}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.isExternal ? "_blank" : undefined}
                      rel={item.isExternal ? "noopener noreferrer" : undefined}
                      className="text-sm font-medium text-[#10B981] hover:underline underline-offset-4"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-sm font-medium">{item.value}</span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Say Hello button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.65, ease }}
          className="mt-8"
        >
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full font-medium transition-all"
          >
            Say Hello
          </a>
        </motion.div>
      </div>
    </section>
  );
}
