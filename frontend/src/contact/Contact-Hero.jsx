import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactHero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <>
      {/* Banner Section */}
      <section className="relative w-full h-[45vh] lg:h-[55vh] flex items-center justify-center bg-black overflow-hidden">
        {/* The user will replace this src with their own banner image */}
        <img 
          src="/image/contact-banner.png" 
          alt="Contact Banner" 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
      </section>

      {/* Features / Team Members Section */}
      <section className="py-20 lg:py-28 bg-white overflow-hidden text-center">
        <div className="w-full max-w-[1536px] mx-auto px-6 lg:px-16">
          <h4 className="text-[#ff3b00] font-bold text-[16px] mb-4" data-aos="fade-up">
            Projects
          </h4>
          <h2 className="text-4xl lg:text-[42px] font-bold !text-black mb-16" data-aos="fade-up" data-aos-delay="100">
            Our Team Members
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            
            {/* Card 1 */}
            <div className="border border-gray-100 p-10 hover:shadow-xl transition-shadow duration-300 bg-white group">
              <div className="mb-6 flex justify-center text-gray-700 group-hover:text-[#ff3b00] transition-colors">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <h3 className="text-[20px] font-semibold text-gray-800 mb-4">High Quality</h3>
              <p className="text-gray-500 text-[14px] leading-relaxed">
                Find out how much your place is worth in less than a minute. Get monthly updates for your properties control.
              </p>
            </div>

            {/* Card 2 */}
            <div className="border border-gray-100 p-10 hover:shadow-xl transition-shadow duration-300 bg-white group">
              <div className="mb-6 flex justify-center text-gray-700 group-hover:text-[#ff3b00] transition-colors">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 11a2 2 0 100-4 2 2 0 000 4z"></path>
                </svg>
              </div>
              <h3 className="text-[20px] font-semibold text-gray-800 mb-4">Housing Security</h3>
              <p className="text-gray-500 text-[14px] leading-relaxed">
                Front SideView recent sales and market trends for similar properties in your area. View recent top sales and top market.
              </p>
            </div>

            {/* Card 3 */}
            <div className="border border-gray-100 p-10 hover:shadow-xl transition-shadow duration-300 bg-white group">
              <div className="mb-6 flex justify-center text-gray-700 group-hover:text-[#ff3b00] transition-colors">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"></path>
                </svg>
              </div>
              <h3 className="text-[20px] font-semibold text-gray-800 mb-4">Full Support</h3>
              <p className="text-gray-500 text-[14px] leading-relaxed">
                Receive updates when better home loan rates may be available. Get monthly updates for your new properties.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ContactHero;
