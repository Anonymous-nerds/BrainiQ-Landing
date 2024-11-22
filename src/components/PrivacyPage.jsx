import React from 'react'
import "./PrivacyPage.css"
import { pictures } from "../constants"

const PrivacyPage = () => {
  return (
    <section className='r-wrapper p-20 banner5'>
        <div className='paddings r-container'>
            <div className='flexColStart banner-title'>
                <span className='flex mt-20 bg-neutral-200  text-blue-500 rounded-md h-8 text-sm font-medium px-3 py-2 uppercase bubble'>
                    <p>Privacy Page</p>
                </span>
                <span className='primaryText '>Champions of 
                Data Privacy & Security</span>
            </div>
        </div>
        <div className='flex fles-wrap mt-10 lg:mt-20 blogCont'>
            {pictures.map((picture, index) =>  
                <div key = {index} className = "blog-container">
                    <span className = "blog-image">
                        <img src = {picture.image}/>
                    </span>
                    <span className = "blog-content">
                        <p>{picture.description}</p>
                    </span>
                </div> 
            )}

        </div>
        
           
    </section>
  )
}

export default PrivacyPage