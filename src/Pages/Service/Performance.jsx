import React from "react";
import { RocketIcon, BarChart3Icon, TargetIcon, TrendingUpIcon, ClipboardCheckIcon } from "lucide-react";

const PerformanceMarketing = () => {
  return (
    <>
      {/* HERO SECTION */}
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
          <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-8 rounded-full transition mt-6 shadow-lg">
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


      {/* SERVICES SECTION */}
      <section className="py-20 bg-gray-100 px-6 ">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-black mb-4">Our Core Services</h2>
          <p className="text-gray-600 text-lg">Strategic, creative, and data-driven campaigns built to scale.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            { icon: RocketIcon, title: "Paid Media Strategy", desc: "Google, Meta, LinkedIn & beyond — tailored to your audience and goals.", color: "pink" },
            { icon: BarChart3Icon, title: "Conversion Optimization", desc: "We analyze user behavior to refine landing pages and boost ROI.", color: "yellow" },
            { icon: TargetIcon, title: "Audience Targeting", desc: "Laser-focused campaigns that reach the right people at the right time.", color: "pink" },
          ].map(({ icon: Icon, title, desc, color }) => (
            <div
              key={title}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition border-t-4"
              style={{
                borderTopColor: color === "pink" ? "#FF69B4" : "#FFD700",
              }}
            >
              <Icon className={`mx-auto w-12 h-12 mb-6 ${color === "pink" ? "text-pink-500" : "text-yellow-500"}`} />
              <h3 className="text-2xl font-semibold mb-3 text-black">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-20 px-6 bg-black text-white text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 text-white">Our Data-Driven Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Discovery", desc: "We learn your goals, audience, and brand DNA." },
              { step: "2", title: "Strategy", desc: "We build a performance roadmap backed by data." },
              { step: "3", title: "Execution", desc: "Launch high-converting campaigns across platforms." },
              { step: "4", title: "Optimization", desc: "Track, analyze, and scale the winning campaigns." },
            ].map(({ step, title, desc }) => (
              <div
                key={step}
                className="p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-pink-500 transition relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-pink-500/10 rounded-bl-full"></div>
                <div className="text-4xl font-bold text-yellow-400 mb-4 relative z-10">{step}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
                <p className="text-gray-300 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDY / RESULT SECTION */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-black">Campaigns that Delivered</h2>
          <p className="text-gray-600 text-lg mt-2">
            Real results from brands that trusted our expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { name: "Urban Blend", result: "2.5x ROI in 3 months", accent: "pink" },
            { name: "GlowHaus", result: "CTR improved by 78%", accent: "yellow" },
            { name: "Luna Skincare", result: "Cost per lead reduced by 40%", accent: "pink" },
          ].map(({ name, result, accent }) => (
            <div
              key={name}
              className="p-8 bg-gray-50 rounded-3xl shadow-md hover:shadow-xl transition text-left border-l-4"
              style={{
                borderLeftColor: accent === "pink" ? "#FF69B4" : "#FFD700",
              }}
            >
              <h3 className={`text-2xl font-semibold mb-2 ${accent === "pink" ? "text-pink-600" : "text-yellow-600"}`}>{name}</h3>
              <p className="text-gray-700 font-medium">{result}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-24  text-center text-black">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-4xl font-bold drop-shadow-md">Ready to scale smarter, not harder?</h2>
          <p className="text-lg text-black/80 font-medium">
            Let’s create data-driven campaigns that grow your brand faster and more efficiently.
          </p>
          <button className="bg-black text-white font-bold py-3 px-10 rounded-full hover:bg-gray-900 transition shadow-xl transform hover:scale-105">
            Book Your Free Strategy Call
          </button>
        </div>
      </section>
    </>
  );
};

export default PerformanceMarketing;