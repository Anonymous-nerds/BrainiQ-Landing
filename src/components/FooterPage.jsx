import React from 'react'
import "./FooterPage.css"

const FooterPage = () => {
  return (
    <div className='flex flex-col items-center w-full relative border-b bg-blue-900 min-h-[800px] rounded'>
        <div className='text-center'>
            <h2 className='font-bold text-10xl sm:text-5xl lg:text-6xl  lg:mt-20 mainText'>Let's get you started</h2>
            <p className='mt-10 text-lg text-center text-white max-w-4xl'>
            Access unparalleled in-depth insights so you can make data-driven decisions that work.
                 </p> 
        </div>
        <div className="flex justify-center my-10">
                 <a
          href="#"
          className="bg-gradient-to-r from-white to-white text-blue-900 py-3 px-4 mx-3 rounded-full hover-white font-semibold black"
        >
          Request a Demo
        </a>
                 </div>
    </div>
  )
}

export default FooterPage