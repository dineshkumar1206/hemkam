import React, { useEffect } from 'react';
import PriceHero from '../price/Price-Hero';
import AOS from 'aos';
import 'aos/dist/aos.css';

const allPlans = [
  {
    name: 'BASIC PACKAGE',
    price: '2100',
    features: [
      'DESIGN',
      'PROJECT MANAGEMENT',
      'STRUCTURE',
      'BATHROOM & PLUMBING',
      'FLOORING',
    ],
    featured: false,
  },
  {
    name: 'STANDARD PACKAGE',
    price: '2600',
    features: [
      'DESIGN',
      'PROJECT MANAGEMENT',
      'STRUCTURE',
      'BATH ROOM & PLUMBING',
      'FLORRING',
    ],
    featured: false,
  },
  {
    name: 'PREMIUM PACKAGE',
    price: '3500',
    features: [
      'DESIGN',
      'PROJECT MANAGEMENT',
      'STRUCTURE',
      'BATHROOM & PLUMBING',
      'FLOORING',
    ],
    featured: false,
  },
  {
    name: 'LUXURY PACKAGE',
    price: '5000',
    features: [
      'DESIGN',
      'PROJECT MANAGEMENT',
      'STRUCTURE',
      'BATHROOM & PLUMBING',
      'FLOORING',
    ],
    featured: true,
  },
];

const CheckIcon = () => (
  <svg className="w-5 h-5 text-[#ff3b00] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
  </svg>
);

const PricingCard = ({ plan, index }) => (
  <div 
    data-aos="fade-up"
    data-aos-delay={index * 150}
    className={`relative group bg-white/80 backdrop-blur-md rounded-3xl p-8 text-center flex flex-col items-center justify-between h-full transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 border border-gray-100 ${plan.featured ? 'shadow-2xl scale-105 z-10 border-[#ff3b00]/30 bg-white/95' : 'shadow-xl'}`}
  >
    {plan.featured && (
       <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#ff3b00] to-[#ff7a00] text-white text-xs font-bold px-5 py-2 rounded-full shadow-lg tracking-wider uppercase z-20">
         Most Popular
       </div>
    )}
    <div className="w-full">
      <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-6 uppercase tracking-wider">{plan.name}</h3>
      <div className="flex justify-center items-end mb-8 text-gray-900 group-hover:text-[#ff3b00] transition-colors duration-300">
        <span className="text-3xl font-medium relative -top-3 mr-1">₹</span>
        <span className="text-5xl lg:text-6xl font-extrabold tracking-tight">{plan.price}</span>
        <span className="text-base font-bold text-gray-500 ml-1 pb-1">/SFT</span>
      </div>
      
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-8"></div>
      
      <ul className="space-y-4 mb-10 text-[13px] md:text-[14px] font-bold text-gray-600 flex flex-col items-start w-max mx-auto">
        {plan.features.map((feature, idx) => (
          <li key={idx} className="flex items-center uppercase tracking-wide">
            <CheckIcon />
            {feature}
          </li>
        ))}
      </ul>
    </div>
    <button className="bg-gradient-to-r from-[#ff3b00] to-[#ff6b00] hover:from-[#e03400] hover:to-[#ff5500] text-white font-bold py-3.5 px-8 rounded-xl transition-all duration-300 w-full shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50">
      Read More
    </button>
  </div>
);

const Price = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col overflow-hidden">
      <PriceHero />
      <div className="py-24 px-4 md:px-6 lg:px-8 max-w-[1536px] mx-auto w-full relative">
        
        {/* Premium Background Elements */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl -z-10 mix-blend-multiply"></div>
        <div className="absolute bottom-10 right-20 w-[500px] h-[500px] bg-red-300/10 rounded-full blur-3xl -z-10 mix-blend-multiply"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 items-center pt-8">
          {allPlans.map((plan, idx) => (
            <div key={idx} className={`h-full ${plan.featured ? "z-10" : "z-0"}`}>
               <PricingCard plan={plan} index={idx} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Price;
