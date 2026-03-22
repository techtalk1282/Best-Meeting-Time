"use client";

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
  cursor: "pointer", // ✅ make clickable
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

const checklistItem: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 10,
  fontSize: 16,
  fontWeight: 600,
  color: "#1f1147",
};

const primaryButton: React.CSSProperties = {
  background: "#facc15",
  color: "#000",
  border: "none",
  padding: "10px 22px",
  borderRadius: 10,
  fontWeight: 700,
  fontSize: 14,
  cursor: "pointer",
  boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
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

  async function handleCheckout() {
    const res = await fetch("/api/checkout", { method: "POST" });
    const data = await res.json();
    if (data.url) window.location.href = data.url;
  }

  // ✅ SHARE HANDLER (TEST)
  function handleShareClick() {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    alert("Share link copied");
  }

  return (
    <section id="premium-features" style={{ padding: "40px 20px 56px" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <div
          style={{
            background: "linear-gradient(180deg,#efe7ff,#f6f2ff)",
            borderRadius: 22,
            padding: 28,
            color: "#000",
            boxShadow: "0 18px 50px rgba(0,0,0,0.24)",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: 22 }}>
            <button style={primaryButton} onClick={handleCheckout}>
              Unlock Premium Features – $9 One-Time Charge
            </button>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            
            {/* ✅ SHARE NOW WORKS */}
            <div style={topFeatureCard} onClick={handleShareClick}>
              <div style={iconWrap}>
                <img src="/share.png" alt="Share" style={iconImg} />
              </div>
              <h3 style={cardTitle}>Share a Meeting Link</h3>
              <p style={cardText}>Send a booking page with one click</p>
            </div>

            <div style={topFeatureCard}>
              <div style={iconWrap}>
                <img src="/globe.png" alt="Compare" style={iconImg} />
              </div>
              <h3 style={cardTitle}>Compare Cities Globally</h3>
              <p style={cardText}>Plan meetings across global time zones</p>
            </div>
          </div>

          {children}
        </div>
      </div>
    </section>
  );
}
