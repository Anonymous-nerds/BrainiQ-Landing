import React from 'react'
import "./FaqPage.css"

const FaqPage = () => {
  return (
    <div className='flexCenter hero-container text-10xl box'>
        <div className='text-left p-10'>
            <div className='hero-title'>
                <span className='flex mt-20 h-8 text-sm font-bold'>FAQ</span>
            </div>

            <div className='flexColStart hero-des'>
                <span>How we bring unparalleled access to in-depth insights about <br /> your customers.</span>
            </div>

            <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-blue-500 to-blue-800 py-3 px-4 mx-3 rounded-full hover-white">
          Request a Demo
        </a>
             </div>
        </div>
        <div className='flexCenter hero-right'>
            <div className='container'>
                <div className='line mt-10 flex '>
                <h2>Where do they get their data</h2>
                <span></span>
                </div>

                <div className='line mt-10'>
                <h2>Where do they get their data</h2>
                <span></span>
                </div>

                <div className='line mt-10'>
                <h2>Where do they get their data</h2>
                <span></span>
                </div>

                <div className='line mt-10'>
                <h2>Where do they get their data</h2>
                <span></span>
                </div>
            </div>
        </div>
    </div>



  );
};

export default FaqPage;