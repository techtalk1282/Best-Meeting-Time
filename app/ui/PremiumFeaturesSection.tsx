"use client";

import { ReactNode, useEffect, useState } from "react";

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
  cursor: "pointer"
};

const disabledCard = {
  opacity: 0.5,
  cursor: "not-allowed"
};

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

export default function PremiumFeaturesSection({
  children,
}: PremiumFeaturesSectionProps) {

  const [isPremium, setIsPremium] = useState(false);

  useEffect(() => {
    const hasPremium = document.cookie.includes("premium=");
    setIsPremium(hasPremium);
  }, []);

  async function handleCheckout() {
    const res = await fetch("/api/checkout", { method: "POST" });
    const data = await res.json();
    if (data.url) window.location.href = data.url;
  }

  function handlePremiumFeature(name: string) {
    if (!isPremium) {
      alert("Unlock premium to use this feature");
      return;
    }

    // TEMP: verify click works
    alert(`${name} activated`);
  }

  return (
    <section style={{ padding: "40px 20px 56px", color: "#ffffff" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <div style={{
          background: "linear-gradient(180deg,#efe7ff 0%, #f6f2ff 100%)",
          borderRadius: 22,
          padding: 28,
          color: "#000"
        }}>

          {!isPremium && (
            <div style={{ textAlign: "center", marginBottom: 22 }}>
              <button onClick={handleCheckout}>
                Unlock Premium – $9 One-Time
              </button>
            </div>
          )}

          {isPremium && (
            <div style={{ textAlign: "center", marginBottom: 22, fontWeight: 700 }}>
              ✅ Premium Unlocked
            </div>
          )}

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div
              style={{
                ...featureCardBase,
                ...(isPremium ? {} : disabledCard)
              }}
              onClick={() => handlePremiumFeature("Share Link")}
            >
              <div style={iconWrap}>
                <img src="/share.png" style={iconImg} />
              </div>
              <h3 style={cardTitle}>Share a Meeting Link</h3>
              <p style={cardText}>Send a booking page</p>
            </div>

            <div
              style={{
                ...featureCardBase,
                ...(isPremium ? {} : disabledCard)
              }}
              onClick={() => handlePremiumFeature("Compare Cities")}
            >
              <div style={iconWrap}>
                <img src="/globe.png" style={iconImg} />
              </div>
              <h3 style={cardTitle}>Compare Cities Globally</h3>
              <p style={cardText}>Plan across time zones</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
