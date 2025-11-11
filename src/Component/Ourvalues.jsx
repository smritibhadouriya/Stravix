import React, { useEffect, useState } from 'react';
import lgbackground from '../assets/pink-bg.jpg';
import smbackground from '../assets/Backgroundsmall.jpg';
import value1 from '../assets/value1.png';
import value2 from '../assets/value2.png';
import value3 from '../assets/value3.png';

const values = [
  {
    img: value1,
    title: "Integrity",
    desc: "We uphold the highest standards of honesty and transparency in everything we do."
  },
  {
    img: value2,
    title: "Innovation",
    desc: "We embrace creativity and continuously push boundaries to deliver excellence."
  },
  {
    img: value3,
    title: "Teamwork",
    desc: "Together, we achieve more by collaborating, supporting, and growing as one."
  }
];

const Ourvalues = () => {
    // Tiny media-query hook (no external deps)
    function useMediaQuery(query) {
      const [matches, setMatches] = useState(false);
    
      useEffect(() => {
        const mql = window.matchMedia(query);
        setMatches(mql.matches);
    
        const handler = (e) => setMatches(e.matches);
        mql.addEventListener("change", handler);
        return () => mql.removeEventListener("change", handler);
      }, [query]);
    
      return matches;
    }
      // md breakpoint = 768px (Tailwind default)
  const isMdOrLarger = useMediaQuery("(min-width: 768px)");
  return (
    <section>
      {/* Background Images - Responsive */}
      <div
           className="md:min-h-screen bg-cover bg-center bg-no-repeat py-10 md:py-0"
              style={{
                backgroundImage: `url(${isMdOrLarger ? lgbackground : smbackground})`,
              }}
      >
          {/* Content Container */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-20">

          {/* Header: Title Left + Button Right */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 pb-4 border-b border-black">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
        Our values
          </h2>
        
        </div>

            {/* Values Grid - Horizontal on all screens */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Value Image */}
                  <div>
                    <img
                      src={value.img}
                      alt={value.title}
                      className="w-60  md:w-100  md:h-70 object-contain "
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl lg:text-3xl font-bold text-black mb-3">
                    {value.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-700 text-lg max-w-xs leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      
    </section>
  );
};

export default Ourvalues;