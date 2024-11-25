// "use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { GoLinkExternal } from "react-icons/go";
import "./Contact.css"

// import "./shared.scss";
// import "./shared.scss";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Research", href: "/research" },
  { name: "Products", href: "/products" },
  { name: "Safety", href: "/safety" },
  // { name: "Education", href: "/education" },
  { name: "Pricing", href: "/pricing" },
];

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="Contact">
    <div className = "nav-bar">
      <div className="navImg">
      <img src="../constants/logoBiQ.png" alt="logo"  width={100} />
      </div>
      <div className = "nav-elems">

       {navigation.map((item) => (
          <span className = "navElem" key={item.name}>
           <a              
              href={item.href}                    
            >
              <p>{item.name}</p>
              <i className = "far fa-plus"></i>
            </a>
          </span>
        ))}
        
      </div>
      <div className = "nav-btn">
          <button>
            <a href = "register">
              <p>Let's Get Start</p>
              <i className = "fas fa-hand-point-right"></i>
            </a>
          </button>
      </div>
    </div>
    <div className="body">
    <div className="paddings innerWidth flexCenter hero-container">

      {/*left-side*/}
      <div className=" flexColStart hero-left">
        <div className="hero-title">
          <div className="ash-circle"/>
          <h1>Contact Us</h1>
        </div>
        <div className="flexColStart hero-des">
          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span> 
          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
          <p className="p-3">Barbex.jy@gmail.com</p>
          <p className="p-3">+234 7220 2069</p>
          <p className="p-3  font-thin lets">Customer Service</p>
        </div>
        </div>
      {/*right-side*/}
      <div className="flex hero-right">
        <div className="form-container">
          <form action="">
            <h2 className="font-bold">Contact Us</h2>
            <div className="input-box">
              <label>Full Name</label>
              <input type="text" className="field" placeholder="Enter your name"  required/>
            </div>
            <div className="input-box">
              <label>Email Address</label>
              <input type="email" className="field" placeholder="Enter your email" required/>
            </div>
            <div className="input-box">
              <label>Your Message</label>
              <textarea name="" id="" className="field-mess" placeholder="Enter your Message" required></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>

        </div>
      </div>



    </div>


    </div>


    </div>
  );
}
