import React from 'react';
import TextType from '../components/TextType';

const Hero = () => {
  return (
    <div 
      className="relative w-full h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: "url('/image/hero.webp')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="w-full max-w-[1126px] mx-auto px-8 md:px-16">
        <div className="relative z-10 max-w-4xl text-white text-left">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
          Committed to Superior<br />
          <TextType
            as="span"
            text={['Quality!', 'Results!']}
            textColors={['#f7f7f7ff']}
            typingSpeed={70}
            deletingSpeed={40}
            pauseDuration={2000}
            showCursor={true}
          />
        </h1>
        
        {/* Decorative Line */}
        <div className="w-32 h-1 bg-orange-600 mb-6"></div>
        
        <p className="text-sm md:text-base max-w-2xl font-medium leading-relaxed">
          Hemkam Infrastructure Private Limited has carved a strong niche in the construction industry, earning the trust and respect of clients through a consistent record of quality, reliability, and innovation.
        </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
