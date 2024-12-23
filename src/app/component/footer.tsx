"use client";
import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";

const Upperfooter = () => {
  return (
    <footer className="text-gray-600 w-[1920px] body-font ml-1 bg-violet-100 ">
      
<div className="container px-10 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className=" flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        
        <span className=" text-3xl font-bold">Hekto</span>
      </a>
      <form className="max-w-md mx-auto">
  <label
    htmlFor="default-search"
    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
  >
    Search
  </label>
  <div className="relative">
    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
    </div>
    <input
      type="search"
      id="default-search"
      className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 text-left  bg-gray-50 focus:ring-pink-500 focus:border-pink-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
      placeholder="Enter Email Here"
    />
    <button
      type="submit"
      className="text-white absolute end-2.5 bottom-2.5 bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800"
    >
      Sign Up
    </button>
  </div>
</form>
<br></br>
      <p className="mt-2 text-xs  text-gray-500">
        Contact Info
      </p>
      <p className="mt-2 text-sm text-gray-500">
      17 Princess Road, London, Greater London NW1 8JR, UK
      </p>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-semibold text-gray-900 tracking-widest text-sm mb-3">
          Categories
        </h2>
        <nav className="list-none text-xs mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">Laptop & Computer</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Cameras and Photography</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Smart Phones and Tablets</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Video Games and Consoles</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Waterproof Headphones</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-semibold text-gray-900 tracking-widest text-sm mb-3">
          Customer Care
        </h2>
        <nav className="list-none text-xs  mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">My Account</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Discount</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Returns</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Order History</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Order Tracking</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-semibold text-gray-900 tracking-widest text-sm mb-3">
          Pages
        </h2>
        <nav className="list-none text-xs mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">Blog</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Browse shop</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Category</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Pre Built Pages</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Visual Composer Elements</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Woo Commerce Pages</a>
          </li>
          
        </nav>
      </div>
    </div>
  </div>
  <div className="bg-gray-100">
    <div className="container mx-auto mb-0 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-500 text-sm text-center sm:text-left">
      ©Webecy - All Rights Reserved
       
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a className="text-white bg-purple-900 rounded-full ">
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
          </svg>
        </a>
        <a className="ml-3 text-white bg-purple-900 rounded-full">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
          </svg>
        </a>
        <a className="ml-3 text-white bg-purple-900 rounded-full ">
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
          </svg>
        </a>
        
        
      </span>
    </div>
  </div>
</footer>

  )
}
export default Upperfooter
