import React, { useEffect, useState } from 'react';
import { MinusCircleIcon, PlusCircleIcon } from 'lucide-react';
import Backgroundlarge from "../../assets/pink-bg.jpg";      
import Backgroundsmall from "../../assets/Backgroundsmall.jpg";
import BannerBack from '../../assets/bannerphoto.jpg'
import { useNavigate } from 'react-router-dom';
const brands = [
  {
    name: 'THE HARBOUR',
    tagline: 'International Sea Food Cuisine',
    est: '2022',
    color: 'bg-blue-900',
    images: ['bag', 'box'],
  },
  {
    name: 'CHAI ROTI WALA',
    tagline: 'Naan - Kebab - Biriyani - And More',
    color: 'bg-green-800',
    images: ['interior', 'menu'],
  },
  {
    name: 'SUSHI SYMPHONY',
    tagline: '',
    color: 'bg-black',
    images: ['sushi', 'menu'],
  },
];

const offer = [
  {
    title: "Logo & Visual Identity Design",
    paragraph: "Your logo is the first handshake with your audience. We craft visual identities that don’t just look good — they speak for you before you even say a word. From concept to creation, every curve, color, and detail tells your story.",
    images: [
      "https://images.unsplash.com/photo-1600577916048-5646cbc9e9ec?w=600",
      "https://images.unsplash.com/photo-1626785774629-2b9f939e6b3d?w=600",
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=600",
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600",
    ]
  },
  {
    title: "Brand Strategy",
    paragraph: "Before the visuals, comes the vision. We dig deep into what your brand stands for — your voice, your promise, your “why.” Then we translate that into strategy that shapes how people see, feel, and remember you.",
    images: [
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600",
      "https://images.unsplash.com/photo-1552664730-d307ca8841cb?w=600",
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600",
      "https://images.unsplash.com/photo-1559136555-9303b3e5c5c8?w=600",
    ]
  },
  {
    title: "Brand Guidelines",
    paragraph: "Think of this as your brand’s DNA — documented. We design detailed rulebooks that keep your visuals consistent, your tone on-brand, and your identity strong — no matter who’s designing next.",
    images: [
      "https://images.unsplash.com/photo-1497032623684-0e5e7b5b2a7c?w=600",
      "https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=600",
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600",
      "https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=600",
    ]
  },
  {
    title: "Rebranding Services",
    paragraph: "When your brand outgrows its old outfit, we tailor a new one. We keep your core intact but refresh your look, tone, and presence to match where you are now — and where you’re headed next.",
    images: [
      "https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=600",
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600",
      "https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=600",
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600",
    ]
  },
  {
    title: "Packaging & Collateral Design",
    paragraph: "Your packaging is your silent salesperson. We create designs that tell your brand story on every label, box, and business card. From seasonal drops to grand launches — we make every detail feel intentional and unforgettable.",
    images: [
      "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?w=600",
      "https://images.unsplash.com/photo-1581093458791-9d6af57b8d7c?w=600",
      "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?w=600",
      "https://images.unsplash.com/photo-1581093458791-9d6af57b8d7c?w=600",
    ]
  }
];

