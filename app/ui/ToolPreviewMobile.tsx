/**
 * File: app/ui/ToolPreviewMobile.tsx
 * Version: v3.0-MOBILE-PREMIUM-REBUILD
 * Date: 2026-05-11
 *
 * Purpose:
 * - Rebuild mobile planner to match current desktop premium/session flow
 * - Remove outdated green timeline layout
 * - Prevent city changes and swaps from consuming planning sessions
 * - Add mobile lock banner, premium success banner, share link, and calendar actions
 *
 * Protected:
 * - No Stripe route changes
 * - No checkout route changes
 * - No webhook route changes
 * - No KV route changes
 * - No premium verification route changes
 *
 * Rollback:
 * - Restore app/ui/ToolPreviewMobile.tsx v2.1 if mobile layout breaks
 */

"use client";

import { useEffect, useMemo, useState } from "react";

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
  startUtc: string;
  endUtc: string;
};

type ToolPreviewMobileProps = {
  cityA: City;
  cityB: City;
  setCityA: (city: City) => void;
  setCityB: (city: City) => void;
  CITY_OPTIONS: City[];
  handlePlannerInteraction: () => boolean;
  startLocal: string;
  endLocal: string;
};

function checkPremiumCookie(): boolean {
  if (typeof document === "undefined") return false;
  return document.cookie.includes("premium=1");
}

