import React from 'react';
import { useScrollTrigger } from '../hooks/useScrollTrigger';

const Session = () => {
  const { elementRef, isVisible } = useScrollTrigger({ threshold: 0.3 });

  return (
    <div 
      ref={elementRef}
      className={`bg-honeydew pt-16 pb-32 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 scroll-fade-up ${isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className={`text-2xl sm:text-3xl font-light text-gray-800 tracking-wide font-suranna scroll-fade-up scroll-fade-delayed ${isVisible ? 'visible' : ''}`}>
          Office Hours
        </h2>

        <div className="scroll-stagger-container">
          <p className={`text-gray-700 text-lg sm:text-xl font-light leading-relaxed font-raleway scroll-fade-up scroll-stagger-item ${isVisible ? 'visible' : ''}`}>
            <span>In-person:</span> Tuesday & Thursday, 10 AM – 6 PM
          </p>

          <p className={`text-gray-700 text-lg sm:text-xl font-light leading-relaxed font-raleway scroll-fade-up scroll-stagger-item ${isVisible ? 'visible' : ''}`}>
            <span>Virtual via Zoom:</span> Monday, Wednesday & Friday, 1 PM – 5 PM
          </p>
        </div>
      </div>
    </div>
  );
};

export default Session;