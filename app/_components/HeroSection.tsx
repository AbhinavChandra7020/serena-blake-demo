// HeroSection.tsx
import React, { useState } from 'react';
import Image from 'next/image';
import Button from './Button';
import ContactForm from './ContactForm';

const HeroSection = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const openContactForm = () => setIsContactFormOpen(true);
  const closeContactForm = () => setIsContactFormOpen(false);

  return (
    <>
      <div className="bg-honeydew px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 pb-40 pt-10 font-suranna">
        <div className="relative w-full max-w-none h-[60vh] sm:h-[65vh] md:h-[70vh]">
          {/* Hero Image */}
          <Image
            src="/heroGif.gif"
            alt="Soothing therapeutic setting"
            fill
            className="object-cover"
            priority
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg"></div>

          {/* Text Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 md:px-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-white mb-2 tracking-wide">
              Expert Therapy
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-white mb-6 tracking-wide pt-10">
              Rooted in Compassion & Science
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-white mb-6 sm:mb-8 md:mb-12 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl font-light leading-relaxed pt-10 font-raleway">
              Helping You Heal, Grow, and Reconnect — In-Person in LA or Virtually Across the U.S.
            </p>
            <Button onClick={openContactForm} />
          </div>
        </div>
      </div>

      <ContactForm
        isModal={true}
        isOpen={isContactFormOpen}
        onClose={closeContactForm}
      />
    </>
  );
};

export default HeroSection;
