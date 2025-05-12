
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <h2 className="heading-lg text-center mb-4">Get in Touch</h2>
          <p className="text-center text-gray-700 mb-10">
            Interested in our future initiatives or want to learn more about the Demla Foundation?
          </p>
          
          <div className="bg-demla-sand bg-opacity-50 p-8 rounded-lg border border-demla-beige shadow-sm">
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <Input 
                    id="name"
                    name="name"
                    placeholder="Your name"
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    className="w-full"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <Input 
                  id="subject"
                  name="subject"
                  placeholder="How can we help?"
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea 
                  id="message"
                  name="message"
                  placeholder="Your message"
                  rows={5}
                  className="w-full"
                />
              </div>
              
              <div className="text-center">
                <Button 
                  type="submit"
                  className="bg-gradient-to-r from-demla-green-300 to-demla-green-500 text-white hover:from-demla-green-400 hover:to-demla-green-600 px-8 py-2 rounded-md transition-all"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
