import React, { useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { caseStudies } from '../Data/CasestudyData';
import { ChevronLeft, ChevronRight, Share2, Facebook, Twitter, Linkedin, Instagram, Link } from 'lucide-react';

const toSlug = (title) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const truncateTitle = (title, maxWords = 25) => {
  const words = title.split(' ');
  if (words.length <= maxWords) return title;
  return words.slice(0, maxWords).join(' ') + '...';
};

const CasestudySingle = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
   const location = useLocation();

  const currentIndex = caseStudies.findIndex((s) => toSlug(s.title) === slug);
  const study = caseStudies[currentIndex];
   useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [location.pathname]);

  if (!study) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white px-4">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-6">Case Study Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-700 transition"
          >
            Back to List
          </button>
        </div>
      </div>
    );
  }

  const prevStudy = currentIndex > 0 ? caseStudies[currentIndex - 1] : null;
  const nextStudy = currentIndex < caseStudies.length - 1 ? caseStudies[currentIndex + 1] : null;

  const handlePrev = () => prevStudy && navigate(`/${toSlug(prevStudy.title)}`);
  const handleNext = () => nextStudy && navigate(`/${toSlug(nextStudy.title)}`);

  return (
    <div className="min-h-screen bg-pink-50 text-black">
      {/* Main Content */}
      <div className="px-4 py-8 md:py-12 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10 lg:p-12">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-6 text-gray-900">
            {study.title}
          </h1>

          <div
            className="prose prose-lg max-w-none text-black 
              [&_h1]:text-4xl [&_h1]:font-bold [&_h1]:text-white 
              [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:mb-8 
              [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:mt-12 
              [&_p]:text-gray-700 [&_p]:leading-relaxed 
              [&_ul]:pl-0 [&_li]:mb-3 [&_li]:flex [&_li]:items-center
              [&_blockquote]:border-l-4 [&_blockquote]:border-purple-500 [&_blockquote]:pl-6
            "
            dangerouslySetInnerHTML={{ __html: study.content }}
          />

          {/* Spread the Love */}
          <div className="mt-12">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Spread the Love</h3>
            <div className="flex flex-wrap gap-2">
              {[
                { Icon: Facebook, label: 'Facebook', href: '#' },
                { Icon: Twitter, label: 'Twitter', href: '#' },
                { Icon: Linkedin, label: 'LinkedIn', href: '#' },
                { Icon: Instagram, label: 'Instagram', href: '#' },
                { Icon: Link, label: 'Copy Link', href: '#' },
                { Icon: Share2, label: 'Share', href: '#' },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="w-10 h-10 flex items-center justify-center border-2 border-pink-600 text-pink-600 rounded-lg 
                           hover:border-black hover:text-black transition-all duration-300"
                  aria-label={`Share on ${label}`}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation - Responsive */}
      <div className="px-4 py-6 md:py-8 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center gap-4">
            {/* Previous Button */}
            <button
              onClick={handlePrev}
              disabled={!prevStudy}
              className={`
                flex items-center justify-center md:justify-start
                min-w-[60px] md:min-w-[280px] 
                bg-pink-500 text-white rounded-xl 
                py-3 px-4 md:py-4 md:px-6 
                transition-all duration-300 
                ${prevStudy 
                  ? 'hover:bg-pink-600 cursor-pointer' 
                  : 'opacity-0 pointer-events-none'
                }
                group
              `}
            >
              {prevStudy && (
                <>
                  <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-yellow-400 group-hover:-translate-x-1 transition" />
                     <p className="text-xs uppercase tracking-wider text-yellow-400">Prev</p>
<div className="hidden md:block text-left ml-3 flex-1">
                   
                    <p className="font-semibold text-sm lg:text-base line-clamp-1 text-white">
                      {truncateTitle(prevStudy.title, 20)}
                    </p>
                  </div>
                </>
              )}
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              disabled={!nextStudy}
              className={`
                flex items-center justify-center md:justify-end
                min-w-[60px] md:min-w-[280px] 
                bg-pink-500 text-white rounded-xl 
                py-3 px-4 md:py-4 md:px-6 
                transition-all duration-300 
                ${nextStudy 
                  ? 'hover:bg-pink-600 cursor-pointer' 
                  : 'opacity-0 pointer-events-none'
                }
                group
              `}
            >
              {nextStudy && (
                <>
               
                  <div className="hidden md:block text-right mr-3 flex-1">
                    <p className="font-semibold text-sm lg:text-base line-clamp-1 text-white">
                      {truncateTitle(nextStudy.title, 20)}
                    </p>
                  </div>
                  <p className="text-xs uppercase tracking-wider text-yellow-400">Next</p>
                  <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-yellow-400 group-hover:translate-x-1 transition" />
               
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CasestudySingle;