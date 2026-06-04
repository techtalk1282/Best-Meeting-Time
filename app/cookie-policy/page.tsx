/**
 * File: app/cookie-policy/page.tsx
 * Version: v1.0 (PUBLISHER-STYLE COOKIE POLICY)
 * Purpose:
 * - Add a thorough Cookie Policy page for AdSense trust/readiness
 * - Explain cookies, analytics, advertising, Google AdSense, user choices, and third-party services
 * - Keep legal/trust pages consistent with Privacy Policy, Terms, and Disclaimer
 *
 * Rollback:
 * - Delete app/cookie-policy/page.tsx if this page causes any issue
 */

import Link from "next/link";

const linkStyle = {
  color: "#ddd6fe",
  fontWeight: 800,
};

const sectionTitleStyle = {
  marginTop: "34px",
  fontSize: "26px",
  fontWeight: 900,
};

const backLinkStyle = {
  display: "inline-block",
  marginTop: "12px",
  color: "#ddd6fe",
  fontWeight: 800,
  textDecoration: "none",
};

export default function CookiePolicyPage() {
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
          <Link href="/" style={{ color: "white", textDecoration: "none", fontWeight: 700 }}>Home</Link>
          <Link href="/how-it-works" style={{ color: "white", textDecoration: "none", fontWeight: 700 }}>Schedule a Meeting</Link>
          <Link href="/features" style={{ color: "white", textDecoration: "none", fontWeight: 700 }}>Features</Link>
          <Link href="/guides" style={{ color: "white", textDecoration: "none", fontWeight: 700 }}>Guides</Link>
          <Link href="/blog" style={{ color: "white", textDecoration: "none", fontWeight: 700 }}>Blog</Link>
          <Link href="/about" style={{ color: "white", textDecoration: "none", fontWeight: 700 }}>About</Link>
          <Link href="/contact" style={{ color: "white", textDecoration: "none", fontWeight: 700 }}>Contact</Link>
        </div>
      </nav>

      <section
        style={{
          maxWidth: "940px",
          margin: "0 auto",
          padding: "40px 20px 80px",
          lineHeight: "1.7",
        }}
      >
        <p style={{ opacity: 0.9, marginBottom: "10px", fontWeight: 700 }}>
          Effective Date: June 3, 2026
        </p>

        <h1 style={{ fontSize: "40px", fontWeight: 900, marginBottom: "18px" }}>
          Cookie Policy
        </h1>

        <h2 style={{ fontSize: "24px", fontWeight: 900, marginTop: 0 }}>
          How Best Meeting Time uses cookies and similar technologies
        </h2>

        <p>
          Best Meeting Time uses cookies and similar technologies to help operate the website,
          understand site performance, support analytics, improve user experience, and display
          advertising where applicable.
        </p>

        <p>
          This Cookie Policy explains what cookies are, how they may be used on Best Meeting Time,
          how third-party services may use cookies, and how you can manage your choices.
        </p>

        <section
          id="contents"
          style={{
            marginTop: "30px",
            padding: "24px",
            border: "1px solid rgba(255,255,255,0.25)",
            borderRadius: "18px",
            background: "rgba(255,255,255,0.08)",
          }}
        >
          <h2 style={{ fontSize: "26px", fontWeight: 900, marginTop: 0 }}>Contents</h2>
          <p>Click below to jump to any section of this Cookie Policy.</p>

          <ol style={{ display: "grid", gap: "8px", paddingLeft: "22px" }}>
            <li><a href="#what-are-cookies" style={linkStyle}>What Cookies Are</a></li>
            <li><a href="#how-we-use-cookies" style={linkStyle}>How We Use Cookies</a></li>
            <li><a href="#essential-cookies" style={linkStyle}>Essential Cookies</a></li>
            <li><a href="#analytics-cookies" style={linkStyle}>Analytics Cookies</a></li>
            <li><a href="#advertising-cookies" style={linkStyle}>Advertising Cookies</a></li>
            <li><a href="#google-adsense" style={linkStyle}>Google AdSense and Google Advertising Cookies</a></li>
            <li><a href="#third-party-cookies" style={linkStyle}>Third-Party Cookies</a></li>
            <li><a href="#local-storage" style={linkStyle}>Local Storage and Similar Technologies</a></li>
            <li><a href="#manage-cookies" style={linkStyle}>How to Manage Cookies</a></li>
            <li><a href="#changes" style={linkStyle}>Changes to This Cookie Policy</a></li>
            <li><a href="#contact" style={linkStyle}>Contact Information</a></li>
          </ol>
        </section>

        <h2 id="what-are-cookies" style={sectionTitleStyle}>1. What Cookies Are</h2>
        <p>
          Cookies are small text files that may be placed on your browser or device when you visit a
          website. Cookies can help websites remember basic information, measure traffic, improve
          performance, support security, and provide advertising or analytics features.
        </p>
        <a href="#contents" style={backLinkStyle}>Back to table of contents</a>

        <h2 id="how-we-use-cookies" style={sectionTitleStyle}>2. How We Use Cookies</h2>
        <p>
          Best Meeting Time may use cookies to operate the website, understand which pages are useful,
          improve scheduling resources, monitor performance, prevent abuse, and support advertising
          or analytics services.
        </p>
        <p>
          Cookies may also help us understand how visitors use guides, blog articles, the meeting
          planner, and other website resources.
        </p>
        <a href="#contents" style={backLinkStyle}>Back to table of contents</a>

        <h2 id="essential-cookies" style={sectionTitleStyle}>3. Essential Cookies</h2>
        <p>
          Essential cookies or similar technologies may be used to support basic website operation,
          security, page loading, user preferences, and functionality. These may be required for parts
          of the site to work properly.
        </p>
        <a href="#contents" style={backLinkStyle}>Back to table of contents</a>

        <h2 id="analytics-cookies" style={sectionTitleStyle}>4. Analytics Cookies</h2>
        <p>
          Best Meeting Time may use analytics tools, including Google Analytics, to understand website
          traffic and performance. Analytics cookies may collect information such as pages visited,
          session activity, device type, browser type, approximate location, referral source, and time
          spent on pages.
        </p>
        <p>
          Analytics information helps us improve content quality, identify technical problems, and
          understand which scheduling resources are most useful to visitors.
        </p>
        <a href="#contents" style={backLinkStyle}>Back to table of contents</a>

        <h2 id="advertising-cookies" style={sectionTitleStyle}>5. Advertising Cookies</h2>
        <p>
          Advertising cookies may be used to display ads, measure ad performance, limit repeated ad
          delivery, and personalize ads based on visits to this website and other websites.
        </p>
        <p>
          Advertising partners may use cookies or similar technologies according to their own privacy
          policies and advertising practices.
        </p>
        <a href="#contents" style={backLinkStyle}>Back to table of contents</a>

        <h2 id="google-adsense" style={sectionTitleStyle}>
          6. Google AdSense and Google Advertising Cookies
        </h2>
        <p>
          Best Meeting Time may display ads through Google AdSense or related Google advertising
          services. Third-party vendors, including Google, may use cookies to serve ads based on a
          user's prior visits to Best Meeting Time or other websites.
        </p>
        <p>
          Google's use of advertising cookies enables Google and its partners to serve ads based on
          visits to this site and other sites on the Internet. Users may opt out of personalized
          advertising by visiting Google Ads Settings.
        </p>
        <p>
          You can also learn more about how Google uses information from websites that use Google
          services by reviewing Google's published privacy and advertising resources.
        </p>
        <a href="#contents" style={backLinkStyle}>Back to table of contents</a>

        <h2 id="third-party-cookies" style={sectionTitleStyle}>7. Third-Party Cookies</h2>
        <p>
          Some cookies may be placed by third-party services used for analytics, advertising, hosting,
          performance monitoring, security, or embedded resources. Best Meeting Time does not control
          how third-party services use cookies.
        </p>
        <p>
          Third-party services may include Google AdSense, Google Analytics, hosting providers,
          performance tools, security services, or other website services.
        </p>
        <a href="#contents" style={backLinkStyle}>Back to table of contents</a>

        <h2 id="local-storage" style={sectionTitleStyle}>8. Local Storage and Similar Technologies</h2>
        <p>
          Best Meeting Time may use local storage, pixels, tags, scripts, or similar technologies to
          support website functionality, remember basic preferences, improve user experience, measure
          performance, or support advertising and analytics.
        </p>
        <p>
          These technologies may operate differently from browser cookies, but they can serve similar
          purposes for functionality, measurement, and site improvement.
        </p>
        <a href="#contents" style={backLinkStyle}>Back to table of contents</a>

        <h2 id="manage-cookies" style={sectionTitleStyle}>9. How to Manage Cookies</h2>
        <p>
          You can control or delete cookies through your browser settings. Most browsers allow you to
          block cookies, delete existing cookies, limit third-party cookies, or receive alerts before
          cookies are stored.
        </p>
        <p>
          If you disable cookies, some parts of Best Meeting Time or third-party services may not
          function as intended.
        </p>
        <p>
          You may also manage personalized advertising choices through Google Ads Settings and other
          available browser or device privacy tools.
        </p>
        <a href="#contents" style={backLinkStyle}>Back to table of contents</a>

        <h2 id="changes" style={sectionTitleStyle}>10. Changes to This Cookie Policy</h2>
        <p>
          We may update this Cookie Policy from time to time. Updates will be posted on this page
          with a revised effective date. Continued use of Best Meeting Time after updates are posted
          means you accept the updated Cookie Policy.
        </p>
        <a href="#contents" style={backLinkStyle}>Back to table of contents</a>

        <h2 id="contact" style={sectionTitleStyle}>11. Contact Information</h2>
        <p>
          If you have questions about this Cookie Policy, cookies, advertising, analytics, or
          third-party services used by Best Meeting Time, you may contact us at:
        </p>
        <p style={{ fontWeight: 900 }}>support@bestmeetingtimeapp.com</p>
        <a href="#contents" style={backLinkStyle}>Back to table of contents</a>

        <div style={{ marginTop: "40px" }}>
          <Link
            href="/"
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
            Back to Home
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
          <Link href="/" style={{ color: "white", textDecoration: "none", fontWeight: 700 }}>Home</Link>
          <Link href="/guides" style={{ color: "white", textDecoration: "none", fontWeight: 700 }}>Guides</Link>
          <Link href="/blog" style={{ color: "white", textDecoration: "none", fontWeight: 700 }}>Blog</Link>
          <Link href="/contact" style={{ color: "white", textDecoration: "none", fontWeight: 700 }}>Contact</Link>
          <Link href="/privacy-policy" style={{ color: "white", textDecoration: "none", fontWeight: 700 }}>Privacy Policy</Link>
          <Link href="/terms-of-service" style={{ color: "white", textDecoration: "none", fontWeight: 700 }}>Terms of Service</Link>
          <Link href="/disclaimer" style={{ color: "white", textDecoration: "none", fontWeight: 700 }}>Disclaimer</Link>
          <Link href="/cookie-policy" style={{ color: "white", textDecoration: "none", fontWeight: 700 }}>Cookie Policy</Link>
        </div>
      </footer>
    </main>
  );
}
