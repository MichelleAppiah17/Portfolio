"use client";

import { useEffect, useRef, useState } from "react";

const expertise = [
  "Artificial Intelligence & Intelligent Computing",
  "Cybersecurity & Computer Security",
  "AI Infrastructure & Computational Systems",
  "Intrusion Detection & Security Analysis",
  "Network Security & Data Communication",
  "Expert Systems & Knowledge-Based Computing",
  "Database Systems & Data Management",
  "Information Systems & System Analysis",
  "Incident Handling & Digital Forensics",
  "Operating Systems & System-Level Computing",
];

const skillGroups: { label: string; items: string[] }[] = [
  { label: "Languages", items: ["JavaScript", "Python", "Java", "C++"] },
  { label: "Databases", items: ["MongoDB", "PostgreSQL", "MySQL", "MariaDB"] },
  { label: "Testing", items: ["JUnit", "Jest", "Selenium", "Pytest"] },
  { label: "Tools & Platforms", items: ["Git", "GitHub", "GitLab", "Firebase", "Docker", "Android Studio"] },
  { label: "Frameworks", items: ["React", "Next.js", "Vite", "Angular", "NestJs", "Metronic"] },
  { label: "Web", items: ["HTML5", "CSS3", "RESTful APIs"] },
  { label: "Robotics & IoT", items: ["Arduino", "Sensor Integration", "Microcontrollers", "IoT"] },
  { label: "Other", items: ["Fiber Optics", "Communication", "Time Management"] },
];

type Skill = { name: string; level: number }; // level 0–100
type Bed = { label: string; flower: string; skills: Skill[] };

const proficiencyBeds: Bed[] = [
  {
    label: "Frontend Development",
    flower: "🌸",
    skills: [
      { name: "React / Next.js", level: 88 },
      { name: "Angular", level: 65 },
      { name: "HTML5 & CSS3", level: 90 },
      { name: "JavaScript / TypeScript", level: 85 },
    ],
  },
  {
    label: "Backend Development",
    flower: "🌿",
    skills: [
      { name: "NestJs", level: 72 },
      { name: "RESTful APIs", level: 82 },
      { name: "MongoDB", level: 78 },
      { name: "PostgreSQL / MySQL", level: 74 },
    ],
  },
  {
    label: "Programming Languages",
    flower: "🌻",
    skills: [
      { name: "Python", level: 85 },
      { name: "Java", level: 76 },
      { name: "C++", level: 68 },
      { name: "JavaScript", level: 85 },
    ],
  },
  {
    label: "Systems & Field Experience",
    flower: "🌷",
    skills: [
      { name: "Cybersecurity & Networks", level: 74 },
      { name: "Docker & Git Workflows", level: 78 },
      { name: "Arduino & IoT", level: 65 },
      { name: "Digital Forensics", level: 62 },
    ],
  },
];

function proficiencyLabel(level: number) {
  if (level >= 85) return "Expert";
  if (level >= 70) return "Advanced";
  if (level >= 50) return "Proficient";
  return "Working Knowledge";
}

function Flower({
  skill,
  emoji,
  grow,
  delay,
}: {
  skill: Skill;
  emoji: string;
  grow: boolean;
  delay: number;
}) {
  const stemHeight = Math.max(skill.level, 18);
  const bloomScale = 0.65 + (skill.level / 100) * 0.6;

  return (
    <div className="flex h-full flex-1 flex-col items-center justify-end">
      <span
        role="img"
        aria-label={`${skill.name}: ${proficiencyLabel(skill.level)}`}
        className="origin-bottom text-2xl transition-all ease-out sm:text-3xl"
        style={{
          transform: grow ? `scale(${bloomScale})` : "scale(0)",
          opacity: grow ? 1 : 0,
          transitionDuration: "700ms",
          transitionDelay: `${delay + 500}ms`,
        }}
      >
        {emoji}
      </span>
      <div
        className="w-[3px] rounded-full bg-rose-300 transition-[height] ease-out"
        style={{
          height: grow ? `${stemHeight * 0.5}px` : "0px",
          transitionDuration: "900ms",
          transitionDelay: `${delay}ms`,
        }}
      />
      <p className="mt-3 max-w-[7rem] text-center text-[11px] leading-tight text-plum-700 sm:text-xs">
        {skill.name}
      </p>
      <p className="font-mono text-[10px] uppercase tracking-widest2 text-rose-500">
        {proficiencyLabel(skill.level)}
      </p>
    </div>
  );
}

export default function Expertise() {
  const gardenRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = gardenRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="expertise" className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="rule-dots mb-16" />
      <p className="eyebrow mb-10">Core Expertise</p>
      <div className="grid gap-x-8 gap-y-1 sm:grid-cols-2">
        {expertise.map((item) => (
          <div
            key={item}
            className="flex items-baseline gap-3 border-b border-rose-100 py-3 font-display text-lg text-plum-900"
          >
            <span className="text-rose-500">✦</span>
            {item}
          </div>
        ))}
      </div>

      <p className="eyebrow mb-8 mt-20">Skills</p>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group) => (
          <div key={group.label} className="rounded-2xl bg-rose-50/60 p-5">
            <h3 className="font-mono text-xs uppercase tracking-widest2 text-rose-600">
              {group.label}
            </h3>
            <ul className="mt-3 space-y-1.5">
              {group.items.map((item) => (
                <li key={item} className="text-plum-800">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="eyebrow mb-8 mt-20">Proficiency</p>
      <div ref={gardenRef} className="grid gap-8 sm:grid-cols-2">
        {proficiencyBeds.map((bed) => (
          <div
            key={bed.label}
            className="rounded-[2rem] border-2 border-rose-100 bg-rose-50/60 px-6 pb-0 pt-6 shadow-sm"
          >
            <h3 className="font-mono text-xs uppercase tracking-widest2 text-rose-600">
              {bed.label}
            </h3>
            <div className="mt-6 flex h-40 items-end justify-around gap-2 sm:h-44">
              {bed.skills.map((skill, i) => (
                <Flower
                  key={skill.name}
                  skill={skill}
                  emoji={bed.flower}
                  grow={inView}
                  delay={i * 150}
                />
              ))}
            </div>
            <div className="mt-4 h-3 w-[calc(100%+3rem)] -translate-x-6 bg-gradient-to-b from-rose-200 to-rose-300/70" />
          </div>
        ))}
      </div>
    </section>
  );
}