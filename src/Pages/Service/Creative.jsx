import React, { useEffect, useState } from "react";
import {
  Sparkles,
  Palette,
  Layout,
  Zap,
  ArrowRight,
  CheckCircle,
  Eye,
  Heart,
  MessageCircle,
} from "lucide-react";
import BackgroundLarge from "../../assets/Creative.jpg";
import BackgroundSmall from "../../assets/Backgroundsmall.jpg";
import { useNavigate } from "react-router-dom";

const designServices = [
  {
    title: "UI/UX Design",
    desc: "Interfaces that seduce. Micro-interactions, fluid ecosystems, addictive flows.",
    icon: <Layout className="w-8 h-8" />,
    color: "from-sky-100 to-sky-200",
    hoverColor: "from-sky-200 to-blue-300",
    border: "border-sky-300",
  },
  {
    title: "Graphic Design",
    desc: "Logos that dominate. Merch, posters, visuals that burn into memory.",
    icon: <Palette className="w-8 h-8" />,
    color: "from-pink-100 to-pink-200",
    hoverColor: "from-pink-200 to-rose-300",
    border: "border-pink-300",
  },
  {
    title: "Motion & Animation",
    desc: "Explainer videos, Lottie loops, animated logos that hijack attention.",
    icon: <Zap className="w-8 h-8" />,
    color: "from-amber-100 to-amber-200",
    hoverColor: "from-amber-200 to-orange-300",
    border: "border-amber-300",
  },
  {
    title: "3D & Illustration",
    desc: "Surreal 3D worlds. Product renders, characters, imagination in motion.",
    icon: <Sparkles className="w-8 h-8" />,
    color: "from-emerald-100 to-emerald-200",
    hoverColor: "from-emerald-200 to-teal-300",
    border: "border-emerald-300",
  },
];

const processSteps = [
  { step: "01", title: "Brief & Vision", desc: "We listen deeply. You dream. We align." },
  { step: "02", title: "Concept & Mood", desc: "Sketches, boards, ideas — unleashed." },
  { step: "03", title: "Design & Refine", desc: "Polish until it glows." },
  { step: "04", title: "Deliver & Wow", desc: "Files, assets, launch-ready." },
];

const creativeApproach = [
  {
    title: "Obsess Over Details",
    desc: "Every pixel, curve, and transition is engineered. Perfection is non-negotiable.",
    icon: <Eye className="w-10 h-10" />,
    gradient: "from-sky-200 to-blue-300",
  },
  {
    title: "Break the Rules",
    desc: "We don’t follow trends. We ignite them. Bold. Unexpected. Iconic.",
    icon: <Zap className="w-10 h-10" />,
    gradient: "from-pink-200 to-rose-300",
  },
  {
    title: "Design for Emotion",
    desc: "Design isn’t visual — it’s emotional. We craft desire, trust, obsession.",
    icon: <Heart className="w-10 h-10" />,
    gradient: "from-amber-200 to-orange-300",
  },
];

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

const Creative = () => {
  const isMd = useMediaQuery("(min-width: 768px)");
  const [hoveredService, setHoveredService] = useState(null);
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
  return (
    <>
      {/* ==================== HERO (100% UNTOUCHED) ==================== */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-center bg-cover"
        style={{
          backgroundImage: `url(${isMd ? BackgroundLarge : BackgroundSmall})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100/60 via-transparent to-yellow-100/40 mix-blend-multiply"></div>
        <div className="relative z-10 text-center px-6 max-w-4xl text-white drop-shadow-lg">
          <p className="uppercase tracking-[0.25em] text-sm mb-4 text-yellow-200 font-semibold">
            Design That Feels Alive
          </p>
          <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6">
            WE DON’T JUST DESIGN.
            <br />
            <span className="bg-gradient-to-l from-yellow-300 to-pink-500 bg-clip-text text-transparent">
              WE CREATE EXPERIENCES.
            </span>
          </h1>
          <button
           onClick={goToContact}
           className="mt-8 bg-white text-gray-900 font-bold py-4 px-10 rounded-full flex items-center gap-3 mx-auto transition-all hover:gap-4 hover:bg-pink-100">
            <span>Start Your Project</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* ==================== WHAT WE CRAFT ==================== */}
      <section id="services-section" className="py-20 px-4 lg:px-12 xl:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="border-b border-black pb-4 mb-12">
            <h1 className="font-bold text-3xl md:text-5xl text-gray-800">
              What We Craft
            </h1>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {designServices.map((service, i) => (
              <div
                key={i}
                onMouseEnter={() => setHoveredService(i)}
                onMouseLeave={() => setHoveredService(null)}
                className={`relative p-6 rounded-3xl border ${
                  hoveredService === i ? service.border : "border-gray-100"
                } bg-white/80 backdrop-blur-sm shadow-md transition-all duration-300 hover:-translate-y-1`}
              >
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${
                    hoveredService === i ? service.hoverColor : service.color
                  } opacity-0 hover:opacity-10 transition-opacity`}
                />
                <div className="relative z-10">
                  <div
                    className={`p-3 mb-4 rounded-2xl bg-gradient-to-br ${service.color} w-fit`}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== OUR PROCESS ==================== */}
      <section
        id="process-section"
        className="py-20 px-4 lg:px-12 xl:px-24 bg-cover bg-center"
        style={{ backgroundImage: `url(${BackgroundLarge})` }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="border-b border-black pb-4 mb-12">
            <h1 className="font-bold text-3xl md:text-5xl text-white">
              Our Process
            </h1>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <div
                key={i}
                className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200 transition-transform hover:-translate-y-2"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-yellow-400 text-white flex items-center justify-center font-black mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== OUR PHILOSOPHY ==================== */}
      <section id="philosophy-section" className="py-20 px-4 lg:px-12 xl:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="border-b border-black pb-4 mb-12">
            <h1 className="font-bold text-3xl md:text-5xl text-gray-800">
              Our Philosophy
            </h1>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {creativeApproach.map((item, i) => (
              <div
                key={i}
                className="group relative bg-white rounded-3xl p-10 shadow-md border border-gray-100 hover:-translate-y-2 transition-all"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity`}
                ></div>
                <div className="relative z-10">
                  <div className="p-4 bg-white border rounded-2xl w-fit mb-4 shadow-sm">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FINAL CTA ==================== */}
      <section className="py-32 px-4 lg:px-12 xl:px-24 bg-gradient-to-br from-pink-50 via-white to-yellow-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-l from-yellow-500 to-pink-500 bg-clip-text text-transparent">
            Your Vision.
          </h1>
          <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
            No templates. No limits. Just design that feels human, looks stunning, and wins hearts.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["48h First Draft", "Unlimited Revisions", "100% Ownership"].map(
              (item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-white px-6 py-3 rounded-full border border-gray-200 shadow-sm"
                >
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  <span className="text-sm font-medium text-gray-800">
                    {item}
                  </span>
                </div>
              )
            )}
          </div>

          <button 
          onClick={goToContact}
          className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 px-12 rounded-full shadow-xl transition transform hover:scale-105 flex items-center gap-3 mx-auto">
            <MessageCircle className="w-6 h-6" />
            <span>Book Service</span>
          </button>
          
        </div>
      </section>
    </>
  );
};

export default Creative;