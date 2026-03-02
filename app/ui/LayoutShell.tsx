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
      <section>{hero}</section>

      <section>{toolPreview}</section>

      <section>{premiumFeatures}</section>

      <section>{bonusFeatures}</section>

      <footer>{footer}</footer>
    </div>
  );
}
// CHECKPOINT: UI layout structure verified and locked
