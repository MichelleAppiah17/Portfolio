import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { siteConfig } from "./siteConfig";

export default function Footer() {
  return (
    <footer id="contact" className="relative mx-auto max-w-6xl px-6 pb-16 pt-24">
      <div className="rule-dots mb-16" />
      <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-end">
        <div>
          <p className="eyebrow mb-6">Contact</p>
          <h2 className="font-display text-4xl text-plum-950 sm:text-5xl">
            Let&apos;s build something
            <br />
            <span className="italic text-rose-600">bold and secure.</span>
          </h2>
        </div>
        <div className="space-y-3 md:text-right">
          <a
            href={`mailto:${siteConfig.email}`}
            className="focus-ring flex items-center gap-2 font-mono text-lg text-plum-900 transition-colors hover:text-rose-600 md:justify-end"
          >
            <Mail size={16} />
            {siteConfig.email}
          </a>
          <a
            href={siteConfig.phoneHref}
            className="focus-ring flex items-center gap-2 font-mono text-plum-600 transition-colors hover:text-rose-600 md:justify-end"
          >
            <Phone size={14} />
            {siteConfig.phone}
          </a>
          <p className="font-mono text-sm text-plum-500">{siteConfig.location}</p>
          <div className="flex gap-3 pt-2 md:justify-end">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub"
              className="focus-ring rounded-full border border-rose-200 p-2.5 text-plum-700 transition-colors hover:border-rose-500 hover:text-rose-600"
            >
              <Github size={18} />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
              className="focus-ring rounded-full border border-rose-200 p-2.5 text-plum-700 transition-colors hover:border-rose-500 hover:text-rose-600"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-20 flex flex-col gap-2 border-t border-rose-100 pt-6 font-mono text-xs uppercase tracking-widest2 text-plum-400 sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} Michelle Appiah</span>
      </div>
    </footer>
  );
}
