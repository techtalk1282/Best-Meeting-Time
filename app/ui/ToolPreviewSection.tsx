"use client";

// app/ui/ToolPreviewSection.tsx
// PURPOSE: Tool preview UI interactions only.
// Handles city swap + share UX.

import { useState } from "react";

type City = {
  name: string;
  tz: string;
};

type Window = {
  startUtc: string;
  endUtc: string;
};

export default function ToolPreviewSection() {

  const [cityA, setCityA] = useState<City>({
    name: "New York, USA",
    tz: "America/New_York",
  });

  const [cityB, setCityB] = useState<City>({
    name: "London, UK",
    tz: "Europe/London",
  });

  const [shareLink, setShareLink] = useState<string | null>(null);

  const swapCities = () => {
    setCityA(cityB);
    setCityB(cityA);
  };

  async function createShareLink() {
    try {

      const payload = {
        cities: [cityA, cityB],
        windows: [
          {
            startUtc: new Date().toISOString(),
            endUtc: new Date(Date.now() + 60 * 60 * 1000).toISOString(),
          },
        ],
      };

      const res = await fetch("/api/share", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data?.url) {
        const fullUrl = `${window.location.origin}${data.url}`;
        setShareLink(fullUrl);
      }

    } catch (err) {
      console.error("share error", err);
    }
  }

  function copyLink() {
    if (!shareLink) return;

    navigator.clipboard.writeText(shareLink);
    alert("Link copied!");
  }

  return (
    <section style={{ marginTop: 40 }}>

      <h2>Tool Preview</h2>

      <div style={{ display: "flex", gap: 20, marginTop: 20 }}>

        <div>
          <strong>{cityA.name}</strong>
          <div>{cityA.tz}</div>
        </div>

        <button onClick={swapCities}>
          Swap
        </button>

        <div>
          <strong>{cityB.name}</strong>
          <div>{cityB.tz}</div>
        </div>

      </div>

      <div style={{ marginTop: 30 }}>

        <button onClick={createShareLink}>
          Share Link
        </button>

        <button style={{ marginLeft: 10 }}>
          Export to Calendar
        </button>

        <button style={{ marginLeft: 10 }}>
          Save This Setup
        </button>

      </div>

      {shareLink && (
        <div
          style={{
            marginTop: 25,
            padding: 20,
            border: "1px solid #444",
            borderRadius: 8,
            maxWidth: 500,
          }}
        >
          <strong>Link Created</strong>

          <div
            style={{
              marginTop: 10,
              wordBreak: "break-all",
              fontSize: 14,
            }}
          >
            {shareLink}
          </div>

          <button
            onClick={copyLink}
            style={{ marginTop: 10 }}
          >
            Copy Link
          </button>
        </div>
      )}

    </section>
  );
}
