const F = { display: "'Barlow', sans-serif", mono: "'DM Mono', monospace" };

export function PostRobotics() {
  return (
    <div className="relative w-full h-full flex flex-col" style={{ background: "#fff", color: "#000" }}>

      {/* Top solid bar */}
      <div style={{ height: "4px", background: "#000" }} />

      {/* Header */}
      <div className="flex items-center justify-between px-10 pt-8 pb-6">
        <span style={{ fontFamily: F.mono, fontSize: "10px", letterSpacing: "0.2em", color: "rgba(0,0,0,0.35)", fontWeight: 300 }}>
          TECHFEST 2026
        </span>
        <div
          className="px-3 py-1 rounded-full"
          style={{ border: "1px solid #000" }}>
          <span style={{ fontFamily: F.mono, fontSize: "8px", letterSpacing: "0.2em", color: "#000" }}>
            EVENT 01
          </span>
        </div>
      </div>

      {/* Robot — pure geometric SVG, monochrome */}
      <div className="flex justify-center" style={{ marginBottom: "24px" }}>
        <svg width="160" height="190" viewBox="0 0 160 190" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Head */}
          <rect x="40" y="10" width="80" height="60" rx="4" stroke="#000" strokeWidth="1.5" />
          {/* Eye left */}
          <rect x="52" y="26" width="22" height="14" rx="2" stroke="#000" strokeWidth="1.5" />
          <rect x="59" y="30" width="8" height="6" fill="#000" />
          {/* Eye right */}
          <rect x="86" y="26" width="22" height="14" rx="2" stroke="#000" strokeWidth="1.5" />
          <rect x="93" y="30" width="8" height="6" fill="#000" />
          {/* Mouth */}
          <rect x="60" y="52" width="40" height="6" rx="3" stroke="#000" strokeWidth="1" />
          <rect x="68" y="54" width="6" height="2" fill="#000" />
          <rect x="80" y="54" width="6" height="2" fill="#000" />
          <rect x="92" y="54" width="6" height="2" fill="#000" />
          {/* Antenna */}
          <line x1="80" y1="10" x2="80" y2="0" stroke="#000" strokeWidth="1.5" />
          <circle cx="80" cy="0" r="3" fill="#000" />
          {/* Neck */}
          <rect x="68" y="70" width="24" height="10" rx="2" stroke="#000" strokeWidth="1" />
          {/* Body */}
          <rect x="28" y="80" width="104" height="72" rx="4" stroke="#000" strokeWidth="1.5" />
          {/* Chest detail */}
          <rect x="44" y="96" width="72" height="40" rx="2" stroke="#000" strokeWidth="1" />
          <circle cx="62" cy="108" r="6" stroke="#000" strokeWidth="1" />
          <circle cx="80" cy="108" r="6" stroke="#000" strokeWidth="1" />
          <circle cx="98" cy="108" r="6" stroke="#000" strokeWidth="1" />
          <rect x="52" y="120" width="56" height="4" rx="2" fill="#000" opacity="0.15" />
          <rect x="52" y="128" width="32" height="4" rx="2" fill="#000" opacity="0.1" />
          {/* Arms */}
          <rect x="4" y="82" width="22" height="52" rx="11" stroke="#000" strokeWidth="1.5" />
          <rect x="134" y="82" width="22" height="52" rx="11" stroke="#000" strokeWidth="1.5" />
          {/* Legs */}
          <rect x="42" y="152" width="28" height="36" rx="4" stroke="#000" strokeWidth="1.5" />
          <rect x="90" y="152" width="28" height="36" rx="4" stroke="#000" strokeWidth="1.5" />
          {/* Feet */}
          <rect x="36" y="184" width="40" height="6" rx="3" fill="#000" />
          <rect x="84" y="184" width="40" height="6" rx="3" fill="#000" />
        </svg>
      </div>

      {/* Text block */}
      <div className="px-10 flex-1">
        <div style={{ fontFamily: F.mono, fontSize: "9px", letterSpacing: "0.3em", color: "rgba(0,0,0,0.35)", marginBottom: "6px" }}>
          COMPETITION
        </div>
        <h2
          style={{
            fontFamily: F.display,
            fontWeight: 800,
            fontSize: "52px",
            letterSpacing: "-0.02em",
            lineHeight: 0.92,
            color: "#000",
            marginBottom: "16px",
          }}>
          Robotics<br />Challenge.
        </h2>
        <p
          style={{
            fontFamily: F.display,
            fontWeight: 300,
            fontSize: "14px",
            lineHeight: 1.6,
            color: "rgba(0,0,0,0.55)",
            marginBottom: "20px",
          }}>
          Build autonomous machines. Program intelligence. Compete for glory.
        </p>

        {/* Two-column stats */}
        <div className="grid grid-cols-2" style={{ borderTop: "1px solid rgba(0,0,0,0.1)" }}>
          {[
            { val: "₹75K", label: "PRIZE POOL" },
            { val: "48H", label: "DURATION" },
          ].map((s, i) => (
            <div key={i} className="py-4" style={{ borderRight: i === 0 ? "1px solid rgba(0,0,0,0.1)" : "none", paddingRight: i === 0 ? "20px" : "0", paddingLeft: i === 1 ? "20px" : "0" }}>
              <div style={{ fontFamily: F.display, fontWeight: 800, fontSize: "28px", letterSpacing: "-0.02em", color: "#000", lineHeight: 1 }}>
                {s.val}
              </div>
              <div style={{ fontFamily: F.mono, fontSize: "8px", letterSpacing: "0.2em", color: "rgba(0,0,0,0.35)", marginTop: "4px" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{ borderTop: "4px solid #000" }} className="flex items-center justify-between px-10 py-4">
        <span style={{ fontFamily: F.mono, fontSize: "9px", letterSpacing: "0.15em", color: "rgba(0,0,0,0.4)" }}>@techfest_2026</span>
        <span style={{ fontFamily: F.mono, fontSize: "9px", letterSpacing: "0.1em", color: "rgba(0,0,0,0.4)" }}>#RoboticsChallenge</span>
      </div>
    </div>
  );
}
