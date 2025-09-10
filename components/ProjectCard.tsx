
import React from 'react';
import type { Project } from '../types';
import { ICONS } from '../constants';

export const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
      <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold font-display text-sanofi-blue dark:text-sky-300 mb-2">{project.title}</h3>
        <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span key={tech} className="bg-slate-200 dark:bg-slate-700 text-sanofi-blue dark:text-sky-200 text-xs font-semibold px-2.5 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
        <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center font-medium text-sanofi-blue dark:text-sanofi-gold hover:underline">
          Voir le projet
          <ICONS.ExternalLink className="w-4 h-4 ml-1" />
        </a>
      </div>
    </div>
  );
};
