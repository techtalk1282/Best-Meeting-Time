/**
 * File: app/ui/SiteNav.tsx
 * Version: v2.7 (SAFE WRAPPING MOBILE NAV)
 * Date: 2026-05-11
 *
 * PURPOSE:
 * - Eliminate mobile nav cutoff issues on Samsung/iPhone devices
 * - Preserve desktop navigation completely
 * - Replace horizontal scrolling with wrapped responsive rows
 * - Keep CTA accessible on all screen sizes
 *
 * SAFE RULE:
 * - Desktop layout untouched above 1100px
 * - Mobile behavior isolated to media queries only
 *
 * ROLLBACK:
 * - Revert to v2.6 if regression occurs
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
            width: 100%;
          }

          .bmt-site-link {
            font-size: 13px !important;
            flex-shrink: 0;
          }

          .bmt-site-cta {
            width: 100%;
            max-width: 320px;
            margin: 0 auto;
          }
        }

        @media (max-width: 640px) {
          .bmt-site-nav {
            gap: 12px !important;
          }

          .bmt-site-logo {
            width: 155px !important;
          }

          .bmt-site-links {
            gap: 10px 14px !important;
          }

          .bmt-site-link {
            font-size: 12px !important;
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

          <a
            href="/how-it-works"
            style={navLink}
            className="bmt-site-link"
          >
            Schedule a Meeting
          </a>

          <a
            href="/features"
            style={navLink}
            className="bmt-site-link"
          >
            Features
          </a>

          <a
            href="/guides"
            style={navLink}
            className="bmt-site-link"
          >
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
          <span style={ctaMain}>Schedule a Meeting</span>
          <span style={ctaSub}>Free to try — no sign-up</span>
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
  minWidth: "154px",
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
