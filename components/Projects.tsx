import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "./siteConfig";

const projects = [
  {
    title: "ApexHR",
    tag: "Full-Stack Multi-Tenant SaaS HRMS",
    period: "04/2026 — 08/2026",
    description:
     "A multi-tenant HR management system designed to streamline employee management, leave requests, approvals, policies, and administrative workflows, with role-based access and secure authentication across organizations.",
    stack: ["Next.js", "MariaDB", "Nest.js"],
    link: siteConfig.links.apexhrProject,
    linkLabel: "View demo",
  },
  {
    title: "Smart Home Automation System",
    tag: "Robotics & IoT",
    period: "06/2025 — 08/2025",
    description:
      "A robotics-based home automation system that controls and automates household functions, integrating sensors, microcontrollers, and programming logic for smart device interaction and automated responses.",
    stack: ["Embedded C", "Sensors", "Microcontrollers", "IoT"],
    link: siteConfig.links.smartHomeProject,
    linkLabel: "View demo",
  },
  {
    title: "Book Inventory Application",
    tag: "Full-Stack , AI",
    period: "2023",
    description:
      "A digital book management platform for browsing, organizing, and managing collections, with secure authentication, social login, an AI-powered recommendation system, and a reading planner to track progress.",
    stack: ["React", "Node.js", "MongoDB", "Recommendation Engine"],
    link: siteConfig.links.bookInventoryProject,
    linkLabel: "Visit live site",
  },
  {
  title: "MembersOnly",
  tag: "Full-Stack Authentication & Authorization",
  period: "2026",
  description:
    "A full-stack clubhouse application built to practice user authentication and authorization, allowing members to create posts, access exclusive content, and manage permissions based on membership and admin status.",
  stack: ["Node.js", "Express", "PostgreSQL", "Passport.js", "EJS"],
  link: siteConfig.links.membersonlyProject,
  linkLabel: "View demo",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="rule-dots mb-16" />
      <p className="eyebrow mb-10">Selected Projects</p>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noreferrer noopener"
            className="focus-ring group flex flex-col justify-between rounded-3xl border-2 border-rose-100 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-rose-400 hover:shadow-lg hover:shadow-rose-200/50"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-[0.65rem] uppercase tracking-widest2 text-rose-600">
                  {project.tag}
                </span>
                <span className="font-mono text-[0.65rem] text-plum-500">{project.period}</span>
              </div>
              <h3 className="mt-4 font-display text-2xl text-plum-950">{project.title}</h3>
              <p className="mt-4 text-plum-700">{project.description}</p>
            </div>
            <div>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-rose-50 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-wide text-rose-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <span className="mt-6 inline-flex items-center gap-1 font-mono text-xs uppercase tracking-widest2 text-plum-950 transition-colors group-hover:text-rose-600">
                {project.linkLabel}
                <ArrowUpRight size={14} />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
