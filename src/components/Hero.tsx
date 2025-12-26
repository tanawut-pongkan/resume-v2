import React from 'react';
import { Download, Mail, Phone, ExternalLink } from 'lucide-react';
import { ResumeData } from '../data/types';
import PrintButton from './PrintButton';

interface HeroProps {
  data: ResumeData;
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  const { basics, summary } = data;
  const downloadHref = '/tanawut-pongkan-cv.pdf';

  return (
    <section id="hero" className="relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white/80 p-8 shadow-sm backdrop-blur dark:border-slate-800/70 dark:bg-slate-900/60">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-slate-100/40 dark:from-accent/10 dark:to-slate-900/40" aria-hidden />
      <div className="absolute inset-y-0 right-0 w-1/2 bg-grid opacity-40" aria-hidden />
      <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex-1 space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">{basics.title}</p>
          <h1 className="text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
            {basics.name}
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-slate-700 dark:text-slate-200">
            {summary}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={downloadHref}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transform-none"
              download
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
            <a
              href={`mailto:${basics.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 motion-reduce:transform-none"
            >
              <Mail className="h-4 w-4" />
              Contact
            </a>
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 motion-reduce:transform-none"
            >
              <ExternalLink className="h-4 w-4" />
              Print
            </button>
            <a
              href={`tel:${basics.phone}`}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 motion-reduce:transform-none"
            >
              <Phone className="h-4 w-4" />
              Call
            </a>
          </div>
        </div>
        <div className="w-full max-w-xs space-y-4 rounded-2xl border border-slate-200/70 bg-white/80 p-4 shadow-sm dark:border-slate-800/70 dark:bg-slate-900/80">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-300">Location</p>
              <p className="text-sm font-semibold text-slate-900 dark:text-white">{basics.location}</p>
            </div>
            <PrintButton />
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between rounded-lg bg-slate-50 px-3 py-2 text-slate-700 dark:bg-slate-800 dark:text-slate-100">
              <span>Email</span>
              <span className="font-semibold">{basics.email}</span>
            </div>
            <div className="flex justify-between rounded-lg bg-slate-50 px-3 py-2 text-slate-700 dark:bg-slate-800 dark:text-slate-100">
              <span>Phone</span>
              <span className="font-semibold">{basics.phone}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
