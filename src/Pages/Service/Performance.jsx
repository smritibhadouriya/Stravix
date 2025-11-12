import React, { useEffect, useState } from "react";
import { RocketIcon, BarChart3Icon, TargetIcon, TrendingUpIcon, ClipboardCheckIcon } from "lucide-react";
import BackgroundLarge from "../../assets/pink-bg.jpg"; // Replace with your actual large image
import BackgroundSmall from "../../assets/Backgroundsmall.jpg";
import { useNavigate } from "react-router-dom";

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

const PerformanceMarketing = () => {
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

  const isMd = useMediaQuery("(min-width: 768px)");

  return (
    <>
      {/* ====================== HERO (100% UNTOUCHED) ====================== */}
      <section
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "ur[](https://images.unsplash.com/photo-1556761175-4b46a572b786?w=2073)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 max-w-4xl mx-auto">
          <p className="text-sm md:text-base uppercase tracking-widest text-yellow-400 mb-2">
            Drive. Measure. Scale.
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Performance Marketing that actually performs.
          </h1>
          <button 
          onClick={goToContact}
          className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-8 rounded-full transition mt-6 shadow-lg">
            LET’S SCALE TOGETHER
          </button>

          <div className="flex flex-wrap justify-center gap-3 mt-12">
            {["Paid Ads", "Strategy", "Analytics", "Optimization"].map((item) => (
              <button
                key={item}
                className="bg-white/20 backdrop-blur-sm text-white border border-white/30 px-6 py-2 rounded-full text-sm hover:bg-pink-500/30 hover:border-pink-400 transition"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== CORE SERVICES ====================== */}
      <section id="services-section" className="py-20 px-4 lg:px-12 xl:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="border-b border-black pb-4 mb-12">
            <h1 className="font-bold text-3xl md:text-5xl text-gray-800">
              Our Core Services
            </h1>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: RocketIcon, title: "Paid Media Strategy", desc: "Google, Meta, LinkedIn & beyond — tailored to your audience and goals.", color: "pink" },
              { icon: BarChart3Icon, title: "Conversion Optimization", desc: "We analyze user behavior to refine landing pages and boost ROI.", color: "yellow" },
              { icon: TargetIcon, title: "Audience Targeting", desc: "Laser-focused campaigns that reach the right people at the right time.", color: "pink" },
            ].map(({ icon: Icon, title, desc, color }) => (
              <div
                key={title}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${
                    color === "pink" ? "from-pink-100 to-pink-200" : "from-yellow-100 to-yellow-200"
                  } opacity-0 group-hover:opacity-10 transition-opacity`}
                />
                <div className="relative z-10">
                  <div
                    className={`p-3 mb-6 rounded-2xl w-fit mx-auto ${
                      color === "pink" ? "bg-gradient-to-br from-pink-100 to-pink-200" : "bg-gradient-to-br from-yellow-100 to-yellow-200"
                    }`}
                  >
                    <Icon className={`w-10 h-10 ${color === "pink" ? "text-pink-600" : "text-yellow-600"}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                  <p className="text-sm text-gray-600">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== PROCESS ====================== */}
      <section
        id="process-section"
        className="py-20 px-4 lg:px-12 xl:px-24 bg-cover bg-center"
        style={{ backgroundImage: `url(${isMd ? BackgroundLarge : BackgroundSmall})` }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="border-b border-black pb-4 mb-12">
            <h1 className="font-bold text-3xl md:text-5xl text-white">
              Our Data-Driven Process
            </h1>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "We learn your goals, audience, and brand DNA." },
              { step: "02", title: "Strategy", desc: "We build a performance roadmap backed by data." },
              { step: "03", title: "Execution", desc: "Launch high-converting campaigns across platforms." },
              { step: "04", title: "Optimization", desc: "Track, analyze, and scale the winning campaigns." },
            ].map(({ step, title, desc }) => (
              <div
                key={step}
                className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200 transition-transform hover:-translate-y-2"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-yellow-400 text-white flex items-center justify-center font-black mb-4 text-lg">
                  {step}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== CAMPAIGN RESULTS ====================== */}
      <section id="results-section" className="py-20 px-4 lg:px-12 xl:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="border-b border-black pb-4 mb-12">
            <h1 className="font-bold text-3xl md:text-5xl text-gray-800">
              Campaigns that Delivered
            </h1>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Urban Blend", result: "2.5x ROI in 3 months", accent: "pink" },
              { name: "GlowHaus", result: "CTR improved by 78%", accent: "yellow" },
              { name: "Luna Skincare", result: "Cost per lead reduced by 40%", accent: "pink" },
            ].map(({ name, result, accent }) => (
              <div
                key={name}
                className="group relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${
                    accent === "pink" ? "from-pink-100 to-pink-200" : "from-yellow-100 to-yellow-200"
                  } opacity-0 group-hover:opacity-10 transition-opacity`}
                />
                <div className="relative z-10">
                  <h3 className={`text-2xl font-bold mb-2 ${accent === "pink" ? "text-pink-600" : "text-yellow-600"}`}>
                    {name}
                  </h3>
                  <p className="text-lg font-medium text-gray-800">{result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== FINAL CTA ====================== */}
      <section className="py-32 px-4 lg:px-12 xl:px-24 bg-gradient-to-br from-pink-50 via-white to-yellow-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-l from-yellow-500 to-pink-500 bg-clip-text text-transparent">
            Ready to scale smarter, not harder?
          </h1>
          <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
            Let’s create data-driven campaigns that grow your brand faster and more efficiently.
          </p>
          <button
          onClick={goToContact}
           className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 px-12 rounded-full shadow-xl transition transform hover:scale-105">
            Book Your Slot
          </button>
        </div>
      </section>
    </>
  );
};

export default PerformanceMarketing;