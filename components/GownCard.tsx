"use client";

import { useState } from "react";
import Image from "next/image";
import { IconCoeur, IconEtoile } from "./icons/CoutureIcons";
import { useWishlist } from "@/lib/wishlist";
import { GownData } from "./GownBottomSheet";

interface GownCardProps {
  gown: GownData;
  onSelect: (gown: GownData) => void;
}

export default function GownCard({ gown, onSelect }: GownCardProps) {
  const { has, toggle } = useWishlist();
  const [burst, setBurst] = useState(false);
  const isFavorited = has(gown.id);

  const handleHeartClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nowFavorited = toggle(gown.id);
    if (nowFavorited) {
      setBurst(true);
      setTimeout(() => setBurst(false), 700);
    }
  };

  return (
    <article
      onClick={() => onSelect(gown)}
      className="group relative cursor-pointer flex flex-col bg-[#17121C]/60 rounded-3xl p-3 sm:p-4 border border-white/5 hover:border-[#D8BE8F]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
      data-cursor="gown"
    >
      {/* Arched image container */}
      <div className="relative w-full aspect-[4/5] rounded-[999px_999px_16px_16px] overflow-hidden bg-[#0E0B12] mb-3 border border-[#D8BE8F]/20">
        <Image
          src={gown.image}
          alt={`Robe de mariée ${gown.nom} - Rue des Princesses`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-106"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0E0B12]/80 via-transparent to-transparent pointer-events-none" />

        {/* Badge */}
        {gown.badge && (
          <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-[#0E0B12]/85 border border-[#D8BE8F]/40 text-[#D8BE8F] text-[9px] uppercase tracking-wider backdrop-blur-sm">
            {gown.badge}
          </span>
        )}

        {/* Favorite Heart Button */}
        <button
          type="button"
          onClick={handleHeartClick}
          className={`absolute top-3 right-3 p-2 rounded-full border transition-all duration-200 active:scale-90 ${
            isFavorited
              ? "bg-[#0E0B12] border-[#D4688A] text-[#D4688A]"
              : "bg-[#0E0B12]/70 border-white/10 text-white hover:text-[#D4688A] hover:border-[#D4688A]/50"
          }`}
          aria-label={
            isFavorited
              ? `Retirer ${gown.nom} des favoris`
              : `Ajouter ${gown.nom} aux favoris`
          }
        >
          <IconCoeur
            className={`w-4 h-4 transition-transform duration-200 ${
              isFavorited ? "fill-[#D4688A] scale-110" : "fill-none"
            }`}
          />

          {/* Sparkle burst on favorite */}
          {burst && (
            <div className="absolute -inset-2 flex items-center justify-center pointer-events-none">
              <IconEtoile className="w-5 h-5 text-[#D4688A] animate-ping" />
            </div>
          )}
        </button>

        {/* Traîne Indicator Tag */}
        <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[10px] text-[#D9D5E4]/80">
          <span className="truncate">{gown.silhouette}</span>
          <span className="text-[#D8BE8F] shrink-0 font-medium">{gown.traine.split(" ")[0]}</span>
        </div>
      </div>

      {/* Info Section */}
      <div className="flex flex-col flex-1 px-1">
        <div className="flex items-baseline justify-between mb-1">
          <h3
            className="text-xl sm:text-2xl font-serif text-[#F8F2EA] group-hover:text-[#D4688A] transition-colors"
            style={{ fontFamily: "var(--font-bodoni), Georgia, serif" }}
          >
            {gown.nom}
          </h3>
          <span className="text-[11px] text-[#D8BE8F] font-mono">
            {gown.prix}
          </span>
        </div>

        <p className="text-xs text-[#D9D5E4]/70 line-clamp-2 font-light leading-relaxed mb-3">
          {gown.description}
        </p>

        {/* Details Pill preview */}
        <div className="mt-auto pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-[#D8BE8F]">
          <span className="group-hover:underline">Voir les détails</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </div>
    </article>
  );
}
