import React from "react";
import Nav from "../../components/Nav.jsx";
import Hero from "../../components/Hero.jsx";
import SolutionPage from "../../components/SolutionPage.jsx";
import WhyPage from "../../components/WhyPage.jsx";
import BlogPage from "../../components/BlogPage.jsx";
import FaqPage from "../../components/FaqPage.jsx";
import PrivacyPage from "../../components/PrivacyPage.jsx";
import FooterPage from "../../components/FooterPage.jsx";
// import "./components/landing-style.css";

const Home = () => {
  return (
    <div className="Home">
      <link
        rel="stylesheet"
        href="https://kit-pro.fontawesome.com/releases/v6.2.0/css/pro.min.css"
      ></link>
      <link rel="stylesheet" type="text/css" href="font.min.css"></link>
      <div className="">
        <Nav />
        <div className="max-w-7xl mx-auto pt-20 px-6"></div>
        <Hero />
        <SolutionPage />
        <WhyPage />
        <BlogPage />
        {/*<FaqPage />*/}
        <PrivacyPage />
        {/*<FooterPage />*/}
        {/* <div className="py-5"></div> */}
      </div>
    </div>
  );
};

export default Home;
