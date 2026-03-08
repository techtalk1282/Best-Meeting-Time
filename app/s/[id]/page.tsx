"use client";

// app/s/[id]/page.tsx

import { useEffect, useState } from "react";

interface ShareData {
  id: string;
  createdAt?: string;
  cities: {
    name: string;
    tz: string;
  }[];
  windows: {
    startUtc: string;
    endUtc: string;
  }[];
}

function formatInTimeZone(utc: string, timeZone: string) {
  return new Date(utc).toLocaleString(undefined, {
    timeZone,
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

export default function SharePage({
  params,
}: {
  params: { id: string };
}) {
  const [data, setData] = useState<ShareData | null>(null);
  const [viewerTz, setViewerTz] = useState<string | null>(null);

  useEffect(() => {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setViewerTz(tz);

    async function load() {
      const res = await fetch(`/api/share/${params.id}`, {
        cache: "no-store",
      });

      if (!res.ok) {
        setData(null);
        return;
      }

      const json = await res.json();
      setData(json);
    }

    load();
  }, [params.id]);

  if (!data) {
    return <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>Loading...</main>;
  }

  return (
    <main style={{ padding: "2rem", maxWidth: 900, fontFamily: "sans-serif" }}>
      <h1>Best Meeting Time</h1>

      <p>
        <strong>Shared Meeting</strong>
      </p>

      {data.createdAt && <p>Created: {formatInTimeZone(data.createdAt, viewerTz || "UTC")}</p>}

      {viewerTz && (
        <p>
          <strong>Your Timezone:</strong> {viewerTz}
        </p>
      )}

      <hr />

      <h2>Cities</h2>
      <ul>
        {data.cities.map((city) => (
          <li key={city.name}>
            {city.name} ({city.tz})
          </li>
        ))}
      </ul>

      <hr />

      <h2>Suggested Time Window(s)</h2>

      {data.windows.map((w, idx) => (
        <div key={idx} style={{ marginBottom: "1.5rem" }}>
          <strong>Option {idx + 1}</strong>

          <div style={{ marginTop: "0.5rem" }}>
            {data.cities.map((city) => (
              <div key={`${idx}-${city.name}`} style={{ marginBottom: "0.35rem" }}>
                <strong>{city.name}:</strong>{" "}
                {formatInTimeZone(w.startUtc, city.tz)} – {formatInTimeZone(w.endUtc, city.tz)}
              </div>
            ))}

            {viewerTz && (
              <div style={{ marginTop: "0.35rem" }}>
                <strong>Your Local Time:</strong>{" "}
                {formatInTimeZone(w.startUtc, viewerTz)} – {formatInTimeZone(w.endUtc, viewerTz)}
              </div>
            )}
          </div>
        </div>
      ))}
    </main>
  );
}
