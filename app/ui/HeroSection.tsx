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
        }
      `}</style>

      <div aria-label="Hero Container" className="hero-container">
        <nav aria-label="Primary Navigation" className="hero-nav">
          <div aria-label="Nav Brand" className="hero-logo">
            <a href="/" aria-label="Best Meeting Time home">
              <img src="/logo-best-meeting-time.png" alt="Best Meeting Time" />
            </a>
          </div>

          <div aria-label="Nav Links" className="hero-nav-links">
            <a href="#tool-preview">Features</a>
            <a href="#premium-features">Pricing</a>
            <a href="#footer">Login</a>
          </div>

          <div aria-label="Nav Action">
            <a href="#tool-preview">
              <button type="button">Get Started</button>
            </a>
          </div>
        </nav>

        <div aria-label="Hero Main" className="hero-main">
          {/* Step 1: left side intentionally cleared. Step 2 will move Tool Preview left. */}
          <div aria-label="Hero Left" />

          <div aria-label="Hero Tool">
            <ToolPreviewSection />
          </div>
        </div>

        <div aria-label="Hero Divider" className="hero-divider">
          <hr />
        </div>
      </div>
    </section>
  );
}
