"use client";

// app/ui/ToolPreviewSection.tsx
// PURPOSE: Tool preview section — interactive city swap + share link popup + calendar export.
// Calendar export now calls backend endpoint /api/calendar instead of generating ICS in the browser.

import { useState } from "react";

export default function ToolPreviewSection() {
  const [cityA, setCityA] = useState({
    name: "New York, USA",
    time: "10:30 AM",
    tz: "America/New_York",
  });

  const [cityB, setCityB] = useState({
    name: "London, UK",
    time: "3:30 PM",
    tz: "Europe/London",
  });

  const [creatingShare, setCreatingShare] = useState(false);
  const [shareLink, setShareLink] = useState<string | null>(null);
  const [copyMessage, setCopyMessage] = useState<string>("");

  function swapCities() {
    const temp = cityA;
    setCityA(cityB);
    setCityB(temp);
  }

  async function createShareLink() {
    if (creatingShare) return;

    setCreatingShare(true);
    setCopyMessage("");

    try {
      const res = await fetch("/api/share", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cities: [
            { name: cityA.name, tz: cityA.tz },
            { name: cityB.name, tz: cityB.tz },
          ],
          windows: [
            {
              startUtc: "2026-03-05T18:00:00Z",
              endUtc: "2026-03-05T19:00:00Z",
            },
          ],
        }),
      });

      if (!res.ok) {
        throw new Error("Share creation failed");
      }

      const data = await res.json();

      if (data?.url) {
        const fullUrl = `${window.location.origin}${data.url}`;
        setShareLink(fullUrl);
      } else {
        throw new Error("Invalid response from share API");
      }
    } catch (err) {
      console.error("share_link_error", err);
      setCopyMessage("Unable to create share link");
    } finally {
      setCreatingShare(false);
    }
  }

  async function copyLink() {
    if (!shareLink) return;

    try {
      await navigator.clipboard.writeText(shareLink);
      setCopyMessage("Link copied");
    } catch {
      setCopyMessage("Copy failed");
    }
  }

  function exportCalendar() {
    const start = "20260305T180000Z";
    const end = "20260305T190000Z";

    const url =
      `/api/calendar?` +
      `cityA=${encodeURIComponent(cityA.name)}` +
      `&cityB=${encodeURIComponent(cityB.name)}` +
      `&start=${start}` +
      `&end=${end}`;

    window.location.href = url;
  }

  function saveSetup() {
    setCopyMessage("Save setup coming next");
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
        paddingRight: "var(--space-6)",
      }}
    >
      <header
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

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          gap: "var(--space-10)",
          alignItems: "start",
        }}
      >
        <div className="card" style={{ padding: "var(--space-8)" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto 1fr",
              gap: "var(--space-4)",
              alignItems: "center",
              marginBottom: "var(--space-6)",
            }}
          >
            <div
              style={{
                padding: "var(--space-4)",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--border)",
                background: "var(--surface)",
              }}
            >
              <strong>{cityA.name}</strong>
              <p style={{ margin: 0 }}>
                {cityA.time}
                <br />
                <small>{cityA.tz}</small>
              </p>
            </div>

            <div style={{ textAlign: "center" }}>
              <button onClick={swapCities}>Swap</button>
            </div>

            <div
              style={{
                padding: "var(--space-4)",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--border)",
                background: "var(--surface)",
              }}
            >
              <strong>{cityB.name}</strong>
              <p style={{ margin: 0 }}>
                {cityB.time}
                <br />
                <small>{cityB.tz}</small>
              </p>
            </div>
          </div>

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
                Suggested window: <strong>2:00 PM – 3:00 PM</strong>
              </small>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "var(--space-4)",
            }}
          >
            <button onClick={createShareLink}>
              {creatingShare ? "Creating..." : "Share Link"}
            </button>

            <button onClick={exportCalendar}>Export to Calendar</button>

            <button onClick={saveSetup}>Save This Setup</button>
          </div>

          {(shareLink || copyMessage) && (
            <div
              style={{
                marginTop: "var(--space-6)",
                padding: "var(--space-4)",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--border)",
                background: "rgba(255,255,255,0.03)",
              }}
            >
              {shareLink && (
                <>
                  <strong>Link created</strong>
                  <div style={{ wordBreak: "break-all", marginTop: 6 }}>
                    {shareLink}
                  </div>
                  <button onClick={copyLink}>Copy Link</button>
                </>
              )}

              {copyMessage && <p style={{ marginTop: 8 }}>{copyMessage}</p>}
            </div>
          )}
        </div>

        <aside>
          <div className="card" style={{ padding: "var(--space-8)" }}>
            <h3>Premium unlock (one-time)</h3>
            <p>
              Unlock multiple time windows, calendar export, saved setups, and
              sharing tools — no subscriptions.
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
