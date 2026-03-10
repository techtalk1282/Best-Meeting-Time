"use client";

import { useState, useEffect } from "react";

type City = {
  name: string;
  time: string;
  tz: string;
};

type Window = {
  startUtc: string;
  endUtc: string;
};

const CITY_OPTIONS: City[] = [

  // USA
  { name: "New York, USA", time: "", tz: "America/New_York" },
  { name: "Miami, USA", time: "", tz: "America/New_York" },
  { name: "Chicago, USA", time: "", tz: "America/Chicago" },
  { name: "Dallas, USA", time: "", tz: "America/Chicago" },
  { name: "Denver, USA", time: "", tz: "America/Denver" },
  { name: "Los Angeles, USA", time: "", tz: "America/Los_Angeles" },
  { name: "San Francisco, USA", time: "", tz: "America/Los_Angeles" },
  { name: "Seattle, USA", time: "", tz: "America/Los_Angeles" },

  // Canada
  { name: "Toronto, Canada", time: "", tz: "America/Toronto" },
  { name: "Vancouver, Canada", time: "", tz: "America/Vancouver" },

  // South America
  { name: "São Paulo, Brazil", time: "", tz: "America/Sao_Paulo" },
  { name: "Buenos Aires, Argentina", time: "", tz: "America/Argentina/Buenos_Aires" },

  // UK / Europe
  { name: "London, UK", time: "", tz: "Europe/London" },
  { name: "Paris, France", time: "", tz: "Europe/Paris" },
  { name: "Berlin, Germany", time: "", tz: "Europe/Berlin" },
  { name: "Madrid, Spain", time: "", tz: "Europe/Madrid" },
  { name: "Rome, Italy", time: "", tz: "Europe/Rome" },
  { name: "Amsterdam, Netherlands", time: "", tz: "Europe/Amsterdam" },
  { name: "Zurich, Switzerland", time: "", tz: "Europe/Zurich" },
  { name: "Stockholm, Sweden", time: "", tz: "Europe/Stockholm" },

  // Middle East
  { name: "Dubai, UAE", time: "", tz: "Asia/Dubai" },
  { name: "Tel Aviv, Israel", time: "", tz: "Asia/Jerusalem" },
  { name: "Riyadh, Saudi Arabia", time: "", tz: "Asia/Riyadh" },

  // Africa
  { name: "Cape Town, South Africa", time: "", tz: "Africa/Johannesburg" },
  { name: "Nairobi, Kenya", time: "", tz: "Africa/Nairobi" },

  // India
  { name: "Mumbai, India", time: "", tz: "Asia/Kolkata" },
  { name: "Delhi, India", time: "", tz: "Asia/Kolkata" },

  // Asia
  { name: "Singapore", time: "", tz: "Asia/Singapore" },
  { name: "Hong Kong", time: "", tz: "Asia/Hong_Kong" },
  { name: "Shanghai, China", time: "", tz: "Asia/Shanghai" },
  { name: "Beijing, China", time: "", tz: "Asia/Shanghai" },
  { name: "Tokyo, Japan", time: "", tz: "Asia/Tokyo" },
  { name: "Seoul, South Korea", time: "", tz: "Asia/Seoul" },
  { name: "Bangkok, Thailand", time: "", tz: "Asia/Bangkok" },
  { name: "Jakarta, Indonesia", time: "", tz: "Asia/Jakarta" },

  // Australia / NZ
  { name: "Sydney, Australia", time: "", tz: "Australia/Sydney" },
  { name: "Melbourne, Australia", time: "", tz: "Australia/Melbourne" },
  { name: "Brisbane, Australia", time: "", tz: "Australia/Brisbane" },
  { name: "Perth, Australia", time: "", tz: "Australia/Perth" },
  { name: "Auckland, New Zealand", time: "", tz: "Pacific/Auckland" }

];

function getTimeZoneOffsetMinutes(date: Date, timeZone: string): number {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    timeZoneName: "shortOffset",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(date);

  const tzPart =
    parts.find((part) => part.type === "timeZoneName")?.value ?? "GMT+0";

  const match = tzPart.match(/GMT([+-])(\d{1,2})(?::?(\d{2}))?/);

  if (!match) return 0;

  const sign = match[1] === "-" ? -1 : 1;
  const hours = Number(match[2]);
  const minutes = Number(match[3] ?? "0");

  return sign * (hours * 60 + minutes);
}

