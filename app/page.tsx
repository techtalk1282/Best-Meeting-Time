// app/page.tsx
import { cookies } from "next/headers";
import UnlockPremiumButton from "./ui/UnlockPremiumButton";

export default function HomePage() {
  const premium = cookies().get("premium")?.value === "1";

  return (
    <main style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1>Best Meeting Time</h1>
      <p>Premium: {premium ? "ON" : "OFF"}</p>

      {!premium && <UnlockPremiumButton />}
    </main>
  );
}
