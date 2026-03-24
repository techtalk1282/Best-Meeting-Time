"use client";

import { useState, useEffect } from "react";

function checkPremiumCookie(): boolean {
  if (typeof document === "undefined") return false;
  return document.cookie.includes("premium=1");
}

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
  { name: "New York, USA", time: "", tz: "America/New_York" },
  { name: "Miami, USA", time: "", tz: "America/New_York" },
  { name: "Chicago, USA", time: "", tz: "America/Chicago" },
  { name: "Dallas, USA", time: "", tz: "America/Chicago" },
  { name: "Denver, USA", time: "", tz: "America/Denver" },
  { name: "Los Angeles, USA", time: "", tz: "America/Los_Angeles" },
  { name: "San Francisco, USA", time: "", tz: "America/Los_Angeles" },
  { name: "Seattle, USA", time: "", tz: "America/Los_Angeles" },

  { name: "Toronto, Canada", time: "", tz: "America/Toronto" },
  { name: "Vancouver, Canada", time: "", tz: "America/Vancouver" },

  { name: "São Paulo, Brazil", time: "", tz: "America/Sao_Paulo" },
  {
    name: "Buenos Aires, Argentina",
    time: "",
    tz: "America/Argentina/Buenos_Aires",
  },

  { name: "London, UK", time: "", tz: "Europe/London" },
  { name: "Paris, France", time: "", tz: "Europe/Paris" },
  { name: "Berlin, Germany", time: "", tz: "Europe/Berlin" },
  { name: "Madrid, Spain", time: "", tz: "Europe/Madrid" },
  { name: "Rome, Italy", time: "", tz: "Europe/Rome" },
  { name: "Amsterdam, Netherlands", time: "", tz: "Europe/Amsterdam" },
  { name: "Zurich, Switzerland", time: "", tz: "Europe/Zurich" },
  { name: "Stockholm, Sweden", time: "", tz: "Europe/Stockholm" },

  { name: "Dubai, UAE", time: "", tz: "Asia/Dubai" },
  { name: "Tel Aviv, Israel", time: "", tz: "Asia/Jerusalem" },
  { name: "Riyadh, Saudi Arabia", time: "", tz: "Asia/Riyadh" },

  { name: "Cape Town, South Africa", time: "", tz: "Africa/Johannesburg" },
  { name: "Nairobi, Kenya", time: "", tz: "Africa/Nairobi" },

  { name: "Mumbai, India", time: "", tz: "Asia/Kolkata" },
  { name: "Delhi, India", time: "", tz: "Asia/Kolkata" },

  { name: "Singapore", time: "", tz: "Asia/Singapore" },
  { name: "Hong Kong", time: "", tz: "Asia/Hong_Kong" },
  { name: "Shanghai, China", time: "", tz: "Asia/Shanghai" },
  { name: "Beijing, China", time: "", tz: "Asia/Shanghai" },
  { name: "Tokyo, Japan", time: "", tz: "Asia/Tokyo" },
  { name: "Seoul, South Korea", time: "", tz: "Asia/Seoul" },
  { name: "Bangkok, Thailand", time: "", tz: "Asia/Bangkok" },
  { name: "Jakarta, Indonesia", time: "", tz: "Asia/Jakarta" },

  { name: "Sydney, Australia", time: "", tz: "Australia/Sydney" },
  { name: "Melbourne, Australia", time: "", tz: "Australia/Melbourne" },
  { name: "Brisbane, Australia", time: "", tz: "Australia/Brisbane" },
  { name: "Perth, Australia", time: "", tz: "Australia/Perth" },
  { name: "Auckland, New Zealand", time: "", tz: "Pacific/Auckland" },
];

/* COUNTRY FLAG MAP */

