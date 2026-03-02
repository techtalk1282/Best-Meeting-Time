// app/ui/HeroSection.tsx
// PURPOSE: Hero section structure ONLY.
// NO styling, NO logic, NO state, NO behavior.

import { ReactNode } from "react";

export default function HeroSection({
  children,
}: {
  children?: ReactNode;
}) {
  return (
    <section>
      {children}
    </section>
  );
}
