// app/page.tsx
// PURPOSE: Wire layout slots ONLY. No logic, no state.

import LayoutShell from "./ui/LayoutShell";
import HeroSection from "./ui/HeroSection";
import ToolPreviewSection from "./ui/ToolPreviewSection";
import PremiumFeaturesSection from "./ui/PremiumFeaturesSection";
import BonusFeaturesSection from "./ui/BonusFeaturesSection";
import FooterSection from "./ui/FooterSection";

export default function HomePage() {
  return (
    <LayoutShell
      hero={<HeroSection />}
      toolPreview={<ToolPreviewSection />}
      premiumFeatures={<PremiumFeaturesSection />}
      bonusFeatures={<BonusFeaturesSection />}
      footer={<FooterSection />}
    />
  );
}
// CHECKPOINT: layout shell + slot wiring verified rendering
