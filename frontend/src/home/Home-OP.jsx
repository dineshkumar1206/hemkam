import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomeOP = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease-in-out',
    });
  }, []);

  const projects = [
    {
      id: 1,
      image: "/image/villa.jpg",
      title: "Premium Villa Project" 
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-gray-50 overflow-hidden">
      <div className="w-full max-w-[1536px] mx-auto px-6 lg:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="text-4xl lg:text-6xl font-bold !text-black mb-6">
            On Going Projects
          </h2>
          <p className="text-gray-500 text-[16px] leading-relaxed">
            Justfly is a powerful all-in-one camera drone designed for creators on the move.
          </p>
        </div>

        {/* Single Project Display */}
        <div className="flex justify-center">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer w-full max-w-2xl"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="w-full h-[350px] lg:h-[450px] overflow-hidden bg-gray-100">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </div>
              
              {/* Premium Dark Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white text-2xl font-semibold mb-2">{project.title}</h3>
                  <div className="w-12 h-1 bg-orange-600"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HomeOP;
