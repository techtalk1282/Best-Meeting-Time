// app/ui/LayoutShell.tsx
// FIXED: remove duplicate IDs (anchor bug)

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
    <div style={{ background: "linear-gradient(180deg, #4c1d95 0%, #312e81 100%)" }}>
      <section id="hero">{hero}</section>

      <section id="tool-preview">{toolPreview}</section>

      {/* ✅ REMOVE ID HERE (important) */}
      <section>{premiumFeatures}</section>

      <section id="bonus-features">{bonusFeatures}</section>

      <footer id="footer">{footer}</footer>
    </div>
  );
}
