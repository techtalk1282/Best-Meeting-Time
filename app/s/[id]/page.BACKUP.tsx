// app/s/[id]/page.tsx

import { notFound } from "next/navigation";
import { formatUtcToLocal } from "@/lib/time";

interface ShareData {
  id: string;
  createdAt?: string;
  cities: {
    name: string;
    tz: string; // matches /api/share POST payload + KV snapshot
  }[];
  windows: {
    startUtc: string;
    endUtc: string;
  }[]; // matches /api/share snapshot key: "windows"
}

async function getShareData(id: string): Promise<ShareData> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  if (!baseUrl) {
    // Fail fast so you don’t get confusing “blank page” behavior in prod
    throw new Error("Missing env: NEXT_PUBLIC_BASE_URL");
  }

  const res = await fetch(`${baseUrl}/api/share/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    notFound();
  }

  return res.json();
}

export default async function SharePage({
  params,
}: {
  params: { id: string };
}) {
  const data = await getShareData(params.id);

  return (
    <main style={{ padding: "2rem", maxWidth: 800, fontFamily: "sans-serif" }}>
      <h1>Best Meeting Time</h1>

      <p>
        <strong>Shared Meeting</strong>
      </p>

      {data.createdAt && (
        <p>Created: {formatUtcToLocal(data.createdAt)}</p>
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
        </div>
      ))}
    </main>
  );
}
