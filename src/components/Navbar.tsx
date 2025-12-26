import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import PrintButton from './PrintButton';

export type SectionLink = { id: string; label: string };

interface NavbarProps {
  sections: SectionLink[];
  activeId: string;
  locale: 'en' | 'th';
  onLocaleToggle: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ sections, activeId, locale, onLocaleToggle }) => {
  const [open, setOpen] = useState(false);

  const handleNavClick = () => setOpen(false);

  return (
    <nav className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-slate-800/70 dark:bg-slate-950/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
            <span className="font-semibold">TP</span>
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-300">Tanawut Pongkan</p>
            <p className="text-base font-semibold text-slate-900 dark:text-white">IT Project Manager</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-1 rounded-full border border-slate-200/80 bg-white px-1 py-1 text-sm shadow-sm dark:border-slate-800/70 dark:bg-slate-900 md:flex">
            <button
              type="button"
              onClick={onLocaleToggle}
              className="rounded-full px-3 py-1 font-semibold transition hover:bg-accent/10 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              {locale === 'en' ? 'EN' : 'TH'}
            </button>
          </div>
          <div className="hidden items-center gap-1 md:flex">
            <PrintButton />
          </div>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 text-slate-600 transition hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:text-slate-200 dark:hover:bg-slate-800 md:hidden"
            aria-label="Toggle navigation"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      <div className="hidden border-t border-slate-200/70 md:block dark:border-slate-800/70">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`rounded-full px-3 py-2 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                  activeId === section.id
                    ? 'bg-accent/10 text-accent'
                    : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
                }`}
              >
                {section.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="rounded-full bg-accent px-3 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transform-none"
          >
            Contact
          </a>
        </div>
      </div>
      {open ? (
        <div className="border-t border-slate-200/80 bg-white px-4 py-3 shadow-sm dark:border-slate-800/70 dark:bg-slate-900 md:hidden">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onLocaleToggle}
                className="rounded-full border border-slate-200 px-3 py-2 text-sm font-semibold transition hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:border-slate-700"
              >
                Language: {locale.toUpperCase()}
              </button>
              <PrintButton />
            </div>
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={handleNavClick}
                className={`rounded-lg px-3 py-2 text-sm font-semibold transition ${
                  activeId === section.id ? 'bg-accent/10 text-accent' : 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800'
                }`}
              >
                {section.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={handleNavClick}
              className="rounded-lg bg-accent px-3 py-2 text-center text-sm font-semibold text-white shadow-sm"
            >
              Contact
            </a>
          </div>
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
