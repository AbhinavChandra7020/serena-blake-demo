import React from 'react';
import Image from 'next/image';
import { useScrollTrigger } from '../hooks/useScrollTrigger';

const ImageQuote = () => {
  const { elementRef, isVisible } = useScrollTrigger({ threshold: 0.3 });

  return (
    <div 
      ref={elementRef}
      className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh]"
    >
      {/* Background Image */}
      <Image
        src="/lowerImage.jpg"
        alt="Ocean waves background"
        fill
        className="object-cover"
        priority
      />
      
      {/* Subtle overlay for text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      
      {/* Quote Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 md:px-8">
        <blockquote className={`text-white mb-4 sm:mb-6 max-w-4xl scroll-fade-up scroll-fade-delayed ${isVisible ? 'visible' : ''}`}>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-light leading-relaxed tracking-wide">
            &ldquo;I have come to believe that caring for myself is not self-indulgent.<br />
            Caring for myself is an act of survival.&rdquo;
          </p>
        </blockquote>
        
        <cite className={`text-white text-base sm:text-lg font-light tracking-wider opacity-90 scroll-fade-up scroll-fade-delayed-2 ${isVisible ? 'visible' : ''}`}>
          —Audre Lorde
        </cite>
      </div>
    </div>
  );
};

export default ImageQuote;