/**
 * File: app/contact/page.tsx
 * Version: v2.3 (HEADER SOCIAL ICONS + SYNTAX FIX)
 * Date: 2026-06-04
 *
 * PURPOSE:
 * - Add YouTube and Facebook social trust icons to the Contact page header
 * - Remove buried mid-page Facebook text block
 * - Fix broken JSX caused by extra closing section tag
 * - Keep premium white-shell layout and AdSense trust content
 *
 * PROTECTED:
 * - No Stripe changes
 * - No checkout changes
 * - No webhook changes
 * - No KV changes
 * - No ToolPreviewSection changes
 *
 * ROLLBACK:
 * - Revert to v2.1 if this header social icon update does not test cleanly
 */

export default function ContactPage() {
  return (
    <main className="contact-page">
      <header className="contact-header">
        <a href="/" className="brand" aria-label="Best Meeting Time home">
          <img
            src="/images/branding/logo.png"
            alt="Best Meeting Time"
            className="brand-logo"
          />
        </a>

        <nav className="nav" aria-label="Contact page navigation">
          <a href="/">Home</a>
          <a href="/how-it-works">Schedule a Meeting</a>
          <a href="/features">Features</a>
          <a href="/guides">Guides</a>
          <a href="/blog">Blog</a>
          <a href="/about">About</a>
          <a href="/contact" className="active">Contact</a>
        </nav>

        <div className="header-actions">
          <div className="social-links" aria-label="Best Meeting Time social links">
            <a
              href="https://youtube.com/shorts/gvC3O4W8NBI?feature=share"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Watch Best Meeting Time on YouTube"
              className="social-link youtube-link"
            >
              ▶
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61590738985034"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Best Meeting Time on Facebook"
              className="social-link facebook-link"
            >
              f
            </a>
          </div>

          <a href="/how-it-works#schedule-tool" className="nav-cta">
            <span>Schedule a Meeting</span>
            <small>Free to try — no sign-up</small>
          </a>
        </div>
      </header>

      <section className="hero">
        <p className="pill">Contact Best Meeting Time</p>

        <h1>Questions, Feedback, or Support?</h1>

        <p>
          Reach out for support, feedback, scheduling questions, or general
          inquiries about Best Meeting Time.
        </p>
      </section>

      <section className="contact-panel">
        <div className="contact-card">
          <p>Support Email</p>
          <h2>support@bestmeetingtimeapp.com</h2>
          <span>
            Send us your question, issue, or feedback and include any helpful
            details about what you were trying to do.
          </span>
        </div>

        <div className="contact-card">
          <p>Response Time</p>
          <h2>24–48 hours</h2>
          <span>
            We typically respond within one to two business days depending on
            request volume.
          </span>
        </div>
      </section>

      <section className="info-grid">
        <article>
          <p>Product Support</p>
          <h2>Help with scheduling tools.</h2>
          <span>
            Contact us if you have trouble using the meeting planner, comparing
            cities, or understanding suggested meeting windows.
          </span>
        </article>

        <article>
          <p>Feedback</p>
          <h2>Help improve Best Meeting Time.</h2>
          <span>
            Share ideas for better time zone guides, workflow improvements, or
            features that would make global scheduling easier.
          </span>
        </article>

        <article>
          <p>General Questions</p>
          <h2>Ask about the site.</h2>
          <span>
            Use the contact email for general site questions, content issues,
            or business inquiries related to Best Meeting Time.
          </span>
        </article>
      </section>

      <section className="cta">
        <div>
          <p>Start Planning</p>
          <h2>Need to compare meeting times now?</h2>
          <span>
            Open the planner and find better meeting windows across cities and
            time zones.
          </span>
        </div>

        <a href="/how-it-works#schedule-tool">
          <strong>Schedule a Meeting</strong>
          <small>Free to try — no sign-up</small>
        </a>
      </section>

      <footer className="contact-footer">
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms-of-service">Terms of Service</a>
        <a href="/disclaimer">Disclaimer</a>
        <a href="/cookie-policy">Cookie Policy</a>
        <a href="/contact">Contact</a>
      </footer>

      <style>{`
        .contact-page {
          width: 100%;
          max-width: 1120px;
          margin: 14px auto;
          padding: 14px;
          background: #ffffff;
          color: #111827;
          border: 1px solid rgba(237,233,254,0.95);
          box-shadow: 0 18px 50px rgba(30,27,75,0.16);
          box-sizing: border-box;
        }

        .contact-header {
          min-height: 58px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          border-bottom: 1px solid #ede9fe;
          margin-bottom: 26px;
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
          gap: 17px;
        }

        .nav a {
          color: #111827;
          font-size: 13px;
          font-weight: 900;
          text-decoration: none;
          white-space: nowrap;
        }

        .nav .active {
          color: #5b21b6;
          border-bottom: 2px solid #5b21b6;
          padding-bottom: 6px;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .social-links {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .social-link {
          width: 34px;
          height: 34px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          font-weight: 950;
          text-decoration: none;
          color: #ffffff;
          box-shadow: 0 8px 18px rgba(30,27,75,0.16);
        }

        .youtube-link {
          background: #dc2626;
        }

        .facebook-link {
          background: #2563eb;
          font-family: Arial, sans-serif;
        }

        .nav-cta {
          background: #5b21b6;
          color: #ffffff;
          padding: 9px 17px;
          border-radius: 9px;
          font-weight: 950;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          line-height: 1.1;
          min-width: 158px;
          box-shadow: 0 10px 22px rgba(91,33,182,0.24);
        }

        .nav-cta span {
          font-size: 13px;
          font-weight: 950;
        }

        .nav-cta small {
          font-size: 10px;
          font-weight: 850;
          color: #ffffff;
          opacity: 0.94;
        }

        .hero {
          max-width: 820px;
          margin: 0 auto 24px;
          text-align: center;
          padding: 20px 10px 8px;
        }

        .pill {
          display: inline-block;
          margin: 0 0 12px;
          padding: 7px 15px;
          border-radius: 999px;
          background: #f3efff;
          color: #5b21b6;
          font-size: 13px;
          font-weight: 950;
        }

        .hero h1 {
          color: #111827;
          font-size: clamp(34px, 4vw, 48px);
          line-height: 1.04;
          margin: 0 0 10px;
          font-weight: 950;
          letter-spacing: -0.045em;
        }

        .hero p:last-child {
          max-width: 720px;
          margin: 0 auto;
          color: #4b5563;
          font-size: 16px;
          line-height: 1.45;
        }

        .contact-panel {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 14px;
          margin-bottom: 14px;
        }

        .contact-card {
          background: #faf9ff;
          border: 1px solid #ddd6fe;
          border-radius: 18px;
          padding: 22px;
        }

        .contact-card p,
        .info-grid article p {
          color: #6d28d9;
          font-size: 12px;
          font-weight: 950;
          margin: 0 0 9px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .contact-card h2 {
          color: #111827;
          font-size: clamp(24px, 3vw, 34px);
          line-height: 1.08;
          font-weight: 950;
          margin: 0 0 10px;
          word-break: break-word;
        }

        .contact-card span {
          color: #4b5563;
          font-size: 15px;
          line-height: 1.5;
        }

        .info-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          margin-bottom: 14px;
        }

        .info-grid article {
          background: #ffffff;
          border: 1px solid #ddd6fe;
          border-radius: 18px;
          padding: 18px;
        }

        .info-grid article h2 {
          color: #111827;
          font-size: 21px;
          line-height: 1.14;
          font-weight: 950;
          margin: 0 0 8px;
        }

        .info-grid article span {
          color: #4b5563;
          font-size: 14px;
          line-height: 1.42;
        }

        .cta {
          padding: 15px 20px;
          border-radius: 16px;
          background: #5b21b6;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
        }

        .cta p {
          margin: 0 0 3px;
          color: #facc15;
          font-size: 12px;
          font-weight: 950;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .cta h2 {
          margin: 0 0 3px;
          color: #ffffff;
          font-size: 22px;
          font-weight: 950;
          letter-spacing: -0.02em;
        }

        .cta span {
          margin: 0;
          color: rgba(255,255,255,0.88);
          font-size: 13.5px;
          line-height: 1.35;
        }

        .cta a {
          background: #ffffff;
          color: #5b21b6;
          padding: 10px 17px;
          border-radius: 9px;
          font-weight: 950;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          line-height: 1.1;
          min-width: 158px;
          box-shadow: 0 9px 20px rgba(30,27,75,0.18);
        }

        .cta a strong {
          font-size: 13px;
          font-weight: 950;
        }

        .cta a small {
          font-size: 10px;
          font-weight: 850;
          opacity: 0.9;
        }

        .contact-footer {
          margin-top: 22px;
          padding-top: 22px;
          border-top: 1px solid #ede9fe;
          display: flex;
          justify-content: center;
          gap: 18px;
          flex-wrap: wrap;
          text-align: center;
        }

        .contact-footer a {
          color: #5b21b6;
          font-size: 14px;
          font-weight: 800;
          text-decoration: none;
        }

        @media (max-width: 900px) {
          .contact-page {
            max-width: min(100%, 520px);
            margin: 14px auto;
            padding: 14px;
          }

          .contact-header {
            flex-wrap: wrap;
            justify-content: center;
            gap: 14px;
            margin-bottom: 22px;
          }

          .brand {
            width: 100%;
            justify-content: center;
          }

          .brand-logo {
            width: 155px;
          }

          .nav {
            width: 100%;
            flex-wrap: wrap;
            justify-content: center;
            gap: 10px 18px;
          }

          .nav a {
            font-size: 13px;
          }

          .header-actions {
            width: 100%;
            justify-content: center;
            flex-wrap: wrap;
          }

          .nav-cta {
            width: 100%;
            max-width: 320px;
            min-width: unset;
          }

          .hero {
            text-align: left;
            padding: 12px 4px 4px;
          }

          .hero h1 {
            font-size: 34px;
            line-height: 1.08;
          }

          .hero p:last-child {
            font-size: 15px;
            line-height: 1.55;
          }

          .contact-panel,
          .info-grid {
            grid-template-columns: 1fr;
          }

          .cta {
            flex-direction: column;
            align-items: stretch;
            text-align: center;
          }

          .cta a {
            width: 100%;
            min-width: unset;
            box-sizing: border-box;
          }
        }

        @media (max-width: 560px) {
          .contact-page {
            max-width: calc(100% - 20px);
            margin: 10px auto;
            padding: 14px;
          }

          .hero h1 {
            font-size: 31px;
          }

          .pill {
            font-size: 12px;
          }

          .contact-card {
            padding: 18px;
          }
        }
      `}</style>
    </main>
  );
}
