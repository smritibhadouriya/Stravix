import React from 'react';
import Phone from '../assets/donut-website.mp4';
import Large from '../assets/donut-website.mp4';

const Banner = () => {
  return (
    <div className='min-h-screen relative'>
      <video 
        className='absolute top-0 left-0 w-full h-full object-cover'
        autoPlay
        loop
        muted
        playsInline
      >
        <source 
          src={Phone} 
          type='video/mp4' 
          media='(max-width: 767px)'
        />
        <source 
          src={Large} 
          type='video/mp4' 
          media='(min-width: 768px)'
        />
      </video>
      <div className='absolute inset-0 bg-black/30'></div>
    </div>
  );
};

export default Banner;