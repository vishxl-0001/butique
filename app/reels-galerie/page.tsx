"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ReelsRail from "@/components/ReelsRail";
import { IconInstagram, IconFacebook, IconCouronne } from "@/components/icons/CoutureIcons";

const GALLERY_PHOTOS = [
  {
    src: "/images/real/real-bride-glitter-ballgown.jpg",
    title: "Éclat Scintillant de Princesse",
    category: "Salon Privé & Essayage",
    aspect: "aspect-[3/4]",
  },
  {
    src: "/images/hero-gown-dark.jpg",
    title: "La Robe Aurore sous le Projecteur",
    category: "Traîne Cathédrale",
    aspect: "aspect-[4/5]",
  },
  {
    src: "/images/real/real-cathedral-train-hall.jpg",
    title: "L'Arrivée Triomphale dans l'Allée",
    category: "Célébration",
    aspect: "aspect-[3/4]",
  },
  {
    src: "/images/real/real-mannequin-corset-flowers.jpg",
    title: "Fleurs 3D & Manches Illusion",
    category: "Détails Haute Couture",
    aspect: "aspect-[4/5]",
  },
  {
    src: "/images/real/real-couple-veil.jpg",
    title: "Le Voile Festonné au Soleil Couchant",
    category: "Romantisme Extérieur",
    aspect: "aspect-[3/4]",
  },
  {
    src: "/images/corset-cristaux-macro.jpg",
    title: "Incrustation Millimétrée de Cristaux",
    category: "Macro Joaillerie",
    aspect: "aspect-[4/5]",
  },
  {
    src: "/images/robe-bleu-glace.jpg",
    title: "Nuages de Tulle Bleu Glacier",
    category: "Fiançailles & Réceptions",
    aspect: "aspect-[3/4]",
  },
  {
    src: "/images/real/real-bride-gazebo-train.jpg",
    title: "La Robe Capucine sous la Gloriette",
    category: "Majesté Royale",
    aspect: "aspect-[4/5]",
  },
  {
    src: "/images/atelier-mains-couture.jpg",
    title: "Le Travail d'Aiguille à l'Atelier",
    category: "Artisanat d'Art",
    aspect: "aspect-[3/4]",
  },
];

export default function ReelsGaleriePage() {
  const [activePhoto, setActivePhoto] = useState<{ src: string; title: string; category: string } | null>(null);

  return (
    <div className="min-h-screen bg-[#0E0B12] text-[#F8F2EA] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Breadcrumbs & Title */}
        <div className="py-8 sm:py-12 border-b border-white/10">
          <div className="flex items-center gap-2 text-xs text-[#D8BE8F] mb-3">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span>/</span>
            <span className="text-[#D4688A]">Reels & Galerie</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#D8BE8F] block mb-2">
                Instantanés d&apos;Émotion & Vidéos
              </span>
              <h1
                className="text-3xl sm:text-5xl lg:text-6xl font-serif text-[#F8F2EA]"
                style={{ fontFamily: "var(--font-bodoni), Georgia, serif" }}
              >
                Reels & Galerie d&apos;<span className="italic text-[#D4688A]">Atelier</span>.
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/rue_des_princesses_66/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-[#17121C] border border-[#D4688A]/50 hover:bg-[#D4688A] text-xs font-semibold uppercase tracking-wider text-[#F8F2EA] flex items-center gap-2 transition-all"
              >
                <IconInstagram className="w-4 h-4 text-[#D4688A] group-hover:text-white" />
                @rue_des_princesses_66
              </a>
              <a
                href="https://www.facebook.com/hautecouture66/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-[#17121C] border border-white/10 hover:border-white/40 text-xs font-semibold uppercase tracking-wider text-[#F8F2EA] flex items-center gap-2 transition-all"
              >
                <IconFacebook className="w-4 h-4" />
                Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Reels Rail Section */}
        <ReelsRail />

        {/* Masonry Editorial Photo Gallery */}
        <section className="py-16 border-t border-white/10">
          <div className="text-center mb-12">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#D8BE8F] block mb-2 font-medium">
              Portfolio Visuel
            </span>
            <h2
              className="text-3xl sm:text-5xl font-serif text-[#F8F2EA]"
              style={{ fontFamily: "var(--font-bodoni), Georgia, serif" }}
            >
              Les Mariées de l&apos;<span className="italic text-[#D8BE8F]">Atelier</span>
            </h2>
            <p className="text-xs text-[#D9D5E4]/60 mt-2 max-w-lg mx-auto">
              Photos issues des créations réelles de notre atelier à Perpignan.
            </p>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {GALLERY_PHOTOS.map((photo, idx) => (
              <div
                key={idx}
                onClick={() => setActivePhoto(photo)}
                className="group relative break-inside-avoid rounded-2xl overflow-hidden bg-[#17121C] border border-white/10 hover:border-[#D4688A]/60 shadow-xl cursor-pointer transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`relative w-full ${photo.aspect}`}>
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E0B12] via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <span className="text-[10px] uppercase tracking-wider text-[#D4688A] block font-medium">
                      {photo.category}
                    </span>
                    <h3
                      className="text-base font-serif text-[#F8F2EA] leading-snug"
                      style={{ fontFamily: "var(--font-bodoni), Georgia, serif" }}
                    >
                      {photo.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Lightbox Modal */}
        {activePhoto && (
          <div
            className="fixed inset-0 z-[70] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
            onClick={() => setActivePhoto(null)}
          >
            <div
              className="relative max-w-3xl w-full max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActivePhoto(null)}
                className="self-end mb-3 px-3 py-1 rounded-full bg-white/10 hover:bg-[#D4688A] text-white text-xs uppercase tracking-wider"
              >
                Fermer ✕
              </button>

              <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] max-h-[75vh] rounded-2xl overflow-hidden border border-[#D8BE8F]/40 shadow-2xl bg-[#0E0B12]">
                <Image
                  src={activePhoto.src}
                  alt={activePhoto.title}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="mt-4 text-center">
                <span className="text-[10px] uppercase tracking-widest text-[#D4688A]">
                  {activePhoto.category}
                </span>
                <h3
                  className="text-xl font-serif text-[#F8F2EA] mt-0.5"
                  style={{ fontFamily: "var(--font-bodoni), Georgia, serif" }}
                >
                  {activePhoto.title}
                </h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
