/**
 * File: app/ui/ToolPreviewSection.tsx
 * Version: v4.4-DESKTOP-TOOL-REBUILD
 * Date: 2026-05-03
 *
 * PURPOSE:
 * - Rebuild the desktop ToolPreviewSection to match the target app/tool UI
 * - Preserve city selection, flags, live local times, best meeting calculation, sharing, and calendar actions
 * - Keep mobile isolated through ToolPreviewMobile
 *
 * PROTECTED:
 * - No Stripe route changes
 * - No checkout changes
 * - No webhook changes
 * - No KV changes
 * - No premium verification route changes
 *
 * ROLLBACK:
 * - Restore previous app/ui/ToolPreviewSection.tsx vSTABLE-2.0 baseline
 */

"use client";

import { useEffect, useMemo, useState } from "react";
import ToolPreviewMobile from "./ToolPreviewMobile";

function checkPremiumCookie(): boolean {
  if (typeof document === "undefined") return false;
  return document.cookie.includes("premium=1");
}

type City = {
  name: string;
  time: string;
  tz: string;
};

type MeetingWindow = {
  startUtc: string;
  endUtc: string;
};

type MeetingOption = {
  label: string;
  score: "Best" | "Great" | "Good";
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
      style={flagStyle}
    />
  );
}

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

