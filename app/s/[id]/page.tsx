// app/s/[id]/page.tsx

import { notFound } from "next/navigation";
import { formatUtcToLocal } from "@/lib/time";

interface ShareData {
  id: string;
  cities: {
    name: string;
    timezone: string;
  }[];
  date: string;
  timeWindows: {
    startUtc: string;
    endUtc: string;
  }[];
  createdAt?: string;
}

async function getShareData(id: string): Promise<ShareData> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/share/${id}`,
    {
      cache: "no-store",
    }
  );

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
    <main style={{ padding: "2rem", maxWidth: 800 }}>
      <h1>Best Meeting Time</h1>

      <p>
        <strong>Shared Meeting</strong>
      </p>

      {data.createdAt && (
        <p>
          Created: {formatUtcToLocal(data.createdAt)}
        </p>
      )}

      <hr />

      <h2>Cities</h2>
      <ul>
        {data.cities.map((city) => (
          <li key={city.name}>
            {city.name} ({city.timezone})
          </li>
        ))}
      </ul>

      <hr />

      <h2>Suggested Time Window(s)</h2>

      {data.timeWindows.map((window, idx) => (
        <div key={idx} style={{ marginBottom: "1rem" }}>
          <strong>Option {idx + 1}</strong>
          <div>
            {formatUtcToLocal(window.startUtc)} –{" "}
            {formatUtcToLocal(window.endUtc)}
          </div>
        </div>
      ))}
    </main>
  );
}
