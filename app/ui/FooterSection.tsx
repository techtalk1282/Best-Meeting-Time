/**
 * File: app/ui/FooterSection.tsx
 * Version: v1.0 (SHARED ADSENSE TRUST FOOTER)
 * Purpose:
 * - Create one consistent legal/trust footer across the site
 * - Include Privacy Policy, Terms, Disclaimer, Cookie Policy, and Contact
 * - Keep legal links in the footer, not the main navigation
 *
 * Rollback:
 * - Restore previous placeholder FooterSection.tsx if footer layout regresses
 */

export default function FooterSection() {
  return (
    <div
      style={{
        padding: "24px 20px 34px",
        textAlign: "center",
        color: "#ddd6fe",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "18px",
          flexWrap: "wrap",
          fontSize: "14px",
          fontWeight: 800,
        }}
      >
        <a href="/privacy-policy" style={{ color: "#ddd6fe", textDecoration: "none" }}>
          Privacy Policy
        </a>

        <a href="/terms-of-service" style={{ color: "#ddd6fe", textDecoration: "none" }}>
          Terms of Service
        </a>

        <a href="/disclaimer" style={{ color: "#ddd6fe", textDecoration: "none" }}>
          Disclaimer
        </a>

        <a href="/cookie-policy" style={{ color: "#ddd6fe", textDecoration: "none" }}>
          Cookie Policy
        </a>

        <a href="/contact" style={{ color: "#ddd6fe", textDecoration: "none" }}>
          Contact
        </a>
      </div>

      <div
        style={{
          marginTop: "12px",
          fontSize: "12px",
          color: "#c4b5fd",
        }}
      >
        © 2026 Best Meeting Time. All rights reserved.
      </div>
    </div>
  );
}
