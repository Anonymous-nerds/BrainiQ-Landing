import React from 'react'
import CountUp from "react-countup";
import "./WhyPage.css"

const WhyPage = () => {
  return (
    <div className="flex flex-col items-center relative mt-0 border-b min-h-[800px] rounded-3xl banner3">
       <div className="text-center banner-title">
        <span className="flex mt-20 bg-neutral-200  text-blue-500 rounded-md h-8 text-sm font-medium px-3 py-2 uppercase bubble">
            <p>Why Solution</p>
        </span>  
        </div>
        <div className='text-center'>
        <h2 className=' font-bold text-10xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide title3'>We're here to <br />
            <span className='bg-gradient-to-r text font-bold from-yellow-500 to-yellow-800 text-transparent bg-clip-text pt-10'> 
                 {" "}change the game 
            </span>
        </h2>
        <p className='mt-10 text-lg text-center text-white max-w-4xl mini-title'>We are venture-backed with the latest customer analytics solutions technology
            to create <br /> long-lasting growth and impact for your business.
        </p> 
        <div className="flex justify-center my-10">
            <a
              href="#"
              className="banner-btn"
            >
              Learn More About BrainQ
            </a>
         </div>
        </div>

        <div className='flexCenter stats'>
            <div className="flexColStart  font-semibold stat">
                <span className=' numberText'>
                    <CountUp start={1} end={94} duration={4}/>
                    <span>M+</span>
                    </span>
                    <span className='secondaryText'>Premium Product</span>
                
            </div>

        

        <div className='flexColStart  font-semibold stat'>
                <span className='numberText'>
                    <CountUp start={100} end={400} duration={4}/>
                    <span>+</span>
                    </span>
                    <span className='secondaryText'>Happy Customers</span>
            </div>

            <div className='flexColStart font-semibold stat'>
                <span className='numberText'>
                    <CountUp  end={82} duration={4}/>
                    <span>%</span>
                    </span>
                    <span className='secondaryText'>Award Winning</span> 
            </div>
        </div>
    </div>
  );
};

export default WhyPage