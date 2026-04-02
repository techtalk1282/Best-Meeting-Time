"use client";

import { useEffect, useState } from "react";
import ToolPreviewSection from "./ToolPreviewSection";

export default function HeroSection() {
  const [isPremium, setIsPremium] = useState(false);

  useEffect(() => {
    const premium = document.cookie
      .split(";")
      .map((c) => c.trim())
      .find((c) => c.startsWith("premium="))
      ?.split("=")[1];

    // ✅ FIX: support BOTH formats
    setIsPremium(premium === "true" || premium === "1");
  }, []);

  return (
    <section
  id="hero"
  aria-label="Hero Section"
  style={{
    padding: "10px 20px 40px",
    color: "#ffffff",
    background: "linear-gradient(180deg, #4c1d95 0%, #312e81 100%)",
  }}
>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* NAVBAR */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 32,
          }}
        >
          <img
            src="/logo-best-meeting-time.png"
            alt="Best Meeting Time"
            style={{
  height: 110,
  width: "auto",
}}
          />

          <div />

          <a
            href="#premium-features"
            style={{
              display: "inline-block",
              background: "#facc15",
              color: "#000",
              padding: "10px 22px",
              borderRadius: 10,
              fontWeight: 700,
              fontSize: 14,
              textDecoration: "none",
              boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
            }}
          >
            Premium Features & Pricing
          </a>
        </div>

        {/* HERO TEXT */}
        <div style={{ textAlign: "center", marginBottom: 20 }}>
          <h1
            style={{
              fontSize: 56,
              marginBottom: 6,
              fontWeight: 700,
            }}
          >
            <span style={{ color: "#facc15" }}>Best Meeting Time</span> — Every Time
          </h1>

          <h2
            style={{
              fontSize: 34,
              fontWeight: 400,
              marginBottom: 10,
            }}
          >
            Across Time Zones
          </h2>

          <p
            style={{
              fontSize: 17,
              fontWeight: 500,
              maxWidth: 720,
              margin: "0 auto",
              opacity: 0.95,
            }}
          >
            Easily schedule meetings with your team or clients around the world
          </p>
        </div>

        {/* TOOL PREVIEW CARD */}
        <div
          id="tool-preview"
          style={{
            background: "linear-gradient(180deg,#ede9fe,#ddd6fe)",
            borderRadius: 24,
            padding: 28,
            color: "#000",
            border: "1px solid rgba(0,0,0,0.06)",
            boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: 20 }}>
            <a
              href="#tool-preview"
              style={{
                display: "inline-block",
                background: isPremium ? "#7c3aed" : "#facc15",
                color: isPremium ? "#ffffff" : "#000",
                padding: "10px 18px",
                borderRadius: 999,
                fontWeight: 700,
                fontSize: 14,
                textDecoration: "none",
                boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
                cursor: isPremium ? "default" : "pointer",
              }}
            >
              {isPremium
                ? "✓ Premium Features Unlocked"
                : "Get Started Free"}
            </a>
          </div>

          <ToolPreviewSection />
        </div>
      </div>
    </section>
  );
}
