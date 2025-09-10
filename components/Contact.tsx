
import React from 'react';
import Section from './Section';
import { SOCIAL_LINKS, ICONS } from '../constants';

const Contact: React.FC = () => {
  return (
    <Section id="contact" className="bg-slate-50 dark:bg-sanofi-dark-blue/95">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-sanofi-dark-blue dark:text-white mb-4">
          Contact
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
          Je suis toujours ouvert à de nouvelles opportunités et collaborations. N'hésitez pas à me contacter.
        </p>
        <a 
          href={SOCIAL_LINKS.email} 
          className="text-xl md:text-2xl font-semibold text-sanofi-blue dark:text-sky-300 hover:underline inline-block p-2"
        >
          myanis.zedira@gmail.com
        </a>
        <div className="mt-8 flex justify-center gap-6">
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-sanofi-blue dark:hover:text-white transition-transform hover:scale-110">
            <ICONS.LinkedIn className="w-8 h-8" />
          </a>
          <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-sanofi-blue dark:hover:text-white transition-transform hover:scale-110">
            <ICONS.GitHub className="w-8 h-8" />
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
