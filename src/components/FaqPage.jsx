import React from 'react'
import { faqs } from "../constants"
import "./FaqPage.css"

const FaqPage = () => {
  return (
    <div className='mt-0 border-b min-h-[400px] faqCont'>
      <div className = "roundeds">
        <span className = "left-sect">
            <p>FAQs</p>
            <p>How we bring unparalleled access to in-depth insights about your customers.</p>
            <button className = "banner-btn">
              <p>See More</p>
              <i className = "fas fa-chevron-right"></i>
            </button>
        </span>
        <span className = "right-sect">
          {faqs.map((faq,index) => (
            <div key = {index} className = "question-cont">
              <span className = "questCont">
                <i className = "fas fa-plus"></i>
                <p>{faq.question}</p>
              </span>
            </div>
          ))}

        </span>
      </div>
    </div>
  )
}

export default FaqPage