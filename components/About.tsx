
import React from 'react';
import Section from './Section';

const About: React.FC = () => {
  const skills = ["Python", "SQL", "Power BI", "GCP", "IA Santé", "Data Engineering"];

  return (
    <Section id="about" className="bg-white dark:bg-sanofi-dark-blue">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-3">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-sanofi-dark-blue dark:text-white mb-6">
            À Propos de Moi
          </h2>
          <div className="space-y-4 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            <p>
              Passionné par la convergence de la donnée et de la santé, je me spécialise dans la création de solutions data qui ont un impact tangible. Mon parcours m'a permis de développer une double compétence : la rigueur analytique du data analyst et la vision architecturale de l'engineer.
            </p>
            <p>
              Je crois fermement que les données, lorsqu'elles sont bien exploitées, peuvent transformer le secteur de la santé, de l'optimisation des essais cliniques à la personnalisation des parcours de soins. Mon objectif est de traduire des problématiques médicales complexes en stratégies data claires et en outils décisionnels performants.
            </p>
          </div>
        </div>
        <div className="md:col-span-2">
          <div className="bg-slate-100 dark:bg-slate-800/50 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-sanofi-blue dark:text-sky-300 mb-4">Mon Expertise</h3>
            <ul className="space-y-3">
              {skills.map(skill => (
                <li key={skill} className="flex items-center">
                  <svg className="w-5 h-5 text-sanofi-gold mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium text-slate-700 dark:text-slate-200">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
