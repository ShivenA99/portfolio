import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeProvider from "@/components/providers/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shiven Agarwal | Graduate AI Researcher",
  description:
    "Portfolio of Shiven Agarwal - Graduate AI Researcher at Arizona State University, specializing in agentic AI, LLM evaluation, AI safety, and privacy-preserving ML.",
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
      "Graduate AI Researcher at Arizona State University, specializing in agentic AI, LLM evaluation, AI safety, and privacy-preserving ML.",
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
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
