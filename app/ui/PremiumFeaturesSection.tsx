// app/ui/PremiumFeaturesSection.tsx
// PURPOSE: Premium features section with correct 2-row layout
// NO logic, NO state, NO behavior

import { ReactNode } from "react";

type PremiumFeaturesSectionProps = {
  children?: ReactNode;
};

const cardBase: React.CSSProperties = {
  background: "#ffffff",
  borderRadius: 16,
  padding: 24,
  textAlign: "center",
  boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
};

export default function PremiumFeaturesSection({
  children,
}: PremiumFeaturesSectionProps) {
  return (
    <section
      id="premium-features"
      style={{
        padding: "60px 20px",
        background: "linear-gradient(135deg,#1e1b4b,#4c1d95,#3b0764)",
        color: "#ffffff"
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* HEADER */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <h2 style={{ fontSize: 36, fontWeight: 700 }}>
            Unlock Premium Features
          </h2>
          <p style={{ opacity: 0.85 }}>
            Powerful tools for global scheduling professionals.
          </p>
        </div>

        {/* MAIN CARD */}
        <div
          style={{
            background: "#f3f4f6",
            borderRadius: 24,
            padding: 32,
            color: "#000",
            boxShadow: "0 20px 50px rgba(0,0,0,0.35)"
          }}
        >

          {/* TOP ROW (2 CARDS) */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 20,
              marginBottom: 20
            }}
          >
            <div style={cardBase}>
              <div style={{ fontSize: 32, marginBottom: 10 }}>🔗</div>
              <h3>Share a Meeting Link</h3>
              <p>Send a booking page with one click.</p>
            </div>

            <div style={cardBase}>
              <div style={{ fontSize: 32, marginBottom: 10 }}>🌍</div>
              <h3>Compare Cities Globally</h3>
              <p>Plan meetings across global time zones.</p>
            </div>
          </div>

          {/* BOTTOM ROW (3 CARDS) */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 20,
              marginBottom: 30
            }}
          >
            <div style={cardBase}>
              <div style={{ fontSize: 28, marginBottom: 10 }}>📅</div>
              <h3>Google Calendar</h3>
              <p>Save meetings directly to Google.</p>
            </div>

            <div style={cardBase}>
              <div style={{ fontSize: 28, marginBottom: 10 }}>📨</div>
              <h3>Outlook Calendar</h3>
              <p>Save meetings directly to Outlook.</p>
            </div>

            <div style={cardBase}>
              <div style={{ fontSize: 28, marginBottom: 10 }}>🍎</div>
              <h3>Apple Calendar</h3>
              <p>Download the .ICS file for Apple.</p>
            </div>

            {children}
          </div>

          {/* CTA */}
          <div style={{ textAlign: "center" }}>
            <button
              style={{
                background: "#facc15",
                color: "#000",
                border: "none",
                padding: "14px 28px",
                borderRadius: 10,
                fontWeight: 700,
                cursor: "pointer",
                marginBottom: 20
              }}
            >
              Unlock Premium – $9 One-Time
            </button>

            <div style={{ fontSize: 14, opacity: 0.85 }}>
              <div>One-time payment • No subscription • Remove ads</div>
              <div>Save & export meeting times • Download .ics • Share links</div>
              <div style={{ marginTop: 10 }}>
                Secured by Stripe • Terms • Privacy
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
