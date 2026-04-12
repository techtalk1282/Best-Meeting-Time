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
  const [isLocked, setIsLocked] = useState(false);
  const [isWatchingAd, setIsWatchingAd] = useState(false);
  const [isPremiumLimitReached, setIsPremiumLimitReached] = useState(false);
  const [showAdModal, setShowAdModal] = useState(false);
  const [countdown, setCountdown] = useState(5);
  useEffect(() => {
    function checkPremium() {
      const premium = document.cookie
        .split(";")
        .map((c) => c.trim())
        .find((c) => c.startsWith("premium="))
        ?.split("=")[1];

      setIsPremium(premium === "true" || premium === "1");
    }

    function checkLocked() {
      const premium = document.cookie
        .split(";")
        .map((c) => c.trim())
        .find((c) => c.startsWith("premium="))
        ?.split("=")[1];

      const hasPremium = premium === "true" || premium === "1";
      const freeUsed = parseInt(localStorage.getItem("free_sessions_used") || "0", 10);
      const premiumUsed = parseInt(localStorage.getItem("premium_sessions_used") || "0", 10);

      const premiumLimitReached = hasPremium && premiumUsed >= 6;
      const freeLimitReached = !hasPremium && freeUsed >= 4;

      setIsPremiumLimitReached(premiumLimitReached);
      setIsLocked(premiumLimitReached || freeLimitReached);
    }
    checkPremium();
    checkLocked();

    const interval = setInterval(() => {
      checkPremium();
      checkLocked();
    }, 500);

    return () => clearInterval(interval);
  }, []);
useEffect(() => {
  if (!showAdModal) return;

  const timer = setTimeout(() => {
    if (countdown <= 1) {
      setCountdown(0); // ✅ stop at 0, DO NOT auto-close
    } else {
      setCountdown((prev) => prev - 1);
    }
  }, 1000);

  return () => clearTimeout(timer);
}, [showAdModal, countdown]);


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

  function handleWatchAd() {
  setCountdown(5);
  setShowAdModal(true);
  setIsWatchingAd(true);
}
  
function completeAdReward() {
  const used = parseInt(localStorage.getItem("free_sessions_used") || "0", 10);

  const next = Math.max(0, used - 4); // ✅ 4 clicks (2 sessions)

  localStorage.setItem("free_sessions_used", String(next));

  setIsLocked(false);
  setIsWatchingAd(false);
  setShowAdModal(false);
  
window.history.replaceState(null, "", window.location.pathname);
window.scrollTo({ top: 0, behavior: "smooth" });
  window.scrollTo({ top: 0, behavior: "smooth" });
}
  function handleShareClick() {
    if (!isPremium) {
      return;
    }

    const url = window.location.href;

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard
        .writeText(url)
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
            position: "relative",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: 22 }}>
            {isPremium && !isPremiumLimitReached ? (
              <>
                <button
                  style={{
                    ...primaryButton,
                    background: "#7c3aed",
                    color: "#ffffff",
                    cursor: "default",
                    opacity: 1,
                    boxShadow: primaryButton.boxShadow,
                  }}
                >
                  ✓ Premium Features Unlocked
                </button>

                <div
                  style={{
                    marginTop: 10,
                    fontSize: 13,
                    color: "#6b7280",
                    fontWeight: 600,
                  }}
                >
                  No subscription • Pay once, use anytime
                </div>
              </>
            ) : isLocked ? (
              <>
           <div
                  style={{
                    textAlign: "center",
                    fontSize: 16,
                    color: "#222",
                    marginBottom: 14,
                    fontWeight: 600,
                  }}
                >
                  {isPremiumLimitReached
                    ? "You've used your 6 premium planning sessions"
                    : "You've used your 2 free planning sessions"}
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 16,
                    marginBottom: 24,
                    flexWrap: "wrap",
                    alignItems: "stretch",
                  }}
                >
                  <button
                    onClick={handleCheckout}
                    style={{
                      ...primaryButton,
                      minWidth: 260,
                      padding: "14px 22px",
                      borderRadius: 12,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span>Unlock Premium — $7 One-Time</span>
                    <span style={{ fontSize: 12, fontWeight: 600, marginTop: 6 }}>
                      Get all features below
                    </span>
                  </button>

                  <button
                    onClick={handleWatchAd}
                    style={{
                      ...primaryButton,
                      minWidth: 260,
                      padding: "14px 22px",
                      borderRadius: 12,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span>{isWatchingAd ? "Playing Ad..." : "Continue Free — Watch Ad"}</span>
                    {!isWatchingAd && (
                      <span style={{ fontSize: 12, fontWeight: 600, marginTop: 6 }}>
                        Get 2 more planning sessions (no premium tools)
                      </span>
                    )}
                  </button>
                </div>
              </>
            ) : (
              <>
                <button
                  style={{
                    ...primaryButton,
                    background: primaryButton.background,
                    color: primaryButton.color,
                    cursor: "pointer",
                    opacity: 1,
                    boxShadow: primaryButton.boxShadow,
                  }}
                  onClick={handleCheckout}
                >
                  Unlock Premium — $7 One-Time
                </button>

                <div
                  style={{
                    marginTop: 10,
                    fontSize: 13,
                    color: "#6b7280",
                    fontWeight: 600,
                  }}
                >
                  No subscription • Pay once, use anytime
                  <div
  style={{
    marginTop: 10,
    textAlign: "center",
    fontSize: 13,
    fontWeight: 700,
    color: "#1f1147",
  }}
>
  ✓ Unlock Premium to activate all features below
</div>
                </div>
              </>
            )}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 16,
              marginBottom: 16,
            }}
          >
            <div
              style={{
                ...topFeatureCard,
                cursor: "pointer",
              }}
              onClick={handleShareClick}
            >
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
              <h3 style={cardTitle}>3 Planning Sessions (2 Cities)</h3>
              <p style={cardText}>
                Plan meetings between different cities with 3 sessions
              </p>
            </div>
          </div>

          <div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
    gap: 16,
    marginBottom: 24,
  }}
