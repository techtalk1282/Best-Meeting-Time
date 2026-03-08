"use client";

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
  const [viewerTz, setViewerTz] = useState<string>("UTC");

  useEffect(() => {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setViewerTz(tz);

    async function load() {
      const res = await fetch(`/api/share/${params.id}`, {
        cache: "no-store",
      });

      if (!res.ok) return;

      const json = await res.json();
      setData(json);
    }

    load();
  }, [params.id]);

  if (!data) {
    return <main style={{ padding: "2rem" }}>Loading...</main>;
  }

  return (
    <main style={{ padding: "2rem", maxWidth: 900, fontFamily: "sans-serif" }}>
      <h1>Best Meeting Time</h1>

      <p>
        <strong>Shared Meeting</strong>
      </p>

      {data.createdAt && (
        <p>
          Created: {formatInTimeZone(data.createdAt, viewerTz)}
        </p>
      )}

      <p>
        <strong>Your Timezone:</strong> {viewerTz}
      </p>

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
        <div key={idx} style={{ marginBottom: "2rem" }}>
          <strong>Option {idx + 1}</strong>

          <table
            style={{
              marginTop: 10,
              borderCollapse: "collapse",
              width: "100%",
              maxWidth: 600,
            }}
          >
            <tbody>
              {data.cities.map((city) => (
                <tr key={city.name}>
                  <td style={{ padding: "6px 10px", fontWeight: "bold" }}>
                    {city.name}
                  </td>

                  <td style={{ padding: "6px 10px" }}>
                    {formatInTimeZone(w.startUtc, city.tz)}
                  </td>

                  <td style={{ padding: "6px 10px" }}>
                    {formatInTimeZone(w.endUtc, city.tz)}
                  </td>
                </tr>
              ))}

              <tr>
                <td style={{ padding: "6px 10px", fontWeight: "bold" }}>
                  Your Local Time
                </td>

                <td style={{ padding: "6px 10px" }}>
                  {formatInTimeZone(w.startUtc, viewerTz)}
                </td>

                <td style={{ padding: "6px 10px" }}>
                  {formatInTimeZone(w.endUtc, viewerTz)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </main>
  );
}
