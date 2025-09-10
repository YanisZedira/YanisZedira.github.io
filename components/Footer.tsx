
import React from 'react';
import { SOCIAL_LINKS, ICONS } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-sanofi-dark-blue border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center gap-6 mb-4">
          <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sanofi-blue dark:hover:text-white transition-colors">
            <ICONS.GitHub className="w-6 h-6" />
          </a>
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sanofi-blue dark:hover:text-white transition-colors">
            <ICONS.LinkedIn className="w-6 h-6" />
          </a>
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          &copy; {currentYear} Yanis Zedira. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
