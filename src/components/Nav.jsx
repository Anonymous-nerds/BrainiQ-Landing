// "use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../assets/logoBiQ.png";
import { GoLinkExternal } from "react-icons/go";

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
    <div className = "nav-bar">
      <div className = "navImg">
          <img src = {Logo}/>
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
  );
}
