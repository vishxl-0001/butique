"use client";

import { useState } from "react";
import Image from "next/image";
import { IconEtoile, IconWhatsApp } from "./icons/CoutureIcons";

interface Swatch {
  id: string;
  name: string;
  hex: string;
  description: string;
  overlayStyle: React.CSSProperties;
}

const SWATCHES: Swatch[] = [
  {
    id: "ivoire",
    name: "Ivoire Impérial",
    hex: "#F8F2EA",
    description: "La pureté traditionnelle avec un éclat soyeux et chaleureux.",
    overlayStyle: {
      mixBlendMode: "overlay",
      backgroundColor: "rgba(248, 242, 234, 0.1)",
    },
  },
  {
    id: "bleu-glace",
    name: "Bleu Glacé",
    hex: "#A9C8E8",
    description: "Notre signature atelier : féerie glacée pour réceptions et fiançailles.",
    overlayStyle: {
      mixBlendMode: "color",
      backgroundColor: "rgba(120, 175, 225, 0.55)",
    },
  },
  {
    id: "blush",
    name: "Blush Poudré",
    hex: "#E8A4B8",
    description: "Une nuance romantique et douce, subtilement rosée sous la lumière.",
    overlayStyle: {
      mixBlendMode: "color",
      backgroundColor: "rgba(225, 130, 160, 0.45)",
    },
  },
  {
    id: "champagne",
    name: "Champagne Royal",
    hex: "#D8BE8F",
    description: "Élégance aristocratique aux reflets dorés et ambrés.",
    overlayStyle: {
      mixBlendMode: "color",
      backgroundColor: "rgba(216, 175, 110, 0.45)",
    },
  },
  {
    id: "rouge-profond",
    name: "Rouge Rubis Profond",
    hex: "#851C2C",
    description: "Théâtrale, audacieuse et passionnée pour des célébrations inoubliables.",
    overlayStyle: {
      mixBlendMode: "color",
      backgroundColor: "rgba(145, 20, 45, 0.6)",
    },
  },
];

