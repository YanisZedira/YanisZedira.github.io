
import React, { ReactNode } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, children, className = '' }) => {
  // FIX: Removed `triggerOnce` as it's not a valid IntersectionObserverInit property.
  // The hook already implements the "trigger once" functionality.
  const { ref, isIntersecting } = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
  });

  return (
    <section 
      id={id} 
      ref={ref}
      className={`py-16 md:py-24 px-4 sm:px-6 lg:px-8 ${className} transition-opacity duration-1000 ${isIntersecting ? 'animate-fade-in-up' : 'opacity-0'}`}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};

export default Section;
