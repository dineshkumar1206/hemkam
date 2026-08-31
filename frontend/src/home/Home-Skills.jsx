import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomeSkills = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease-in-out',
    });
  }, []);

  const SkillBar = ({ label, percentage }) => (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-600 font-medium text-sm">{label}</span>
        <span className="text-gray-600 font-medium text-sm">{percentage} %</span>
      </div>
      <div className="w-full bg-gray-100 h-2 rounded-none overflow-hidden relative">
        <div 
          className="bg-orange-600 h-full rounded-none absolute top-0 left-0" 
          style={{ width: `${percentage}%` }}
          data-aos="slide-right"
          data-aos-duration="1500"
        ></div>
      </div>
    </div>
  );

  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="w-full max-w-[1536px] mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        
        {/* Left Column - Image with Decoration */}
        <div className="lg:w-1/2 relative w-full" data-aos="fade-right">
          {/* Orange/Red Decoration Box */}
          <div className="absolute -top-5 -left-5 w-24 h-24 bg-orange-600 -z-10"></div>
          
          {/* The user will replace this src with their own image */}
          <img 
            src="/image/skills.jpg" 
            alt="Our Skills" 
            className="w-full h-[50vh] lg:h-[60vh] object-cover relative z-10 shadow-lg"
          />
        </div>

        {/* Right Column - Text & Progress Bars */}
        <div className="lg:w-1/2 flex flex-col justify-center" data-aos="fade-left">
          <h4 className="text-orange-600 font-bold text-lg mb-2">
            Skills
          </h4>
          <h2 className="text-4xl lg:text-[46px] font-bold !text-black mb-6 leading-tight">
            We Design and Build Your Dream Home!
          </h2>
          
          <p className="text-gray-500 mb-10 text-[15px] leading-relaxed">
            However venture pursuit he am mr cordial. Forming musical am hearing studied be luckily. Ourselves for determine attending how led gentleman sincerity.
          </p>

          <div className="w-full mt-4">
            <SkillBar label="Best Performance" percentage={97} />
            <SkillBar label="High Quality" percentage={54} />
            <SkillBar label="Top Team" percentage={68} />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HomeSkills;
