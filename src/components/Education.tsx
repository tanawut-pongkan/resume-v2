import React from 'react';
import { GraduationCap } from 'lucide-react';
import { Education as EducationType } from '../data/types';

interface EducationProps {
  items: EducationType[];
}

const Education: React.FC<EducationProps> = ({ items }) => (
  <div className="space-y-4">
    {items.map((edu) => (
      <div key={edu.university} className="card card-hover avoid-break">
        <div className="flex items-start gap-3">
          <div className="mt-1 rounded-xl bg-accent/10 p-3 text-accent">
            <GraduationCap className="h-5 w-5" aria-hidden />
          </div>
          <div className="flex-1 space-y-2">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{edu.degree}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">{edu.university}</p>
              </div>
              <div className="text-sm font-medium text-slate-500 dark:text-slate-400">{edu.period}</div>
            </div>
            {edu.major ? <p className="text-sm text-slate-600 dark:text-slate-300">{edu.major}</p> : null}
            {edu.location ? <p className="text-sm text-slate-500 dark:text-slate-400">{edu.location}</p> : null}
            {edu.projects.length ? (
              <div className="space-y-2">
                {edu.projects.map((project) => (
                  <div key={project.title} className="rounded-lg bg-slate-50 px-3 py-2 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-100">
                    <p className="font-semibold">{project.title}</p>
                    <ul className="mt-1 list-disc space-y-1 pl-4">
                      {project.description.map((line, idx) => (
                        <li key={idx}>{line}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default Education;
