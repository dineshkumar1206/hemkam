import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ServiceList from '../Service-List';

const ResidentialConstruction = () => {
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
          alt="Residential Construction Banner" 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative z-10 text-center mt-16" data-aos="fade-down">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Residential Construction</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 lg:py-28 bg-white overflow-hidden">
        <div className="w-full max-w-[1536px] mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          
          {/* Left Images */}
          <div className="lg:w-1/2 relative w-full flex flex-col gap-6" data-aos="fade-right">
            <img 
              src="/image/rc-1.jpg" 
              alt="Residential Building 1" 
              className="w-full h-auto object-cover shadow-lg"
            />
            <img 
              src="/image/rc-2.png" 
              alt="Residential Building 2" 
              className="w-full h-auto object-cover shadow-lg"
            />
          </div>

          {/* Right Text Content */}
          <div className="lg:w-1/2" data-aos="fade-left">
            <h2 className="!text-3xl lg:!text-4xl !font-extrabold !text-black mb-8 leading-tight">
              Complete Residential <br/> Building Solutions
            </h2>
            
            <div className="space-y-6">
              {/* Item 1 */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <span>🧱</span> a. Site Evaluation & Planning
                </h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  We conduct detailed soil testing, land assessment, and topographic analysis to ensure the site is structurally suitable for construction.
                </p>
              </div>

              {/* Item 2 */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <span>🏗️</span> b. Architectural & Structural Design
                </h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  Our experienced architects design smart layouts that optimize space, natural lighting, and ventilation — all while maintaining aesthetic appeal and safety.
                </p>
              </div>

              {/* Item 3 */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <span>🧮</span> c. Cost Estimation & Budget Planning
                </h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  We provide clear and accurate cost estimates, helping clients plan financially without facing surprises during execution.
                </p>
              </div>

              {/* Item 4 */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <span>🛠️</span> d. Construction Execution & Supervision
                </h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  Skilled teams execute work in a phased manner with strict supervision, ensuring adherence to deadlines and quality standards.
                </p>
              </div>

              {/* Item 5 */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <span>📄</span> e. Documentation & Approvals
                </h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  We handle all municipal permissions, plan approvals, and documentation, giving a hassle-free building experience.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Interior & Finishing Section */}
      <section className="py-20 lg:py-28 bg-white overflow-hidden">
        <div className="w-full max-w-[1536px] mx-auto px-6 lg:px-16 flex flex-col-reverse lg:flex-row items-start gap-12 lg:gap-20">
          
          {/* Left Text Content */}
          <div className="lg:w-1/2" data-aos="fade-right">
            <h2 className="!text-3xl lg:!text-4xl !font-extrabold !text-black mb-4 leading-tight">
              Customized Residential Interiors & Finishing
            </h2>
            <p className="text-gray-700 text-[16px] mb-8 leading-relaxed">
              We ensure your home reflects your personality by delivering customized interior solutions that are both functional and visually appealing.
            </p>
            
            <div className="space-y-6">
              {/* Item 1 */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <span>🎨</span> a. Interior Design Consultation
                </h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  Our design experts collaborate with you to craft interiors that match your style, preferences, and functional needs.
                </p>
              </div>

              {/* Item 2 */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <span>🪵</span> b. Modular Kitchen & Storage Solutions
                </h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  Smart kitchen layouts and custom storage units are installed to maximize usability and maintain aesthetics.
                </p>
              </div>

              {/* Item 3 */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <span>🛋️</span> c. Living & Bedroom Furnishing
                </h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  We design living and bedroom spaces with furniture, wall treatments, and lighting that bring comfort and elegance.
                </p>
              </div>

              {/* Item 4 */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <span>🚿</span> d. Bathroom & Utility Setup
                </h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  From sanitary fittings to utility areas, we provide practical and elegant solutions tailored to your needs.
                </p>
              </div>

              {/* Item 5 */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <span>🧽</span> e. Final Cleaning & Handover
                </h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  We complete a deep clean and detailed inspection before handing over a move-in-ready home.
                </p>
              </div>
            </div>
          </div>

          {/* Right Images */}
          <div className="lg:w-1/2 relative w-full flex flex-col gap-6" data-aos="fade-left">
            <img 
              src="/image/rc-3.webp" 
              alt="Residential Interiors 1" 
              className="w-full h-auto object-cover shadow-lg"
            />
            <img 
              src="/image/rc-2.png" 
              alt="Residential Interiors 2" 
              className="w-full h-auto object-cover shadow-lg"
            />
          </div>

        </div>
      </section>

      {/* Booking Section */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="w-full max-w-[1200px] mx-auto px-6 lg:px-16 text-center" data-aos="fade-up">
          <h2 className="!text-3xl lg:!text-[40px] !font-bold !text-[#2a3072] mb-6 uppercase tracking-wide">
            BOOKING
          </h2>
          <p className="text-gray-700 text-[15px] lg:text-[16px] leading-relaxed max-w-4xl mx-auto">
            Booking Secure your building construction project with us by paying a nominal booking fee of just 0.5% of the total construction cost. This ensures a fixed per square foot price, protecting you from any fluctuations until project completion. Once booked, you'll receive a Order ID and gain access to a cutting-edge project dashboard, where you can monitor progress and receive regular updates from our skilled building construction team.
          </p>
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
              <img src="/image/rc-1.jpg" alt="Gallery 1" onClick={() => setSelectedImage('/image/rc-1.jpg')} className="w-full h-[280px] object-cover rounded-xl shadow-md hover:scale-[1.02] transition-transform duration-300 cursor-pointer" />
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <img src="/image/rc-2.png" alt="Gallery 2" onClick={() => setSelectedImage('/image/rc-2.png')} className="w-full h-[280px] object-cover rounded-xl shadow-md hover:scale-[1.02] transition-transform duration-300 cursor-pointer" />
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <img src="/image/rc-3.webp" alt="Gallery 3" onClick={() => setSelectedImage('/image/rc-3.webp')} className="w-full h-[280px] object-cover rounded-xl shadow-md hover:scale-[1.02] transition-transform duration-300 cursor-pointer" />
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
              <img src="/image/rc-2.png" alt="Gallery 4" onClick={() => setSelectedImage('/image/rc-2.png')} className="w-full h-[280px] object-cover rounded-xl shadow-md hover:scale-[1.02] transition-transform duration-300 cursor-pointer" />
            </div>
            <div data-aos="fade-up" data-aos-delay="500">
              <img src="/image/rc-1.jpg" alt="Gallery 5" onClick={() => setSelectedImage('/image/rc-1.jpg')} className="w-full h-[280px] object-cover rounded-xl shadow-md hover:scale-[1.02] transition-transform duration-300 cursor-pointer" />
            </div>
            <div data-aos="fade-up" data-aos-delay="600">
              <img src="/image/rc-3.webp" alt="Gallery 6" onClick={() => setSelectedImage('/image/rc-3.webp')} className="w-full h-[280px] object-cover rounded-xl shadow-md hover:scale-[1.02] transition-transform duration-300 cursor-pointer" />
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

export default ResidentialConstruction;
