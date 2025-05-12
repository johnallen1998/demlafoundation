
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero 
          title="About Us" 
          subtitle="Learn more about the Demla Foundation's vision and mission" 
        />
        
        <section className="py-16 md:py-24 bg-white">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <h2 className="heading-md mb-8">Our Story</h2>
              
              <div className="prose prose-lg">
                <p>
                  The Demla Foundation represents a personal commitment to creating positive change in the world. 
                  Founded on the principles of responsibility, sustainability, and meaningful impact, the foundation 
                  aims to address critical needs in communities around the world.
                </p>
                
                <p>
                  This initiative is currently in its planning phase, with a clear vision for the future. Once 
                  established, the Demla Foundation will focus on creating sustainable solutions to pressing 
                  challenges in education, environmental conservation, community development, and healthcare.
                </p>
                
                <h3 className="heading-md mt-12 mb-6">Our Values</h3>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-demla-green-400 font-bold mr-2">•</span>
                    <span><strong>Integrity:</strong> We are committed to transparency and ethical practices in all our operations.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-demla-green-400 font-bold mr-2">•</span>
                    <span><strong>Sustainability:</strong> We believe in creating long-term solutions that empower communities to thrive independently.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-demla-green-400 font-bold mr-2">•</span>
                    <span><strong>Compassion:</strong> We approach our work with empathy and respect for the dignity of all people.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-demla-green-400 font-bold mr-2">•</span>
                    <span><strong>Innovation:</strong> We seek creative and effective approaches to address complex challenges.</span>
                  </li>
                </ul>
                
                <h3 className="heading-md mt-12 mb-6">Our Commitment</h3>
                
                <p>
                  As we work towards establishing the Demla Foundation, our commitment remains unwavering: 
                  to create an organization that makes a genuine difference in people's lives and contributes 
                  to a more equitable and sustainable world.
                </p>
                
                <p>
                  Through careful planning, strategic partnerships, and a dedication to our core values, 
                  we will build a foundation that serves as a catalyst for positive change.
                </p>
                
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <p className="italic">
                    "The true measure of any society can be found in how it treats its most vulnerable members."
                  </p>
                  <p className="text-right">— Mahatma Gandhi</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
