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
 * ROLLBACK:f
 * - Restore previous app/ui/ToolPreviewSection.tsx vSTABLE-2.0 baseline
 */

"use client";

import { useEffect, useMemo, useRef, useState } from "react";
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
 { name: "Atlanta, USA", time: "", tz: "America/New_York" },
  { name: "Austin, USA", time: "", tz: "America/Chicago" },
  { name: "Boston, USA", time: "", tz: "America/New_York" },
  { name: "Chicago, USA", time: "", tz: "America/Chicago" },
  { name: "Dallas, USA", time: "", tz: "America/Chicago" },
  { name: "Denver, USA", time: "", tz: "America/Denver" },
  { name: "Houston, USA", time: "", tz: "America/Chicago" },
  { name: "Las Vegas, USA", time: "", tz: "America/Los_Angeles" },
  { name: "Los Angeles, USA", time: "", tz: "America/Los_Angeles" },
  { name: "Miami, USA", time: "", tz: "America/New_York" },
  { name: "Nashville, USA", time: "", tz: "America/Chicago" },
  { name: "New York, USA", time: "", tz: "America/New_York" },
  { name: "Orlando, USA", time: "", tz: "America/New_York" },
  { name: "Philadelphia, USA", time: "", tz: "America/New_York" },
  { name: "Phoenix, USA", time: "", tz: "America/Phoenix" },
  { name: "Portland, USA", time: "", tz: "America/Los_Angeles" },
  { name: "San Francisco, USA", time: "", tz: "America/Los_Angeles" },
  { name: "Seattle, USA", time: "", tz: "America/Los_Angeles" },
{ name: "Washington DC, USA", time: "", tz: "America/New_York" },

  { name: "Calgary, Canada", time: "", tz: "America/Edmonton" },
  { name: "Montreal, Canada", time: "", tz: "America/Toronto" },
  { name: "Ottawa, Canada", time: "", tz: "America/Toronto" },
  { name: "Toronto, Canada", time: "", tz: "America/Toronto" },
  { name: "Vancouver, Canada", time: "", tz: "America/Vancouver" },

  { name: "Guadalajara, Mexico", time: "", tz: "America/Mexico_City" },
  { name: "Mexico City, Mexico", time: "", tz: "America/Mexico_City" },
  { name: "Monterrey, Mexico", time: "", tz: "America/Monterrey" },

  { name: "São Paulo, Brazil", time: "", tz: "America/Sao_Paulo" },
  {
    name: "Buenos Aires, Argentina",
    time: "",
    tz: "America/Argentina/Buenos_Aires",
  },

