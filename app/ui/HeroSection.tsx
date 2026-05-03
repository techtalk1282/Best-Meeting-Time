/**
 * File: app/ui/HeroSection.tsx
 * Version: v2.2 (TOOL CARD ONLY FOR V3 HOMEPAGE)
 * Date: 2026-04-27
 *
 * PURPOSE:
 * - Remove duplicate internal nav/logo/old hero headline from the tool section
 * - Keep the working ToolPreviewSection intact
 * - Preserve premium cookie badge behavior
 * - Support the new V3 content-first homepage layout
 *
 * PROTECTED:
 * - No ToolPreviewSection logic changes
 * - No Stripe changes
 * - No checkout changes
 * - No webhook changes
 * - No KV changes
 * - No premium/payment route changes
 *
 * ROLLBACK:
 * - Revert this file to v2.1 if the tool card layout does not test cleanly
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
    <section aria-label="Meeting time tool" style={sectionWrap}>
      <div style={toolCard}>
        <div style={badgeWrap}>
          <span style={statusBadge}>
            {isPremium ? "Premium Features Unlocked" : "Get Started Free"}
          </span>
        </div>

        <ToolPreviewSection />
      </div>
    </section>
  );
}

/* STYLES */

const sectionWrap = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
};

const toolCard = {
  width: "100%",
  maxWidth: "860px",
  background: "linear-gradient(180deg,#ede9fe,#ddd6fe)",
  borderRadius: "24px",
  padding: "20px",
  color: "#000",
  boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
  border: "1px solid rgba(196,181,253,0.75)",
};

const badgeWrap = {
  textAlign: "center" as const,
  marginBottom: "12px",
};

const statusBadge = {
  display: "inline-block",
  background: "#facc15",
  color: "#1e1b4b",
  padding: "10px 18px",
  borderRadius: "999px",
  fontWeight: 800,
  fontSize: "14px",
};
