/**
 * File: app/contact/page.tsx
 * Version: v1.0
 * Purpose:
 * - Contact page required for AdSense trust and compliance
 */

export default function ContactPage() {
  return (
    <main
      style={{
        padding: "40px 20px",
        maxWidth: "900px",
        margin: "0 auto",
        color: "white",
        lineHeight: "1.6",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "20px" }}>
        Contact
      </h1>

      <p style={{ maxWidth: "600px", margin: "0 auto" }}>
        If you have any questions, feedback, or support requests regarding Best Meeting Time,
        feel free to reach out.
      </p>

      <p style={{ marginTop: "30px", fontSize: "18px", fontWeight: "bold" }}>
        support@bestmeetingtimeapp.com
      </p>

      <p style={{ marginTop: "30px", fontSize: "14px", opacity: 0.9 }}>
        We typically respond within 24–48 hours.
      </p>
    </main>
  );
}
