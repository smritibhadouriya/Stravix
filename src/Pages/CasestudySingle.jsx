import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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

  const currentIndex = caseStudies.findIndex((s) => toSlug(s.title) === slug);
  const study = caseStudies[currentIndex];

  if (!study) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white px-[35px]">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-black mb-6">Case Study Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="px-8 py-3 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-700 transition"
          >
            Back to List
          </button>
        </div>
      </div>
    );
  }

  const prevStudy = currentIndex > 1 ? caseStudies[currentIndex - 1] : null;
  const nextStudy = currentIndex < caseStudies.length - 1 ? caseStudies[currentIndex + 1] : null;

  const handlePrev = () => prevStudy && navigate(`/${toSlug(prevStudy.title)}`);
  const handleNext = () => nextStudy && navigate(`/${toSlug(nextStudy.title)}`);

  return (
    <div className="min-h-screen bg-pink-50 text-black px-4 lg:px-50 py-10">


            <div className="px-[35px] py-5 max-w-7xl mx-auto bg-white">
                
       <h1 className="text-3xl  md:text-4xl lg:text-5xl font-semibold  leading-tight mb-3">
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

        {/*Spread Love */}
        <div className="mt-12">
          <h3 className="text- font-bold text-gray-800 mb-6">Spread the Love</h3>
          <div className="flex gap-1">
            <a
              href="#"
              className="w-15 h-10 flex items-center justify-center border-2 border-pink-600 text-pink-600 hover:border-black hover:text-black transition-all duration-300"
              aria-label="Share on Facebook"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="w-15 h-10 flex items-center justify-center border-2 border-pink-600 text-pink-600 hover:border-black hover:text-black transition-all duration-300"
              aria-label="Share on Twitter"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="w-15 h-10 flex items-center justify-center border-2 border-pink-600 text-pink-600 hover:border-black hover:text-black transition-all duration-300"
              aria-label="Share on LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="#"
             className="w-15 h-10 flex items-center justify-center border-2 border-pink-600 text-pink-600 hover:border-black hover:text-black transition-all duration-300"
              aria-label="Share on Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="w-15 h-10 flex items-center justify-center border-2 border-pink-600 text-pink-600 hover:border-black hover:text-black transition-all duration-300"
              aria-label="Copy Link"
            >
              <Link className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="w-15 h-10 flex items-center justify-center border-2 border-pink-600 text-pink-600 hover:border-black hover:text-black transition-all duration-300"
              aria-label="Share"
            >
              <Share2 className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      {/* Previous & Next Navigation */}
      <div className="px-[35px] py-10">
        <div className="max-w-7xl mx-auto flex justify-between">
          {/* Previous */}
          <button
            onClick={handlePrev}
            disabled={!prevStudy}
            className={`flex items-center gap-3 group transition-all bg-pink-500 py-2 px-4 rounded-xl ${
              prevStudy
                ? 'text-pink-600 hover:text-pink-700'
                : 'text-gray-400 cursor-not-allowed'
            }`}
          >
            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition text-yellow-400" />
            <div className="text-left">
              <p className="text-md uppercase tracking-wider text-yellow-400">Previous</p>
              <p className="font-semibold text-lg line-clamp-1 text-white">
                {prevStudy ? truncateTitle(prevStudy.title) : 'No Previous'}
              </p>
            </div>
          </button>

          {/* Next */}
          <button
            onClick={handleNext}
            disabled={!nextStudy}
            className={`flex items-center gap-3 group transition-all flex-row-reverse bg-pink-500 py-2 px-4 rounded-xl ${
              nextStudy
                ? 'flex text-pink-600 hover:text-pink-700'
                : 'hidden'
            }`}
          >
            <ChevronRight className="w-6 h-6  text-yellow-400 group-hover:translate-x-1 transition" />
            <div className="text-right">
              <p className="text-md uppercase tracking-wider text-yellow-400">Next</p>
              <p className="font-semibold text-lg line-clamp-1 text-white">
                {nextStudy ? truncateTitle(nextStudy.title) : 'No Next'}
              </p>
            </div>
          </button>
        </div>
      </div>

    
    </div>
  );
};

export default CasestudySingle;