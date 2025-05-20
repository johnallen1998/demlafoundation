
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  title: string;
  subtitle?: string;
  hideInitiativesButton?: boolean;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, hideInitiativesButton }) => {
  return (
    <div className="relative bg-gradient-to-br from-white to-demla-beige py-20 md:py-28 overflow-hidden">
      {/* Enhanced background elements with better animations */}
      <div className="absolute inset-0">
        <div className="absolute -right-64 -top-64 w-96 h-96 rounded-full bg-demla-lime opacity-10 animate-pulse"></div>
        <div className="absolute -left-32 top-32 w-64 h-64 rounded-full bg-demla-green-200 opacity-10 animate-pulse" style={{animationDelay: "1s", animationDuration: "4s"}}></div>
        <div className="absolute right-32 bottom-16 w-48 h-48 rounded-full bg-demla-green-400 opacity-5 animate-pulse" style={{animationDelay: "0.5s", animationDuration: "5s"}}></div>
        
        {/* Additional decorative elements */}
        <div className="absolute left-1/4 bottom-24 w-24 h-24 rounded-full bg-demla-green-300 opacity-10 animate-pulse" style={{animationDelay: "1.5s", animationDuration: "6s"}}></div>
        <div className="absolute right-1/4 top-36 w-20 h-20 rounded-full bg-demla-lime opacity-10 animate-float" style={{animationDelay: "0.7s"}}></div>
      </div>
      
      <div className="section-container relative z-10 text-center">
        <h1 className="heading-xl animate-fade-in pb-4 text-transparent bg-clip-text bg-gradient-to-r from-demla-green-400 to-demla-green-300">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto animate-slide-up" style={{animationDelay: "200ms"}}>
            {subtitle}
          </p>
        )}
        
        {/* Call to action buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{animationDelay: "400ms"}}>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-demla-green-300 to-demla-green-500 text-white hover:from-demla-green-400 hover:to-demla-green-600 transition-all shadow-lg hover:shadow-xl"
            onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
          >
            Get Involved <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
          
          {!hideInitiativesButton && (
            <Button 
              variant="outline"
              size="lg"
              className="border-demla-green-300 text-demla-green-400 hover:bg-demla-green-100 hover:text-demla-green-500 transition-all"
              onClick={() => {
                // Navigate to initiatives page if we're not already there
                if (!window.location.pathname.includes('/initiatives')) {
                  window.location.href = '/initiatives';
                } else {
                  // If we're on the initiatives page, scroll to the initiatives section
                  document.getElementById('initiatives')?.scrollIntoView({behavior: 'smooth'});
                }
              }}
            >
              Our Initiatives
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
