import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { siteConfig } from "./siteConfig";

const roles = [
  {
    org: "AUC Data Science Experience",
    place: "Remote",
    title: "Student Researcher",
    period: "07/2026 — 07/2026",
    link: siteConfig.links.aucDataScience,
    points: [
      "Conducted research on cyber financial fraud in Ghana, examining its causes, impact on communities, and opportunities for prevention.",
      "Applied data science and research methods to analyze fraud trends and develop technology-driven solutions.",
      "Presented research findings and proposed strategies using AI, cybersecurity, and community-based approaches to combat cyber financial fraud.",
    ],
    photos: [] as { src: string; alt: string }[],
  },
  {
    org: "Code Raccoon",
    place: "Accra, Ghana",
    title: "Junior Software Engineer",
    period: "11/2025 — 07/2026",
    link: siteConfig.links.codeRaccoon,
    points: [
      "Developed responsive frontend features for an HR management system using Next.js, supporting employee management, HR operations, and leave requests.",
      "Integrated frontend components with RESTful APIs in collaboration with backend developers.",
      "Automated routine development tasks using Linux shell scripting to improve workflow efficiency.",
      "Used Wireshark to troubleshoot client–server network and performance issues.",
      "Collaborated with the team using Git and GitHub for version control and code management.",
    ],
    photos: [] as { src: string; alt: string }[],
  },
  {
    org: "IEEE Computer Society, Techable",
    place: "Kumasi, Ghana",
    title: "Software Development Instructor",
    period: "02/2025 — 04/2025",
    link: siteConfig.links.ieeeTechable,
    points: [
      "Taught an 8-week web development course on HTML5, CSS3, and accessibility for 30+ learners with disabilities.",
      "Assisted participants to set up development environments and create accessible, semantic websites while teaching key concepts like the CSS box model and web security.",
      "Introduced dev tools, including VS Code and WordPress, to equip students for real-world projects.",
    ],
    photos: [
      { src: "/images/volunteering-workshop.jpg", alt: "Michelle presenting during the IEEE Computer Society course" },
      { src: "/images/ieee-group.jpg", alt: "Group photo of the IEEE Computer Society cohort and organizers" },
    ],
  },
  {
    org: "Grundfos Ghana",
    place: "Accra, Ghana",
    title: "Software Engineering Intern",
    period: "09/2023 — 12/2023",
    link: siteConfig.links.grundfos,
    points: [
      "Advanced the Flow App with 8 new screens for Top Up, Add Customer, and Assign Card functionality in Java.",
      "Integrated an Android NFC reader for a wireless Top Up process.",
      "Built Customer Registration and Assign Card functionality.",
      "Completed the first prototype linking Assign Card, Log Out, and Top Up with the physical card-writing device.",
    ],
    photos: [] as { src: string; alt: string }[],
  },
    {
    org: "JPMorgan Chase & Co.",
    place: "Remote",
    title: "Software Engineering Virtual Experience Program on Forage",
    period: "11/2023 — 12/2023",
    link: siteConfig.links.forage,
    points: [
      "Set up a local dev environment by downloading the necessary files, tools and dependencies.",
      "Fixed broken files in the repository to make web application output correctly.",
      "Used JPMorgan Chase’s open source library called Perspective to generate a live graph that displays a data feed in a clear and visually appealing way for traders to monitor.",

    ],
    photos: [] as { src: string; alt: string }[],
  },
];

export default function Experience() {
  return (
    <section id="work" className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="rule-dots mb-16" />
      <p className="eyebrow mb-10">Professional Experience</p>
      <div className="space-y-16">
        {roles.map((role) => (
          <div key={role.org} className="grid gap-4 md:grid-cols-[220px_1fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest2 text-rose-600">
                {role.period}
              </p>
              <h3 className="mt-2 font-display text-xl text-plum-950">{role.org}</h3>
              <p className="text-sm text-plum-600">{role.place}</p>
              <a
                href={role.link}
                target="_blank"
                rel="noreferrer noopener"
                className="focus-ring mt-2 inline-flex items-center gap-1 font-mono text-xs text-rose-600 transition-colors hover:text-plum-950"
              >
                Visit <ExternalLink size={12} />
              </a>
            </div>
            <div>
              <h4 className="font-display text-lg text-plum-900">{role.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {role.points.map((point, i) => (
                  <li key={i} className="flex gap-3 text-plum-700">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              {role.photos.length > 0 && (
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {role.photos.map((photo) => (
                    <div
                      key={photo.src}
                      className="overflow-hidden rounded-2xl border-2 border-rose-100 shadow-sm"
                    >
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        width={1800}
                        height={1200}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
