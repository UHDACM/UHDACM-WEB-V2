import React, { useState, useEffect } from "react";
import "./navbar.css";
import logo from "./acm.png";
import { ChevronDown } from "lucide-react";

const NavItem = ({ text, dropdownItems, level = 0 }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // For top-level (level 0): dropdown appears below.
  // For nested (level > 0): dropdown appears to the right.
  const dropdownPositionClasses =
    level === 0
      ? "absolute left-0 top-full mt-2"
      : "absolute left-full top-0 ml-2";

  const handleClick = (e) => {
    e.stopPropagation();
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <li className="relative cursor-pointer">
      <div
        className={`flex items-center gap-2 ${level === 0 ? "ml-4" : "px-2"}`}
        onClick={handleClick}
      >
        <span
          style={{
            background:
              "linear-gradient(to right, rgb(255,255,255), rgb(255,255,255))",
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
            size={level === 0 ? 20 : 16}
            style={{
              color: "#fff",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            strokeWidth={2}
          />
        )}
      </div>

      {dropdownItems && (
        <ul
          className={`bg-stone-900 rounded shadow-lg ${dropdownPositionClasses} ${
            level === 0
              ? // Use a transform-based animation so overflow isn’t clipped
                `transition-transform duration-300 origin-top ${
                  isDropdownOpen
                    ? "scale-y-100 opacity-100"
                    : "scale-y-0 opacity-0"
                }`
              : // For nested dropdowns, simply toggle display
              isDropdownOpen
              ? "block"
              : "hidden"
          }`}
        >
          {dropdownItems.map((item, index) =>
            item.subItems ? (
              // Render a nested NavItem if subItems exist
              <NavItem
                key={index}
                text={item.text}
                dropdownItems={item.subItems}
                level={level + 1}
              />
            ) : (
              <li
                key={index}
                className="px-4 py-2 text-xl hover:bg-stone-800 whitespace-nowrap"
                onClick={(e) => e.stopPropagation()}
              >
                {item.text}
              </li>
            )
          )}
        </ul>
      )}
    </li>
  );
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // (Optional) Loading splash state if needed.
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { text: "Events" },
    { text: "About" },
    {
      text: "Leadership",
      // Uncomment this block to see how Dropdown items work.
      // dropdownItems: [
      //   // Uncomment this block to see how subitmes look
      //   // {
      //   //   text: "Upcoming Events",
      //   //   subItems: [
      //   //     { text: "Tech Conference" },
      //   //     { text: "Coding Workshop" },
      //   //     { text: "Webinar Series" },
      //   //     { text: "Networking Meetup" },
      //   //   ],
      //   // },
      //   // {
      //   //   text: "Past Events",
      //   //   subItems: [{ text: "Hackathon 2023" }, { text: "AI Summit 2022" }],
      //   // },
      //   { text: "Upcoming Events"},
      //   { text: "Calendar" },
      //   { text: "Register" },
      // ],
    },
    { text: "Connect" },
  ];

  // Uncomment the block below if you wish to use a loading splash screen
  // if (loading) {
  //   return (
  //     <div className="fixed flex items-center justify-center h-screen w-screen z-40 bg-stone-900">
  //       <div className="absolute logo-div">
  //         <div className="loading-logo">
  //           <img src={logo} alt="Logo" />
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="fixed top-0 w-full px-4 py-3 z-50">
        <div className="container mx-auto flex items-center justify-between">
          {/* Left: Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="w-20 cursor-pointer" />
          </div>

          {/* Center: Nav Items (Desktop Only) */}
          <ul className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <NavItem
                key={index}
                text={item.text}
                dropdownItems={item.dropdownItems}
                level={0}
              />
            ))}
          </ul>

          {/* Right: Sign Up / Sign In Buttons (Desktop Only) */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-2 text-white rounded transition-colors hover:text-orange-400">
              Sign Up
            </button>
            <button className="px-4 py-1 text-white rounded-3xl transition-colors ring ring-white ring-1 hover:ring-orange-400">
              Sign In
            </button>
          </div>

          {/* Mobile Hamburger Menu (Visible on Mobile Only) */}
          <div className="md:hidden">
            <button onClick={handleToggle} aria-expanded={isOpen}>
              <div className="w-5 flex flex-col space-y-1">
                <div
                  className={`w-full h-0.5 transition-transform duration-300 bg-stone-50 ${
                    isOpen ? "transform rotate-45 translate-y-1.5" : ""
                  }`}
                ></div>
                <div
                  className={`w-full h-0.5 transition-opacity duration-300 bg-stone-50 ${
                    isOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></div>
                <div
                  className={`w-full h-0.5 transition-transform duration-300 bg-stone-50 ${
                    isOpen ? "transform -rotate-45 -translate-y-1.5" : ""
                  }`}
                ></div>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <ul
        className={`fixed md:hidden nav-link w-full h-screen top-0 left-0 flex flex-col justify-evenly items-start z-10 text-4xl sm:text-6xl transition-transform duration-300 backdrop-blur-sm ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="w-full backdrop-blur-lg h-full opacity-90 bg-stone-900 absolute"></div>
        {navItems.map((item, index) => (
          <NavItem
            key={index}
            text={item.text}
            dropdownItems={item.dropdownItems}
            level={0}
          />
        ))}
      </ul>
    </>
  );
}
