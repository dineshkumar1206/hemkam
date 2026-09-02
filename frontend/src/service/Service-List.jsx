import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServiceList = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease-in-out',
    });
  }, []);

  const services = [
    {
      id: 1,
      image: "/image/card-1.png", 
      title: "Industrial Infrastructure",
      description: "Structural engineering ensures that industrial facilities such as factories, warehouses, and plants are built to withstand heavy loads, vibrations, and environmental stresses through precise and durable design.",
      hoverTitle: "Safety Through Expert Design",
      hoverDescription: "By applying advanced engineering principles, structural engineers enhance operational safety, minimize structural risks, and support long-term performance in demanding industrial environments."
    },
    {
      id: 2,
      image: "/image/card-2.png", 
      title: "Residential Construction",
      description: "Residential construction focuses on creating safe, functional, and comfortable living spaces. From foundation to finishing, every step is carefully planned to ensure durability, quality, and compliance with building codes.",
      hoverTitle: "Customized Solutions for Every Lifestyle",
      hoverDescription: "Modern residential construction offers tailored designs to meet individual needs — whether it's single-family homes, apartments, or villas — combining aesthetics with energy efficiency and smart technology integration."
    },
    {
      id: 3,
      image: "/image/card-3.png", 
      title: "Planning and Estimation",
      description: "Effective planning is the foundation of any successful construction project. It involves defining project scope, setting timelines, allocating resources, and identifying potential challenges to ensure smooth execution from start to finish.",
      hoverTitle: "Precise Estimation for Cost Control",
      hoverDescription: "Estimation provides a detailed breakdown of project costs, including materials, labor, equipment, and contingencies. Accurate cost forecasting helps prevent budget overruns and supports informed decision-making throughout the construction process."
    },
    {
      id: 4,
      image: "/image/card-4.png", 
      title: "Structural design",
      description: "Structural design focuses on creating safe, stable, and efficient frameworks for buildings and infrastructure. It ensures that each structure can withstand loads, environmental forces, and usage demands over time.",
      hoverTitle: "Balancing Safety, Functionality, and Aesthetics",
      hoverDescription: "Through advanced analysis and material selection, structural design combines safety with functionality and visual appeal, delivering solutions that meet both engineering standards and architectural vision."
    },
    {
      id: 5,
      image: "/image/card-5.png", 
      title: "Layout Execution",
      description: "Layout execution involves accurately marking the construction site based on approved plans and drawings. This step ensures the correct positioning of foundations, walls, and structural elements before construction begins.",
      hoverTitle: "Bridging Design and Construction",
      hoverDescription: "By translating design into physical markings on-site, layout execution serves as a critical link between planning and building. It minimizes errors, improves efficiency, and ensures the project aligns with engineering specifications."
    },
    {
      id: 6,
      image: "/image/card-6.png", 
      title: "Interior Works",
      description: "Interior works focus on enhancing the beauty, comfort, and functionality of indoor spaces. From flooring and ceiling to lighting and wall finishes, each element is designed to reflect the client's style and needs.",
      hoverTitle: "Quality Finishes for Lasting Impressions",
      hoverDescription: "Using premium materials and skilled craftsmanship, interior works ensure high-quality finishes that elevate both residential and commercial environments, creating spaces that are elegant, practical, and long-lasting."
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="w-full max-w-[1536px] mx-auto px-6 lg:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold !text-black mb-6">
            Our Services
          </h2>
          <p className="text-gray-500 text-[16px] leading-relaxed">
            "We offer comprehensive solutions in planning, construction, and interior works to bring your vision to life with quality and precision."
          </p>
        </div>

        {/* Services Flip Cards Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 justify-items-center">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="group w-full max-w-[340px] h-[420px] [perspective:1000px] cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)]">
                
                {/* Front Face */}
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] bg-white flex flex-col shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-full h-[180px] overflow-hidden mb-4">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="px-5 flex flex-col flex-grow text-center">
                    <h3 className="text-[16px] text-gray-800 font-semibold mb-2">{service.title}</h3>
                    <p className="text-[12px] text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </div>
                
                {/* Back Face (Hover) */}
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateX(180deg)] bg-[#ff3300] text-white p-6 flex flex-col justify-center items-center text-center shadow-lg">
                  <h3 className="text-[16px] font-bold mb-4">{service.hoverTitle}</h3>
                  <p className="text-[12px] leading-relaxed font-medium">{service.hoverDescription}</p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServiceList;
