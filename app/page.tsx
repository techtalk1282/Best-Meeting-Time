// app/page.tsx
// PURPOSE: Wire layout slots ONLY. No logic, no state.

import dynamic from "next/dynamic";

import LayoutShell from "./ui/LayoutShell";
import HeroSection from "./ui/HeroSection";
import PremiumFeaturesSection from "./ui/PremiumFeaturesSection";
import BonusFeaturesSection from "./ui/BonusFeaturesSection";
import FooterSection from "./ui/FooterSection";

// ✅ CRITICAL: disable SSR for this component
const VerifyPremium = dynamic(() => import("./ui/VerifyPremium"), {
  ssr: false,
});

export default function HomePage() {
  return (
    <>
      <VerifyPremium />

      <LayoutShell
        hero={<HeroSection />}
        toolPreview={null}
        premiumFeatures={<PremiumFeaturesSection />}
        bonusFeatures={<BonusFeaturesSection />}
        footer={<FooterSection />}
      />
    </>
  );
}
