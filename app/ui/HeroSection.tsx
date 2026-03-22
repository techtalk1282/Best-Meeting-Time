// app/ui/HeroSection.tsx

"use client";

import { useEffect, useState } from "react";
import ToolPreviewSection from "./ToolPreviewSection";

const navButton: React.CSSProperties = {
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

export default function HeroSection() {
  const [isPremium, setIsPremium] = useState(false);

  useEffect(() => {
    const premium = document.cookie
      .split(";")
      .map((c) => c.trim())
      .find((c) => c.startsWith("premium="))
      ?.split("=")[1];

    setIsPremium(premium === "true");
  }, []);
  return (
    <section
      id="hero"
      aria-label="Hero Section"
      style={{
        padding: "24px 20px",
        color: "#ffffff",
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
            style={{ height: 72 }}
          />

          <div />

          {/* FIXED: anchor styled as button */}
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
          {/* FIXED: anchor styled as button */}
          <div style={{ textAlign: "center", marginBottom: 20 }}>
            <a
              href="#tool-preview"
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
              Get Started Free
            </a>
          </div>

          <ToolPreviewSection />
        </div>
      </div>
    </section>
  );
}
