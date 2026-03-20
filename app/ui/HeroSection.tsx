// app/ui/HeroSection.tsx

import ToolPreviewSection from "./ToolPreviewSection";

export default function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="Hero Section"
      style={{
        padding: "24px 20px", // slightly reduced
        color: "#ffffff"
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* NAVBAR */}

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 32 // tightened
          }}
        >
          <img
            src="/logo-best-meeting-time.png"
            alt="Best Meeting Time"
            style={{ height: 72 }}
          />

          <div style={{ display: "flex", gap: 30, fontSize: 16 }}>
            <a
              href="#premium-features"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              Premium Features & Pricing
            </a>
          </div>

          <div style={{ width: 120 }} />
        </div>

        {/* HERO TEXT */}

        <div style={{ textAlign: "center", marginBottom: 20 }}>

          <h1
            style={{
              fontSize: 56,
              marginBottom: 6, // tightened
              fontWeight: 700
            }}
          >
            <span style={{ color: "#facc15" }}>Best Meeting Time</span> — Every Time
          </h1>

          <h2
            style={{
              fontSize: 34,
              fontWeight: 400,
              marginBottom: 10 // tightened
            }}
          >
            Across Time Zones
          </h2>

          <p
            style={{
              fontSize: 17,
              fontWeight: 500,
              maxWidth: 720,
              margin: "0 auto",
              opacity: 0.95
            }}
          >
            Easily schedule meetings with your team or clients around the world
          </p>

          {/* ❌ CTA REMOVED FROM HERO */}
        </div>

        {/* HERO TOOL CARD */}

        <div
          id="tool-preview"
          style={{
            background: "linear-gradient(180deg,#ede9fe,#ddd6fe)",
            borderRadius: 24,
            padding: 28, // slightly reduced
            color: "#000",
            border: "1px solid rgba(0,0,0,0.06)",
            boxShadow: "0 20px 50px rgba(0,0,0,0.25)"
          }}
        >

          {/* ✅ CTA MOVED INSIDE TOOL (STATIC, NO LINK) */}
          <div style={{ textAlign: "center", marginBottom: 20 }}>
            <button
              style={{
                background: "#facc15",
                color: "#000",
                border: "none",
                padding: "12px 26px",
                borderRadius: 10,
                fontWeight: 700,
                fontSize: 16,
                cursor: "default" // no interaction
              }}
            >
              Get Started Free
            </button>
          </div>

          <ToolPreviewSection />
        </div>

      </div>
    </section>
  );
}
