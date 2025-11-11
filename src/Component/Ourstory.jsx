import React from 'react'
import Image1 from '../assets/image1.png'
import Image2 from '../assets/image2.png'
import Image3 from '../assets/test7.png'

const Ourstory = () => {
  return (
    <div className=' px-4 md:px-35 py-10 lg:mb-4'> 
        <div className="border-b border-black w-full pb-2 mb-10">
          <h1 className="font-bold text-3xl md:text-5xl text-gray-800">Our Story</h1>
        </div>
        {/* Section 1: Left Text + Right Image */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              It all began with a simple idea: to create something meaningful that touches lives. 
              Founded in 2020, our journey started in a small room with big dreams. 
              We believed in the power of connection, creativity, and care — values that still drive us today.
            </p>
          </div>
          <div className="order-1 md:order-2 rounded-2xl">
            <img
              src={Image1}
              alt="Our beginning"
              className="w-full h-auto rounded-2xl  object-cover"
            />
          </div>
        </div>
        {/* Section 2: Left Image + Right Text */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-1 rounded-2xl">
            <img
              src={Image2}
              alt="Our growth"
              className="w-full h-auto rounded-2xl  object-cover"
            />
          </div>
          <div className="order-2">
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Over the years, we've grown from a passionate team of 3 to a family of over 50 dedicated individuals. 
              Every milestone, every challenge, and every smile from our community has shaped who we are. 
              Today, we continue to innovate, inspire, and make a difference — one step at a time.
            </p>
          </div>
          
        </div>

        
      
    </div>
  )
}

export default Ourstory
