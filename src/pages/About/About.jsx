import React from "react";
import Nav from "../../components/Nav";
import heroImg from "../../assets/heroImg.jpg"
import image2 from "../../assets/hImage.jpg"

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
         <p className="mt-10 text-lg text-center text-neutral-400 max-w-4xl">
            Are you looking for where do dive yourself in the digital world so you can follow the trend everyone else is following? 
            Get your DigiTools today for a glimpse of the digi-world.
        </p>
        <div className="flex flex-wrap justify-center">
        <div className="p-2 w-full lg:w-3/5 ">
            <img src={heroImg} alt="" />
        </div>
       </div>
      </div>


       <div className="flex p-8 space-y-12 justify-center items-center mt-7">
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
      </div>

       <div className="flex flex-col md:flex-row items-center p-8 md:gap-8 bg-neutral-100">
      <div className="w-full md:w-1/2">
        <img src={image2} alt="" className="w-full h-auto rounded-lg shadow-lg"/>
      </div>

       <div className=" md:w-1/2 space-y-4 items-start ">
        <h2 className="text-3xl font-bold text-gray-800">Special Features;</h2>
        <p className="text-gray-600">
          <span className="font-semibold text-gray-800">Feature 1:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel purus vitae urna aliquet cursus.
        </p>
        <p className="text-gray-600">
          <span className="font-semibold text-gray-800">Feature 2:</span> Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>
        <p className="text-gray-600">
          <span className="font-semibold text-gray-800">Feature 3:</span> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
         <p className="text-gray-600">
          <span className="font-semibold text-gray-800">Feature 4:</span> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
         <p className="text-gray-600">
          <span className="font-semibold text-gray-800">Feature 5:</span> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </div>
    </div>
    </div>
  );
};

export default About;
