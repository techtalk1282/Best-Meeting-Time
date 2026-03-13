import ToolPreviewSection from "./ToolPreviewSection";

export default function HeroSection() {
  return (
    <section aria-label="Hero Section" style={{ padding: "80px 20px" }}>
      
      <div style={{ maxWidth: 900, margin: "0 auto" }}>

        {/* NAVBAR */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 60
          }}
        >
          <img
            src="/logo-best-meeting-time.png"
            alt="Best Meeting Time"
            style={{ height: 50 }}
          />

          <div style={{ display: "flex", gap: 30 }}>
            <a href="#tool-preview">Features</a>
            <a href="#premium-features">Pricing</a>
            <a href="#footer">Login</a>
          </div>

          <button>Get Started</button>
        </div>

        {/* HERO TEXT */}
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <h1 style={{ fontSize: 48, marginBottom: 10 }}>
            <span style={{ color: "#facc15" }}>Best Meeting Time</span> — Every Time
          </h1>

          <h2 style={{ fontSize: 36, fontWeight: 400 }}>
            Across Time Zones.
          </h2>

          <p style={{ marginTop: 15 }}>
            Easily schedule meetings with your team or clients around the world.
          </p>
        </div>

        {/* HERO CARD */}
        <div
          style={{
            background: "#ffffff",
            borderRadius: 20,
            padding: 30,
            color: "#000",
            boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
          }}
        >
          <ToolPreviewSection />
        </div>

      </div>

    </section>
  );
}
