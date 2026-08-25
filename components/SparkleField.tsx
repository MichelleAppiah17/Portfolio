"use client";

import { useEffect, useRef } from "react";

export default function SparkleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = (canvas.width = canvas.offsetWidth * devicePixelRatio);
    let height = (canvas.height = canvas.offsetHeight * devicePixelRatio);

    type Sparkle = {
      x: number;
      y: number;
      r: number;
      driftX: number;
      driftY: number;
      phase: number;
      speed: number;
      hue: "rose" | "gold";
    };

    const count = prefersReduced ? 0 : 34;
    const sparkles: Sparkle[] = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 2.2 + 0.8,
      driftX: (Math.random() - 0.5) * 0.12,
      driftY: (Math.random() - 0.5) * 0.12,
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.02 + 0.01,
      hue: Math.random() > 0.6 ? "gold" : "rose",
    }));

    let raf = 0;
    let t = 0;

    function resize() {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth * devicePixelRatio;
      height = canvas.height = canvas.offsetHeight * devicePixelRatio;
    }

    function tick() {
      if (!ctx) return;
      t += 1;
      ctx.clearRect(0, 0, width, height);
      for (const s of sparkles) {
        s.x += s.driftX * devicePixelRatio;
        s.y += s.driftY * devicePixelRatio;
        if (s.x < 0) s.x = width;
        if (s.x > width) s.x = 0;
        if (s.y < 0) s.y = height;
        if (s.y > height) s.y = 0;

        const twinkle = (Math.sin(t * s.speed + s.phase) + 1) / 2;
        const alpha = 0.15 + twinkle * 0.55;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r * devicePixelRatio, 0, Math.PI * 2);
        ctx.fillStyle =
          s.hue === "gold"
            ? `rgba(212, 160, 23, ${alpha})`
            : `rgba(238, 75, 132, ${alpha})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    }

    if (!prefersReduced) {
      raf = requestAnimationFrame(tick);
    }
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
