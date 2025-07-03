import React from 'react';

const Fees = () => {
  return (
    <div className="bg-cambridgeBlue py-16 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Title */}
        <h2 className="text-3xl sm:text-4xl font-thin text-gray-800 mb-12 tracking-wide font-suranna">
          Rates
        </h2>
        
        {/* Pricing Information */}
        <div className="space-y-6">
          <div className="text-gray-700 text-lg font-raleway">
            <span>Individual Session</span> – $200
          </div>

          <div className="text-gray-700 text-lg font-raleway">
            <span>Couples Session</span> – $240
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fees;
