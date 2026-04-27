"use client";

import { motion, useTransform, MotionValue } from "framer-motion";

/* ════════════════════════════════════════════════════════
   FloatingBackground — hero ambient previews
   Section preview cards act as a visual table of contents
   ════════════════════════════════════════════════════════ */

function ParallaxLayer({
  depth,
  springX,
  springY,
  style,
  children,
}: {
  depth: number;
  springX: MotionValue<number>;
  springY: MotionValue<number>;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) {
  const x = useTransform(springX, (v) => v * depth);
  const y = useTransform(springY, (v) => v * depth);
  return (
    <motion.div style={{ position: "absolute", x, y, ...style }}>
      {children}
    </motion.div>
  );
}

/* ── Section preview cards ────────────────────────────── */

/* Preview 1: Work section — mini project row */
const WorkPreview = (
  <div
    className="flex flex-col gap-2 p-3 rounded-xl animate-float-slow"
    style={{
      background: "var(--card)",
      border: "1px solid var(--card-border)",
      width: 192,
      opacity: 0.72,
    }}
  >
    <span style={{ fontSize: 8, fontFamily: "var(--font-mono)", color: "var(--muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
      Work ↓
    </span>
    {[
      { num: "01", title: "GamED.AI", tag: "Ed-Tech" },
      { num: "02", title: "IntegrityShield", tag: "AI Safety" },
    ].map((p) => (
      <div key={p.num} className="flex items-baseline gap-2" style={{ borderTop: "1px solid var(--border)", paddingTop: 5 }}>
        <span style={{ fontSize: 8, fontFamily: "var(--font-mono)", color: "var(--accent)" }}>{p.num}</span>
        <span style={{ fontSize: 10, fontWeight: 600, color: "var(--fg)", fontFamily: "var(--font-heading)" }}>{p.title}</span>
        <span style={{ fontSize: 8, fontFamily: "var(--font-mono)", color: "var(--muted)", marginLeft: "auto" }}>{p.tag}</span>
      </div>
    ))}
  </div>
);

/* Preview 2: Research section — mini publication */
const ResearchPreview = (
  <div
    className="flex flex-col gap-2 p-3 rounded-xl animate-float-medium"
    style={{
      background: "var(--card)",
      border: "1px solid var(--card-border)",
      width: 176,
      opacity: 0.65,
    }}
  >
    <span style={{ fontSize: 8, fontFamily: "var(--font-mono)", color: "var(--muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
      Research ↓
    </span>
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center gap-1.5">
        <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#22c55e", flexShrink: 0 }} />
        <span style={{ fontSize: 8, fontFamily: "var(--font-mono)", color: "#16a34a", letterSpacing: "0.06em" }}>EACL 2026 · Accepted</span>
      </div>
      <span style={{ fontSize: 10, fontWeight: 600, color: "var(--fg)", fontFamily: "var(--font-heading)", lineHeight: 1.35 }}>
        IntegrityShield
      </span>
      <div style={{ height: 1, background: "var(--border)" }} />
      <div className="flex items-center gap-1.5">
        <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#22c55e", flexShrink: 0 }} />
        <span style={{ fontSize: 8, fontFamily: "var(--font-mono)", color: "#16a34a", letterSpacing: "0.06em" }}>ACL 2026 Demo · Accepted</span>
      </div>
      <span style={{ fontSize: 10, fontWeight: 600, color: "var(--fg)", fontFamily: "var(--font-heading)", lineHeight: 1.35 }}>
        GamED.AI
      </span>
    </div>
  </div>
);

/* Preview 3: Background — mini experience snippet */
const ExperiencePreview = (
  <div
    className="flex flex-col gap-2 p-3 rounded-xl animate-float-fast"
    style={{
      background: "var(--card)",
      border: "1px solid var(--card-border)",
      width: 184,
      opacity: 0.6,
    }}
  >
    <span style={{ fontSize: 8, fontFamily: "var(--font-mono)", color: "var(--muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
      Background ↓
    </span>
    <div className="flex flex-col gap-2.5">
      {[
        { role: "Graduate Researcher", org: "CoRAL · ASU", active: true },
        { role: "Software Engineer", org: "AasPaas", active: false },
      ].map((e) => (
        <div key={e.role} className="flex gap-2 items-start">
          <div style={{
            width: 7, height: 7, borderRadius: "50%", marginTop: 3, flexShrink: 0,
            background: e.active ? "var(--accent)" : "var(--border)",
            boxShadow: e.active ? "0 0 0 2px color-mix(in srgb, var(--accent) 25%, transparent)" : "none",
          }} />
          <div>
            <div style={{ fontSize: 9.5, fontWeight: 600, color: "var(--fg)", fontFamily: "var(--font-heading)" }}>{e.role}</div>
            <div style={{ fontSize: 8, fontFamily: "var(--font-mono)", color: "var(--muted)" }}>{e.org}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

/* Preview 4: Stack skills cloud */
const SkillsPreview = (
  <div
    className="flex flex-col gap-2 p-3 rounded-xl animate-float-slow"
    style={{
      background: "var(--surface)",
      border: "1px solid var(--border)",
      width: 170,
      opacity: 0.55,
    }}
  >
    <span style={{ fontSize: 8, fontFamily: "var(--font-mono)", color: "var(--muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
      Stack
    </span>
    <div className="flex flex-wrap gap-1">
      {["Python", "PyTorch", "LangGraph", "FastAPI", "Next.js", "AWS"].map((s) => (
        <span key={s} style={{
          fontSize: 8,
          fontFamily: "var(--font-mono)",
          color: "var(--muted)",
          background: "var(--card)",
          border: "1px solid var(--border)",
          padding: "1px 5px",
          borderRadius: 3,
        }}>{s}</span>
      ))}
    </div>
  </div>
);

/* Preview 5: Agent terminal snippet */
const TerminalPreview = (
  <div
    className="rounded-xl px-3 py-2.5 animate-float-medium"
    style={{
      background: "var(--surface)",
      border: "1px solid var(--border)",
      width: 194,
      opacity: 0.58,
    }}
  >
    <div className="flex gap-1 mb-2">
      <div className="w-2 h-2 rounded-full" style={{ background: "#ef4444", opacity: 0.6 }} />
      <div className="w-2 h-2 rounded-full" style={{ background: "#f59e0b", opacity: 0.6 }} />
      <div className="w-2 h-2 rounded-full" style={{ background: "#22c55e", opacity: 0.6 }} />
    </div>
    <pre style={{ fontSize: 9, fontFamily: "var(--font-mono)", color: "var(--muted)", lineHeight: 1.65, margin: 0 }}>
{`# DeALOG routing
router.dispatch({
  query: input,
  agents: [visual,
           text, qa],
  strategy: "ensemble"
})`}
    </pre>
  </div>
);

interface FloatingDef {
  id: string;
  depth: number;
  style: React.CSSProperties;
  content: React.ReactNode;
}

const elements: FloatingDef[] = [
  {
    id: "work-preview",
    depth: 0.022,
    style: { top: "8%", right: "2%" },
    content: WorkPreview,
  },
  {
    id: "research-preview",
    depth: 0.030,
    style: { top: "48%", right: "1%" },
    content: ResearchPreview,
  },
  {
    id: "experience-preview",
    depth: 0.018,
    style: { top: "28%", right: "14%" },
    content: ExperiencePreview,
  },
  {
    id: "skills-preview",
    depth: 0.026,
    style: { top: "68%", right: "7%" },
    content: SkillsPreview,
  },
  {
    id: "terminal",
    depth: 0.034,
    style: { top: "38%", right: "4%" },
    content: TerminalPreview,
  },
];

export function FloatingBackground({
  springX,
  springY,
}: {
  springX: MotionValue<number>;
  springY: MotionValue<number>;
}) {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* Warm radial gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 80% 50%, color-mix(in srgb, var(--accent) 5%, transparent), transparent)",
        }}
      />

      {elements.map((el) => (
        <ParallaxLayer
          key={el.id}
          depth={el.depth}
          springX={springX}
          springY={springY}
          style={el.style}
        >
          {el.content}
        </ParallaxLayer>
      ))}
    </div>
  );
}
