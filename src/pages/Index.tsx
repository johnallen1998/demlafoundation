
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import VisionSection from '@/components/VisionSection';
import InitiativesSection from '@/components/InitiativesSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero 
          title="Demla Foundation" 
          subtitle="Uplifting lives through purposeful and impactful initiatives" 
        />
        
        <VisionSection />
        
        <section id="initiatives">
          <InitiativesSection />
        </section>
        
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
