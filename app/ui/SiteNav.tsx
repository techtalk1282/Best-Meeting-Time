/**
 * File: app/ui/SiteNav.tsx
 * Version: v2.8 (STABLE TWO-COLUMN MOBILE NAV)
 * Date: 2026-05-11
 *
 * PURPOSE:
 * - Stop mobile nav cutoff on Samsung, iPhone, and narrow tablet widths
 * - Preserve desktop navigation above 1100px
 * - Force phone navigation into a stable two-column grid
 * - Keep logo and CTA visible without horizontal overflow
 *
 * SAFE RULE:
 * - Desktop layout untouched above 1100px
 * - Mobile behavior isolated to media queries only
 *
 * ROLLBACK:
 * - Revert to v2.7 if regression occurs
 */

export default function SiteNav() {
  return (
    <>
      <style>{`
        @media (max-width: 1100px) {
          .bmt-site-nav {
            flex-direction: column;
            align-items: stretch !important;
            gap: 14px !important;
            padding: 14px 16px !important;
            box-sizing: border-box !important;
            overflow: hidden !important;
          }

          .bmt-site-brand {
            justify-content: center;
          }

          .bmt-site-logo {
            width: 170px !important;
            max-width: 100%;
            height: auto !important;
          }

          .bmt-site-links {
            flex-wrap: wrap !important;
            justify-content: center !important;
            gap: 12px 18px !important;
            width: 100% !important;
            max-width: 100% !important;
            box-sizing: border-box !important;
          }

          .bmt-site-link {
            font-size: 13px !important;
            flex-shrink: 0;
          }

          .bmt-site-cta {
            width: 100%;
            max-width: 320px;
            margin: 0 auto;
            box-sizing: border-box !important;
          }
        }

        @media (max-width: 640px) {
          .bmt-site-nav {
            gap: 12px !important;
            padding: 14px 12px !important;
          }

          .bmt-site-logo {
            width: 155px !important;
          }

          .bmt-site-links {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 10px !important;
            width: 100% !important;
            max-width: 100% !important;
          }

          .bmt-site-link {
            font-size: 12px !important;
            text-align: center !important;
            white-space: normal !important;
            line-height: 1.2 !important;
            min-width: 0 !important;
          }

          .bmt-site-cta {
            min-width: unset !important;
          }
        }
      `}</style>

      <header style={navShell} className="bmt-site-nav">
        <a
          href="/"
          style={brand}
          className="bmt-site-brand"
          aria-label="Best Meeting Time home"
        >
          <img
            src="/images/branding/logo.png"
            alt="Best Meeting Time"
            style={brandLogo}
            className="bmt-site-logo"
          />
        </a>

        <nav
          style={navLinks}
          className="bmt-site-links"
          aria-label="Main navigation"
        >
          <a href="/" style={navLink} className="bmt-site-link">
            Home
          </a>

          <a href="/how-it-works" style={navLink} className="bmt-site-link">
  Schedule a Meeting
</a>

<a href="/how-it-works" style={navLink} className="bmt-site-link">
  Current World Time
</a>

<a href="/features" style={navLink} className="bmt-site-link">
  Features
</a>

          <a href="/guides" style={navLink} className="bmt-site-link">
            Guides
          </a>

          <a href="/blog" style={navLink} className="bmt-site-link">
            Blog
          </a>

          <a href="/about" style={navLink} className="bmt-site-link">
            About
          </a>

          <a href="/contact" style={navLink} className="bmt-site-link">
            Contact
          </a>
        </nav>

        <a
          href="/how-it-works#schedule-tool"
          style={ctaButton}
          className="bmt-site-cta"
        >
          <span style={ctaMain}>Meeting Planner & World Clock</span>
<span style={ctaSub}>Free • No Sign-Up</span>
        </a>
      </header>
    </>
  );
}

/* STYLES */

const navShell = {
  maxWidth: "1120px",
  minHeight: "66px",
  margin: "18px auto 0",
  padding: "0 18px",
  background: "#ffffff",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "18px",
  border: "1px solid rgba(237,233,254,0.9)",
  borderBottom: "1px solid #ede9fe",
};

const brand = {
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  flexShrink: 0,
};

const brandLogo = {
  display: "block",
  width: "190px",
  height: "auto",
  objectFit: "contain" as const,
};

const navLinks = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "18px",
  flex: 1,
};

const navLink = {
  color: "#374151",
  fontSize: "13px",
  fontWeight: 800,
  textDecoration: "none",
  whiteSpace: "nowrap" as const,
};

const ctaButton = {
  background: "#5b21b6",
  color: "#ffffff",
  padding: "9px 16px",
  borderRadius: "8px",
  fontWeight: 900,
  textDecoration: "none",
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "center",
  justifyContent: "center",
  lineHeight: 1.18,
 minWidth: "190px",
  boxShadow: "0 10px 22px rgba(91,33,182,0.22)",
};

const ctaMain = {
  fontSize: "13px",
  fontWeight: 900,
};

const ctaSub = {
  fontSize: "10px",
  fontWeight: 800,
  opacity: 0.92,
};
