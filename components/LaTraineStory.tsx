"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IconCouronne, IconEtoile } from "./icons/CoutureIcons";

export default function LaTraineStory() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = containerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalDist = rect.height + windowHeight;
      const currentDist = windowHeight - rect.top;
      const p = Math.min(Math.max(currentDist / totalDist, 0), 1);
      setProgress(p);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[140vh] sm:min-h-[160vh] bg-[#0E0B12] text-[#F8F2EA] overflow-hidden py-20"
      aria-label="I · La Traîne Spectaculaire"
    >
      {/* Sticky presentation viewport */}
      <div className="sticky top-16 sm:top-20 h-[85vh] sm:h-[90vh] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        {/* Section Roman numeral label */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#D8BE8F]">
            I · Signature Atelier
          </span>
          <span className="w-8 h-[1px] bg-[#D8BE8F]/40" />
        </div>

        {/* Dynamic Frame: Unrolling Cathedral Train */}
        <div className="relative w-full h-[65vh] sm:h-[72vh] rounded-3xl overflow-hidden border border-[#D8BE8F]/30 shadow-2xl bg-[#17121C]">
          {/* Panoramic image scrolling slowly inside frame */}
          <div
            className="absolute inset-0 w-full h-[140%] transition-transform duration-100 ease-out will-change-transform"
            style={{
              transform: `translateY(${-progress * 30}%)`,
            }}
          >
            <Image
              src="/images/real/real-cathedral-train-hall.jpg"
              alt="Traîne cathédrale spectaculaire se déployant dans l'allée d'honneur"
              fill
              priority
              sizes="100vw"
              className="object-cover object-top filter brightness-95"
            />
          </div>

          {/* Vignette gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E0B12] via-[#0E0B12]/25 to-black/40 pointer-events-none" />

          {/* Golden connecting thread line running through the image */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-[#D4688A] via-[#D8BE8F] to-transparent pointer-events-none" />

          {/* Floating Text Overlays with Couture Typography */}
          <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-12 pointer-events-none">
            {/* Top Badge */}
            <div className="self-start inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0E0B12]/85 border border-[#D8BE8F]/50 backdrop-blur-md">
              <IconCouronne className="w-3.5 h-3.5 text-[#D4688A]" />
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#D8BE8F]">
                Haute Couture Perpignan
              </span>
            </div>

            {/* Bottom Copy Overlay */}
            <div className="max-w-xl pointer-events-auto">
              <span className="text-xs uppercase tracking-[0.22em] text-[#D4688A] font-medium block mb-1">
                La Traîne Cathédrale
              </span>
              <h2
                className="text-3xl sm:text-5xl lg:text-6xl font-serif text-[#F8F2EA] leading-[1.05] mb-3"
                style={{ fontFamily: "var(--font-bodoni), Georgia, serif" }}
              >
                Une traîne de <span className="italic text-[#D8BE8F]">5 mètres</span>.
                <br />
                Une entrée dont on se souvient.
              </h2>
              <p className="text-xs sm:text-sm text-[#D9D5E4]/90 font-light leading-relaxed mb-4 max-w-md">
                Chaque mètre de tulle et de satin est équilibré avec précision
                pour flotter sans peser. Vos invités n&apos;auront d&apos;yeux que
                pour votre démarche.
              </p>

              <div className="flex items-center gap-4">
                <Link
                  href="/les-mariees"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#D8BE8F] hover:text-[#F8F2EA] font-semibold border-b border-[#D8BE8F]/50 pb-0.5 group"
                >
                  <span>Explorer les silhouettes à traîne</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Sparkle corner accents */}
          <div className="absolute bottom-6 right-6 hidden sm:flex items-center gap-1.5 text-[#D8BE8F]/70 text-[10px] tracking-widest uppercase">
            <IconEtoile className="w-3 h-3 text-[#D4688A]" />
            <span>Fait main à Perpignan</span>
          </div>
        </div>
      </div>
    </section>
  );
}
