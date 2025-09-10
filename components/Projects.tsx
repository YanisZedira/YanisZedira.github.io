
import React from 'react';
import Section from './Section';
import { ProjectCard } from './ProjectCard';
import { PROJECTS_DATA } from '../data/projects';

const Projects: React.FC = () => {
  return (
    <Section id="projects" className="bg-white dark:bg-sanofi-dark-blue">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-sanofi-dark-blue dark:text-white mb-4">
          Projets
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
          Voici une sélection de projets qui illustrent mon expertise en analyse de données, ingénierie et visualisation, avec un focus sur le secteur de la santé.
        </p>
      </div>
      <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS_DATA.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
