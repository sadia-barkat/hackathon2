import React from 'react'
import Image from 'next/image'

const Featured  = () => {
  return (
  <div className="container px-5  mx-auto justify-center">
    <div className="flex flex-wrap items-center  mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className=" ml-[750px] sm:text-2xl font-bold title-font text-blue-800 mt-60 md:mt-20 ;">
          Featured Product
        </h1>
    </div>
    <div className=" ml-[550px] h-[261px] md:ml[300] inline-flex mt-16">
      <div className=" xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <Image
            className=" rounded  object-fill mb-6"
            height={40}
            width={200}
            src="/pro 1.png"
            alt="content"/>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
          Cantilever chair
          </h2>
          <h3 className=" tracking-widest text-indigo-700 text-xs font-medium title-font">
            Code - Y523201
          </h3>
          <p className=" text-indigo-700 leading-relaxed text-base">
            $ 42.00
          </p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-indigo-900 h-[280px] p-6 rounded-lg">
          <Image
            className="bg-white object-center object-fill mb-6"
            height={38}
            width={200}
            src="/pro 2.png"
            alt="content"/>
          <h2 className="text-lg text-white font-medium title-font mb-4">
          Cantilever chair
          </h2>
          <h3 className=" tracking-widest text-white text-xs font-medium title-font">
            Code - Y523201
          </h3>
          <p className=" text-white leading-relaxed text-base">
            $ 42.00
          </p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 ">
          <Image
            className="rounded object-fill mb-6"
            height={40}
            width={200}
            src="/pro 3.png"
            alt="content"/>
          
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
          Cantilever chair
          </h2>
          <h3 className=" tracking-widest text-indigo-700 text-xs font-medium title-font">
            Code - Y523201
          </h3>
          <p className=" text-indigo-700 leading-relaxed text-base">
            $ 42.00
          </p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 h-[280px] rounded-lg">
          <Image
            className="rounded  object-fill mb-6"
            height={40}
            width={200}
            src="/pro4.png"
            alt="content"/>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
          Cantilever chair
          </h2>
          <h3 className=" tracking-widest text-indigo-700 text-xs font-medium title-font">
            Code - Y523201
          </h3>
          <p className=" text-indigo-700 leading-relaxed text-base">
            $ 42.00
          </p>
        </div>
      </div>
      </div>
      <div className='ml-[550px] inline-flex w-[1200px] mt-10 '>
      <div className="ml-[90px] mt-[89px] h-1 w-5 bg-pink-600 rounded" />
      <div className="ml-[90px] mt-[89px] h-1 w-5 bg-pink-300 rounded" />
      <div className="ml-[90px] mt-[89px] h-1 w-5 bg-pink-300 rounded" />
      <div className="ml-[90px] mt-[89px] h-1 w-5 bg-pink-300 rounded" />
      </div>
    </div>
  </div>
  )
}

export default Featured