export default function ColorStudio() {
  const [selectedSwatch, setSelectedSwatch] = useState<Swatch>(SWATCHES[1]); // default to Bleu Glacé
  const [sparkleBurst, setSparkleBurst] = useState(false);

  const handleSelect = (swatch: Swatch) => {
    setSelectedSwatch(swatch);
    setSparkleBurst(true);
    setTimeout(() => setSparkleBurst(false), 800);
  };

  return (
    <div className="w-full max-w-5xl mx-auto rounded-3xl bg-gradient-to-b from-[#17121C] to-[#0E0B12] border border-[#D8BE8F]/30 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
      {/* Background radial spotlight */}
      <div
        className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none transition-all duration-700 opacity-20"
        style={{ backgroundColor: selectedSwatch.hex }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Image display with dynamic color blend */}
        <div className="lg:col-span-6 flex flex-col items-center">
          <div className="relative w-full aspect-[4/5] max-w-sm rounded-[999px_999px_0_0] overflow-hidden border border-[#D8BE8F]/40 shadow-2xl bg-[#0E0B12]">
            {/* Base gown photo: robe-bleu-glace or hero gown */}
            <Image
              src={
                selectedSwatch.id === "bleu-glace"
                  ? "/images/robe-bleu-glace.jpg"
                  : "/images/hero-gown-dark.jpg"
              }
              alt={`Robe de mariée haute couture en nuance ${selectedSwatch.name}`}
              fill
              sizes="(max-width: 640px) 100vw, 400px"
              className="object-cover object-center transition-all duration-700"
            />

            {/* Dynamic CSS Color Tint Blend Overlay */}
            {selectedSwatch.id !== "bleu-glace" && (
              <div
                className="absolute inset-0 transition-all duration-700 pointer-events-none"
                style={selectedSwatch.overlayStyle}
              />
            )}

            {/* Sparkle burst overlay on color change */}
            {sparkleBurst && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <IconEtoile
                  className="w-12 h-12 text-white animate-ping"
                  style={{ color: selectedSwatch.hex }}
                />
              </div>
            )}

            {/* Current Color Label Chip */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#0E0B12]/85 border border-[#D8BE8F]/40 backdrop-blur-md flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-full border border-white/40 shadow-sm"
                style={{ backgroundColor: selectedSwatch.hex }}
              />
              <span className="text-xs uppercase tracking-wider font-serif text-[#F8F2EA]">
                {selectedSwatch.name}
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Swatch Selector & Custom Order CTA */}
        <div className="lg:col-span-6 flex flex-col gap-6 text-left">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0E0B12] border border-[#D8BE8F]/30 text-[#D8BE8F] text-[11px] tracking-widest uppercase mb-3">
              <IconEtoile className="w-3 h-3 text-[#D4688A]" />
              <span>Studio de Nuances Personnalisées</span>
            </div>

            <h2
              className="text-2xl sm:text-4xl text-[#F8F2EA] font-serif leading-tight mb-2"
              style={{ fontFamily: "var(--font-bodoni), Georgia, serif" }}
            >
              Imaginez-la en{" "}
              <span
                className="italic transition-colors duration-500"
                style={{ color: selectedSwatch.hex === "#F8F2EA" ? "#D8BE8F" : selectedSwatch.hex }}
              >
                {selectedSwatch.name}
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-[#D9D5E4]/80 leading-relaxed">
              Chaque robe de notre atelier peut être imaginée dans la couleur de
              votre rêve. Pour vos fiançailles, votre henné ou un mariage à
              l&apos;identité inoubliable.
            </p>
          </div>

          {/* Color Swatch Circles */}
          <div>
            <span className="text-[10px] uppercase tracking-widest text-[#D8BE8F] font-semibold block mb-3">
              Choisissez une teinte :
            </span>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {SWATCHES.map((swatch) => {
                const isSelected = selectedSwatch.id === swatch.id;
                return (
                  <button
                    key={swatch.id}
                    type="button"
                    onClick={() => handleSelect(swatch)}
                    className={`group relative flex flex-col items-center gap-1.5 focus:outline-none`}
                    aria-label={`Nuance ${swatch.name}`}
                  >
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                        isSelected
                          ? "border-[#D4688A] scale-110 shadow-[0_0_15px_rgba(212,104,138,0.5)]"
                          : "border-white/20 hover:border-white/60 hover:scale-105"
                      }`}
                      style={{ backgroundColor: swatch.hex }}
                    >
                      {isSelected && (
                        <IconEtoile className="w-4 h-4 text-white drop-shadow-md" />
                      )}
                    </div>
                    <span
                      className={`text-[10px] tracking-wider transition-colors ${
                        isSelected ? "text-[#D4688A] font-semibold" : "text-[#D9D5E4]/70"
                      }`}
                    >
                      {swatch.name.split(" ")[0]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Nuance Description */}
          <div className="p-3.5 rounded-xl bg-[#0E0B12]/80 border border-white/5 text-xs text-[#D9D5E4]">
            <p className="italic font-serif text-sm text-[#F8F2EA] mb-0.5">
              &ldquo;{selectedSwatch.description}&rdquo;
            </p>
            <span className="text-[10px] text-[#D8BE8F]">
              Teinture artisanale & soies choisies à la commande.
            </span>
          </div>

          {/* CTA: Prefilled WhatsApp Consultation */}
          <a
            href={`https://wa.me/33646858626?text=Bonjour,%20j'ai%20d%C3%A9couvert%20votre%20atelier%20et%20j'aimerais%20imaginer%20une%20robe%20dans%20la%20nuance%20${encodeURIComponent(
              selectedSwatch.name
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#D4688A] hover:bg-[#BF5374] text-white text-xs uppercase tracking-wider font-semibold btn-shine-sweep shadow-[0_0_20px_rgba(212,104,138,0.4)] transition-all"
          >
            <IconWhatsApp className="w-4 h-4 text-white" />
            Demander cette création en {selectedSwatch.name}
          </a>
        </div>
      </div>
    </div>
  );
}
