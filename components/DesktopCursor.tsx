"use client";

import { useEffect, useState } from "react";
import { IconCouronne } from "./icons/CoutureIcons";

export default function DesktopCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHoveredGown, setIsHoveredGown] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only activate on devices with a fine pointer (desktop mouse)
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const gownEl = target.closest("[data-cursor='gown']");
      setIsHoveredGown(Boolean(gownEl));

      const clickable = target.closest("a, button, [role='button'], input, select");
      setIsPointer(Boolean(clickable) && !gownEl);
    };

    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="fixed pointer-events-none z-[99999] transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2 hidden md:block"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      {isHoveredGown ? (
        <div className="flex flex-col items-center justify-center w-18 h-18 rounded-full bg-[#0E0B12]/85 backdrop-blur-md border border-[#D8BE8F]/60 text-[#D8BE8F] shadow-[0_0_20px_rgba(212,104,138,0.3)] animate-in zoom-in-75 duration-200">
          <IconCouronne className="w-5 h-5 text-[#D4688A] mb-0.5" />
          <span className="text-[10px] uppercase tracking-widest font-medium text-[#F8F2EA]">
            Voir
          </span>
        </div>
      ) : (
        <div
          className={`rounded-full border transition-all duration-200 ${
            isPointer
              ? "w-8 h-8 border-[#D4688A] bg-[#D4688A]/10 scale-125"
              : "w-5 h-5 border-[#D8BE8F]/50 bg-transparent"
          }`}
        />
      )}
    </div>
  );
}
