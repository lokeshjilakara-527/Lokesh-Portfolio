import { Github, Linkedin, Mail } from 'lucide-react';
import { navItems, contact, profile } from '../data/portfolioData';

/**
 * Footer
 * Closing block: monogram, quick nav, social links, and copyright.
 */
export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
        {/* Brand */}
        <div>
          <a href="#home" className="flex items-center justify-center gap-2 md:justify-start">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent-gradient font-display text-sm font-bold text-white">
              LJ
            </span>
            <span className="font-display text-lg font-semibold">{profile.name}</span>
          </a>
          <p className="mt-2 text-sm text-slate-400">{profile.role}</p>
        </div>

        {/* Quick nav */}
        <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="font-mono text-sm text-slate-400 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Socials */}
        <div className="flex gap-4">
          <a href={contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-slate-400 hover:text-white">
            <Github size={20} />
          </a>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate-400 hover:text-white">
            <Linkedin size={20} />
          </a>
          <a href={`mailto:${contact.email}`} aria-label="Email" className="text-slate-400 hover:text-white">
            <Mail size={20} />
          </a>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-6xl border-t border-white/5 pt-6 text-center font-mono text-xs text-slate-500">
        © {new Date().getFullYear()} {profile.name}. Built with React, Tailwind CSS &amp; Framer Motion.
      </div>
    </footer>
  );
}
