import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ServiceList from '../Service-List';

const Apartments = () => {
  const [selectedImage, setSelectedImage] = useState(null);

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
        <img 
          src="/image/service-banner.png" 
          alt="Apartments Banner" 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative z-10 text-center mt-16" data-aos="fade-down">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Apartments</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 lg:py-28 bg-white overflow-hidden">
        <div className="w-full max-w-[1536px] mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          
          {/* Left Image */}
          <div className="lg:w-1/2 relative w-full flex flex-col gap-6" data-aos="fade-right">
            <img 
              src="/image/a-1.webp" 
              alt="Modern Apartments" 
              className="w-full h-auto object-cover shadow-lg"
            />
          </div>

          {/* Right Text Content */}
          <div className="lg:w-1/2" data-aos="fade-left">
            <h2 className="!text-3xl lg:!text-4xl !font-extrabold !text-black mb-6 leading-tight">
              Modern Apartments Designed for Comfortable Living
            </h2>
            
            <p className="text-gray-700 text-[16px] mb-8 leading-relaxed">
              At Hemkam Infrastructure, our apartments are thoughtfully planned to offer the perfect combination of comfort, style, and convenience. Every project is built with precision engineering, premium materials, and modern layouts that enhance your lifestyle while ensuring long-term value.
            </p>

            <ul className="space-y-6 text-gray-700 text-[15px] leading-relaxed list-disc pl-5">
              <li>
                <strong className="text-black">Contemporary Architectural Design</strong> – Our apartment buildings feature sleek, modern exteriors and intelligently designed interiors that maximize space, natural light, and ventilation.
              </li>
              <li>
                <strong className="text-black">Premium Quality Construction</strong> – We use high-grade materials, advanced building techniques, and rigorous quality checks to ensure your apartment is strong, safe, and built to last.
              </li>
              <li>
                <strong className="text-black">Smart Space Utilization</strong> – From well-planned kitchens to multipurpose living areas, every square foot is optimized for practical and comfortable living.
              </li>
              <li>
                <strong className="text-black">Lifestyle Amenities</strong> – Enjoy the benefits of facilities like gyms, children's play areas, landscaped gardens, and community halls right within your residential complex.
              </li>
              <li>
                <strong className="text-black">Sustainable Living</strong> – Our projects incorporate eco-friendly features like rainwater harvesting, solar power, and energy-efficient lighting to reduce your environmental footprint.
              </li>
            </ul>
          </div>

        </div>
      </section>
      
      {/* Why Choose a Hemkam Apartment Section */}
      <section className="py-20 lg:py-28 bg-white overflow-hidden">
        <div className="w-full max-w-[1536px] mx-auto px-6 lg:px-16 flex flex-col-reverse lg:flex-row items-start gap-12 lg:gap-20">
          
          {/* Left Text Content */}
          <div className="lg:w-1/2" data-aos="fade-right">
            <h2 className="!text-3xl lg:!text-4xl !font-extrabold !text-black mb-6 leading-tight">
              Why Choose a Hemkam Apartment?
            </h2>
            
            <p className="text-gray-700 text-[16px] mb-8 leading-relaxed">
              With Hemkam Infrastructure, you don't just buy an apartment — you invest in a modern, well-connected lifestyle. We design living spaces that provide convenience, community, and comfort for families of all sizes.
            </p>

            <ul className="space-y-6 text-gray-700 text-[15px] leading-relaxed list-disc pl-5">
              <li>
                <strong className="text-black">Prime City Locations</strong> – Our apartments are located in key areas with easy access to schools, hospitals, shopping malls, and transport facilities, making daily life effortless.
              </li>
              <li>
                <strong className="text-black">Secure Living</strong> – Enjoy 24/7 security with gated access, CCTV surveillance, and trained personnel, ensuring your family's safety at all times.
              </li>
              <li>
                <strong className="text-black">Affordable Luxury</strong> – We offer competitive pricing without compromising on quality, giving you exceptional value for your investment.
              </li>
              <li>
                <strong className="text-black">Community Lifestyle</strong> – Live in a vibrant community with shared spaces that encourage interaction, friendship, and a sense of belonging.
              </li>
              <li>
                <strong className="text-black">High Investment Potential</strong> – Hemkam apartments are designed to appreciate in value, making them a smart choice for both living and long-term returns.
              </li>
            </ul>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2 relative w-full flex flex-col gap-6" data-aos="fade-left">
            <img 
              src="/image/a-2.jpg" 
              alt="Why Choose Hemkam Apartment" 
              className="w-full h-auto object-cover shadow-lg"
            />
          </div>

        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 pb-28 bg-white overflow-hidden">
        <div className="w-full max-w-[1536px] mx-auto px-6 lg:px-16">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="!text-3xl lg:!text-[40px] !font-bold !text-[#2a3072]">
              Gallery
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div data-aos="fade-up" data-aos-delay="100">
              <img src="/image/a-1.webp" alt="Gallery 1" onClick={() => setSelectedImage('/image/a-1.webp')} className="w-full h-auto object-cover rounded-xl shadow-md hover:scale-[1.02] transition-transform duration-300 cursor-pointer" />
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <img src="/image/a-2.jpg" alt="Gallery 2" onClick={() => setSelectedImage('/image/a-2.jpg')} className="w-full h-auto object-cover rounded-xl shadow-md hover:scale-[1.02] transition-transform duration-300 cursor-pointer" />
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <img src="/image/a-3.webp" alt="Gallery 3" onClick={() => setSelectedImage('/image/a-3.jpg')} className="w-full h-auto object-cover rounded-xl shadow-md hover:scale-[1.02] transition-transform duration-300 cursor-pointer" />
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
              <img src="/image/a-4.png" alt="Gallery 4" onClick={() => setSelectedImage('/image/a-4.jpg')} className="w-full h-auto object-cover rounded-xl shadow-md hover:scale-[1.02] transition-transform duration-300 cursor-pointer" />
            </div>
            <div data-aos="fade-up" data-aos-delay="500">
              <img src="/image/a-2.jpg" alt="Gallery 5" onClick={() => setSelectedImage('/image/a-5.jpg')} className="w-full h-auto object-cover rounded-xl shadow-md hover:scale-[1.02] transition-transform duration-300 cursor-pointer" />
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full h-auto flex flex-col items-end">
            <button 
              className="text-white hover:text-gray-300 focus:outline-none mb-4 bg-black/50 rounded-full p-2"
              onClick={() => setSelectedImage(null)}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img 
              src={selectedImage} 
              alt="Expanded view" 
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()} 
            />
          </div>
        </div>
      )}

      <ServiceList />
    </>
  );
};

export default Apartments;
