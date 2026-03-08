// app/s/[id]/page.tsx

import { notFound } from "next/navigation";
import { kv } from "@vercel/kv";
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

  const data = await kv.get<ShareData>(`share:${id}`);

  if (!data) {
    notFound();
  }

  return data;
}

function formatForCity(utc: string, tz: string) {

  return new Date(utc).toLocaleString("en-US", {
    timeZone: tz,
    dateStyle: "medium",
    timeStyle: "short",
  });

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

        <div key={idx} style={{ marginBottom: "2rem" }}>

          <strong>Option {idx + 1}</strong>

          <div style={{ marginTop: "0.5rem" }}>
            Viewer Local Time:
            <div>
              {formatUtcToLocal(w.startUtc)} – {formatUtcToLocal(w.endUtc)}
            </div>
          </div>

          <div style={{ marginTop: "0.5rem" }}>

            {data.cities.map((city) => (

              <div key={city.name}>
                {city.name}:
                <div>
                  {formatForCity(w.startUtc, city.tz)} – {formatForCity(w.endUtc, city.tz)}
                </div>
              </div>

            ))}

          </div>

        </div>

      ))}

    </main>
  );
}
