// "use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { GoLinkExternal } from "react-icons/go";
import Nav from "/src/components/Nav.jsx"
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

export default function Contact() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="Contact">
      <Nav />
      <div className="body">
        {/*left-side*/}
        <div className=" hero-left">
          <div className="hero-title">
            <h1>Hello There </h1>
            <i className = "fad fa-comment-smile"></i>
          </div>
          <div className="hero-des">
            <p>How have your experience with our software been, Have any feedback, complaints or Need assistants? Please do reach out, 
            our 24 7 Customer Service is always ready on standy to handle all your inquiries.</p>
          </div>
        </div>
        {/*right-side*/}
        <div className="flex hero-right">
          <div className="form-container">
            <form action="">
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
          <div className = "contact-info">
            <p>Chat with Us</p>
            <p>Speak To Our friendly Team on Your Choosing</p>
            <span>
              <i className = "fad fa-envelope"></i>
              <p>Barbex.jy@gmail.com</p>
            </span>
             <span>
              <i className = "fad fa-phone"></i>
              <p>+234 7220 2069</p>
            </span>
            
            <p className="p-3  font-thin lets">Customer Service</p>
          </div>
        </div>
      </div>
    </div>
  );
}
