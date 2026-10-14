"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useWishlist } from "@/lib/wishlist";
import {
  IconCouronne,
  IconCoeur,
  IconWhatsApp,
  IconEtoile,
} from "@/components/icons/CoutureIcons";
import gownsData from "@/data/gowns.json";
import GownBottomSheet, { GownData } from "@/components/GownBottomSheet";

export default function MesCoupsDeCoeurPage() {
  const { wishlist, count, toggle, isLoaded } = useWishlist();
  const [selectedGown, setSelectedGown] = useState<GownData | null>(null);

  const favoritedGowns = gownsData.filter((g) => wishlist.includes(g.id));

  const gownNamesList = favoritedGowns.map((g) => g.nom).join(", ");
  const whatsappUrl = `https://wa.me/33646858626?text=${encodeURIComponent(
    `Bonjour Rue des Princesses ! J'ai sélectionné ces robes coups de cœur sur votre site : ${gownNamesList}. J'aimerais organiser un rendez-vous pour les essayer à l'atelier.`
  )}`;

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-[#0E0B12] text-[#F8F2EA] pt-32 pb-20 flex items-center justify-center">
        <IconCouronne className="w-8 h-8 text-[#D8BE8F] animate-pulse" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0E0B12] text-[#F8F2EA] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Breadcrumbs & Title */}
        <div className="py-8 sm:py-12 border-b border-white/10 mb-8">
          <div className="flex items-center gap-2 text-xs text-[#D8BE8F] mb-3">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span>/</span>
            <span className="text-[#D4688A]">Mes Coups de Cœur</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#D4688A] block mb-2 font-medium">
                Votre Sélection Privée
              </span>
              <h1
                className="text-3xl sm:text-5xl font-serif text-[#F8F2EA]"
                style={{ fontFamily: "var(--font-bodoni), Georgia, serif" }}
              >
                Mes Coups de <span className="italic text-[#D4688A]">Cœur</span> ({count}).
              </h1>
            </div>

            {count > 0 && (
              <div className="flex flex-wrap gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-full bg-[#25D366] text-white text-xs uppercase tracking-wider font-semibold flex items-center gap-2 shadow-lg shadow-[#25D366]/20 transition-transform hover:scale-105"
                >
                  <IconWhatsApp className="w-4 h-4 text-white" />
                  Envoyer ma liste par WhatsApp
                </a>

                <Link
                  href="/rendez-vous"
                  className="px-5 py-3 rounded-full bg-[#D4688A] hover:bg-[#BF5374] text-white text-xs uppercase tracking-wider font-semibold flex items-center gap-2 btn-shine-sweep shadow-lg shadow-[#D4688A]/30 transition-transform hover:scale-105"
                >
                  <IconCouronne className="w-4 h-4 text-white" />
                  Prendre RDV avec ma liste
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Wishlist Content or Empty State */}
        {count > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {favoritedGowns.map((gown) => (
              <div
                key={gown.id}
                className="group relative flex flex-col bg-[#17121C] rounded-3xl p-4 border border-white/5 hover:border-[#D8BE8F]/40 transition-all shadow-xl"
              >
                <div
                  className="relative w-full aspect-[4/5] rounded-[999px_999px_16px_16px] overflow-hidden bg-[#0E0B12] mb-3 cursor-pointer"
                  onClick={() => setSelectedGown(gown)}
                >
                  <Image
                    src={gown.image}
                    alt={gown.nom}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-106"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E0B12]/80 via-transparent to-transparent pointer-events-none" />

                  {/* Remove Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggle(gown.id);
                    }}
                    className="absolute top-3 right-3 p-2 rounded-full bg-[#0E0B12] border border-[#D4688A] text-[#D4688A]"
                    title="Retirer de mes favoris"
                  >
                    <IconCoeur className="w-4 h-4 fill-[#D4688A]" />
                  </button>
                </div>

                <div className="flex flex-col flex-1">
                  <div className="flex items-baseline justify-between mb-1">
                    <h3
                      className="text-xl font-serif text-[#F8F2EA]"
                      style={{ fontFamily: "var(--font-bodoni), Georgia, serif" }}
                    >
                      {gown.nom}
                    </h3>
                    <span className="text-xs text-[#D8BE8F]">{gown.prix}</span>
                  </div>

                  <p className="text-xs text-[#D9D5E4]/80 line-clamp-2 font-light mb-4">
                    {gown.description}
                  </p>

                  <div className="mt-auto flex gap-2">
                    <button
                      onClick={() => setSelectedGown(gown)}
                      className="flex-1 py-2 rounded-full bg-[#0E0B12] hover:bg-white/10 text-[#F8F2EA] text-xs uppercase tracking-wider border border-white/10"
                    >
                      Détails
                    </button>
                    <a
                      href={`https://wa.me/33646858626?text=Bonjour,%20j'ai%20ajout%C3%A9%20la%20robe%20${encodeURIComponent(
                        gown.nom
                      )}%20%C3%A0%20mes%20favoris%20et%20j'aimerais%20l'essayer.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-[#25D366] text-white flex items-center justify-center"
                      title="Demander cette robe sur WhatsApp"
                    >
                      <IconWhatsApp className="w-4 h-4 text-white" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty state with crown drawing */
          <div className="py-24 text-center max-w-md mx-auto flex flex-col items-center">
            <div className="w-20 h-20 rounded-full border border-[#D8BE8F]/30 bg-[#17121C] flex items-center justify-center mb-6 shadow-xl">
              <IconCouronne className="w-10 h-10 text-[#D8BE8F]" />
            </div>

            <h2
              className="text-2xl sm:text-3xl font-serif text-[#F8F2EA] mb-3"
              style={{ fontFamily: "var(--font-bodoni), Georgia, serif" }}
            >
              Votre liste est encore vide
            </h2>

            <p className="text-xs sm:text-sm text-[#D9D5E4]/80 leading-relaxed mb-8 font-light">
              Touchez le cœur sur n&apos;importe quelle création pour garder vos
              modèles préférés et les partager directement avec nos couturières.
            </p>

            <Link
              href="/les-mariees"
              className="px-8 py-3.5 rounded-full bg-[#D4688A] hover:bg-[#BF5374] text-white text-xs uppercase tracking-wider font-semibold btn-shine-sweep shadow-lg shadow-[#D4688A]/30 transition-all hover:scale-105"
            >
              Découvrir la collection des Mariées
            </Link>
          </div>
        )}
      </div>

      <GownBottomSheet
        gown={selectedGown}
        onClose={() => setSelectedGown(null)}
      />
    </div>
  );
}
