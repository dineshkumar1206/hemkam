import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing Plan', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  const getLinkClass = (path) => {
    return location.pathname === path
      ? "text-orange-500 border-b-2 border-orange-500 pb-1"
      : "hover:text-gray-300 transition-colors";
  };

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent text-white py-4">
      <div className="w-full max-w-[1536px] mx-auto px-8 lg:px-16 flex justify-between items-center relative">
        {/* Logo */}
        <div className="flex items-center z-10">
          <Link to="/">
            <img src="/image/hemkam.png" alt="Hemkam Infrastructure Logo" className="h-16 md:h-20 w-auto" />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-max">
          <ul className="flex space-x-8 items-center text-[15px] font-medium">
            {navLinks.map((link) => (
              <li key={link.name} className={link.name === 'Services' ? 'relative group flex items-center cursor-pointer py-4' : 'py-4'}>
                <Link to={link.path} className={getLinkClass(link.path)}>
                  {link.name}
                </Link>
                {link.name === 'Services' && (
                  <>
                    <svg className="w-4 h-4 ml-1 group-hover:text-gray-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                    
                    {/* Primary Dropdown */}
                    <div className="absolute top-full left-0 w-64 bg-[#5b51d8] text-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out border-t-2 border-orange-500 z-50">
                      <ul className="flex flex-col">
                        <li className="relative group/nested">
                          <div className="px-6 py-4 border-b border-white/20 hover:bg-[#4a41bd] transition-colors flex justify-between items-center cursor-pointer">
                            <span>Residential Construction</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                          </div>
                          
                          {/* Nested Dropdown */}
                          <div className="absolute top-0 left-full w-56 bg-white text-gray-800 shadow-xl opacity-0 invisible group-hover/nested:opacity-100 group-hover/nested:visible transition-all duration-300 ease-in-out">
                            <ul className="flex flex-col">
                              <li>
                                <Link to="/services/residential/home" className="block px-6 py-4 border-b border-gray-100 hover:text-orange-500 transition-colors">
                                  Home
                                </Link>
                              </li>
                              <li>
                                <Link to="/services/residential/villas" className="block px-6 py-4 border-b border-gray-100 hover:text-orange-500 transition-colors">
                                  Villas
                                </Link>
                              </li>
                              <li>
                                <Link to="/services/residential/apartments" className="block px-6 py-4 hover:text-orange-500 transition-colors">
                                  Apartments
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <Link to="/services" className="block px-6 py-4 border-b border-white/20 hover:bg-[#4a41bd] transition-colors">
                            Industrial Infrastructure
                          </Link>
                        </li>
                        <li>
                          <Link to="/services" className="block px-6 py-4 hover:bg-[#4a41bd] transition-colors">
                            Industrial Paintings
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center z-10">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white hover:text-gray-300 focus:outline-none"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md w-full absolute top-full left-0 py-6 shadow-2xl border-t border-gray-800">
          <ul className="flex flex-col items-center space-y-6 text-white text-[16px] font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.path} 
                  className={getLinkClass(link.path)}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
