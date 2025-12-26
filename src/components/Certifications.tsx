import React from 'react';
import { Award } from 'lucide-react';
import { Certification } from '../data/types';

interface CertificationsProps {
  items: Certification[];
}

const Certifications: React.FC<CertificationsProps> = ({ items }) => (
  <div className="grid gap-4 md:grid-cols-2">
    {items.map((cert) => (
      <div key={cert.name} className="card card-hover flex items-center gap-3">
        <div className="rounded-xl bg-accent/10 p-3 text-accent">
          <Award className="h-5 w-5" aria-hidden />
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900 dark:text-white">{cert.name}</p>
          {cert.issuer ? <p className="text-xs text-slate-600 dark:text-slate-300">{cert.issuer}</p> : null}
          {cert.year ? <p className="text-xs text-slate-500 dark:text-slate-400">{cert.year}</p> : null}
        </div>
      </div>
    ))}
  </div>
);

export default Certifications;