function getCountryCode(city: string): string {
  if (city.includes("USA")) return "us";
  if (city.includes("Canada")) return "ca";
  if (city.includes("Mexico")) return "mx";
  if (city.includes("Brazil")) return "br";
  if (city.includes("Argentina")) return "ar";
  if (city.includes("UK")) return "gb";
  if (city.includes("France")) return "fr";
  if (city.includes("Germany")) return "de";
  if (city.includes("Belgium")) return "be";
  if (city.includes("Denmark")) return "dk";
  if (city.includes("Ireland")) return "ie";
  if (city.includes("Finland")) return "fi";
  if (city.includes("Greece")) return "gr";
  if (city.includes("Portugal")) return "pt";
  if (city.includes("Norway")) return "no";
  if (city.includes("Czech Republic")) return "cz";
  if (city.includes("Austria")) return "at";
  if (city.includes("Poland")) return "pl";
  if (city.includes("Turkey")) return "tr";
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
  if (city.includes("Egypt")) return "eg";
  if (city.includes("Morocco")) return "ma";
  if (city.includes("Qatar")) return "qa";
  if (city.includes("Nigeria")) return "ng";
  if (city.includes("India")) return "in";
  if (city.includes("Singapore")) return "sg";
  if (city.includes("Hong Kong")) return "hk";
  if (city.includes("China")) return "cn";
  if (city.includes("Japan")) return "jp";
  if (city.includes("South Korea")) return "kr";
  if (city.includes("Thailand")) return "th";
  if (city.includes("Indonesia")) return "id";
  if (city.includes("Pakistan")) return "pk";
  if (city.includes("Malaysia")) return "my";
  if (city.includes("Philippines")) return "ph";
  if (city.includes("Taiwan")) return "tw";
  if (city.includes("Vietnam")) return "vn";
  if (city.includes("Australia")) return "au";
  if (city.includes("New Zealand")) return "nz";

  return "un";
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

function getTimeZoneAbbreviation(date: Date, timeZone: string): string {
  const raw = new Intl.DateTimeFormat("en-US", {
    timeZone,
    timeZoneName: "short",
  })
    .formatToParts(date)
    .find((part) => part.type === "timeZoneName")?.value;

  return normalizeTimeZoneLabel(raw);
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

export default function ToolPreviewMobile(props: ToolPreviewMobileProps) {
  const {
    cityA,
    cityB,
    setCityA,
    setCityB,
    CITY_OPTIONS,
    handlePlannerInteraction,
  } = props;

  const [now, setNow] = useState<Date | null>(null);
  const [hasCalculated, setHasCalculated] = useState(false);
  const [isPremium, setIsPremium] = useState(false);
  const [isLocked, setIsLocked] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [premiumMessage, setPremiumMessage] = useState<string | null>(null);
  const [shareUrl, setShareUrl] = useState<string | null>(null);
  const [shareCopied, setShareCopied] = useState(false);

  useEffect(() => {
    const premiumCookie = checkPremiumCookie();

    setIsPremium(premiumCookie);

    if (premiumCookie) {
      setSuccessMessage("10 Premium Planning Sessions Activated");
    }

    const freeUsed = parseInt(
      localStorage.getItem("free_sessions_used") || "0",
      10
    );

    const premiumUsed = parseInt(
      localStorage.getItem("premium_sessions_used") || "0",
      10
    );

    if (premiumCookie && premiumUsed >= 10) {
      setIsLocked(true);
      setSuccessMessage(null);
    } else if (!premiumCookie && freeUsed >= 4) {
      setIsLocked(true);
    } else {
      setIsLocked(false);
    }

    setNow(new Date());

    const timer = window.setInterval(() => {
      setNow(new Date());
    }, 60000);

    return () => window.clearInterval(timer);
  }, []);

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
        startUtc: firstStart,
        endUtc: firstEnd,
      },
      {
        label: "Strong overlap",
        startUtc: secondStart,
        endUtc: secondEnd,
      },
      {
        label: "Still workable",
        startUtc: thirdStart,
        endUtc: thirdEnd,
      },
      {
        label: "Backup option",
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

  function scrollToUpgrade() {
    const el = document.getElementById("premium-features");

    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  function requirePremiumFeature(): boolean {
    const premiumCookie = checkPremiumCookie();

    if (!premiumCookie) {
      setPremiumMessage("Unlock 10 Premium Planning Sessions for $7 below");
      scrollToUpgrade();
      return false;
    }

    setPremiumMessage(null);
    return true;
  }

  function handleContinueFreeBonus() {
    document.cookie = "premium=; path=/; max-age=0";
    setIsPremium(false);
    setSuccessMessage(null);

    const freeUsed = parseInt(
      localStorage.getItem("free_sessions_used") || "0",
      10
    );

    const adjustedFreeUsed = Math.max(0, freeUsed - 2);

    localStorage.setItem("free_sessions_used", String(adjustedFreeUsed));
    setIsLocked(false);
    setPremiumMessage(null);
  }

  function handleFindBestTime() {
    const wasBlocked = handlePlannerInteraction();

    if (wasBlocked) {
      const premiumCookie = checkPremiumCookie();
      const freeUsed = parseInt(
        localStorage.getItem("free_sessions_used") || "0",
        10
      );
      const premiumUsed = parseInt(
        localStorage.getItem("premium_sessions_used") || "0",
        10
      );

      setIsPremium(premiumCookie);

      if (premiumCookie && premiumUsed >= 10) {
        setSuccessMessage(null);
        setIsLocked(true);
      } else if (!premiumCookie && freeUsed >= 4) {
        setIsLocked(true);
      }

      return;
    }

    setPremiumMessage(null);
    setHasCalculated(true);
  }

  async function handleCheckout() {
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
      });

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      }
    } catch (err) {
      console.error("Checkout redirect failed:", err);
    }
  }

  async function handleShareLink() {
    if (!requirePremiumFeature()) return;

    try {
      let finalShareUrl = shareUrl;

      if (!finalShareUrl) {
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

        if (!res.ok) {
          throw new Error("Share API request failed");
        }

        const data = await res.json();

        if (!data?.url) {
          throw new Error("Share URL generation failed");
        }

        finalShareUrl = `${window.location.origin}${data.url}`;
        setShareUrl(finalShareUrl);
      }

      try {
        await navigator.clipboard.writeText(finalShareUrl);
        setShareCopied(true);
        setPremiumMessage(
          "Share link copied. Premium planning session tools are active."
        );
      } catch {
        setPremiumMessage(
          "Share link created. Premium planning session tools are active."
        );
      }

      setTimeout(() => {
        setShareCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Share error:", err);
      setPremiumMessage("Share link could not be created. Please try again.");
    }
  }

  function handleGoogleCalendar() {
    if (!requirePremiumFeature()) return;

    const start =
      selectedWindow.startUtc.replace(/[-:]/g, "").split(".")[0] + "Z";
    const end = selectedWindow.endUtc.replace(/[-:]/g, "").split(".")[0] + "Z";

    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      "Meeting: " + cityA.name + " ↔ " + cityB.name
    )}&dates=${start}/${end}&details=${encodeURIComponent(
      "Suggested meeting window"
    )}`;

    window.open(url, "_blank");
  }

  function handleOutlookCalendar() {
    if (!requirePremiumFeature()) return;

    const url = `https://outlook.live.com/calendar/0/deeplink/compose?subject=${encodeURIComponent(
      "Meeting: " + cityA.name + " ↔ " + cityB.name
    )}&startdt=${selectedWindow.startUtc}&enddt=${
      selectedWindow.endUtc
    }&body=${encodeURIComponent("Suggested meeting window")}`;

    window.open(url, "_blank");
  }

  function handleAppleCalendar() {
    if (!requirePremiumFeature()) return;

    const url = `/api/calendar?cityA=${encodeURIComponent(
      cityA.name
    )}&cityB=${encodeURIComponent(cityB.name)}&start=${
      selectedWindow.startUtc
    }&end=${selectedWindow.endUtc}`;

    window.open(url, "_blank");
  }

  return (
    <section style={mobileShell}>
      {successMessage && <div style={successBanner}>{successMessage}</div>}

      {isLocked && (
        <div style={lockedBanner}>
          <div style={lockedTitle}>
            {isPremium
              ? "You’ve used your 10 premium planning sessions"
              : "You’ve used your 4 free planning sessions"}
          </div>

          <div style={lockedActions}>
            <button type="button" onClick={handleCheckout} style={unlockButton}>
              <span style={unlockButtonMain}>
                Unlock 10 Premium Planning Sessions ($7)
              </span>
              <span style={unlockButtonSubtext}>
                Share Links • Google Calendar • Outlook • Apple Calendar
              </span>
            </button>

            <button
              type="button"
              onClick={handleContinueFreeBonus}
              style={secondaryButton}
            >
              <span style={secondaryButtonMain}>
                Continue Free — Watch Ad for 2 More Sessions
              </span>
              <span style={secondaryButtonSubtext}>
                Planner access only • No Share Links or Calendar exports
              </span>
            </button>
          </div>
        </div>
      )}

      <div style={mobileCityCard}>
        <div style={cityNameLine}>
          <span>{cityA.name}</span>
          <Flag city={cityA.name} />
        </div>

        <span style={currentTimeLabel}>Current Time</span>

        <strong style={liveTime}>
          {cityATime} {cityATZ}
        </strong>

        <span style={localDate}>{cityADate}</span>

        <select
          value={cityA.name}
          onChange={(event) => {
            const city = CITY_OPTIONS.find(
              (item) => item.name === event.target.value
            );

            if (city) {
              setCityA(city);
            }
          }}
          style={selectInput}
        >
          {CITY_OPTIONS.map((city) => (
            <option key={city.name} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>
      </div>

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

      <div style={mobileCityCard}>
        <div style={cityNameLine}>
          <span>{cityB.name}</span>
          <Flag city={cityB.name} />
        </div>

        <span style={currentTimeLabel}>Current Time</span>

        <strong style={liveTime}>
          {cityBTime} {cityBTZ}
        </strong>

        <span style={localDate}>{cityBDate}</span>

        <select
          value={cityB.name}
          onChange={(event) => {
            const city = CITY_OPTIONS.find(
              (item) => item.name === event.target.value
            );

            if (city) {
              setCityB(city);
            }
          }}
          style={selectInput}
        >
          {CITY_OPTIONS.map((city) => (
            <option key={city.name} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>
      </div>

      <div style={meetingDurationNotice}>
        Recommended for standard 60-minute meetings
      </div>

      <button type="button" onClick={handleFindBestTime} style={findButton}>
        Find Best Time
      </button>

      {hasCalculated && (
        <section style={resultsAndToolsPanel}>
          <div style={meetingSectionHeader}>Recommended meeting windows</div>

          <div style={meetingCardColumn}>
            {meetingOptions.map((option, index) => {
              const startA = formatTimeInZone(option.startUtc, cityA.tz);
              const endA = formatTimeInZone(option.endUtc, cityA.tz);
              const startB = formatTimeInZone(option.startUtc, cityB.tz);
              const endB = formatTimeInZone(option.endUtc, cityB.tz);

              return (
                <div key={option.label} style={compactMeetingCard}>
                  <strong style={compactMeetingTitle}>
                    {index === 0 ? "Recommended" : `Alternate ${index}`}
                  </strong>

                  <span style={compactMeetingLabel}>{option.label}</span>

                  <span style={compactMeetingTime}>
                    {cityA.name}: {startA} – {endA}
                  </span>

                  <span style={compactMeetingTime}>
                    {cityB.name}: {startB} – {endB}
                  </span>
                </div>
              );
            })}
          </div>

          <div style={compactPremiumTools}>
            <div style={shareHeader}>
              <strong>Premium Planning Session Tools</strong>

              {premiumMessage && (
                <button
                  type="button"
                  onClick={scrollToUpgrade}
                  style={premiumNotice}
                >
                  {premiumMessage}
                </button>
              )}
            </div>

            <div style={premiumToolColumn}>
              <button
                type="button"
                onClick={handleShareLink}
                style={calendarButton}
              >
                {shareCopied ? "Copied!" : "Share Link"}
              </button>

              <button
                type="button"
                onClick={handleGoogleCalendar}
                style={calendarButton}
              >
                Add to Google
              </button>

              <button
                type="button"
                onClick={handleOutlookCalendar}
                style={calendarButton}
              >
                Add to Outlook
              </button>

              <button
                type="button"
                onClick={handleAppleCalendar}
                style={calendarButton}
              >
                Add to Apple Calendar
              </button>
            </div>

            {shareUrl && (
              <a
                href={shareUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={shareInput}
              >
                {shareUrl.replace(/^https?:\/\//, "")}
              </a>
            )}
          </div>
        </section>
      )}
    </section>
  );
}

const mobileShell = {
  width: "100%",
  maxWidth: "520px",
  margin: "0 auto",
  display: "grid",
  gap: "12px",
};

const successBanner = {
  padding: "12px 14px",
  borderRadius: "10px",
  background: "#f3e8ff",
  border: "1px solid #c4b5fd",
  color: "#4c1d95",
  fontSize: "13px",
  fontWeight: 900,
  boxShadow: "0 6px 16px rgba(76,29,149,0.10)",
};

const lockedBanner = {
  padding: "14px",
  borderRadius: "12px",
  background: "#ede9fe",
  border: "1px solid #c4b5fd",
  boxShadow: "0 6px 16px rgba(76,29,149,0.10)",
};

const lockedTitle = {
  fontSize: "14px",
  fontWeight: 950,
  color: "#1f1147",
  marginBottom: "10px",
};

const lockedActions = {
  display: "grid",
  gap: "10px",
};

const unlockButton = {
  border: "none",
  borderRadius: "16px",
  background: "#5b21b6",
  color: "#ffffff",
  fontSize: "12px",
  fontWeight: 950,
  padding: "12px 14px",
  cursor: "pointer",
  boxShadow: "0 8px 18px rgba(91,33,182,0.35)",
};

const unlockButtonMain = {
  display: "block",
  lineHeight: 1.2,
};

const unlockButtonSubtext = {
  display: "block",
  marginTop: "4px",
  color: "#fef3c7",
  fontSize: "10px",
  fontWeight: 800,
  lineHeight: 1.2,
};

const secondaryButton = {
  border: "1px solid #c4b5fd",
  borderRadius: "16px",
  background: "#ede9fe",
  color: "#4c1d95",
  fontSize: "12px",
  fontWeight: 900,
  padding: "12px 14px",
  cursor: "pointer",
};

const secondaryButtonMain = {
  display: "block",
  lineHeight: 1.2,
};

const secondaryButtonSubtext = {
  display: "block",
  marginTop: "4px",
  color: "#6b7280",
  fontSize: "10px",
  fontWeight: 800,
  lineHeight: 1.2,
};

const mobileCityCard = {
  background: "#f8f7ff",
  border: "1px solid #ddd6fe",
  borderRadius: "14px",
  padding: "14px",
  display: "grid",
  gap: "8px",
  boxShadow: "0 10px 28px rgba(0,0,0,0.10)",
};

const cityNameLine = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "10px",
  color: "#111827",
  fontSize: "14px",
  fontWeight: 950,
};

const flagStyle = {
  width: "30px",
  height: "22px",
  borderRadius: "3px",
  objectFit: "cover" as const,
  boxShadow: "0 1px 2px rgba(0,0,0,0.2)",
};

const currentTimeLabel = {
  display: "block",
  color: "#6b7280",
  fontSize: "10px",
  fontWeight: 900,
  textTransform: "uppercase" as const,
  letterSpacing: "0.04em",
};

const liveTime = {
  display: "block",
  color: "#020617",
  fontSize: "28px",
  lineHeight: 1,
  fontWeight: 950,
};

const localDate = {
  display: "block",
  color: "#4b5563",
  fontSize: "12px",
  fontWeight: 800,
};

const selectInput = {
  width: "100%",
  height: "46px",
  border: "1px solid #ddd6fe",
  borderRadius: "10px",
  background: "#ffffff",
  color: "#111827",
  fontSize: "14px",
  fontWeight: 900,
  padding: "0 12px",
};

const swapButton = {
  height: "46px",
  border: "1px solid #d8ccff",
  borderRadius: "10px",
  background: "#ede9fe",
  color: "#4c1d95",
  fontSize: "13px",
  fontWeight: 950,
  cursor: "pointer",
  boxShadow: "0 3px 8px rgba(76,29,149,0.12)",
};

const meetingDurationNotice = {
  textAlign: "center" as const,
  color: "#6b7280",
  fontSize: "12px",
  fontWeight: 800,
  padding: "4px 0 2px",
};

const findButton = {
  height: "48px",
  border: "none",
  borderRadius: "10px",
  background: "#5b21b6",
  color: "#ffffff",
  fontSize: "15px",
  fontWeight: 950,
  cursor: "pointer",
  boxShadow: "0 14px 32px rgba(91,33,182,0.35)",
};

const resultsAndToolsPanel = {
  background: "#ffffff",
  border: "1px solid #ede9fe",
  borderRadius: "14px",
  padding: "12px",
  boxShadow: "0 12px 32px rgba(0,0,0,0.10)",
};

const meetingSectionHeader = {
  color: "#4c1d95",
  fontSize: "14px",
  fontWeight: 950,
  marginBottom: "10px",
};

const meetingCardColumn = {
  display: "grid",
  gap: "10px",
};

const compactMeetingCard = {
  padding: "10px",
  border: "1px solid #ede9fe",
  borderRadius: "12px",
  background: "#f8f7ff",
  display: "grid",
  gap: "5px",
};

const compactMeetingTitle = {
  color: "#4c1d95",
  fontSize: "13px",
  fontWeight: 950,
};

const compactMeetingLabel = {
  color: "#6b7280",
  fontSize: "11px",
  fontWeight: 900,
};

const compactMeetingTime = {
  color: "#111827",
  fontSize: "11px",
  fontWeight: 800,
  lineHeight: 1.3,
};

const compactPremiumTools = {
  marginTop: "10px",
  paddingTop: "10px",
  borderTop: "1px solid #ede9fe",
};

const shareHeader = {
  display: "grid",
  gap: "6px",
  marginBottom: "10px",
  color: "#111827",
  fontSize: "14px",
};

const premiumToolColumn = {
  display: "grid",
  gap: "9px",
};

const calendarButton = {
  border: "none",
  borderRadius: "999px",
  background: "#facc15",
  color: "#111827",
  fontSize: "12px",
  fontWeight: 950,
  padding: "10px 14px",
  cursor: "pointer",
  boxShadow: "0 8px 18px rgba(202,138,4,0.22)",
};

const premiumNotice = {
  border: "1px solid #c4b5fd",
  borderRadius: "10px",
  background: "#ede9fe",
  color: "#111827",
  padding: "8px 12px",
  fontSize: "12px",
  fontWeight: 900,
  cursor: "pointer",
};

const shareInput = {
  display: "block",
  marginTop: "10px",
  padding: "10px 12px",
  borderRadius: "10px",
  background: "#f8f7ff",
  border: "1px solid #ede9fe",
  color: "#4c1d95",
  fontSize: "12px",
  fontWeight: 900,
  textDecoration: "none",
  wordBreak: "break-word" as const,
};
