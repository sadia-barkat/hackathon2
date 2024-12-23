import React from 'react'
import Image from 'next/image'
function Hero() {
  return (
    <section className="text-gray-600 hidden md:block body-font">
        <div className="relative  w-[1920px] h-[764px] mt-[80px] flex flex-col md:flex-row items-center bg-[#F2F0FF]  ">
        <div>

        <Image
        className="hidden md:block mb-[375px] object-cover rounded  "
        alt="hero"
        width={387}
        height={387}
        src="/image.png"/>
        </div>
        <div className="space-y-2 px-4 md:px-10">
        <h1 className="title-font sm:text-sm text-pink-500 font-bold text-sm mb-0">
        Best Furniture For Your Castle....
      </h1>
 
      <h1 className="title-font sm:text-wrap text-2xl md:text-3xl mb-4 font-medium text-gray-900">
      New Furniture Collection
      Trends in 2020
      </h1>
      <p className="mb-8 leading-relaxed">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
      in phasellus non in justo.
      </p>
      <div className="flex w-full md:justify-start justify-start items-start">
        <div className="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
          
        </div>
        <button className="inline-flex mr-[350px] text-left text-white bg-indigo-500 border-0 py-3 px-6 focus:outline-none hover:bg-indigo-600 rounded text-medium">
          ShopNow
        </button>
      </div>
      <div className="flex lg:flex-row md:flex-col">
        
      </div>
    </div>

    <div className=" lg:max-w-lg lg:w-full  md:w-1/2 w-5/6">
      <Image
        className="object-cover hidden md:block object-center rounded "
        alt="hero"
        width={629}
        height={629}
        src="/image2.png"/>
        </div>
      <div>
      <Image 
      className='hidden md:block mr-[100px] mb-[550px] ' 
      height={130}
      width={130}
      src="/image3.png"
      alt="discount" />
      
      </div>
    </div>      
</section>

  )
}

export default Hero
