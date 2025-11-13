// PRServicePage.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Background from '../../assets/pr.png';
import Backgroundlarge from "../../assets/pink-bg.jpg";        // <-- large screen
import Backgroundsmall from "../../assets/Backgroundsmall.jpg";
import { caseStudies } from '../../Data/CasestudyData';
import { ArrowRightFromLine, ArrowRightIcon } from 'lucide-react';

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

/* -------------------------------------------------
   Helper: title → URL slug
   ------------------------------------------------- */
const toSlug = (title) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
    .replace(/--+/g, '-');

/* -------------------------------------------------
   Main component
   ------------------------------------------------- */
const PRServicePage = () => {
  const isMdOrLarger = useMediaQuery("(min-width: 768px)");
  const navigate = useNavigate();

  const handleCardClick = (title) => {
    const slug = toSlug(title);
    navigate(`/${slug}`);
  };
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
    <div className="font-sans text-black overflow-x-hidden">

      {/* ====================== HERO (UNCHANGED) ====================== */}
      <section
        className="relative h-screen bg-cover bg-center bg-no-repeat flex items-center"
        style={{ backgroundImage: `url(${Background})` }}
      >
        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/15 to-transparent" />

       

        <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center h-full">
            {/* left – visual space */}
            <div className="hidden lg:block" />

            {/* right – copy */}
            <div className="text-left lg:text-right space-y-6 max-w-xl ml-auto">
              <p className="text-yellow-400 text-sm md:text-base uppercase tracking-widest font-bold animate-fadeIn">
                We don’t pitch. We make headlines.
              </p>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight animate-slideUp">
                PR that <span className="text-pink-400">goes viral</span>
                <br />
                for bold F&amp;B brands
              </h1>

              <p className="text-gray-200 text-lg md:text-xl max-w-lg ml-auto animate-fadeInDelay">
                From Michelin stars to TikTok stars — we get your brand in the
                news, on feeds, and in conversations.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-start lg:justify-end animate-fadeInDelay2">
                <button
                onClick={goToContact}
                  aria-label="Get PR services now"
                  className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 px-10 rounded-full transition transform hover:scale-105 shadow-xl text-lg glow-pink focus:outline-none focus:ring-4 focus:ring-pink-400"
                >
                  GET PRESS NOW
                </button>

                <button
                onClick={gotocase}
                  aria-label="View success stories"
                  className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-bold py-4 px-10 rounded-full transition text-lg backdrop-blur-sm focus:outline-none focus:ring-4 focus:ring-yellow-400"
                >
                  SEE SUCCESS STORIES
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================== CASE STUDIES ====================== */}
      <section id="case-studies-section" className="py-20 px-4 lg:px-12 xl:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="border-b border-black pb-4 mb-12">
            <h1 className="font-bold text-3xl md:text-5xl text-gray-800">
              Real PR Wins
            </h1>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies
              .filter((cs) => cs.service === 'PR')
              .map((study, i) => (
                <article
                  key={i}
                  className="group relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-white/50 overflow-hidden"
                >
                  {/* top gradient bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 to-yellow-400" />

                  {/* banner */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={study.banner}
                      alt={`${study.title} banner`}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>

                  {/* content */}
                  <div className="p-7 space-y-4">
                    <h3 className="text-xl font-bold group-hover:text-pink-500 transition">
                      {study.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-2">
                      {study.description}
                    </p>

                    <div className="flex items-center gap-4 text-sm font-medium text-gray-500">
                      <span className="flex items-center gap-1">
                        Eyes {study.view.toLocaleString()} views
                      </span>
                    </div>

                    <button
                      onClick={() => handleCardClick(study.title)}
                      className="inline-flex items-center mt-4 text-pink-500 font-bold text-sm uppercase tracking-wider group-hover:underline group-hover:translate-x-1 transition focus:outline-none focus:underline"
                      aria-label={`Read full story of ${study.title}`}
                    >
                      Read full story <ArrowRightIcon className="ml-1"/>
                    </button>
                  </div>

                  {/* hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </article>
              ))}
          </div>
        </div>
      </section>

      {/* ====================== SUCCESS STORIES ====================== */}
      <section id="success-stories-section" className="py-20 px-4 lg:px-12 xl:px-24 bg-gradient-to-b from-black to-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="border-b border-black pb-4 mb-12">
            <h1 className="font-bold text-3xl md:text-5xl text-white">
              Brands We’ve Made <span className="text-pink-400">Unignorable</span>
            </h1>
          </div>

          {/* press logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-700 mb-16">
            {[
              'Vogue',
              'Forbes',
              'Eater',
              'CNN',
              'Bon Appétit',
              'Time Out',
              'The Guardian',
              'TechCrunch',
            ].map((pub, i) => (
              <div
                key={i}
                className="text-2xl font-bold text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                {pub}
              </div>
            ))}
          </div>

          {/* highlighted wins */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                brand: 'SpiceBox',
                result: '1.2 M TikTok views in 48 h',
                tag: 'Launch Campaign',
              },
              {
                brand: 'Brew & Bloom',
                result: 'Featured in Vogue Living',
                tag: 'Media Placement',
              },
              {
                brand: 'Crisis Turnaround',
                result: '100 % positive sentiment shift',
                tag: 'Reputation Fix',
              },
            ].map((story, i) => (
              <div
                key={i}
                className="relative bg-gradient-to-br from-pink-900/50 to-black/80 p-8 rounded-3xl border border-pink-500/30 backdrop-blur-sm overflow-hidden group hover:border-pink-400 transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-pink-900/20 to-transparent opacity-0 group-hover:opacity-100 transition" />
                <p className="text-yellow-400 text-xs uppercase font-bold flex items-center gap-2">
                  {story.tag}
                </p>
                <h3 className="text-xl font-bold mt-2">{story.brand}</h3>
                <p className="text-3xl font-black text-pink-400 mt-3">
                  {story.result}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== FINAL CTA ====================== */}
      <section
        id="cta-section"
        className="py-32 px-4 lg:px-12 xl:px-24 relative overflow-hidden"
        style={{
          backgroundImage: `url(${isMdOrLarger ? Backgroundlarge : Backgroundsmall})`,
        }}
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            Your brand deserves{' '}
            <span className="text-yellow-400">front-page love</span>.
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-pink-500 font-light">
            Let’s craft a PR strategy that turns heads, fills seats, and
            empties shelves.
          </p>

          <button
          onClick={goToContact}
            aria-label="Book a free strategy call"
            className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-5 px-14 rounded-full text-xl transition transform hover:scale-110 shadow-2xl glow-yellow animate-pulse-subtle focus:outline-none focus:ring-4 focus:ring-yellow-300"
          >
            Book Your Slot
          </button>
        </div>
      </section>
    </div>
  );
};

export default PRServicePage;