import React from 'react';

// Replace these with your actual image paths
const serviceImages = {
  'Social': 'https://imgs.search.brave.com/cxK8yYoMfgHkWGAMV5994P1TJD_KjjJr1flcmxioz00/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vcGljanVt/Ym8uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy93b21hbi13aXRo/LXN1bi1nbGFzc2Vz/LWluLWZsb3dlci1m/aWVsZC1zdW1tZXIt/ZnJlZS1waG90by5q/cGc_dz02MDAmcXVh/bGl0eT04MA',
  'Branding': '/images/services/branding.jpg',
  'Performance': '/images/services/performance.jpg',
  'Creative': 'https://imgs.search.brave.com/6dMD-RAv1v5zcMSvZWnipXIKDjNXgO1Gk-ykDWeWLLM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4t/ZnJvbnQuZnJlZXBp/ay5jb20vaG9tZS9h/bm9uLXJ2bXAvY3Jl/YXRpdmUtc3VpdGUv/dmlkZW8tY3JlYXRp/b24vaW50cm9zLW91/dHJvcy53ZWJw',
  'PR': 'https://imgs.search.brave.com/cWWhI3gAVxU_l6BOryX73mIuJr9g0Lu6tW1c9AhNGRs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA3LzAzLzY5LzEx/LzM2MF9GXzcwMzY5/MTE3MV94NlI3VnZv/WDdEdlRndzlqYjQ1/SXljS0l3b1pBeVY3/MC5qcGc',
  'Digital': 'https://imgs.search.brave.com/uUFA4iDzqif1Y5gp0B8h7ieXHqfhNFbCW2DuuZBw5fo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4t/ZnJvbnQuZnJlZXBp/ay5jb20vaG9tZS9h/bm9uLXJ2bXAvY3Jl/YXRpdmUtc3VpdGUv/cGhvdG9ncmFwaHkv/YW5pbWF0ZS1zb2Np/YWwud2VicA',
};

// Your services array
const services = [
  { label: 'Branding', value: 'Brand Strategy, Identity Design, Print & Packaging' },
{ label: 'Creative', value: 'Graphic Design, Visual Assets, Campaign Concepts' },
{ label: 'Social', value: 'Content Creation, Community Management, Growth Strategy' },
{ label: 'PR', value: 'Media Outreach, Influencer Partnerships, Brand Awareness' },
{ label: 'Digital', value: 'Web Design, UX/UI, Digital Presence Optimization' },
{ label: 'Performance', value: 'Meta Ads, Google Ads, Lead Generation Campaigns' },

];


const Services = () => {
  return (
    <div className="bg-white px-4 lg:px-30 py-20 min-h-screen container mx-auto">
      {/* Title */}
      <div className="border-b border-black w-full pb-2 mb-16 max-w-7xl mx-auto">
        <h1 className="font-bold text-3xl md:text-5xl text-gray-800">Services</h1>
      </div>

      {/* Services List */}
      <div className="max-w-7xl mx-auto space-y-7">
        {services.map((service, index) => {
          const imageUrl = serviceImages[service.label] || '/placeholder.jpg';

          return (
            <div key={service.label}>
              {/* Service Row */}
              <div
                className={'grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-30 items-center'}
              >
                {/* Text + Logo */}
                <div className={`flex items-start gap-4 px-4 lg:px-10`}>
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                      {service.label.replace(/([A-Z])/g, ' $1').trim()}
                    </h3>
                    <p className="text-gray-700 text-lg mt-1">{service.value}</p>
                  </div>
                </div>

                {/* Image */}
                <div >
                  <div className="w-full md:w-75 lg:w-100 h-40 rounded-lg overflow-hidden">
                    <img
                      src={imageUrl}
                      alt={service.label}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Divider Line */}
              {index < services.length - 1 && (
                <hr className="mt-7 border-t border-black" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;