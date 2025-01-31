import React from 'react';
import { GoDotFill } from 'react-icons/go';
import Image from 'next/image';

const Shopify = () => {
  return (
    <div className="w-full mb-12">
      {/* Section Title */}
      <h1 className="text-center text-2xl font-bold mt-4 text-blue-800 mb-10">
        What Shopify Offers!!!!
      </h1>

      {/* Offer Section */}
      <div className="bg-gray-100 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 max-w-7xl">
        {[
          { src: '/cashback 1.png', title: '24/7 Support' },
          { src: '/24-hours-support 1.png', title: 'Fast Support' },
          { src: '/premium-quality 1.png', title: 'Premium Quality' },
          { src: '/free-delivery 1.png', title: 'Free Delivery' },
        ].map((offer, index) => (
          <div
            key={index}
            className="flex flex-col items-center border-2 p-4 rounded-lg shadow-md bg-white"
          >
            <Image src={offer.src} alt={offer.title} width={65} height={65} />
            <h2 className="text-blue-800 font-semibold mt-4">{offer.title}</h2>
            <p className="text-center text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
            </p>
          </div>
        ))}
      </div>

      {/* Features Section */}
      <div className="bg-indigo-100 py-12 mt-12">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl">
          <div>
            <Image src="/sofa.png" alt="Sofa" width={450} height={409} />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-indigo-900 mb-6">
              Unique Features Of Latest & Trending Products
            </h1>
            <ul className="space-y-4">
              {[
                {
                  iconColor: 'text-pink-600',
                  text: 'All frames constructed with hardwood solids and laminates',
                },
                {
                  iconColor: 'text-blue-800',
                  text: 'Reinforced with double wood dowels, glue, screw-nails corner blocks and machine nails',
                },
                {
                  iconColor: 'text-green-400',
                  text: 'Arms, backs, and seats are structurally reinforced',
                },
              ].map((feature, index) => (
                <li key={index} className="flex items-center space-x-4">
                  <GoDotFill className={`w-6 h-6 ${feature.iconColor}`} />
                  <p className="text-gray-700">{feature.text}</p>
                </li>
              ))}
            </ul>
            <button className="mt-8 px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-indigo-600">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* Discount Section */}
      <div className="container mx-auto mt-12 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl font-bold text-indigo-900">
            20% Discount On All Products
          </h1>
          <h2 className="text-pink-700 text-xl mt-2">Eames Sofa Compact</h2>
          <p className="text-blue-800 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
            feugiat habitasse nec, bibendum condimentum.
          </p>
          <ul className="mt-6 space-y-4">
            {[
              {
                iconColor: 'text-pink-600',
                text: 'All frames constructed with hardwood solids and laminates',
              },
              {
                iconColor: 'text-blue-800',
                text: 'Reinforced with double wood dowels, glue, screw-nails corner blocks and machine nails',
              },
              {
                iconColor: 'text-green-400',
                text: 'Arms, backs, and seats are structurally reinforced',
              },
            ].map((item, index) => (
              <li key={index} className="flex items-center space-x-4">
                <GoDotFill className={`w-6 h-6 ${item.iconColor}`} />
                <p className="text-gray-700">{item.text}</p>
              </li>
            ))}
          </ul>
          <button className="mt-8 px-6 py-3 bg-indigo-900 text-white rounded-lg hover:bg-indigo-600">
            Shop Now
          </button>
        </div>
        <div>
          <Image src="/sofa2.png" alt="Discounted Sofa" width={609} height={650} />
        </div>
      </div>

      {/* Full Cover Image */}
      <div className="mt-20">
        <Image src="/full cover.png" alt="Full Cover" width={1920} height={462} />
      </div>

      {/* Icons Section */}
      <div className="flex justify-center mt-12">
        <Image src="/icons.png" alt="Icons" width={904} height={93} />
      </div>

      {/* Blog Section */}
      <div className="mt-12">
        <h1 className="text-center text-2xl font-bold text-blue-800 mb-10">
          Latest Blog
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto max-w-7xl">
          {['/Leatest blog.png', '/Leatest blog 1.png', '/Leatest blog 2.png'].map(
            (src, index) => (
              <Image
                key={index}
                src={src}
                alt={`Blog ${index + 1}`}
                width={370}
                height={493}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Shopify;
