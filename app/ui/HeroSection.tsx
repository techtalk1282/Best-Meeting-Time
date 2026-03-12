import ToolPreviewSection from "./ToolPreviewSection";

export default function HeroSection() {
  return (
    <section aria-label="Hero Section" style={{ padding: "var(--space-12) 0" }}>
      <style>{`
        .hero-container {
          max-width: var(--container-max);
          margin: 0 auto;
          padding-left: var(--space-6);
          padding-right: var(--space-6);
        }

        .hero-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: var(--space-12);
          gap: var(--space-6);
          flex-wrap: wrap;
        }

        .hero-nav-links {
          display: flex;
          gap: var(--space-6);
        }

        .hero-nav-links a {
          text-decoration: none;
          color: inherit;
        }

        .hero-logo img {
          height: 56px;
          width: auto;
          display: block;
        }

        .hero-main {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-12);
          align-items: start;
        }

        .hero-headline h1 {
          font-size: var(--text-5xl);
          margin-bottom: var(--space-3);
        }

        .hero-headline h2 {
          font-size: var(--text-3xl);
          margin-bottom: var(--space-4);
        }

        .hero-headline p {
          font-size: var(--text-lg);
          max-width: 520px;
        }

        .hero-highlight {
          color: #facc15;
        }

        .hero-cta {
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
          margin-top: var(--space-6);
        }

        .hero-demo-card {
          padding: var(--space-6);
          border-radius: var(--radius-md);
          border: 1px solid currentColor;
        }

        .hero-divider {
          margin-top: var(--space-12);
        }

        @media (max-width: 1024px) {
          .hero-main {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="hero-container">

        <nav className="hero-nav">
          <div className="hero-logo">
            <a href="/" aria-label="Best Meeting Time home">
              <img src="/logo-best-meeting-time.png" alt="Best Meeting Time" />
            </a>
          </div>

          <div className="hero-nav-links">
            <a href="#tool-preview">Features</a>
            <a href="#premium-features">Pricing</a>
            <a href="#footer">Login</a>
          </div>

          <div>
            <a href="#tool-preview">
              <button type="button">Get Started</button>
            </a>
          </div>
        </nav>

        <div className="hero-main">

          <div>

            <div className="hero-headline">

              <h1>
                Schedule the <span className="hero-highlight">Perfect Meeting Time</span>
              </h1>

              <h2>Every Time</h2>

              <p>
                The Smart Way to Schedule Across Time Zones
              </p>

            </div>

            <div className="hero-cta">
              <a href="#tool-preview">
                <button type="button">Compare Times</button>
              </a>

              <p style={{ fontSize: "var(--text-sm)" }}>
                Instantly find the best meeting window across global cities
              </p>
            </div>

          </div>

          <div className="hero-demo-card">

            {/* REAL TOOL UI */}
            <ToolPreviewSection />

          </div>

        </div>

        <div className="hero-divider">
          <hr />
        </div>

      </div>
    </section>
  );
}
