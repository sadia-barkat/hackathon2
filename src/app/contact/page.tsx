import React from 'react'

const Contact = () => {
  return (
    <div className='w-[1920px] '><div className='bg-indigo-50 mt-16'>
      <h1 className='text-indigo-900 font-bold text-2xl ml-[400px] pt-24'>My Account</h1>
      <div className='inline-flex ml-[400px]'><h2>Home .</h2>
      <h2>Pages .</h2>
      <h2 className='text-pink-600'>My Account</h2></div>
      <div className='h-[476px] w-[544px] flex flex-col  bg-white  outline ml-[688px] mt-[50px]'><h1 className=' text-center text-2xl font-bold pt-10'>Log In</h1>
      <h2 className=' bg-white text-center text-sm font-thin pt-2' >Please login using account detail below.</h2>
      <input placeholder="Email Address" className=" w-[317px] h-[40px] mt-10 ml-20 bg-white border-black bg-opacity-50 rounded border  "></input>
      <input placeholder="Password" className="  w-[317px] h-[40px] mt-10 ml-20 bg-white border-black bg-opacity-50 rounded border  "></input>
      <h2 className=' bg-white ml-20 text-sm font-thin pt-2' >Forgot Your Password?</h2>
      <button className="w-[317px] h-[40px] ml-20 text-center text-white bg-pink-500 border-0 mt-7 focus:outline-none hover:bg-pink-700 rounded text-medium">
          Sign In
        </button></div>
        <div className='w-[1920px] h-[462px] flex items-center'>
          <img
            className="h-[93px] w-[904px] mt-10 ml-[500px]  "
            src="icons.png"
            alt="content"
          />
          </div>
    </div>
    </div>
  )
}
export default Contact
