import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactForm = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <section className="relative w-full pt-10 pb-20 lg:pb-32 bg-[#0f151c] flex justify-center mt-20 lg:mt-32">
      {/* 
        This section uses a dark background to seamlessly blend into the footer.
        The contact card is pulled UP using negative margins so it beautifully overlaps
        the white Features section above it.
      */}
      <div className="w-full max-w-[1300px] mx-auto px-6 lg:px-8 -mt-28 lg:-mt-44 z-20" data-aos="fade-up">
        <div className="bg-white rounded-xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)] overflow-hidden flex flex-col md:flex-row">
          
          {/* Left Form Section */}
          <div className="w-full md:w-1/2 p-10 lg:p-16 border-r border-gray-100 bg-white">
            <form className="space-y-6">
              <div>
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="w-full border border-gray-200 rounded-md px-5 py-4 focus:outline-none focus:border-[#ff3b00] focus:ring-1 focus:ring-[#ff3b00] transition-all text-[15px] bg-gray-50/50"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full border border-gray-200 rounded-md px-5 py-4 focus:outline-none focus:border-[#ff3b00] focus:ring-1 focus:ring-[#ff3b00] transition-all text-[15px] bg-gray-50/50"
                />
              </div>
              <div>
                <textarea 
                  placeholder="Message" 
                  rows="5"
                  className="w-full border border-gray-200 rounded-md px-5 py-4 focus:outline-none focus:border-[#ff3b00] focus:ring-1 focus:ring-[#ff3b00] transition-all text-[15px] resize-none bg-gray-50/50"
                ></textarea>
              </div>
              <button 
                type="button" 
                className="w-full bg-[#ff3b00] hover:bg-[#e63500] text-white font-semibold text-[16px] py-4 rounded-md transition-all duration-300 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50"
              >
                Send Now
              </button>
            </form>
          </div>

          {/* Right Details Section */}
          <div className="w-full md:w-1/2 p-10 lg:p-16 bg-white">
            <h2 className="text-3xl lg:text-[38px] font-bold !text-black mb-4 leading-tight tracking-tight">
              For More Details Contact Us!
            </h2>
            <div className="w-16 h-[3px] bg-[#ff3b00] mb-10"></div>

            <div className="space-y-10 text-[16px] text-gray-800">
              
              {/* India Address */}
              <div>
                <h4 className="font-bold text-gray-900 mb-5 uppercase tracking-wider text-[14px]">Hemkam Infrastructure Private Limited</h4>
                
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center mr-5 flex-shrink-0">
                    <svg className="w-5 h-5 text-[#ff3b00]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                    </svg>
                  </div>
                  <span className="font-bold text-gray-900 text-[17px]">9360206608</span>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center mr-5 flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-[#ff3b00]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <span className="font-semibold text-gray-700 leading-relaxed text-[15px]">
                    8/71, Uptown Apartment, 3B, Sundar Nagar<br/>
                    2nd Cross Street, 3rd Avenue,<br/>
                    Ekkaduthangal, Chennai - 32.
                  </span>
                </div>
              </div>

              {/* Singapore Address */}
              <div className="pt-2">
                <h4 className="font-bold text-[22px] text-gray-900 mb-4 pl-14">Singapore Address</h4>
                <p className="text-gray-600 leading-relaxed text-[16px] pl-14">
                  65 Sims Ave<br/>
                  #04-11<br/>
                  Yi Xiu Factory Building<br/>
                  Singapore 387418
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;