function calculateOverlap(cityA: City, cityB: City): MeetingWindow {
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

function addMinutesToUtc(utc: string, minutes: number): string {
  return new Date(new Date(utc).getTime() + minutes * 60000).toISOString();
}

function formatTimeInZone(utc: string, timeZone: string): string {
  return new Intl.DateTimeFormat("en-US", {
    timeZone,
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(utc));
}

function formatDateInZone(date: Date, timeZone: string): string {
  return new Intl.DateTimeFormat("en-US", {
    timeZone,
    weekday: "long",
    month: "long",
    day: "numeric",
  }).format(date);
}

function getTimeZoneAbbreviation(date: Date, timeZone: string): string {
  const raw = new Intl.DateTimeFormat("en-US", {
    timeZone,
    timeZoneName: "short",
  })
    .formatToParts(date)
    .find((part) => part.type === "timeZoneName")?.value;

  return normalizeTimeZoneLabel(raw);
}


export default function ToolPreviewSection({
  defaultCityLeft,
}: {
  defaultCityLeft?: string;
}) {
  const [isPremium, setIsPremium] = useState(false);
  const [viewerTZ, setViewerTZ] = useState<string | null>(null);
  const [isLocked, setIsLocked] = useState(false);

  const [cityA, setCityA] = useState<City>(
    CITY_OPTIONS.find((city) => city.name === defaultCityLeft) ||
      CITY_OPTIONS[0]
  );
  const [cityB, setCityB] = useState<City>(CITY_OPTIONS[12]);

  const [meetingDuration, setMeetingDuration] = useState("60 minutes");
  const [preferredWindow, setPreferredWindow] = useState("9:00 AM – 5:00 PM");
  const [now, setNow] = useState<Date | null>(null);

  const [shareUrl, setShareUrl] = useState<string | null>(null);
  const [shareCopied, setShareCopied] = useState(false);
  const [premiumMessage, setPremiumMessage] = useState<string | null>(null);
 const [successMessage, setSuccessMessage] = useState<string | null>(null);
const [hasCalculated, setHasCalculated] = useState(false);

const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const check = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    check();
    window.addEventListener("resize", check);

    return () => window.removeEventListener("resize", check);
  }, []);

  function scrollToUpgrade() {
    const el = document.getElementById("premium-features");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  function requirePremiumFeature(): boolean {
    if (!isPremium) {
      setPremiumMessage("Premium feature — unlock all features for $7 below");
      scrollToUpgrade();
      return false;
    }

    setPremiumMessage(null);
    return true;
  }

  useEffect(() => {
    const url = new URL(window.location.href);
    const sessionId = url.searchParams.get("session_id");

    if (sessionId) {
      document.cookie = "premium=1; path=/; max-age=31536000";
      setSuccessMessage("Premium unlocked successfully");
      window.history.replaceState({}, "", window.location.pathname);
    }
  }, []);

  useEffect(() => {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setViewerTZ(tz);
    setIsPremium(checkPremiumCookie());
    setNow(new Date());

    const timer = window.setInterval(() => {
      setNow(new Date());
    }, 60000);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!localStorage.getItem("free_sessions_used")) {
      localStorage.setItem("free_sessions_used", "0");
    }

    const freeUsed = parseInt(
      localStorage.getItem("free_sessions_used") || "0",
      10
    );
    const premiumUsed = parseInt(
      localStorage.getItem("premium_sessions_used") || "0",
      10
    );

    if (isPremium) {
      setIsLocked(false);
    } else if (freeUsed >= 4) {
      setIsLocked(true);
    } else {
      setIsLocked(false);
    }

    console.log("GATING STATUS:", {
      freeSessionsUsed: freeUsed,
      premiumSessionsUsed: premiumUsed,
      isPremium,
    });
  }, [isPremium]);

  function handlePlannerInteraction(): boolean {
    const freeUsed = parseInt(
      localStorage.getItem("free_sessions_used") || "0",
      10
    );

    if (isPremium) {
      const premiumUsed = parseInt(
        localStorage.getItem("premium_sessions_used") || "0",
        10
      );

      if (premiumUsed >= 6) {
        setIsLocked(true);
        scrollToUpgrade();
        return true;
      }

      localStorage.setItem("premium_sessions_used", String(premiumUsed + 1));
      return false;
    }

    if (freeUsed >= 4) {
      setIsLocked(true);
      scrollToUpgrade();
      return true;
    }

    localStorage.setItem("free_sessions_used", String(freeUsed + 1));
    return false;
  }

const safeNow = now || new Date();
  const meetingWindow = calculateOverlap(cityA, cityB);

  const meetingOptions: MeetingOption[] = useMemo(() => {
    const firstStart = meetingWindow.startUtc;
    const firstEnd = addMinutesToUtc(firstStart, 60);

    const secondStart = addMinutesToUtc(firstStart, 60);
    const secondEnd = addMinutesToUtc(secondStart, 60);

    const thirdStart = addMinutesToUtc(firstStart, 120);
    const thirdEnd = addMinutesToUtc(thirdStart, 60);

    const fourthStart = addMinutesToUtc(firstStart, 180);
    const fourthEnd = addMinutesToUtc(fourthStart, 60);

    return [
      {
        label: "Best fit for everyone",
        score: "Best",
        startUtc: firstStart,
        endUtc: firstEnd,
      },
      {
        label: "Strong overlap",
        score: "Great",
        startUtc: secondStart,
        endUtc: secondEnd,
      },
      {
        label: "Still workable",
        score: "Good",
        startUtc: thirdStart,
        endUtc: thirdEnd,
      },
      {
        label: "Backup option",
        score: "Good",
        startUtc: fourthStart,
        endUtc: fourthEnd,
      },
    ];
  }, [cityA, cityB, meetingWindow.startUtc]);

  const selectedWindow = meetingOptions[0];

  const cityATime = new Intl.DateTimeFormat("en-US", {
    timeZone: cityA.tz,
    hour: "numeric",
    minute: "2-digit",
  }).format(safeNow);

  const cityBTime = new Intl.DateTimeFormat("en-US", {
    timeZone: cityB.tz,
    hour: "numeric",
    minute: "2-digit",
  }).format(safeNow);

  const cityATZ = getTimeZoneAbbreviation(safeNow, cityA.tz);
  const cityBTZ = getTimeZoneAbbreviation(safeNow, cityB.tz);

  const cityADate = formatDateInZone(safeNow, cityA.tz);
  const cityBDate = formatDateInZone(safeNow, cityB.tz);

  const bestStartA = formatTimeInZone(selectedWindow.startUtc, cityA.tz);
  const bestEndA = formatTimeInZone(selectedWindow.endUtc, cityA.tz);
  const bestStartB = formatTimeInZone(selectedWindow.startUtc, cityB.tz);
  const bestEndB = formatTimeInZone(selectedWindow.endUtc, cityB.tz);

  if (isMobile) {
    return (
      <div style={{ width: "100%", padding: 0 }}>
        <ToolPreviewMobile
          cityA={cityA}
          cityB={cityB}
          setCityA={setCityA}
          setCityB={setCityB}
          CITY_OPTIONS={CITY_OPTIONS}
          handlePlannerInteraction={handlePlannerInteraction}
          startLocal={bestStartA}
          endLocal={bestEndA}
        />
      </div>
    );
  }


  return (
  <section style={toolShell}>
    <>
      {successMessage && (
        <div style={successBanner}>
          {successMessage}
        </div>
      )}
      {isLocked && (
        <div style={lockedBanner}>
          <div>
            <div style={lockedTitle}>
              {isPremium
                ? "You’ve used your 6 premium planning sessions"
                : "You’ve used your 4 free planning sessions"}
            </div>
            <div style={lockedText}>
              {isPremium
                ? "Unlock more sessions to continue scheduling."
                : "Upgrade to unlock more planning sessions and premium features."}
            </div>
          </div>
        </div>
      )}

      

      <div style={appGrid}>
        <aside style={controlCard}>
          <div style={cardLabel}>Select Time Zones</div>

          <label style={inputGroup}>
            <span style={inputLabel}>Time Zone 1</span>
            <select
              value={cityA.name}
              onChange={(event) => {
                if (handlePlannerInteraction()) return;
                const city = CITY_OPTIONS.find(
                  (option) => option.name === event.target.value
                );
                if (city) setCityA(city);
              }}
              style={selectStyle}
            >
              {CITY_OPTIONS.map((city) => (
                <option key={city.name} value={city.name}>
                  {city.name}
                </option>
              ))}
            </select>
          </label>

          <label style={inputGroup}>
            <span style={inputLabel}>Time Zone 2</span>
            <select
              value={cityB.name}
              onChange={(event) => {
                if (handlePlannerInteraction()) return;
                const city = CITY_OPTIONS.find(
                  (option) => option.name === event.target.value
                );
                if (city) setCityB(city);
              }}
              style={selectStyle}
            >
              {CITY_OPTIONS.map((city) => (
                <option key={city.name} value={city.name}>
                  {city.name}
                </option>
              ))}
            </select>
          </label>

          <button
            type="button"
            onClick={() => {
              const temp = cityA;
              setCityA(cityB);
              setCityB(temp);
            }}
            style={swapButton}
          >
            Swap Time Zones
          </button>

          <label style={inputGroup}>
            <span style={inputLabel}>Meeting Duration</span>
            <select
              value={meetingDuration}
              onChange={(event) => setMeetingDuration(event.target.value)}
              style={selectStyle}
            >
              <option>30 minutes</option>
              <option>45 minutes</option>
              <option>60 minutes</option>
              <option>90 minutes</option>
            </select>
          </label>

          <div style={inputGroup}>
            <div style={sliderHeader}>
              <span style={inputLabel}>Preferred Time Window</span>
              <span style={sliderValue}>{preferredWindow}</span>
            </div>

            <div style={sliderTrack}>
              <div style={sliderFill} />
              <div style={sliderDot} />
            </div>

            <div style={sliderLabels}>
              <span>9:00 AM</span>
              <span>8:00 PM</span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              if (handlePlannerInteraction()) return;
              setPreferredWindow("9:00 AM – 5:00 PM");
              setPremiumMessage(null);
              setHasCalculated(true);
            }}
            style={findButton}
          >
            Find Best Time
          </button>
        </aside>

        <section style={resultsCard}>
          <div style={resultsHeader}>
            <div>
              <div style={cardLabel}>Best Meeting Times</div>
              <h3 style={resultsTitle}>Today’s strongest overlap</h3>
            </div>

            <div style={todayPill}>Today</div>
          </div>

          <div style={currentTimeGrid}>
            <div style={currentTimeCard}>
              <div style={cityNameLine}>
                <span>{cityA.name}</span>
                <Flag city={cityA.name} />
              </div>
              <strong style={liveTime}>
                {cityATime} {cityATZ}
              </strong>
              <span style={localDate}>{cityADate}</span>
            </div>

            <div style={currentTimeCard}>
              <div style={cityNameLine}>
                <span>{cityB.name}</span>
                <Flag city={cityB.name} />
              </div>
              <strong style={liveTime}>
                {cityBTime} {cityBTZ}
              </strong>
              <span style={localDate}>{cityBDate}</span>
            </div>
          </div>

          <div style={meetingList}>
            {meetingOptions.map((option) => {
              const startA = formatTimeInZone(option.startUtc, cityA.tz);
              const endA = formatTimeInZone(option.endUtc, cityA.tz);
              const startB = formatTimeInZone(option.startUtc, cityB.tz);
              const endB = formatTimeInZone(option.endUtc, cityB.tz);

              return (
                <div key={option.label} style={meetingRow}>
                  <div style={meetingTimes}>
                    <strong>
                      {startA} – {endA}
                    </strong>
                    <span>
                      {cityA.name} · {cityB.name}: {startB} – {endB}
                    </span>
                  </div>

                  <span
                    style={{
                      ...scoreBadge,
                      ...(option.score === "Best"
                        ? scoreBest
                        : option.score === "Great"
                        ? scoreGreat
                        : scoreGood),
                    }}
                  >
                    {option.score}
                  </span>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      {hasCalculated && (
         <>
          <div style={resultStack}>
            <div style={bestFoundCard}>
              <div>
                <strong style={bestFoundTitle}>Best Time Found</strong>
                <div style={bestFoundText}>
                  {bestStartA} – {bestEndA} ({cityATZ}) works best for {cityA.name}.
                </div>
                <div style={bestFoundSubtext}>
                  That matches {bestStartB} – {bestEndB} ({cityBTZ}) for {cityB.name}.
                </div>
              </div>
            </div>

            <div style={sharePanel}>
        <div style={shareHeader}>
          <strong>Share Your Results</strong>
          <button
            type="button"
            onClick={async () => {
              if (!requirePremiumFeature()) return;

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
                        startUtc: selectedWindow.startUtc,
                        endUtc: selectedWindow.endUtc,
                      },
                    ],
                  }),
                });

                const data = await res.json();

                if (data.url) {
                  const fullUrl = window.location.origin + data.url;
                  setShareUrl(fullUrl);
                  setShareCopied(false);
                }
              } catch (err) {
                console.error("Share error:", err);
              }
            }}
            style={copySmallButton}
          >
            Create Link
          </button>
        </div>

        {premiumMessage && (
          <button
            type="button"
            onClick={scrollToUpgrade}
            style={premiumNotice}
          >
            {premiumMessage}
          </button>
        )}

        <div style={shareInputRow}>
          <a
            href={shareUrl || "#"}
            target={shareUrl ? "_blank" : undefined}
            rel={shareUrl ? "noopener noreferrer" : undefined}
            style={shareInput}
          >
            {shareUrl
              ? shareUrl.replace(/^https?:\/\//, "")
              : "bestmeetingtimeapp.com/meeting-link"}
          </a>

          <button
            type="button"
            onClick={async () => {
              if (!shareUrl) {
                if (!requirePremiumFeature()) return;
                return;
              }

              await navigator.clipboard.writeText(shareUrl);
              setShareCopied(true);
            }}
            style={copyButton}
          >
            {shareCopied ? "Copied" : "Copy"}
          </button>
        </div>

        <div style={calendarActions}>
          <button
            type="button"
            onClick={() => {
              if (!requirePremiumFeature()) return;

              const start =
                selectedWindow.startUtc.replace(/[-:]/g, "").split(".")[0] +
                "Z";
              const end =
                selectedWindow.endUtc.replace(/[-:]/g, "").split(".")[0] + "Z";

              const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
                "Meeting: " + cityA.name + " ↔ " + cityB.name
              )}&dates=${start}/${end}&details=${encodeURIComponent(
                "Suggested meeting window"
              )}`;

              window.open(url, "_blank");
            }}
            style={calendarButton}
          >
            Add to Google
          </button>

          <button
            type="button"
            onClick={() => {
              if (!requirePremiumFeature()) return;

              const url = `https://outlook.live.com/calendar/0/deeplink/compose?subject=${encodeURIComponent(
                "Meeting: " + cityA.name + " ↔ " + cityB.name
              )}&startdt=${selectedWindow.startUtc}&enddt=${
                selectedWindow.endUtc
              }&body=${encodeURIComponent("Suggested meeting window")}`;

              window.open(url, "_blank");
            }}
            style={calendarButton}
          >
            Add to Outlook
          </button>

          <button
            type="button"
            onClick={() => {
              if (!requirePremiumFeature()) return;

              const url = `/api/calendar?cityA=${encodeURIComponent(
                cityA.name
              )}&cityB=${encodeURIComponent(cityB.name)}&start=${
                selectedWindow.startUtc
              }&end=${selectedWindow.endUtc}`;

              window.open(url, "_blank");
            }}
            style={calendarButton}
          >
            Add to Apple Calendar
          </button>
       </div>
      </div>
        </>
      )}

      {viewerTZ && (
        <div style={viewerTimezone}>
          Your detected time zone: <strong>{viewerTZ}</strong>
        </div>
      )}
    </section>
  );
}


/* STYLES */

const toolShell = {
  width: "100%",
  maxWidth: "1180px",
  margin: "0 auto",
  padding: "12px 16px 8px",
  background: "#ffffff",
  border: "1px solid #ede9fe",
  borderRadius: "14px",
  color: "#111827",
  boxShadow: "0 18px 45px rgba(76,29,149,0.12)",
};

const successBanner = {
  marginBottom: "14px",
  padding: "12px 14px",
  borderRadius: "10px",
  background: "#dcfce7",
  border: "1px solid #86efac",
  color: "#166534",
  fontSize: "13px",
  fontWeight: 900,
};

const lockedBanner = {
  marginBottom: "14px",
  padding: "14px 16px",
  borderRadius: "12px",
  background: "rgba(250, 204, 21, 0.14)",
  border: "1px solid #facc15",
};

const lockedTitle = {
  fontSize: "14px",
  fontWeight: 900,
  color: "#1f1147",
};

const lockedText = {
  marginTop: "3px",
  fontSize: "12px",
  color: "#6b7280",
};

const toolHeader = {
  textAlign: "center" as const,
  marginBottom: "6px",
};

const toolTitle = {
  margin: "0 0 2px",
  fontSize: "21px",
  fontWeight: 950,
  letterSpacing: "-0.03em",
  color: "#111827",
};

const toolSubtitle = {
  margin: 0,
  color: "#6b7280",
  fontSize: "11px",
  lineHeight: 1.25,
};

const appGrid = {
  display: "grid",
  gridTemplateColumns: "0.86fr 1.34fr",
  gap: "12px",
  alignItems: "start",
};

const controlCard = {
  background: "#ffffff",
  border: "1px solid #ede9fe",
  borderRadius: "12px",
  padding: "16px",
  boxShadow: "0 8px 24px rgba(76,29,149,0.08)",
};

const resultsCard = {
  background: "#ffffff",
  border: "1px solid #ede9fe",
  borderRadius: "12px",
  padding: "16px",
  boxShadow: "0 8px 24px rgba(76,29,149,0.08)",
};

const cardLabel = {
  color: "#4c1d95",
  fontSize: "12px",
  fontWeight: 950,
  marginBottom: "12px",
};

const inputGroup = {
  display: "flex",
  flexDirection: "column" as const,
  gap: "6px",
  marginBottom: "13px",
};

const inputLabel = {
  color: "#6b7280",
  fontSize: "11px",
  fontWeight: 900,
};

const selectStyle = {
  width: "100%",
  background: "#f8f7ff",
  border: "1px solid #ddd6fe",
  borderRadius: "8px",
  padding: "12px 13px",
  color: "#111827",
  fontSize: "12px",
  fontWeight: 800,
  outline: "none",
};

const swapButton = {
  width: "100%",
  margin: "0 0 13px",
  background: "#ede9fe",
  color: "#4c1d95",
  fontWeight: 900,
  padding: "9px 12px",
  borderRadius: "8px",
  border: "1px solid #ddd6fe",
  cursor: "pointer",
  fontSize: "12px",
};

const sliderHeader = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "10px",
};

const sliderValue = {
  color: "#4c1d95",
  fontSize: "10px",
  fontWeight: 900,
  whiteSpace: "nowrap" as const,
};

const sliderTrack = {
  height: "7px",
  background: "#ede9fe",
  borderRadius: "999px",
  position: "relative" as const,
  marginTop: "8px",
};

const sliderFill = {
  position: "absolute" as const,
  left: "8%",
  width: "58%",
  top: 0,
  bottom: 0,
  borderRadius: "999px",
  background: "#8b5cf6",
};

const sliderDot = {
  position: "absolute" as const,
  left: "62%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  width: "15px",
  height: "15px",
  borderRadius: "999px",
  background: "#7c3aed",
  boxShadow: "0 0 0 4px rgba(124,58,237,0.14)",
};

const sliderLabels = {
  display: "flex",
  justifyContent: "space-between",
  color: "#6b7280",
  fontSize: "10px",
  fontWeight: 800,
  marginTop: "6px",
};

const findButton = {
  width: "100%",
  background: "#5b21b6",
  color: "#ffffff",
  fontWeight: 950,
  padding: "11px 14px",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
  fontSize: "13px",
  boxShadow: "0 8px 20px rgba(91,33,182,0.22)",
};

const resultsHeader = {
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  gap: "12px",
  marginBottom: "12px",
};

const resultsTitle = {
  margin: "-6px 0 0",
  color: "#111827",
  fontSize: "17px",
  fontWeight: 950,
};

const todayPill = {
  background: "#f8f7ff",
  border: "1px solid #ddd6fe",
  color: "#4c1d95",
  borderRadius: "999px",
  padding: "6px 10px",
  fontSize: "11px",
  fontWeight: 900,
};

const currentTimeGrid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "10px",
  marginBottom: "13px",
};

const currentTimeCard = {
  background: "#f8f7ff",
  border: "1px solid #ddd6fe",
  borderRadius: "10px",
  padding: "11px",
};

const cityNameLine = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "8px",
  color: "#374151",
  fontSize: "11px",
  fontWeight: 900,
};

const liveTime = {
  display: "block",
  marginTop: "7px",
  color: "#111827",
  fontSize: "23px",
  fontWeight: 950,
};

const localDate = {
  display: "block",
  marginTop: "4px",
  color: "#6b7280",
  fontSize: "10px",
  fontWeight: 700,
};

const meetingList = {
  display: "flex",
  flexDirection: "column" as const,
  gap: "9px",
};

const meetingRow = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "10px",
  padding: "10px 12px",
  border: "1px solid #ede9fe",
  borderRadius: "10px",
  background: "#ffffff",
};

const meetingTimes = {
  display: "flex",
  flexDirection: "column" as const,
  gap: "4px",
  color: "#111827",
  fontSize: "12px",
};

const scoreBadge = {
  minWidth: "54px",
  textAlign: "center" as const,
  padding: "6px 8px",
  borderRadius: "999px",
  fontSize: "11px",
  fontWeight: 950,
};

const scoreBest = {
  background: "#dcfce7",
  color: "#166534",
};

const scoreGreat = {
  background: "#ecfdf5",
  color: "#047857",
};

const scoreGood = {
  background: "#f0fdf4",
  color: "#15803d",
};

const bestFoundCard = {
  margin: "6px auto 0",
  maxWidth: "820px",
  background: "#fef3c7",
  border: "1px solid #facc15",
  color: "#3b2600",
  borderRadius: "12px",
  padding: "10px 14px",
};

const bestFoundTitle = {
  display: "block",
  fontSize: "14px",
  fontWeight: 950,
  marginBottom: "4px",
};

const bestFoundText = {
  fontSize: "13px",
  fontWeight: 850,
};

const bestFoundSubtext = {
  marginTop: "3px",
  fontSize: "12px",
  fontWeight: 700,
  opacity: 0.85,
};

const sharePanel = {
  margin: "6px auto 0",
  maxWidth: "820px",
  background: "#ffffff",
  border: "1px solid #ede9fe",
  borderRadius: "12px",
  padding: "10px",
};

const shareHeader = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "12px",
  marginBottom: "10px",
  color: "#111827",
  fontSize: "13px",
};

const copySmallButton = {
  background: "#f8f7ff",
  border: "1px solid #ddd6fe",
  color: "#5b21b6",
  borderRadius: "8px",
  padding: "7px 10px",
  cursor: "pointer",
  fontSize: "11px",
  fontWeight: 900,
};

const premiumNotice = {
  width: "100%",
  textAlign: "left" as const,
  marginBottom: "10px",
  padding: "10px 12px",
  borderRadius: "9px",
  background: "#fff7ed",
  border: "1px solid #fdba74",
  color: "#9a3412",
  fontSize: "12px",
  fontWeight: 850,
  cursor: "pointer",
};

const shareInputRow = {
  display: "grid",
  gridTemplateColumns: "1fr auto",
  gap: "8px",
  alignItems: "center",
};

const shareInput = {
  display: "block",
  minWidth: 0,
  background: "#f8f7ff",
  border: "1px solid #ede9fe",
  borderRadius: "8px",
  padding: "10px 11px",
  color: "#4c1d95",
  fontSize: "12px",
  fontWeight: 800,
  textDecoration: "none",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap" as const,
};

const copyButton = {
  background: "#5b21b6",
  color: "#ffffff",
  border: "none",
  borderRadius: "8px",
  padding: "10px 14px",
  cursor: "pointer",
  fontSize: "12px",
  fontWeight: 950,
};

const calendarActions = {
  display: "flex",
  flexWrap: "wrap" as const,
  gap: "9px",
  marginTop: "12px",
};

const calendarButton = {
  background: "#facc15",
  color: "#111827",
  border: "none",
  borderRadius: "999px",
  padding: "8px 13px",
  cursor: "pointer",
  fontSize: "12px",
  fontWeight: 950,
  boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
};

const viewerTimezone = {
  marginTop: "12px",
  color: "#6b7280",
  fontSize: "11px",
  textAlign: "center" as const,
};

const flagStyle = {
  width: 24,
  height: 16,
  borderRadius: 2,
  objectFit: "cover" as const,
};
