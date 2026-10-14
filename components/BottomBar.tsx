"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { IconTelephone, IconWhatsApp, IconCouronne } from "./icons/CoutureIcons";

export default function BottomBar() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide sticky bar when virtual keyboard opens on mobile devices
    const handleResize = () => {
      if (typeof window !== "undefined" && window.visualViewport) {
        const isKeyboard =
          window.innerHeight - window.visualViewport.height > 150;
        setIsVisible(!isKeyboard);
      }
    };

    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", handleResize);
    }
    return () => {
      if (window.visualViewport) {
        window.visualViewport.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  if (!isVisible) return null;

  return (
    <nav
      aria-label="Actions rapides mobiles"
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#0E0B12]/95 backdrop-blur-md border-t border-[#D8BE8F]/20 px-3 py-2.5 pb-[max(0.6rem,env(safe-area-inset-bottom))] shadow-[0_-8px_25px_rgba(0,0,0,0.6)]"
    >
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Appeler */}
        <a
          href="tel:+33646858626"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-[#17121C] border border-white/5 active:scale-95 transition-transform"
          aria-label="Appeler l'atelier au 06 46 85 86 26"
        >
          <IconTelephone className="w-4 h-4 text-[#D8BE8F] mb-1" />
          <span className="text-[11px] font-medium tracking-wider uppercase text-[#F8F2EA]">
            Appeler
          </span>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/33646858626?text=Bonjour,%20j'aimerais%20des%20renseignements%20sur%20vos%20robes%20de%20mari%C3%A9e"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-[#17121C] border border-[#25D366]/30 active:scale-95 transition-transform"
          aria-label="Contacter l'atelier sur WhatsApp"
        >
          <IconWhatsApp className="w-4 h-4 text-[#25D366] mb-1" />
          <span className="text-[11px] font-medium tracking-wider uppercase text-[#F8F2EA]">
            WhatsApp
          </span>
        </a>

        {/* Rendez-vous */}
        <Link
          href="/rendez-vous"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-gradient-to-r from-[#D4688A] to-[#BF5374] text-white active:scale-95 transition-transform shadow-[0_0_12px_rgba(212,104,138,0.4)]"
          aria-label="Prendre rendez-vous pour un essayage"
        >
          <IconCouronne className="w-4 h-4 text-white mb-1" />
          <span className="text-[11px] font-semibold tracking-wider uppercase text-white">
            Rendez-vous
          </span>
        </Link>
      </div>
    </nav>
  );
}
