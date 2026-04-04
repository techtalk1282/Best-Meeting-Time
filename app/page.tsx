/**
 * File: app/page.tsx
 * Version: v1.8
 * Date: 2026-04-04
 *
 * PURPOSE:
 * - Maintain layout shell structure (NO logic changes)
 * - Inject internal linking block for SEO (critical for indexing + ranking)
 *
 * NOTES:
 * - No changes to Stripe, gating, or premium logic
 * - Uses BonusFeatures slot safely to avoid breaking layout
 * - This improves crawlability + page authority distribution
 */

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
        
        {/* ✅ NEW: SEO Internal Linking Block */}
        bonusFeatures={
          <div style={{ marginTop: "60px", textAlign: "center" }}>
            
            <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>
              Popular Meeting Time Cities
            </h2>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "12px",
              }}
            >
              <a href="/best-meeting-time-new-york">New York</a>
              <a href="/best-meeting-time-london">London</a>
              <a href="/best-meeting-time-tokyo">Tokyo</a>
              <a href="/best-meeting-time-sydney">Sydney</a>
              <a href="/best-meeting-time-dubai">Dubai</a>
              <a href="/best-meeting-time-berlin">Berlin</a>
              <a href="/best-meeting-time-paris">Paris</a>
              <a href="/best-meeting-time-mumbai">Mumbai</a>
              <a href="/best-meeting-time-toronto">Toronto</a>
            </div>

          </div>
        }

        footer={<FooterSection />}
      />
    </>
  );
}
