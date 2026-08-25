"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";
import SparkleField from "./SparkleField";
import { siteConfig } from "./siteConfig";

type TypewriterLine = {
  text: string;
  className?: string;
  as?: "span" | "div";
};

function SequentialTypewriter({
  lines,
  speed = 32,
  pauseBetween = 250,
}: {
  lines: TypewriterLine[];
  speed?: number;
  pauseBetween?: number;
}) {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    setLineIndex(0);
    setCharIndex(0);
  }, [lines]);

  useEffect(() => {
    if (lineIndex >= lines.length) return;
    const current = lines[lineIndex].text;

    if (charIndex < current.length) {
      const timeout = setTimeout(() => {
        setCharIndex((c) => c + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }

    if (lineIndex < lines.length - 1) {
      const timeout = setTimeout(() => {
        setLineIndex((l) => l + 1);
        setCharIndex(0);
      }, pauseBetween);
      return () => clearTimeout(timeout);
    }
  }, [lineIndex, charIndex, lines, speed, pauseBetween]);

  return (
    <>
      {lines.map((line, i) => {
        const Tag = line.as ?? "span";
        const isCurrent = i === lineIndex;
        const isDone = i < lineIndex;
        const text = isDone ? line.text : isCurrent ? line.text.slice(0, charIndex) : "";

        return (
          <Tag key={i} className={line.className}>
            {text}
            {isCurrent && charIndex < line.text.length && (
              <span className="animate-pulse">|</span>
            )}
          </Tag>
        );
      })}
    </>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-cream bg-hero-glow pt-32 pb-20 sm:pt-40"
    >
      <SparkleField />
      <div className="relative z-10 mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <p className="eyebrow mb-5">Accra, Ghana · Software Engineer &amp; Researcher</p>

          <div className="min-h-[15rem] sm:min-h-[17rem] lg:min-h-[18rem]">
            <SequentialTypewriter
              lines={[
                {
                  text: "Hello! I'm Michelle Appiah.",
                  as: "div",
                  className:
                    "font-display text-4xl font-semibold leading-[1.1] tracking-tight text-plum-950 sm:text-5xl lg:text-6xl",
                },
                {
                  text: "I build secure intelligent softwares.",
                  as: "div",
                  className:
                    "mt-3 font-display text-2xl font-medium leading-snug tracking-tight text-plum-950 sm:text-3xl lg:text-4xl",
                },
                {
                  text: "- with a little sparkle.",
                  as: "div",
                  className:
                    "mt-1 font-display text-lg font-medium italic leading-snug tracking-tight text-rose-600 sm:text-xl lg:text-2xl",
                },
                {
                  text: "I connect research in AI and cybersecurity with winning full-stack products.",
                  as: "div",
                  className: "mt-4 max-w-xl text-lg leading-relaxed text-plum-800 sm:text-xl",
                },
              ]}
            />
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="focus-ring rounded-full bg-plum-950 px-6 py-3 font-mono text-xs uppercase tracking-widest2 text-cream transition-colors hover:bg-rose-600"
            >
              View experience
            </a>
            <a
              href="#projects"
              className="focus-ring rounded-full border-2 border-plum-950 px-6 py-3 font-mono text-xs uppercase tracking-widest2 text-plum-950 transition-colors hover:border-rose-600 hover:text-rose-600"
            >
              See projects
            </a>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub"
              className="focus-ring text-plum-700 transition-colors hover:text-rose-600"
            >
              <Github size={20} />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
              className="focus-ring text-plum-700 transition-colors hover:text-rose-600"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              aria-label="Email"
              className="focus-ring text-plum-700 transition-colors hover:text-rose-600"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div
            aria-hidden="true"
            className="blob absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-rose-300 via-rose-200 to-gold-400 opacity-70 blur-2xl"
          />
          <div className="relative overflow-hidden rounded-[2.5rem] border-4 border-cream shadow-xl shadow-rose-900/10">
            <Image
              src="/images/headshot-primary.jpg"
              alt="Portrait of Michelle Appiah"
              width={1400}
              height={1750}
              priority
              className="h-full w-full object-cover"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute -bottom-5 -left-5 rounded-2xl bg-plum-950 px-5 py-3 font-mono text-xs uppercase tracking-widest2 text-cream shadow-lg"
          >
            AI × Cybersecurity
          </div>
        </div>
      </div>
    </section>
  );
}