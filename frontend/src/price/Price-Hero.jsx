import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PriceHero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <section className="relative w-full h-[40vh] lg:h-[50vh] flex items-center justify-center bg-[#2b2b2b] overflow-hidden">
      <img 
        src="/image/contact-banner.png" 
        alt="Pricing Banner" 
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />
      <div className="relative z-10 text-center text-white mt-20" data-aos="fade-up">
         <h1 className="text-5xl md:text-7xl font-bold tracking-wide">Pricing</h1>
      </div>
    </section>
  );
};

export default PriceHero;
