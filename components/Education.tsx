import { siteConfig } from "./siteConfig";

const education = [
  {
    org: "Kwame Nkrumah University of Science and Technology",
    place: "Ghana",
    title: "B.Sc. Computer Science Graduate",
    period: "01/2022 — 09/2025",
    link: undefined,
    points: [
      "Relevant courses: Data Structures and Algorithms, Java, C++, Databases, Discrete Mathematics.",
    ],
  },
  {
    org: "The Odin Project",
    place: "Software Development Course",
    title: "Full-Stack Web Development Training",
    period: "10/2022 — 11/2023",
    link: siteConfig.links.theOdinProject,
    points: [
      "Computer and web fundamentals, Git and GitHub basics, DOM manipulation, ES6+, and object-oriented programming.",
      "React.js, Node.js, RESTful API design and integration, database management with MongoDB, and deployment and hosting of applications.",
    ],
  },
];

export default function Education() {
  return (
    <section id="education" className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="rule-dots mb-16" />
      <p className="eyebrow mb-10">Education</p>
      <div className="space-y-16">
        {education.map((item) => (
          <div key={item.org} className="grid gap-4 md:grid-cols-[220px_1fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest2 text-rose-600">
                {item.period}
              </p>
              <h3 className="mt-2 font-display text-xl text-plum-950">{item.org}</h3>
              <p className="text-sm text-plum-600">{item.place}</p>
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="focus-ring mt-2 inline-block font-mono text-xs text-rose-600 transition-colors hover:text-plum-950"
                >
                  Visit →
                </a>
              )}
            </div>
            <div>
              <h4 className="font-display text-lg text-plum-900">{item.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {item.points.map((point, i) => (
                  <li key={i} className="flex gap-3 text-plum-700">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
