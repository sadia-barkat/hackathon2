import React from "react";
import { IoIosSearch } from "react-icons/io";
import { BsEnvelope } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";
import Link from 'next/link';

const Lowerheader = () => {
  return (
    <header className="  w-[1920px] flex md:items-center lg:items-start md:flex-row md:flex-nowrap sm:flex-row flex-wrap flex-col ">
      <div className=" flex-shrink-0 md:mx-0 sm:mx-0 mx-auto text-center md:flex-row ">
        <div className= " flex items-center justify-start w-[1920px]  bg-violet-700 text-white text-justify  ">
        <button><BsEnvelope  className="ml-[377px] "/>
        </button>
        <Link href="/mail" className="  ml-[26px]">mhahsanul@gmail.com </Link>
        <FiPhoneCall className="  ml-[180px]"/>
        <h2 className=" mr-[400px] ">(12345)67890 </h2> 
        <h2 className="ml-[520px]flex justify-start text-white font-serif">English</h2>
        <IoIosArrowDown className="flex justify-start " />
        <Link href="/USD" className="ml-[65px] flex justify-start  text-white font-serif">USD</Link>
        <IoIosArrowDown className="flex justify-start" />
        <Link href="/login" className="ml-[55px] flex justify-start  text-white font-serif">Login</Link>
        <FiUser className="flex justify-start " />
        <Link href="/wishlist" className="ml-[55px] flex justify-center  text-white font-serif">Wishlist</Link>
        <CiHeart className=" " />
        < LuShoppingCart className="ml-[42px] " />

        </div>
  <div className="w-[1300px] h-[40px] ml-[371px] mt-[20px] mx-auto flex flex-wrap p-2   items-center">
    <a className="flex title-font font-extrabold items-center text-gray-900 mb-4 md:mb-0">
      <h1 className="mx-7  md:text-4xl size-34px">Hekto</h1>
    </a>
    <nav className="inline-grid md:flex ml-auto mr-auto  flex-wrap  text-base justify-center">
      <Link href="/" className="mr-16 hover:underline text-pink-700 ">Home</Link>
      <Link href="/pages" className="mr-16 hover:underline text-gray-900 ">Pages</Link>
      <Link href="/products" className="mr-16 hover:underline text-gray-900 ">Products</Link>
      <Link href="/blog" className="mr-16 hover:underline text-gray-900 ">Blog</Link>
      <Link href="/shop" className="mr-16 hover:underline text-gray-900 ">Shop</Link>
      <Link href="/contact" className="mr-16 hover:underline text-gray-900 ">Contact</Link>
      <input placeholder="search" className="inline-flex  w-[317px] h-[40px]  bg-white border-black bg-opacity-50 rounded border  "></input>
    <button><IoIosSearch className= ' bg-pink-600 text-white  w-[51px] h-[40px]' /></button>
    </nav>
  </div>
  </div>
</header>
  )
}
export default Lowerheader

