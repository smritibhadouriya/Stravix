// src/pages/Team.jsx
import React, { useEffect, useRef } from 'react';
import Team1 from '../assets/team1.png';
import Team2 from '../assets/team2.png';
import Team3 from '../assets/team3.png';
import Team4 from '../assets/team4.png';
import Team5 from '../assets/team5.png';
import Team6 from '../assets/team6.png';
import Shape from '../assets/shape.png';
import Testimonials from '../Component/Testimonials';
import Ourvalues from '../Component/Ourvalues';
import Ourstory from '../Component/Ourstory';
import { useNavigate, useLocation } from 'react-router-dom';

const Team = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const testimonialsRef = useRef(null);

  // Scroll to Testimonials if hash matches
  useEffect(() => {
    if (location.hash === '#testimonials-section' && testimonialsRef.current) {
      const timer = setTimeout(() => {
        const offset = 80;
        const y = testimonialsRef.current.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [location]);

  const goToContact = () => {
    navigate({ pathname: '/', hash: 'contact-section' });
  };

  return (
    <>
      <div className="min-h-screen bg-white flex justify-center md:pt-10 px-4">
        <div className="flex flex-col items-center space-y-4 md:space-y-4">
          {/* Team Images */}
          <div className="hidden md:flex items-center justify-center gap-4 md:gap-8">
            <img src={Team3} alt="Team 1" className="w-24 h-24 md:w-100 md:h-40 object-contain" />
            <img src={Shape} alt="Shape" className="w-12 h-12 md:w-20 md:h-40 object-contain hidden md:block" />
            <img src={Team4} alt="Team 2" className="w-24 h-24 md:w-100 md:h-40 object-contain" />
          </div>
          <div className="hidden md:flex items-center justify-center gap-4 md:gap-8">
            <img src={Team1} alt="Team 3" className="w-24 h-24 md:w-100 md:h-40 object-contain" />
            <img src={Team2} alt="Team 4" className="w-24 h-24 md:w-100 md:h-40 object-contain" />
          </div>
          <div className="hidden md:flex items-center justify-center gap-4 md:gap-8">
            <img src={Team5} alt="Team 5" className="w-24 h-24 md:w-100 md:h-40 object-contain" />
            <img src={Shape} alt="Shape" className="w-12 h-12 md:w-20 md:h-40 object-contain hidden md:block" />
            <img src={Team6} alt="Team 6" className="w-24 h-24 md:w-100 md:h-40 object-contain" />
          </div>
          <div className="flex md:hidden flex-col items-center space-y-4 mt-2">
            <img src={Team1} alt="Team 1" className="w-60 h-30 object-contain" />
            <img src={Team2} alt="Team 2" className="w-60 h-30 object-contain" />
            <img src={Team3} alt="Team 3" className="w-60 h-30 object-contain" />
            <img src={Team4} alt="Team 4" className="w-60 h-30 object-contain" />
            <img src={Team5} alt="Team 5" className="w-60 h-30 object-contain" />
            <img src={Team6} alt="Team 6" className="w-60 h-30 object-contain" />
          </div>
        </div>
      </div>

      <Testimonials ref={testimonialsRef} goToContact={goToContact} />
      <Ourvalues />
      <Ourstory />
    </>
  );
};

export default Team;