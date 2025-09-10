import React from 'react';
import Section from './Section';
import { EXPERIENCE_DATA } from '../data/experience';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const ExperienceItem: React.FC<{
  experience: typeof EXPERIENCE_DATA[0];
  isLast: boolean;
  index: number;
}> = ({ experience, isLast, index }) => {
  const { ref, isIntersecting } = useIntersectionObserver<HTMLLIElement>({ threshold: 0.1 });
  
  // Classes for alternating layout on medium screens and up
  const positionClass = index % 2 !== 0 ? 'md:self-end md:pl-12' : 'md:self-start md:pr-12';
  const dotPosition = 'md:left-1/2 md:-ml-2.5';
  
  return (
    <li ref={ref} className={`flex flex-col md:w-1/2 ${positionClass} relative`}>
      {/* Mobile-only timeline line (part of the parent) */}
      {/* FIX: Used template literal for className to correctly apply dotPosition class. */}
      <div className={`absolute top-3 left-[-9px] w-5 h-5 bg-white dark:bg-sanofi-dark-blue border-2 border-sanofi-blue rounded-full z-10 ${dotPosition}`}></div>
      
      <div className={`pl-8 md:pl-0 transform transition-all duration-700 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <div className="bg-white dark:bg-slate-800 p-4 md:p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-bold font-display text-sanofi-blue dark:text-sky-300">{experience.role}</h3>
          <p className="font-semibold text-slate-700 dark:text-slate-300 text-sm">{experience.company}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{experience.date}</p>
          <ul className="mt-3 list-disc list-inside space-y-2 text-slate-600 dark:text-slate-300 text-sm">
            {experience.description.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
       {/* Spacer for desktop layout */}
       {/* FIX: Changed the empty div to be self-closing. This can help prevent subtle parsing errors. */}
      {!isLast && <div className="h-8 md:h-16" />}
    </li>
  );
};


const Experience: React.FC = () => {
  return (
    <Section id="experience" className="bg-slate-50 dark:bg-sanofi-dark-blue/95">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-sanofi-dark-blue dark:text-white mb-4">
          Mon Parcours
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
          Un parcours ciblé vers la data et l'intelligence artificielle, alliant excellence académique et expérience professionnelle concrète.
        </p>
      </div>

      <div className="mt-16 max-w-7xl mx-auto">
        <div className="relative">
          {/* Vertical line for both mobile and desktop */}
          <div className="absolute top-0 left-0 w-0.5 h-full bg-slate-300 dark:bg-slate-600 md:left-1/2 md:-ml-px" aria-hidden="true"></div>
          
          <ul className="flex flex-col items-start relative">
            {EXPERIENCE_DATA.map((exp, index) => (
              <ExperienceItem key={exp.id} experience={exp} index={index} isLast={index === EXPERIENCE_DATA.length - 1} />
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default Experience;