import ToolPreviewSection from "./ToolPreviewSection";

export default function HeroSection() {

  // ✅ FIX: controlled scroll with offset
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const yOffset = -120; // adjust if needed
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <section
      aria-label="Hero Section"
      style={{
        padding: "28px 20px",
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
            marginBottom: 40
          }}
        >
          <img
            src="/logo-best-meeting-time.png"
            alt="Best Meeting Time"
            style={{ height: 72 }}
          />

          <div style={{ display: "flex", gap: 30, fontSize: 16 }}>
            <button onClick={() => scrollToSection("tool-preview")} style={{ background: "none", border: "none", color: "#fff", cursor: "pointer" }}>
              Features
            </button>

            <button onClick={() => scrollToSection("premium-features")} style={{ background: "none", border: "none", color: "#fff", cursor: "pointer" }}>
              Pricing
            </button>

            <button onClick={() => scrollToSection("footer")} style={{ background: "none", border: "none", color: "#fff", cursor: "pointer" }}>
              Login
            </button>
          </div>

          <button
            onClick={() => scrollToSection("premium-features")}
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
            background: "#ffffff",
            borderRadius: 24,
            padding: 32,
            color: "#000",
            border: "1px solid rgba(0,0,0,0.06)",
            boxShadow: "0 30px 80px rgba(0,0,0,0.35)"
          }}
        >
          <ToolPreviewSection />
        </div>

      </div>
    </section>
  );
}
