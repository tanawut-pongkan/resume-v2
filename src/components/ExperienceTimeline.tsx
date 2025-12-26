import React from 'react';
import { Briefcase } from 'lucide-react';
import { Experience } from '../data/types';

interface ExperienceTimelineProps {
  items: Experience[];
}

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ items }) => (
  <div className="space-y-6">
    {items.map((item) => (
      <div key={`${item.company}-${item.role}`} className="card card-hover avoid-break">
        <div className="flex items-start gap-3">
          <div className="mt-1 rounded-xl bg-accent/10 p-3 text-accent">
            <Briefcase className="h-5 w-5" aria-hidden />
          </div>
          <div className="flex-1 space-y-2">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.role}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">{item.company}</p>
              </div>
              <div className="text-sm font-medium text-slate-500 dark:text-slate-400">{item.period}</div>
            </div>
            {item.location ? <p className="text-sm text-slate-500 dark:text-slate-400">{item.location}</p> : null}
            {item.description ? <p className="text-sm text-slate-700 dark:text-slate-200">{item.description}</p> : null}
            <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700 dark:text-slate-200">
              {item.responsibilities.map((resp, index) => (
                <li key={index}>{resp}</li>
              ))}
            </ul>
            {item.technologies && item.technologies.length ? (
              <div className="flex flex-wrap gap-2 pt-1">
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default ExperienceTimeline;