>
            <div style={bottomFeatureCard}>
              <div style={iconWrap}>
                <img
                  src="/google-calendar.png"
                  alt="Google Calendar"
                  style={iconImg}
                />
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

           <div
       style={{ ...bottomFeatureCard, cursor: "pointer" }}
       onClick={() => {
  if (!isPremium) {
    window.location.hash = "#premium-features";
    return;
  }

  const url = `/api/calendar?cityA=New%20York&cityB=London&start=2026-03-25T14:00:00Z&end=2026-03-25T15:00:00Z`;
  window.open(url, "_blank");
}}
     >
              <div style={iconWrap}>
                <img src="/apple.png" alt="Apple Calendar" style={appleIconImg} />
              </div>
              <h3 style={cardTitle}>Apple Calendar</h3>
              <p style={cardText}>Download meeting file for Apple Calendar</p>
            </div>

            {children}
          </div>

          <div
  style={{
    display: "grid",
    gridTemplateColumns: window.innerWidth < 600 ? "1fr" : "repeat(2, max-content)",
    justifyContent: "center",
    gap: "10px 40px",
    margin: "0 auto 20px",
    width: "100%",
  }}
>
            <div style={checklistItem}>
              <CheckIcon />
              <span>$7 one-time payment</span>
            </div>
            <div style={checklistItem}>
              <CheckIcon />
              <span>3 planning sessions</span>
            </div>
            <div style={checklistItem}>
              <CheckIcon />
              <span>No subscription</span>
            </div>
            <div style={checklistItem}>
              <CheckIcon />
              <span>Google, Outlook & Apple export</span>
            </div>
            <div style={checklistItem}>
              <CheckIcon />
              <span>No ads during planning</span>
            </div>
            <div style={checklistItem}>
              <CheckIcon />
              <span>Share meeting links</span>
            </div>
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
        {showAdModal && (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      background: "linear-gradient(180deg, #4c1d95 0%, #312e81 100%)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 9999,
      padding: "40px 20px",
      textAlign: "center",
    }}
  >
    <div
      style={{
        color: "#fff",
        fontSize: "26px",
        fontWeight: 800,
        marginBottom: "12px",
      }}
    >
      Your 2 free planning sessions are unlocking...
      <div
  style={{
    color: "#c4b5fd",
    fontSize: "15px",
    fontWeight: 500,
    marginBottom: "24px",
  }}
>
  Want to plan faster and waste less time?
</div>
    </div>

    <div
      style={{
        color: "#c4b5fd",
        fontSize: "18px",
        fontWeight: 700,
        marginBottom: "20px",
      }}
    >
     {countdown > 0 ? (
  <div
    style={{
      color: "#c4b5fd",
      fontSize: "18px",
      fontWeight: 700,
      marginBottom: "20px",
    }}
  >
    {countdown}
  </div>
) : (
  <button
    onClick={completeAdReward}
    style={{
      marginBottom: "20px",
      background: "linear-gradient(90deg, #facc15, #f59e0b)",
      color: "#111827",
      padding: "14px 22px",
      borderRadius: "999px",
      fontSize: "16px",
      fontWeight: 800,
      border: "none",
      cursor: "pointer",
      boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
    }}
  >
    Continue — Unlock My Free Planning Sessions
  </button>
)}
    </div>

    <div
      style={{
        width: "100%",
        maxWidth: "700px",
        marginBottom: "30px",
      }}
    >
      <div
  style={{
    color: "#ffffff",
    fontSize: "16px",
    fontWeight: 600,
    marginBottom: "12px",
  }}
>
  These top-rated books have helped millions improve productivity and decision-making
</div>
      <img
        src="/books-display.png"
        alt="Top productivity books"
        style={{
          width: "100%",
          borderRadius: "16px",
          boxShadow: "0 30px 80px rgba(0,0,0,0.55)",
        }}
      />
    </div>

    <div
      style={{
        display: "flex",
        gap: "16px",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <a
        href="https://amzn.to/47HUGKw"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          background: "linear-gradient(90deg, #facc15, #f59e0b)",
          color: "#111827",
          padding: "12px 18px",
          borderRadius: "999px",
          textDecoration: "none",
          fontSize: "14px",
          fontWeight: 700,
        }}
      >
        Improve Your Habits
      </a>

      <a
        href="https://amzn.to/4siUb0Q"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          background: "linear-gradient(90deg, #facc15, #f59e0b)",
          color: "#111827",
          padding: "12px 18px",
          borderRadius: "999px",
          textDecoration: "none",
          fontSize: "14px",
          fontWeight: 700,
        }}
      >
        Build Better Systems

      </a>

      <a
        href="https://amzn.to/4duax2V"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          background: "linear-gradient(90deg, #facc15, #f59e0b)",
          color: "#111827",
          padding: "12px 18px",
          borderRadius: "999px",
          textDecoration: "none",
          fontSize: "14px",
          fontWeight: 700,
        }}
      >
       Master Your Workflow
      </a>
    </div>
  </div>
)}
      </div>
    </section>
  );
}
