"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { IconCouronne } from "./icons/CoutureIcons";

export default function PageTransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Check prefers-reduced-motion
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 450);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div className="relative w-full">
      {/* Route change veil overlay */}
      <div
        className={`fixed inset-0 z-50 pointer-events-none transition-all duration-500 ease-out flex items-center justify-center bg-[#0E0B12] ${
          isTransitioning
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full"
        }`}
        aria-hidden="true"
      >
        <div className="flex flex-col items-center gap-3 scale-90 animate-pulse">
          <div className="w-12 h-12 rounded-full border border-[#D8BE8F]/50 flex items-center justify-center bg-[#17121C]">
            <IconCouronne className="w-6 h-6 text-[#D4688A]" />
          </div>
          <span
            className="text-lg text-[#D8BE8F]"
            style={{ fontFamily: "var(--font-pinyon), cursive" }}
          >
            Rue des Princesses
          </span>
        </div>
      </div>

      {children}
    </div>
  );
}
