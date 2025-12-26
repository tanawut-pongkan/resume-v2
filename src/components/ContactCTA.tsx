import React from 'react';
import { Mail } from 'lucide-react';
import { ResumeData } from '../data/types';

interface ContactCTAProps {
  data: ResumeData;
}

const ContactCTA: React.FC<ContactCTAProps> = ({ data }) => (
  <div className="card card-hover flex flex-col items-start gap-4 bg-gradient-to-r from-accent/10 to-slate-100 dark:from-accent/15 dark:to-slate-900">
    <div>
      <p className="text-sm font-semibold text-accent">Next step</p>
      <h3 className="text-xl font-bold text-slate-900 dark:text-white">Let’s connect</h3>
      <p className="text-sm text-slate-700 dark:text-slate-200">
        Prefer email? Click below to reach Tanawut directly.
      </p>
    </div>
    <a
      href={`mailto:${data.basics.email}`}
      className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transform-none"
    >
      <Mail className="h-4 w-4" aria-hidden />
      Email Tanawut
    </a>
  </div>
);

export default ContactCTA;
