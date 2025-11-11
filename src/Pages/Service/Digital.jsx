// File: DigitalMarketingPage.jsx
import React from 'react';

const DigitalMarketingPage = () => {
  return (
    <>
      {/* Hero Section */}
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
          <button className="bg-black text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition transform hover:scale-105">
            Start Your Journey
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="min-h-screen bg-white flex items-center justify-center px-6 md:px-12 py-20">
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
                className="bg-pink-50 p-8 rounded-2xl border border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-shadow"
              >
                <h3 className="font-bold text-2xl text-black mb-3">{service.title}</h3>
                <p className="text-gray-700">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="min-h-screen bg-yellow-50 flex items-center justify-center px-6 md:px-12 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="border-b border-black pb-4 mb-12">
            <h1 className="font-bold text-3xl md:text-5xl text-gray-800">
              Success in Action
            </h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-black mb-4">+320% ROI for UrbanVibe Fashion</h3>
              <p className="text-gray-700 mb-6">
                Transformed a local boutique into a national sensation using hyper-targeted Instagram Reels and TikTok campaigns.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white text-sm font-bold">
                    ✓
                  </div>
                  <span className="text-gray-800">2.4M organic reach in 90 days</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white text-sm font-bold">
                    ✓
                  </div>
                  <span className="text-gray-800">47% increase in online sales</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white text-sm font-bold">
                    ✓
                  </div>
                  <span className="text-gray-800">Engagement rate jumped to 12.3%</span>
                </div>
              </div>
            </div>
            <div className="bg-white border-4 border-black rounded-3xl overflow-hidden shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
              <div className="bg-gradient-to-br from-pink-200 to-yellow-200 h-96 flex items-center justify-center">
                <p className="text-black font-bold text-xl">Case Study Visual</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="min-h-screen bg-pink-50 flex items-center justify-center px-6 md:px-12 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="border-b border-black pb-4 mb-12">
            <h1 className="font-bold text-3xl md:text-5xl text-gray-800">
              Why We're Different
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                icon: '🚀',
                title: 'Results-Obsessed',
                desc: 'We don’t do vanity metrics. Every campaign is engineered for measurable growth.',
              },
              {
                icon: '🎨',
                title: 'Creative & Data-Driven',
                desc: 'Beautiful creatives backed by ruthless analytics. The perfect blend.',
              },
              {
                icon: '⚡',
                title: 'Agile & Transparent',
                desc: 'Weekly reports, real-time dashboards, and zero black-box strategies.',
              },
              {
                icon: '🤝',
                title: 'Partnership Mindset',
                desc: 'Your success is our success. We grow when you grow.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl border-2 border-black flex gap-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
              >
                <div className="text-4xl">{item.icon}</div>
                <div>
                  <h4 className="font-bold text-xl text-black mb-2">{item.title}</h4>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="min-h-screen bg-black text-white flex items-center justify-center px-6 md:px-12 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="border-b border-white pb-4 mb-12">
            <h1 className="font-bold text-3xl md:text-5xl text-white">
              Ready to Dominate Digital?
            </h1>
          </div>
          <p className="text-xl mb-10">
            Let’s build a strategy that doesn’t just compete — it wins.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-pink-500 text-black px-10 py-5 rounded-full font-bold text-lg hover:bg-pink-400 transition transform hover:scale-105">
              Book a Free Strategy Call
            </button>
            <button className="border-2 border-white text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-black transition">
              View Full Portfolio
            </button>
          </div>
          <p className="mt-12 text-sm text-gray-400">
            Limited spots available this month • No obligation • 30-min deep dive
          </p>
        </div>
      </section>
    </>
  );
};

export default DigitalMarketingPage;