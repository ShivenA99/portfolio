"use client";

import { useState, useCallback, useRef, useEffect } from "react";

/* ═══════════════════════════════════════════════════════════
   BackgroundGames — 5 floating interactive mini-games
   spanning the full page below the hero.

   Rules (GamifyAssessment / alpha-template-1 pattern):
   • Ambient animations ALWAYS run
   • On scroll-idle → full float animation
   • While scrolling → float pauses, parallax shift applies
   • Hover → sharpen + scale + become interactive
   • Positioned at page edges so they peek around content
   ═══════════════════════════════════════════════════════════ */

const GAMES = [
  { id: "circuit",     left: "-1%",  top: "5%",   w: 200, h: 182, rot: -2,   float: 0, sr: 0.05  },
  { id: "memory",      left: "82%",  top: "7%",   w: 192, h: 165, rot: 1.5,  float: 1, sr: -0.04 },
  { id: "watermark",   left: "-2%",  top: "38%",  w: 196, h: 175, rot: 1,    float: 2, sr: 0.06  },
  { id: "agent-chat",  left: "81%",  top: "42%",  w: 194, h: 185, rot: -1.5, float: 0, sr: -0.05 },
  { id: "waveform",    left: "-1%",  top: "74%",  w: 196, h: 160, rot: 0.8,  float: 1, sr: 0.04  },
] as const;

const CODE_TRACE_LINES = [
  { t: "def game_pipeline(query):", c: "#C84B2F" },
  { t: "  ctx = router(query)", c: "#6E6B64" },
  { t: "  bloom = fetch_curriculum()", c: "#6E6B64" },
  { t: "  game = generate(bloom)", c: "#1D6A8A" },
  { t: "  return evaluate(game)", c: "#5B5EA6" },
] as const;

const CODE_TRACE_STAGES = ["Router", "Curriculum", "GameGen", "Evaluator", "Output"] as const;
const CODE_TRACE_STAGE_COLORS = ["#C84B2F", "#B45309", "#1D6A8A", "#5B5EA6", "#22c55e"] as const;

const MEMORY_PAIRS = [
  { id: "lg", a: "LangGraph", b: "Graph Agent", c: "#C84B2F" },
  { id: "rag", a: "RAG", b: "Retrieval", c: "#1D6A8A" },
  { id: "fed", a: "Federated", b: "Privacy", c: "#5B5EA6" },
  { id: "llm", a: "LLM", b: "Transformer", c: "#B45309" },
] as const;

const MEMORY_ORDER = [0, 5, 2, 7, 4, 1, 6, 3] as const;

const AGENT_EXCHANGES = [
  { agent: "Router", msg: "Query needs visual + text reasoning", color: "#5B5EA6" },
  { agent: "Vision", msg: "Chart: peak at Region B (34%)", color: "#1D6A8A" },
  { agent: "Synthesizer", msg: "Answer: Region B shows 34% growth ✓", color: "#22c55e" },
] as const;

