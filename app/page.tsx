// app/page.tsx

import { cookies } from "next/headers";

import LayoutShell from "./ui/LayoutShell";
import HeroSection from "./ui/HeroSection";
import ToolPreviewSection from "./ui/ToolPreviewSection";
import PremiumFeaturesSection from "./ui/PremiumFeaturesSection";
import BonusFeaturesSection from "./ui/BonusFeaturesSection";
import FooterSection from "./ui/FooterSection";

import UnlockPremiumButton from "./UnlockPremiumButton";
import ShareActionButton from "./components/ShareActionButton";

export default function HomePage() {
  const premium = cookies().get("premium")?.value === "1";

  // TEMP DATA (WIRING VALIDATION ONLY)
  // Will be replaced by real meeting state later
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
    <LayoutShell
      hero={
        <HeroSection>
          <h1>Best Meeting Time</h1>
          <p>Premium: {premium ? "ON" : "OFF"}</p>
        </HeroSection>
      }
      toolPreview={
        <ToolPreviewSection>
          {!premium && <UnlockPremiumButton />}

          {premium && (
            <ShareActionButton cities={cities} windows={windows} />
          )}
        </ToolPreviewSection>
      }
      premiumFeatures={<PremiumFeaturesSection />}
      bonusFeatures={<BonusFeaturesSection />}
      footer={<FooterSection />}
    />
  );
}
