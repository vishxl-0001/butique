"use client";

import { useEffect, useState, useRef } from "react";
import { IconEtoile, IconCoeur } from "./icons/CoutureIcons";
import testimonialsData from "@/data/testimonials.json";

export default function TestimonialsSection() {
  const [starsFilled, setStarsFilled] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarsFilled(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 sm:py-28 bg-[#17121C] text-[#F8F2EA] relative overflow-hidden"
      aria-label="VIII · Témoignages et avis"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with verified rating & sequential stars */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0E0B12] border border-[#D8BE8F]/30 text-[#D8BE8F] text-[11px] tracking-widest uppercase mb-3">
              <IconCoeur className="w-3.5 h-3.5 text-[#D4688A] fill-[#D4688A]" />
              <span>VIII · Ils Ont Dit Oui</span>
            </div>
            <h2
              className="text-3xl sm:text-5xl font-serif text-[#F8F2EA] leading-tight"
              style={{ fontFamily: "var(--font-bodoni), Georgia, serif" }}
            >
              L&apos;émotion de nos <span className="italic text-[#D8BE8F]">mariées</span>.
            </h2>
          </div>

          {/* Rating Proof Card */}
          <div className="p-4 rounded-2xl bg-[#0E0B12] border border-[#D8BE8F]/30 flex items-center gap-4 shadow-xl">
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                {[1, 2, 3, 4, 5].map((starIdx) => {
                  const isPartiallyFilled = starIdx === 5;
                  return (
                    <div
                      key={starIdx}
                      className="relative transition-transform duration-500 ease-out"
                      style={{
                        transitionDelay: `${starIdx * 120}ms`,
                        transform: starsFilled ? "scale(1)" : "scale(0.6)",
                        opacity: starsFilled ? 1 : 0.2,
                      }}
                    >
                      {isPartiallyFilled ? (
                        <div className="relative w-4 h-4">
                          {/* empty star base */}
                          <IconEtoile className="w-4 h-4 text-white/20 fill-white/20" />
                          {/* 20% filled overlay */}
                          <div className="absolute inset-0 overflow-hidden w-[30%]">
                            <IconEtoile className="w-4 h-4 text-[#D8BE8F] fill-[#D8BE8F]" />
                          </div>
                        </div>
                      ) : (
                        <IconEtoile className="w-4 h-4 text-[#D8BE8F] fill-[#D8BE8F]" />
                      )}
                    </div>
                  );
                })}
                <span className="text-base font-serif font-bold text-[#F8F2EA] ml-1">
                  {testimonialsData.rating} / 5
                </span>
              </div>

              <span className="text-[11px] text-[#D9D5E4]/80 mt-0.5">
                Basé sur <strong>{testimonialsData.reviewCount} avis Google vérifiés</strong>
              </span>
            </div>

            <a
              href={testimonialsData.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-full bg-[#17121C] hover:bg-[#D4688A] text-xs font-semibold uppercase tracking-wider text-[#F8F2EA] transition-colors border border-white/10 shrink-0"
            >
              Lire les avis Google ↗
            </a>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonialsData.items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between p-6 rounded-3xl bg-[#0E0B12] border border-white/5 hover:border-[#D8BE8F]/30 transition-all duration-300 shadow-xl"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-[#D8BE8F] mb-4">
                  {[...Array(item.note)].map((_, i) => (
                    <IconEtoile key={i} className="w-3 h-3 fill-current" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-[#D9D5E4] font-serif italic leading-relaxed mb-6">
                  &ldquo;{item.texte}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                <div>
                  <h4 className="font-semibold text-[#F8F2EA]">{item.auteur}</h4>
                  <span className="text-[10px] text-[#D8BE8F] block">
                    {item.occasion} · {item.ville}
                  </span>
                </div>
                <span className="text-[10px] text-[#D4688A] bg-[#17121C] px-2 py-0.5 rounded-full border border-white/5">
                  Robe {item.robe}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer for demo honesty */}
        <p className="mt-8 text-center text-[10px] text-[#D9D5E4]/50 max-w-xl mx-auto">
          * {testimonialsData.disclaimer}
        </p>
      </div>
    </section>
  );
}
