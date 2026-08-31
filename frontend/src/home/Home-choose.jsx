import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomeChoose = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease-in-out',
    });
  }, []);

  const CheckIcon = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      className="h-6 w-6 text-orange-600 shrink-0 mt-0.5" 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor" 
      strokeWidth={3}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );

  return (
    <section className="py-20 lg:py-28 bg-gray-50 overflow-hidden">
      <div className="w-full max-w-[1536px] mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column */}
          <div data-aos="fade-right">
            <h2 className="text-4xl lg:text-5xl font-extrabold !text-black mb-8">
              Why Choose Us?
            </h2>
            
            <div className="text-gray-600 space-y-6 text-[17px] leading-relaxed">
              <p>
                <strong className="text-gray-800 font-bold">Hemkam Infrastructure Private Limited</strong> has carved a strong niche in the construction industry, earning the trust and respect of clients through a consistent record of quality, reliability, and innovation.
              </p>
              
              <p>
                At Hemkam, professionalism is the foundation of every project—driven by technical expertise, advanced technology, skilled teams, and an unwavering commitment to ethical practices. This approach has enabled the company to successfully execute prestigious and challenging projects across multiple sectors.
              </p>
              
              <p>
                Guided by a relentless pursuit of excellence, Hemkam Infrastructure continues to set new benchmarks, ensuring each achievement serves as a stepping stone toward even greater accomplishments.
              </p>
            </div>

            {/* Stat Box */}
            <div className="mt-12 flex flex-col items-center lg:items-start" data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-5xl font-black !text-black mb-2">2+</h3>
              <p className="text-gray-600 font-medium text-lg tracking-wide">Project Going On</p>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col justify-center" data-aos="fade-left">
            <ul className="space-y-6 mb-12">
              <li className="flex items-start gap-4">
                <CheckIcon />
                <span className="text-gray-700 text-lg leading-snug">Full operating system 24/7 active unsatiable our construction.</span>
              </li>
              <li className="flex items-start gap-4">
                <CheckIcon />
                <span className="text-gray-700 text-lg leading-snug">More than 75 machines types excuse hardly summer basket.</span>
              </li>
              <li className="flex items-start gap-4">
                <CheckIcon />
                <span className="text-gray-700 text-lg leading-snug">Training and free instructions knowledge certainly sweetnes.</span>
              </li>
              <li className="flex items-start gap-4">
                <CheckIcon />
                <span className="text-gray-700 text-lg leading-snug">Repair and buying service reasonable as so am inhabiting.</span>
              </li>
              <li className="flex items-start gap-4">
                <CheckIcon />
                <span className="text-gray-700 text-lg leading-snug">Home foundation, Bridge construction interested affronting.</span>
              </li>
            </ul>

            <p className="text-gray-600 text-[17px] leading-relaxed border-l-4 border-orange-600 pl-6 py-2">
              However venture pursuit he am mr cordial. Forming musical am hearing studied be luckily. Ourselves for determine attending how led gentleman.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HomeChoose;
