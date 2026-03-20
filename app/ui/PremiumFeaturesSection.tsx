// app/ui/PremiumFeaturesSection.tsx

import { ReactNode } from "react";

type PremiumFeaturesSectionProps = {
  children?: ReactNode;
};

const featureCardBase: React.CSSProperties = {
  background: "#ffffff",
  borderRadius: 14,
  padding: 22,
  textAlign: "center",
  boxShadow: "0 10px 25px rgba(0,0,0,0.10)",
  minHeight: 150,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const topFeatureCard = { ...featureCardBase, minHeight: 160 };
const bottomFeatureCard = { ...featureCardBase, minHeight: 150 };

const iconWrap: React.CSSProperties = {
  width: 56,
  height: 56,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: 10,
};

const iconImg: React.CSSProperties = {
  width: 40,
  height: 40,
  objectFit: "contain",
};

const appleIconImg: React.CSSProperties = {
  width: 44,
  height: 44,
  objectFit: "contain",
};

const cardTitle: React.CSSProperties = {
  fontSize: 17,
  fontWeight: 700,
  margin: "0 0 8px 0",
  color: "#1f1147",
};

const cardText: React.CSSProperties = {
  fontSize: 14,
  lineHeight: 1.45,
  margin: 0,
  color: "#4b5563",
};

/* ✅ UPDATED CHECKLIST ITEM */
const checklistItem: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 10,
  fontSize: 16,
  fontWeight: 600,
  color: "#1f1147",
};

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" aria-hidden="true">
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
        padding: "40px 20px 56px",
        color: "#ffffff",
      }}
    >
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <div
          style={{
            background: "linear-gradient(180deg,#efe7ff 0%, #f6f2ff 100%)",
            borderRadius: 22,
            padding: 28,
            color: "#000000",
            border: "1px solid rgba(255,255,255,0.22)",
            boxShadow: "0 18px 50px rgba(0,0,0,0.24)",
          }}
        >

          {/* CTA */}
          <div style={{ textAlign: "center", marginBottom: 22 }}>
            <button
              style={{
                background: "#facc15",
                color: "#000000",
                border: "none",
                padding: "14px 28px",
                borderRadius: 10,
                fontWeight: 800,
                fontSize: 16,
                cursor: "pointer",
                minWidth: 340,
                boxShadow: "0 8px 18px rgba(245, 158, 11, 0.35)",
              }}
            >
              Unlock Premium Features – $9 One-Time Charge
            </button>
          </div>

          {/* FEATURE CARDS */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 16,
              marginBottom: 16,
            }}
          >
            <div style={topFeatureCard}>
              <div style={iconWrap}>
                <img src="/share.png" alt="Share link" style={iconImg} />
              </div>
              <h3 style={cardTitle}>Share a Meeting Link</h3>
              <p style={cardText}>Send a booking page with one click</p>
            </div>

            <div style={topFeatureCard}>
              <div style={iconWrap}>
                <img src="/globe.png" alt="Compare cities" style={iconImg} />
              </div>
              <h3 style={cardTitle}>Compare Cities Globally</h3>
              <p style={cardText}>Plan meetings across global time zones</p>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 16,
              marginBottom: 24,
            }}
          >
            <div style={bottomFeatureCard}>
              <div style={iconWrap}>
                <img src="/google-calendar.png" alt="Google Calendar" style={iconImg} />
              </div>
              <h3 style={cardTitle}>Google Calendar</h3>
              <p style={cardText}>Save meetings directly to Google</p>
            </div>

            <div style={bottomFeatureCard}>
              <div style={iconWrap}>
                <img src="/outlook.png" alt="Outlook Calendar" style={iconImg} />
              </div>
              <h3 style={cardTitle}>Outlook Calendar</h3>
              <p style={cardText}>Save meetings directly to Outlook</p>
            </div>

            <div style={bottomFeatureCard}>
              <div style={iconWrap}>
                <img src="/apple.png" alt="Apple Calendar" style={appleIconImg} />
              </div>
              <h3 style={cardTitle}>Apple Calendar</h3>
              <p style={cardText}>Download the .ICS file for Apple</p>
            </div>

            {children}
          </div>

          {/* ✅ FIXED CHECKLIST GRID */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, max-content)", // ✅ key fix
              justifyContent: "center", // ✅ centers entire block
              gap: "14px 60px",
              margin: "0 auto 20px",
            }}
          >
            <div style={checklistItem}><CheckIcon /><span>One-time payment</span></div>
            <div style={checklistItem}><CheckIcon /><span>Save & export meeting times</span></div>
            <div style={checklistItem}><CheckIcon /><span>No subscription</span></div>
            <div style={checklistItem}><CheckIcon /><span>Download .ics file options</span></div>
            <div style={checklistItem}><CheckIcon /><span>Remove all ads</span></div>
            <div style={checklistItem}><CheckIcon /><span>Share meeting links</span></div>
          </div>

          <div
            style={{
              textAlign: "center",
              fontSize: 13,
              color: "#6b7280",
            }}
          >
            Secured by Stripe • Terms • Privacy
          </div>
        </div>
      </div>
    </section>
  );
}