function getCountryCode(city: string): string {
  if (city.includes("USA")) return "us";
  if (city.includes("Canada")) return "ca";
  if (city.includes("Brazil")) return "br";
  if (city.includes("Argentina")) return "ar";

  if (city.includes("UK")) return "gb";
  if (city.includes("France")) return "fr";
  if (city.includes("Germany")) return "de";
  if (city.includes("Spain")) return "es";
  if (city.includes("Italy")) return "it";
  if (city.includes("Netherlands")) return "nl";
  if (city.includes("Switzerland")) return "ch";
  if (city.includes("Sweden")) return "se";

  if (city.includes("UAE")) return "ae";
  if (city.includes("Israel")) return "il";
  if (city.includes("Saudi")) return "sa";

  if (city.includes("South Africa")) return "za";
  if (city.includes("Kenya")) return "ke";

  if (city.includes("India")) return "in";

  if (city.includes("Singapore")) return "sg";
  if (city.includes("Hong Kong")) return "hk";
  if (city.includes("China")) return "cn";
  if (city.includes("Japan")) return "jp";
  if (city.includes("South Korea")) return "kr";
  if (city.includes("Thailand")) return "th";
  if (city.includes("Indonesia")) return "id";

  if (city.includes("Australia")) return "au";
  if (city.includes("New Zealand")) return "nz";

  return "un";
}

function Flag({ city }: { city: string }) {
  const code = getCountryCode(city);

  return (
    <img
      src={`https://flagcdn.com/w40/${code}.png`}
      alt={code}
      style={{
        width: 26,
        height: 18,
        marginLeft: 8,
        borderRadius: 2,
      }}
    />
  );
}

/* TIMEZONE NORMALIZATION */

function normalizeTimeZoneLabel(label?: string) {
  if (!label) return "";

  const map: Record<string, string> = {
    "GMT+0": "GMT",
    "GMT+1": "CET",
    "GMT+2": "CEST",

    "GMT+3": "EAT",
    "GMT+4": "GST",

    "GMT+5": "PKT",
    "GMT+5:30": "IST",
    "GMT+6": "BST",
    "GMT+7": "ICT",
    "GMT+8": "CST",
    "GMT+9": "JST",

    "GMT+10": "AEST",
    "GMT+11": "AEDT",

    "GMT+12": "NZST",
    "GMT+13": "NZDT",

    "GMT-3": "BRT",
  };

  return map[label] ?? label;
}

/* TIMEZONE OFFSET */

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

