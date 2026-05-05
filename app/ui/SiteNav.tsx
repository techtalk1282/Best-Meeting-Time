/**
 * File: app/ui/SiteNav.tsx
 * Version: v2.3 (INTEGRATED WHITE SITE HEADER)
 * Date: 2026-05-05
 *
 * PURPOSE:
 * - Make shared navigation feel attached to page content
 * - Match homepage white-header branding
 * - Remove disconnected floating-header appearance
 *
 * ROLLBACK:
 * - Revert to v2.2 if shared header alignment breaks
 */

export default function SiteNav() {
  return (
    <header style={navShell}>
      <a href="/" style={brand}>
        <span style={brandIcon}>⌘</span>
        <span>Best Meeting Time</span>
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
  maxWidth: "1280px",
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
  gap: "8px",
  color: "#5b21b6",
  fontSize: "18px",
  fontWeight: 900,
  textDecoration: "none",
  whiteSpace: "nowrap" as const,
};

const brandIcon = {
  width: "24px",
  height: "24px",
  borderRadius: "7px",
  background: "#ede9fe",
  color: "#5b21b6",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "14px",
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
