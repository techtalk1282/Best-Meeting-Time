// app/ui/HeroSection.tsx
import { ReactNode } from "react";

export default function HeroSection({
  children,
}: {
  children: ReactNode;
}) {
  return <section>{children}</section>;
}
