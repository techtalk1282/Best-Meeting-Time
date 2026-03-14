import ToolPreviewSection from "./ToolPreviewSection";

export default function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="Hero Section"
      style={{
        padding: "80px 20px",
        background: "linear-gradient(135deg,#3b0764,#4c1d95,#1e1b4b)",
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
            marginBottom: 80
          }}
        >
          <a href="/">
            <img
              src="/logo-best-meeting-time.png"
              alt="Best Meeting Time"
              style={{ height: 48 }}
            />
          </a>

          <div style={{ display: "flex", gap: 30, fontSize: 16 }}>
            <a href="#premium-features" style={{ color: "#fff", textDecoration: "none" }}>
              Features
            </a>

            <a href="#pricing" style={{ color: "#fff", textDecoration: "none" }}>
              Pricing
            </a>

            <a href="/login" style={{ color: "#fff", textDecoration: "none" }}>
              Login
            </a>
          </div>

          <a href="#tool-preview">
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

        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <h1 style={{ fontSize: 56, marginBottom: 10, fontWeight: 700 }}>
            <span style={{ color: "#facc15" }}>Best Meeting Time</span> — Every Time
          </h1>

          <h2 style={{ fontSize: 36, fontWeight: 400, marginBottom: 10 }}>
            Across Time Zones.
          </h2>

          <p style={{ opacity: 0.85 }}>
            Easily schedule meetings with your team or clients around the world.
          </p>
        </div>

        {/* TOOL */}

        <div
          id="tool-preview"
          style={{
            background: "#ffffff",
            borderRadius: 24,
            padding: 40,
            color: "#000",
            boxShadow: "0 20px 50px rgba(0,0,0,0.35)"
          }}
        >
          <ToolPreviewSection />
        </div>

      </div>
    </section>
  );
}
