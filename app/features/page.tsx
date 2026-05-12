/**
 * File: app/features/page.tsx
 * Version: v3.5 (GUIDES-STYLE RESPONSIVE MOBILE FIX)
 * Date: 2026-05-11
 *
 * PURPOSE:
 * - Fix mobile right-side cutoff on Features page
 * - Rebuild layout using the working Guides page responsive structure
 * - Preserve existing Features content, image, gold buttons, and CTA
 * - Keep desktop layout premium and stable
 *
 * PROTECTED:
 * - No Stripe changes
 * - No checkout changes
 * - No webhook changes
 * - No KV changes
 * - No ToolPreviewSection changes
 *
 * ROLLBACK:
 * - Revert to app/features/page.tsx v3.4 if this version does not test cleanly
 */

export default function FeaturesPage() {
  return (
    <main className="features-page">
      <section className="features-shell">
        <header className="features-header">
          <a href="/" className="brand" aria-label="Best Meeting Time home">
            <img
              src="/images/branding/logo.png"
              alt="Best Meeting Time"
              className="brand-logo"
            />
          </a>

          <nav className="nav" aria-label="Features page navigation">
            <a href="/">Home</a>
            <a href="/how-it-works">Schedule a Meeting</a>
            <a href="/features" className="active">Features</a>
            <a href="/guides">Guides</a>
            <a href="/blog">Blog</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </nav>

          <a href="/how-it-works#schedule-tool" className="nav-cta">
            <span>Schedule a Meeting</span>
            <small>Free to try — no sign-up</small>
          </a>
        </header>

        <section className="hero">
          <div className="hero-copy">
            <p className="pill">Best Meeting Time Features</p>

            <h1>Plan the Time. Share the Link. Add It to Your Calendar.</h1>

            <p className="hero-text">
              Compare cities, swap locations, review the best meeting window,
              then unlock premium tools to share and add meetings faster.
            </p>
          </div>

          <div className="access-card">
            <p>Free + Premium Access</p>
            <span><strong>Free:</strong> try a planning session first</span>
            <span><strong>Premium:</strong> $7 one-time unlock</span>
          </div>
        </section>

        <section className="showcase">
          <div className="image-card">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
              alt="Global remote team collaboration meeting"
            />

            <div className="image-overlay">
              <div>
                <span>New York</span>
                <span>London</span>
                <span>Tokyo</span>
              </div>

              <strong>Remote teams. Client calls. Global schedules.</strong>
              <span>Choose the best meeting window before the invite goes out.</span>
            </div>
          </div>

          <div className="workflow-card">
            <p className="section-eyebrow">Real workflow features</p>

            <h2>Built around how people actually schedule.</h2>

            <p>
              Select cities, compare local times, review recommended windows,
              and move directly into sharing or calendar actions.
            </p>

            <div className="gold-button-grid">
  <a href="/how-it-works#schedule-tool">Share Link</a>

  <a href="/how-it-works#schedule-tool">
    Add to Google
  </a>

  <a href="/how-it-works#schedule-tool">
    Add to Outlook
  </a>

  <a href="/how-it-works#schedule-tool">
    Add to Calendar
  </a>
</div>
          </div>
        </section>

        <section className="feature-grid">
          <article>
            <p>City Selection</p>
            <h2>Choose cities fast.</h2>
            <span>
              Compare locations side by side and quickly swap cities when plans change.
            </span>
          </article>

          <article>
            <p>Smart Windows</p>
            <h2>See best times and alternatives.</h2>
            <span>
              Review recommended meeting windows plus backup time options.
            </span>
          </article>

          <article>
            <p>Premium Workflow</p>
            <h2>Share and add to calendars.</h2>
            <span>
              Unlock sharing and Google, Outlook, and calendar scheduling actions.
            </span>
          </article>
        </section>

        <section className="cta">
          <div>
            <p>Start Planning</p>
            <h2>Ready to try the scheduler?</h2>
            <span>
              Compare meeting times first, then unlock premium tools when you
              need to share and schedule faster.
            </span>
          </div>

          <a href="/how-it-works#schedule-tool">
            <span>Schedule a Meeting</span>
            <small>Free to try — no sign-up</small>
          </a>
        </section>
      </section>

      <style>{`
        .features-page {
          min-height: 100vh;
          background: linear-gradient(180deg, #4c1d95 0%, #312e81 100%);
          padding: 30px 20px 70px;
        }

        .features-shell {
          width: 100%;
          max-width: 1120px;
          margin: 0 auto;
          background: #ffffff;
          color: #111827;
          border: 1px solid rgba(237,233,254,0.9);
          box-shadow: 0 24px 70px rgba(30,27,75,0.18);
          padding: 18px 18px 28px;
          box-sizing: border-box;
        }

        .features-header {
          min-height: 66px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          border-bottom: 1px solid #ede9fe;
          margin-bottom: 24px;
        }

        .brand {
          display: flex;
          align-items: center;
          text-decoration: none;
          flex-shrink: 0;
        }

        .brand-logo {
          display: block;
          width: 160px;
          height: auto;
          object-fit: contain;
        }

        .nav {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
        }

        .nav a {
          color: #374151;
          font-size: 13px;
          font-weight: 800;
          text-decoration: none;
          white-space: nowrap;
        }

        .nav .active {
          color: #5b21b6;
          border-bottom: 2px solid #5b21b6;
          padding-bottom: 6px;
        }

        .nav-cta {
          background: #5b21b6;
          color: #ffffff;
          padding: 9px 16px;
          border-radius: 8px;
          font-weight: 900;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          line-height: 1.16;
          min-width: 154px;
          box-shadow: 0 10px 22px rgba(91,33,182,0.22);
        }

        .nav-cta span {
          font-size: 13px;
        }

        .nav-cta small {
          font-size: 10px;
          font-weight: 800;
          color: #ffffff;
        }

        .hero {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(240px, 280px);
          gap: 22px;
          align-items: end;
          padding: 10px 10px 18px;
        }

        .pill {
          display: inline-block;
          margin: 0 0 14px;
          padding: 7px 13px;
          border-radius: 999px;
          background: #f3efff;
          color: #5b21b6;
          font-size: 12px;
          font-weight: 950;
          text-transform: uppercase;
        }

        .hero h1 {
          color: #111827;
          font-size: clamp(34px, 4vw, 48px);
          line-height: 1.04;
          letter-spacing: -0.045em;
          font-weight: 950;
          margin: 0 0 12px;
        }

        .hero-text {
          color: #4b5563;
          font-size: 15px;
          line-height: 1.55;
          margin: 0;
        }

        .access-card {
          border: 1px solid #ddd6fe;
          border-radius: 16px;
          background: #faf9ff;
          padding: 14px;
          display: grid;
          gap: 7px;
          color: #4b5563;
          font-size: 13px;
          line-height: 1.35;
        }

        .access-card p {
          margin: 0;
          color: #6d28d9;
          font-size: 12px;
          font-weight: 950;
          text-transform: uppercase;
        }

        .showcase {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          gap: 18px;
          align-items: stretch;
          padding: 0 10px 20px;
        }

        .image-card {
          position: relative;
          overflow: hidden;
          min-height: 260px;
          border-radius: 18px;
          border: 1px solid #ddd6fe;
          background: #faf9ff;
          box-shadow: 0 16px 36px rgba(91,33,182,0.10);
        }

        .image-card img {
          width: 100%;
          height: 100%;
          min-height: 260px;
          object-fit: cover;
          display: block;
        }

        .image-overlay {
          position: absolute;
          left: 14px;
          right: 14px;
          bottom: 14px;
          padding: 12px 14px;
          border-radius: 14px;
          background: rgba(255,255,255,0.92);
          color: #111827;
          display: grid;
          gap: 4px;
          font-size: 13px;
          line-height: 1.35;
          box-shadow: 0 10px 24px rgba(30,27,75,0.18);
        }

        .image-overlay div {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .workflow-card {
          border: 1px solid #ddd6fe;
          border-radius: 18px;
          background: #faf9ff;
          padding: 22px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 14px;
          box-shadow: 0 16px 36px rgba(91,33,182,0.08);
        }

        .section-eyebrow {
          color: #6d28d9 !important;
          font-size: 12px !important;
          font-weight: 950 !important;
          margin: 0 !important;
          text-transform: uppercase;
        }

        .workflow-card h2 {
          color: #111827;
          font-size: clamp(25px, 3vw, 34px);
          line-height: 1.08;
          font-weight: 950;
          margin: 0;
        }

        .workflow-card p {
          color: #4b5563;
          font-size: 15px;
          line-height: 1.5;
          margin: 0;
        }

        .gold-button-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
        }

       .gold-button-grid a {
  background: #facc15;
  color: #111827;
  border-radius: 999px;
  padding: 11px 12px;
  font-size: 13px;
  font-weight: 900;
  text-decoration: none;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 14px rgba(250,204,21,0.28);
  transition: transform 0.18s ease, box-shadow 0.18s ease;
}

.gold-button-grid a:hover {
  transform: translateY(-1px);
  box-shadow: 0 10px 18px rgba(250,204,21,0.34);
}

        .feature-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
          padding: 0 10px 20px;
        }

        .feature-grid article {
          background: #faf9ff;
          border: 1px solid #ddd6fe;
          border-radius: 18px;
          padding: 20px;
          display: grid;
          gap: 8px;
          box-shadow: 0 16px 36px rgba(91,33,182,0.08);
        }

        .feature-grid p {
          color: #6d28d9;
          font-size: 12px;
          font-weight: 950;
          margin: 0;
          text-transform: uppercase;
        }

        .feature-grid h2 {
          color: #111827;
          font-size: 23px;
          line-height: 1.08;
          font-weight: 950;
          margin: 0;
        }

        .feature-grid span {
          color: #4b5563;
          font-size: 14px;
          line-height: 1.45;
        }

        .cta {
          background: linear-gradient(135deg, #312e81 0%, #6d28d9 100%);
          border-radius: 18px;
          padding: 22px 26px;
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          gap: 24px;
          align-items: center;
          color: #ffffff;
          box-shadow: 0 20px 48px rgba(49,46,129,0.22);
        }

        .cta p {
          margin: 0 0 4px;
          color: #facc15;
          font-size: 12px;
          font-weight: 950;
          text-transform: uppercase;
        }

        .cta h2 {
          color: #ffffff;
          font-size: clamp(26px, 3vw, 34px);
          line-height: 1.08;
          font-weight: 950;
          margin: 0 0 6px;
        }

        .cta span {
          color: #ede9fe;
          font-size: 15px;
          line-height: 1.5;
        }

        .cta a {
          background: #ffffff;
          color: #5b21b6;
          padding: 14px 18px;
          border-radius: 12px;
          text-decoration: none;
          font-weight: 950;
          display: flex;
          flex-direction: column;
          align-items: center;
          line-height: 1.15;
          min-width: 210px;
          box-shadow: 0 12px 24px rgba(255,255,255,0.18);
        }

        .cta a span {
          color: #5b21b6;
          font-size: 13px;
          font-weight: 950;
        }

        .cta small {
          color: #5b21b6;
          font-weight: 800;
          font-size: 11px;
        }

        @media (max-width: 900px) {
          .features-header {
            flex-wrap: wrap;
            justify-content: center;
          }

          .nav {
            flex-wrap: wrap;
          }

          .hero {
            grid-template-columns: 1fr;
          }

          .showcase {
            grid-template-columns: 1fr;
          }

          .feature-grid {
            grid-template-columns: 1fr;
          }

          .cta {
            grid-template-columns: 1fr;
            text-align: center;
          }
        }

        @media (max-width: 560px) {
          .features-page {
            padding: 16px 10px 50px;
          }

          .features-shell {
            padding: 14px;
          }

          .hero {
            padding: 8px 0 18px;
          }

          .showcase,
          .feature-grid {
            padding-left: 0;
            padding-right: 0;
          }

          .hero h1 {
            font-size: 36px;
          }

          .brand-logo {
            width: 155px;
          }

          .nav {
            gap: 10px 14px;
          }

          .nav a {
            font-size: 12px;
          }

          .nav-cta {
            width: 100%;
            max-width: 320px;
          }

          .gold-button-grid {
            grid-template-columns: 1fr;
          }

          .image-card,
          .image-card img {
            min-height: 245px;
          }

          .cta {
            padding: 20px 18px;
          }

          .cta a {
            width: 100%;
            min-width: 0;
          }
        }
      `}</style>
    </main>
  );
}
