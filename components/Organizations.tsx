import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { siteConfig } from "./siteConfig";

const orgs = [
  {
    org: "IEEE Computer Society",
    title: "Web Master",
    place: "Kumasi, Ghana",
    period: "03/2025 — 08/2025",
    link: undefined,
    points: [
      "Maintain and update the IEEE Computer Society website.",
      "Coordinate event and content publishing.",
    ],
  },
  {
    org: "Enactus KNUST",
    title: "Publicity and Tech Team Member",
    place: "Kumasi, Ghana",
    period: "01/2024 — 08/2025",
    link: siteConfig.links.enactusKnust,
    points: [
      "Assist the publicity head in capturing photos during Saturday meetings and project site visits.",
      "Design meeting agendas using Canva and PowerPoint.",
    ],
  },
  {
    org: "DiV (Developers in Vogue), KNUST",
    title: "Unit Head",
    place: "Kumasi, Ghana",
    period: "08/2023 — 08/2024",
    link: siteConfig.links.div,
    points: [
      "Collaborated with the lead to organize 4 virtual webinars on GitHub with 60+ attendees.",
      "Orchestrated recruitment strategies that drew 70+ applications — a 140% increase over the previous year.",
    ],
  },
];

const galleryImages = [
  {
    src: "/images/ieee-presenting.jpg",
    alt: "Michelle helping students during a tech workshop",
  },
  {
    src: "/images/finegirl.jpeg",
    alt: "Michelle presenting at an IEEE event",
  },
];

export default function Organizations() {
  return (
    <section id="organizations" className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="rule-dots mb-16" />
      <p className="eyebrow mb-10">Community &amp; Volunteering</p>
      <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-start">
        <div className="space-y-10">
          {orgs.map((item) => (
            <div key={item.org}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-lg text-plum-950">
                  {item.title} <span className="text-rose-600">· {item.org}</span>
                </h3>
                <span className="font-mono text-xs uppercase tracking-widest2 text-plum-500">
                  {item.period}
                </span>
              </div>
              <p className="text-sm text-plum-500">{item.place}</p>
              <ul className="mt-3 space-y-2">
                {item.points.map((point, i) => (
                  <li key={i} className="flex gap-3 text-plum-700">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="focus-ring mt-2 inline-flex items-center gap-1 font-mono text-xs text-rose-600 transition-colors hover:text-plum-950"
                >
                  Visit <ExternalLink size={12} />
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-1">
          {galleryImages.map((img) => (
            <div
              key={img.src}
              className="relative aspect-[4/5] overflow-hidden rounded-3xl border-2 border-rose-100 shadow-sm lg:aspect-[16/10]"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}