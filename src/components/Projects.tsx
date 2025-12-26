import React from 'react';
import { FolderGit2, Link as LinkIcon } from 'lucide-react';
import { Project } from '../data/types';

interface ProjectsProps {
  items: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ items }) => (
  <div className="grid gap-4 md:grid-cols-2">
    {items.map((project) => (
      <div key={project.name} className="card card-hover flex flex-col gap-3">
        <div className="flex items-start gap-3">
          <div className="rounded-xl bg-accent/10 p-3 text-accent">
            <FolderGit2 className="h-5 w-5" aria-hidden />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{project.name}</h3>
              {project.period ? <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">{project.period}</p> : null}
            </div>
            {project.role ? <p className="text-sm text-slate-600 dark:text-slate-300">{project.role}</p> : null}
          </div>
        </div>
        {project.description ? <p className="text-sm text-slate-700 dark:text-slate-200">{project.description}</p> : null}
        <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700 dark:text-slate-200">
          {project.impact.map((line, idx) => (
            <li key={idx}>{line}</li>
          ))}
        </ul>
        {project.technologies.length ? (
          <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-200">
            {project.technologies.map((tech) => (
              <span key={tech} className="rounded-full bg-slate-100 px-3 py-1 dark:bg-slate-800">
                {tech}
              </span>
            ))}
          </div>
        ) : null}
        {project.links && project.links.length ? (
          <div className="flex flex-wrap gap-3 pt-1 text-sm">
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="inline-flex items-center gap-1 text-accent underline-offset-4 hover:underline"
              >
                <LinkIcon className="h-4 w-4" />
                {link.label}
              </a>
            ))}
          </div>
        ) : null}
      </div>
    ))}
    <div className="card bg-accent/10 text-sm font-semibold text-accent">TODO: add more projects.</div>
  </div>
);

export default Projects;
