import React from 'react';

const Session = () => {
  return (
    <div className="bg-honeydew pt-16 pb-32 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-2xl sm:text-3xl font-light text-gray-800 tracking-wide font-suranna">
          Office Hours
        </h2>

        <p className="text-gray-700 text-lg sm:text-xl font-light leading-relaxed font-raleway">
          <span>In-person:</span> Tuesday & Thursday, 10 AM – 6 PM
        </p>

        <p className="text-gray-700 text-lg sm:text-xl font-light leading-relaxed font-raleway">
          <span>Virtual via Zoom:</span> Monday, Wednesday & Friday, 1 PM – 5 PM
        </p>
      </div>
    </div>
  );
};

export default Session;
