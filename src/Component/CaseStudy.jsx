import React, { useState, useEffect, useRef } from 'react';
import PinkBG from '../assets/pink-bgcase.jpg'
import { caseStudies } from '../Data/CasestudyData';
import { useNavigate } from 'react-router-dom';
// ADD THIS FUNCTION (same as in CasestudySingle)
const toSlug = (title) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const CaseStudy = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const observerRef = useRef(null);
  const cardRefs = useRef([]);
const navigate=useNavigate();
  // Filter only top studies
  const topStudies = caseStudies.filter(study => study.top);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(entry.target);
            if (index !== -1) {
              setActiveIndex(index);
            }
          }
        });
      },
      { threshold: 0.6 }
    );

    cardRefs.current.forEach(ref => {
      if (ref) observerRef.current.observe(ref);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [topStudies.length]);

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 lg:px-30">
        {/* Header */}
        <div className="flex flex-col sm:flex-row md:justify-between md:items-center border-b border-black pb-4 mb-12">
          <h1 className="font-bold text-4xl sm:text-5xl text-gray-800">Top Stories</h1>
          <button 
            onClick={() => navigate("/case-studies")}
          className="hidden md:flex bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition mt-4 sm:mt-0">
            View all case studies
          </button>
        </div>

        {/* Layout: Sticky Image + Scrollable Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start px-10">
          
          {/* Sticky Image Box */}
          <div className=" hidden md:flex lg:sticky lg:top-30 h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-xl">
            <img
              src={topStudies[activeIndex]?.banner}
              alt={topStudies[activeIndex]?.title}
              className="w-full h-full object-cover transition-opacity duration-500"
            />
          </div>

          {/* Scrollable Data Cards */}
          <div className="space-y-8">
            {topStudies.map((study, index) => (
              <div
                key={index}
                ref={el => (cardRefs.current[index] = el)}
                className="p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-[500px] lg:pt-35"
                style={{
                  backgroundImage: `url(${PinkBG})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div>
                  <div className="flex  mb-4">
                    <span className="text-md md:text-xl font-medium text-yellow-200">
                      {study.service}
                    </span>
                  </div>

                  <h3 className="font-bold text-2xl md:text-3xl text-white mb-3 line-clamp-2">
                    {study.title}
                  </h3>
                  <p className="text-white text-lg leading-relaxed line-clamp-4">
                    "{study.description}"
                  </p>
                </div>

                <button
                onClick={() => navigate(`/${toSlug(study.title)}`)}
                className="mt-6 bg-pink-500 text-white px-10 py-3  text-lg md:text-xl rounded-lg hover:bg-pink-600 transition self-start">
                  Read This Case Study
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;