import React from 'react';
import { ResumeSkills } from '../data/types';

interface SkillsProps {
  skills: ResumeSkills;
}

const SkillPill: React.FC<{ text: string }> = ({ text }) => (
  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-700 dark:bg-slate-800 dark:text-slate-200">
    {text}
  </span>
);

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const categories = [
    { key: 'projectManagement', label: 'Project Management & Agile', items: skills.projectManagement },
    { key: 'itStrategyAndRisk', label: 'IT Strategy / Procurement / Risk', items: skills.itStrategyAndRisk },
    { key: 'softwareDevelopment', label: 'Software Development', items: skills.softwareDevelopment },
    { key: 'dataAnalyticsAndAutomation', label: 'Data Analytics & Automation', items: skills.dataAnalyticsAndAutomation },
    { key: 'cloudAndApi', label: 'Cloud & API Integration', items: skills.cloudAndApi },
    { key: 'leadershipAndCommunication', label: 'Leadership & Communication', items: skills.leadershipAndCommunication },
  ];

  return (
    <div className="space-y-6">
      <div className="card card-hover">
        <p className="text-sm font-semibold text-slate-900 dark:text-white">Raw skills from PDF</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {skills.raw.map((skill, idx) => (
            <SkillPill key={idx} text={skill} />
          ))}
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {categories.map((category) => (
          <div key={category.key} className="card card-hover space-y-3">
            <p className="text-sm font-semibold text-slate-900 dark:text-white">{category.label}</p>
            <div className="flex flex-wrap gap-2">
              {category.items.map((item, idx) => (
                <SkillPill key={idx} text={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
