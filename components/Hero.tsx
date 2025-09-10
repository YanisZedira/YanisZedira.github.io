import React from 'react';
import { SOCIAL_LINKS, ICONS, GITHUB_REPO_URL } from '../constants';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Hero: React.FC = () => {
  // FIX: Removed `triggerOnce` as it's not a valid IntersectionObserverInit property.
  // The hook already implements the "trigger once" functionality.
  const { ref, isIntersecting } = useIntersectionObserver<HTMLDivElement>({ threshold: 0.3 });

  const profilePicUrl = `${GITHUB_REPO_URL}yanis_zedira_profile.jpg`;
  const cvUrl = `${GITHUB_REPO_URL}CV_Yanis_Zedira_Data.pdf`;
  
  return (
    <section 
      ref={ref}
      id="hero" 
      className={`min-h-screen flex items-center justify-center bg-slate-100 dark:bg-gray-900/50 transition-opacity duration-1000 ${isIntersecting ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className={`text-center md:text-left transition-all duration-1000 ${isIntersecting ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-sanofi-dark-blue dark:text-white">
              Yanis Zedira
            </h1>
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-sanofi-blue dark:text-sky-300 mt-2">
              Data Analyst & Engineer
            </h2>
            <p className="mt-6 text-lg text-slate-600 dark:text-slate-300">
              “Je conçois des solutions data au service de la santé. Mes projets allient rigueur analytique, cloud engineering et sens de l’impact médical.”
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href={cvUrl} download="CV_Yanis_Zedira_Data.pdf" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sanofi-blue hover:bg-blue-800 dark:hover:bg-blue-600 transition-transform hover:scale-105">
                Télécharger mon CV
              </a>
              <div className="flex gap-4 justify-center md:justify-start">
                <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-200 dark:bg-slate-700 rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600 transition-transform hover:scale-110">
                  <ICONS.GitHub className="w-6 h-6" />
                </a>
                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-200 dark:bg-slate-700 rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600 transition-transform hover:scale-110">
                  <ICONS.LinkedIn className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className={`flex justify-center items-center transition-all duration-1000 delay-200 ${isIntersecting ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
             <div className="relative w-72 h-72 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-sanofi-blue to-sky-300 rounded-full blur-xl"></div>
                <img 
                    src={profilePicUrl}
                    alt="Yanis Zedira" 
                    className="relative w-full h-full object-cover rounded-full shadow-2xl border-4 border-white dark:border-slate-800" 
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;