/* MEETING OVERLAP */

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

  if (overlapStart >= overlapEnd) {
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

/* MAIN COMPONENT */

export default function ToolPreviewSection() {
  useEffect(() => {
    const url = new URL(window.location.href);
    const sessionId = url.searchParams.get("session_id");

    if (sessionId) {
      document.cookie = "premium=1; path=/; max-age=31536000";
    }
  }, []);

  const [isPremium, setIsPremium] = useState(false);
  const [viewerTZ, setViewerTZ] = useState<string | null>(null);
  const [isLocked, setIsLocked] = useState(false);
  const [isWatchingAd, setIsWatchingAd] = useState(false);
  const [cityA, setCityA] = useState<City>(CITY_OPTIONS[0]);
  const [cityB, setCityB] = useState<City>(CITY_OPTIONS[1]);
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setViewerTZ(tz);

    const premium = checkPremiumCookie();
    setIsPremium(premium);
  }, []);

  const isFreeLimitReached =
    typeof window !== "undefined" &&
    !isPremium &&
    parseInt(localStorage.getItem("free_sessions_used") || "0", 10) >= 4;

  function handleLockedInteraction(): boolean {
    if (isPremium) return false;

    const used = parseInt(localStorage.getItem("free_sessions_used") || "0", 10);

    if (used >= 4) {
      setIsLocked(true);
      return true;
    }

    localStorage.setItem("free_sessions_used", String(used + 1));

    return false;
  }

  useEffect(() => {
    setNow(new Date());
  }, []);

  useEffect(() => {
    if (isPremium) {
      setIsLocked(false);
      return;
    }

    const existing = parseInt(
      localStorage.getItem("free_sessions_used") || "0",
      10
    );

    setIsLocked(existing >= 4);

    console.log("GATING STATUS:", {
      freeSessionsUsed: existing,
      isPremium,
      isFreeLimitReached,
    });
  }, [isPremium, isFreeLimitReached]);

  if (!now) return null;

  const meetingWindow = calculateOverlap(cityA, cityB);

  const startDate = new Date(meetingWindow.startUtc);
  const endDate = new Date(meetingWindow.endUtc);

  const startHour = startDate.getHours() + startDate.getMinutes() / 60;
  const endHour = endDate.getHours() + endDate.getMinutes() / 60;

  const startPercent = (startHour / 24) * 100;
  const widthPercent = ((endHour - startHour) / 24) * 100;

  const startLocal = startDate.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });
  const endLocal = endDate.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });

  const cityATime = new Intl.DateTimeFormat("en-US", {
    timeZone: cityA.tz,
    hour: "numeric",
    minute: "2-digit",
  }).format(now);

  const cityBTime = new Intl.DateTimeFormat("en-US", {
    timeZone: cityB.tz,
    hour: "numeric",
    minute: "2-digit",
  }).format(now);

  const cityATZRaw = new Intl.DateTimeFormat("en-US", {
    timeZone: cityA.tz,
    timeZoneName: "short",
  })
    .formatToParts(now)
    .find((p) => p.type === "timeZoneName")?.value;

  const cityBTZRaw = new Intl.DateTimeFormat("en-US", {
    timeZone: cityB.tz,
    timeZoneName: "short",
  })
    .formatToParts(now)
    .find((p) => p.type === "timeZoneName")?.value;

  const cityATZ = normalizeTimeZoneLabel(cityATZRaw);
  const cityBTZ = normalizeTimeZoneLabel(cityBTZRaw);

  const cityADate = new Intl.DateTimeFormat("en-US", {
    timeZone: cityA.tz,
    weekday: "long",
    month: "long",
    day: "numeric",
  }).format(now);

  const cityBDate = new Intl.DateTimeFormat("en-US", {
    timeZone: cityB.tz,
    weekday: "long",
    month: "long",
    day: "numeric",
  }).format(now);

  const labels = [
    { label: "12 AM", hour: 0 },
    { label: "2 AM", hour: 2 },
    { label: "4 AM", hour: 4 },
    { label: "6 AM", hour: 6 },
    { label: "8 AM", hour: 8 },
    { label: "10 AM", hour: 10 },
    { label: "12 PM", hour: 12 },
    { label: "2 PM", hour: 14 },
    { label: "4 PM", hour: 16 },
    { label: "6 PM", hour: 18 },
    { label: "8 PM", hour: 20 },
    { label: "10 PM", hour: 22 },
  ];

  return (
    <div style={{ width: "100%", padding: 0 }}>
      {isLocked && !isPremium && (
  <div
    style={{
      marginBottom: 24,
      padding: 20,
      borderRadius: 16,
      background: "#fff7ed",
      border: "1px solid #fed7aa",
      textAlign: "center",
    }}
  >
    <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 6 }}>
      You’ve used your free planning sessions
    </div>

    <div style={{ fontSize: 14, marginBottom: 14, color: "#444" }}>
      Continue planning instantly or unlock all features
    </div>

    <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
      
      {/* CONTINUE FREE (SIMULATED AD) */}
<button
  onClick={() => {
  setIsWatchingAd(true);

  const used = parseInt(localStorage.getItem("free_sessions_used") || "0", 10);

  setTimeout(() => {
    localStorage.setItem("free_sessions_used", String(Math.max(0, used - 2)));
    setIsLocked(false);
    setIsWatchingAd(false);
  }, 2500);
}}
  style={{
    background: "#ffffff",
    border: "1px solid #ddd",
    padding: "10px 16px",
    borderRadius: 8,
    cursor: "pointer",
    fontWeight: 600,
  }}
>
  {isWatchingAd ? "Playing ad..." : "Continue Free (Watch Ad)"}
</button>

      {/* PREMIUM CTA */}
      <a
        href="#premium-features"
        style={{
          display: "inline-block",
          background: "#facc15",
          color: "#000",
          padding: "10px 16px",
          borderRadius: 8,
          fontWeight: 700,
          textDecoration: "none",
        }}
      >
        Unlock Premium
      </a>
    </div>
  </div>
)}
      {isPremium && (
        <div style={{ marginBottom: 10, color: "#16a34a", fontWeight: 700 }}>
          Premium Unlocked
        </div>
      )}

      {viewerTZ && (
        <div style={{ marginBottom: 20, fontWeight: 600 }}>
          Your Time Zone: {viewerTZ}
        </div>
      )}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 30,
        }}
      >
        <div>
          <div
            style={{ fontWeight: 600, display: "flex", alignItems: "center" }}
          >
            {cityA.name}
            <Flag city={cityA.name} />
          </div>

          <div style={{ fontSize: 30, fontWeight: 700 }}>
            {cityATime} {cityATZ}
          </div>

          <div style={{ opacity: 0.7 }}>{cityADate}</div>
        </div>

        <div style={{ textAlign: "right" }}>
          <div
            style={{
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            {cityB.name}
            <Flag city={cityB.name} />
          </div>

          <div style={{ fontSize: 30, fontWeight: 700 }}>
            {cityBTime} {cityBTZ}
          </div>

          <div style={{ opacity: 0.7 }}>{cityBDate}</div>
        </div>
      </div>

      <div
        style={{ display: "flex", gap: 20, marginBottom: 20, alignItems: "center" }}
      >
        <select
          value={cityA.name}
          onChange={(e) => {
            if (handleLockedInteraction()) return;

            const city = CITY_OPTIONS.find((c) => c.name === e.target.value)!;
            setCityA(city);
          }}
        >
          {CITY_OPTIONS.map((city) => (
            <option key={city.name} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>

        <button
          onClick={() => {
            const temp = cityA;
            setCityA(cityB);
            setCityB(temp);
          }}
          style={{
            padding: "8px 16px",
            fontWeight: 600,
            borderRadius: 6,
            cursor: "pointer",
            color: "#000",
          }}
        >
          SWAP
        </button>

        <select
          value={cityB.name}
          onChange={(e) => {
            if (handleLockedInteraction()) return;

            const city = CITY_OPTIONS.find((c) => c.name === e.target.value)!;
            setCityB(city);
          }}
        >
          {CITY_OPTIONS.map((city) => (
            <option key={city.name} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>
      </div>

      <div style={{ padding: 8 }}>
        <div style={{ position: "relative", height: 20, marginBottom: 10 }}>
          {labels.map((l) => (
            <span
              key={l.hour}
              style={{
                position: "absolute",
                left: `${(l.hour / 24) * 100}%`,
                transform: "translateX(-50%)",
                fontSize: 13,
              }}
            >
              {l.label}
            </span>
          ))}
        </div>

        <div style={{ position: "relative" }}>
          <div
            style={{
              height: 36,
              borderRadius: 12,
              background: "linear-gradient(90deg,#4c1d95,#6d28d9,#7c3aed)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {[...Array(24)].map((_, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  left: `${(i / 24) * 100}%`,
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: 1,
                  height: i % 2 === 0 ? 20 : 12,
                  background: "#ffffff66",
                  pointerEvents: "none",
                }}
              />
            ))}

            <div
              style={{
                position: "absolute",
                left: `${startPercent}%`,
                width: `${widthPercent}%`,
                height: "100%",
                background: "#22c55e",
                borderRadius: 12,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 600,
                color: "#fff",
                fontSize: 12,
              }}
            >
              Best Time
            </div>
          </div>
        </div>

        <div style={{ marginTop: 8, fontWeight: 600 }}>
          Best Meeting Window: <strong>{startLocal} – {endLocal}</strong>
        </div>
      </div>
    </div>
  );
}
