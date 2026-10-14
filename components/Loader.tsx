"use client";

import { useEffect, useState } from "react";
import { IconCouronne, IconEtoile } from "./icons/CoutureIcons";

export default function Loader({ onComplete }: { onComplete?: () => void }) {
  const [visible, setVisible] = useState(true);
  const [liftVeil, setLiftVeil] = useState(false);

  useEffect(() => {
    // Check if user already saw the loader this session
    try {
      const seen = sessionStorage.getItem("rue_loader_seen");
      if (seen) {
        setVisible(false);
        onComplete?.();
        return;
      }
    } catch {
      // ignore
    }

    // Check prefers-reduced-motion
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setVisible(false);
      onComplete?.();
      return;
    }

    const timer1 = setTimeout(() => {
      setLiftVeil(true);
    }, 1200);

    const timer2 = setTimeout(() => {
      setVisible(false);
      try {
        sessionStorage.setItem("rue_loader_seen", "true");
      } catch {
        // ignore
      }
      onComplete?.();
    }, 1800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0E0B12] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        liftVeil ? "-translate-y-full opacity-90" : "translate-y-0 opacity-100"
      }`}
      aria-label="Chargement de l'atelier Rue des Princesses"
    >
      {/* Background radial spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(216,190,143,0.15)_0%,_rgba(14,11,18,1)_75%)] pointer-events-none" />

      {/* Center Crown & Sparkles Presentation */}
      <div className="relative flex flex-col items-center text-center z-10 px-6">
        {/* Sparkles constellation */}
        <div className="relative mb-6">
          <div className="w-20 h-20 rounded-full border border-[#D8BE8F]/40 flex items-center justify-center bg-[#17121C] shadow-[0_0_35px_rgba(212,104,138,0.3)] animate-pulse">
            <IconCouronne className="w-10 h-10 text-[#D8BE8F]" />
          </div>

          <IconEtoile className="absolute -top-3 -right-2 w-4 h-4 text-[#D4688A] animate-ping" />
          <IconEtoile className="absolute -bottom-1 -left-3 w-3 h-3 text-[#D8BE8F] animate-bounce" />
          <IconEtoile className="absolute top-1/2 -left-5 w-2.5 h-2.5 text-[#F8F2EA] animate-pulse" />
        </div>

        {/* Script Brand Title */}
        <h1
          className="text-3xl sm:text-4xl text-[#F8F2EA] mb-2 tracking-wide font-normal"
          style={{ fontFamily: "var(--font-pinyon), cursive" }}
        >
          <span className="text-[#D4688A]">Rue des Princesses</span>
        </h1>

        <p className="label-small-caps text-[#D8BE8F] tracking-[0.25em] text-[10px]">
          Haute Couture · Atelier Perpignan
        </p>

        {/* Drawing thread progress */}
        <div className="w-32 h-[1px] bg-white/10 mt-6 relative overflow-hidden">
          <div className="h-full bg-gradient-to-r from-transparent via-[#D4688A] to-[#D8BE8F] animate-[shimmer_1.4s_infinite]" />
        </div>

        {/* Skip button for user convenience */}
        <button
          onClick={() => {
            setVisible(false);
            sessionStorage.setItem("rue_loader_seen", "true");
            onComplete?.();
          }}
          className="mt-8 text-[10px] uppercase tracking-widest text-[#D9D5E4]/50 hover:text-[#D4688A] transition-colors underline cursor-pointer"
        >
          Passer l&apos;introduction
        </button>
      </div>
    </div>
  );
}