const whyBranding = [
  {
    stat: "78%",
    label: "of consumers trust brands with strong visual identities",
    source: "Lucidpress"
  },
  {
    stat: "3x",
    label: "more likely to remember a brand with consistent presentation",
    source: "Forbes"
  },
  {
    stat: "94%",
    label: "of first impressions are design-related",
    source: "Adobe"
  },
  {
    stat: "AED 1 → 5.80",
    label: "return on investment for every dirham spent on branding",
    source: "Design Council"
  }
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

const Branding = () => {
  const [openOfferIndex, setOpenOfferIndex] = useState(null);
    const isMdOrLarger = useMediaQuery("(min-width: 768px)");
  
  const toggleOffer = (idx) => {
    setOpenOfferIndex(openOfferIndex === idx ? null : idx);
  };

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
      {/* Hero Section */}
      <section className="relative h-screen bg-cover bg-center"  style={{
                backgroundImage: `url(${BannerBack})`,
              }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 max-w-4xl mx-auto">
          <p className="text-sm md:text-base uppercase tracking-widest text-white mb-2">Designed to stand out</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Social-first branding for modern, bold F&B concepts.</h1>
          <button 
          onClick={goToContact}
          className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-8 rounded-full transition mt-6">
            CONTACT US
          </button>

        {/* Navigation Pills – now scroll to sections */}
<div className="flex flex-wrap justify-center gap-3 mt-12">
  {[
    { label: 'Brands We Build', target: 'brands-section' },
    { label: 'What we offer',   target: 'offer-section' },
    { label: 'Our Process',     target: 'process-section' },
    { label: 'Why Branding ?',  target: 'why-section' },
  ].map((pill) => (
    <button
      key={pill.label}
      data-target={pill.target}
      onClick={(e) => {
        e.preventDefault();
        const el = document.getElementById(pill.target);
        if (el) {
          const offset = 80;                                 // header height
          const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }}
      className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm hover:bg-white/30 transition"
    >
      {pill.label}
    </button>
  ))}
</div>
        </div>
      </section>

      {/* Brands We've Built */}
      <section id="brands-section" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">Brands we've built.</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {brands.map((brand, i) => (
              <div key={i} className="bg-white rounded-3xl shadow-lg overflow-hidden">
                <div className={`${brand.color} text-white p-8 text-center`}>
                  <p className="text-xs uppercase tracking-widest opacity-80">EST. {brand.est}</p>
                  <h3 className="text-3xl font-bold mt-1">{brand.name}</h3>
                  {brand.tagline && <p className="text-sm mt-2 opacity-90">{brand.tagline}</p>}
                </div>
                <div className="p-6 space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gray-100 border-2 border-dashed rounded-xl h-32"></div>
                    <div className="bg-gray-100 border-2 border-dashed rounded-xl h-32"></div>
                  </div>
                  <div className="flex justify-center gap-3 flex-wrap">
                   
                   
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

  

      {/* WHAT WE OFFER – collapsible */}
      <section id="offer-section" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="border-b border-black pb-4 mb-12">
            <h1 className="font-bold text-3xl md:text-5xl text-gray-800">
              What we offer
            </h1>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* LEFT – Paragraph + Images */}
            <div className="space-y-8">
              <p className="text-2xl md:text-3xl font-semibold text-gray-950 leading-relaxed">
                On-brand packaging for seasonal drops + product launches.
              </p>

              {openOfferIndex !== null && (
                <div className="grid grid-cols-2 gap-4">
                  {offer[openOfferIndex].images.map((src, i) => (
                    <div
                      key={i}
                      className="overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:scale-105"
                    >
                      <img
                        src={src}
                        alt={`${offer[openOfferIndex].title} example ${i + 1}`}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* RIGHT – Collapsible list */}
            <div className="space-y-4">
              {offer.map((item, idx) => (
                <div key={idx} className="border-b border-gray-950">
                  <button
                    onClick={() => toggleOffer(idx)}
                    className="w-full px-6 py-4 flex justify-between items-center text-left"
                  >
                    <h3 className="font-semibold text-xl text-black">{item.title}</h3>
                    <span className="text-pink-600">
                      {openOfferIndex === idx ? (
                        <MinusCircleIcon className="h-6 w-6" />
                      ) : (
                        <PlusCircleIcon className="h-6 w-6" />
                      )}
                    </span>
                  </button>

                  {openOfferIndex === idx && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-950">{item.paragraph}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

       {/* Branding Process Section */}
<section id="process-section" className="py-20 px-6 bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto">
    {/* Header – Neon Sign Vibes */}
 < div className="border-b border-black w-full pb-2 mb-10">
          <h1 className="font-bold text-3xl md:text-5xl text-gray-800">Our Process</h1>
    </div>

    {/* Menu Board – Interactive Cards */}
    <div className="grid md:grid-cols-5 gap-6">
      {[
        {
          step: "01",
          title: "Discover & Define",
          subtitle: "",
          desc: "We begin by diving deep into your story — understanding who you are, what you stand for, and the audience you want to reach. This stage lays the foundation for everything ahead.",
          emoji:"",
          color: "from-pink-500 to-pink-600",
        },
        {
          step: "02",
          title: "Strategize the Brand",
          subtitle: "",
          desc: "We translate insights into a clear strategy — defining your positioning, tone of voice, and unique market identity that sets you apart from competitors.",
          emoji: "",
          color: "from-yellow-400 to-yellow-500",
        },
        {
          step: "03",
          title: "Design the Identity",
          subtitle: "",
          desc: "Here’s where creativity takes over. We craft your logo, visual elements, typography, and color palette — bringing your brand personality to life.",
          emoji: "",
          color: "from-black to-gray-900",
          text: "text-white",
        },
        {
          step: "04",
          title: "Build the Brand World",
          subtitle: "",
          desc: "Beyond visuals, we create your brand touchpoints — from packaging and social templates to digital assets — ensuring your presence feels consistent everywhere.",
          emoji: "",
          color: "from-pink-500 to-pink-600",
        },
        {
          step: "05",
          title: "Launch & Elevate",
          subtitle: "",
          desc: "We roll out your brand with confidence — aligning every channel, fine-tuning details, and setting you up with the tools to grow, evolve, and stay unforgettable.",
          emoji: "",
          color: "from-yellow-400 to-yellow-500",
        },
      ].map((item, idx) => (
        <div
          key={idx}
          className="group relative cursor-pointer"
          onClick={() => {
            const el = document.getElementById(`step-${idx}`);
            el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }}
        >
          {/* Card */}
          <div
            id={`step-${idx}`}
            className={`
              relative p-6 rounded-3xl shadow-xl overflow-hidden
              bg-gradient-to-br ${item.color} ${item.text || 'text-black'}
              transform transition-all duration-300
              group-hover:scale-105 group-hover:-translate-y-2
              group-hover:shadow-2xl
            `}
          >
            {/* Step Number – Big & Bold */}
            <div className="text-6xl md:text-7xl font-black opacity-20 absolute -top-4 -right-2">
              {item.step}
            </div>

            {/* Emoji Icon */}
            <div className="text-5xl mb-3">{item.emoji}</div>

            {/* Title */}
            <h3 className="text-2xl font-black mb-1">{item.title}</h3>
            <p className="text-sm font-bold opacity-80 mb-3">{item.subtitle}</p>

            {/* Description – Hidden until hover/focus */}
            <p className="text-sm duration-300 mt-2">
              {item.desc}
            </p>
          </div>
          {/* Connector Line (Desktop only) */}
          {idx < 4 && (
            <div
              className="hidden md:block absolute top-1/2 left-full w-full h-1 bg-gray-300
                         transform -translate-y-1/2
                         group-hover:bg-pink-500 transition-colors duration-500"
              style={{ width: 'calc(100% + 1.5rem)' }}
            />
          )}
        </div>
      ))}
    </div>

  </div>
</section>

      {/* NEW: WHY BRANDING MATTERS */}
      <section id="why-section" className="py-20 px-6 "
       style={{
              backgroundImage: `url(${isMdOrLarger ? Backgroundlarge : Backgroundsmall})`,
            }}>
        <div className="max-w-7xl mx-auto">
      
                        <div className="mb-16 text-center">
               <p className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                Great branding doesn’t cost. It pays.
              </p>
              <p className="text-gray-500">
                Brands with strong identity see 3.5x higher visibility and 23% more revenue growth.
              </p>

          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyBranding.map((item, i) => (
              <div
                key={i}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-5xl md:text-6xl font-bold text-pink-600 mb-3">
                  {item.stat}
                </div>
                <p className="text-lg font-medium text-gray-800 leading-tight">
                  {item.label}
                </p>
                <p className="text-xs text-gray-500 mt-4 uppercase tracking-wider">
                  — {item.source}
                </p>
              </div>
            ))}
          </div>

               {/* Final CTA – Neon Button */}
    <div className="mt-16 text-center">
      <button className="relative inline-block group">
        <span className="absolute inset-0 bg-pink-500 blur-xl opacity-75 group-hover:opacity-100 transition"></span>
        <button 
        onClick={goToContact}
        className="relative bg-pink-500 text-white font-black py-5 px-12 rounded-full text-xl tracking-wider shadow-2xl transform transition-all group-hover:scale-105">
          SERVE ME THIS PROCESS
        </button>
      </button>
    </div>
          </div>
      </section>



    </>
  );
};

export default Branding;