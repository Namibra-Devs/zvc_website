import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Users, 
  FolderOpen, 
  Briefcase, 
  TrendingUp, 
  Handshake, 
  Phone,
  X,
  Menu
} from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Navigation items with icons (excluding Contact from mobile nav)
  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/about', label: 'About', icon: Users },
    { path: '/projects', label: 'Projects', icon: FolderOpen },
    { path: '/services', label: 'Services', icon: Briefcase },
    { path: '/investors', label: 'Investors', icon: TrendingUp },
    { path: '/partnerships', label: 'Partnerships', icon: Handshake },
  ];

  return (
    <>
      {/* Header */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg mx-4 mt-4 rounded-2xl' 
            : 'bg-white shadow-sm'
        }`}
      >
        <div className="container-custom">
          <div className={`flex justify-between items-center transition-all duration-500 ${
            isScrolled ? 'py-3' : 'py-2' 
          }`}>
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className={`relative transition-all duration-500 ${
                isScrolled ? 'w-12 h-12' : 'w-16 h-16'
              }`}>
                <img
                  src="/images/zongo-logo1.PNG"
                  alt="ZongoVation Capital"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback logo */}
                <div className="w-full h-full bg-primary-gold rounded-full flex items-center justify-center text-primary-blue font-bold text-lg hidden">
                  Z
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative py-2 px-3 font-medium transition-all duration-300 rounded-lg ${
                    location.pathname === item.path 
                      ? 'text-primary-gold' 
                      : 'text-primary-blue hover:text-primary-gold'
                  }`}
                >
                  {item.label}
                  {location.pathname === item.path && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-gold transition-all duration-300" />
                  )}
                </Link>
              ))}
              <Link 
                to="/contact" 
                className="btn-primary shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Contact
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-3 rounded-xl bg-primary-blue text-white hover:bg-primary-blue/90 transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Full Viewport Mobile Menu - SEPARATE COMPONENT */}
      <div 
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ${
          isMenuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
        style={{
          // Always show the blue background regardless of scroll state
          background: isMenuOpen 
            ? 'linear-gradient(135deg, rgba(14, 33, 72, 0.95) 0%, rgba(26, 26, 26, 0.95) 100%)' 
            : 'transparent',
          backdropFilter: isMenuOpen ? 'blur(20px)' : 'none',
        }}
      >
        {/* Menu Content */}
        <div 
          className={`h-full flex flex-col transition-all duration-500 ${
            isMenuOpen ? 'translate-y-0' : 'translate-y-8'
          }`}
        >
          {/* Header Section */}
          <div className="flex justify-between items-center p-6 border-b border-white/10">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary-gold rounded-full flex items-center justify-center">
                <img
                  src="/images/zongo-logo.jpg"
                  alt="ZongoVation Capital"
                  className="w-10 h-10 object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-10 h-10 bg-primary-gold rounded-full flex items-center justify-center text-primary-blue font-bold text-sm hidden">
                  Z
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white text-lg">ZongoVation</span>
                <span className="text-primary-gold text-sm">Capital</span>
              </div>
            </div>
            
            {/* Close Button with Shadow */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-3 text-white hover:bg-white/10 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl bg-white/10 backdrop-blur-sm"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Navigation Links (without Contact) */}
          <nav className="flex-1 flex flex-col justify-center px-6 space-y-2">
            {navItems.map((item, index) => (
              <div
                key={item.path}
                className={`transform transition-all duration-500 ${
                  isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                }`}
                style={{
                  transitionDelay: isMenuOpen ? `${index * 100 + 200}ms` : '0ms'
                }}
              >
                <Link
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center justify-between p-4 rounded-2xl transition-all duration-300 group ${
                    location.pathname === item.path
                      ? 'bg-primary-gold text-primary-blue shadow-lg'
                      : 'bg-white/10 text-white hover:bg-white/20 hover:shadow-xl'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <item.icon 
                      size={24} 
                      className={
                        location.pathname === item.path 
                          ? 'text-primary-blue' 
                          : 'text-primary-gold'
                      } 
                    />
                    <span className="text-xl font-semibold">{item.label}</span>
                  </div>
                  
                  {/* Active indicator */}
                  {location.pathname === item.path && (
                    <div className="w-2 h-2 bg-primary-blue rounded-full" />
                  )}
                </Link>
              </div>
            ))}
          </nav>

          {/* Contact CTA Section - Only "Get In Touch" button remains */}
          <div 
            className={`p-6 border-t border-white/10 transform transition-all duration-500 ${
              isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{
              transitionDelay: isMenuOpen ? '800ms' : '0ms'
            }}
          >
            <div className="text-center mb-6">
              <p className="text-white/80 text-lg mb-4">Ready to partner with us?</p>
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="btn-primary inline-flex items-center space-x-3 px-8 py-4 text-lg shadow-2xl hover:shadow-3xl"
              >
                <Phone size={24} />
                <span>Get In Touch</span>
              </Link>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;