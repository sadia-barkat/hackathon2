import React from 'react'
import Image from 'next/image'

const Pages = () => {
  return (
    <section className="text-gray-600 body-font ">
  <div className="container px-5 py-24 mx-auto ml-[400px]">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h2 className="text-3xl font-extrabold title-font text-violet-900 tracking-widest">
          Hekto
        </h2>
        <h1 className="text-gray-900 text-xl title-font font-medium mb-4">
        New Furniture Collection
        Trends in 2020
        </h1>
        <div className="flex mb-4">
          <a className="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">
            Description
          </a>
          <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">
            Reviews
          </a>
          <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">
            Details
          </a>
        </div>
        <p className="leading-relaxed mb-4">
          Fam locavore kickstarter distillery. Mixtape chillwave tumeric
          sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo juiceramps
          cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine
          tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean.
        </p>
        <div className="flex border-t border-gray-200 py-2">
          <span className="text-gray-500">Color</span>
          <span className="ml-auto text-gray-900">Brown</span>
        </div>
        <div className="flex border-t border-gray-200 py-2">
          <span className="text-gray-500">Size</span>
          <span className="ml-auto text-gray-900">Medium</span>
        </div>
        <div className="flex border-t border-b mb-6 border-gray-200 py-2">
          <span className="text-gray-500">Quantity</span>
          <span className="ml-auto text-gray-900">4</span>
        </div>
      </div>
      <Image
        alt="ecommerce"
        className="lg:w-1/2  lg:h-auto object-cover object-center rounded"
        height={68}
        width={600}
        src="/sofa2.png"
      />
    </div>
  </div>
</section>

  )
}

export default Pages
