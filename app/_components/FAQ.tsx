import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { useScrollTrigger } from '../hooks/useScrollTrigger';

interface OpenItems {
  [key: number]: boolean;
}

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<OpenItems>({});
  const { elementRef, isVisible } = useScrollTrigger({ threshold: 0.2 });

  const toggleItem = (index: number): void => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqData = [
    {
      question: "Do you accept insurance?",
      answer: "No, but a superbill is provided for self-submission."
    },
    {
      question: "Are online sessions available?",
      answer: "Yes—all virtual sessions via Zoom."
    },
    {
      question: "What is your cancellation policy?",
      answer: "24-hour notice required."
    }
  ];

  return (
    <div 
      ref={elementRef}
      className={`bg-white scroll-fade-up ${isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-4xl mx-auto px-4 py-16">
      {/* Main Title */}
      <h1 className={`text-4xl md:text-5xl font-light text-slate-600 text-center mb-16 font-suranna scroll-fade-up scroll-fade-delayed ${isVisible ? 'visible' : ''}`}>
        Frequently Asked Questions
      </h1>

      {/* FAQ Items */}
      <div className="space-y-1 font-raleway scroll-stagger-container">
          {faqData.map((item, index) => (
            <div key={index} className={`border-b border-slate-300 scroll-fade-up scroll-stagger-item ${isVisible ? 'visible' : ''}`}>
              <button
                onClick={() => toggleItem(index)}
                className="w-full py-6 flex items-center justify-between text-left hover:bg-white hover:bg-opacity-60 transition-all duration-200 rounded-lg px-4"
              >
                <span className="text-lg font-light text-slate-600 pr-4">
                  {item.question}
                </span>
                <ChevronRight 
                  className={`w-5 h-5 text-slate-500 transition-transform duration-200 flex-shrink-0 ${
                    openItems[index] ? 'rotate-90' : ''
                  }`} 
                />
              </button>
              
              {openItems[index] && (
                <div className="pb-6 pl-0 pr-8 scroll-fade-scale visible">
                  <p className="text-base text-slate-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
    </div>
    </div>
  );
};

export default FAQ;