/**
 * File: app/ui/LayoutShell.tsx
 * Version: v2.0
 * Date: 2026-04-04
 *
 * PURPOSE:
 * - Remove inactive AdSense slot causing large empty gap between tool and premium section
 * - Clean layout structure for better UX and visual consistency
 *
 * WHAT WAS CHANGED:
 * - Removed AdSense <section> block between tool and premium
 * - Removed useEffect ad push logic (not needed until ads are live)
 *
 * ROLLBACK:
 * - Restore previous version (v1.x) if reintroducing passive ad placement between sections
 *
 * NOTES:
 * - Ads will be reintroduced later via controlled trigger (Watch Ad flow)
 * - No changes to layout structure, premium logic, or routing
 */

"use client";

import { ReactNode } from "react";

export default function LayoutShell({
  hero,
  toolPreview,
  premiumFeatures,
  bonusFeatures,
  footer,
}: {
  hero: ReactNode;
  toolPreview: ReactNode;
  premiumFeatures: ReactNode;
  bonusFeatures: ReactNode;
  footer: ReactNode;
}) {
  return (
    <div
      style={{
        background: "linear-gradient(180deg, #4c1d95 0%, #312e81 100%)",
      }}
    >
      {/* HERO */}
      <section id="hero">{hero}</section>

      {/* TOOL */}
      <section id="tool-preview">{toolPreview}</section>

      {/* PREMIUM (now directly follows tool — no gap) */}
      <section>{premiumFeatures}</section>

      {/* BONUS / SEO */}
      <section id="bonus-features">{bonusFeatures}</section>

      {/* FOOTER */}
      <footer id="footer">{footer}</footer>
    </div>
  );
}
