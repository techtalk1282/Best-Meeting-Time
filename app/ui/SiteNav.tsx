/**
 * File: app/ui/SiteNav.tsx
 * Version: v2.0 (FULL NAV ARCHITECTURE - ADSENSE READY)
 * Date: 2026-05-05
 *
 * PURPOSE:
 * - Expand navigation to full site architecture
 * - Match AdSense expectations (no missing core pages)
 * - Align with homepage nav structure
 * - Keep CTA separate (not styled like yellow pill)
 *
 * ROLLBACK:
 * - Revert to v1.0 if layout breaks or nav overflows
 */

export default function SiteNav() {
  return (
    <header style={navWrap}>
      <a href="/" style={brand}>
        Best Meeting Time
      </a>

      <nav style={navLinks} aria-label="Main navigation">
        <a href="/" style={navLink}>Home</a>
        <a href="/how-it-works" style={navLink}>How It Works</a>
        <a href="/features" style={navLink}>Features</a>
        <a href="/guides" style={navLink}>Guides</a>
        <a href="/blog" style={navLink}>Blog</a>
        <a href="/about" style={navLink}>About</a>
        <a href="/contact" style={navLink}>Contact</a>
      </nav>

      <a href="/how-it-works#schedule-tool" style={ctaButton}>
        <span style={ctaMain}>Schedule a Meeting</span>
        <span style={ctaSub}>Free to try — no sign-up</span>
      </a>
    </header>
  );
}

/* STYLES */

const navWrap = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "22px 24px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "20px",
  flexWrap: "wrap" as const,
  borderBottom: "1px solid rgba(255,255,255,0.12)",
};

const brand = {
  color: "#facc15",
  fontSize: "20px",
  fontWeight: 900,
  textDecoration: "none",
};

const navLinks = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
  flexWrap: "wrap" as const,
};

const navLink = {
  color: "rgba(255,255,255,0.9)",
  fontSize: "15px",
  fontWeight: 700,
  textDecoration: "none",
};

const ctaButton = {
  background: "#5b21b6",
  color: "#ffffff",
  padding: "10px 16px",
  borderRadius: "8px",
  fontWeight: 900,
  textDecoration: "none",
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "center",
  justifyContent: "center",
  lineHeight: 1.1,
  minWidth: "160px",
  boxShadow: "0 10px 22px rgba(91,33,182,0.25)",
};

const ctaMain = {
  fontSize: "13px",
  fontWeight: 900,
};

const ctaSub = {
  fontSize: "10px",
  fontWeight: 800,
  opacity: 0.9,
};
