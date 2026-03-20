// app/ui/HeroSection.tsx

import ToolPreviewSection from "./ToolPreviewSection";

/* ✅ STANDARD CTA STYLE */
const primaryButton: React.CSSProperties = {
  background: "#facc15",
  color: "#000",
  border: "none",
  padding: "14px 28px",
  borderRadius: 10,
  fontWeight: 800,
  fontSize: 16,
  cursor: "pointer",
  minWidth: 260,
  boxShadow: "0 8px 18px rgba(245, 158, 11, 0.35)",
};

export default function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="Hero Section"
      style={{
        padding: "24px 20px",
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
            marginBottom: 32
          }}
        >
          <img
            src="/logo-best-meeting-time.png"
            alt="Best Meeting Time"
            style={{ height: 72 }}
          />

          <div />

          <a href="#premium-features">
            <button
              style={{
                background: "#facc15",
                color: "#000",
                border: "none",
                padding: "10px 22px",
                borderRadius: 10,
                fontWeight: 700,
                fontSize: 14,
                cursor: "pointer",
                boxShadow: "0 6px 18px rgba(0,0,0,0.25)"
              }}
            >
              Premium Features & Pricing
            </button>
          </a>
        </div>

        {/* HERO TEXT */}

        <div style={{ textAlign: "center", marginBottom: 20 }}>

          <h1
            style={{
              fontSize: 56,
              marginBottom: 6,
              fontWeight: 700
            }}
          >
            <span style={{ color: "#facc15" }}>Best Meeting Time</span> — Every Time
          </h1>

          <h2
            style={{
              fontSize: 34,
              fontWeight: 400,
              marginBottom: 10
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
        </div>

        {/* HERO TOOL CARD */}

        <div
          id="tool-preview"
          style={{
            background: "linear-gradient(180deg,#ede9fe,#ddd6fe)",
            borderRadius: 24,
            padding: 28,
            color: "#000",
            border: "1px solid rgba(0,0,0,0.06)",
            boxShadow: "0 20px 50px rgba(0,0,0,0.25)"
          }}
        >

          {/* ✅ STANDARDIZED BUTTON */}
          <div style={{ textAlign: "center", marginBottom: 20 }}>
            <button style={primaryButton}>
              Get Started Free
            </button>
          </div>

          <ToolPreviewSection />
        </div>

      </div>
    </section>
  );
}
