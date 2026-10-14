"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IconCouronne, IconCoeur, IconWhatsApp, IconEtoile } from "@/components/icons/CoutureIcons";
import accessoriesData from "@/data/accessories.json";

export default function AccessoiresPage() {
  const [addedItems, setAddedItems] = useState<string[]>([]);

  const handleAdd = (id: string) => {
    if (addedItems.includes(id)) {
      setAddedItems(addedItems.filter((i) => i !== id));
    } else {
      setAddedItems([...addedItems, id]);
    }
  };

  return (
    <div className="min-h-screen bg-[#0E0B12] text-[#F8F2EA] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Breadcrumbs & Title */}
        <div className="py-8 sm:py-12 border-b border-white/10">
          <div className="flex items-center gap-2 text-xs text-[#D8BE8F] mb-3">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span>/</span>
            <span className="text-[#D4688A]">Accessoires</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#D8BE8F] block mb-2">
                Parures & Ornements de Mariée
              </span>
              <h1
                className="text-3xl sm:text-5xl lg:text-6xl font-serif text-[#F8F2EA]"
                style={{ fontFamily: "var(--font-bodoni), Georgia, serif" }}
              >
                Voiles, Couronnes & <span className="italic text-[#D4688A]">Bijoux</span>.
              </h1>
            </div>

            <p className="text-xs sm:text-sm text-[#D9D5E4]/80 max-w-md font-light leading-relaxed">
              La touche finale qui scelle votre allure de reine. Des créations
              d&apos;art pensées en harmonie avec nos traînes et corsets.
            </p>
          </div>
        </div>

        {/* Accessories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-12">
          {accessoriesData.map((item) => {
            const isAdded = addedItems.includes(item.id);
            return (
              <div
                key={item.id}
                className="flex flex-col bg-[#17121C] rounded-3xl p-4 border border-white/5 hover:border-[#D8BE8F]/40 transition-all duration-300 shadow-xl"
              >
                {/* Photo */}
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-[#0E0B12] border border-white/10 mb-4 group">
                  <Image
                    src={item.image}
                    alt={item.nom}
                    fill
                    sizes="(max-width: 640px) 100vw, 300px"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-106"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E0B12]/80 via-transparent to-transparent pointer-events-none" />

                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-[#0E0B12]/80 border border-white/10 text-[9px] uppercase tracking-wider text-[#D8BE8F]">
                    {item.categorie}
                  </span>
                </div>

                <div className="flex flex-col flex-1">
                  <h3
                    className="text-lg font-serif text-[#F8F2EA] mb-1"
                    style={{ fontFamily: "var(--font-bodoni), Georgia, serif" }}
                  >
                    {item.nom}
                  </h3>

                  <p className="text-xs text-[#D9D5E4]/80 font-light leading-relaxed mb-4 flex-1">
                    {item.description}
                  </p>

                  <div className="p-2.5 rounded-xl bg-[#0E0B12] border border-white/5 text-[11px] text-[#D8BE8F] mb-4">
                    <span className="block text-[9px] uppercase tracking-wider text-white/50">Matière :</span>
                    {item.matiere}
                  </div>

                  {/* Add to selection button */}
                  <button
                    onClick={() => handleAdd(item.id)}
                    className={`w-full py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all flex items-center justify-center gap-2 ${
                      isAdded
                        ? "bg-[#D4688A] text-white"
                        : "bg-[#0E0B12] hover:bg-white/10 text-[#F8F2EA] border border-white/10"
                    }`}
                  >
                    <IconCoeur className={`w-3.5 h-3.5 ${isAdded ? "fill-white" : ""}`} />
                    <span>{isAdded ? "Ajouté à ma sélection" : "Ajouter à ma sélection"}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-[#17121C] to-[#0E0B12] border border-[#D8BE8F]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4
              className="text-xl sm:text-2xl font-serif text-[#F8F2EA] mb-1"
              style={{ fontFamily: "var(--font-bodoni), Georgia, serif" }}
            >
              Envie d&apos;essayer nos voiles avec votre robe ?
            </h4>
            <p className="text-xs text-[#D9D5E4]/80">
              Chaque accessoire peut être adapté selon la longueur de votre traîne et votre coiffure.
            </p>
          </div>

          <a
            href="https://wa.me/33646858626?text=Bonjour,%20j'aimerais%20découvrir%20vos%20accessoires%20et%20voiles%20en%20salon%20privé."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-full bg-[#25D366] text-white text-xs uppercase tracking-wider font-semibold flex items-center gap-2 shrink-0"
          >
            <IconWhatsApp className="w-4 h-4 text-white" />
            Demander un conseil accessoire
          </a>
        </div>
      </div>
    </div>
  );
}
