"use client";

// app/ui/ToolPreviewSection.tsx
// PURPOSE: Tool preview section — interactive city swap only.
// Still NO calculations or API calls.

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

  function swapCities() {
    const temp = cityA;
    setCityA(cityB);
    setCityB(temp);
  }

  return (
    <section
      id="tool-preview"
      aria-label="Tool Preview Section"
      style={{
        paddingTop: "var(--space-16)",
        paddingBottom: "var(--space-16)",
      }}
    >
      <div
        aria-label="Tool Preview Container"
        style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          paddingLeft: "var(--space-6)",
          paddingRight: "var(--space-6)",
        }}
      >

        {/* Section Header */}
        <header
          aria-label="Tool Preview Header"
          style={{
            marginBottom: "var(--space-10)",
            textAlign: "left",
          }}
        >
          <h2 style={{ marginBottom: "var(--space-3)" }}>Tool Preview</h2>
          <p style={{ maxWidth: 760 }}>
            A realistic preview of how comparing time zones will look — basic
            interaction enabled for city swap.
          </p>
        </header>

        {/* Preview Shell */}
        <div
          aria-label="Tool Preview Shell"
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: "var(--space-10)",
            alignItems: "start",
          }}
        >

          {/* LEFT CARD */}
          <div
            aria-label="Preview Main Card"
            className="card"
            style={{
              padding: "var(--space-8)",
            }}
          >

            {/* City Row */}
            <div
              aria-label="City Row"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr auto 1fr",
                gap: "var(--space-4)",
                alignItems: "center",
                marginBottom: "var(--space-6)",
              }}
            >

              {/* City A */}
              <div
                style={{
                  padding: "var(--space-4)",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid var(--border)",
                  background: "var(--surface)",
                }}
              >
                <p style={{ marginBottom: "var(--space-2)" }}>
                  <strong style={{ color: "var(--text)" }}>{cityA.name}</strong>
                </p>

                <p style={{ marginBottom: 0 }}>
                  <span style={{ color: "var(--text)" }}>{cityA.time}</span>{" "}
                  <small>{cityA.utc}</small>
                </p>
              </div>

              {/* Swap Button */}
              <div style={{ textAlign: "center" }}>
                <button onClick={swapCities}>
                  Swap
                </button>
              </div>

              {/* City B */}
              <div
                style={{
                  padding: "var(--space-4)",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid var(--border)",
                  background: "var(--surface)",
                }}
              >
                <p style={{ marginBottom: "var(--space-2)" }}>
                  <strong style={{ color: "var(--text)" }}>{cityB.name}</strong>
                </p>

                <p style={{ marginBottom: 0 }}>
                  <span style={{ color: "var(--text)" }}>{cityB.time}</span>{" "}
                  <small>{cityB.utc}</small>
                </p>
              </div>

            </div>

            {/* Timeline Strip (still static) */}
            <div
              style={{
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--border)",
                overflow: "hidden",
                marginBottom: "var(--space-6)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "var(--space-3) var(--space-4)",
                  background: "var(--surface)",
                  borderBottom: "1px solid var(--border)",
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
                  height: 14,
                }}
              >
                <div style={{ background: "rgba(255,255,255,0.10)" }} />
                <div
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(124,58,237,0.55), rgba(251,191,36,0.35))",
                  }}
                />
                <div style={{ background: "rgba(255,255,255,0.10)" }} />
              </div>

              <div
                style={{
                  padding: "var(--space-3) var(--space-4)",
                  background: "rgba(0,0,0,0.12)",
                }}
              >
                <small>
                  Suggested window:{" "}
                  <span style={{ color: "var(--text)" }}>
                    2:00 PM – 3:00 PM
                  </span>{" "}
                  · Ideal for both
                </small>
              </div>
            </div>

            {/* Actions Row */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: "var(--space-4)",
              }}
            >
              <button type="button">Share Link</button>
              <button type="button">Export to Calendar</button>
              <button type="button">Save This Setup</button>
            </div>

          </div>

          {/* RIGHT PANEL (unchanged) */}
          <aside>
            <div className="card" style={{ padding: "var(--space-8)" }}>

              <h3 style={{ marginBottom: "var(--space-3)" }}>
                Premium unlock (one-time)
              </h3>

              <p style={{ marginBottom: "var(--space-6)" }}>
                Unlock multiple time windows, calendar export, saved setups, and
                sharing tools — no subscriptions.
              </p>

              <button
                className="button-primary"
                style={{ width: "100%" }}
              >
                Unlock Premium (Preview)
              </button>

            </div>
          </aside>

        </div>

      </div>
    </section>
  );
}