{ name: "Amsterdam, Netherlands", time: "", tz: "Europe/Amsterdam" },
  { name: "Athens, Greece", time: "", tz: "Europe/Athens" },
  { name: "Berlin, Germany", time: "", tz: "Europe/Berlin" },
  { name: "Brussels, Belgium", time: "", tz: "Europe/Brussels" },
  { name: "Copenhagen, Denmark", time: "", tz: "Europe/Copenhagen" },
  { name: "Dublin, Ireland", time: "", tz: "Europe/Dublin" },
  { name: "Helsinki, Finland", time: "", tz: "Europe/Helsinki" },
  { name: "Istanbul, Turkey", time: "", tz: "Europe/Istanbul" },
  { name: "Lisbon, Portugal", time: "", tz: "Europe/Lisbon" },
  { name: "London, UK", time: "", tz: "Europe/London" },
  { name: "Madrid, Spain", time: "", tz: "Europe/Madrid" },
  { name: "Oslo, Norway", time: "", tz: "Europe/Oslo" },
  { name: "Paris, France", time: "", tz: "Europe/Paris" },
  { name: "Prague, Czech Republic", time: "", tz: "Europe/Prague" },
  { name: "Rome, Italy", time: "", tz: "Europe/Rome" },
  { name: "Stockholm, Sweden", time: "", tz: "Europe/Stockholm" },
  { name: "Vienna, Austria", time: "", tz: "Europe/Vienna" },
  { name: "Warsaw, Poland", time: "", tz: "Europe/Warsaw" },
  { name: "Zurich, Switzerland", time: "", tz: "Europe/Zurich" },

  { name: "Abu Dhabi, UAE", time: "", tz: "Asia/Dubai" },
  { name: "Cairo, Egypt", time: "", tz: "Africa/Cairo" },
  { name: "Cape Town, South Africa", time: "", tz: "Africa/Johannesburg" },
  { name: "Casablanca, Morocco", time: "", tz: "Africa/Casablanca" },
  { name: "Doha, Qatar", time: "", tz: "Asia/Qatar" },
  { name: "Dubai, UAE", time: "", tz: "Asia/Dubai" },
  { name: "Johannesburg, South Africa", time: "", tz: "Africa/Johannesburg" },
  { name: "Lagos, Nigeria", time: "", tz: "Africa/Lagos" },
  { name: "Nairobi, Kenya", time: "", tz: "Africa/Nairobi" },
  { name: "Riyadh, Saudi Arabia", time: "", tz: "Asia/Riyadh" },
  { name: "Tel Aviv, Israel", time: "", tz: "Asia/Jerusalem" },

  { name: "Bangalore, India", time: "", tz: "Asia/Kolkata" },
  { name: "Delhi, India", time: "", tz: "Asia/Kolkata" },
  { name: "Hyderabad, India", time: "", tz: "Asia/Kolkata" },
  { name: "Mumbai, India", time: "", tz: "Asia/Kolkata" },

  { name: "Bangkok, Thailand", time: "", tz: "Asia/Bangkok" },
  { name: "Beijing, China", time: "", tz: "Asia/Shanghai" },
  { name: "Hanoi, Vietnam", time: "", tz: "Asia/Bangkok" },
  { name: "Ho Chi Minh City, Vietnam", time: "", tz: "Asia/Bangkok" },
  { name: "Hong Kong", time: "", tz: "Asia/Hong_Kong" },
  { name: "Jakarta, Indonesia", time: "", tz: "Asia/Jakarta" },
  { name: "Karachi, Pakistan", time: "", tz: "Asia/Karachi" },
  { name: "Kuala Lumpur, Malaysia", time: "", tz: "Asia/Kuala_Lumpur" },
  { name: "Lahore, Pakistan", time: "", tz: "Asia/Karachi" },
  { name: "Manila, Philippines", time: "", tz: "Asia/Manila" },
  { name: "Osaka, Japan", time: "", tz: "Asia/Tokyo" },
  { name: "Seoul, South Korea", time: "", tz: "Asia/Seoul" },
  { name: "Shanghai, China", time: "", tz: "Asia/Shanghai" },
  { name: "Singapore", time: "", tz: "Asia/Singapore" },
  { name: "Taipei, Taiwan", time: "", tz: "Asia/Taipei" },
  { name: "Tokyo, Japan", time: "", tz: "Asia/Tokyo" },
  { name: "Sydney, Australia", time: "", tz: "Australia/Sydney" },
  { name: "Melbourne, Australia", time: "", tz: "Australia/Melbourne" },
  { name: "Brisbane, Australia", time: "", tz: "Australia/Brisbane" },
  { name: "Perth, Australia", time: "", tz: "Australia/Perth" },
  { name: "Auckland, New Zealand", time: "", tz: "Pacific/Auckland" },
];

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

  const [citySearchA, setCitySearchA] = useState("");
  const [showCityDropdownA, setShowCityDropdownA] = useState(false);

  const [citySearchB, setCitySearchB] = useState("");
  const [showCityDropdownB, setShowCityDropdownB] = useState(false);

  
 
  const [now, setNow] = useState<Date | null>(null);

  const [shareUrl, setShareUrl] = useState<string | null>(null);
  const [shareCopied, setShareCopied] = useState(false);
  const [premiumMessage, setPremiumMessage] = useState<string | null>(null);
 const [successMessage, setSuccessMessage] = useState<string | null>(null);
const [hasCalculated, setHasCalculated] = useState(false);

const [isMobile, setIsMobile] = useState(false);

