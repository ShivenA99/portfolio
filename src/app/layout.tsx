import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import ThemeProvider from "@/components/providers/ThemeProvider";
import "./globals.css";

const inter = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

const interBody = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Shiven Agarwal | Graduate AI Researcher",
  description:
    "Portfolio of Shiven Agarwal — Graduate AI Researcher at Arizona State University, specializing in multi-agent AI systems, LLM robustness, and AI safety.",
  keywords: [
    "Shiven Agarwal",
    "AI Researcher",
    "ASU",
    "Machine Learning",
    "NLP",
    "Multi-Agent Systems",
    "LLM",
    "AI Safety",
  ],
  authors: [{ name: "Shiven Agarwal" }],
  openGraph: {
    title: "Shiven Agarwal | Graduate AI Researcher",
    description:
      "Graduate AI Researcher at Arizona State University — multi-agent AI, LLM evaluation, AI safety.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${interBody.variable} ${mono.variable}`}
        style={{ fontFamily: "var(--font-inter, sans-serif)" }}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
