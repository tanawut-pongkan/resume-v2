import React from 'react';
import { Globe2 } from 'lucide-react';
import { Language } from '../data/types';

interface LanguagesProps {
  items: Language[];
}

const Languages: React.FC<LanguagesProps> = ({ items }) => (
  <div className="grid gap-4 md:grid-cols-2">
    {items.map((lang) => (
      <div key={lang.language} className="card card-hover flex items-center gap-3">
        <div className="rounded-xl bg-accent/10 p-3 text-accent">
          <Globe2 className="h-5 w-5" aria-hidden />
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900 dark:text-white">{lang.language}</p>
          {lang.level ? <p className="text-xs text-slate-600 dark:text-slate-300">{lang.level}</p> : null}
        </div>
      </div>
    ))}
  </div>
);

export default Languages;
