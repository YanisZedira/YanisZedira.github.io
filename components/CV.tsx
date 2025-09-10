import React from 'react';
import Section from './Section';
import { ICONS, GITHUB_REPO_URL } from '../constants';

const CV: React.FC = () => {
  const cvUrl = `${GITHUB_REPO_URL}CV_Yanis_Zedira_Data.pdf`;

  return (
    <Section id="cv" className="bg-white dark:bg-sanofi-dark-blue">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-sanofi-dark-blue dark:text-white mb-8">
          Mon CV
        </h2>
        <a 
          href={cvUrl}
          download="CV_Yanis_Zedira_Data.pdf"
          className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-sanofi-blue hover:bg-blue-800 dark:hover:bg-blue-600 transition-transform hover:scale-105 shadow-lg"
        >
          <ICONS.Download className="w-6 h-6 mr-3" />
          Télécharger mon CV
        </a>
      </div>
      <div className="mt-12 max-w-4xl mx-auto">
        <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-lg shadow-2xl overflow-hidden">
          <iframe 
            src={cvUrl}
            title="CV de Yanis Zedira" 
            className="w-full h-[600px] md:h-[800px] lg:h-[1000px]"
          />
        </div>
      </div>
    </Section>
  );
};

export default CV;