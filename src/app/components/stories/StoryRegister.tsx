const F = { display: "'Barlow', sans-serif", mono: "'DM Mono', monospace" };

export function StoryRegister() {
  const steps = [
    "Visit techfest.iit.ac.in",
    "Create your account",
    "Choose your events",
    "Complete payment — ₹199",
    "Receive confirmation",
  ];

  return (
    <div className="relative w-full h-full flex flex-col" style={{ background: "#fff", color: "#000" }}>

      {/* Top solid rule */}
      <div style={{ height: "4px", background: "#000" }} />

      {/* Header */}
      <div className="flex items-center justify-between px-10 py-7">
        <span style={{ fontFamily: F.mono, fontSize: "10px", letterSpacing: "0.2em", color: "rgba(0,0,0,0.35)" }}>TECHFEST 2026</span>
        <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#000" }} />
      </div>

      {/* Eyebrow */}
      <div className="px-10">
        <div style={{ fontFamily: F.mono, fontSize: "9px", letterSpacing: "0.3em", color: "rgba(0,0,0,0.35)", marginBottom: "10px" }}>
          HOW TO JOIN
        </div>
      </div>

      {/* Giant headline */}
      <div className="px-10 mb-2">
        <h1
          style={{
            fontFamily: F.display,
            fontWeight: 900,
            fontSize: "74px",
            letterSpacing: "-0.04em",
            lineHeight: 0.88,
            color: "#000",
          }}>
          Register<br />
          <span style={{ fontWeight: 100 }}>Today.</span>
        </h1>
      </div>

      {/* Horizontal rule */}
      <div style={{ height: "1px", background: "#000", margin: "20px 40px" }} />

      {/* Price spotlight */}
      <div className="px-10 mb-8">
        <div className="flex items-baseline gap-3">
          <span style={{ fontFamily: F.display, fontWeight: 900, fontSize: "56px", letterSpacing: "-0.03em", color: "#000", lineHeight: 1 }}>₹199</span>
          <div>
            <div style={{ fontFamily: F.mono, fontSize: "8px", letterSpacing: "0.15em", color: "rgba(0,0,0,0.4)", textDecoration: "line-through" }}>₹499</div>
            <div style={{ fontFamily: F.mono, fontSize: "8px", letterSpacing: "0.15em", color: "rgba(0,0,0,0.5)" }}>EARLY BIRD</div>
          </div>
        </div>
        <p style={{ fontFamily: F.display, fontWeight: 300, fontSize: "13px", color: "rgba(0,0,0,0.5)", marginTop: "6px", lineHeight: 1.5 }}>
          All events. Full access. Meals included.
        </p>
      </div>

      {/* Steps */}
      <div className="px-10 flex-1">
        <div style={{ fontFamily: F.mono, fontSize: "8px", letterSpacing: "0.25em", color: "rgba(0,0,0,0.3)", marginBottom: "14px" }}>
          STEPS TO REGISTER
        </div>
        <div className="flex flex-col" style={{ borderTop: "1px solid rgba(0,0,0,0.1)" }}>
          {steps.map((step, i) => (
            <div
              key={i}
              className="flex items-center gap-5 py-4"
              style={{ borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
              <span
                style={{
                  fontFamily: F.display,
                  fontWeight: 900,
                  fontSize: "22px",
                  color: "rgba(0,0,0,0.12)",
                  letterSpacing: "-0.02em",
                  minWidth: "28px",
                  lineHeight: 1,
                }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span style={{ fontFamily: F.display, fontWeight: 400, fontSize: "14px", color: "rgba(0,0,0,0.75)", lineHeight: 1.4, letterSpacing: "0.01em" }}>
                {step}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="px-10 pb-10 pt-6">
        <div
          className="w-full py-5 flex items-center justify-center mb-4"
          style={{ background: "#000" }}>
          <span style={{ fontFamily: F.display, fontWeight: 700, fontSize: "15px", letterSpacing: "0.25em", color: "#fff" }}>
            REGISTER NOW
          </span>
        </div>
        <div className="flex justify-center">
          <span style={{ fontFamily: F.mono, fontSize: "10px", letterSpacing: "0.12em", color: "rgba(0,0,0,0.35)" }}>
            techfest.iit.ac.in/register
          </span>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ height: "4px", background: "#000" }} />
    </div>
  );
}
