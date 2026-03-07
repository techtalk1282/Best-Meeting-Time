// app/s/[id]/page.tsx

import { notFound } from "next/navigation";
import { headers } from "next/headers";
import { formatUtcToLocal } from "@/lib/time";

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
  const h = headers();

  const host = h.get("host");
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";

  const baseUrl = `${protocol}://${host}`;

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
