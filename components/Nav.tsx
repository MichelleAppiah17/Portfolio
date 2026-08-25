import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "./siteConfig";

const links = [
  { href: "#work", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#expertise", label: "Expertise" },
  { href: "#organizations", label: "Community" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-rose-200/70 bg-cream/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="focus-ring font-display text-lg font-semibold tracking-tight text-plum-950"
        >
          Michelle<span className="text-rose-600">.</span>
        </a>
        <ul className="hidden gap-7 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="focus-ring font-mono text-xs uppercase tracking-widest2 text-plum-700 transition-colors hover:text-rose-600"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            className="focus-ring rounded-full border border-rose-200 p-2 text-plum-700 transition-colors hover:border-rose-500 hover:text-rose-600"
          >
            <Github size={16} strokeWidth={2} />
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
            className="focus-ring rounded-full border border-rose-200 p-2 text-plum-700 transition-colors hover:border-rose-500 hover:text-rose-600"
          >
            <Linkedin size={16} strokeWidth={2} />
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="focus-ring hidden items-center gap-1.5 rounded-full bg-rose-600 px-4 py-2 font-mono text-xs uppercase tracking-widest2 text-cream transition-colors hover:bg-rose-500 sm:inline-flex"
          >
            <Mail size={14} strokeWidth={2} />
            Say hello
          </a>
        </div>
      </nav>
    </header>
  );
}
