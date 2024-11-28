import React from "react";
import Nav from "../../components/Nav";
import heroImg from "../../assets/heroImg.jpg"
import image2 from "../../assets/hImage.jpg"
import Footer from "../../components/FooterPage"
import './About.css'
import { BookCheckIcon, Calendar1, CalendarCheck2, Captions, ScanText, SearchCheckIcon } from "lucide-react";
const About = () => {
  return (
    <div>
      <div>
        <Nav />
        <div className="max-w-7xl mx-auto pt-20 px-6"></div>
      </div>
      <div className="flex flex-col items-center mt-4 lg:mt-10">
        <h2 className="text-3xl sm:text-6xl lg:text-6xl text-center font-medium tracking-wide text-neutral-500">
          About BrainiQ
        </h2>
         <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
            Learning should be accessible and empowering for everyone, regardless of challenges or individual differences. BrainiQ is designed specifically to support individuals with special needs, offering personalized, interactive, and compassionate assistance throughout their educational journey.
        </p>
        <div className="flex flex-wrap justify-center">
        <div className="p-2 w-full lg:w-3/5 ">
            <img src={heroImg} alt="" />
        </div>
       </div>
      </div>


      <div className="flex space-y-12 justify-center items-center mt-7">
        <div className="items-center text-cont">
          <div className = "img-container">
            <div className = "banner-text">
                <h2>What is BrainiQ ?</h2>
                <p><b>BrainiQ</b> is an AI-powered study partner that assists individuals with special needs in their educational journey.
                  Our advanced AI provides features such as text-to-speech, speech-to-text, summarization, and goal setting study plans.</p>
                 <p> BrainiQ adapts to each user's unique learning style, pace, and preferences. It provides tools to break down complex concepts,
                  suggest tailored resources, and offer encouragement every step of the way. Whether it's practicing communication skills, solving
                  equations, or organizing study materials, this app is your dedicated companion in achieving academic success.</p>
            </div>
          </div>
          <div className = "img-container">
            <div className = "banner-text">
                <h2>Why BrainiQ ?</h2>
                <p>Creating software for individuals with special needs is not just a step toward innovation; it’s a moral imperative.</p>
                <p>Education is a fundamental right, but traditional learning methods often fail to address the diverse needs of learners with physical, cognitive, or emotional challenges.
                </p>
                <p> Many individuals with special needs face significant challenges in their education,
                    including difficulties with reading, writing, and organizing study materials. Traditional
                    educational tools are often not flexible enough to cater to diverse learning styles. The
                    lack of personalized, accessible study solutions limits the educational potential for these
                    individuals. BrainiQ seeks to address these challenges by developing an AI-powered
                    study partner that can support various learning needs, providing an adaptive and
                    accessible tool to enhance study efficiency and engagement</p>
                  <p>BrainiQ bridges the gap by offering assistive features and personalized learning experiences that adapt to their unique challenges, ensuring no one is left behind.</p>
                <p>Families and educators supporting individuals with special needs often face significant stress and resource limitations. An AI-powered solution eases their burden by acting as a reliable and consistent learning assistant, supplementing their efforts.</p>
            </div>
          </div>
        </div>
      </div>

      {/*<div className="flex p-8 space-y-12 justify-center items-center mt-7">
        <div className="space-y-4 items-center">
          <h2 className="text-4xl font-bold text-neutral-500 justify-center items-center ">What is BrainiQ?</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae in, nemo tempore velit voluptates voluptatum voluptas optio maxime, placeat minima aspernatur illum commodi illo accusantium perspiciatis esse, temporibus error necessitatibus.
          </p>
          <p className="text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt ipsam magni neque eius modi necessitatibus aspernatur aut, nobis eos inventore tempore debitis sint sequi reprehenderit, qui voluptate consequatur laboriosam numquam nihil repellendus error earum, iste explicabo corporis! Asperiores perferendis quas veniam blanditiis quasi, ad reiciendis dicta sunt reprehenderit, sint sed.
          </p>

          <h3 className="text-4xl font-bold text-neutral-500">Why BrainiQ?</h3>
          <p className="text-gray-600">
            <strong>Problem Solved:</strong> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae veritatis adipisci eum perspiciatis nobis quos tempora dignissimos, consequuntur asperiores quo ipsam ut illum? Maxime veritatis, commodi atque excepturi, adipisci perferendis reiciendis, tenetur maiores possimus fugit quos officia perspiciatis ullam illum.
          </p>
          <p className="text-gray-600">
            <strong>Impact:</strong> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil amet consequatur cupiditate nulla voluptates quia eligendi omnis nisi consectetur odio! Vitae amet deleniti porro sit, corporis sunt necessitatibus dolor! Temporibus porro error cum, impedit, incidunt molestiae voluptatibus cupiditate odio ipsam, fugiat nihil! Porro, ab unde.
          </p>
        </div>
      </div>*/}

       <div className="flex flex-col md:flex-row items-center p-10 md:gap-8 bg-neutral-100">
      <div className="w-full md:w-1/2">
        <img src={image2} alt="" className="w-full h-100 rounded-lg shadow-lg"/>
      </div>

       <div className=" md:w-1/2 space-y-4 items-start ">
        <h2 className="text-3xl font-bold text-neutral-800 text-center mt-4">Special Features;</h2>
        <p className="text-gray-600">
          <span className="font-semibold text-gray-800"> <ScanText/> Text to Speech:</span> Our Text-to-Speech feature transforms written content into clear audio, making learning accessible for individuals with reading challenges or visual impairments.
        </p>
        <p className="text-gray-600">
          <span className="font-semibold text-gray-800"> <Captions/>Speech to Text:</span> The Speech-to-Text feature converts spoken words into real-time text. This is invaluable for users with writing difficulties, allowing them to dictate thoughts, notes, or assignments with ease.
        </p>
        <p className="text-gray-600">
          <span className="font-semibold text-gray-800"> <BookCheckIcon/> Summarisation:</span> Our Summarization feature transforms lengthy texts or notes into concise, easy-to-digest summaries. Designed to help users focus on the most critical information, saving time and enhancing understanding.
        </p>
         <p className="text-gray-600">
          <span className="font-semibold text-gray-800"> <CalendarCheck2/> Study Plans:</span> Our Study Plans feature is a dynamic tool that helps users organize their learning journey. Tailored to individual needs, it breaks down large tasks into manageable chunks and sets achievable goals.
        </p>
         <p className="text-gray-600">
          <span className="font-semibold text-gray-800"> <SearchCheckIcon/>Item Detector:</span> The Item Detector feature enhances real-world learning by using AI to identify, recognize and describe items, providing detailed explanations or context. Perfect for individuals with visual impairments or those learning practical skills,.
        </p>
      </div>
    </div>
    <div>
      <Footer/>
    </div>
    </div>
    
  );
};

export default About;
