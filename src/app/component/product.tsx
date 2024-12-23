import React from 'react'
import Image from 'next/image'

const Product = () => {
  return (
    <div className="container px-5 ">
    <div className=" w-[1200px] mb-10">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
      <h1 className="ml-[780px]  w-[1200px] sm:text-2xl font-bold text-blue-800 ;">
          Latest Products
        </h1>
    </div>

    <div className='ml-[180px]  grid text-center md:inline-flex md:ml-[500px] w-[1200px] mt-10'>
      <a className="ml-[90px] mt-[20px]  hover:cursor-pointer text-pink-600" >New Arrival</a>
      <a className="ml-[90px] mt-[20px] hover:cursor-pointer text-black" >Best Seller</a>
      <a className="ml-[90px] mt-[20px] hover:cursor-pointer text-black" >Featured</a>
      <a className="ml-[90px] mt-[20px] hover:cursor-pointer text-black" >Special Offer</a>
      </div>
    <div className="inline-flex ml-[300px] w-[1200px] text-center mt-10">
      <div className=" xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg hidden md:block">
          <Image
            className=" rounded object-fill mb-6"
            height={40}
            width={300}
            src="/Frame1.png"
            alt="content"/>
          <h2 className="text-sm text-gray-900 font-medium title-font mb-4">
          Comfort Handy Craft
          </h2>
          <h3 className="tracking-widest text-indigo-700 text-sm font-bold title-font">
            <s>$64.00</s>
          </h3>
          <h2 className=" text-pink-700 text-sm leading-relaxed ">
            $ 42.00
          </h2>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg hidden md:block">
          <Image
            className="rounded h-[230px]  object-fill mb-6"
            height={40}
            width={300}
            src="/Frame2.png"
            alt="content"/>
            <h2 className="text-sm  font-medium title-font mb-4">
          Comfort Handy Craft
          </h2>
          <h3 className="tracking-widest  text-indigo-700 text-sm font-bold title-font">
          <s>$64.00</s>
          </h3>
          <h2 className=" text-pink-700 text-sm ml-3">
            $ 42.00
          </h2>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg hidden md:block">
          <Image
            className="rounded h-[230px] object-fill mb-6"
            height={40}
            width={300}
            src="/Frame5.png"
            alt="content"
          />
          <h2 className=" text-sm text-gray-900 font-medium title-font mb-4">
          Comfort Handy Craft
          </h2>
          <h3 className="tracking-widest text-indigo-700 text-sm font-bold title-font">
          <s>$64.00</s>
          </h3>
          <h2 className=" text-pink-700 text-sm ml-3 leading-relaxed">
            $ 42.00
          </h2>
        </div>
    </div>
      
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg hidden md:block">
          <Image
            className="rounded object-fill mb-6"
            height={40}
            width={300}
            src="/Frame4.png"
            alt="content"
          />
          <h2 className=" text-sm text-gray-900 font-medium title-font mb-4">
          Comfort Handy Craft
          </h2>
          <h3 className="tracking-widest text-indigo-700 text-sm font-bold title-font">
          <s>$64.00</s>
          </h3>
          <h2 className=" text-pink-700 text-sm ml-3 leading-relaxed">
            $ 42.00
          </h2>
        </div>
    </div>
  </div>
  </div>
  </div>
  )
}

export default Product
