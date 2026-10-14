"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  IconCoeur,
  IconWhatsApp,
  IconCouronne,
  IconEtoile,
} from "./icons/CoutureIcons";
import { useWishlist } from "@/lib/wishlist";

export interface GownData {
  id: string;
  nom: string;
  silhouette: string;
  matiere: string;
  decollete: string;
  manches: string;
  traine: string;
  details: string[];
  prix: string;
  description: string;
  image: string;
  badge?: string;
  couleurDefault?: string;
  hotspots?: { top: string; left: string; label: string }[];
}

interface GownBottomSheetProps {
  gown: GownData | null;
  onClose: () => void;
}

export default function GownBottomSheet({ gown, onClose }: GownBottomSheetProps) {
  const { has, toggle } = useWishlist();

  useEffect(() => {
    if (gown) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [gown]);

  if (!gown) return null;

  const isFavorited = has(gown.id);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Bottom Sheet Modal Container */}
      <div
        className="w-full max-w-2xl max-h-[90vh] bg-[#0E0B12] text-[#F8F2EA] rounded-t-3xl sm:rounded-3xl border border-[#D8BE8F]/30 overflow-y-auto shadow-2xl relative animate-in slide-in-from-bottom duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile drag handle */}
        <div className="w-12 h-1.5 bg-white/20 rounded-full mx-auto mt-3 sm:hidden" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-[#17121C] border border-white/10 text-white flex items-center justify-center hover:bg-[#D4688A] transition-colors"
          aria-label="Fermer la fiche robe"
        >
          ✕
        </button>

        <div className="p-6 sm:p-8">
          {/* Top Image + Badges */}
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#17121C] border border-white/10 mb-6">
            <Image
              src={gown.image}
              alt={gown.nom}
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E0B12] via-transparent to-transparent pointer-events-none" />

            {/* Badge */}
            {gown.badge && (
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#0E0B12]/80 border border-[#D8BE8F]/50 text-[#D8BE8F] text-[10px] tracking-widest uppercase">
                {gown.badge}
              </div>
            )}

            {/* Favorite toggle in sheet */}
            <button
              onClick={() => toggle(gown.id)}
              className="absolute bottom-3 right-3 p-2.5 rounded-full bg-[#0E0B12]/85 border border-[#D8BE8F]/40 text-[#F8F2EA] hover:scale-105 transition-transform"
              aria-label={
                isFavorited
                  ? "Retirer des coups de cœur"
                  : "Ajouter aux coups de cœur"
              }
            >
              <IconCoeur
                className={`w-5 h-5 transition-colors ${
                  isFavorited
                    ? "text-[#D4688A] fill-[#D4688A]"
                    : "text-[#D9D5E4]"
                }`}
              />
            </button>
          </div>

          {/* Gown Title & Silhouette */}
          <div className="mb-4">
            <span className="text-[11px] uppercase tracking-widest text-[#D4688A] font-medium">
              {gown.silhouette} · Haute Couture
            </span>
            <h3
              className="text-3xl sm:text-4xl font-serif text-[#F8F2EA] mt-1"
              style={{ fontFamily: "var(--font-bodoni), Georgia, serif" }}
            >
              Robe {gown.nom}
            </h3>
            <p className="text-xs text-[#D8BE8F] mt-1 font-mono tracking-wide">
              {gown.prix}
            </p>
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-[#D9D5E4]/90 leading-relaxed font-light mb-6">
            {gown.description}
          </p>

          {/* Specifications Table */}
          <div className="grid grid-cols-2 gap-3 p-4 rounded-xl bg-[#17121C] border border-white/5 mb-6 text-xs">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#D8BE8F] block">
                Matières nobles
              </span>
              <p className="text-[#F8F2EA] font-medium">{gown.matiere}</p>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#D8BE8F] block">
                Décolleté
              </span>
              <p className="text-[#F8F2EA] font-medium">{gown.decollete}</p>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#D8BE8F] block">
                Manches
              </span>
              <p className="text-[#F8F2EA] font-medium">{gown.manches}</p>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#D8BE8F] block">
                Traîne
              </span>
              <p className="text-[#F8F2EA] font-medium">{gown.traine}</p>
            </div>
          </div>

          {/* Key Craft Highlights */}
          <div className="mb-8">
            <span className="text-[10px] uppercase tracking-widest text-[#D8BE8F] block mb-2 font-medium">
              Finitions & Détails cousus main :
            </span>
            <div className="flex flex-wrap gap-2">
              {gown.details.map((detail, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-full bg-[#0E0B12] border border-white/10 text-[11px] text-[#D9D5E4] flex items-center gap-1.5"
                >
                  <IconEtoile className="w-2.5 h-2.5 text-[#D4688A]" />
                  {detail}
                </span>
              ))}
            </div>
          </div>

          {/* Actions: WhatsApp + RDV */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`https://wa.me/33646858626?text=Bonjour,%20j'aimerais%20essayer%20la%20robe%20${encodeURIComponent(
                gown.nom
              )}%20vue%20sur%20votre%20site%20Rue%20des%20Princesses.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3.5 px-4 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-lg shadow-[#25D366]/20"
            >
              <IconWhatsApp className="w-4 h-4 text-white" />
              Demander cette robe sur WhatsApp
            </a>

            <Link
              href="/rendez-vous"
              onClick={onClose}
              className="flex-1 py-3.5 px-4 rounded-full bg-[#D4688A] hover:bg-[#BF5374] text-white text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 btn-shine-sweep transition-transform active:scale-95 shadow-lg shadow-[#D4688A]/30"
            >
              <IconCouronne className="w-4 h-4 text-white" />
              Réserver mon essayage privé
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
