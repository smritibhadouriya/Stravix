import React from 'react';
import Background from '../../assets/pink-bgcase.jpg';
import Phone from '../../assets/vedio.mp4';
import Large from '../../assets/vedio.mp4';

// Sample image imports
import TL from '../../assets/image1.png';
import BL from '../../assets/image2.png';
import BR from '../../assets/pink-bg.jpg';

// Images for "What we offer" section
import Serve1 from '../../assets/Serve1.jpeg';
import Serve2 from '../../assets/Serve2.jpeg';
import Serve3 from '../../assets/Serve3.jpeg';
import { useNavigate } from 'react-router-dom';

const Social = () => {
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
      {/* ==================== HERO SECTION ==================== */}
      <div
        className="relative min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center overflow-hidden"
        style={{ backgroundImage: `url(${Background})` }}
      >
        {/* ---- Floating Cards (hidden on mobile) ---- */}
        <div className="hidden md:block absolute inset-0 pointer-events-none">
          {/* Top-Left */}
          <div className="absolute top-16 left-8 lg:top-20 lg:left-16 xl:left-32">
            <img
              src={TL}
              alt="Viral Videos"
              className="w-32 h-32 lg:w-40 lg:h-40 object-cover rounded-2xl shadow-xl"
            />
            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white text-black px-3 py-1 rounded-full text-xs lg:text-sm font-medium whitespace-nowrap">
              Viral Videos
            </span>
          </div>

          {/* Top-Right */}
          <div className="absolute top-16 right-8 lg:top-20 lg:right-16 xl:right-32">
            <img
              src="https://imgs.search.brave.com/jznYrvbzuAiZ_OCU0a51aSqfYeX9uq9crgxJ-t6Q_d8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMwLnBvY2tldGxp/bnRpbWFnZXMuY29t/L3dvcmRwcmVzcy93/cC1jb250ZW50L3Vw/bG9hZHMvMTQwNDI3LWFwcHMtbmV3cy10/aGUtYmVzdC1zdHVw/aWRlc3QtYW5kLW1v/c3QtZmFtb3VzLWlu/dGVybmV0LW1lbWVz/LWFyb3VuZC1pbWFn/ZTgtNmJsdWhzZnh0/cy5qcGc_cT01MCZm/aXQ9Y3JvcCZ3PTc1/MCZkcHI9MS41"
              alt="Strategies for growth"
              className="w-32 h-32 lg:w-40 lg:h-40 object-cover rounded-2xl shadow-xl"
            />
            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white text-black px-3 py-1 rounded-full text-xs lg:text-sm font-medium whitespace-nowrap">
              Strategies for growth
            </span>
          </div>

          {/* Bottom-Left */}
          <div className="absolute bottom-16 left-8 lg:bottom-20 lg:left-16 xl:left-32">
            <img
              src={BL}
              alt="Design that communicates"
              className="w-32 h-32 lg:w-40 lg:h-40 object-cover rounded-2xl shadow-xl"
            />
            <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white text-black px-3 py-1 rounded-full text-xs lg:text-sm font-medium whitespace-nowrap">
              Design that communicates
            </span>
          </div>

          {/* Bottom-Right */}
          <div className="absolute bottom-16 right-8 lg:bottom-20 lg:right-16 xl:right-32">
            <img
              src={BR}
              alt="Content that sells"
              className="w-32 h-32 lg:w-40 lg:h-40 object-cover rounded-2xl shadow-xl"
            />
            <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white text-black px-3 py-1 rounded-full text-xs lg:text-sm font-medium whitespace-nowrap">
              Content that sells
            </span>
          </div>
        </div>

        {/* Center Text + CTA */}
        <div className="text-center text-white max-w-2xl px-4 z-10">
          <p className="uppercase tracking-widest text-sm mb-2">
            Style meets strategy.
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Social content that turns heads — and converts.
          </h1>
          <button
          onClick={goToContact}
           className="mt-10 bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition transform hover:scale-105">
            BOOK A CALL
          </button>
        </div>
      </div>

      {/* ==================== WHAT WE OFFER SECTION ==================== */}
    <section className="min-h-screen px-4 lg:px-12 xl:px-24 py-20 bg-gray-50">
        <div className="border-b border-black pb-4 mb-12 max-w-7xl mx-auto">
          <h1 className="font-bold text-3xl md:text-5xl text-gray-800">
            What we offer
          </h1>
        </div>

        {/* ---- Image + Column pairs ---- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Pair 1 */}
          <div className="flex flex-col space-y-6">
            <img
              src={Serve1}
              alt="Service 1"
              className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            />
            <div className="bg-white p-4 rounded-xl border border-black">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">Account Setup & Optimization</li>
                <li className="flex items-start">Content Calendar Planning</li>
                <li className="flex items-start">Community Engagement</li>
              </ul>
            </div>
          </div>

          {/* Pair 2 */}
          <div className="flex flex-col space-y-6">
            <img
              src={Serve2}
              alt="Service 2"
              className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            />
            <div className="bg-white p-4 rounded-xl border border-black">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">Creative Visuals & Reels</li>
                <li className="flex items-start">Copywriting & Captions</li>
                <li className="flex items-start">Brand Identity Design</li>
              </ul>
            </div>
          </div>

          {/* Pair 3 */}
          <div className="flex flex-col space-y-6">
            <img
              src={Serve3}
              alt="Service 3"
              className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            />
            <div className="bg-white p-4 rounded-xl border border-black">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">Paid Ad Campaigns</li>
                <li className="flex items-start">Analytics & Reporting</li>
                <li className="flex items-start">Influencer & Trend Marketing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== OUR PROCESS SECTION ==================== */}
      {/* ---- UNTOUCHED – copied exactly as you provided ---- */}
      <section
        className="relative min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className="">
          {/* 6-Box Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* Box 1 - Empty */}
            <div className="  p-8 r text-gray-800 flex flex-col justify-center h-60 md:h-90 lg:h-100">
               <h1 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-widest">
              Our Process
            </h1>
            </div>

            {/* Box 2 - Discover (Yellow BG) */}
            <div className="bg-yellow-300 p-8 md:rounded-b-2xl shadow-xl text-black flex flex-col justify-center h-60 md:h-90  lg:h-100">
              <h3 className="text-xl font-bold mb-3">1. Understand Your Audience</h3>
              <p className="text-sm">
                Before crafting any post, we ask ourselves (and you): What does your customer want to see, feel, or know about your business?
              </p>
              Every decision begins with your audience — their interests, needs, and behavior — because understanding them is the key to meaningful engagement.
            </div>

            {/* Box 3 - Plan */}
            <div className="  p-8 r text-white flex flex-col justify-center h-60 md:h-90  lg:h-100">
              <h3 className="text-xl font-bold mb-3">2. Strategize with Purpose</h3>
              <p className="text-sm">
                Once we know your audience, we build a clear plan. From selecting the right platforms to deciding post frequency and tone, every move is made with purpose.
              </p>
              We don’t guess — we strategize to make your brand consistent and conversion-ready.
            </div>

            {/* Box 4 - Create (Yellow BG) */}
            <div className="bg-yellow-300 p-8 md:rounded-t-2xl shadow-xl text-black flex flex-col justify-center h-60 md:h-90  lg:h-100">
              <h3 className="text-xl font-bold mb-3">3. Create What Connects</h3>
              <p className="text-sm">
                This is where ideas turn into visuals, stories, and motion. We design, write, and produce content that not only looks good but also speaks directly to your audience’s emotions and interests.
              </p>
            </div>

            {/* Box 5 - Execute */}
            <div className=" flex p-8 text-white flex-col justify-center h-60 md:h-90  lg:h-100">
              <h3 className="text-xl font-bold mb-3">4. Launch and Engage</h3>
              <p className="text-sm">
                We bring your brand to life across social media — posting, responding, and engaging with your community.
Each interaction builds trust and turns followers into loyal fans.
              </p>
            </div>

            {/* Box 6 - Analyze (Yellow BG) */}
            <div className="bg-yellow-300 p-8 md:rounded-t-2xl shadow-xl text-black flex flex-col justify-center  h-60 md:h-90  lg:h-100">
              <h3 className="text-xl font-bold mb-3">5. Review, Refine, Repeat</h3>
              <p className="text-sm">
                We track what’s working and what’s not — then refine.
Every month, your strategy gets sharper, your content gets stronger, and your results get better.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== VIDEO CTA ==================== */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={Phone} type="video/mp4" media="(max-width: 767px)" />
          <source src={Large} type="video/mp4" media="(min-width: 768px)" />
        </video>

        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 text-yellow-300">
            Memorable Campaigns
            <br />
            <span className="text-3xl md:text-5xl">Start Here</span>
          </h1>
          <button 
          onClick={goToContact}
          className="mt-8 bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-10 rounded-full shadow-xl transition transform hover:scale-105">
            BOOK SERVICE
          </button>
        </div>
      </div>
    </>
  );
};

export default Social;