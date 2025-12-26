import React from 'react';

interface AboutProps {
  summary: string;
}

const About: React.FC<AboutProps> = ({ summary }) => (
  <div className="card card-hover text-base leading-relaxed text-slate-700 dark:text-slate-200">
    {summary}
  </div>
);

export default About;
