// src/pages/Casestudy.jsx
import React, { useEffect, useState } from 'react';
import Background from '../assets/caseback.jpg';
import { Eye } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { caseStudies } from '../Data/CasestudyData';

const toSlug = (title) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const Casestudy = () => {
  const services = ['All', ...new Set(caseStudies.map((s) => s.service))];
  const [activeTab, setActiveTab] = useState('All');
  const navigate = useNavigate();
  const location = useLocation();

  const filteredStudies = activeTab === 'All'
    ? caseStudies
    : caseStudies.filter((s) => s.service === activeTab);

  const handleCardClick = (title) => {
    const slug = toSlug(title);
    navigate(`/${slug}`);
  };

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  // === CONTACT BUTTON HANDLER ===
  const goToContact = (e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const el = document.getElementById('contact-section');
      if (el) {
        const offset = 80;
        const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    } else {
      navigate({ pathname: '/', hash: 'contact-section' });
    }
  };

  return (
    <>
      {/* Hero Banner */}
      <div
        className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className="absolute inset-0 bg-black opacity-35" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-6 leading-tight">
            Delivering measurable results<br />with creative digital solutions.
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            {/* CONTACT US BUTTON */}
            <button
              onClick={goToContact}
              className="px-8 py-4 bg-pink-500 text-white font-semibold text-lg rounded-lg shadow-lg hover:bg-pink-600 transition transform hover:scale-105"
            >
              CONTACT US
            </button>

           
<button
  onClick={() => navigate({ pathname: '/team/', hash: 'testimonials-section' })}
  className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold text-lg rounded-lg hover:bg-white hover:text-black transition transform hover:scale-105"
>
  TESTIMONIALS
</button>
          </div>

          <p className="text-xl md:text-3xl font-bold text-gray-200">
            Read Case Studies Below
          </p>
        </div>
      </div>

  {/* Tabs */}
<section className="py-12 overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">
    <div className="overflow-x-auto scrollbar-hide">
      <div className="flex justify-center gap-3 whitespace-nowrap py-2">
        {services.map((service) => (
          <button
            key={service}
            onClick={() => setActiveTab(service)}
            className={`px-6 py-3 font-medium text-md md:text-lg transition-all duration-300 flex-shrink-0 ${
              activeTab === service
                ? 'border-b-2 border-pink-600 text-pink-600'
                : 'text-gray-600 hover:text-pink-600 hover:border-b-2 hover:border-pink-600'
            }`}
          >
            {service}
          </button>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* Case Studies Grid */}
      <section className="pb-10">
        <div className="max-w-7xl mx-auto px-6">
          {filteredStudies.length === 0 ? (
            <p className="text-center text-gray-500 text-lg">
              No case studies found for this service.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredStudies.map((study, idx) => (
                <div
                  key={idx}
                  role="button"
                  tabIndex={0}
                  onClick={() => handleCardClick(study.title)}
                  onKeyDown={(e) => e.key === 'Enter' && handleCardClick(study.title)}
                  className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer h-96 group"
                  style={{
                    backgroundImage: `url(${study.banner})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                  <div className="relative z-10 flex flex-col justify-end h-full p-6 text-white">
                    <h3 className="text-xl font-bold mb-3 line-clamp-2">
                      {study.title}
                    </h3>
                    <div className="flex justify-end">
                      <span className="flex items-center gap-1.5 bg-black/30 px-3 py-1 rounded-full text-xs opacity-80">
                        <Eye className="w-3.5 h-3.5" />
                        {study.view.toLocaleString()} Views
                      </span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Casestudy;