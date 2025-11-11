// src/pages/Home.jsx
import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import OurClients from '../Component/OurClients';
import Services from '../Component/Services';
import CaseStudy from '../Component/CaseStudy';
import Niche from '../Component/Niche';
import Contact from '../Component/Contact';
import Faqs from '../Component/Faqs';
import Banner from '../Component/Banner';

const Home = () => {
  const location = useLocation();
  const contactRef = useRef(null);

  const scrollToContact = () => {
    if (contactRef.current) {
      const offset = 80; // Height of fixed navbar
      const elementPosition = contactRef.current.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    if (location.hash === '#contact-section') {
      // Small delay to ensure DOM is rendered
      const timer = setTimeout(scrollToContact, 100);
      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <div>
      <Banner />
      <OurClients />
      <Services />
      <Niche />
      <CaseStudy />
      <Faqs />
      <Contact ref={contactRef} id="contact-section" />
    </div>
  );
};

export default Home;