import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomeTeam = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease-in-out',
    });
  }, []);

  const teamMembers = [
    {
      id: 1,
      name: "Gopi",
      role: "Project Manager",
      image: "/image/gopi.png" // User will replace with their image
    },
    {
      id: 2,
      name: "Bharathi Ganesan",
      role: "Project Manager",
      image: "/image/bharathi.jpg"
    },
    {
      id: 3,
      name: "A Senthilnathan",
      role: "Accounts/ Finance/ Admin / Logistics/ Factory",
      image: "/image/senthilnathan.png"
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-gray-50 overflow-hidden">
      <div className="w-full max-w-[1536px] mx-auto px-6 lg:px-16">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold !text-black mb-6">
            Our Team Members
          </h2>
          <p className="text-gray-500 text-[16px] leading-relaxed">
            However venture pursuit he am mr cordial. Forming musical am hearing studied be luckily.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="bg-white overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              {/* Image Container */}
              <div className="w-full h-[400px] bg-gray-100 overflow-hidden relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content Container */}
              <div className="p-8 text-center">
                <h3 className="text-xl font-medium !text-black mb-2">{member.name}</h3>
                <p className="text-gray-500 text-[14px]">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HomeTeam;
