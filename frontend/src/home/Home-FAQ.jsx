import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomeFAQ = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease-in-out',
    });
  }, []);

  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What is main idea?",
      answer: "Property owners and tenants can claim and track their property to monitor the estimated value and learn about recent sales for similar properties. By understanding your relationship to the property, we can tailor what we show and send you to make it more relevant to your situation."
    },
    {
      question: "How many data can I track?",
      answer: "There is no limit to the number of properties you can track. Once you have tracked a property you will be able to track additional properties, make changes to your property relationship and change your primary property."
    },
    {
      question: "How are estimates calculated?",
      answer: "Price estimates are calculated by PropTrack Australia by looking at multiple properties and local market data points, which together can provide insight into the approximate value of a property. The data that informs the estimate range includes property and local market data including: Property types, Recent sales & local price trends, and Land area. To learn more about privacy and Property Value pages."
    },
    {
      question: "Who are we?",
      answer: "The Australian arm of PropTrack was acquired by REA Group In May 2018. A combination of unique data, industry expertise and analytical precision has made PropTrack a trusted leader in property data and automated valuations. From November 2018, PropTrack has been providing REA with most of the property insights used in consumer and customer experiences. More information about PropTrack is available on their website."
    },
    {
      question: "Why can't I see an estimated value of my project?",
      answer: "A combination of unique data, industry expertise and analytical precision has made PropTrack a trusted leader in property data and automated valuations. From November 2018, PropTrack has been providing REA with most of the property insights used in consumer and customer experiences. More information about PropTrack is available on their website."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="w-full max-w-[1536px] mx-auto px-6 lg:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <h4 className="text-orange-600 font-bold text-lg mb-2 uppercase tracking-wide">
            FAQ
          </h4>
          <h2 className="text-4xl lg:text-5xl font-bold !text-black mb-6">
            Find Out Answers Here
          </h2>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
          
          {/* Left Column - FAQ Accordion */}
          <div className="w-full lg:w-3/5" data-aos="fade-right">
            <div className="bg-white rounded-xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] p-8 lg:p-12 border border-gray-50">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`border-b border-gray-100 last:border-0 ${index === 0 ? 'pt-0' : 'pt-6'} pb-6`}
                >
                  <button 
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center text-left focus:outline-none group"
                  >
                    <h3 className={`text-[17px] font-medium transition-colors ${openIndex === index ? 'text-gray-900' : 'text-gray-500 group-hover:text-gray-900'}`}>
                      {faq.question}
                    </h3>
                    <span className="ml-6 flex-shrink-0">
                      {openIndex === index ? (
                        <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      )}
                    </span>
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="text-gray-500 text-[15px] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="w-full lg:w-2/5 flex justify-center lg:justify-end" data-aos="fade-left">
            {/* The user will replace this src with their own image */}
            <img 
              src="/image/faq.png" 
              alt="FAQ Support" 
              className="w-full max-w-md h-auto object-contain drop-shadow-xl"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default HomeFAQ;
