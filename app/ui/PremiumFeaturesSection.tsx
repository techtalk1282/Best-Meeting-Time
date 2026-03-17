// app/ui/PremiumFeaturesSection.tsx
// PURPOSE: Premium features section with correct 2-row layout and cleaner icon system
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
  fontSize: 15,
  color: "#374151",
};

function ShareLinkIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" aria-hidden="true">
      <g fill="none" stroke="#4c1d95" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 24.5l-3.5 3.5a6 6 0 108.5 8.5l5.5-5.5a6 6 0 000-8.5" />
        <path d="M27 19.5l3.5-3.5A6 6 0 0022 7.5l-5.5 5.5a6 6 0 000 8.5" />
        <path d="M16.5 27.5l11-11" />
      </g>
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" aria-hidden="true">
      <defs>
        <linearGradient id="globeOcean" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
      </defs>
      <circle cx="22" cy="22" r="16" fill="url(#globeOcean)" />
      <path
        d="M14 18c2-4 5-5 7-5 1 0 2 1 3 2 1 0 2 0 3 1 1 1 2 2 3 3-1 1-2 1-3 1-1 0-2 1-2 2 0 2-1 3-2 4-2 0-3 0-4-1-1-1-2-2-4-2-1-1-1-3-1-5z"
        fill="#34d399"
      />
      <path
        d="M18 28c1 1 2 2 4 2 1 0 2 1 2 2v2c-4 0-7-2-10-5 1-1 2-1 4-1z"
        fill="#22c55e"
      />
    </svg>
  );
}

function GoogleCalendarIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" aria-hidden="true">
      <rect x="9" y="10" width="26" height="25" rx="4" fill="#ffffff" stroke="#d1d5db" />
      <path d="M9 16h26v-2.5A3.5 3.5 0 0031.5 10h-19A3.5 3.5 0 009 13.5V16z" fill="#4285F4" />
      <rect x="13" y="7.5" width="3" height="7" rx="1.5" fill="#34A853" />
      <rect x="28" y="7.5" width="3" height="7" rx="1.5" fill="#FBBC05" />
      <rect x="13" y="20" width="5" height="5" rx="1" fill="#EA4335" />
      <rect x="20" y="20" width="5" height="5" rx="1" fill="#FBBC05" />
      <rect x="27" y="20" width="5" height="5" rx="1" fill="#34A853" />
      <rect x="13" y="27" width="5" height="5" rx="1" fill="#4285F4" />
      <rect x="20" y="27" width="5" height="5" rx="1" fill="#34A853" />
      <rect x="27" y="27" width="5" height="5" rx="1" fill="#EA4335" />
    </svg>
  );
}

function OutlookIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" aria-hidden="true">
      <rect x="15" y="10" width="20" height="24" rx="3" fill="#0ea5e9" />
      <rect x="9" y="14" width="16" height="18" rx="3" fill="#2563eb" />
      <path d="M21 16l10 7-10 7-8-6v-2l8-6z" fill="#93c5fd" />
      <circle cx="17" cy="23" r="4.3" fill="#ffffff" />
      <circle cx="17" cy="23" r="2.2" fill="#2563eb" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" aria-hidden="true">
      <path
        fill="#111111"
        d="M28.2 22.9c0-3 2.5-4.5 2.6-4.6-1.4-2.1-3.6-2.4-4.4-2.5-1.9-.2-3.8 1.1-4.8 1.1-1 0-2.5-1.1-4.1-1.1-2.1 0-4.1 1.2-5.2 3.1-2.2 3.9-.6 9.7 1.6 12.8 1.1 1.5 2.3 3.1 4 3 .9 0 1.6-.3 2.9-.3 1.3 0 1.9.3 3 .3 1.7 0 2.8-1.5 3.9-3 1.2-1.7 1.7-3.4 1.7-3.5-.1 0-3.2-1.2-3.2-5.3zm-3-9c.9-1.1 1.5-2.6 1.3-4.1-1.3.1-2.8.9-3.8 2.1-.8.9-1.5 2.5-1.3 4 1.4.1 2.9-.7 3.8-2z"
      />
    </svg>
  );
}

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
        padding: "60px 20px",
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
          {/* TOP ROW */}
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
                <ShareLinkIcon />
              </div>
              <h3 style={cardTitle}>Share a Meeting Link</h3>
              <p style={cardText}>Send a booking page with one click.</p>
            </div>

            <div style={cardBase}>
              <div style={iconWrap}>
                <GlobeIcon />
              </div>
              <h3 style={cardTitle}>Compare Cities Globally</h3>
              <p style={cardText}>Plan meetings across global time zones.</p>
            </div>
          </div>

          {/* BOTTOM ROW */}
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
                <GoogleCalendarIcon />
              </div>
              <h3 style={cardTitle}>Google Calendar</h3>
              <p style={cardText}>Save meetings directly to Google.</p>
            </div>

            <div style={cardBase}>
              <div style={iconWrap}>
                <OutlookIcon />
              </div>
              <h3 style={cardTitle}>Outlook Calendar</h3>
              <p style={cardText}>Save meetings directly to Outlook.</p>
            </div>

            <div style={cardBase}>
              <div style={iconWrap}>
                <AppleIcon />
              </div>
              <h3 style={cardTitle}>Apple Calendar</h3>
              <p style={cardText}>Download the .ICS file for Apple.</p>
            </div>

            {children}
          </div>

          {/* CTA */}
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

          {/* CHECKLIST */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "12px 60px",
              maxWidth: 760,
              margin: "0 auto 18px auto",
            }}
          >
            <div style={checklistItem}>
              <CheckIcon />
              <span>One-time payment</span>
            </div>

            <div style={checklistItem}>
              <CheckIcon />
              <span>Save & export meeting times</span>
            </div>

            <div style={checklistItem}>
              <CheckIcon />
              <span>No subscription</span>
            </div>

            <div style={checklistItem}>
              <CheckIcon />
              <span>Download .ics file options</span>
            </div>

            <div style={checklistItem}>
              <CheckIcon />
              <span>Remove all ads</span>
            </div>

            <div style={checklistItem}>
              <CheckIcon />
              <span>Share meeting links</span>
            </div>
          </div>

          <div
            style={{
              textAlign: "center",
              fontSize: 14,
              color: "#4b5563",
            }}
          >
            Secured by Stripe • Terms • Privacy
          </div>
        </div>
      </div>
    </section>
  );
}
