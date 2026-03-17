// app/ui/PremiumFeaturesSection.tsx
// PURPOSE: Premium features section — corrected layout, icons, spacing
// NO logic, NO state, NO behavior

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
  justifyContent: "center",
  alignItems: "center",
};

const iconWrap: React.CSSProperties = {
  width: 48,
  height: 48,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: 10,
};

export default function PremiumFeaturesSection({ children }: Props) {
  return (
    <section
      id="features"
      style={{
        padding: "40px 20px", // 🔥 reduced from 60 → fixes cut-off
        background: "linear-gradient(135deg,#1e1b4b,#4c1d95,#3b0764)",
        color: "#fff",
        scrollMarginTop: "80px", // 🔥 fixes anchor jump cut-off
      }}
    >
      <div style={{ maxWidth: 1050, margin: "0 auto" }}>
        
        {/* HEADER */}
        <div style={{ textAlign: "center", marginBottom: 30 }}>
          <h2 style={{ fontSize: 32, marginBottom: 8 }}>
            Unlock Premium Features
          </h2>
          <p style={{ opacity: 0.85 }}>
            Powerful tools for global scheduling professionals.
          </p>
        </div>

        {/* CONTAINER */}
        <div
          style={{
            background: "#f3f4f6",
            borderRadius: 22,
            padding: 28, // 🔥 reduced
            color: "#000",
          }}
        >

          {/* TOP ROW */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
            
            <div style={card}>
              <div style={iconWrap}>
                <svg width="40" height="40" viewBox="0 0 24 24">
                  <path
                    d="M10 14L8 16a4 4 0 005.7 5.7l3-3a4 4 0 000-5.7"
                    stroke="#4c1d95"
                    strokeWidth="2.5"
                    fill="none"
                  />
                  <path
                    d="M14 10l2-2A4 4 0 0010.3 2.3l-3 3a4 4 0 000 5.7"
                    stroke="#4c1d95"
                    strokeWidth="2.5"
                    fill="none"
                  />
                </svg>
              </div>
              <p>Send a booking page with one click.</p>
            </div>

            <div style={card}>
              <div style={iconWrap}>
                <svg width="40" height="40" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="9" fill="#2563eb" />
                  <path d="M6 12h12M12 6a12 12 0 010 12M12 6a12 12 0 000 12" stroke="#34d399" strokeWidth="1.5"/>
                </svg>
              </div>
              <p>Plan meetings across global time zones.</p>
            </div>

          </div>

          {/* BOTTOM ROW */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginBottom: 24 }}>
            
            {/* ✅ GOOGLE FIXED */}
            <div style={card}>
              <div style={iconWrap}>
                <svg width="40" height="40" viewBox="0 0 48 48">
                  <rect x="8" y="10" width="32" height="30" rx="4" fill="#fff" stroke="#ddd"/>
                  <rect x="8" y="10" width="32" height="8" fill="#4285F4"/>
                  <text x="24" y="32" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#EA4335">31</text>
                </svg>
              </div>
              <p>Save meetings directly to Google.</p>
            </div>

            {/* OUTLOOK */}
            <div style={card}>
              <div style={iconWrap}>
                <svg width="40" height="40" viewBox="0 0 24 24">
                  <rect x="5" y="6" width="14" height="12" fill="#2563eb" />
                  <path d="M7 8l5 4 5-4" stroke="#fff" strokeWidth="1.5" fill="none"/>
                </svg>
              </div>
              <p>Save meetings directly to Outlook.</p>
            </div>

            {/* ✅ APPLE FIXED (no clipping) */}
            <div style={card}>
              <div style={iconWrap}>
                <svg width="40" height="40" viewBox="0 0 24 24">
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
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "10px 50px",
              maxWidth: 700,
              margin: "0 auto",
            }}
          >
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
