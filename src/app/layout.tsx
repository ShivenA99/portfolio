import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Shiven Agarwal | Graduate AI Researcher",
  description:
    "Portfolio of Shiven Agarwal - Graduate AI Researcher at Arizona State University, specializing in multi-agent systems, LLM robustness, and AI safety.",
  keywords: [
    "Shiven Agarwal",
    "AI Researcher",
    "ASU",
    "Machine Learning",
    "NLP",
    "Multi-Agent Systems",
    "LLM",
  ],
  authors: [{ name: "Shiven Agarwal" }],
  openGraph: {
    title: "Shiven Agarwal | Graduate AI Researcher",
    description:
      "Graduate AI Researcher at Arizona State University, specializing in multi-agent systems, LLM robustness, and AI safety.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen bg-background text-foreground font-sans">
        {children}
      </body>
    </html>
  );
}
