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
