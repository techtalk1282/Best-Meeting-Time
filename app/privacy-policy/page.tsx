/**
 * File: app/privacy-policy/page.tsx
 * Version: v1.0
 * Purpose:
 * - Privacy policy page required for AdSense approval
 */

export default function PrivacyPolicy() {
  return (
    <main style={{ padding: "40px 20px", maxWidth: "900px", margin: "0 auto", color: "white", lineHeight: "1.6" }}>
      
      <h1 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "20px" }}>
        Privacy Policy
      </h1>

      <p>
        This website ("Best Meeting Time") provides a tool to help users find optimal meeting times across time zones.
      </p>

      <h2 style={{ marginTop: "20px" }}>Information Collection</h2>
      <p>
        We do not collect personally identifiable information directly from users.
      </p>

      <h2 style={{ marginTop: "20px" }}>Cookies and Advertising</h2>
      <p>
        We use Google AdSense to display ads. Google and its partners may use cookies to personalize ads based on your visit to this and other websites.
      </p>

      <h2 style={{ marginTop: "20px" }}>Third-Party Vendors</h2>
      <p>
        Google may use advertising cookies to serve ads based on prior visits. Users may opt out of personalized advertising by visiting Google Ads Settings.
      </p>

      <h2 style={{ marginTop: "20px" }}>Usage Data</h2>
      <p>
        Basic, anonymous analytics may be collected to improve the performance and usability of the tool.
      </p>

      <p style={{ marginTop: "20px" }}>
        By using this site, you consent to this privacy policy.
      </p>

    </main>
  );
}
