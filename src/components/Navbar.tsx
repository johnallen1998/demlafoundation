
import React, { useState } from 'react';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative bg-white bg-opacity-95 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex justify-start">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" label="Home" />
            <NavLink to="/about" label="About" />
            <NavLink to="/initiatives" label="Initiatives" />
            <NavLink to="/contact" label="Contact" />
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white fixed inset-0 z-50 pt-20 px-4">
          <button 
            onClick={toggleMenu}
            className="absolute top-6 right-4 p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            <X size={24} />
          </button>
          
          <div className="flex flex-col items-center space-y-8 text-xl">
            <MobileNavLink to="/" label="Home" onClick={toggleMenu} />
            <MobileNavLink to="/about" label="About" onClick={toggleMenu} />
            <MobileNavLink to="/initiatives" label="Initiatives" onClick={toggleMenu} />
            <MobileNavLink to="/contact" label="Contact" onClick={toggleMenu} />
          </div>
        </div>
      )}
    </header>
  );
};

// Helper components
const NavLink = ({ to, label }: { to: string; label: string }) => (
  <Link 
    to={to} 
    className="text-gray-700 hover:text-demla-green-400 transition-colors py-2 border-b-2 border-transparent hover:border-demla-green-300"
  >
    {label}
  </Link>
);

const MobileNavLink = ({ to, label, onClick }: { to: string; label: string; onClick: () => void }) => (
  <Link 
    to={to} 
    className="text-gray-800 hover:text-demla-green-400 font-medium py-2"
    onClick={onClick}
  >
    {label}
  </Link>
);

export default Navbar;
