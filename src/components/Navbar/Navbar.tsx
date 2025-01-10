import React, { useState, useEffect } from "react";
import "./navbar.css";
import logo from './acm.png'
import { ChevronDown } from "lucide-react";

const NavItem = ({ text, dropdownItems }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <li className="nav-link relative cursor-pointer">
      <div 
        className="flex items-center gap-2 hover:underline gradient-underline ml-4"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <span
          style={{
            background: "linear-gradient(to right, #ffa500, rgb(19, 19, 19))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {text}
        </span>
        {dropdownItems && (
          <ChevronDown 
            className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
            size={40}
            style={{
              // background: "linear-gradient(to right, #ffa500, rgb(19, 19, 19))",
              color: "rgb(19,19,19)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            strokeWidth={3}
          />
        )}
      </div>
      
      {dropdownItems && (
        <ul 
          className={`
            ml-8 overflow-hidden transition-all duration-300 
            ${isDropdownOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
          `}
        >
          {dropdownItems.map((item, index) => (
            <li 
              key={index}
              className="py-2 text-2xl sm:text-4xl cursor-pointer hover:translate-x-2 transition-transform"
            >
              <span
                style={{
                  background: "linear-gradient(to right, #ffa500, rgb(19, 19, 19))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {item}
              </span>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { text: "Home" },
    { text: "About" },
    { 
      text: "Events",
      dropdownItems: ["Upcoming Events", "Past Events", "Calendar", "Register"]
    },
    { text: "Store" },
    { text: "Account" }
  ];

  return loading ? (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="absolute logo-div">
        <div className="loading-logo">
          <img src={logo} alt="Logo" />
        </div>
      </div>
    </div>
  ) : (
    <>
      <div className="w-20 absolute top-2">
        <img src={logo} alt="Logo" />
      </div>
      
      <div
        className="w-5 flex flex-col space-y-1 absolute left-3 top-3 cursor-pointer z-10"
        onClick={handleToggle}
      >
        <div
          className={`w-full h-0.5 transition-transform duration-300 ${
            isOpen
              ? "transform rotate-45 translate-y-1.5 bg-black"
              : "bg-stone-50"
          }`}
        ></div>
        <div
          className={`w-full h-0.5 transition-opacity duration-300 ${
            isOpen ? "opacity-0" : "opacity-100 bg-stone-50"
          }`}
        ></div>
        <div
          className={`w-full h-0.5 transition-transform duration-300 ${
            isOpen
              ? "transform -rotate-45 -translate-y-1.5 bg-black"
              : "bg-stone-50"
          }`}
        ></div>
      </div>

      <ul
        className={`nav-link w-full h-screen absolute top-0 left-0 flex flex-col justify-evenly items-left bg-stone-50 z-0 text-4xl sm:text-6xl transition-transform duration-300 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {navItems.map((item, index) => (
          <NavItem 
            key={index}
            text={item.text}
            dropdownItems={item.dropdownItems}
          />
        ))}
      </ul>
    </>
  );
}