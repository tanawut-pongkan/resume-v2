import React from 'react';
import { Sparkles } from 'lucide-react';

interface AchievementsProps {
  items: string[];
}

const Achievements: React.FC<AchievementsProps> = ({ items }) => (
  <div className="card card-hover">
    <ul className="list-disc space-y-2 pl-5 text-sm text-slate-700 dark:text-slate-200">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-2">
          <Sparkles className="mt-0.5 h-4 w-4 text-accent" aria-hidden />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default Achievements;
