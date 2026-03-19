// app/ui/HeroSection.tsx

import ToolPreviewSection from "./ToolPreviewSection";

export default function HeroSection() {
  return (
    <section
      aria-label="Hero Section"
      style={{
        padding: "28px 20px",
        color: "#ffffff" // keep text white, no background here
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* NAVBAR */}

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 40
          }}
        >
          <img
            src="/logo-best-meeting-time.png"
            alt="Best Meeting Time"
            style={{ height: 72 }}
          />

          <div style={{ display: "flex", gap: 30, fontSize: 16 }}>
            <a href="#tool-preview" style={{ color: "#fff", textDecoration: "none" }}>Features</a>
            <a href="#premium-features" style={{ color: "#fff", textDecoration: "none" }}>Pricing</a>
            <a href="#footer" style={{ color: "#fff", textDecoration: "none" }}>Login</a>
          </div>

          <a href="#premium-features">
            <button
              style={{
                background: "#facc15",
                color: "#000",
                border: "none",
                padding: "10px 20px",
                borderRadius: 8,
                fontWeight: 600,
                cursor: "pointer"
              }}
            >
              Get Started
            </button>
          </a>
        </div>

        {/* HERO TEXT */}

        <div style={{ textAlign: "center", marginBottom: 32 }}>

          <h1
            style={{
              fontSize: 56,
              marginBottom: 10,
              fontWeight: 700
            }}
          >
            <span style={{ color: "#facc15" }}>Best Meeting Time</span> — Every Time
          </h1>

          <h2
            style={{
              fontSize: 36,
              fontWeight: 400,
              marginBottom: 16
            }}
          >
            Across Time Zones
          </h2>

          <p
            style={{
              fontSize: 18,
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
          style={{
            background: "linear-gradient(180deg,#ede9fe,#ddd6fe)", // ✅ FIXED
            borderRadius: 24,
            padding: 32,
            color: "#000",

            border: "1px solid rgba(0,0,0,0.06)",
            boxShadow: "0 20px 50px rgba(0,0,0,0.25)"
          }}
        >
          <ToolPreviewSection />
        </div>

      </div>
    </section>
  );
}
