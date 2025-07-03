import React from 'react';

const Header = () => {
  return (
    // Header loads immediately, no scroll trigger needed
    <header className="bg-honeydew py-4 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 pt-10 fade-in">
      <div className="flex items-center">
        {/* Logo/Icon */}
        <div className="flex items-center space-x-3">
          {/* Elegant interlocking circles logo */}
          <div className="w-12 h-12 flex items-center justify-center">
            <svg width="40" height="40" viewBox="0 0 32 32" className="text-gray-700">
              <circle cx="12" cy="16" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.8"/>
              <circle cx="20" cy="16" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.8"/>
              <circle cx="16" cy="12" r="6" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.6"/>
            </svg>
          </div>
          
          {/* Text */}
          <div className="text-gray-700">
            <div className="text-lg font-medium tracking-wide">Dr. Serena Blake, PsyD</div>
            <div className="text-lg font-medium tracking-wide text-gray-700">Clinical Psychologist</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;