import { MinusCircleIcon, PlusCircleIcon } from 'lucide-react';
import React, { useState } from 'react';

const Faq = [
  {
    Question: "What types of marketing services do you provide, and how can they help my business grow?",
    Answer:
      "We offer a comprehensive range of marketing services including digital strategy, social media management, branding, SEO optimization, paid advertising (Google, Meta, and LinkedIn), influencer partnerships, and content creation. Each service is designed to help businesses increase visibility, attract qualified leads, and build long-term brand loyalty in their industry.",
  },
  {
    Question: "How do you determine which marketing strategy will work best for my brand?",
    Answer:
      "We begin by analyzing your business goals, target audience, and current market position. Our team conducts competitor research, audience segmentation, and platform analysis to identify where your potential customers are most active. Based on this data, we create a custom strategy that aligns with your brand voice and drives measurable results.",
  },
  {
    Question: "How soon can I expect to see results from your marketing campaigns?",
    Answer:
      "The timeline depends on the chosen channels and campaign objectives. For instance, SEO and organic content strategies typically take 3 to 6 months to show steady growth, while paid ads or influencer collaborations can yield visible engagement and conversions within a few weeks. We balance both short-term wins and long-term sustainability in every project.",
  },
  {
    Question: "Do you offer packages for startups or small businesses with limited budgets?",
    Answer:
      "Yes, we specialize in helping startups and small businesses. Our plans are flexible and can be customized according to your budget and priorities. Even with a limited budget, we focus on building a strong brand foundation, creating high-quality content, and using cost-effective marketing channels that deliver tangible growth.",
  },
  {
    Question: "What makes your agency different from other digital marketing companies?",
    Answer:
      "Unlike many agencies that follow one-size-fits-all methods, we emphasize personalization, creativity, and transparency. Our team provides data-driven insights, regular performance reports, and ongoing strategy refinement. We act as your long-term marketing partner, not just a service provider, ensuring every decision is made with your brand’s success in mind.",
  },
  {
    Question: "Will I receive regular updates and performance reports for my campaigns?",
    Answer:
      "Absolutely. We believe in full transparency with our clients. You’ll receive monthly reports that include campaign performance, analytics, engagement metrics, ROI calculations, and key insights. We also schedule strategy review meetings to discuss progress, feedback, and new opportunities for optimization.",
  },
];


const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white px-4 lg:px-35 py-5 lg:py-15 min-h-screen">
      <div className='bg-pink-100 rounded-lg p-4'>
        <div className="flex flex-col sm:flex-row justify-between items-center border-b border-black pb-4 mb-12">
          <h1 className="font-semibold text-4xl sm:text-5xl text-gray-800">
            Frequently Asked Questions
          </h1>
        </div>

        <div>
          {Faq.map((F, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-pink-400 via-pink-300 via-pink-200 via-pink-300 to-pink-400 rounded-lg mb-4"
            >
              <button
                onClick={() => toggleDropdown(index)}
                className="w-full px-6 py-4 flex justify-between items-center text-left"
              >
                <h3 className="font-semibold text-xl text-white">
                  {F.Question}
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
                <div className="px-6 py-4 bg-white">
                  <p className="text-gray-950">{F.Answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;