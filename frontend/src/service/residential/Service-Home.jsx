import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ServiceList from '../Service-List';

const ServiceHome = () => {
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
          alt="Home Banner" 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative z-10 text-center mt-16" data-aos="fade-down">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Home</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 lg:py-28 bg-white overflow-hidden">
        <div className="w-full max-w-[1536px] mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          
          {/* Left Image */}
          <div className="lg:w-1/2 relative w-full flex flex-col gap-6" data-aos="fade-right">
            <img 
              src="/image/h-1.jpg" 
              alt="Dream Home" 
              className="w-full h-auto object-cover shadow-lg"
            />
          </div>

          {/* Right Text Content */}
          <div className="lg:w-1/2" data-aos="fade-left">
            <h2 className="!text-3xl lg:!text-4xl !font-extrabold !text-black mb-6 leading-tight">
              Crafting Your Dream Home
            </h2>
            
            <p className="text-gray-700 text-[16px] mb-8 leading-relaxed">
              At Hemkam Infrastructure, we believe your home should be more than just walls and a roof — it should be a place where memories are made and comfort is constant. We combine innovative design, durable construction, and a deep understanding of client needs to create homes that truly stand out.
            </p>

            <h3 className="!text-2xl lg:!text-3xl !font-bold !text-black mb-6">
              Subheadings:
            </h3>

            <ul className="space-y-6 text-gray-700 text-[15px] leading-relaxed list-disc pl-5">
              <li>
                <strong className="text-black">Personalized Designs</strong> – Every family is unique, and so is every home we build. Our architects and designers work closely with you to ensure the layout, interiors, and aesthetics perfectly match your lifestyle and preferences.
              </li>
              <li>
                <strong className="text-black">Quality Construction</strong> – We use only high-grade materials and advanced construction techniques to ensure your home remains strong, safe, and beautiful for decades.
              </li>
              <li>
                <strong className="text-black">Modern Amenities</strong> – From spacious kitchens and stylish living rooms to smart home features and energy-efficient lighting, our homes come equipped with modern comforts for daily convenience.
              </li>
              <li>
                <strong className="text-black">Energy-Efficient Homes</strong> – We integrate eco-friendly designs, proper ventilation, and energy-saving installations that reduce electricity bills while minimizing environmental impact.
              </li>
              <li>
                <strong className="text-black">Attention to Detail</strong> – From the alignment of tiles to the smoothness of paint, we ensure perfection in every small detail, giving your home a premium, polished finish.
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* Why Choose Hemkam Section */}
      <section className="py-20 lg:py-28 bg-white overflow-hidden">
        <div className="w-full max-w-[1536px] mx-auto px-6 lg:px-16 flex flex-col-reverse lg:flex-row items-start gap-12 lg:gap-20">
          
          {/* Left Text Content */}
          <div className="lg:w-1/2" data-aos="fade-right">
            <h2 className="!text-3xl lg:!text-4xl !font-extrabold !text-black mb-6 leading-tight">
              Why Choose Hemkam for Your Home?
            </h2>
            
            <p className="text-gray-700 text-[16px] mb-8 leading-relaxed">
              When it comes to building your dream home, trust matters. At Hemkam Infrastructure, we offer transparent processes, expert execution, and a client-first approach, ensuring a stress-free and enjoyable home-building journey.
            </p>

            <ul className="space-y-6 text-gray-700 text-[15px] leading-relaxed list-disc pl-5">
              <li>
                <strong className="text-black">Expert Architectural Planning</strong> – Our skilled architects create layouts that maximize space, natural light, and airflow, ensuring both functionality and elegance.
              </li>
              <li>
                <strong className="text-black">On-Time Completion</strong> – We follow strict timelines with efficient project management, so your home is ready when promised — without compromising on quality.
              </li>
              <li>
                <strong className="text-black">Customer-Centric Approach</strong> – From the initial consultation to the final handover, we maintain open communication, keeping you involved at every stage of construction.
              </li>
              <li>
                <strong className="text-black">Budget-Friendly Options</strong> – We design cost-effective solutions without cutting corners, allowing you to get the best value for your investment.
              </li>
              <li>
                <strong className="text-black">Strong After-Sales Support</strong> – Our relationship doesn't end at handover. We provide assistance, maintenance advice, and support to ensure your home remains perfect for years to come.
              </li>
            </ul>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2 relative w-full flex flex-col gap-6" data-aos="fade-left">
            <img 
              src="/image/h-2.webp" 
              alt="Why Choose Hemkam" 
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
              <img src="/image/h-1.jpg" alt="Gallery 1" onClick={() => setSelectedImage('/image/h-1.jpg')} className="w-full h-auto object-cover rounded-xl shadow-md hover:scale-[1.02] transition-transform duration-300 cursor-pointer" />
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <img src="/image/h-2.webp" alt="Gallery 2" onClick={() => setSelectedImage('/image/h-2.webp')} className="w-full h-auto object-cover rounded-xl shadow-md hover:scale-[1.02] transition-transform duration-300 cursor-pointer" />
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <img src="/image/h-3.webp" alt="Gallery 3" onClick={() => setSelectedImage('/image/h-3.webp')} className="w-full h-auto object-cover rounded-xl shadow-md hover:scale-[1.02] transition-transform duration-300 cursor-pointer" />
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
              <img src="/image/h-4.webp" alt="Gallery 4" onClick={() => setSelectedImage('/image/h-4.webp')} className="w-full h-auto object-cover rounded-xl shadow-md hover:scale-[1.02] transition-transform duration-300 cursor-pointer" />
            </div>
            <div data-aos="fade-up" data-aos-delay="500">
              <img src="/image/h-6.jpg" alt="Gallery 5" onClick={() => setSelectedImage('/image/h-6.jpg')} className="w-full h-auto object-cover rounded-xl shadow-md hover:scale-[1.02] transition-transform duration-300 cursor-pointer" />
            </div>
            <div data-aos="fade-up" data-aos-delay="600">
              <img src="/image/h-7.webp" alt="Gallery 6" onClick={() => setSelectedImage('/image/h-7.webp')} className="w-full h-auto object-cover rounded-xl shadow-md hover:scale-[1.02] transition-transform duration-300 cursor-pointer" />
            </div>
            <div data-aos="fade-up" data-aos-delay="700">
              <img src="/image/h-8.jpg" alt="Gallery 7" onClick={() => setSelectedImage('/image/h-8.jpg')} className="w-full h-auto object-cover rounded-xl shadow-md hover:scale-[1.02] transition-transform duration-300 cursor-pointer" />
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

export default ServiceHome;
