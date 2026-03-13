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

      <div className="hero-container" aria-label="Hero Container">

        <nav className="hero-nav" aria-label="Primary Navigation">

          <div className="hero-logo" aria-label="Nav Brand">
            <a href="/" aria-label="Best Meeting Time home">
              <img src="/logo-best-meeting-time.png" alt="Best Meeting Time" />
            </a>
          </div>

          <div className="hero-nav-links" aria-label="Nav Links">
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

        <div className="hero-main" aria-label="Hero Main">

          <div aria-label="Hero Left">

            <div className="hero-headline" aria-label="Hero Headline">
              <h1>Find the Best Time to Meet</h1>
              <h2>Across Time Zones.</h2>

              <p style={{ fontSize: "var(--text-lg)", maxWidth: 520 }}>
                Easily schedule meetings with your team or clients around the world.
              </p>
            </div>

            <div className="hero-cta" aria-label="Hero Primary CTA">

              <a href="#tool-preview">
                <button type="button">Compare Times</button>
              </a>

              <p style={{ fontSize: "var(--text-sm)" }}>
                Helper text placeholder
              </p>

            </div>

          </div>

          <div aria-label="Hero Right">

            <div className="hero-demo-card" aria-label="Hero Demo Card">

              <p style={{ marginBottom: "var(--space-4)" }}>
                Demo preview (placeholder)
              </p>

              <div className="hero-card-stack" aria-label="Hero Card">

                <div className="hero-city-row" aria-label="City Comparison Row">
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

              <div className="hero-visual" aria-label="Demo Visual Placeholder">
                <span>Right-side visual placeholder</span>
              </div>

            </div>

          </div>

        </div>

        <div className="hero-divider" aria-label="Hero Divider">
          <hr />
        </div>

      </div>
    </section>
  );
}
