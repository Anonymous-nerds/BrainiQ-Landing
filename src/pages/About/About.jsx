import React from "react";
import Nav from "../../components/Nav";

const About = () => {
  return (
    <div>
      <div>
        <Nav />
        <div className="max-w-7xl mx-auto pt-20 px-6"></div>
      </div>
      <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h2 className="text-5xl sm:text-6xl lg:text-6xl text-center tracking-wide">
          About
        </h2>
      </div>
    </div>
  );
};

export default About;
