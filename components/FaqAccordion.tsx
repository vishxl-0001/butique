"use client";

import { useState } from "react";
import faqData from "@/data/faq.json";

export default function FaqAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-[#0E0B12] text-[#F8F2EA] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#D8BE8F] block mb-2 font-medium">
            Vos Questions Fréquentes
          </span>
          <h2
            className="text-3xl sm:text-5xl font-serif text-[#F8F2EA]"
            style={{ fontFamily: "var(--font-bodoni), Georgia, serif" }}
          >
            Tout ce qu&apos;il faut savoir pour votre{" "}
            <span className="italic text-[#D8BE8F]">visite</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqData.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={item.id}
                className="rounded-2xl border border-white/10 bg-[#17121C]/60 overflow-hidden transition-colors hover:border-[#D8BE8F]/40"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span
                    className="text-base sm:text-lg font-serif text-[#F8F2EA]"
                    style={{ fontFamily: "var(--font-bodoni), Georgia, serif" }}
                  >
                    {item.question}
                  </span>
                  <span
                    className={`w-7 h-7 rounded-full border border-white/10 flex items-center justify-center shrink-0 text-[#D8BE8F] transition-transform duration-300 ${
                      isOpen ? "rotate-45 bg-[#D4688A] text-white border-transparent" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-[#D9D5E4]/85 leading-relaxed font-light border-t border-white/5 pt-4 animate-in fade-in duration-200">
                    <p>{item.reponse}</p>
                    {item.aConfirmer && (
                      <span className="inline-block mt-3 text-[10px] uppercase tracking-wider text-[#D8BE8F]/60">
                        * Modalité à confirmer lors de votre premier rendez-vous
                      </span>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
