import React from 'react';
import { useScrollTrigger } from '../hooks/useScrollTrigger';

const Footer = () => {
  const { elementRef, isVisible } = useScrollTrigger({ threshold: 0.2 });

  return (
    <footer 
      ref={elementRef}
      className={`bg-honeydew py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 scroll-fade-up ${isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-4xl mx-auto text-center space-y-8 pt-2">
        {/* Main Title */}
        <h2 className={`text-2xl sm:text-3xl font-light text-gray-700 mb-8 font-suranna scroll-fade-up scroll-fade-delayed ${isVisible ? 'visible' : ''}`}>
          Dr. Serena Blake, PsyD (Clinical Psychologist)
        </h2>
        
        {/* Contact Information */}
        <div className="space-y-3 text-gray-600 text-base font-raleway scroll-stagger-container">
          <div className={`scroll-fade-up scroll-stagger-item ${isVisible ? 'visible' : ''}`}>
            <a 
              href="mailto:serena@blakepsychology.com" 
              className="text-gray-600 hover:text-teal-600 underline transition-colors duration-200"
            >
              serena@blakepsychology.com
            </a>
          </div>
          
          <div className={`scroll-fade-up scroll-stagger-item ${isVisible ? 'visible' : ''}`}>
            Phone: <a href="tel:+13235550192" className="underline hover:text-teal-600 transition-colors">(323) 555-0192</a>
          </div>
          
          <div className={`scroll-fade-up scroll-stagger-item ${isVisible ? 'visible' : ''}`}>
            1287 Maplewood Drive, Los Angeles, CA 90026
          </div>
        </div>
        
        {/* Navigation Links */}
        <div className={`flex flex-wrap justify-center gap-4 sm:gap-6 text-base font-raleway scroll-fade-up scroll-stagger-item ${isVisible ? 'visible' : ''}`}>
          <a 
            href="/" 
            className="text-gray-600 hover:text-teal-600 underline transition-colors duration-200"
          >
            Home
          </a>
        </div>
        
        {/* Copyright */}
        <div className={`pt-12 sm:pt-16 text-base text-gray-500 font- scroll-fade-up scroll-stagger-item ${isVisible ? 'visible' : ''}`}>
          © 2025 Dr. Serena Blake Psychology. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;