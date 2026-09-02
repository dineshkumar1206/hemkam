import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServiceChoose = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease-in-out',
    });
  }, []);

  const features = [
    "Full operating system 24/7 active unsatiable our construction.",
    "More than 75 machines types excuse hardly summer basket.",
    "Training and free instructions knowledge certainly sweetnes.",
    "Repair and buying service reasonable as so am inhabiting.",
    "Home foundation, Bridge construction interested affronting."
  ];

  return (
    <>
      {/* CTA Banner Section */}
      <section className="relative w-full py-20 lg:py-32 flex items-center bg-black overflow-hidden">
        {/* Background Image */}
        <img 
          src="/image/services-2.png" 
          alt="Handshake" 
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-10 w-full max-w-[1536px] mx-auto px-6 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-2xl text-white" data-aos="fade-right">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Find world Best Services &<br />Resources!
            </h2>
            <p className="text-gray-200 text-[16px] leading-relaxed max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          <div data-aos="fade-left">
            <button className="bg-[#ff3300] hover:bg-orange-700 text-white font-semibold py-4 px-10 transition-colors duration-300 shadow-lg">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 lg:py-28 bg-white overflow-hidden">
        <div className="w-full max-w-[1536px] mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column */}
          <div data-aos="fade-right">
            <h2 className="text-4xl lg:text-5xl font-bold !text-black mb-8">
              Why Choose Us?
            </h2>
            <p className="text-gray-500 text-[15.5px] leading-relaxed mb-12">
              However venture pursuit he am mr cordial. Forming musical am hearing studied be luckily. Ourselves for determine attending how led gentleman sincerity. Valley afford uneasy joy she thrown though bed set. In me forming general prudent on country carried. Behaved an or suppose justice. Seemed whence how son rather easily and change missed. Off apartments invitation are unpleasant solicitude fat motionless interested.
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap items-center justify-between lg:justify-start gap-12 text-center md:text-left">
              <div>
                <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">100%</h3>
                <p className="text-gray-500 font-medium">Quality</p>
              </div>
              <div>
                <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">55k</h3>
                <p className="text-gray-500 font-medium">Objects</p>
              </div>
              <div>
                <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">3k</h3>
                <p className="text-gray-500 font-medium">Projects</p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div data-aos="fade-left" className="flex flex-col justify-center">
            <ul className="space-y-6 mb-10">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <span className="flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </span>
                  <span className="text-gray-700 font-medium text-[15.5px]">{feature}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-500 text-[15.5px] leading-relaxed">
              However venture pursuit he am mr cordial. Forming musical am hearing studied be luckily. Ourselves for determine attending how led gentleman.
            </p>
          </div>

        </div>
      </section>
    </>
  );
};

export default ServiceChoose;
