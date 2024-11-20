import React from 'react'
import "./BlogPage.css"
import { pictures } from "../constants"

const BlogPage = () => {
  return (
    <section className='r-wrapper p-20'>
        <div className='paddings r-container'>
            <div className='flexColStart'>
                <span className='flex mt-20 bg-neutral-200  text-blue-500 rounded-md h-8 text-sm font-medium px-3 py-2 uppercase'>Our Blog</span>
                <span className='primaryText'>Featured blogs</span>
            </div>
        </div>
        <div className='flex fles-wrap mt-10 lg:mt-20'>
            {pictures.map((picture, index) => (
            <div key={index} className='w-full sm:1-2 lg:w-1/3'>
                <div className='flex'>
                    <div className=' bg-neutral rounded-md flex mx-6 h-40 w-200 p-2 
                     justify-center items-center'>
                    <img src={picture.image} alt="Pictures" /> 
                    </div>
                    </div>
                    <div className=''>
                        <h5 className='mt-8 mb-6 text-xl'>{picture.description}</h5>
                    </div>

                
            </div>
            ))}

        </div>
        
           
    </section>
  )
}

export default BlogPage