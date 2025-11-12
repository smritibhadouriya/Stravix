// File: DigitalMarketingPage.jsx
import React, { useState, useEffect, useRef } from 'react';
import { caseStudies } from '../../Data/CasestudyData.js';
import BackgroundLarge from "../../assets/pink-bg.jpg"; // Replace if needed
import BackgroundSmall from "../../assets/Backgroundsmall.jpg";
import { useNavigate } from 'react-router-dom';

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

const DigitalMarketingPage = () => {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const caseRefs = useRef([]);
  const isMd = useMediaQuery("(min-width: 768px)");

  // Filter Digital case studies
  const digitalCases = caseStudies.filter(cs => cs.service === 'Digital');

  useEffect(() => {
    if (digitalCases.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            if (!isNaN(index)) {
              setActiveCaseIndex(index);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '-50% 0px -50% 0px', // Triggers when element is ~50% in viewport vertically
        threshold: 0,
      }
    );

    // Observe all case study refs
    caseRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    // Cleanup
    return () => {
      caseRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [digitalCases.length]);


   const navigate =useNavigate();

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
    const gotocase =(e)=>{
    e.preventDefault();
    navigate("/case-studies")
  }


  return (
    <>
      {/* ====================== HERO (100% UNCHANGED) ====================== */}
      <section className="min-h-screen bg-gradient-to-br from-pink-50 via-yellow-50 to-white flex items-center justify-center px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <div className="border-b border-black pb-4 mb-12 inline-block">
            <h1 className="font-bold text-3xl md:text-5xl text-gray-800">
              Grow Your Brand in the Digital Age
            </h1>
          </div>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-10">
            We craft bold, data-driven digital strategies that turn clicks into customers and brands into legends.
          </p>
          <button 
          onClick={goToContact}
          className="bg-black text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition transform hover:scale-105">
            Start Your Journey
          </button>
        </div>
      </section>

      {/* ====================== OUR DIGITAL SUPERPOWERS ====================== */}
      <section id="services-section" className="py-20 px-4 lg:px-12 xl:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="border-b border-black pb-4 mb-12">
            <h1 className="font-bold text-3xl md:text-5xl text-gray-800">
              Our Digital Superpowers
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Social Media Mastery', desc: 'Engage, grow, and convert on every platform.' },
              { title: 'SEO That Ranks', desc: 'Be found when it matters most.' },
              { title: 'PPC Precision', desc: 'Ads that click, budgets that smile.' },
            ].map((service, idx) => (
              <div
                key={idx}
                className="group relative bg-gradient-to-br from-pink-50 to-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-yellow-100 opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity" />
                <div className="relative z-10">
                  <h3 className="font-bold text-2xl text-black mb-3">{service.title}</h3>
                  <p className="text-gray-700">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== SUCCESS IN ACTION (Scroll-Synced) ====================== */}
         {/* ====================== SUCCESS IN ACTION (Scroll-Synced) ====================== */}
      <section
        id="case-studies-section"
        className="py-20 px-4 lg:px-12 xl:px-24 bg-gradient-to-br from-yellow-50 to-pink-50"
        style={{ backgroundImage: `url(${isMd ? BackgroundLarge : BackgroundSmall})`, backgroundSize: 'cover' }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="border-b border-black pb-4 mb-12">
            <h1 className="font-bold text-3xl md:text-5xl text-gray-800">
              Success in Action
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Scrollable Case Studies */}
            <div className="space-y-32 lg:space-y-40 max-h-screen overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-black scrollbar-track-yellow-100">
              {digitalCases.map((study, idx) => (
                <div
                  key={idx}
                  ref={(el) => {
                    if (el) caseRefs.current[idx] = el;
                  }}
                  className="scroll-mt-40 pb-20"
                  data-index={idx}
                >
                  <h3 className="text-2xl font-bold text-black mb-4">{study.title}</h3>
                  <p className="text-gray-700 mb-6" dangerouslySetInnerHTML={{ __html: study.description }} />
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white text-sm font-bold">
                        Check
                      </div>
                      <span className="text-gray-800">{study.view.toLocaleString()} views</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white text-sm font-bold">
                        Check
                      </div>
                      <span className="text-gray-800">Service: {study.service}</span>
                    </div>
                    {study.top && (
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                          Star
                        </div>
                        <span className="text-gray-800 font-semibold">Featured Case</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Sticky Image Box */}
            <div className="sticky top-24 h-[500px] bg-white border-4 border-black rounded-3xl overflow-hidden shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
              <div className="relative w-full h-full">
                <img
                  src={digitalCases[activeCaseIndex]?.banner || '/placeholder.jpg'}
                  alt={digitalCases[activeCaseIndex]?.title || 'Case Study'}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out"
                  style={{
                    opacity: digitalCases[activeCaseIndex] ? 1 : 0,
                  }}
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 pt-12">
                  <p className="text-white text-lg font-bold drop-shadow-md">
                    {digitalCases[activeCaseIndex]?.title || 'Loading...'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================== WHY WE'RE DIFFERENT ====================== */}
      <section id="why-section" className="py-20 px-4 lg:px-12 xl:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="border-b border-black pb-4 mb-12">
            <h1 className="font-bold text-3xl md:text-5xl text-gray-800">
              Why We're Different
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              { title: 'Results-Obsessed', desc: 'We don’t do vanity metrics. Every campaign is engineered for measurable growth.' },
              { title: 'Creative & Data-Driven', desc: 'Beautiful creatives backed by ruthless analytics. The perfect blend.' },
              { title: 'Agile & Transparent', desc: 'Weekly reports, real-time dashboards, and zero black-box strategies.' },
              { title: 'Partnership Mindset', desc: 'Your success is our success. We grow when you grow.' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group relative bg-gradient-to-br from-gray-50 to-white p-6 rounded-3xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-yellow-100 opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity" />
                <div className="relative z-10 flex gap-4">
                  <div className="text-4xl">Target</div>
                  <div>
                    <h4 className="font-bold text-xl text-black mb-2">{item.title}</h4>
                    <p className="text-gray-700">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== FINAL CTA ====================== */}
      <section className="py-32 px-4 lg:px-12 xl:px-24 bg-gradient-to-b from-black via-black/90 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="border-b border-white pb-4 mb-12">
            <h1 className="font-bold text-3xl md:text-5xl text-white">
              Ready to Dominate Digital?
            </h1>
          </div>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Let’s build a strategy that doesn’t just compete — it wins.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
            onClick={goToContact}
             className="bg-pink-500 hover:bg-pink-400 text-black px-10 py-5 rounded-full font-bold text-lg transition transform hover:scale-105 shadow-xl">
              Book a Slot
            </button>
            <button 
            onClick={gotocase}
            className="border-2 border-white text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-black transition">
             Read Stories
            </button>
          </div>
        
        </div>
      </section>
    </>
  );
};

export default DigitalMarketingPage;