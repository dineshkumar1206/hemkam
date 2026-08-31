import React from 'react';

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent text-white py-4">
      <div className="w-full max-w-[1126px] mx-auto px-8 md:px-16 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/image/hemkam.png" alt="Hemkam Infrastructure Logo" className="h-16 md:h-20 w-auto" />
        </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-8 items-center text-sm font-medium">
        <li>
          <a href="#" className="text-blue-500 border-b-2 border-blue-500 pb-1">Home</a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-300 transition-colors">About</a>
        </li>
        <li className="relative group flex items-center cursor-pointer">
          <span className="hover:text-gray-300 transition-colors">Services</span>
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </li>
        <li>
          <a href="#" className="hover:text-gray-300 transition-colors">Pricing Plan</a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-300 transition-colors">Contact</a>
        </li>
      </ul>
      </div>
    </nav>
  );
};

export default Navbar;
