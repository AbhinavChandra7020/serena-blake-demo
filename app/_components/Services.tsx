import React from 'react';
import Image from 'next/image';
import { useScrollTrigger } from '../hooks/useScrollTrigger';

interface ServiceCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  imageClassName?: string;
  containerClassName?: string;
  objectPosition?: string;
  index: number;
  isVisible: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
  imageClassName = "object-cover",
  containerClassName = "relative w-[28rem] h-[28rem] sm:w-[32rem] sm:h-[32rem] lg:w-[36rem] lg:h-[36rem] xl:w-[40rem] xl:h-[40rem] rounded-full overflow-hidden",
  objectPosition = "center",
  index,
  isVisible
}) => {
  const delayClass = index === 0 ? '' : index === 1 ? 'scroll-fade-delayed' : 'scroll-fade-delayed-2';
  
  return (
    <div className={`flex flex-col items-center text-center space-y-8 scroll-fade-up ${delayClass} ${isVisible ? 'visible' : ''}`}>
      <div className={containerClassName}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className={imageClassName}
          style={{ objectPosition }}
        />
      </div>

      <h3 className="text-xl sm:text-2xl font-light text-gray-700 max-w-md leading-relaxed px-4 font-suranna">
        {title}
      </h3>

      <p className="text-base sm:text-lg text-gray-600 max-w-xl leading-relaxed font-extralight px-4 font-raleway">
        {description}
      </p>
    </div>
  );
};

const Services = () => {
  const headerTrigger = useScrollTrigger({ threshold: 0.3 });
  const servicesTrigger = useScrollTrigger({ threshold: 0.2 });

  const servicesData = [
    {
      imageSrc: "/anxiety-therapy.png",
      imageAlt: "Person in calm setting representing anxiety therapy",
      title: "Anxiety & Stress Management",
      description:
        `Whether you're overwhelmed by daily demands or facing persistent worry, therapy provides a grounding space to explore what lies beneath your anxiety. Together, we can identify stressors, build effective coping strategies, and cultivate a sense of calm and resilience in your life.`,
      objectPosition: "center 30%",
      imageClassName: "object-cover",
    },
    {
      imageSrc: "/relationship-consultation.png",
      imageAlt: "Two people talking representing relationship counseling",
      title: "Relationship Counseling",
      description:
        `Relationships shape how we experience the world—and ourselves. Therapy offers a space to explore patterns, improve communication, and heal past relational wounds, whether you're seeking support for romantic partnerships, friendships, or family dynamics.`,
      objectPosition: "40% center",
      imageClassName: "object-cover scale-110",
    },
    {
      imageSrc: "/trauma-recovery.jpg",
      imageAlt: "Symbolic image representing healing from trauma",
      title: "Trauma Recovery",
      description:
        `Trauma can disrupt your sense of safety and connection, but it does not have to define your story. Therapy can help you process what you've experienced at your own pace, rebuild trust in yourself and others, and move toward deeper healing and integration.`,
      objectPosition: "60% 40%",
      imageClassName: "object-cover scale-105",
    },
  ];

  return (
    <div className="bg-honeydew pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24">
        <div 
          ref={headerTrigger.elementRef}
          className={`text-center mb-20 scroll-fade-up ${headerTrigger.isVisible ? 'visible' : ''}`}
        >
          <h2 className="text-3xl sm:text-3xl lg:text-4xl font-light text-warmClay mb-8 leading-relaxed max-w-4xl mx-auto font-suranna">
            {`Therapy is a space for clarity, growth, and emotional healing—grounded in care that's both thoughtful and evidence-based.`}
            <br />
          </h2>

          <p className={`text-lg text-warmClay leading-loose max-w-4xl mx-auto font-light font-raleway scroll-fade-up scroll-fade-delayed ${headerTrigger.isVisible ? 'visible' : ''}`}>
            {`Whether you're navigating anxiety, relationship stress, unresolved trauma, or simply seeking deeper self-understanding, therapy can help 
            you make meaningful change. With a warm and collaborative approach, we'll explore your patterns, strengthen your sense of self, and move 
            toward greater peace and connection—at a pace that respects your story.`}
          </p>

          <div className={`border-t-2 border-gray-400 mt-16 -mx-24 scroll-fade-up scroll-fade-delayed-2 ${headerTrigger.isVisible ? 'visible' : ''}`}></div>
        </div>
      </div>

      <div className="w-full bg-honeydew text-center mb-16 mt-32">
        <h2 className={`text-4xl sm:text-5xl text-warmClay mb-20 pb-20 font-suranna scroll-fade-up ${servicesTrigger.isVisible ? 'visible' : ''}`}>
          Areas of Focus
        </h2>

        <div 
          ref={servicesTrigger.elementRef}
          className="grid grid-cols-1 lg:grid-cols-3 gap-20 lg:gap-12 xl:gap-16 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24"
        >
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              imageSrc={service.imageSrc}
              imageAlt={service.imageAlt}
              title={service.title}
              description={service.description}
              objectPosition={service.objectPosition}
              imageClassName={service.imageClassName}
              index={index}
              isVisible={servicesTrigger.isVisible}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;