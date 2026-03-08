// app/s/[id]/page.tsx

"use client";

import { notFound } from "next/navigation";
import { formatUtcToLocal } from "@/lib/time";
import { kv } from "@vercel/kv";
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

async function getShareData(id: string): Promise<ShareData> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  if (!baseUrl) {
    throw new Error("Missing env: NEXT_PUBLIC_BASE_URL");
  }

  const res = await fetch(`${baseUrl}/api/share/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    notFound();
  }

  const data: ShareData = await res.json();

  /*
  Analytics: track share link opens
  */

  try {
    await kv.incr("analytics:share_opened");
    await kv.incr(`analytics:share_opened:${id}`);
  } catch (err) {
    console.error("analytics_error", err);
  }

  return data;
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
      const res = await fetch(`/api/share/${params.id}`);
      if (!res.ok) return;
      const json = await res.json();
      setData(json);
    }

    load();
  }, [params.id]);

  if (!data) {
    return <div style={{ padding: "2rem" }}>Loading...</div>;
  }

  return (
    <main style={{ padding: "2rem", maxWidth: 800, fontFamily: "sans-serif" }}>
      <h1>Best Meeting Time</h1>

      <p>
        <strong>Shared Meeting</strong>
      </p>

      {data.createdAt && (
        <p>Created: {formatUtcToLocal(data.createdAt)}</p>
      )}

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
        <div key={idx} style={{ marginBottom: "1rem" }}>
          <strong>Option {idx + 1}</strong>

          <div>
            {formatUtcToLocal(w.startUtc)} – {formatUtcToLocal(w.endUtc)}
          </div>

          {viewerTz && (
            <div>
              Your Local Time:{" "}
              {new Date(w.startUtc).toLocaleString(undefined, {
                timeZone: viewerTz,
              })}{" "}
              –{" "}
              {new Date(w.endUtc).toLocaleString(undefined, {
                timeZone: viewerTz,
              })}
            </div>
          )}
        </div>
      ))}
    </main>
  );
}
