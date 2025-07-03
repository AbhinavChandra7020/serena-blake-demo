import Image from 'next/image';

export default function TherapistProfile() {
  return (
    <div className="bg-gray-50 min-h-screen pt-48 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Title - Only visible on mobile, positioned above image */}
          <div className="lg:hidden order-1 mb-8">
            <h1 className="text-3xl sm:text-4xl font-light text-gray-800 text-center">
              About Dr. Serena Blake
            </h1>
          </div>
          
          {/* Image - Second on mobile (after title), second on desktop */}
          <div className="flex justify-center lg:justify-end order-2 lg:order-2">
            <div className="relative">
              <div className="w-[20rem] sm:w-[24rem] lg:w-[28rem] h-[24rem] sm:h-[28rem] lg:h-[32rem] bg-gray-200 overflow-hidden relative">
                <Image 
                  src="/serena-blake.png" 
                  alt="Dr. Serena Blake"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Subtle shadow/background element */}
              <div className="absolute -z-10 top-4 left-4 w-[20rem] sm:w-[24rem] lg:w-[28rem] h-[24rem] sm:h-[28rem] lg:h-[32rem] bg-gray-300 opacity-30"></div>
            </div>
          </div>
          
          {/* Text Content - Third on mobile, first on desktop */}
          <div className="space-y-8 order-3 lg:order-1">
            {/* Title - Only visible on desktop */}
            <h1 className="hidden lg:block text-4xl font-medium text-mossSoft mb-8 text-left font-suranna">
              About Dr. Serena Blake
            </h1>
            
            <div className="space-y-6 text-warmClay leading-loose tracking-wider text-center lg:text-left font-raleway">
              <p>
                Finding time and opportunities to care for ourselves can be incredibly 
                challenging in today's busy and demanding world. I believe therapy 
                offers a dedicated space for self-care, providing the support and tools 
                needed to improve this essential practice. Therapy can help 
                individuals identify and clarify their goals, values, and the various 
                elements that contribute to their well-being, recognizing that these 
                aspects vary from person to person.
              </p>
              
              <p>
                I am dedicated to supporting this journey by offering active listening, 
                psychological knowledge, empathy, compassion, and insights into 
                behavioral patterns and tendencies. As a licensed clinical psychologist 
                (PsyD) based in Los Angeles, CA, I bring eight years of experience and 
                over 500 client sessions to my practice. I blend evidence-based 
                approaches—like cognitive-behavioral therapy and mindfulness—with 
                compassionate, personalized care to help you overcome anxiety, strengthen 
                relationships, and heal from trauma.
              </p>
              
              <p>
                I approach therapy as a collaborative process grounded in empathy, curiosity, and practical tools tailored to your needs. My work draws from well-researched methods while honoring your individual story, identity, and goals. Whether we meet in my Maplewood Drive office or online, I aim to create a space where you feel seen, heard, and supported—so you can move forward with clarity and confidence.
              </p>
            </div>
          </div>
        </div>
        
        {/* Bottom line */}
        <div className="border-t-2 border-gray-400 mt-32 lg:mt-60 -mx-24 pb-12"></div>
      </div>
    </div>
  );
}