import React from 'react';
import Image from 'next/image';

function Hero() {
  return (
    <section className="text-gray-600 body-font bg-[#F2F0FF]">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-5 md:px-10 py-10">
        {/* Left Section */}
        <div className="flex flex-col space-y-6 md:w-1/2 w-full text-center md:text-left">
          <h1 className="text-pink-500 font-bold text-sm uppercase">
            Best Furniture For Your Castle
          </h1>
          <h2 className="text-2xl md:text-4xl font-medium text-gray-900 leading-snug">
            New Furniture Collection Trends in 2020
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
            adipiscing in phasellus non in justo.
          </p>
          <button className="inline-flex items-center w-[200px] text-white bg-indigo-500 border-0 py-3 px-6 focus:outline-none hover:bg-indigo-600 rounded text-medium">
            Shop Now
          </button>
        </div>

        {/* Right Section */}
        <div className="relative flex justify-center items-center md:w-1/2 w-full mt-10 md:mt-0">
          {/* Background Decorative Image */}
          <Image
            className="absolute top-0 left-0  md:-translate-x-16 md:translate-y-12 hidden md:block"
            height={130}
            width={130}
            src="/image3.png"
            alt="Decorative Discount"
          />
          {/* Main Hero Image */}
          <Image
            className="relative z-10 left-10 object-cover rounded"
            alt="Hero"
            width={629}
            height={629}
            src="/image2.png"
          />
        
        </div>
      </div>
    </section>
  );
}

export default Hero;
