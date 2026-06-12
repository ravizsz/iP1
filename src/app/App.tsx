import { useState } from "react";
import { PostEventLaunch } from "./components/posts/PostEventLaunch";
import { PostRobotics } from "./components/posts/PostRobotics";
import { PostAIWorkshop } from "./components/posts/PostAIWorkshop";
import { PostHackathon } from "./components/posts/PostHackathon";
import { PostRegistration } from "./components/posts/PostRegistration";
import { StoryRegister } from "./components/stories/StoryRegister";
import { StoryCountdown } from "./components/stories/StoryCountdown";

const F = { display: "'Barlow', sans-serif", mono: "'DM Mono', monospace" };

type Tab = "posts" | "stories";

const feedPosts = [
  { id: "launch", label: "Event Launch", component: PostEventLaunch },
  { id: "robotics", label: "Robotics Challenge", component: PostRobotics },
  { id: "ai", label: "AI Workshop", component: PostAIWorkshop },
  { id: "hackathon", label: "24H Hackathon", component: PostHackathon },
  { id: "reg", label: "Registration Closing", component: PostRegistration },
];

const stories = [
  { id: "s-register", label: "Register CTA", component: StoryRegister },
  { id: "s-countdown", label: "Countdown Timer", component: StoryCountdown },
];

