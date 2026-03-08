// app/page.tsx

import { cookies } from "next/headers";
import UnlockPremiumButton from "./UnlockPremiumButton";
import ShareActionButton from "./components/ShareActionButton";

export default function HomePage() {
  const premium = cookies().get("premium")?.value === "1";

  // TEMP DATA (WIRING VALIDATION ONLY)
  // Next step will replace this with real meeting state from the actual UI.
  const cities = [
    { name: "New York", tz: "America/New_York" },
    { name: "London", tz: "Europe/London" },
  ];

  const windows = [
    {
      startUtc: "2026-03-01T18:00:00Z",
      endUtc: "2026-03-01T19:00:00Z",
    },
  ];

  return (
    <main style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>Best Meeting Time</h1>

      <p>Premium: {premium ? "ON" : "OFF"}</p>

      {!premium && <UnlockPremiumButton />}

      {premium && (
        <div style={{ marginTop: "24px" }}>
          <ShareActionButton cities={cities} windows={windows} />
        </div>
      )}
    </main>
  );
}
