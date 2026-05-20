/**
 * File: app/privacy-policy/page.tsx
 * Version: v1.2
 * Purpose:
 * - Privacy policy page required for AdSense approval
 * - Adds site navigation and footer so the legal page is not isolated
 * - Preserves existing AdSense privacy wording
 *
 * Rollback:
 * - Revert to v1.1 if the legal page layout causes any visual regression
 */

import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #4c1d95 0%, #312e81 100%)",
        color: "white",
      }}
    >
      <nav
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "24px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <Link href="/" style={{ color: "white", fontWeight: 800, textDecoration: "none" }}>
          Best Meeting Time
        </Link>

        <div style={{ display: "flex", gap: "18px", flexWrap: "wrap", alignItems: "center" }}>
          <Link href="/" style={{ color: "white", textDecoration: "none", fontWeight: 700 }}>
            Home
          </Link>
          <Link href="/how-it-works" style={{ color: "white", textDecoration: "none", fontWeight: 700 }}>
            Schedule a Meeting
          </Link>
          <Link href="/features" style={{ color: "white", textDecoration: "none", fontWeight: 700 }}>
            Features
          </Link>
          <Link href="/guides" style={{ color: "white", textDecoration: "none", fontWeight: 700 }}>
            Guides
          </Link>
          <Link href="/blog" style={{ color: "white", textDecoration: "none", fontWeight: 700 }}>
            Blog
          </Link>
          <Link href="/about" style={{ color: "white", textDecoration: "none", fontWeight: 700 }}>
            About
          </Link>
          <Link href="/contact" style={{ color: "white", textDecoration: "none", fontWeight: 700 }}>
            Contact
          </Link>
        </div>
      </nav>

      <section
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "40px 20px 70px",
          lineHeight: "1.6",
        }}
      >
        <h1 style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "20px" }}>
          Privacy Policy
        </h1>

        <p>
          This website ("Best Meeting Time") provides a tool to help users find optimal meeting
          times across time zones.
        </p>

        <h2 style={{ marginTop: "24px" }}>Information Collection</h2>
        <p>We do not collect personally identifiable information directly from users.</p>

        <h2 style={{ marginTop: "24px" }}>Cookies and Advertising</h2>
        <p>
          We use Google AdSense to display ads. Google and its partners may use cookies to
          personalize ads based on your visit to this and other websites.
        </p>

        <p>
          Google uses cookies to serve ads to users based on their visits to this and other
          websites. Users may opt out of personalized advertising by visiting{" "}
          <a
            href="https://www.google.com/settings/ads"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#ddd6fe" }}
          >
            https://www.google.com/settings/ads
          </a>
          .
        </p>

        <h2 style={{ marginTop: "24px" }}>Third-Party Vendors</h2>
        <p>
          Google may use advertising cookies to serve ads based on prior visits. Users may opt out
          of personalized advertising by visiting{" "}
          <a
            href="https://adssettings.google.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#ddd6fe" }}
          >
            https://adssettings.google.com
          </a>
          .
        </p>

        <h2 style={{ marginTop: "24px" }}>Usage Data</h2>
        <p>
          Basic, anonymous analytics may be collected to improve the performance and usability of
          the tool.
        </p>

        <p style={{ marginTop: "24px" }}>
          By using this site, you consent to this privacy policy.
        </p>

        <p style={{ marginTop: "30px", fontSize: "14px", opacity: 0.9 }}>
          If you have any questions about this Privacy Policy, you may contact us at:
          support@bestmeetingtimeapp.com
        </p>

        <div style={{ marginTop: "36px" }}>
          <Link
            href="/how-it-works"
            style={{
              display: "inline-block",
              background: "white",
              color: "#4c1d95",
              padding: "12px 18px",
              borderRadius: "12px",
              fontWeight: 800,
              textDecoration: "none",
            }}
          >
            Back to Schedule a Meeting
          </Link>
        </div>
      </section>

      <footer
        style={{
          borderTop: "1px solid rgba(255,255,255,0.2)",
          padding: "24px 20px 34px",
          textAlign: "center",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center", gap: "22px", flexWrap: "wrap" }}>
          <Link href="/" style={{ color: "white", textDecoration: "none", fontWeight: 700 }}>
            Home
          </Link>
          <Link href="/guides" style={{ color: "white", textDecoration: "none", fontWeight: 700 }}>
            Guides
          </Link>
          <Link href="/contact" style={{ color: "white", textDecoration: "none", fontWeight: 700 }}>
            Contact
          </Link>
          <Link href="/privacy-policy" style={{ color: "white", textDecoration: "none", fontWeight: 700 }}>
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" style={{ color: "white", textDecoration: "none", fontWeight: 700 }}>
            Terms of Service
          </Link>
        </div>
      </footer>
    </main>
  );
}
