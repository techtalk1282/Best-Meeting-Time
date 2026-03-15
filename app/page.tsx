// app/page.tsx
// PURPOSE: Wire layout slots ONLY. No logic, no state.

import LayoutShell from "./ui/LayoutShell";
import HeroSection from "./ui/HeroSection";
import PremiumFeaturesSection from "./ui/PremiumFeaturesSection";
import BonusFeaturesSection from "./ui/BonusFeaturesSection";
import FooterSection from "./ui/FooterSection";

export default function HomePage() {
  return (
    <LayoutShell
      hero={<HeroSection />}
      toolPreview={null}
      premiumFeatures={<PremiumFeaturesSection />}
      bonusFeatures={<BonusFeaturesSection />}
      footer={<FooterSection />}
    />
  );
}