function calculateOverlap(cityA: City, cityB: City): Window {

  const now = new Date();

  const offsetA = getTimeZoneOffsetMinutes(now, cityA.tz);
  const offsetB = getTimeZoneOffsetMinutes(now, cityB.tz);

  const workStart = 9 * 60;
  const workEnd = 17 * 60;

  const startA = workStart - offsetA;
  const endA = workEnd - offsetA;

  const startB = workStart - offsetB;
  const endB = workEnd - offsetB;

  let overlapStart = Math.max(startA, startB);
  let overlapEnd = Math.min(endA, endB);

  /* Fix invalid overlap */
  if (overlapStart >= overlapEnd) {
    overlapStart = overlapStart;
    overlapEnd = overlapStart + 120;
  }

  const base = new Date();
  base.setUTCHours(0, 0, 0, 0);

  const start = new Date(base.getTime() + overlapStart * 60000);
  const end = new Date(base.getTime() + overlapEnd * 60000);

  return {
    startUtc: start.toISOString(),
    endUtc: end.toISOString(),
  };
}

export default function ToolPreviewSection() {

  const [viewerTZ, setViewerTZ] = useState<string | null>(null);

  useEffect(() => {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setViewerTZ(tz);
  }, []);

  const [cityA, setCityA] = useState<City>(CITY_OPTIONS[0]);
  const [cityB, setCityB] = useState<City>(CITY_OPTIONS[1]);

  const [creatingShare, setCreatingShare] = useState(false);
  const [shareLink, setShareLink] = useState<string | null>(null);
  const [copyMessage, setCopyMessage] = useState("");
  const [calendarMenuOpen, setCalendarMenuOpen] = useState(false);

  const meetingWindow = calculateOverlap(cityA, cityB);

  function swapCities() {
    const temp = cityA;
    setCityA(cityB);
    setCityB(temp);
  }

  function formatLocal(dateString: string) {
    const date = new Date(dateString);
    return date.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
  }

  const startLocal = formatLocal(meetingWindow.startUtc);
  const endLocal = formatLocal(meetingWindow.endUtc);

  const startHour = new Date(meetingWindow.startUtc).getHours();
  const endHour = new Date(meetingWindow.endUtc).getHours();

  const timelineStart = 0;
  const timelineEnd = 22;

  const startPercent =
    ((startHour - timelineStart) / (timelineEnd - timelineStart)) * 100;

  const widthPercent =
    ((endHour - startHour) / (timelineEnd - timelineStart)) * 100;

  async function createShareLink() {

    if (creatingShare) return;

    setCreatingShare(true);
    setCopyMessage("");

    try {

      const res = await fetch("/api/share", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          cities: [
            { name: cityA.name, tz: cityA.tz },
            { name: cityB.name, tz: cityB.tz },
          ],
          windows: [meetingWindow],
        }),
      });

      if (!res.ok) throw new Error("Share creation failed");

      const data = await res.json();
      const fullUrl = `${window.location.origin}${data.url}`;

      setShareLink(fullUrl);

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

  function openGoogleCalendar() {

    const start =
      new Date(meetingWindow.startUtc)
        .toISOString()
        .replace(/[-:]/g, "")
        .split(".")[0] + "Z";

    const end =
      new Date(meetingWindow.endUtc)
        .toISOString()
        .replace(/[-:]/g, "")
        .split(".")[0] + "Z";

    const text = encodeURIComponent(`Meeting: ${cityA.name} ↔ ${cityB.name}`);

    const details = encodeURIComponent(
      `Suggested meeting window between ${cityA.name} and ${cityB.name}`
    );

    const url =
      `https://calendar.google.com/calendar/render?action=TEMPLATE` +
      `&text=${text}` +
      `&dates=${start}/${end}` +
      `&details=${details}`;

    window.open(url, "_blank", "noopener,noreferrer");
  }

  function openOutlookCalendar() {

    const start = meetingWindow.startUtc;
    const end = meetingWindow.endUtc;

    const subject = encodeURIComponent(`Meeting: ${cityA.name} ↔ ${cityB.name}`);

    const body = encodeURIComponent(
      `Suggested meeting window between ${cityA.name} and ${cityB.name}`
    );

    const url =
      `https://outlook.office.com/calendar/deeplink/compose?` +
      `subject=${subject}` +
      `&startdt=${start}` +
      `&enddt=${end}` +
      `&body=${body}`;

    window.open(url, "_blank", "noopener,noreferrer");
  }

  function downloadICS() {

    const start =
      new Date(meetingWindow.startUtc)
        .toISOString()
        .replace(/[-:]/g, "")
        .split(".")[0] + "Z";

    const end =
      new Date(meetingWindow.endUtc)
        .toISOString()
        .replace(/[-:]/g, "")
        .split(".")[0] + "Z";

    const url =
      `/api/calendar?cityA=${encodeURIComponent(cityA.name)}` +
      `&cityB=${encodeURIComponent(cityB.name)}` +
      `&start=${start}&end=${end}`;

    window.open(url, "_blank");
  }

  return (

    <div style={{ maxWidth: 1000, margin: "0 auto", padding: 40 }}>

      <h2>Tool Preview</h2>

      <p>
        A realistic preview of how comparing time zones will look — basic interaction enabled.
      </p>

      {viewerTZ && (
        <div style={{ marginBottom: 20, fontWeight: 600 }}>
          Your Time Zone: {viewerTZ}
        </div>
      )}

      <div style={{ display: "flex", gap: 20, marginBottom: 20 }}>

        <select
          value={cityA.name}
          onChange={(e) => {
            const city = CITY_OPTIONS.find(c => c.name === e.target.value)!;
            setCityA(city);
          }}
        >
          {CITY_OPTIONS.map(city => (
            <option key={city.name} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>

        <button onClick={swapCities}>Swap</button>

        <select
          value={cityB.name}
          onChange={(e) => {
            const city = CITY_OPTIONS.find(c => c.name === e.target.value)!;
            setCityB(city);
          }}
        >
          {CITY_OPTIONS.map(city => (
            <option key={city.name} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>

      </div>

      <div
        style={{
          border: "1px solid #444",
          padding: 20,
          borderRadius: 10,
          marginBottom: 25,
        }}
      >

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 13,
            marginBottom: 8,
          }}
        >
          <span>12 AM</span>
          <span>2 AM</span>
          <span>4 AM</span>
          <span>6 AM</span>
          <span>8 AM</span>
          <span>10 AM</span>
          <span>12 PM</span>
          <span>2 PM</span>
          <span>4 PM</span>
          <span>6 PM</span>
          <span>8 PM</span>
          <span>10 PM</span>
        </div>

        <div style={{ position: "relative" }}>

          <div
            style={{
              height: 24,
              borderRadius: 12,
              background: "#5b21b6",
              position: "relative",
            }}
          >

            <div
              style={{
                position: "absolute",
                left: `${startPercent}%`,
                width: `${widthPercent}%`,
                height: "100%",
                background: "#22c55e",
                borderRadius: 12,
              }}
            />

          </div>

        </div>

        <div style={{ marginTop: 6, fontWeight: 600 }}>
          Best Meeting Window: <strong>{startLocal} – {endLocal}</strong>
        </div>

      </div>

      <div style={{ display: "flex", gap: 12 }}>
        <button onClick={createShareLink}>
          {creatingShare ? "Creating..." : "Create Share Link"}
        </button>

        <button onClick={() => setCalendarMenuOpen(!calendarMenuOpen)}>
          Export to Calendar
        </button>
      </div>

      {calendarMenuOpen && (
        <div style={{ marginTop: 20, display: "flex", gap: 12 }}>
          <button onClick={openGoogleCalendar}>Add to Google Calendar</button>
          <button onClick={openOutlookCalendar}>Add to Outlook Calendar</button>
          <button onClick={downloadICS}>Apple / iCal Download</button>
        </div>
      )}

      {shareLink && (
        <div style={{ marginTop: 30 }}>
          <strong>Share or bookmark this meeting setup</strong>

          <p>{shareLink}</p>

          <button onClick={copyLink}>Copy Link</button>

          <p>{copyMessage}</p>

          <small>Links remain active for 45 days.</small>
        </div>
      )}

    </div>
  );
}
