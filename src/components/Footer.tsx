
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center md:items-start">
            <Logo />
            <p className="mt-4 text-sm text-gray-600 text-center md:text-left">
              Uplifting lives through purposeful and impactful initiatives.
            </p>
          </div>
          
          <div className="md:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Navigation</h3>
                <ul className="mt-4 space-y-2">
                  <li><Link to="/" className="text-gray-600 hover:text-demla-green-400">Home</Link></li>
                  <li><Link to="/about" className="text-gray-600 hover:text-demla-green-400">About</Link></li>
                  <li><Link to="/initiatives" className="text-gray-600 hover:text-demla-green-400">Initiatives</Link></li>
                  <li><Link to="/contact" className="text-gray-600 hover:text-demla-green-400">Contact</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Legal</h3>
                <ul className="mt-4 space-y-2">
                  <li><Link to="/privacy" className="text-gray-600 hover:text-demla-green-400">Privacy Policy</Link></li>
                  <li><Link to="/terms" className="text-gray-600 hover:text-demla-green-400">Terms of Service</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Contact</h3>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li>vineetdemla@gmail.com</li>
                  <li>Ahmedabad, India</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Demla Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
