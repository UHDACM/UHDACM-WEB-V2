import React, { useState, useEffect } from "react";
import "./navbar.css";
import logo from "./acm.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5000); // Duration of the loading animation
    return () => clearTimeout(timer);
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return loading ? (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="absolute logo-div">
        <div className="loading-logo">
          <img src={logo} alt="" />
        </div>
      </div>
    </div>
  ) : (
    <>
      {/* logo */}
      <div className="w-14 absolute top-2">
        <img src={logo} alt="" />
      </div>
      {/* Hamburger Button */}
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

      {/* Nav Menu View */}
      <ul
        className={`nav-link w-full h-screen absolute top-0 left-0 flex flex-col justify-evenly items-left bg-stone-50 z-0 text-4xl sm:text-6xl transition-transform duration-300 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <li className="relative cursor-pointer hover:underline gradient-underline ml-4">
          <span
            style={{
              background: "linear-gradient(to right, #ffa500, rgb(19, 19, 19))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Home
          </span>
        </li>
        <li className="nav-link relative cursor-pointer hover:underline gradient-underline ml-4">
          <span
            style={{
              background: "linear-gradient(to right, #ffa500, rgb(19, 19, 19))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            About
          </span>
        </li>
        <li className="nav-link relative cursor-pointer hover:underline gradient-underline ml-4">
          <span
            style={{
              background: "linear-gradient(to right, #ffa500, rgb(19, 19, 19))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Events
          </span>
        </li>
        <li className="nav-link relative cursor-pointer hover:underline gradient-underline ml-4">
          <span
            style={{
              background: "linear-gradient(to right, #ffa500, rgb(19, 19, 19))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Store
          </span>
        </li>
        <li className="nav-link relative cursor-pointer hover:underline gradient-underline ml-4">
          <span
            style={{
              background: "linear-gradient(to right, #ffa500, rgb(19, 19, 19))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Account
          </span>
        </li>
      </ul>
    </>
  );
}
