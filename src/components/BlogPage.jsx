import React from 'react'
import "./BlogPage.css"
import { pictures } from "../constants"

const BlogPage = () => {
  return (
    <section className='r-wrapper p-20'>
        <div className='paddings r-container banner4'>
            <div className='flexColStart banner-title'>
                <span className='flex mt-20 bg-neutral-200  text-blue-500 rounded-md h-8 text-sm font-medium px-3 py-2 uppercase bubble'>
                   <p>Our Blog</p>
                </span>
                <span className='primaryText'>Featured blogs</span>
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

export default BlogPage