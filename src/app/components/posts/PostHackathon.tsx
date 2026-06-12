const F = { display: "'Barlow', sans-serif", mono: "'DM Mono', monospace" };

export function PostHackathon() {
  const tracks = ["AI / ML", "Web3", "IoT / Edge", "CleanTech"];

  return (
    <div className="relative w-full h-full flex flex-col" style={{ background: "#fff", color: "#000" }}>

      {/* Top bar */}
      <div style={{ height: "1px", background: "#000" }} />

      <div className="flex items-center justify-between px-10 pt-7 pb-4">
        <span style={{ fontFamily: F.mono, fontSize: "10px", letterSpacing: "0.2em", color: "rgba(0,0,0,0.35)" }}>TECHFEST 2026</span>
        <span style={{ fontFamily: F.mono, fontSize: "10px", letterSpacing: "0.2em", color: "rgba(0,0,0,0.35)" }}>EVENT 03</span>
      </div>

      {/* Giant 24 — the entire story */}
      <div className="px-8 relative" style={{ lineHeight: 1 }}>
        <div
          style={{
            fontFamily: F.display,
            fontWeight: 900,
            fontSize: "210px",
            letterSpacing: "-0.06em",
            color: "#000",
            lineHeight: 0.85,
          }}>
          24
        </div>
        {/* Hours label overlaid */}
        <div
          className="absolute"
          style={{
            right: "40px",
            bottom: "8px",
            fontFamily: F.display,
            fontWeight: 200,
            fontSize: "28px",
            letterSpacing: "0.15em",
            color: "rgba(0,0,0,0.4)",
            textTransform: "uppercase",
          }}>
          hours
        </div>
      </div>

      {/* Divider rule */}
      <div style={{ height: "1px", background: "#000", margin: "0 40px" }} />

      {/* Title block */}
      <div className="px-10 pt-6 flex-1">
        <div style={{ fontFamily: F.mono, fontSize: "9px", letterSpacing: "0.3em", color: "rgba(0,0,0,0.35)", marginBottom: "10px" }}>
          HACKATHON
        </div>
        <h2
          style={{
            fontFamily: F.display,
            fontWeight: 800,
            fontSize: "40px",
            letterSpacing: "-0.02em",
            lineHeight: 1.0,
            color: "#000",
            marginBottom: "16px",
          }}>
          Code Without<br />Limits.
        </h2>
        <p style={{ fontFamily: F.display, fontWeight: 300, fontSize: "14px", lineHeight: 1.6, color: "rgba(0,0,0,0.55)", marginBottom: "20px" }}>
          Non-stop. Mentored. Cloud-powered.<br />Build something real in 24 hours.
        </p>

        {/* Tracks */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tracks.map((t) => (
            <div key={t} className="px-3 py-1.5" style={{ border: "1px solid rgba(0,0,0,0.2)", borderRadius: "2px" }}>
              <span style={{ fontFamily: F.mono, fontSize: "9px", letterSpacing: "0.12em", color: "rgba(0,0,0,0.6)" }}>{t}</span>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3" style={{ borderTop: "1px solid rgba(0,0,0,0.1)" }}>
          {[
            { val: "₹1L+", label: "PRIZES" },
            { val: "200+", label: "HACKERS" },
            { val: "15+", label: "MENTORS" },
          ].map((s, i) => (
            <div key={i} className="py-4" style={{ borderRight: i < 2 ? "1px solid rgba(0,0,0,0.1)" : "none", paddingLeft: i > 0 ? "16px" : "0", paddingRight: i < 2 ? "16px" : "0" }}>
              <div style={{ fontFamily: F.display, fontWeight: 800, fontSize: "22px", letterSpacing: "-0.01em", color: "#000", lineHeight: 1 }}>{s.val}</div>
              <div style={{ fontFamily: F.mono, fontSize: "7px", letterSpacing: "0.2em", color: "rgba(0,0,0,0.35)", marginTop: "4px" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{ height: "4px", background: "#000" }} />
      <div className="flex items-center justify-between px-10 py-4">
        <span style={{ fontFamily: F.mono, fontSize: "9px", letterSpacing: "0.15em", color: "rgba(0,0,0,0.4)" }}>@techfest_2026</span>
        <span style={{ fontFamily: F.mono, fontSize: "9px", letterSpacing: "0.1em", color: "rgba(0,0,0,0.4)" }}>#Hackathon2026</span>
      </div>
    </div>
  );
}
