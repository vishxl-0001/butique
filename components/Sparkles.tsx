"use client";

import { useEffect, useRef } from "react";

interface Sparkle {
  x: number;
  y: number;
  size: number;
  alpha: number;
  speed: number;
  phase: number;
}

export default function Sparkles({ count = 22 }: { count?: number }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Respect reduced motion
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener("resize", handleResize);

    const sparkles: Sparkle[] = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.5 + 1.2,
      alpha: Math.random() * 0.7 + 0.2,
      speed: Math.random() * 0.02 + 0.008,
      phase: Math.random() * Math.PI * 2,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      sparkles.forEach((s) => {
        s.phase += s.speed;
        const currentAlpha = Math.max(
          0,
          Math.sin(s.phase) * s.alpha
        );

        if (currentAlpha > 0.05) {
          ctx.save();
          ctx.translate(s.x, s.y);

          // Draw 4-point star
          ctx.beginPath();
          const r = s.size;
          ctx.moveTo(0, -r * 2);
          ctx.quadraticCurveTo(0, 0, r * 2, 0);
          ctx.quadraticCurveTo(0, 0, 0, r * 2);
          ctx.quadraticCurveTo(0, 0, -r * 2, 0);
          ctx.quadraticCurveTo(0, 0, 0, -r * 2);

          const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, r * 2);
          gradient.addColorStop(0, `rgba(255, 255, 255, ${currentAlpha})`);
          gradient.addColorStop(0.5, `rgba(216, 190, 143, ${currentAlpha * 0.8})`);
          gradient.addColorStop(1, `rgba(212, 104, 138, 0)`);

          ctx.fillStyle = gradient;
          ctx.fill();
          ctx.restore();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-10 w-full h-full"
      aria-hidden="true"
    />
  );
}
