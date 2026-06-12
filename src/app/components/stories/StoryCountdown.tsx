import { useState, useEffect } from "react";

const F = { display: "'Barlow', sans-serif", mono: "'DM Mono', monospace" };

function getTimeLeft() {
  const target = new Date("2026-03-15T09:00:00").getTime();
  const diff = Math.max(0, target - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}
function pad(n: number) { return String(n).padStart(2, "0"); }

export function StoryCountdown() {
  const [t, setT] = useState(getTimeLeft);
  useEffect(() => {
    const id = setInterval(() => setT(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const milestones = [
    { label: "Registration closes", date: "FEB 28" },
    { label: "Participant list published", date: "MAR 05" },
    { label: "Techfest begins", date: "MAR 15" },
    { label: "Awards night", date: "MAR 17" },
  ];

  return (
    <div className="relative w-full h-full flex flex-col" style={{ background: "#000", color: "#fff" }}>

      {/* Top strip */}
      <div style={{ height: "4px", background: "#fff" }} />

      <div className="flex items-center justify-between px-10 py-7">
        <span style={{ fontFamily: F.mono, fontSize: "10px", letterSpacing: "0.2em", color: "rgba(255,255,255,0.3)" }}>TECHFEST 2026</span>
        <span style={{ fontFamily: F.mono, fontSize: "10px", letterSpacing: "0.2em", color: "rgba(255,255,255,0.3)" }}>COUNTDOWN</span>
      </div>

      {/* Label */}
      <div className="px-10">
        <div style={{ fontFamily: F.mono, fontSize: "9px", letterSpacing: "0.3em", color: "rgba(255,255,255,0.3)", marginBottom: "8px" }}>
          MARCH 15 · 09:00 AM
        </div>
        <h1 style={{ fontFamily: F.display, fontWeight: 900, fontSize: "52px", letterSpacing: "-0.03em", lineHeight: 0.9, color: "#fff", marginBottom: "8px" }}>
          Event<br /><span style={{ fontWeight: 100 }}>Countdown.</span>
        </h1>
      </div>

      {/* Horizontal rule */}
      <div style={{ height: "1px", background: "rgba(255,255,255,0.15)", margin: "20px 40px" }} />

      {/* Giant live timer */}
      <div className="px-10 mb-2">
        <div className="grid grid-cols-2 gap-px" style={{ border: "1px solid rgba(255,255,255,0.12)" }}>
          {[
            { val: pad(t.days), label: "DAYS" },
            { val: pad(t.hours), label: "HOURS" },
            { val: pad(t.minutes), label: "MINUTES" },
            { val: pad(t.seconds), label: "SECONDS" },
          ].map((u, i) => (
            <div
              key={u.label}
              className="flex flex-col items-center justify-center py-6"
              style={{
                borderRight: i % 2 === 0 ? "1px solid rgba(255,255,255,0.12)" : "none",
                borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.12)" : "none",
                background: i === 3 ? "rgba(255,255,255,0.05)" : "transparent",
              }}>
              <div
                style={{
                  fontFamily: F.display,
                  fontWeight: 900,
                  fontSize: "58px",
                  letterSpacing: "-0.04em",
                  color: "#fff",
                  lineHeight: 1,
                }}>
                {u.val}
              </div>
              <div style={{ fontFamily: F.mono, fontSize: "8px", letterSpacing: "0.25em", color: "rgba(255,255,255,0.3)", marginTop: "6px" }}>
                {u.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Horizontal rule */}
      <div style={{ height: "1px", background: "rgba(255,255,255,0.1)", margin: "20px 40px" }} />

      {/* Timeline */}
      <div className="px-10 flex-1">
        <div style={{ fontFamily: F.mono, fontSize: "8px", letterSpacing: "0.25em", color: "rgba(255,255,255,0.3)", marginBottom: "14px" }}>
          TIMELINE
        </div>
        <div className="flex flex-col" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          {milestones.map((m, i) => (
            <div
              key={i}
              className="flex items-center justify-between py-3.5"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="flex items-center gap-3">
                <div style={{
                  width: "4px", height: "4px", borderRadius: "50%",
                  background: i === 0 ? "#fff" : "rgba(255,255,255,0.25)",
                  boxShadow: i === 0 ? "0 0 6px #fff" : "none",
                  flexShrink: 0,
                }} />
                <span style={{ fontFamily: F.display, fontWeight: 300, fontSize: "13px", color: i === 0 ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.4)", letterSpacing: "0.01em" }}>
                  {m.label}
                </span>
              </div>
              <span style={{ fontFamily: F.mono, fontSize: "9px", letterSpacing: "0.1em", color: i === 0 ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.25)", flexShrink: 0 }}>
                {m.date}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="px-10 pb-8 pt-4">
        <div style={{ height: "1px", background: "rgba(255,255,255,0.1)", marginBottom: "16px" }} />
        <div
          className="w-full py-5 flex items-center justify-center mb-4"
          style={{ background: "#fff" }}>
          <span style={{ fontFamily: F.display, fontWeight: 700, fontSize: "14px", letterSpacing: "0.25em", color: "#000" }}>
            SECURE YOUR SPOT
          </span>
        </div>
        <div className="flex items-center justify-center gap-4">
          <span style={{ fontFamily: F.mono, fontSize: "9px", letterSpacing: "0.12em", color: "rgba(255,255,255,0.25)" }}>@techfest_2026</span>
          <div style={{ width: "1px", height: "12px", background: "rgba(255,255,255,0.15)" }} />
          <span style={{ fontFamily: F.mono, fontSize: "9px", letterSpacing: "0.12em", color: "rgba(255,255,255,0.25)" }}>techfest.iit.ac.in</span>
        </div>
      </div>

      {/* Bottom strip */}
      <div style={{ height: "4px", background: "#fff" }} />
    </div>
  );
}
