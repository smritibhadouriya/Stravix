// src/Component/Testimonials.jsx
import React from 'react';
import Test1 from '../assets/test.png';
import Test2 from '../assets/test2.png';
import Test3 from '../assets/test3.png';
import Test4 from '../assets/test4.png';
import Test5 from '../assets/test5.png';
import Test6 from '../assets/test6.png';
import Test7 from '../assets/test7.png';

const testimonials = [
  { id: 1, img: Test1 },
  { id: 2, img: Test2 },
  { id: 3, img: Test3 },
  { id: 4, img: Test4 },
  { id: 5, img: Test5 },
  { id: 6, img: Test6 },
  { id: 7, img: Test7 },
];

const Testimonials = React.forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      id="testimonials-section"
      className="py-16 bg-white px-4 md:px-8 lg:px-16"
      {...props}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4 pb-4 border-b border-black">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Testimonials
          </h2>
          <button
            onClick={props.goToContact}
            className="px-6 py-3 bg-pink-600 text-white font-medium rounded-full hover:bg-pink-700 transition-colors duration-300 shadow-md"
          >
            Call Us
          </button>
        </div>

        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-6 py-4 min-w-max snap-x snap-mandatory">
            {testimonials.map((t) => (
              <div key={t.id} className="snap-center shrink-0">
                <img
                  src={t.img}
                  alt={`Testimonial ${t.id}`}
                  className="w-64 h-40 md:h-100  rounded-lg object-cover shadow-md"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-6 md:hidden">
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-pink-300"
                style={{ opacity: i === 0 ? 1 : 0.4 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

export default Testimonials;