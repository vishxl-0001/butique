"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import GownCard from "@/components/GownCard";
import GownBottomSheet, { GownData } from "@/components/GownBottomSheet";
import { IconCouronne, IconEtoile } from "@/components/icons/CoutureIcons";
import gownsData from "@/data/gowns.json";

export default function LesMarieesPage() {
  const [selectedGown, setSelectedGown] = useState<GownData | null>(null);
  const [filterSilhouette, setFilterSilhouette] = useState("Tous");
  const [filterDetail, setFilterDetail] = useState("Tous");
  const [filterTraine, setFilterTraine] = useState("Tous");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const silhouettes = ["Tous", "Robe de bal", "Sirène & sur-jupe"];
  const details = ["Tous", "Cristaux Swarovski", "Fleurs 3D", "Dentelle", "Traîne cathédrale"];
  const traines = ["Tous", "Cathédrale", "Chapelle"];

  const filteredGowns = useMemo(() => {
    return gownsData.filter((gown) => {
      if (filterSilhouette !== "Tous" && gown.silhouette !== filterSilhouette) {
        return false;
      }
      if (
        filterDetail !== "Tous" &&
        !gown.details.some((d) => d.toLowerCase().includes(filterDetail.toLowerCase()))
      ) {
        return false;
      }
      if (
        filterTraine !== "Tous" &&
        !gown.traine.toLowerCase().includes(filterTraine.toLowerCase())
      ) {
        return false;
      }
      return true;
    });
  }, [filterSilhouette, filterDetail, filterTraine]);

  const resetFilters = () => {
    setFilterSilhouette("Tous");
    setFilterDetail("Tous");
    setFilterTraine("Tous");
  };

  return (
    <div className="min-h-screen bg-[#0E0B12] text-[#F8F2EA] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Breadcrumbs & Title */}
        <div className="py-6 sm:py-10 border-b border-white/10">
          <div className="flex items-center gap-2 text-xs text-[#D8BE8F] mb-3">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span>/</span>
            <span className="text-[#D4688A]">Les Mariées</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#D8BE8F] block mb-1">
                Collection Haute Couture Atelier
              </span>
              <h1
                className="text-3xl sm:text-5xl lg:text-6xl font-serif text-[#F8F2EA]"
                style={{ fontFamily: "var(--font-bodoni), Georgia, serif" }}
              >
                Les Robes de <span className="italic text-[#D4688A]">Princesse</span>.
              </h1>
            </div>

            <p className="text-xs sm:text-sm text-[#D9D5E4]/80 max-w-md font-light leading-relaxed">
              Volumes d&apos;apparat, traînes vertigineuses et broderies de
              cristaux. Chaque robe est réalisée sur mesure dans notre atelier à Perpignan.
            </p>
          </div>
        </div>

        {/* Sticky Filter Bar */}
        <div className="sticky top-16 z-30 py-4 bg-[#0E0B12]/95 backdrop-blur-md border-b border-white/10 flex items-center justify-between gap-4">
          {/* Desktop Filter Chips */}
          <div className="hidden md:flex items-center gap-2 flex-wrap text-xs">
            <span className="text-[10px] uppercase tracking-widest text-[#D8BE8F] mr-1">
              Silhouettes :
            </span>
            {silhouettes.map((s) => (
              <button
                key={s}
                onClick={() => setFilterSilhouette(s)}
                className={`px-3 py-1.5 rounded-full transition-all ${
                  filterSilhouette === s
                    ? "bg-[#D4688A] text-white font-medium shadow-sm"
                    : "bg-[#17121C] text-[#D9D5E4] hover:border-[#D8BE8F]/50 border border-white/10"
                }`}
              >
                {s}
              </button>
            ))}

            <span className="text-[10px] uppercase tracking-widest text-[#D8BE8F] ml-3 mr-1">
              Détails :
            </span>
            {details.slice(0, 4).map((d) => (
              <button
                key={d}
                onClick={() => setFilterDetail(d)}
                className={`px-3 py-1.5 rounded-full transition-all ${
                  filterDetail === d
                    ? "bg-[#D8BE8F] text-[#0E0B12] font-semibold"
                    : "bg-[#17121C] text-[#D9D5E4] hover:border-[#D8BE8F]/50 border border-white/10"
                }`}
              >
                {d}
              </button>
            ))}
          </div>

          {/* Mobile Filter Button */}
          <button
            onClick={() => setMobileFilterOpen(true)}
            className="md:hidden flex items-center gap-2 px-4 py-2 rounded-full bg-[#17121C] border border-[#D8BE8F]/40 text-xs text-[#F8F2EA]"
          >
            <span>Filtrer les créations</span>
            {(filterSilhouette !== "Tous" || filterDetail !== "Tous" || filterTraine !== "Tous") && (
              <span className="w-2 h-2 rounded-full bg-[#D4688A]" />
            )}
          </button>

          {/* Result Count */}
          <div className="text-xs text-[#D8BE8F]">
            <strong>{filteredGowns.length}</strong> robe{filteredGowns.length > 1 ? "s" : ""} présentée{filteredGowns.length > 1 ? "s" : ""}
          </div>
        </div>

        {/* Mobile Filter Bottom Sheet */}
        {mobileFilterOpen && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-end md:hidden"
            onClick={() => setMobileFilterOpen(false)}
          >
            <div
              className="w-full bg-[#0E0B12] rounded-t-3xl border-t border-[#D8BE8F]/30 p-6 space-y-6 max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <h3 className="text-lg font-serif text-[#F8F2EA]">Filtres de Collection</h3>
                <button
                  onClick={() => setMobileFilterOpen(false)}
                  className="text-white hover:text-[#D4688A]"
                >
                  ✕
                </button>
              </div>

              {/* Silhouette Filter */}
              <div>
                <span className="text-xs uppercase tracking-widest text-[#D8BE8F] block mb-2">
                  Silhouette
                </span>
                <div className="flex flex-wrap gap-2">
                  {silhouettes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setFilterSilhouette(s)}
                      className={`px-3 py-1.5 rounded-full text-xs ${
                        filterSilhouette === s
                          ? "bg-[#D4688A] text-white"
                          : "bg-[#17121C] text-[#D9D5E4] border border-white/10"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Detail Filter */}
              <div>
                <span className="text-xs uppercase tracking-widest text-[#D8BE8F] block mb-2">
                  Détail Signature
                </span>
                <div className="flex flex-wrap gap-2">
                  {details.map((d) => (
                    <button
                      key={d}
                      onClick={() => setFilterDetail(d)}
                      className={`px-3 py-1.5 rounded-full text-xs ${
                        filterDetail === d
                          ? "bg-[#D8BE8F] text-[#0E0B12] font-semibold"
                          : "bg-[#17121C] text-[#D9D5E4] border border-white/10"
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              {/* Train Filter */}
              <div>
                <span className="text-xs uppercase tracking-widest text-[#D8BE8F] block mb-2">
                  Longueur de Traîne
                </span>
                <div className="flex flex-wrap gap-2">
                  {traines.map((t) => (
                    <button
                      key={t}
                      onClick={() => setFilterTraine(t)}
                      className={`px-3 py-1.5 rounded-full text-xs ${
                        filterTraine === t
                          ? "bg-[#D4688A] text-white"
                          : "bg-[#17121C] text-[#D9D5E4] border border-white/10"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Close / Apply */}
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="w-full py-3.5 rounded-full bg-[#D4688A] text-white text-xs uppercase tracking-wider font-semibold"
              >
                Appliquer les filtres ({filteredGowns.length} résultat{filteredGowns.length > 1 ? "s" : ""})
              </button>
            </div>
          </div>
        )}

        {/* Gowns Grid: 2-column on mobile, 3 or 4 on desktop */}
        {filteredGowns.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 pt-8">
            {filteredGowns.map((gown) => (
              <GownCard
                key={gown.id}
                gown={gown}
                onSelect={(g) => setSelectedGown(g)}
              />
            ))}
          </div>
        ) : (
          /* Kind empty state */
          <div className="py-20 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#17121C] border border-[#D8BE8F]/30 flex items-center justify-center mb-4 text-[#D8BE8F]">
              <IconCouronne className="w-8 h-8 text-[#D8BE8F]" />
            </div>
            <h3
              className="text-2xl font-serif text-[#F8F2EA] mb-2"
              style={{ fontFamily: "var(--font-bodoni), Georgia, serif" }}
            >
              Aucun modèle ne correspond exactement à ces filtres
            </h3>
            <p className="text-xs sm:text-sm text-[#D9D5E4]/80 max-w-md mb-6">
              Mais notre atelier crée également sur mesure selon toutes vos envies. Réinitialisez vos critères pour redécouvrir l&apos;ensemble de la collection.
            </p>
            <button
              onClick={resetFilters}
              className="px-6 py-2.5 rounded-full bg-[#D4688A] text-white text-xs uppercase tracking-wider font-medium"
            >
              Réinitialiser tous les filtres
            </button>
          </div>
        )}

        {/* Bottom Booking Notice */}
        <div className="mt-16 p-8 rounded-3xl bg-[#17121C] border border-[#D8BE8F]/30 text-center max-w-3xl mx-auto">
          <IconEtoile className="w-6 h-6 text-[#D4688A] mx-auto mb-3" />
          <h3
            className="text-2xl font-serif text-[#F8F2EA] mb-2"
            style={{ fontFamily: "var(--font-bodoni), Georgia, serif" }}
          >
            Un modèle a capté votre regard ?
          </h3>
          <p className="text-xs sm:text-sm text-[#D9D5E4]/80 mb-6">
            Prenez rendez-vous pour essayer nos robes en salon privé à Perpignan avec vos proches.
          </p>
          <Link
            href="/rendez-vous"
            className="inline-flex px-8 py-3.5 rounded-full bg-[#D4688A] text-white text-xs uppercase tracking-wider font-semibold btn-shine-sweep shadow-lg shadow-[#D4688A]/30"
          >
            Réserver mon essayage privé
          </Link>
        </div>
      </div>

      {/* Gown Bottom Sheet */}
      <GownBottomSheet
        gown={selectedGown}
        onClose={() => setSelectedGown(null)}
      />
    </div>
  );
}
