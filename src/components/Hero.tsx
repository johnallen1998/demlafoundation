
import React from 'react';

interface HeroProps {
  title: string;
  subtitle?: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle }) => {
  return (
    <div className="relative bg-gradient-to-br from-white to-demla-beige py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -right-64 -top-64 w-96 h-96 rounded-full bg-demla-lime opacity-10 animate-pulse"></div>
        <div className="absolute -left-32 top-32 w-64 h-64 rounded-full bg-demla-green-200 opacity-10 animate-pulse" style={{animationDelay: "1s", animationDuration: "4s"}}></div>
        <div className="absolute right-32 bottom-16 w-48 h-48 rounded-full bg-demla-green-400 opacity-5 animate-pulse" style={{animationDelay: "0.5s", animationDuration: "5s"}}></div>
      </div>
      <div className="section-container relative z-10 text-center">
        <h1 className="heading-xl animate-fade-in pb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto animate-slide-up" style={{animationDelay: "200ms"}}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default Hero;
