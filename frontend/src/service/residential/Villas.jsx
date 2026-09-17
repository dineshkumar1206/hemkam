import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ServiceList from '../Service-List';

const Villas = () => {
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
          alt="Villas Banner" 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative z-10 text-center mt-16" data-aos="fade-down">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Villas</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 lg:py-28 bg-white overflow-hidden">
        <div className="w-full max-w-[1536px] mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          
          {/* Left Image */}
          <div className="lg:w-1/2 relative w-full flex flex-col gap-6" data-aos="fade-right">
            <img 
              src="/image/v-1.jpg" 
              alt="Luxury Villa" 
              className="w-full h-auto object-cover shadow-lg"
            />
          </div>

          {/* Right Text Content */}
          <div className="lg:w-1/2" data-aos="fade-left">
            <h2 className="!text-3xl lg:!text-4xl !font-extrabold !text-black mb-6 leading-tight">
              Luxury Villas Crafted to Perfection
            </h2>
            
            <p className="text-gray-700 text-[16px] mb-8 leading-relaxed">
              At Hemkam Infrastructure, we create villas that redefine modern luxury. Every project is a harmonious blend of architectural brilliance, exceptional craftsmanship, and high-end amenities. We focus on giving you not just a home, but a refined living experience where elegance meets comfort.
            </p>

            <ul className="space-y-6 text-gray-700 text-[15px] leading-relaxed list-disc pl-5">
              <li>
                <strong className="text-black">Exclusive Architectural Design</strong> – Our villas feature bespoke layouts designed by expert architects, with a perfect balance of aesthetics and functionality. From striking facades to open, airy interiors, every detail is thoughtfully planned to make your home stand out.
              </li>
              <li>
                <strong className="text-black">Premium Construction Quality</strong> – We use top-grade construction materials, precision engineering, and expert workmanship to ensure your villa remains strong, safe, and beautiful for generations.
              </li>
              <li>
                <strong className="text-black">World-Class Amenities</strong> – Each villa is equipped with modern luxuries such as private swimming pools, landscaped gardens, home automation systems, and stylish modular kitchens to make everyday living a pleasure.
              </li>
              <li>
                <strong className="text-black">Private & Peaceful Environment</strong> – Our villas are located in serene, well-planned communities with minimal noise and maximum privacy. You can enjoy the perfect retreat while still being connected to the city.
              </li>
              <li>
                <strong className="text-black">Eco-Friendly Living</strong> – We integrate sustainable features such as solar panels, rainwater harvesting, and energy-efficient lighting, ensuring your villa is both luxurious and environmentally responsible.
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* Why Choose a Hemkam Villa Section */}
      <section className="py-20 lg:py-28 bg-white overflow-hidden">
        <div className="w-full max-w-[1536px] mx-auto px-6 lg:px-16 flex flex-col-reverse lg:flex-row items-start gap-12 lg:gap-20">
          
          {/* Left Text Content */}
          <div className="lg:w-1/2" data-aos="fade-right">
            <h2 className="!text-3xl lg:!text-4xl !font-extrabold !text-black mb-6 leading-tight">
              Why Choose a Hemkam Villa?
            </h2>
            
            <p className="text-gray-700 text-[16px] mb-8 leading-relaxed">
              Choosing a Hemkam villa means choosing a lifestyle of elegance, comfort, and security. We create homes that not only reflect your taste but also enhance your daily living experience with unmatched quality and convenience.
            </p>

            <ul className="space-y-6 text-gray-700 text-[15px] leading-relaxed list-disc pl-5">
              <li>
                <strong className="text-black">Spacious Living Areas</strong> – Our villas feature grand living rooms, wide verandas, open terraces, and high ceilings that provide an airy, luxurious feel to your home.
              </li>
              <li>
                <strong className="text-black">Tailored to Your Lifestyle</strong> – We offer flexible design and customization options, allowing you to choose layouts, finishes, and features that match your personal style and functional needs.
              </li>
              <li>
                <strong className="text-black">Secure & Gated Communities</strong> – Your safety is our priority. Our villa projects include round-the-clock security, CCTV surveillance, gated access, and well-trained personnel to ensure complete peace of mind.
              </li>
              <li>
                <strong className="text-black">Prime Locations</strong> – Strategically situated in sought-after areas with easy access to schools, hospitals, shopping malls, and entertainment hubs, so convenience is always at your doorstep.
              </li>
              <li>
                <strong className="text-black">Long-Term Value</strong> – A Hemkam villa is a smart investment. Not only do you enjoy unmatched luxury today, but the property's value continues to grow, securing your financial future.
              </li>
            </ul>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2 relative w-full flex flex-col gap-6" data-aos="fade-left">
            <img 
              src="/image/v-2.webp" 
              alt="Why Choose Hemkam Villa" 
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
              <img src="/image/v-1.jpg" alt="Gallery 1" onClick={() => setSelectedImage('/image/v-1.jpg')} className="w-full h-auto object-cover rounded-xl shadow-md hover:scale-[1.02] transition-transform duration-300 cursor-pointer" />
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <img src="/image/v-2.webp" alt="Gallery 2" onClick={() => setSelectedImage('/image/v-2.webp')} className="w-full h-auto object-cover rounded-xl shadow-md hover:scale-[1.02] transition-transform duration-300 cursor-pointer" />
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <img src="/image/v-3.jpg" alt="Gallery 3" onClick={() => setSelectedImage('/image/v-3.jpg')} className="w-full h-auto object-cover rounded-xl shadow-md hover:scale-[1.02] transition-transform duration-300 cursor-pointer" />
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
              <img src="/image/v-4.jpg" alt="Gallery 4" onClick={() => setSelectedImage('/image/v-4.jpg')} className="w-full h-auto object-cover rounded-xl shadow-md hover:scale-[1.02] transition-transform duration-300 cursor-pointer" />
            </div>
            <div data-aos="fade-up" data-aos-delay="500">
              <img src="/image/v-5.jpg" alt="Gallery 5" onClick={() => setSelectedImage('/image/v-5.jpg')} className="w-full h-auto object-cover rounded-xl shadow-md hover:scale-[1.02] transition-transform duration-300 cursor-pointer" />
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
      <ServiceList/>
    </>
  );
};

export default Villas;
