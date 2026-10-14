"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Loader from "@/components/Loader";
import Sparkles from "@/components/Sparkles";
import Feathers from "@/components/Feathers";
import CoutureMarquee from "@/components/CoutureMarquee";
import LaTraineStory from "@/components/LaTraineStory";
import SilhouettesSection from "@/components/SilhouettesSection";
import CraftHotspots from "@/components/CraftHotspots";
import ColorStudio from "@/components/ColorStudio";
import AtelierTimeline from "@/components/AtelierTimeline";
import ReelsRail from "@/components/ReelsRail";
import TestimonialsSection from "@/components/TestimonialsSection";
import AddressAndGrid from "@/components/AddressAndGrid";
import FaqAccordion from "@/components/FaqAccordion";
import GownCard from "@/components/GownCard";
import GownBottomSheet, { GownData } from "@/components/GownBottomSheet";
import {
  IconCouronne,
  IconEtoile,
  IconAiguille,
} from "@/components/icons/CoutureIcons";
import gownsData from "@/data/gowns.json";

export default function HomePage() {
  const [selectedGown, setSelectedGown] = useState<GownData | null>(null);

  // Focus gown for the Craft Hotspots section
  const hotspotGown = gownsData[1]; // Cendrine with 3D flowers and sheer lace sleeves

  return (
    <div className="relative w-full bg-[#0E0B12] text-[#F8F2EA] overflow-hidden">
      {/* 1. LOADER (≈1.6s, once per session, skippable) */}
      <Loader />

      {/* 1. HERO (Dark Stage) */}
      <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 spotlight-stage overflow-hidden">
        {/* Soft spotlight cone from above */}
        <div className="spotlight-radial absolute inset-0 pointer-events-none" />

        {/* Twinkling crystal sparkles */}
        <Sparkles count={24} />

        {/* Floating ethereal feathers */}
        <Feathers count={5} />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-20">
          {/* Left: Headline & Couture Copy */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Top Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#17121C] border border-[#D8BE8F]/30 text-[#D8BE8F] text-[11px] sm:text-xs tracking-[0.2em] uppercase mb-6 shadow-sm">
              <IconCouronne className="w-3.5 h-3.5 text-[#D4688A]" />
              <span>Robes de mariée haute couture · Perpignan</span>
            </div>

            {/* H1 with Italic Accent */}
            <h1
              className="font-display-fluid text-[#F8F2EA] mb-6 tracking-tight max-w-2xl"
              style={{ fontFamily: "var(--font-bodoni), Georgia, serif" }}
            >
              Le jour où tout le monde se{" "}
              <span
                className="italic text-[#D4688A] drop-shadow-[0_0_25px_rgba(212,104,138,0.4)]"
                style={{ fontFamily: "var(--font-bodoni), Georgia, serif" }}
              >
                retourne
              </span>
              .
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base lg:text-lg text-[#D9D5E4]/90 font-light leading-relaxed max-w-xl mb-8">
              Cristaux, fleurs 3D, traînes cathédrale : des robes de princesse
              créées pour vous, rue des Princesses à Perpignan.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-8">
              <Link
                href="/rendez-vous"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#D4688A] hover:bg-[#BF5374] text-white text-xs uppercase tracking-widest font-semibold btn-shine-sweep shadow-[0_0_25px_rgba(212,104,138,0.4)] transition-all hover:scale-105 text-center"
              >
                Prendre rendez-vous
              </Link>

              <Link
                href="/les-mariees"
                className="w-full sm:w-auto px-6 py-4 rounded-full border border-[#D8BE8F]/40 hover:border-[#F8F2EA] text-[#F8F2EA] text-xs uppercase tracking-widest font-medium transition-colors text-center flex items-center justify-center gap-2 group"
              >
                <span>Voir les robes</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            {/* Rating Social Proof Line */}
            <a
              href="https://www.google.com/search?q=rue+des+princesses+perpignan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-[#D8BE8F] hover:text-[#F8F2EA] transition-colors"
            >
              <div className="flex items-center text-[#D8BE8F]">
                {[...Array(4)].map((_, i) => (
                  <IconEtoile key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
                <IconEtoile className="w-3.5 h-3.5 fill-current opacity-50" />
              </div>
              <span className="font-semibold text-[#F8F2EA]">★ 4,2 / 5</span>
              <span className="text-[#D9D5E4]/70">· 93 avis vérifiés Google</span>
            </a>
          </div>

          {/* Right: Arched Hero Gown Presentation */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-[999px_999px_0_0] overflow-hidden border border-[#D8BE8F]/40 bg-[#17121C] shadow-[0_20px_50px_rgba(0,0,0,0.8)] group">
              <Image
                src="/images/hero-gown-dark.jpg"
                alt="Robe de mariée haute couture Aurore avec traîne cathédrale sous un halo de lumière"
                fill
                priority
                sizes="(max-width: 640px) 100vw, 420px"
                className="object-cover object-center transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-106"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0B12] via-transparent to-transparent pointer-events-none" />

              {/* Bottom Label inside Arch */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-xs text-white">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#D4688A] block">
                    Modèle Signature
                  </span>
                  <span
                    className="font-serif text-lg text-[#F8F2EA]"
                    style={{ fontFamily: "var(--font-bodoni), Georgia, serif" }}
                  >
                    La Robe Aurore
                  </span>
                </div>

                <span className="text-[10px] uppercase tracking-wider text-[#D8BE8F] px-2.5 py-1 rounded-full bg-black/60 border border-[#D8BE8F]/30 backdrop-blur-sm">
                  Traîne 4,5 m
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MARQUEE */}
      <CoutureMarquee />

      {/* 3. I · LA TRAÎNE (Pinned Scroll Story) */}
      <LaTraineStory />

      {/* 4. II · LES SILHOUETTES */}
      <SilhouettesSection />

      {/* 5. III · DÉTAILS DE COUTURE (Hotspot Gown) */}
      <section className="py-20 sm:py-28 bg-[#0E0B12] text-[#F8F2EA] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#D8BE8F] font-medium">
              III · Haute Façon
            </span>
          </div>
          <CraftHotspots
            imageSrc={hotspotGown.image}
            alt="Détails de broderies fleurs 3D et cristaux sur la robe Cendrine"
            hotspots={hotspotGown.hotspots || []}
            title="Chaque détail est cousu avec patience."
            subtitle="Des heures de travail minutieux dans notre atelier pour assembler organza, cristaux et dentelle illusion."
          />
        </div>
      </section>

      {/* 6. IV · COUPS DE CŒUR (Collection Gowns Grid) */}
      <section className="py-20 sm:py-28 bg-[#17121C] text-[#F8F2EA] relative border-t border-[#D8BE8F]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0E0B12] border border-[#D8BE8F]/30 text-[#D8BE8F] text-[11px] tracking-widest uppercase mb-3">
                <IconAiguille className="w-3.5 h-3.5 text-[#D4688A]" />
                <span>IV · Coups de Cœur de l&apos;Atelier</span>
              </div>
              <h2
                className="text-3xl sm:text-5xl font-serif text-[#F8F2EA] leading-tight"
                style={{ fontFamily: "var(--font-bodoni), Georgia, serif" }}
              >
                Huit créations d&apos;<span className="italic text-[#D8BE8F]">exception</span>.
              </h2>
            </div>

            <Link
              href="/les-mariees"
              className="text-xs uppercase tracking-widest text-[#D4688A] hover:text-[#F8F2EA] font-semibold transition-colors flex items-center gap-1.5"
            >
              <span>Voir les filtres complets</span>
              <span>→</span>
            </Link>
          </div>

          {/* 8 Gowns Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {gownsData.map((gown) => (
              <GownCard
                key={gown.id}
                gown={gown}
                onSelect={(g) => setSelectedGown(g)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 7. V · IMAGINEZ-LA EN… Colour Studio */}
      <section className="py-20 sm:py-28 bg-[#0E0B12] text-[#F8F2EA] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#D8BE8F] font-medium">
              V · Créations Cérémonie & Fiançailles
            </span>
          </div>
          <ColorStudio />
        </div>
      </section>

      {/* 8. VI · DE L'IDÉE À LA ROBE (Atelier Timeline) */}
      <AtelierTimeline />

      {/* 9. VII · REELS RAIL */}
      <ReelsRail />

      {/* 10. VIII · ILS ONT DIT OUI (Testimonials) */}
      <TestimonialsSection />

      {/* 11. IX · NOTRE ADRESSE & INSTAGRAM GRID */}
      <AddressAndGrid />

      {/* 12. FAQ ACCORDION */}
      <FaqAccordion />

      {/* 13. FINAL CTA (Dark velvet) */}
      <section className="py-24 sm:py-32 bg-[#0E0B12] text-[#F8F2EA] relative overflow-hidden text-center border-t border-[#D8BE8F]/20">
        <div className="spotlight-radial absolute inset-0 pointer-events-none" />
        <Sparkles count={15} />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="w-12 h-12 rounded-full border border-[#D8BE8F]/50 flex items-center justify-center bg-[#17121C] mx-auto mb-6 shadow-[0_0_20px_rgba(212,104,138,0.3)]">
            <IconCouronne className="w-6 h-6 text-[#D4688A]" />
          </div>

          <h2
            className="text-3xl sm:text-5xl lg:text-6xl font-serif text-[#F8F2EA] leading-tight mb-4"
            style={{ fontFamily: "var(--font-bodoni), Georgia, serif" }}
          >
            Et si c&apos;était <span className="italic text-[#D4688A]">aujourd&apos;hui</span> ?
          </h2>

          <p className="text-sm sm:text-base text-[#D9D5E4]/90 font-light leading-relaxed max-w-lg mx-auto mb-8">
            Poussez la porte de notre atelier à Perpignan. Prenez place dans
            notre salon privé pour un moment suspendu d&apos;émotion et de magie.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/rendez-vous"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#D4688A] hover:bg-[#BF5374] text-white text-xs uppercase tracking-widest font-semibold btn-shine-sweep shadow-[0_0_25px_rgba(212,104,138,0.5)] transition-all hover:scale-105"
            >
              Prendre rendez-vous pour un essayage
            </Link>

            <a
              href="https://wa.me/33646858626"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-4 rounded-full border border-[#D8BE8F]/40 hover:border-[#F8F2EA] text-[#F8F2EA] text-xs uppercase tracking-widest font-medium transition-colors"
            >
              Échanger sur WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Global Gown Bottom Sheet (Opened when any gown card is clicked) */}
      <GownBottomSheet
        gown={selectedGown}
        onClose={() => setSelectedGown(null)}
      />
    </div>
  );
}