function GameLabel({ color, children }: { color: string; children: React.ReactNode }) {
  return (
    <div style={{
      fontSize: 7.5, fontFamily: "var(--font-mono)", color,
      letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4, fontWeight: 600,
    }}>
      {children}
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   GAME 1 — LangGraph Pipeline Trace (GamED.AI)
   Adapted from GamifyAssessment CodeTraceGame
   ══════════════════════════════════════════════════════════ */
function CodeTraceGame({ active }: { active: boolean }) {
  const [line, setLine] = useState(0);
  const [progress, setProgress] = useState<number[]>([0, 0, 0, 0, 0]);

  useEffect(() => {
    const interval = active ? 900 : 2000;
    const t = setInterval(() => {
      setLine((l) => {
        const next = (l + 1) % CODE_TRACE_LINES.length;
        setProgress((prev) => {
          const p = [...prev];
          p[l] = Math.min(p[l] + 100, 100);
          if (next === 0) return [0, 0, 0, 0, 0];
          return p;
        });
        return next;
      });
    }, interval);
    return () => clearInterval(t);
  }, [active]);

  return (
    <div className="flex flex-col w-full h-full p-1 gap-1.5">
      <GameLabel color="#C84B2F">GamED.AI · LangGraph</GameLabel>
      {/* Code */}
      <div className="flex flex-col gap-[1px] flex-1 justify-center">
        {CODE_TRACE_LINES.map((ln, i) => (
          <div key={i} className="flex items-center gap-1" style={{ opacity: line === i ? 1 : 0.38, transition: "opacity 0.3s" }}>
            <span style={{ fontSize: 6, width: 10, textAlign: "right", color: "#aaa", fontFamily: "var(--font-mono)" }}>{i + 1}</span>
            <div className="flex-1 relative">
              {line === i && (
                <div className="absolute inset-0 -mx-0.5 rounded-sm" style={{ background: "#C84B2F10" }} />
              )}
              <span style={{ fontSize: 7.5, fontFamily: "var(--font-mono)", color: ln.c, position: "relative", zIndex: 1 }}>
                {ln.t}
              </span>
            </div>
          </div>
        ))}
      </div>
      {/* Pipeline stage bars */}
      <div className="flex items-end gap-1 justify-center" style={{ height: 32 }}>
        {CODE_TRACE_STAGES.map((s, i) => (
          <div key={s} className="flex flex-col items-center gap-0.5" style={{ flex: 1 }}>
            <div style={{
              width: "100%",
              height: `${Math.max(4, progress[i] * 0.28)}px`,
              background: `linear-gradient(to top, ${CODE_TRACE_STAGE_COLORS[i]}40, ${CODE_TRACE_STAGE_COLORS[i]}80)`,
              borderRadius: "2px 2px 0 0",
              transition: "height 0.4s ease, background 0.3s",
              minHeight: 3,
            }} />
            <span style={{ fontSize: 5.5, color: "#aaa", fontFamily: "var(--font-mono)", textAlign: "center" }}>{s}</span>
          </div>
        ))}
      </div>
      {active && (
        <button
          onClick={() => setLine((l) => { setProgress((p) => { const n = [...p]; n[l] = 100; return n; }); return (l + 1) % CODE_TRACE_LINES.length; })}
          style={{ fontSize: 7, color: "#C84B2F", fontFamily: "var(--font-mono)", cursor: "pointer", alignSelf: "center" }}
        >
          Step →
        </button>
      )}
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   GAME 2 — Memory Match: AI/ML Terms (GamED.AI)
   ══════════════════════════════════════════════════════════ */
function MemoryMatchGame({ active }: { active: boolean }) {
  const flatCards = MEMORY_PAIRS.flatMap((p) => [
    { display: p.a, pid: p.id, c: p.c },
    { display: p.b, pid: p.id, c: p.c },
  ]);

  const [flipped, setFlipped] = useState<Set<number>>(new Set());
  const [matched, setMatched] = useState<Set<string>>(new Set());
  const [lock, setLock] = useState(false);

  useEffect(() => {
    const steps: Array<() => void> = [
      () => setFlipped(new Set([0])),
      () => setFlipped(new Set([0, 3])),
      () => { setMatched(new Set(["lg"])); setFlipped(new Set()); },
      () => setFlipped(new Set([2])),
      () => setFlipped(new Set([2, 5])),
      () => { setMatched(new Set(["lg", "rag"])); setFlipped(new Set()); },
      () => { setMatched(new Set()); setFlipped(new Set()); },
    ];
    let i = 0;
    const t = setInterval(() => { steps[i % steps.length](); i++; }, 1700);
    return () => clearInterval(t);
  }, []);

  const click = useCallback((idx: number) => {
    const card = flatCards[MEMORY_ORDER[idx]];
    if (!active || lock || flipped.has(idx) || matched.has(card.pid)) return;
    const nf = new Set(flipped); nf.add(idx);
    setFlipped(nf);
    if (nf.size === 2) {
      setLock(true);
      const [a, b] = Array.from(nf);
      if (flatCards[MEMORY_ORDER[a]].pid === flatCards[MEMORY_ORDER[b]].pid) {
        setTimeout(() => { setMatched((m) => new Set([...m, flatCards[MEMORY_ORDER[a]].pid])); setFlipped(new Set()); setLock(false); }, 500);
      } else {
        setTimeout(() => { setFlipped(new Set()); setLock(false); }, 800);
      }
    }
  }, [active, lock, flipped, matched, flatCards]);

  return (
    <div className="flex flex-col w-full h-full p-1">
      <GameLabel color="#C84B2F">GamED.AI · Memory</GameLabel>
      <div className="grid gap-1.5 flex-1" style={{ gridTemplateColumns: "repeat(4,1fr)" }}>
        {MEMORY_ORDER.map((ci, i) => {
          const card = flatCards[ci];
          const show = flipped.has(i) || matched.has(card.pid);
          const isMatched = matched.has(card.pid);
          return (
            <div key={i} onClick={() => click(i)}
              style={{ perspective: 300, cursor: active ? "pointer" : "default", pointerEvents: active ? "auto" : "none" }}>
              <div style={{
                width: "100%", paddingBottom: "100%", position: "relative",
                transformStyle: "preserve-3d", transition: "transform 0.3s",
                transform: show ? "rotateY(180deg)" : "",
              }}>
                <div style={{
                  position: "absolute", inset: 0, backfaceVisibility: "hidden", borderRadius: 5,
                  background: `${card.c}12`, border: `1px solid ${card.c}28`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <span style={{ fontSize: 11, opacity: 0.35, color: card.c }}>?</span>
                </div>
                <div style={{
                  position: "absolute", inset: 0, backfaceVisibility: "hidden", borderRadius: 5,
                  transform: "rotateY(180deg)",
                  background: isMatched ? "#22c55e0e" : "var(--card)",
                  border: `1.5px solid ${isMatched ? "#22c55e50" : card.c + "50"}`,
                  display: "flex", alignItems: "center", justifyContent: "center", padding: 2,
                }}>
                  <span style={{
                    fontSize: 6.5, fontFamily: "var(--font-mono)", fontWeight: 600,
                    textAlign: "center", color: isMatched ? "#16a34a" : card.c, lineHeight: 1.2,
                  }}>
                    {card.display}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   GAME 3 — Watermark Document (IntegrityShield)
   ══════════════════════════════════════════════════════════ */
function WatermarkGame({ active }: { active: boolean }) {
  const [revealed, setRevealed] = useState(false);
  const [scanning, setScanning] = useState(false);
  const [pulse, setPulse] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setPulse((p) => (p + 1) % 3), 1600);
    return () => clearInterval(t);
  }, []);

  const handleScan = useCallback(() => {
    if (!active || scanning) return;
    setScanning(true); setRevealed(false);
    setTimeout(() => { setRevealed(true); setScanning(false); }, 1300);
    setTimeout(() => setRevealed(false), 4500);
  }, [active, scanning]);

  const wmOpacity = [0.07, 0.14, 0.05][pulse];

  return (
    <div className="flex flex-col w-full h-full p-1 gap-1.5">
      <GameLabel color="#1D6A8A">IntegrityShield · Scan</GameLabel>
      <div style={{
        flex: 1, background: "var(--card)", border: "1px solid var(--border)",
        borderRadius: 6, padding: "8px 10px", position: "relative", overflow: "hidden",
      }}>
        {[88, 100, 72, 95, 60, 82, 75].map((w, i) => (
          <div key={i} style={{
            height: 5, background: "var(--border)", borderRadius: 2, width: `${w}%`,
            marginBottom: 4, opacity: revealed ? 0.22 : 0.72,
            filter: revealed ? "blur(1px)" : "none", transition: "all 0.5s",
          }} />
        ))}
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
          opacity: revealed ? 0.85 : wmOpacity, transform: "rotate(-28deg)",
          transition: "opacity 0.7s", pointerEvents: "none",
        }}>
          <span style={{
            fontSize: revealed ? 10 : 9, fontFamily: "var(--font-mono)", fontWeight: 700,
            letterSpacing: "0.1em", color: revealed ? "#1D6A8A" : "var(--muted)",
            border: revealed ? "1px solid #1D6A8A50" : "1px dashed var(--border)",
            padding: "2px 7px", borderRadius: 2, transition: "all 0.5s",
          }}>
            PROTECTED
          </span>
        </div>
        {scanning && (
          <div style={{
            position: "absolute", left: 0, right: 0, top: 0, height: 2,
            background: "linear-gradient(to right, transparent, #1D6A8A80, transparent)",
            animation: "scanDown 1.3s ease-in-out forwards",
          }} />
        )}
        {revealed && (
          <div style={{ position: "absolute", bottom: 6, right: 8, fontSize: 8.5, fontFamily: "var(--font-mono)", color: "#1D6A8A", fontWeight: 700 }}>
            91–94% blocked ✓
          </div>
        )}
      </div>
      {active && (
        <button onClick={handleScan} style={{
          fontSize: 8.5, padding: "4px", borderRadius: 4, cursor: "pointer",
          background: scanning ? "transparent" : "#1D6A8A12",
          border: "1px solid #1D6A8A35", color: "#1D6A8A",
          fontFamily: "var(--font-mono)", letterSpacing: "0.07em",
        }}>
          {scanning ? "SCANNING..." : "SCAN DOCUMENT"}
        </button>
      )}
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   GAME 4 — Multi-Agent Chat (CoRAL / DeALOG)
   ══════════════════════════════════════════════════════════ */
function AgentChatGame({ active }: { active: boolean }) {
  const [visible, setVisible] = useState<number[]>([]);

  useEffect(() => {
    let step = 0;
    const t = setInterval(() => {
      step++;
      const phase = step % (AGENT_EXCHANGES.length + 2);
      if (phase === 0) setVisible([]);
      else if (phase <= AGENT_EXCHANGES.length) setVisible((v) => [...v, phase - 1]);
    }, active ? 1100 : 1500);
    return () => clearInterval(t);
  }, [active]);

  return (
    <div className="flex flex-col w-full h-full p-1 gap-1">
      <GameLabel color="#5B5EA6">DeALOG · Multi-Agent</GameLabel>
      <div className="flex flex-col gap-2.5 flex-1 justify-center">
        {AGENT_EXCHANGES.map((ex, i) => (
          <div key={i} style={{
            display: "flex", gap: 6, alignItems: "flex-start",
            opacity: visible.includes(i) ? 1 : 0.08,
            transform: visible.includes(i) ? "translateX(0)" : "translateX(-6px)",
            transition: "all 0.4s ease",
          }}>
            <div style={{
              fontSize: 6.5, fontFamily: "var(--font-mono)", fontWeight: 700,
              color: ex.color, background: `${ex.color}15`,
              padding: "1px 5px", borderRadius: 3, whiteSpace: "nowrap",
              letterSpacing: "0.05em", marginTop: 1, flexShrink: 0,
            }}>
              {ex.agent}
            </div>
            <div style={{ fontSize: 8.5, color: "var(--muted)", lineHeight: 1.45 }}>
              {ex.msg}
            </div>
          </div>
        ))}
      </div>
      <div style={{ height: 1, background: "var(--border)" }} />
      <div style={{ fontSize: 7.5, fontFamily: "var(--font-mono)", color: "var(--muted)", textAlign: "center", letterSpacing: "0.04em" }}>
        3 agents · decentralized routing
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   GAME 5 — Scam Call Waveform (SentinelEdge)
   ══════════════════════════════════════════════════════════ */
function WaveformGame({ active }: { active: boolean }) {
  const [bars, setBars] = useState(() => Array.from({ length: 22 }, () => 0.3 + Math.random() * 0.5));
  const [verdict, setVerdict] = useState<"scam" | "safe" | null>(null);
  const [analyzing, setAnalyzing] = useState(false);

  useEffect(() => {
    const t = setInterval(() => {
      setBars((b) => b.map((v) => Math.max(0.08, Math.min(1, v + (Math.random() - 0.5) * 0.28))));
    }, 110);
    return () => clearInterval(t);
  }, []);

  const handleAnalyze = useCallback(() => {
    if (!active || analyzing) return;
    setAnalyzing(true); setVerdict(null);
    setTimeout(() => { setVerdict("scam"); setAnalyzing(false); }, 1900);
    setTimeout(() => setVerdict(null), 4800);
  }, [active, analyzing]);

  const barRgb = verdict === "scam" ? "220,38,38" : verdict === "safe" ? "34,197,94" : "180,83,9";

  return (
    <div className="flex flex-col w-full h-full p-1 gap-1.5">
      <GameLabel color="#B45309">SentinelEdge · Call</GameLabel>
      <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 2 }}>
        <div style={{
          width: 22, height: 22, borderRadius: "50%",
          background: "#B4530912", border: "1px solid #B4530928",
          display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
        }}>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#B45309" strokeWidth="2.2" strokeLinecap="round">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.63A2 2 0 014 2h3a2 2 0 012 1.72c.127.96.361 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0122 16.92z" />
          </svg>
        </div>
        <div>
          <div style={{ fontSize: 9, fontWeight: 600, color: "var(--fg)" }}>+1 (800) 555-0192</div>
          <div style={{ fontSize: 7.5, fontFamily: "var(--font-mono)", color: "var(--muted)" }}>On-device · edge inference</div>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 1.5, height: 36, flex: 1 }}>
        {bars.map((h, i) => (
          <div key={i} style={{
            flex: 1, height: `${Math.round(h * 100)}%`, borderRadius: 2,
            background: `rgba(${barRgb}, ${0.28 + h * 0.55})`,
            transition: "height 0.1s ease, background 0.5s",
          }} />
        ))}
      </div>
      {verdict && (
        <div style={{
          fontSize: 8.5, fontFamily: "var(--font-mono)", fontWeight: 700, textAlign: "center",
          padding: "3.5px", borderRadius: 4, letterSpacing: "0.08em",
          color: verdict === "scam" ? "#dc2626" : "#16a34a",
          background: verdict === "scam" ? "#dc262612" : "#22c55e12",
          border: `1px solid ${verdict === "scam" ? "#dc262630" : "#22c55e30"}`,
        }}>
          {verdict === "scam" ? "⚠ SCAM DETECTED · 96.4%" : "✓ SAFE · 98.1%"}
        </div>
      )}
      {analyzing && <div style={{ fontSize: 8.5, fontFamily: "var(--font-mono)", color: "#B45309", textAlign: "center" }}>Analyzing on-device...</div>}
      {!verdict && !analyzing && active && (
        <button onClick={handleAnalyze} style={{
          fontSize: 8.5, padding: "3.5px", borderRadius: 4, cursor: "pointer",
          background: "#B4530912", border: "1px solid #B4530935",
          color: "#B45309", fontFamily: "var(--font-mono)", letterSpacing: "0.07em",
        }}>
          ANALYZE CALL
        </button>
      )}
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   Game card shell
   ══════════════════════════════════════════════════════════ */
const FLOAT_LABELS = ["animate-float-slow", "animate-float-medium", "animate-float-fast"] as const;

function GameCard({
  game, scrolling, scrollY, children,
}: {
  game: typeof GAMES[number];
  scrolling: boolean;
  scrollY: number;
  children: (active: boolean) => React.ReactNode;
}) {
  const [active, setActive] = useState(false);
  const parallaxY = scrollY * game.sr;

  return (
    <div
      style={{
        position: "absolute", left: game.left, top: game.top, width: game.w,
        transform: `rotate(${game.rot}deg) translateY(${parallaxY}px) scale(${active ? 1.05 : 1})`,
        transition: "transform 0.35s ease, opacity 0.3s ease, filter 0.3s ease",
        opacity: active ? 0.97 : 0.35,
        filter: active ? "none" : "blur(0.3px)",
        zIndex: active ? 5 : 1,
        pointerEvents: "auto",
      }}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <div
        className={scrolling ? "" : FLOAT_LABELS[game.float]}
        style={{
          width: "100%", height: game.h,
          background: "var(--card)", border: "1px solid var(--card-border)",
          borderRadius: 12, padding: "10px 12px",
          boxShadow: active ? "0 8px 32px rgba(0,0,0,0.08)" : "none",
          transition: "box-shadow 0.3s ease",
        }}
      >
        {children(active)}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   Main export
   ══════════════════════════════════════════════════════════ */
export default function BackgroundGames() {
  const [scrollY, setScrollY] = useState(0);
  const [scrolling, setScrolling] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY);
      setScrolling(true);
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setScrolling(false), 1400);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const gameComponents: Record<string, (active: boolean) => React.ReactNode> = {
    "circuit":     (a) => <CodeTraceGame  active={a} />,
    "memory":      (a) => <MemoryMatchGame active={a} />,
    "watermark":   (a) => <WatermarkGame   active={a} />,
    "agent-chat":  (a) => <AgentChatGame   active={a} />,
    "waveform":    (a) => <WaveformGame    active={a} />,
  };

  return (
    <div
      className="absolute inset-0 pointer-events-none hidden lg:block"
      aria-hidden="true"
      style={{ zIndex: 0, overflow: "hidden" }}
    >
      {GAMES.map((game) => (
        <GameCard key={game.id} game={game} scrolling={scrolling} scrollY={scrollY}>
          {(active) => gameComponents[game.id]?.(active) ?? null}
        </GameCard>
      ))}
    </div>
  );
}
