"use client";

import Image from "next/image";
import { IconPlay, IconInstagram } from "./icons/CoutureIcons";
import reelsData from "@/data/reels.json";

export default function ReelsRail() {
  return (
    <section className="w-full py-16 sm:py-24 bg-[#0E0B12] text-[#F8F2EA] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#D4688A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#17121C] border border-[#D8BE8F]/30 text-[#D8BE8F] text-[11px] tracking-widest uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4688A] animate-pulse" />
              <span>VII · Les Robes en Mouvement</span>
            </div>
            <h2
              className="text-2xl sm:text-4xl lg:text-5xl font-serif text-[#F8F2EA] leading-tight"
              style={{ fontFamily: "var(--font-bodoni), Georgia, serif" }}
            >
              Elles ont fait <span className="italic text-[#D8BE8F]">sensation</span>.
            </h2>
          </div>

          <a
            href="https://www.instagram.com/rue_des_princesses_66/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#D4688A] hover:text-[#F8F2EA] font-semibold transition-colors group"
          >
            <IconInstagram className="w-4 h-4 text-[#D4688A]" />
            <span>Suivez-nous sur Instagram @rue_des_princesses_66</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        {/* Swipe-snap carousel with peeking cards */}
        <div className="relative -mx-4 sm:-mx-6 lg:mx-0 px-4 sm:px-6 lg:px-0">
          <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scrollbar-none scroll-smooth">
            {reelsData.map((reel) => (
              <a
                key={reel.id}
                href={reel.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex-none w-[70vw] sm:w-[280px] md:w-[300px] aspect-[9/16] rounded-2xl overflow-hidden snap-start bg-[#17121C] border border-white/10 hover:border-[#D4688A]/60 shadow-xl transition-all duration-300 hover:shadow-[0_10px_30px_rgba(212,104,138,0.25)] hover:-translate-y-1"
                aria-label={`Regarder le reel Instagram : ${reel.titre}`}
              >
                {/* Poster image with slow zoom on hover */}
                <Image
                  src={reel.image}
                  alt={reel.titre}
                  fill
                  sizes="(max-width: 640px) 70vw, 300px"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                />

                {/* Dark gradient for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0B12] via-[#0E0B12]/20 to-black/30 group-hover:via-[#0E0B12]/40 transition-colors" />

                {/* Duration & Views Badge (Top) */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10 text-[10px] tracking-wider text-white">
                  <span className="px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
                    {reel.duree}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center gap-1 text-[#D8BE8F]">
                    <IconPlay className="w-2.5 h-2.5 fill-[#D8BE8F]" />
                    {reel.vues}
                  </span>
                </div>

                {/* Center Play Button with Pulse */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                  <div className="w-12 h-12 rounded-full bg-[#0E0B12]/80 border border-[#D8BE8F]/60 flex items-center justify-center text-white backdrop-blur-sm transition-transform duration-300 group-hover:scale-115 group-hover:bg-[#D4688A] group-hover:border-white shadow-lg">
                    <IconPlay className="w-4 h-4 ml-0.5 fill-current" />
                  </div>
                </div>

                {/* Bottom Title & Description */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <span className="text-[10px] tracking-widest uppercase text-[#D4688A] font-medium block mb-1">
                    Reel Instagram
                  </span>
                  <h3
                    className="text-sm font-serif font-semibold text-[#F8F2EA] leading-snug line-clamp-2 mb-1"
                    style={{ fontFamily: "var(--font-bodoni), Georgia, serif" }}
                  >
                    {reel.titre}
                  </h3>
                  <p className="text-[11px] text-[#D9D5E4]/80 line-clamp-2 font-light">
                    {reel.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Call to Action */}
        <div className="mt-8 text-center">
          <a
            href="https://www.instagram.com/rue_des_princesses_66/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#17121C] border border-[#D8BE8F]/40 hover:border-[#D4688A] text-[#F8F2EA] text-xs uppercase tracking-wider transition-all hover:scale-105"
          >
            <IconInstagram className="w-4 h-4 text-[#D4688A]" />
            <span>Découvrir l&apos;ensemble de nos vidéos sur @rue_des_princesses_66</span>
          </a>
        </div>
      </div>
    </section>
  );
}
