const F = { display: "'Barlow', sans-serif", mono: "'DM Mono', monospace" };

export function PostEventLaunch() {
  return (
    <div className="relative w-full h-full flex flex-col" style={{ background: "#000", color: "#fff" }}>

      {/* Top rule */}
      <div style={{ height: "1px", background: "#fff", opacity: 0.15 }} />

      {/* Header strip */}
      <div className="flex items-center justify-between px-10 py-6">
        <span style={{ fontFamily: F.mono, fontSize: "10px", letterSpacing: "0.18em", color: "rgba(255,255,255,0.4)", fontWeight: 300 }}>
          TECHFEST
        </span>
        <span style={{ fontFamily: F.mono, fontSize: "10px", letterSpacing: "0.18em", color: "rgba(255,255,255,0.4)", fontWeight: 300 }}>
          2026
        </span>
      </div>

      {/* Main — typographic hero */}
      <div className="flex-1 flex flex-col justify-center px-10">

        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-8">
          <div style={{ width: "24px", height: "1px", background: "#fff" }} />
          <span style={{ fontFamily: F.mono, fontSize: "9px", letterSpacing: "0.35em", color: "rgba(255,255,255,0.5)", fontWeight: 300 }}>
            INDIA'S LARGEST TECH FESTIVAL
          </span>
        </div>

        {/* Giant title */}
        <div style={{ marginBottom: "2px" }}>
          <div
            style={{
              fontFamily: F.display,
              fontWeight: 800,
              fontSize: "96px",
              letterSpacing: "-0.03em",
              lineHeight: 0.88,
              color: "#fff",
            }}>
            TECH
          </div>
          <div
            style={{
              fontFamily: F.display,
              fontWeight: 100,
              fontSize: "96px",
              letterSpacing: "-0.03em",
              lineHeight: 0.88,
              color: "#fff",
            }}>
            FEST.
          </div>
        </div>

        {/* Year mark */}
        <div className="flex items-end gap-4 mt-6 mb-10">
          <div
            style={{
              fontFamily: F.display,
              fontWeight: 900,
              fontSize: "28px",
              letterSpacing: "0.15em",
              color: "rgba(255,255,255,0.25)",
            }}>
            2026
          </div>
          <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.15)", marginBottom: "8px" }} />
        </div>

        {/* Tagline */}
        <p
          style={{
            fontFamily: F.display,
            fontWeight: 300,
            fontSize: "18px",
            letterSpacing: "0.01em",
            lineHeight: 1.5,
            color: "rgba(255,255,255,0.7)",
            maxWidth: "320px",
          }}>
          Where machines think and humans dare to innovate.
        </p>
      </div>

      {/* Bottom data row */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
        <div className="grid grid-cols-3 px-10 py-6">
          {[
            { val: "15–17", sub: "MARCH" },
            { val: "50+", sub: "EVENTS" },
            { val: "IIT", sub: "CAMPUS" },
          ].map((d, i) => (
            <div key={i} className={i > 0 ? "pl-6" : ""} style={{ borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.1)" : "none" }}>
              <div style={{ fontFamily: F.display, fontWeight: 700, fontSize: "22px", letterSpacing: "-0.01em", color: "#fff", lineHeight: 1 }}>
                {d.val}
              </div>
              <div style={{ fontFamily: F.mono, fontSize: "8px", letterSpacing: "0.2em", color: "rgba(255,255,255,0.35)", marginTop: "4px" }}>
                {d.sub}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom rule + handle */}
      <div style={{ height: "1px", background: "rgba(255,255,255,0.1)" }} />
      <div className="flex justify-center py-4">
        <span style={{ fontFamily: F.mono, fontSize: "9px", letterSpacing: "0.2em", color: "rgba(255,255,255,0.25)" }}>
          @techfest_2026
        </span>
      </div>
    </div>
  );
}
