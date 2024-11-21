import React from 'react'
import CountUp from "react-countup";
import "./WhyPage.css"

const WhyPage = () => {
  return (
    <div className="flex flex-col items-center relative mt-0 border-b bg-blue-900 min-h-[800px] round">
       <div className="text-center">
        <span className="flex mt-20 bg-neutral-200  text-blue-500 rounded-md h-8 text-sm font-medium px-3 py-2 uppercase">
            Why Solution</span>  
        </div>
        <div className='text-center'>
        <h2 className=' font-bold text-10xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide'>We're here <br /> to 
            <span className='bg-gradient-to-r text font-bold from-yellow-500 to-yellow-800 text-transparent bg-clip-text pt-10'> 
                 {" "}change the game </span></h2>
                <p className='mt-10 text-lg text-center text-white max-w-4xl'>
                We are venture-backed with the latest customer analytics solutions technology
                to create <br /> long-lasting growth and impact for your business.
                 </p> 
                 <div className="flex justify-center my-10">
                 <a
          href="#"
          className="bg-gradient-to-r from-white to-white text-blue-900 py-3 px-4 mx-3 rounded-full hover-white"
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