const cityDropdownRefA = useRef<HTMLDivElement | null>(null);
const cityDropdownRefB = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const check = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    check();
    window.addEventListener("resize", check);

    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        cityDropdownRefA.current &&
        !cityDropdownRefA.current.contains(event.target as Node)
      ) {
        setShowCityDropdownA(false);
      }

      if (
        cityDropdownRefB.current &&
        !cityDropdownRefB.current.contains(event.target as Node)
      ) {
        setShowCityDropdownB(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []); 

function scrollToUpgrade() {
    const el = document.getElementById("premium-features");

    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  function requirePremiumFeature(): boolean {
  const premiumCookie = checkPremiumCookie();
    

    
  if (!premiumCookie) {
      setPremiumMessage(
  "Unlock 10 Premium Planning Sessions for $7 below"
);
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
      localStorage.setItem("premium_sessions_used", "0");
      setIsPremium(true);
      setIsLocked(false);
      setSuccessMessage("10 Premium Planning Sessions Unlocked");
      window.history.replaceState({}, "", window.location.pathname);
    }
  }, []);

  useEffect(() => {
     const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const premiumCookie = checkPremiumCookie();

    setViewerTZ(tz);
    setIsPremium(premiumCookie);

    if (premiumCookie) {
    setSuccessMessage("10 Premium Planning Sessions Activated");
    }

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

      if (premiumUsed >= 10) {
        setIsLocked(true);
        setSuccessMessage(null);
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

    const filteredCitiesA = CITY_OPTIONS.filter((city) =>
    city.name.toLowerCase().includes(citySearchA.toLowerCase())
  );

  const filteredCitiesB = CITY_OPTIONS.filter((city) =>
    city.name.toLowerCase().includes(citySearchB.toLowerCase())
  );

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
      {successMessage && <div style={successBanner}>{successMessage}</div>}

      {isLocked && (
  <div style={lockedBanner}>
    <div style={{ display: "grid", gap: "10px" }}>
      <div>
        <div style={lockedTitle}>
          {isPremium
           ? "You’ve used your 10 premium planning sessions"
            : "You’ve used your 4 free planning sessions"}
        </div>

        
      </div>

      <div style={lockedActions}>
 <button
          type="button"
         onClick={async () => {
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
}}
          style={unlockButton}
        >
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
  </div>
)}

      <div style={toolLayout}>
        <div style={citySelectorGrid}>
          <div style={cityToolCard}>
            <div style={cityNameLine}>
              <span>{cityA.name}</span>
              <Flag city={cityA.name} />
            </div>

            <span style={currentTimeLabel}>Current Time</span>

            <strong style={liveTime}>
              {cityATime} {cityATZ}
            </strong>

            <span style={localDate}>{cityADate}</span>

            <div ref={cityDropdownRefA} style={searchableDropdownWrap}>
              <input
                type="text"
                value={citySearchA}
                placeholder={cityA.name}
                onFocus={() => setShowCityDropdownA(true)}
                onChange={(event) => {
                  setCitySearchA(event.target.value);
                  setShowCityDropdownA(true);
                }}
                style={searchInput}
              />

              {showCityDropdownA && (
                <div style={searchDropdownMenu}>
                  {filteredCitiesA.slice(0, 12).map((city) => (
                    <button
                      key={city.name}
                      type="button"
                      onClick={() => {
                        if (handlePlannerInteraction()) return;

                        setCityA(city);
                        setCitySearchA("");
                        setShowCityDropdownA(false);
                      }}
                      style={searchDropdownItem}
                    >
                      {city.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div style={swapColumn}>
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
          </div>

          <div style={cityToolCard}>
            <div style={cityNameLine}>
              <span>{cityB.name}</span>
              <Flag city={cityB.name} />
            </div>

            <span style={currentTimeLabel}>Current Time</span>

            <strong style={liveTime}>
              {cityBTime} {cityBTZ}
            </strong>

            <span style={localDate}>{cityBDate}</span>

              <div ref={cityDropdownRefB} style={searchableDropdownWrap}>
              <input
                type="text"
                value={citySearchB}
                placeholder={cityB.name}
                onFocus={() => setShowCityDropdownB(true)}
                onChange={(event) => {
                  setCitySearchB(event.target.value);
                  setShowCityDropdownB(true);
                }}
                style={searchInput}
              />

              {showCityDropdownB && (
                <div style={searchDropdownMenu}>
                  {filteredCitiesB.slice(0, 12).map((city) => (
                    <button
                      key={city.name}
                      type="button"
                      onClick={() => {
                        if (handlePlannerInteraction()) return;

                        setCityB(city);
                        setCitySearchB("");
                        setShowCityDropdownB(false);
                      }}
                      style={searchDropdownItem}
                    >
                      {city.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div style={actionControls}>
          <div style={meetingDurationNotice}>
            Recommended for standard 60-minute meetings
          </div>

          <button
            type="button"
            onClick={() => {
              if (handlePlannerInteraction()) return;

              setPremiumMessage(null);
              setHasCalculated(true);
            }}
            style={findButton}
          >
            Find Best Time
          </button>
        </div>

     {hasCalculated && (
          <section style={resultsAndToolsPanel}>
            <div style={meetingSectionHeader}>Recommended meeting windows</div>

            <div style={meetingCardRow}>
              {meetingOptions.map((option, index) => {
                const startA = formatTimeInZone(option.startUtc, cityA.tz);
                const endA = formatTimeInZone(option.endUtc, cityA.tz);
                const startB = formatTimeInZone(option.startUtc, cityB.tz);
                const endB = formatTimeInZone(option.endUtc, cityB.tz);

                return (
                  <div key={option.label} style={compactMeetingCard}>
                    <strong style={compactMeetingTitle}>
                      {index === 0
                        ? "Recommended"
                        : `Alternate ${index}`}
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

              <div style={premiumToolRow}>
                <button
                  type="button"
                  onClick={async () => {
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
                  }}
                  style={calendarButton}
                >
                  {shareCopied ? "Copied!" : "Share Link"}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    if (!requirePremiumFeature()) return;

                    const start =
                      selectedWindow.startUtc.replace(/[-:]/g, "").split(".")[0] +
                      "Z";
                    const end =
                      selectedWindow.endUtc.replace(/[-:]/g, "").split(".")[0] +
                      "Z";

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

        {viewerTZ && (
          <div style={viewerTimezone}>
            Your detected time zone: <strong>{viewerTZ}</strong>
          </div>
        )}
      </div>
    </section>
  );
}
/* STYLES */

const toolShell = {
  width: "100%",
  maxWidth: "1180px",
  margin: "-42px auto 0",
  padding: "12px 16px 10px",
  background: "#ffffff",
  border: "1px solid #ede9fe",
  borderRadius: "18px",
  color: "#111827",
  boxShadow: "0 28px 70px rgba(0,0,0,0.28)",
};

const successBanner = {
  marginBottom: "12px",
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
  marginBottom: "12px",
  padding: "14px 16px",
  borderRadius: "12px",
  background: "#ede9fe",
  border: "1px solid #c4b5fd",
  boxShadow: "0 6px 16px rgba(76,29,149,0.10)",
};

const lockedTitle = {
  fontSize: "14px",
  fontWeight: 950,
  color: "#1f1147",
};

const lockedText = {
  marginTop: "3px",
  fontSize: "12px",
  color: "#6b7280",
};
const lockedActions = {
  display: "flex",
  gap: "10px",
  flexWrap: "wrap" as const,
};
const unlockButton = {
  border: "none",
  borderRadius: "999px",
  background: "#5b21b6",
  color: "#ffffff",
  fontSize: "12px",
  fontWeight: 950,
  padding: "10px 16px",
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

const secondaryButton = {
  border: "1px solid #c4b5fd",
  borderRadius: "999px",
  background: "#ede9fe",
  color: "#4c1d95",
  fontSize: "12px",
  fontWeight: 900,
  padding: "10px 16px",
  cursor: "pointer",
};
const toolLayout = {
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "8px",
};

const citySelectorGrid = {
  display: "grid",
  gridTemplateColumns: "1fr auto 1fr",
  gap: "12px",
  alignItems: "stretch",
};

const cityToolCard = {
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

const swapColumn = {
  display: "flex",
  alignItems: "end",
  justifyContent: "center",
};

const swapButton = {
  height: "46px",
  minWidth: "150px",
  border: "1px solid #d8ccff",
  borderRadius: "10px",
  background: "#ede9fe",
  color: "#4c1d95",
  fontSize: "13px",
  fontWeight: 950,
  cursor: "pointer",
  boxShadow: "0 3px 8px rgba(76,29,149,0.12)",
};

const actionControls = {
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "10px",
  maxWidth: "420px",
  margin: "0 auto",
  width: "100%",
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

const meetingSectionHeader = {
  color: "#4c1d95",
  fontSize: "14px",
  fontWeight: 950,
  marginBottom: "10px",
};
const shareHeader = {
  display: "grid",
  gap: "6px",
  marginBottom: "10px",
  color: "#111827",
  fontSize: "14px",
};

const premiumToolRow = {
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap" as const,
  gap: "9px",
};

const shareInput = {
  display: "block",
  marginTop: "10px",
  padding: "10px 12px",
  borderRadius: "10px",
  background: "#f8f7ff",
  border: "1px solid #ede9fe",
  color: "#4c1d95",
  fontSize: "13px",
  fontWeight: 900,
  textDecoration: "none",
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

const searchableDropdownWrap = {
  position: "relative" as const,
};

const searchInput = {
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

const searchDropdownMenu = {
  position: "absolute" as const,
  top: "52px",
  left: 0,
  right: 0,
  maxHeight: "260px",
  overflowY: "auto" as const,
  background: "#ffffff",
  border: "1px solid #ddd6fe",
  borderRadius: "12px",
  boxShadow: "0 12px 32px rgba(0,0,0,0.14)",
  zIndex: 50,
};

const searchDropdownItem = {
  width: "100%",
  border: "none",
  borderBottom: "1px solid #f3f4f6",
  background: "#ffffff",
  color: "#111827",
  textAlign: "left" as const,
  padding: "12px 14px",
  fontSize: "14px",
  fontWeight: 800,
  cursor: "pointer",
};
const resultsAndToolsPanel = {
  background: "#ffffff",
  border: "1px solid #ede9fe",
  borderRadius: "14px",
  padding: "12px",
  boxShadow: "0 12px 32px rgba(0,0,0,0.10)",
};

const meetingCardRow = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "10px",
};

const compactMeetingCard = {
  padding: "10px",
  border: "1px solid #ede9fe",
  borderRadius: "12px",
  background: "#f8f7ff",
  display: "grid",
  gap: "5px",
  minHeight: "118px",
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
const viewerTimezone = {
  textAlign: "center" as const,
  color: "#6b7280",
  fontSize: "12px",
};
