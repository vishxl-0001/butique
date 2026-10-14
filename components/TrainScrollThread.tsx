"use client";

import { useEffect, useState } from "react";

export default function TrainScrollThread() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll <= 0) return;
      const currentScroll = window.scrollY;
      const progress = Math.min(Math.max(currentScroll / totalScroll, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside
      aria-label="Progression de défilement La Traîne"
      className="fixed right-2 md:right-4 top-24 bottom-24 w-[2px] pointer-events-none z-40 hidden sm:flex flex-col items-center justify-start opacity-70"
    >
      {/* Starting crown sparkle */}
      <div className="w-1.5 h-1.5 rounded-full bg-[#D4688A] shadow-[0_0_8px_#D4688A]" />

      {/* Track line */}
      <div className="w-[1px] flex-1 bg-white/10 relative overflow-hidden my-1">
        {/* Animated progressive gold/pink thread */}
        <div
          className="w-full bg-gradient-to-b from-[#D4688A] via-[#D8BE8F] to-[#D4688A] transition-all duration-150 ease-out origin-top shadow-[0_0_6px_#D4688A]"
          style={{ height: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Trailing crystal needle tip */}
      <div
        className="w-1 h-2 bg-[#D8BE8F] rounded-full transition-all duration-150"
        style={{
          opacity: scrollProgress > 0.02 ? 1 : 0.3,
          transform: `scale(${1 + scrollProgress * 0.4})`,
        }}
      />
    </aside>
  );
}
