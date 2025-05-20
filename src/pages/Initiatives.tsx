
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import InitiativesSection from '@/components/InitiativesSection';
import { Button } from '@/components/ui/button';

const Initiatives = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero 
          title="Our Initiatives" 
          subtitle="Planned projects and programs to create lasting impact" 
        />
        
        <section className="py-16 md:py-24 bg-white">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="heading-md mb-8">Our Approach</h2>
              
              <p className="text-lg text-gray-700 mb-10">
                The Demla Foundation is committed to developing comprehensive initiatives that create sustainable 
                change. Our approach combines careful research, community involvement, and strategic partnerships 
                to ensure that our programs address real needs and create lasting impact.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
                <div className="bg-demla-sand bg-opacity-50 p-8 rounded-lg border border-demla-beige shadow-sm">
                  <h3 className="text-xl font-serif font-medium mb-4">Research-Based Planning</h3>
                  <p className="text-gray-700">
                    Each initiative begins with thorough research to understand the underlying challenges and existing solutions. 
                    We analyze data, consult experts, and study successful models to inform our approach.
                  </p>
                </div>
                
                <div className="bg-demla-sand bg-opacity-50 p-8 rounded-lg border border-demla-beige shadow-sm">
                  <h3 className="text-xl font-serif font-medium mb-4">Community Collaboration</h3>
                  <p className="text-gray-700">
                    We believe that lasting solutions must be developed with the active participation of the communities they serve. 
                    Local knowledge, needs, and leadership are central to our planning process.
                  </p>
                </div>
                
                <div className="bg-demla-sand bg-opacity-50 p-8 rounded-lg border border-demla-beige shadow-sm">
                  <h3 className="text-xl font-serif font-medium mb-4">Strategic Partnerships</h3>
                  <p className="text-gray-700">
                    By collaborating with other organizations, government agencies, and private sector partners, 
                    we can leverage collective expertise and resources to maximize our impact.
                  </p>
                </div>
                
                <div className="bg-demla-sand bg-opacity-50 p-8 rounded-lg border border-demla-beige shadow-sm">
                  <h3 className="text-xl font-serif font-medium mb-4">Measurable Outcomes</h3>
                  <p className="text-gray-700">
                    We are committed to transparency and accountability in all our programs. 
                    Clear metrics and regular evaluation help us track progress and refine our approach.
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <Button className="bg-gradient-to-r from-demla-green-300 to-demla-green-500 text-white hover:from-demla-green-400 hover:to-demla-green-600 px-8 py-2 rounded-md transition-all">
                  Learn About Our Impact
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        <InitiativesSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Initiatives;
