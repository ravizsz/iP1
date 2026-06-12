const F = { display: "'Barlow', sans-serif", mono: "'DM Mono', monospace" };

export function PostAIWorkshop() {
  const topics = [
    "Large Language Models",
    "Computer Vision",
    "Reinforcement Learning",
    "Generative AI & Diffusion",
    "AI Ethics & Safety",
    "Neural Architecture Search",
  ];

  return (
    <div className="relative w-full h-full flex flex-col" style={{ background: "#000", color: "#fff" }}>

      {/* Full-bleed label bar */}
      <div className="flex items-center justify-between px-10 pt-8 pb-0">
        <span style={{ fontFamily: F.mono, fontSize: "10px", letterSpacing: "0.2em", color: "rgba(255,255,255,0.3)" }}>TECHFEST 2026</span>
        <span style={{ fontFamily: F.mono, fontSize: "10px", letterSpacing: "0.2em", color: "rgba(255,255,255,0.3)" }}>EVENT 02</span>
      </div>

      {/* Oversized event number — purely typographic */}
      <div className="px-10 mt-2 mb-0" style={{ lineHeight: 1 }}>
        <div
          style={{
            fontFamily: F.display,
            fontWeight: 900,
            fontSize: "140px",
            letterSpacing: "-0.06em",
            color: "transparent",
            WebkitTextStroke: "1px rgba(255,255,255,0.12)",
            lineHeight: 0.85,
            userSelect: "none",
          }}>
          AI
        </div>
      </div>

      {/* Title on top of number */}
      <div className="px-10 flex-1 flex flex-col justify-center" style={{ marginTop: "-20px" }}>
        <div style={{ fontFamily: F.mono, fontSize: "9px", letterSpacing: "0.3em", color: "rgba(255,255,255,0.35)", marginBottom: "10px" }}>
          WORKSHOP SERIES
        </div>
        <h2
          style={{
            fontFamily: F.display,
            fontWeight: 700,
            fontSize: "42px",
            letterSpacing: "-0.02em",
            lineHeight: 1.0,
            color: "#fff",
            marginBottom: "20px",
          }}>
          Machine<br />Learning<br />Summit.
        </h2>

        {/* Topic list */}
        <div className="flex flex-col" style={{ gap: "0", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          {topics.map((t, i) => (
            <div
              key={i}
              className="flex items-center justify-between py-3"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
              <span style={{ fontFamily: F.display, fontWeight: 300, fontSize: "13px", color: "rgba(255,255,255,0.7)", letterSpacing: "0.01em" }}>
                {t}
              </span>
              <span style={{ fontFamily: F.mono, fontSize: "9px", color: "rgba(255,255,255,0.2)" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }} className="px-10 py-5">
        <div className="flex items-center justify-between mb-3">
          {[
            { val: "8", label: "SESSIONS" },
            { val: "2", label: "DAYS" },
            { val: "FREE", label: "ENTRY" },
          ].map((s, i) => (
            <div key={i} className="text-left">
              <div style={{ fontFamily: F.display, fontWeight: 800, fontSize: "20px", color: "#fff", letterSpacing: "-0.01em", lineHeight: 1 }}>{s.val}</div>
              <div style={{ fontFamily: F.mono, fontSize: "7px", letterSpacing: "0.2em", color: "rgba(255,255,255,0.3)", marginTop: "3px" }}>{s.label}</div>
            </div>
          ))}
        </div>
        <div style={{ height: "1px", background: "rgba(255,255,255,0.08)", marginBottom: "12px" }} />
        <span style={{ fontFamily: F.mono, fontSize: "9px", letterSpacing: "0.15em", color: "rgba(255,255,255,0.25)" }}>@techfest_2026</span>
      </div>
    </div>
  );
}