export default function App() {
  const [tab, setTab] = useState<Tab>("posts");
  const [activePost, setActivePost] = useState(0);
  const [activeStory, setActiveStory] = useState(0);

  const items = tab === "posts" ? feedPosts : stories;
  const idx = tab === "posts" ? activePost : activeStory;
  const setIdx = tab === "posts" ? setActivePost : setActiveStory;
  const ActiveComponent = items[idx].component;
  const isStory = tab === "stories";

  return (
    <div
      className="min-h-screen w-full flex flex-col"
      style={{ background: "#f0ede8", fontFamily: F.mono }}>

      {/* Header */}
      <header
        className="flex items-center justify-between px-8 py-5 flex-shrink-0"
        style={{
          background: "#fff",
          borderBottom: "1px solid rgba(0,0,0,0.08)",
          position: "sticky",
          top: 0,
          zIndex: 50,
        }}>
        <div className="flex items-center gap-4">
          <div
            style={{
              width: "32px",
              height: "32px",
              background: "#000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <rect x="1" y="1" width="6" height="6" fill="white" />
              <rect x="9" y="1" width="6" height="6" fill="white" />
              <rect x="1" y="9" width="6" height="6" fill="white" />
              <rect x="9" y="9" width="6" height="6" fill="none" stroke="white" strokeWidth="1" />
            </svg>
          </div>
          <div>
            <div style={{ fontFamily: F.display, fontWeight: 800, fontSize: "13px", letterSpacing: "0.12em", color: "#000" }}>
              TECHFEST 2026
            </div>
            <div style={{ fontFamily: F.mono, fontSize: "8px", letterSpacing: "0.18em", color: "rgba(0,0,0,0.35)", marginTop: "1px" }}>
              INSTAGRAM CAMPAIGN
            </div>
          </div>
        </div>
        <div style={{ fontFamily: F.mono, fontSize: "9px", letterSpacing: "0.15em", color: "rgba(0,0,0,0.4)" }}>
          7 ASSETS · READY TO EXPORT
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">

        {/* Sidebar */}
        <aside
          className="flex-shrink-0 flex flex-col"
          style={{
            width: "260px",
            background: "#fff",
            borderRight: "1px solid rgba(0,0,0,0.08)",
          }}>

          {/* Tab toggle */}
          <div className="p-4 flex gap-2" style={{ borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
            {(["posts", "stories"] as Tab[]).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                style={{
                  flex: 1,
                  padding: "8px",
                  fontFamily: F.mono,
                  fontSize: "8px",
                  letterSpacing: "0.18em",
                  color: tab === t ? "#fff" : "rgba(0,0,0,0.4)",
                  background: tab === t ? "#000" : "transparent",
                  border: tab === t ? "none" : "1px solid rgba(0,0,0,0.15)",
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                }}>
                {t === "posts" ? "FEED" : "STORIES"}
              </button>
            ))}
          </div>

          {/* Dimensions */}
          <div className="px-4 py-3" style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
            <span style={{ fontFamily: F.mono, fontSize: "8px", letterSpacing: "0.12em", color: "rgba(0,0,0,0.35)" }}>
              {tab === "posts" ? "1080 × 1350 px  ·  4:5" : "1080 × 1920 px  ·  9:16"}
            </span>
          </div>

          {/* Asset list */}
          <div className="flex flex-col flex-1 overflow-y-auto py-2">
            {items.map((item, i) => (
              <button
                key={item.id}
                onClick={() => setIdx(i)}
                className="flex items-center gap-4 px-4 py-3.5 text-left transition-all"
                style={{
                  background: idx === i ? "#000" : "transparent",
                  border: "none",
                  cursor: "pointer",
                  borderBottom: "1px solid rgba(0,0,0,0.05)",
                }}>
                <span style={{
                  fontFamily: F.display,
                  fontWeight: 900,
                  fontSize: "18px",
                  color: idx === i ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.12)",
                  letterSpacing: "-0.02em",
                  minWidth: "24px",
                  lineHeight: 1,
                }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <div style={{ fontFamily: F.display, fontWeight: 500, fontSize: "13px", letterSpacing: "0.02em", color: idx === i ? "#fff" : "rgba(0,0,0,0.75)", lineHeight: 1 }}>
                    {item.label}
                  </div>
                  <div style={{ fontFamily: F.mono, fontSize: "7px", letterSpacing: "0.15em", color: idx === i ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.3)", marginTop: "4px" }}>
                    {tab === "posts" ? "FEED POST" : "STORY"}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Count */}
          <div className="p-4 grid grid-cols-2 gap-2" style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
            {[
              { val: "5", label: "FEED POSTS" },
              { val: "2", label: "STORIES" },
            ].map((s) => (
              <div key={s.label} className="py-3 px-3" style={{ border: "1px solid rgba(0,0,0,0.12)" }}>
                <div style={{ fontFamily: F.display, fontWeight: 900, fontSize: "22px", color: "#000", lineHeight: 1 }}>{s.val}</div>
                <div style={{ fontFamily: F.mono, fontSize: "6px", letterSpacing: "0.15em", color: "rgba(0,0,0,0.35)", marginTop: "4px" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </aside>

        {/* Canvas */}
        <main
          className="flex-1 flex flex-col items-center justify-start overflow-auto"
          style={{ padding: "48px 40px" }}>

          {/* Title row */}
          <div className="w-full max-w-2xl mb-6 flex items-center justify-between">
            <div>
              <div style={{ fontFamily: F.mono, fontSize: "8px", letterSpacing: "0.2em", color: "rgba(0,0,0,0.35)", marginBottom: "4px" }}>
                {tab === "posts" ? `POST ${String(idx + 1).padStart(2, "0")} OF 05` : `STORY ${String(idx + 1).padStart(2, "0")} OF 02`}
              </div>
              <div style={{ fontFamily: F.display, fontWeight: 700, fontSize: "18px", letterSpacing: "0.04em", color: "#000" }}>
                {items[idx].label.toUpperCase()}
              </div>
            </div>

            {/* Prev / next */}
            <div className="flex gap-2">
              {[
                { dir: -1, label: "←" },
                { dir: 1, label: "→" },
              ].map(({ dir, label }) => {
                const disabled = dir === -1 ? idx === 0 : idx === items.length - 1;
                return (
                  <button
                    key={dir}
                    onClick={() => !disabled && setIdx(idx + dir)}
                    style={{
                      width: "36px",
                      height: "36px",
                      background: disabled ? "transparent" : "#000",
                      border: `1px solid ${disabled ? "rgba(0,0,0,0.15)" : "#000"}`,
                      color: disabled ? "rgba(0,0,0,0.2)" : "#fff",
                      fontFamily: F.display,
                      fontSize: "16px",
                      cursor: disabled ? "not-allowed" : "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.15s ease",
                    }}>
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Post frame */}
          <div
            style={{
              width: isStory ? "360px" : "486px",
              aspectRatio: isStory ? "9/16" : "4/5",
              flexShrink: 0,
              boxShadow: "0 8px 40px rgba(0,0,0,0.14), 0 2px 8px rgba(0,0,0,0.08)",
              overflow: "hidden",
              position: "relative",
            }}>
            <ActiveComponent />
          </div>

          {/* Meta tags */}
          <div className="flex items-center gap-3 mt-5">
            {[
              tab === "posts" ? "1080 × 1350" : "1080 × 1920",
              tab === "posts" ? "4:5 RATIO" : "9:16 RATIO",
              "INSTAGRAM READY",
            ].map((tag) => (
              <div
                key={tag}
                style={{
                  padding: "6px 12px",
                  border: "1px solid rgba(0,0,0,0.15)",
                  fontFamily: F.mono,
                  fontSize: "8px",
                  letterSpacing: "0.12em",
                  color: "rgba(0,0,0,0.45)",
                  background: "#fff",
                }}>
                {tag}
              </div>
            ))}
          </div>

          {/* Pagination dots */}
          <div className="flex items-center gap-2 mt-5">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                style={{
                  width: idx === i ? "24px" : "6px",
                  height: "6px",
                  background: idx === i ? "#000" : "rgba(0,0,0,0.2)",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                  borderRadius: "1px",
                  padding: 0,
                }}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
