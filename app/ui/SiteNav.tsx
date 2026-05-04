/**
 * File: app/ui/SiteNav.tsx
 * Version: v1.1 (SCHEDULE CTA NAVIGATION)
 * Date: 2026-05-04
 *
 * PURPOSE:
 * - Keep reusable site navigation clean and AdSense-friendly
 * - Make the primary CTA clearer than “Try Tool”
 * - Route Schedule a Meeting to the real planner section
 * - Add small free-to-try reassurance below the CTA
 *
 * PROTECTED:
 * - No Stripe changes
 * - No checkout changes
 * - No webhook changes
 * - No KV changes
 *
 * ROLLBACK:
 * - Restore app/ui/SiteNav.tsx v1.0
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

        <a href="/how-it-works#schedule-tool" style={ctaLink}>
          <span style={ctaMainText}>Schedule a Meeting</span>
          <span style={ctaSubText}>Free to try — no sign-up</span>
        </a>
      </nav>
    </header>
  );
}

const navWrap = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "18px 24px",
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

const ctaLink = {
  background: "#facc15",
  color: "#1e1b4b",
  padding: "8px 16px",
  borderRadius: "999px",
  fontWeight: 900,
  textDecoration: "none",
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "center",
  justifyContent: "center",
  lineHeight: 1.15,
};

const ctaMainText = {
  fontSize: "14px",
  fontWeight: 900,
};

const ctaSubText = {
  fontSize: "10px",
  fontWeight: 800,
  opacity: 0.86,
};
