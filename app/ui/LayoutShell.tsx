// app/ui/LayoutShell.tsx
// PURPOSE: Layout structure ONLY.
// NO styling, NO logic, NO state, NO behavior.

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

      <section id="premium-features">{premiumFeatures}</section>

      <section id="bonus-features">{bonusFeatures}</section>

      <footer id="footer">{footer}</footer>
    </div>
  );
}
