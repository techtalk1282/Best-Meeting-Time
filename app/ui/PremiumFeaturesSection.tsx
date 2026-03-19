// app/ui/PremiumFeaturesSection.tsx

import { ReactNode } from "react";

type PremiumFeaturesSectionProps = {
  children?: ReactNode;
};

const cardBase: React.CSSProperties = {
  background: "#ffffff",
  borderRadius: 14,
  padding: 18,
  textAlign: "center",
  boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
  minHeight: 140,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const iconWrap: React.CSSProperties = {
  width: 50,
  height: 50,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: 8,
};

const iconImg: React.CSSProperties = {
  width: 36,
  height: 36,
  objectFit: "contain",
};

const iconImgApple: React.CSSProperties = {
  width: 40,
  height: 40,
  objectFit: "contain",
};

const cardTitle: React.CSSProperties = {
  fontSize: 15,
  fontWeight: 700,
  margin: "0 0 6px 0",
};

const cardText: React.CSSProperties = {
  fontSize: 13,
  lineHeight: 1.4,
  margin: 0,
  color: "#4b5563",
};

const checklistItem: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 8,
  fontSize: 14,
  fontWeight: 500,
};

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20">
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
        padding: "40px 20px",
        color: "#ffffff", // keep text color, REMOVE background
      }}
    >
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        
        {/* CTA */}
        <div style={{ textAlign: "center", marginBottom: 20 }}>
          <button
            style={{
              background: "#facc15",
              color: "#000",
              border: "none",
              padding: "14px 28px",
              borderRadius: 10,
              fontWeight: 700,
              fontSize: 16,
              cursor: "pointer",
              boxShadow: "0 8px 22px rgba(0,0,0,0.3)",
            }}
          >
            Unlock Premium – $9 One-Time
          </button>

          <div style={{ marginTop: 6, fontSize: 13, opacity: 0.85 }}>
            Instant access • No subscription
          </div>
        </div>

        {/* MAIN CARD */}
        <div
          style={{
            background: "linear-gradient(180deg,#ffffff,#f1f5f9)",
            borderRadius: 20,
            padding: 26,
            color: "#000",
            border: "1px solid rgba(0,0,0,0.06)",
            boxShadow: "0 18px 50px rgba(0,0,0,0.25)",
          }}
        >
          {/* TOP ROW */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 16,
              marginBottom: 16,
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

          {/* BOTTOM ROW */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 16,
              marginBottom: 18,
            }}
          >
            <div style={cardBase}>
              <div style={iconWrap}>
                <img src="/google-calendar.png" style={iconImg} />
              </div>
              <h3 style={cardTitle}>Google Calendar</h3>
              <p style={cardText}>Save meetings directly to Google.</p>
            </div>

            <div style={cardBase}>
              <div style={iconWrap}>
                <img src="/outlook.png" style={iconImg} />
              </div>
              <h3 style={cardTitle}>Outlook Calendar</h3>
              <p style={cardText}>Save meetings directly to Outlook.</p>
            </div>

            <div style={cardBase}>
              <div style={iconWrap}>
                <img src="/apple.png" style={iconImgApple} />
              </div>
              <h3 style={cardTitle}>Apple Calendar</h3>
              <p style={cardText}>Download the .ICS file for Apple.</p>
            </div>

            {children}
          </div>

          {/* CHECKLIST */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "10px 30px",
              maxWidth: 520,
              margin: "0 auto",
            }}
          >
            <div style={checklistItem}><CheckIcon /><span>One-time payment</span></div>
            <div style={checklistItem}><CheckIcon /><span>Save & export meeting times</span></div>
            <div style={checklistItem}><CheckIcon /><span>No subscription</span></div>
            <div style={checklistItem}><CheckIcon /><span>Download .ics file options</span></div>
            <div style={checklistItem}><CheckIcon /><span>Remove all ads</span></div>
            <div style={checklistItem}><CheckIcon /><span>Share meeting links</span></div>
          </div>

          <div style={{ textAlign: "center", fontSize: 13, marginTop: 12, color: "#6b7280" }}>
            Secured by Stripe • Terms • Privacy
          </div>
        </div>
      </div>
    </section>
  );
}
