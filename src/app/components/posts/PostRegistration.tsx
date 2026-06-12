const F = { display: "'Barlow', sans-serif", mono: "'DM Mono', monospace" };

export function PostRegistration() {
  const includes = [
    "All 50+ events access",
    "Swag kit & certificate",
    "Industry networking night",
    "Cloud credits — ₹10K value",
    "Meals across 3 days",
  ];

  return (
    <div className="relative w-full h-full flex flex-col" style={{ background: "#000", color: "#fff" }}>

      {/* Inverted top bar — white fill */}
      <div className="px-10 pt-8 pb-6" style={{ background: "#fff" }}>
        <div className="flex items-center justify-between mb-6">
          <span style={{ fontFamily: F.mono, fontSize: "10px", letterSpacing: "0.2em", color: "rgba(0,0,0,0.4)" }}>TECHFEST 2026</span>
          <div className="flex items-center gap-2">
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#000" }} />
            <span style={{ fontFamily: F.mono, fontSize: "9px", letterSpacing: "0.2em", color: "#000" }}>CLOSING SOON</span>
          </div>
        </div>

        {/* Price — the hero on white */}
        <div style={{ fontFamily: F.mono, fontSize: "9px", letterSpacing: "0.3em", color: "rgba(0,0,0,0.35)", marginBottom: "6px" }}>
          EARLY BIRD
        </div>
        <div className="flex items-baseline gap-3 mb-1">
          <span style={{ fontFamily: F.display, fontWeight: 900, fontSize: "80px", letterSpacing: "-0.04em", lineHeight: 1, color: "#000" }}>
            ₹199
          </span>
        </div>
        <div style={{ fontFamily: F.display, fontWeight: 300, fontSize: "14px", color: "rgba(0,0,0,0.45)", letterSpacing: "0.02em" }}>
          Regular price ₹499 — save 60%
        </div>
      </div>

      {/* Seats bar */}
      <div className="px-10 py-5" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="flex justify-between mb-2">
          <span style={{ fontFamily: F.mono, fontSize: "9px", letterSpacing: "0.15em", color: "rgba(255,255,255,0.4)" }}>SEATS FILLED</span>
          <span style={{ fontFamily: F.display, fontWeight: 700, fontSize: "14px", color: "#fff" }}>847 / 1000</span>
        </div>
        <div style={{ height: "2px", background: "rgba(255,255,255,0.1)", borderRadius: "1px", overflow: "hidden" }}>
          <div style={{ height: "100%", width: "84.7%", background: "#fff" }} />
        </div>
        <div style={{ fontFamily: F.mono, fontSize: "8px", letterSpacing: "0.12em", color: "rgba(255,255,255,0.3)", marginTop: "6px" }}>
          153 SEATS REMAINING
        </div>
      </div>

      {/* Includes list */}
      <div className="px-10 py-5 flex-1">
        <div style={{ fontFamily: F.mono, fontSize: "9px", letterSpacing: "0.25em", color: "rgba(255,255,255,0.3)", marginBottom: "14px" }}>
          WHAT'S INCLUDED
        </div>
        <div className="flex flex-col gap-3">
          {includes.map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <div style={{ width: "14px", height: "14px", border: "1px solid rgba(255,255,255,0.5)", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                  <path d="M1 3L3 5L7 1" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span style={{ fontFamily: F.display, fontWeight: 300, fontSize: "14px", color: "rgba(255,255,255,0.75)", letterSpacing: "0.01em" }}>
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA block */}
      <div className="px-10 pb-8">
        {/* Deadline */}
        <div className="flex items-center gap-3 mb-4">
          <div style={{ height: "1px", flex: 1, background: "rgba(255,255,255,0.15)" }} />
          <span style={{ fontFamily: F.mono, fontSize: "9px", letterSpacing: "0.15em", color: "rgba(255,255,255,0.4)" }}>CLOSES FEB 28, 2026</span>
          <div style={{ height: "1px", flex: 1, background: "rgba(255,255,255,0.15)" }} />
        </div>

        {/* CTA button — inverted */}
        <div
          className="w-full py-4 flex items-center justify-center"
          style={{ background: "#fff" }}>
          <span style={{ fontFamily: F.display, fontWeight: 700, fontSize: "15px", letterSpacing: "0.2em", color: "#000" }}>
            REGISTER NOW
          </span>
        </div>
        <div className="flex justify-center mt-3">
          <span style={{ fontFamily: F.mono, fontSize: "9px", letterSpacing: "0.12em", color: "rgba(255,255,255,0.25)" }}>
            techfest.iit.ac.in/register
          </span>
        </div>
      </div>
    </div>
  );
}
