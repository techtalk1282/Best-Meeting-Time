"use client";

import ToolPreviewSection from "./ToolPreviewSection";

export default function HeroSectionMobile() {
  return (
    <section
      style={{
        padding: "16px 12px 40px",
        background: "linear-gradient(180deg, #4c1d95 0%, #312e81 100%)",
        color: "#fff",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "420px",
          margin: "0 auto",
        }}
      >
        {/* LOGO */}
        <div style={{ textAlign: "center", marginBottom: 12 }}>
          <img
            src="/logo-best-meeting-time.png"
            alt="Best Meeting Time"
            style={{
              height: 70,
              width: "auto",
            }}
          />
        </div>

        {/* HERO TEXT */}
        <div style={{ textAlign: "center", marginBottom: 16 }}>
          <h1
            style={{
              fontSize: 28,
              fontWeight: 700,
              lineHeight: 1.2,
              marginBottom: 6,
            }}
          >
            <span style={{ color: "#facc15" }}>Best Meeting Time</span>
            <br />
            Every Time
          </h1>

          <p
            style={{
              fontSize: 14,
              opacity: 0.9,
              padding: "0 6px",
            }}
          >
            Easily schedule meetings with your team or clients around the world
          </p>
        </div>

        {/* TOOL CARD */}
        <div
          style={{
            background: "linear-gradient(180deg,#ede9fe,#ddd6fe)",
            borderRadius: 20,
            padding: 16,
            color: "#000",
            boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
          }}
        >
          <ToolPreviewSection />
        </div>
      </div>
    </section>
  );
}
