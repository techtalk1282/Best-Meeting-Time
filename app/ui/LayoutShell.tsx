// app/ui/LayoutShell.tsx
// UPDATED: Added AdSense slot between tool and premium

"use client";

import { ReactNode, useEffect } from "react";

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

  // ✅ Load AdSense script ONCE
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9246885832557966";
    script.async = true;
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);
  }, []);

  // ✅ Push ad after render
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.log("AdSense error:", e);
    }
  }, []);

  return (
    <div style={{ background: "linear-gradient(180deg, #4c1d95 0%, #312e81 100%)" }}>
      
      <section id="hero">{hero}</section>

      <section id="tool-preview">{toolPreview}</section>

      {/* ✅ AD SLOT (NEW) */}
      <section style={{ padding: "20px 0", display: "flex", justifyContent: "center" }}>
        <ins
          className="adsbygoogle"
          style={{ display: "block", width: "100%", maxWidth: "728px" }}
          data-ad-client="ca-pub-9246885832557966"
          data-ad-slot="5883090133"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </section>

      <section>{premiumFeatures}</section>

      <section id="bonus-features">{bonusFeatures}</section>

      <footer id="footer">{footer}</footer>
    </div>
  );
}
