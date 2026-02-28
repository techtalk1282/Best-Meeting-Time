// app/s/[id]/page.tsx

import { notFound } from "next/navigation";

interface ShareData {
  id: string;
  createdAt: string;
  cities: { name: string; tz: string }[];
  windows: { startUtc: string; endUtc: string }[];
}

async function getShare(id: string): Promise<ShareData | null> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/share/${id}`,
    { cache: "no-store" }
  );

  if (!res.ok) return null;
  return res.json();
}

export default async function SharePage({
  params,
}: {
  params: { id: string };
}) {
  const data = await getShare(params.id);

  if (!data) notFound();

  return (
    <main style={{ padding: "32px", fontFamily: "sans-serif" }}>
      <h1>Shared Meeting</h1>

      <h2>Cities</h2>
      <ul>
        {data.cities.map((c) => (
          <li key={c.name}>
            {c.name} ({c.tz})
          </li>
        ))}
      </ul>

      <h2>Windows (UTC)</h2>
      <ul>
        {data.windows.map((w, i) => (
          <li key={i}>
            {w.startUtc} → {w.endUtc}
          </li>
        ))}
      </ul>
    </main>
  );
}
