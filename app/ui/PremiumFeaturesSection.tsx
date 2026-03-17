// app/ui/PremiumFeaturesSection.tsx
// PURPOSE: Premium section with FINAL production-quality icons
// UI ONLY — no logic/state

import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const card: React.CSSProperties = {
  background: "#ffffff",
  borderRadius: 16,
  padding: 20,
  textAlign: "center",
  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
  minHeight: 150,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const iconWrap: React.CSSProperties = {
  width: 52,
  height: 52,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: 12,
};

export default function PremiumFeaturesSection({ children }: Props) {
  return (
    <section
      id="features"
      style={{
        padding: "40px 20px",
        background: "linear-gradient(135deg,#1e1b4b,#4c1d95,#3b0764)",
        scrollMarginTop: "80px",
      }}
    >
      <div style={{ maxWidth: 1050, margin: "0 auto" }}>
        
        <div style={{ textAlign: "center", marginBottom: 30 }}>
          <h2 style={{ fontSize: 32 }}>Unlock Premium Features</h2>
          <p style={{ opacity: 0.85 }}>
            Powerful tools for global scheduling professionals.
          </p>
        </div>

        <div style={{ background: "#f3f4f6", borderRadius: 22, padding: 28 }}>

          {/* TOP ROW */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>

            {/* SHARE */}
            <div style={card}>
              <div style={iconWrap}>
                <svg width="42" height="42" viewBox="0 0 24 24">
                  <path
                    d="M10 14L8 16a4 4 0 105.7 5.7l3-3a4 4 0 000-5.7M14 10l2-2A4 4 0 0010.3 2.3l-3 3a4 4 0 000 5.7"
                    stroke="#6d28d9"
                    strokeWidth="2.8"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <p>Send a booking page with one click.</p>
            </div>

            {/* GLOBE */}
            <div style={card}>
              <div style={iconWrap}>
                <svg width="42" height="42" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="9" fill="#2563eb" />
                  <path d="M12 3a12 12 0 000 18M3 12h18" stroke="#34d399" strokeWidth="1.5"/>
                </svg>
              </div>
              <p>Plan meetings across global time zones.</p>
            </div>

          </div>

          {/* BOTTOM ROW */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginBottom: 24 }}>

            {/* GOOGLE — MATCH MOCK */}
            <div style={card}>
              <div style={iconWrap}>
                <svg width="42" height="42" viewBox="0 0 48 48">
                  <rect x="8" y="10" width="32" height="30" rx="6" fill="#ffffff"/>
                  <rect x="8" y="10" width="32" height="8" fill="#4285F4"/>
                  <text x="24" y="32" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#EA4335">31</text>
                </svg>
              </div>
              <p>Save meetings directly to Google.</p>
            </div>

            {/* OUTLOOK — MATCH TILE STYLE */}
            <div style={card}>
              <div style={iconWrap}>
                <svg width="42" height="42" viewBox="0 0 24 24">
                  <rect x="4" y="6" width="16" height="12" rx="2" fill="#2563eb"/>
                  <path d="M4 6l8 6 8-6" stroke="#ffffff" strokeWidth="1.5"/>
                </svg>
              </div>
              <p>Save meetings directly to Outlook.</p>
            </div>

            {/* APPLE — FIXED SCALE */}
            <div style={card}>
              <div style={iconWrap}>
                <svg width="42" height="42" viewBox="0 0 24 24">
                  <path
                    fill="#111"
                    d="M16 13c0-2 2-3 2-3s-1-2-3-2c-1 0-2 1-3 1s-2-1-3-1c-2 0-4 2-4 5 0 4 3 7 5 7 1 0 2-1 3-1s2 1 3 1c2 0 4-3 4-5 0-2-2-2-2-2z"
                  />
                </svg>
              </div>
              <p>Download the .ICS file for Apple.</p>
            </div>

            {children}
          </div>

          {/* CTA */}
          <div style={{ textAlign: "center", marginBottom: 20 }}>
            <button
              style={{
                background: "#facc15",
                padding: "12px 26px",
                borderRadius: 10,
                fontWeight: 700,
                border: "none",
              }}
            >
              Unlock Premium – $9 One-Time
            </button>
          </div>

          {/* CHECKLIST */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "10px 50px",
            maxWidth: 700,
            margin: "0 auto",
          }}>
            <div>✓ One-time payment</div>
            <div>✓ Save & export meeting times</div>
            <div>✓ No subscription</div>
            <div>✓ Download .ics file options</div>
            <div>✓ Remove all ads</div>
            <div>✓ Share meeting links</div>
          </div>

          <div style={{ textAlign: "center", marginTop: 12, fontSize: 13 }}>
            Secured by Stripe • Terms • Privacy
          </div>

        </div>
      </div>
    </section>
  );
}
