/**
 * File: app/ui/SiteNav.tsx
 * Version: v1.0 (SIMPLE ADSENSE NAVIGATION)
 * Date: 2026-04-23
 *
 * PURPOSE:
 * - Add a simple, reusable site navigation bar
 * - Improve AdSense trust and crawlability
 * - Keep navigation clean: Home, Guides, Blog, Contact, Try Tool
 *
 * ROLLBACK:
 * - Delete this file and remove SiteNav imports/usages
 */

export default function SiteNav() {
  return (
    <header style={navWrap}>
      <a href="/" style={brand}>
        Best Meeting Time
      </a>

      <nav style={navLinks} aria-label="Main navigation">
        <a href="/" style={navLink}>Home</a>
        <a href="/guides" style={navLink}>Guides</a>
        <a href="/blog" style={navLink}>Blog</a>
        <a href="/contact" style={navLink}>Contact</a>
        <a href="/#schedule-tool" style={ctaLink}>Try Tool</a>
      </nav>
    </header>
  );
}

const navWrap = {
  maxWidth: "1120px",
  margin: "0 auto",
  padding: "18px 20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "18px",
  flexWrap: "wrap" as const,
};

const brand = {
  color: "#facc15",
  fontSize: "18px",
  fontWeight: 800,
  textDecoration: "none",
};

const navLinks = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
  flexWrap: "wrap" as const,
};

const navLink = {
  color: "white",
  fontSize: "14px",
  fontWeight: 600,
  textDecoration: "none",
};

const ctaLink = {
  background: "#facc15",
  color: "#1e1b4b",
  padding: "8px 14px",
  borderRadius: "999px",
  fontSize: "14px",
  fontWeight: 800,
  textDecoration: "none",
};
