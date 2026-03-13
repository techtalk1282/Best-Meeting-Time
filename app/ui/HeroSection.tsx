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

        .hero-logo {
          display: inline-flex;
          align-items: center;
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

        .hero-headline {
          margin-bottom: var(--space-8);
        }

        .hero-cta {
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
        }

        .hero-tool-card {
          padding: var(--space-6);
          border-radius: var(--radius-md);
          border: 1px solid currentColor;
          background: rgba(255,255,255,0.02);
        }

        .hero-divider {
          margin-top: var(--space-12);
        }

        @media (max-width: 1024px) {
          .hero-main {
            grid-template-columns: 1fr;
            gap: var(--space-10);
          }
        }

        @media (max-width: 640px) {
          .hero-logo img {
            height: 48px;
          }

          .hero-nav-links {
            gap: var(--space-4);
          }

          .hero-headline h1 {
            font-size: var(--text-3xl);
          }

          .hero-headline h2 {
            font-size: var(--text-2xl);
          }
        }
      `}</style>

      <div className="hero-container">

        {/* NAV */}
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

        {/* HERO CONTENT */}
        <div className="hero-main">

          {/* LEFT SIDE */}
          <div>

            <div className="hero-headline">
              <h1>Find the Best Time to Meet</h1>
              <h2>Across Time Zones.</h2>

              <p style={{ fontSize: "var(--text-lg)", maxWidth: 520 }}>
                Easily schedule meetings with your team or clients around the
                world.
              </p>
            </div>

            <div className="hero-cta">
              <a href="#tool-preview">
                <button type="button">Compare Times</button>
              </a>

              <p style={{ fontSize: "var(--text-sm)" }}>
                Instantly see the best meeting window.
              </p>
            </div>

          </div>

          {/* RIGHT SIDE — REAL TOOL */}
          <div className="hero-tool-card">

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
