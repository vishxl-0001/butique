"use client";

import { useEffect, useState } from "react";
import { IconPlume } from "./icons/CoutureIcons";

interface FeatherItem {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  rotation: number;
}

export default function Feathers({ count = 5 }: { count?: number }) {
  const [feathers, setFeathers] = useState<FeatherItem[]>([]);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const items: FeatherItem[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 85 + 5,
      delay: Math.random() * 6,
      duration: Math.random() * 8 + 12,
      size: Math.random() * 12 + 18,
      rotation: Math.random() * 90 - 45,
    }));
    setFeathers(items);
  }, [count]);

  if (feathers.length === 0) return null;

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden z-10"
      aria-hidden="true"
    >
      {feathers.map((f) => (
        <div
          key={f.id}
          className="absolute text-white/20 will-change-transform"
          style={{
            left: `${f.left}%`,
            top: "-10%",
            animation: `driftDown ${f.duration}s linear infinite`,
            animationDelay: `${f.delay}s`,
            transform: `rotate(${f.rotation}deg)`,
          }}
        >
          <IconPlume
            className="drop-shadow-[0_2px_8px_rgba(255,255,255,0.15)]"
            style={{ width: `${f.size}px`, height: `${f.size}px` }}
          />
        </div>
      ))}

      <style jsx>{`
        @keyframes driftDown {
          0% {
            transform: translateY(0) rotate(0deg) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.35;
          }
          50% {
            transform: translateY(50vh) rotate(25deg) translateX(25px);
          }
          90% {
            opacity: 0.25;
          }
          100% {
            transform: translateY(115vh) rotate(50deg) translateX(-15px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
