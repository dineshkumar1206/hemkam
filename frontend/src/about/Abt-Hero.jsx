import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AbtHero = () => {
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
          src="/image/abt-banner.png" 
          alt="About Us Banner" 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        {/* Title in Banner */}
        <div className="relative z-10 text-center mt-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Us</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 lg:py-28 bg-white overflow-hidden">
        <div className="w-full max-w-[1536px] mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Text Content */}
          <div className="lg:w-1/2" data-aos="fade-right">
            <h4 className="text-orange-600 font-bold text-[16px] mb-4 uppercase tracking-wider">
              About Us
            </h4>
            <h2 className="text-4xl lg:text-5xl font-bold !text-black mb-8 leading-tight">
              Hemkam Infrastructure<br /> Private Limited
            </h2>
            
            <div className="space-y-6 text-gray-600 text-[16px] leading-relaxed">
              <p>
                <strong className="text-gray-800 font-semibold">Hemkam Infrastructure Private Limited</strong> has carved a strong niche in the construction industry, earning the trust and respect of clients through a consistent record of quality, reliability, and innovation.
              </p>
              
              <p>
                At Hemkam, professionalism is the foundation of every project—driven by technical expertise, advanced technology, skilled teams, and an unwavering commitment to ethical practices. This approach has enabled the company to successfully execute prestigious and challenging projects across multiple sectors.
              </p>

              <p>
                Guided by a relentless pursuit of excellence, Hemkam Infrastructure continues to set new benchmarks, ensuring each achievement serves as a stepping stone toward even greater accomplishments.
              </p>
            </div>

            <button className="mt-10 bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-10 transition-colors duration-300">
              Read More
            </button>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2 relative w-full" data-aos="fade-left">
            {/* Subtle orange accent box matching the design */}
            <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 border-b-4 border-r-4 border-orange-600 -z-10"></div>
            
            {/* The user will replace this src with their own image */}
            <img 
              src="/image/abt-img.jpeg" 
              alt="Hemkam Professional" 
              className="w-full h-auto object-cover shadow-lg relative z-10"
            />
          </div>

        </div>
      </section>
    </>
  );
};

export default AbtHero;
