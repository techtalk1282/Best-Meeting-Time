"use client";

// app/ui/ToolPreviewSection.tsx
// PURPOSE: Tool preview section — interactive city swap + share link trigger.
// LayoutShell provides the section wrapper.

import { useState } from "react";

export default function ToolPreviewSection() {

  const [cityA, setCityA] = useState({
    name: "New York, USA",
    time: "10:30 AM",
    utc: "UTC-4"
  });

  const [cityB, setCityB] = useState({
    name: "London, UK",
    time: "3:30 PM",
    utc: "UTC+1"
  });

  const [creatingShare, setCreatingShare] = useState(false);

  function swapCities() {
    const temp = cityA;
    setCityA(cityB);
    setCityB(temp);
  }

  async function createShareLink() {

    if (creatingShare) return;

    setCreatingShare(true);

    try {

      const res = await fetch("/api/share", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          cities: [
            { name: cityA.name, tz: cityA.utc },
            { name: cityB.name, tz: cityB.utc }
          ],
          windows: [
            {
              startUtc: "2026-03-05T18:00:00Z",
              endUtc: "2026-03-05T19:00:00Z"
            }
          ]
        })
      });

      if (!res.ok) {
        throw new Error("Share creation failed");
      }

      const data = await res.json();

      if (data?.url) {

        const fullUrl = window.location.origin + data.url;

        try {
          await navigator.clipboard.writeText(fullUrl);
        } catch {}

        window.location.href = fullUrl;

      } else {
        throw new Error("Invalid response from share API");
      }

    } catch (err) {

      console.error("share_link_error", err);
      alert("Unable to create share link");

    } finally {

      setCreatingShare(false);

    }
  }

  return (

    <div
      aria-label="Tool Preview Container"
      style={{
        paddingTop: "var(--space-16)",
        paddingBottom: "var(--space-16)",
        maxWidth: "var(--container-max)",
        margin: "0 auto",
        paddingLeft: "var(--space-6)",
        paddingRight: "var(--space-6)"
      }}
    >

      <header
        style={{
          marginBottom: "var(--space-10)",
          textAlign: "left"
        }}
      >
        <h2 style={{ marginBottom: "var(--space-3)" }}>Tool Preview</h2>
        <p style={{ maxWidth: 760 }}>
          A realistic preview of how comparing time zones will look — basic
          interaction enabled for city swap.
        </p>
      </header>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          gap: "var(--space-10)",
          alignItems: "start"
        }}
      >

        <div
          className="card"
          style={{
            padding: "var(--space-8)"
          }}
        >

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto 1fr",
              gap: "var(--space-4)",
              alignItems: "center",
              marginBottom: "var(--space-6)"
            }}
          >

            <div
              style={{
                padding: "var(--space-4)",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--border)",
                background: "var(--surface)"
              }}
            >
              <p style={{ marginBottom: "var(--space-2)" }}>
                <strong>{cityA.name}</strong>
              </p>

              <p style={{ marginBottom: 0 }}>
                {cityA.time} <small>{cityA.utc}</small>
              </p>
            </div>

            <div style={{ textAlign: "center" }}>
              <button onClick={swapCities}>
                Swap
              </button>
            </div>

            <div
              style={{
                padding: "var(--space-4)",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--border)",
                background: "var(--surface)"
              }}
            >
              <p style={{ marginBottom: "var(--space-2)" }}>
                <strong>{cityB.name}</strong>
              </p>

              <p style={{ marginBottom: 0 }}>
                {cityB.time} <small>{cityB.utc}</small>
              </p>
            </div>

          </div>

          <div
            style={{
              borderRadius: "var(--radius-md)",
              border: "1px solid var(--border)",
              overflow: "hidden",
              marginBottom: "var(--space-6)"
            }}
          >

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "var(--space-3) var(--space-4)",
                background: "var(--surface)",
                borderBottom: "1px solid var(--border)"
              }}
            >
              <small>8 AM</small>
              <small>10 AM</small>
              <small>12 PM</small>
              <small>2 PM</small>
              <small>4 PM</small>
              <small>6 PM</small>
              <small>8 PM</small>
              <small>10 PM</small>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1.2fr 1.6fr 1.2fr",
                height: 14
              }}
            >
              <div style={{ background: "rgba(255,255,255,0.10)" }} />
              <div
                style={{
                  background:
                    "linear-gradient(90deg, rgba(124,58,237,0.55), rgba(251,191,36,0.35))"
                }}
              />
              <div style={{ background: "rgba(255,255,255,0.10)" }} />
            </div>

            <div
              style={{
                padding: "var(--space-3) var(--space-4)",
                background: "rgba(0,0,0,0.12)"
              }}
            >
              <small>
                Suggested window: <strong>2:00 PM – 3:00 PM</strong>
              </small>
            </div>

          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "var(--space-4)"
            }}
          >

            <button onClick={createShareLink}>
              {creatingShare ? "Creating..." : "Share Link"}
            </button>

            <button>Export to Calendar</button>
            <button>Save This Setup</button>

          </div>

        </div>

        <aside>

          <div className="card" style={{ padding: "var(--space-8)" }}>

            <h3 style={{ marginBottom: "var(--space-3)" }}>
              Premium unlock (one-time)
            </h3>

            <p style={{ marginBottom: "var(--space-6)" }}>
              Unlock multiple time windows, calendar export, saved setups, and sharing tools — no subscriptions.
            </p>

            <button className="button-primary" style={{ width: "100%" }}>
              Unlock Premium (Preview)
            </button>

          </div>

        </aside>

      </div>

    </div>

  );
}
