// app/page.tsx
// PURPOSE: Wire layout slots ONLY. No logic, no state.

import LayoutShell from "./ui/LayoutShell";
import HeroSection from "./ui/HeroSection";
import PremiumFeaturesSection from "./ui/PremiumFeaturesSection";
import BonusFeaturesSection from "./ui/BonusFeaturesSection";
import FooterSection from "./ui/FooterSection";
import VerifyPremium from "./ui/VerifyPremium"; // ✅ ADDED

export default function HomePage() {
  return (
    <>
      <VerifyPremium /> {/* ✅ ADDED */}

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
