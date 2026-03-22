//app/ui/PremiumFeaturesSection.tsx


"use client";

// app/ui/PremiumFeaturesSection.tsx

import { ReactNode, useState, useEffect } from "react";

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
const [copied, setCopied] = useState(false);
  const [isPremium, setIsPremium] = useState(false);
  
 useEffect(() => {
  function checkPremium() {
    const premium = document.cookie
      .split(";")
      .map((c) => c.trim())
      .find((c) => c.startsWith("premium="))
      ?.split("=")[1];

    setIsPremium(premium === "true");
  }

  checkPremium();

  setTimeout(checkPremium, 100);
}, []);
  
  async function handleCheckout() {
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
      });

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        console.error("No checkout URL returned");
      }
    } catch (err) {
      console.error("Checkout error:", err);
    }
  }
function handleShareClick() {
  const url = window.location.href;

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(url)
      .then(() => {
        setCopied(true);
      })
      .catch(() => {
        fallbackCopy(url);
      });
  } else {
    fallbackCopy(url);
  }
}

function fallbackCopy(text: string) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();

  try {
    document.execCommand("copy");
    setCopied(true);
  } catch {
    alert("Copy failed");
  }

  document.body.removeChild(textarea);
}
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

          <div style={{ textAlign: "center", marginBottom: 22 }}>
            <button
  style={{
    ...primaryButton,
    background: isPremium ? "#a78bfa" : primaryButton.background,
color: "#ffffff",
cursor: isPremium ? "default" : "pointer",
opacity: 1,
boxShadow: primaryButton.boxShadow,
  }}
  onClick={!isPremium ? handleCheckout : undefined}
>
  {isPremium
    ? "✓ Premium Features Unlocked"
    : "Unlock Premium Features — $9 One-Time Charge"}
</button>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 16,
              marginBottom: 16,
            }}
          >
           <div style={topFeatureCard} onClick={handleShareClick}>
              <div style={iconWrap}>
                <img src="/share.png" alt="Share link" style={iconImg} />
              </div>
              <h3 style={cardTitle}>Share a Meeting Link</h3>
              <p style={cardText}>Send a booking page with one click</p>
             {copied && (
  <p
    style={{
      color: "#16a34a",
      fontWeight: 700,
      marginTop: 10,
      fontSize: 15,
    }}
  >
    ✓ Link copied to clipboard
  </p>
)}
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

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, max-content)",
              justifyContent: "center",
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
