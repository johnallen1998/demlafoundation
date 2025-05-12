
import React from 'react';

const VisionSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <h2 className="heading-lg text-center mb-10">A Vision for the Future</h2>
          
          <div className="space-y-8 text-gray-700">
            <p className="text-lg leading-relaxed">
              The Demla Foundation is born from a vision of responsibility and impact. This 
              initiative will be established once I achieve a personal financial milestone, 
              ensuring that the necessary resources are in place to create a lasting and 
              sustainable impact.
            </p>
            
            <p className="text-lg leading-relaxed">
              This page stands as a declaration of intent and a promise to build an 
              organization dedicated to making a meaningful difference where it is needed 
              most. While the journey has yet to begin, the mission remains clear: to uplift 
              lives through purposeful and impactful initiatives.
            </p>
            
            <p className="text-lg leading-relaxed">
              In due time, this vision will become a reality. Until then, this serves as a 
              commitment to the future.
            </p>
            
            <div className="pt-8 border-t border-gray-200">
              <p className="text-lg">Sincerely,</p>
              <p className="text-xl font-serif mt-2">Vineet Demla</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
