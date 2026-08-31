import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0f151c] text-white pt-20 pb-8">
      <div className="w-full max-w-[1536px] mx-auto px-6 lg:px-16">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          
          {/* Column 1: Logo & Info (Takes up more space) */}
          <div className="lg:col-span-5">
            <div className="mb-6">
              <img src="/image/hemkam.png" alt="Hemkam Infrastructure" className="h-20 w-auto" />
            </div>
            <h4 className="font-semibold text-[15px] mb-2 text-white">HEMKAM Infrastructure Private Limited</h4>
            <p className="text-gray-300 text-[14px] leading-relaxed pr-0 lg:pr-16">
              HEMKAM Infrastructure brings a diverse set of capabilities to large-scale infrastructure projects. With a focus on integrated execution, adaptability, and uncompromising quality, we have established ourselves as a trusted name in infrastructure development.
            </p>
          </div>

          {/* Column 2: Important Links */}
          <div className="lg:col-span-3">
            <h3 className="font-semibold text-[16px] mb-6 text-white">Important links</h3>
            <ul className="space-y-3 text-gray-300 text-[14px]">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Pricing Plan</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-[16px] mb-6 text-white">Company</h3>
            <ul className="space-y-3 text-gray-300 text-[14px]">
              <li><a href="#" className="hover:text-orange-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Projects</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Team Member</a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-[16px] mb-6 text-white">Contact</h3>
            <ul className="space-y-3 text-gray-300 text-[14px]">
              <li>
                <a href="mailto:office@hemkaminfra.com" className="hover:text-orange-500 transition-colors">
                  office@hemkaminfra.com
                </a>
              </li>
              <li>
                <a href="tel:+919360206608" className="hover:text-orange-500 transition-colors">
                  +91 9360206608
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-12 text-center">
          <p className="text-gray-500 text-[14px]">
            © 2025 Created with <span className="text-gray-400">amigowebster</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
