
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Blog from '../components/Blog';
import CV from '../components/CV';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const PortfolioPage: React.FC = () => {
  return (
    <div className="bg-slate-50 dark:bg-sanofi-dark-blue text-slate-800 dark:text-slate-200 font-sans transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Blog />
        <CV />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioPage;
