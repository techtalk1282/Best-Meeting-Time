/**
 * File: app/ui/SiteNav.tsx
 * Version: v2.4 (PREMIUM HEADER LOGO REFINEMENT)
 * Date: 2026-05-09
 *
 * PURPOSE:
 * - Refine Best Meeting Time header branding so it feels more premium
 * - Reduce oversized logo weight while preserving integrated white-shell navigation
 * - Preserve Schedule a Meeting CTA route until planner anchor is reviewed
 *
 * ROLLBACK:
 * - Revert to v2.3 if shared header alignment or spacing regresses
 */

export default function SiteNav() {
  return (
    <header style={navShell}>
      <a href="/" style={brand} aria-label="Best Meeting Time home">
        <span style={brandIcon}>⌘</span>
        <span style={brandText}>Best Meeting Time</span>
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
  gap: "9px",
  color: "#5b21b6",
  textDecoration: "none",
  whiteSpace: "nowrap" as const,
};

const brandIcon = {
  width: "23px",
  height: "23px",
  borderRadius: "7px",
  background: "#f3efff",
  color: "#5b21b6",
  border: "1px solid #ddd6fe",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "13px",
  fontWeight: 900,
  boxShadow: "0 4px 10px rgba(91,33,182,0.08)",
};

const brandText = {
  fontSize: "17px",
  fontWeight: 900,
  letterSpacing: "-0.03em",
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
