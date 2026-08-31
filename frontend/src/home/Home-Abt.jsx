import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomeAbt = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <section className="min-h-screen flex items-center bg-white overflow-hidden py-12">
      <div className="w-full max-w-[1536px] mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Text Content */}
        <div className="lg:w-1/2 flex flex-col justify-center" data-aos="fade-right">
          <h4 className="text-gray-600 font-semibold text-lg mb-2">
            Building Contractors in Chennai
          </h4>
          <h2 className="text-5xl lg:text-6xl font-extrabold !text-black mb-8">
            About Us
          </h2>
          
          <div className="text-gray-600 space-y-6 text-[17px] leading-relaxed">
            <div>
              <strong className="block text-gray-800 font-bold mb-2">
                HEMKAM Infrastructure Private Limited
              </strong>
              <p>
                HEMKAM Infrastructure brings a diverse set of capabilities to large-scale infrastructure
                projects. With a focus on integrated execution, adaptability, and uncompromising quality, we
                have established ourselves as a trusted name in infrastructure development. Driven by a
                spirit of innovation, we are committed to delivering projects on time and setting new
                benchmarks across sectors.
              </p>
            </div>
            
            <p>
              HEMKAM Infrastructure brings a diverse set of capabilities to large-scale infrastructure
              projects. With a focus on integrated execution, adaptability, and uncompromising quality, we
              have established ourselves as a trusted name in infrastructure development. Driven by a
              spirit of innovation, we are committed to delivering projects on time and setting new
              benchmarks across sectors.
            </p>
          </div>
        </div>

        {/* Image Content */}
        <div className="lg:w-1/2 flex justify-center items-center relative p-4 lg:p-8" data-aos="fade-left">
          <div className="relative w-full max-w-lg lg:max-w-xl mx-auto">
            {/* Subtle Accent Box behind image for premium look */}
            <div className="absolute top-4 -right-4 bottom-4 -left-4 bg-gray-100 rounded-lg -z-10 hidden lg:block"></div>
            
            <img 
              src="/image/home-about.jpg" 
              alt="About HEMKAM Infrastructure" 
              className="w-full h-[50vh] lg:h-[65vh] object-cover rounded-xl shadow-2xl relative z-10"
            />
            
            {/* Small decorative accent on the right as seen in screenshot */}
            <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-2 h-24 bg-orange-600 z-20"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HomeAbt;
