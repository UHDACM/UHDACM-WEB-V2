import React, { useState, useEffect } from "react";
import "./navbar.css";
import logo from "./acm.png";
import { ChevronDown } from "lucide-react";

const NavItem = ({ text, dropdownItems }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <li className="nav-link relative cursor-pointer">
      <div
        className="flex items-center gap-2 gradient-underline ml-4"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <span
          style={{
            background:
              "linear-gradient(to right,rgb(255, 255, 255), rgb(255, 255, 255))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {text}
        </span>
        {dropdownItems && (
          <ChevronDown
            className={`transition-transform duration-300 ${
              isDropdownOpen ? "rotate-180" : ""
            }`}
            size={40}
            style={{
              color: "#fff",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            strokeWidth={3}
          />
        )}
      </div>

      {dropdownItems && (
        <ul
          className={`ml-8 overflow-hidden transition-all duration-300 ${
            isDropdownOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {dropdownItems.map((item, index) => (
            <li
              key={index}
              className="text-4xl py-2 translate hover:ml-10 duration-200"
            >
              <NavItem text={item.text} dropdownItems={item.subItems} />
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
      dropdownItems: [
        {
          text: "Upcoming Events",
          subItems: [{ text: "Tech Conference" }, { text: "Coding Workshop" }],
        },
        {
          text: "Past Events",
          subItems: [{ text: "Hackathon 2023" }, { text: "AI Summit 2022" }],
        },
        { text: "Calendar" },
        { text: "Register" },
      ],
    },
    { text: "Store" },
    { text: "Account" },
  ];

  return loading ? (
    <div className="fixed flex items-center justify-center h-screen w-screen z-40 bg-stone-900">
      <div className="absolute logo-div">
        <div className="loading-logo">
          <img src={logo} alt="Logo" />
        </div>
      </div>
    </div>
  ) : (
    <>
      <div style={{backgroundColor: "#161618"}} className="flex items-center fixed top-0 w-screen px-4 justify-between z-50">

        <div
          className="w-5 flex flex-col space-y-1 cursor-pointer z-50"
          onClick={handleToggle}
          aria-expanded={isOpen}
        >
          {/* First Line */}
          <div
            className={`w-full h-0.5 transition-transform duration-300 ${
              isOpen
                ? "transform rotate-45 translate-y-1.5 bg-white"
                : "bg-stone-50"
            }`}
          ></div>

          {/* Middle Line */}
          <div
            className={`w-full h-0.5 transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100 bg-stone-50"
            }`}
          ></div>

          {/* Third Line */}
          <div
            className={`w-full h-0.5 transition-transform duration-300 ${
              isOpen
                ? "transform -rotate-45 -translate-y-1.5 bg-white"
                : "bg-stone-50"
            }`}
          ></div>
        </div>
        <div className="w-20 z-40  top-2 ">
          <img src={logo} alt="Logo" />
        </div>
        <div className="w-20 h-20">

        </div>
      </div>

      <ul
        className={`fixed nav-link w-full h-screen top-0 left-0 flex flex-col justify-evenly items-left   z-10 text-4xl sm:text-6xl transition-transform duration-300 backdrop-blur-sm ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="w-full backdrop-blur-lg h-full  opacity-90 bg-stone-900 absolute "></div>
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
