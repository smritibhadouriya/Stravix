import React, { useState } from 'react';
import { MinusCircleIcon, PlusCircleIcon } from 'lucide-react';

const Niche = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const niches = [
    {
      title: 'Healthcare & Wellness',
      content:
        'We specialize in creating tailored digital solutions for clinics, wellness brands, and telemedicine platforms to enhance patient engagement and streamline operations.',
      image: '/images/healthcare.jpg',
    },
    {
      title: 'E-Commerce & Retail',
      content:
        'From boutique stores to large marketplaces, we build seamless, secure, and scalable online shopping experiences that drive sales and customer loyalty.',
      image: '/images/ecommerce.jpg',
    },
    {
      title: 'Education & EdTech',
      content:
        'Empowering learning institutes and EdTech startups with interactive platforms, LMS integration, and student-centric digital tools for modern education.',
      image: '/images/education.jpg',
    },
  ];

  return (
    <div className="bg-pink-100 min-h-screen py-20">
      <div className="container mx-auto px-4 lg:px-35">
        {/* Header */}
        <div className="border-b border-black pb-4 mb-12">
          <h1 className="font-bold text-3xl md:text-5xl  text-gray-800">
            Niches We Serve
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT SIDE – Paragraph + Image (only when open) */}
          <div className="space-y-8">
            {/* Paragraph */}
            <p className="text-2xl md:text-4xl font-semibold text-gray-950 leading-relaxed">
              Bringing knowledge from varied areas for your growth
            </p>

            {/* Image – ONLY shown when a menu is open */}
            {openIndex !== null && (
              <div className="overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:scale-[1.02]">
                <img
                  src={niches[openIndex].image}
                  alt={niches[openIndex].title}
                  className="w-full h-64 object-cover"
                />
              </div>
            )}
          </div>

          {/* RIGHT SIDE – Collapsible Menus */}
          <div className="space-y-4">
            {niches.map((niche, index) => (
              <div
                key={index}
                className="border-b border-gray-950 "
              >
                <button
                  onClick={() => toggleDropdown(index)}
                  className="w-full px-6 py-4 flex justify-between items-center"
                >
                  <h3 className="font-semibold text-xl text-black">
                    {niche.title}
                  </h3>
                  <span className="text-pink-600">
                    {openIndex === index ? (
                      <MinusCircleIcon className="h-6 w-6" />
                    ) : (
                      <PlusCircleIcon className="h-6 w-6" />
                    )}
                  </span>
                </button>

                {openIndex === index && (
                  <div className="px-6 py-4">
                    <p className="text-gray-950">{niche.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Niche;