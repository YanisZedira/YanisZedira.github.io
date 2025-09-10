
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { ICONS } from '../constants';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sanofi-blue transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? <ICONS.Moon className="w-5 h-5" /> : <ICONS.Sun className="w-5 h-5" />}
    </button>
  );
};

export default ThemeToggle;
