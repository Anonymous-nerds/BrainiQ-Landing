import React from 'react'
import Logo from "/images/logoBiQ.png"
import Logo2 from "/images/logoBiQ2.png"
import iconImg1 from "/images/facebook.png"
import iconImg2 from "/images/ig.png"
import iconImg3 from "/images/linkedin.png"
import {features} from "../constants/index.jsx"
import "./FooterPage.css"

const FooterPage = () => {
  return (
    <div className='flex flex-col items-center relative min-h-[800px] rounded'>
        <div className='text-center footer-title'>
            <h2 className='font-bold text-10xl sm:text-5xl lg:text-6xl  lg:mt-20 mainText'>Let's get you started</h2>
            <p className='mt-10 text-lg text-center text-white max-w-4xl'>
              Access unparalleled in-depth insights so you can make data-driven decisions that work.
            </p> 
            <button className = "banner-btn2">
              <p>Request a Demo</p>
              <i className = "fas fa-chevron-right"></i>
            </button>
        </div>
        <div className = "links-container">
            <span className = "linksCont">
              <img src = {Logo2}></img>
              <p>Transforming Education, One Student at a Time</p>
              <span className = "social-cont">
                <a href = "#">
                  <img src = {iconImg1}></img>
                </a>
                 <a href = "#">
                  <img src = {iconImg2}></img>
                </a>
                 <a href = "#">
                  <img src = {iconImg3}></img>
                </a>
              </span>
              <p>© Copyright 2024 BrainiQ. All rights reserved.</p>
            </span>
            <span className = "linksCont">
              <p>Solution</p>
              {features.map((feature, index) => (
                <a key = {index} href = "#">{feature.text}</a>
              ))}
            </span>
            <span className = "linksCont">
              <p>Company</p>
              <a href = "#">About Us</a>
              <a href = "#">Contact Us</a>
            </span>
            <span className = "linksCont">
              <p>Resources</p>
              <a href = "#">FAQs</a>
              <a href = "#">Blog</a>
              <span className = "lowerLinkCont">
                <a href = "#">Privacy Policy</a>
                <span className = "dots"></span>
                <a href = "#">Terms of Service</a>
                <span className = "dots"></span>
              </span>
            </span>
        </div>
    </div>
  )
}

export default FooterPage