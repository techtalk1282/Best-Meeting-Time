// app/ui/LayoutShell.tsx
// FIXED: remove wrapper around premium section (correct anchor positioning)

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
    <div>
      <section id="hero">{hero}</section>

      <section id="tool-preview">{toolPreview}</section>

      {/* ✅ FIX: remove wrapper */}
      {premiumFeatures}

      <section id="bonus-features">{bonusFeatures}</section>

      <footer id="footer">{footer}</footer>
    </div>
  );
}
