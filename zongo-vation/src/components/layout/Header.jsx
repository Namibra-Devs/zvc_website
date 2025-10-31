import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from '@components/shared/Logo';
import Navigation from '@components/shared/Navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          <Logo />
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Navigation />
            <Link to="/contact" className="btn-primary">
              Partner With Us
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Navigation mobile onNavigate={() => setIsMenuOpen(false)} />
              <Link 
                to="/contact" 
                className="btn-primary text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Partner With Us
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;