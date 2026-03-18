// app/ui/PremiumFeaturesSection.tsx
// FIXED: proper anchor scroll offset using scrollMarginTop

import { ReactNode } from "react";

type PremiumFeaturesSectionProps = {
  children?: ReactNode;
};

const cardBase: React.CSSProperties = {
  background: "#ffffff",
  borderRadius: 16,
  padding: 24,
  textAlign: "center",
  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
  minHeight: 170,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const iconWrap: React.CSSProperties = {
  width: 56,
  height: 56,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: 12,
};

const iconImg: React.CSSProperties = {
  width: 44,
  height: 44,
  objectFit: "contain",
};

const iconImgApple: React.CSSProperties = {
  width: 48,
  height: 48,
  objectFit: "contain",
};

const cardTitle: React.CSSProperties = {
  fontSize: 16,
  fontWeight: 700,
  margin: "0 0 8px 0",
};

const cardText: React.CSSProperties = {
  fontSize: 14,
  lineHeight: 1.45,
  margin: 0,
  color: "#4b5563",
};

const checklistItem: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 10,
  fontSize: 16,
  fontWeight: 500,
  justifyContent: "flex-start",
};

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20">
      <path
        d="M7.8 14.2L3.9 10.3l1.4-1.4 2.5 2.5 6.9-6.9 1.4 1.4-8.3 8.3z"
        fill="#facc15"
      />
    </svg>
  );
}

export default function PremiumFeaturesSection({
  children,
}: PremiumFeaturesSectionProps) {
  return (
    <section
      id="premium-features"
      style={{
        padding: "80px 20px",
        scrollMarginTop: 120, // ✅ KEY FIX
        background: "linear-gradient(135deg,#1e1b4b,#4c1d95,#3b0764)",
        color: "#ffffff",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <h2 style={{ fontSize: 36, fontWeight: 700, margin: "0 0 10px 0" }}>
            Unlock Premium Features
          </h2>
          <p style={{ opacity: 0.85, margin: 0 }}>
            Powerful tools for global scheduling professionals.
          </p>
        </div>

        <div
          style={{
            background: "#f3f4f6",
            borderRadius: 24,
            padding: 36,
            color: "#000",
            boxShadow: "0 20px 50px rgba(0,0,0,0.35)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 20,
              marginBottom: 20,
            }}
          >
            <div style={cardBase}>
              <div style={iconWrap}>
                <img src="/share.png" style={iconImg} />
              </div>
              <h3 style={cardTitle}>Share a Meeting Link</h3>
              <p style={cardText}>Send a booking page with one click.</p>
            </div>

            <div style={cardBase}>
              <div style={iconWrap}>
                <img src="/globe.png" style={iconImg} />
              </div>
              <h3 style={cardTitle}>Compare Cities Globally</h3>
              <p style={cardText}>
                Plan meetings across global time zones.
              </p>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 20,
              marginBottom: 28,
            }}
          >
            <div style={cardBase}>
              <div style={iconWrap}>
                <img src="/google-calendar.png" style={iconImg} />
              </div>
              <h3 style={cardTitle}>Google Calendar</h3>
              <p style={cardText}>
                Save meetings directly to Google.
              </p>
            </div>

            <div style={cardBase}>
              <div style={iconWrap}>
                <img src="/outlook.png" style={iconImg} />
              </div>
              <h3 style={cardTitle}>Outlook Calendar</h3>
              <p style={cardText}>
                Save meetings directly to Outlook.
              </p>
            </div>

            <div style={cardBase}>
              <div style={iconWrap}>
                <img src="/apple.png" style={iconImgApple} />
              </div>
              <h3 style={cardTitle}>Apple Calendar</h3>
              <p style={cardText}>
                Download the .ICS file for Apple.
              </p>
            </div>

            {children}
          </div>

          <div style={{ textAlign: "center", marginBottom: 26 }}>
            <button
              style={{
                background: "#facc15",
                color: "#000",
                border: "none",
                padding: "14px 30px",
                borderRadius: 10,
                fontWeight: 700,
                cursor: "pointer",
                boxShadow: "0 6px 14px rgba(0,0,0,0.12)",
              }}
            >
              Unlock Premium – $9 One-Time
            </button>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "14px 40px",
              maxWidth: 600,
              margin: "0 auto 18px auto",
              textAlign: "left",
            }}
          >
            <div style={checklistItem}><CheckIcon /><span>One-time payment</span></div>
            <div style={checklistItem}><CheckIcon /><span>Save & export meeting times</span></div>
            <div style={checklistItem}><CheckIcon /><span>No subscription</span></div>
            <div style={checklistItem}><CheckIcon /><span>Download .ics file options</span></div>
            <div style={checklistItem}><CheckIcon /><span>Remove all ads</span></div>
            <div style={checklistItem}><CheckIcon /><span>Share meeting links</span></div>
          </div>

          <div style={{ textAlign: "center", fontSize: 14, color: "#4b5563" }}>
            Secured by Stripe • Terms • Privacy
          </div>
        </div>
      </div>
    </section>
  );
}
