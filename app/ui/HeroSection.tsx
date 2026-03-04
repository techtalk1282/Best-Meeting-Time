export default function HeroSection() {
  return (
    <section aria-label="Hero Section" style={{ padding: "var(--space-12) 0" }}>
      {/* Component-scoped responsive rules (Hero only) */}
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

        .hero-demo-card {
          padding: var(--space-6);
          border-radius: var(--radius-md);
          border: 1px solid currentColor;
        }

        .hero-card-stack {
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
        }

        .hero-city-row {
          display: flex;
          justify-content: space-between;
          gap: var(--space-4);
        }

        .hero-visual {
          margin-top: var(--space-6);
          height: 140px;
          border: 1px dashed currentColor;
          display: flex;
          align-items: center;
          justify-content: center;
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

      <div aria-label="Hero Container" className="hero-container">
        {/* Top Navigation Row */}
        <nav aria-label="Primary Navigation" className="hero-nav">
          <div aria-label="Nav Brand" className="hero-logo">
            <a href="/" aria-label="Best Meeting Time home">
              <img src="/logo-best-meeting-time.png" alt="Best Meeting Time" />
            </a>
          </div>

          <div aria-label="Nav Links" className="hero-nav-links">
            <span>Features</span>
            <span>Pricing</span>
            <span>Login</span>
          </div>

          <div aria-label="Nav Action">
            <button type="button">Get Started</button>
          </div>
        </nav>

        {/* Hero Main */}
        <div aria-label="Hero Main" className="hero-main">
          {/* Left Column */}
          <div aria-label="Hero Left">
            <div aria-label="Hero Headline" className="hero-headline">
              <h1>Find the Best Time to Meet</h1>
              <h2>Across Time Zones.</h2>
              <p style={{ fontSize: "var(--text-lg)", maxWidth: 520 }}>
                Easily schedule meetings with your team or clients around the
                world.
              </p>
            </div>

            <div aria-label="Hero Primary CTA" className="hero-cta">
              <a href="#tool-preview">
                <button type="button">Compare Times</button>
              </a>
              <p style={{ fontSize: "var(--text-sm)" }}>
                Helper text placeholder
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div aria-label="Hero Right">
            <div aria-label="Hero Demo Card" className="hero-demo-card">
              <p style={{ marginBottom: "var(--space-4)" }}>
                Demo preview (placeholder)
              </p>

              <div aria-label="Hero Card" className="hero-card-stack">
                <div aria-label="City Comparison Row" className="hero-city-row">
                  <span>City A</span>
                  <span>Swap</span>
                  <span>City B</span>
                </div>

                <p>Time strip placeholder</p>

                <a href="#tool-preview">
                  <button type="button">Compare Times</button>
                </a>

                <p style={{ fontSize: "var(--text-sm)" }}>
                  Helper text placeholder
                </p>
              </div>

              <div aria-label="Demo Visual Placeholder" className="hero-visual">
                <span>Right-side visual placeholder</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div aria-label="Hero Divider" className="hero-divider">
          <hr />
        </div>
      </div>
    </section>
  );
}
