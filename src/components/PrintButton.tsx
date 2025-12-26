import React from 'react';
import { Printer } from 'lucide-react';

const PrintButton: React.FC = () => (
  <button
    type="button"
    onClick={() => window.print()}
    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 motion-reduce:transform-none"
  >
    <Printer className="h-4 w-4" aria-hidden />
    Print
  </button>
);

export default PrintButton;
