"use client";

import { useState } from "react";
import Image from "next/image";
import { IconEtoile, IconAiguille } from "./icons/CoutureIcons";

export interface Hotspot {
  top: string;
  left: string;
  label: string;
}

interface CraftHotspotsProps {
  imageSrc: string;
  alt: string;
  hotspots: Hotspot[];
  title?: string;
  subtitle?: string;
}

export default function CraftHotspots({
  imageSrc,
  alt,
  hotspots,
  title = "Détails de Haute Couture",
  subtitle = "Chaque détail est cousu avec patience dans notre atelier à Perpignan.",
}: CraftHotspotsProps) {
  const [activeIdx, setActiveIdx] = useState<number | null>(0);
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center">
      {/* Title & subtitle if provided */}
      {title && (
        <div className="text-center mb-8 px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#17121C] border border-[#D8BE8F]/30 text-[#D8BE8F] text-[11px] tracking-widest uppercase mb-3">
            <IconAiguille className="w-3.5 h-3.5 text-[#D4688A]" />
            <span>Savoir-Faire d&apos;Atelier</span>
          </div>
          <h2
            className="text-2xl sm:text-4xl text-[#F8F2EA] font-serif mb-2"
            style={{ fontFamily: "var(--font-bodoni), Georgia, serif" }}
          >
            {title}
          </h2>
          <p className="text-xs sm:text-sm text-[#D9D5E4]/80 max-w-lg mx-auto">
            {subtitle}
          </p>
        </div>
      )}

      {/* Main image with interactive hotspots container */}
      <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] max-w-md rounded-2xl overflow-hidden border border-[#D8BE8F]/30 shadow-2xl bg-[#17121C] group">
        <div
          className={`relative w-full h-full cursor-zoom-in transition-transform duration-500 ease-out ${
            isZoomed ? "scale-125" : "scale-100"
          }`}
          onClick={() => setIsZoomed(!isZoomed)}
          title="Touchez pour zoomer"
        >
          <Image
            src={imageSrc}
            alt={alt}
            fill
            sizes="(max-width: 640px) 100vw, 450px"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E0B12]/70 via-transparent to-black/20 pointer-events-none" />
        </div>

        {/* Hotspot pins */}
        {hotspots.map((spot, idx) => {
          const isActive = activeIdx === idx;
          return (
            <div
              key={idx}
              className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
              style={{ top: spot.top, left: spot.left }}
            >
              {/* Pulsing button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIdx(isActive ? null : idx);
                }}
                className={`relative w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-transform active:scale-95 focus:outline-none ${
                  isActive
                    ? "bg-[#D4688A] scale-110 shadow-[0_0_15px_#D4688A]"
                    : "bg-[#0E0B12]/80 border border-[#D8BE8F] hover:bg-[#D4688A]/80 hover:scale-105"
                }`}
                aria-label={`Détail : ${spot.label}`}
                aria-expanded={isActive}
              >
                {/* Ping ring */}
                <span
                  className="absolute inset-0 rounded-full bg-[#D4688A] animate-ping opacity-40 pointer-events-none"
                  aria-hidden="true"
                />
                <IconEtoile
                  className={`w-3.5 h-3.5 transition-colors ${
                    isActive ? "text-white" : "text-[#D8BE8F]"
                  }`}
                />
              </button>

              {/* Caption Chip floating near hotspot */}
              {isActive && (
                <div
                  className="absolute top-9 left-1/2 -translate-x-1/2 z-30 w-48 sm:w-56 p-2.5 rounded-xl bg-[#0E0B12]/95 border border-[#D8BE8F]/50 text-white shadow-2xl backdrop-blur-md animate-in fade-in zoom-in-90 duration-200"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4688A] mt-1.5 shrink-0" />
                    <p className="text-[11px] leading-snug font-sans text-[#F8F2EA]">
                      {spot.label}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {/* Zoom Hint */}
        <div className="absolute bottom-3 right-3 px-2 py-1 rounded-md bg-[#0E0B12]/75 border border-white/10 text-[9px] uppercase tracking-widest text-[#D9D5E4] pointer-events-none">
          {isZoomed ? "Touchez pour réduire" : "Touchez pour zoomer"}
        </div>
      </div>

      {/* Mobile-friendly horizontal list of active hotspots below image */}
      <div className="w-full max-w-md mt-4 flex flex-wrap gap-2 justify-center px-2">
        {hotspots.map((spot, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setActiveIdx(idx)}
            className={`px-3 py-1.5 rounded-full text-[11px] transition-all flex items-center gap-1.5 ${
              activeIdx === idx
                ? "bg-[#D4688A] text-white shadow-[0_0_10px_rgba(212,104,138,0.4)]"
                : "bg-[#17121C] text-[#D9D5E4] border border-white/10 hover:border-[#D8BE8F]/40"
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                activeIdx === idx ? "bg-white" : "bg-[#D8BE8F]"
              }`}
            />
            <span className="truncate max-w-[200px]">{spot.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
