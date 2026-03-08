"use client";

import { useEffect, useState } from "react";
import ToolPreviewSection from "./ui/ToolPreviewSection";
import UnlockPremiumButton from "./UnlockPremiumButton";
import ShareActionButton from "./components/ShareActionButton";

export default function HomePage() {

  const [premium, setPremium] = useState(false);

  useEffect(() => {
    const cookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("premium="));

    if (cookie?.split("=")[1] === "1") {
      setPremium(true);
    }
  }, []);

  const cities = [
    { name: "New York", tz: "America/New_York" },
    { name: "London", tz: "Europe/London" },
  ];

  const windows = [
    {
      startUtc: "2026-03-01T18:00:00Z",
      endUtc: "2026-03-01T19:00:00Z",
    },
  ];

  return (
    <main style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>Best Meeting Time</h1>

      <p>Premium: {premium ? "ON" : "OFF"}</p>

      {!premium && <UnlockPremiumButton />}

      {premium && (
        <div style={{ marginTop: "24px" }}>
          <ToolPreviewSection />

          <div style={{ marginTop: "24px" }}>
            <ShareActionButton cities={cities} windows={windows} />
          </div>
        </div>
      )}
    </main>
  );
}
