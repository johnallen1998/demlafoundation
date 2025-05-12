
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ContactSection from '@/components/ContactSection';
import { MapPin, Mail, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero 
          title="Contact Us" 
          subtitle="Get in touch with the Demla Foundation" 
        />
        
        <section className="py-16 md:py-24 bg-white">
          <div className="section-container">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                <div className="lg:col-span-2">
                  <h2 className="heading-md mb-6">Connect With Us</h2>
                  
                  <p className="text-gray-700 mb-8">
                    We welcome your questions, feedback, and interest in our future initiatives. 
                    While the Demla Foundation is in its planning phase, we're eager to connect with 
                    individuals and organizations who share our vision for creating positive change.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="mr-4 bg-demla-muted p-3 rounded-full">
                        <Mail className="h-5 w-5 text-demla-green-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">Email</h3>
                        <p className="text-gray-600">info@demlafoundation.org</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mr-4 bg-demla-muted p-3 rounded-full">
                        <Phone className="h-5 w-5 text-demla-green-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">Phone</h3>
                        <p className="text-gray-600">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mr-4 bg-demla-muted p-3 rounded-full">
                        <MapPin className="h-5 w-5 text-demla-green-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">Future Office</h3>
                        <p className="text-gray-600">
                          1234 Compassion Way<br/>
                          San Francisco, CA 94110<br/>
                          United States
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:col-span-3">
                  <div className="bg-demla-sand bg-opacity-50 p-8 rounded-lg border border-demla-beige shadow-sm">
                    <h3 className="text-xl font-serif font-medium mb-6 text-center">Send Us a Message</h3>
                    
                    <ContactSection />
                  </div>
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

export default Contact;
