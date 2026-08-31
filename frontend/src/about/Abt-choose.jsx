import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AbtChoose = () => {
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
      <section className="relative w-full h-[50vh] lg:h-[60vh] flex items-center bg-gray-900 overflow-hidden">
        {/* The user will replace this src with their own banner image */}
        <img 
          src="/image/abt-choose.png" 
          alt="Quality Construction" 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative z-10 w-full max-w-[1536px] mx-auto px-6 lg:px-16 flex justify-end">
          <div className="w-full lg:w-1/2 text-left" data-aos="fade-left">
            <h2 className="text-4xl md:text-5xl lg:text-[46px] font-bold text-white mb-8 leading-tight">
              Quality Construction, Honest service,<br /> Great value!
            </h2>
            <button className="bg-[#ff3b00] hover:bg-[#e63500] text-white font-medium py-3 px-8 transition-colors duration-300">
              Explore More
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Text Section */}
      <section className="py-20 lg:py-28 bg-white overflow-hidden text-center">
        <div className="w-full max-w-[1536px] mx-auto px-6 lg:px-16 flex flex-col items-center">
          <h2 className="text-4xl lg:text-[46px] font-bold !text-black mb-8" data-aos="fade-up">
            Why Choose Us?
          </h2>
          
          <div className="max-w-5xl mx-auto space-y-6 text-gray-500 text-[15px] leading-relaxed" data-aos="fade-up" data-aos-delay="150">
            <p>
              <strong className="text-gray-700 font-semibold">Hemkam Infrastructure Private Limited</strong> is a trusted name in the construction sector, delivering impactful projects with a strong presence across India. Backed by a forward-looking management team, a skilled workforce, and expertise spanning diverse domains, the company upholds the highest standards of professionalism and ethics.
            </p>
            
            <p>
              With its commitment to quality, innovation, and timely delivery, Hemkam Infrastructure continues to build enduring value for clients and stakeholders alike.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AbtChoose;
