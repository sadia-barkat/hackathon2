import React from "react";
import { IoIosSearch, IoIosArrowDown } from "react-icons/io";
import { BsEnvelope } from "react-icons/bs";
import { FiPhoneCall, FiUser } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";
import Link from "next/link";

const Lowerheader = () => {
  return (
    <header className="bg-violet-700 text-white">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-2 text-sm lg:px-10">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <BsEnvelope />
            <Link href="/mail">mhahsanul@gmail.com</Link>
          </div>
          <div className="flex items-center space-x-2">
            <FiPhoneCall />
            <span>(12345)67890</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span>English</span>
            <IoIosArrowDown />
          </div>
          <div className="flex items-center space-x-2">
            <Link href="/USD">USD</Link>
            <IoIosArrowDown />
          </div>
          <div className="flex items-center space-x-2">
            <Link href="/login">Login</Link>
            <FiUser />
          </div>
          <div className="flex items-center space-x-2">
            <Link href="/wishlist">Wishlist</Link>
            <CiHeart />
          </div>
          <LuShoppingCart />
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-white text-gray-900">
        <div className="container mx-auto flex items-center justify-between px-4 py-4 lg:px-10">
          {/* Logo */}
          <h1 className="text-2xl font-extrabold text-pink-700">Hekto</h1>

          {/* Navigation Links */}
          <nav className="hidden lg:flex space-x-8">
            <Link href="/" className="hover:underline text-pink-700">Home</Link>
            <Link href="/page" className="hover:underline">Pages</Link>
            <Link href="/blog" className="hover:underline">Blog</Link>
            <Link href="/shop" className="hover:underline">Shop</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>

          </nav>

          {/* Search Bar */}
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search"
              className="w-[250px] lg:w-[317px] h-[40px] border border-gray-300 rounded-l px-4 text-gray-700"
            />
            
            <button className="w-[40px] h-[40px] bg-pink-600 text-white rounded-r flex items-center justify-center">
              <IoIosSearch />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Lowerheader;


