/**
 * File: app/ui/HeroSection.tsx
 * Version: v2.1 (ADD CONTACT TO NAV - SEO + TRUST FIX)
 * Date: 2026-04-13
 *
 * Purpose:
 * - Add Contact link to top navigation
 * - Improve trust + AdSense approval readiness
 * - Keep layout + logic fully intact
 *
 * Safety:
 * - No logic changes
 * - No ToolPreview changes
 * - No routing impact
 *
 * Rollback:
 * - Revert to v2.0
 */

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

    setIsPremium(premium === "true" || premium === "1");
  }, []);

  return (
    <section
      id="hero"
      aria-label="Hero Section"
      style={{
        width: "100%",
        overflowX: "hidden",
        background: "linear-gradient(180deg, #4c1d95 0%, #312e81 100%)",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1100px",
          padding: "20px 16px 60px",
          boxSizing: "border-box",
          color: "#ffffff",
        }}
      >
        {/* NAVBAR */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 16,
          }}
        >
          <img
            src="/logo-best-meeting-time.png"
            alt="Best Meeting Time"
            style={{
              height: 90,
              width: "auto",
            }}
          />

          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <a href="/privacy-policy" style={{ fontSize: 12, color: "#ddd6fe" }}>
              Privacy
            </a>

            <a href="/terms-of-service" style={{ fontSize: 12, color: "#ddd6fe" }}>
              Terms
            </a>

            {/* ✅ NEW CONTACT LINK */}
            <a href="/contact" style={{ fontSize: 12, color: "#ddd6fe" }}>
              Contact
            </a>

            <a
              href="#premium-features"
              style={{
                background: "#facc15",
                color: "#000",
                padding: "8px 14px",
                borderRadius: 10,
                fontWeight: 700,
                fontSize: 12,
                textDecoration: "none",
              }}
            >
              Premium
            </a>
          </div>
        </div>

        {/* HERO TEXT */}
        <div style={{ textAlign: "center", marginBottom: 18 }}>
          <h1
            style={{
              fontSize: "clamp(28px, 6vw, 48px)",
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: 8,
            }}
          >
            <span style={{ color: "#facc15" }}>Best Meeting Time</span> — Every Time
          </h1>

          <p
            style={{
              fontSize: "clamp(14px, 3.5vw, 17px)",
              maxWidth: 600,
              margin: "0 auto",
              opacity: 0.95,
            }}
          >
            Easily schedule meetings with your team or clients around the world
          </p>
        </div>

        {/* TOOL CARD */}
        <div
          id="tool-preview"
          style={{
            width: "100%",
            background: "linear-gradient(180deg,#ede9fe,#ddd6fe)",
            borderRadius: 24,
            padding: "20px",
            color: "#000",
            boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: 12 }}>
            <a
              href="#tool-preview"
              style={{
                display: "inline-block",
                background: isPremium ? "#7c3aed" : "#facc15",
                color: isPremium ? "#fff" : "#000",
                padding: "10px 18px",
                borderRadius: 999,
                fontWeight: 700,
                fontSize: 14,
              }}
            >
              {isPremium ? "✓ Premium Features Unlocked" : "Get Started Free"}
            </a>
          </div>

          <ToolPreviewSection />
        </div>
      </div>
    </section>
  );
}
