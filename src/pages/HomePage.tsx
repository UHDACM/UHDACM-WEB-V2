import { useState, useEffect } from "react";
import Button from "../components/Button/Button";
import girlInGoggles from "../assets/girl_in_goggles.png";
import bigCircle from "../assets/big-circle.png";
import girlInRedGoggles from "../assets/gir_in_red_goggles.png";
import gogglesHatFigure from "../assets/goggles_har_figure.png";
import girlInRedGoggles2 from "../assets/girl_in_red_goggles2.png";

import "../CSS/Homepage.css";

export default function HomePage() {
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 });
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const animate = () => {
      setCirclePosition((prev) => ({
        x: prev.x + (targetPosition.x - prev.x) * 0.1, // Smooth interpolation
        y: prev.y + (targetPosition.y - prev.y) * 0.1,
      }));
      requestAnimationFrame(animate);
    };
    animate();
  }, [targetPosition]);

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setTargetPosition({
      x: (clientX - window.innerWidth / 2) * 0.05, // More exaggerated motion
      y: (clientY - window.innerHeight / 2) * 0.05,
    });
  };

  return (
    <div className="hero-bg w-screen h-screen" onMouseMove={handleMouseMove}>
      {/* Entire Home page hero section */}
      <div className="flex justify-evenly relative">
        <div
          className="h-screen flex flex-col justify-center space-y-8 relative"
          style={{ width: "35rem" }}
        >
          {/* Hero section with text and figures */}
          <div className="flex justify-center">
            {/* Hero text */}
            <div className="flex flex-col space-y-4 w-full z-10">
              <h2 className="font-bold text-5xl">Advance your mastery</h2>
              <h2 className="font-bold text-5xl">Cultivate innovation</h2>
              <h2 className="font-bold text-5xl">Meet and Connect</h2>
            </div>
          </div>
          <p>
            Engage with ACM at the University of Houston-Downtown to access our
            thriving network of tech enthusiasts and receive updates on the
            latest CS and technology events happening both on campus and at
            other locations!
          </p>
          <div className="flex space-x-4">
            <Button label={"Join ACM"} />
            <Button label={"View Events"} />
          </div>
        </div>

        {/* Moving Big Circles */}
        <img
          src={bigCircle}
          alt=""
          className="w-20 absolute"
          style={{
            top: `calc(70% - ${circlePosition.y}px)`,
            left: `calc(50% - ${circlePosition.x}px)`,
            transition: "transform 0.1s linear",
          }}
        />

        <img
          src={bigCircle}
          alt=""
          className="w-48 absolute"
          style={{
            top: `calc(15% - ${circlePosition.y * 1.2}px)`,
            left: `calc(15% - ${circlePosition.x * 1.2}px)`,
            transition: "transform 0.1s linear",
          }}
        />

        <img
          src={bigCircle}
          alt=""
          className="w-20 absolute"
          style={{
            top: `calc(35% - ${circlePosition.y * 0.8}px)`,
            left: `calc(10% - ${circlePosition.x * 0.8}px)`,
            transition: "transform 0.1s linear",
          }}
        />

        {/* Hero Images */}
        <div className="h-screen flex flex-col justify-center items-center hidden lg:flex">
          <div className="flex items-center space-x-10">
            <div>
              <img src={girlInGoggles} alt="" className="lg:w-80" />
            </div>
            <div className="flex flex-col items-center space-y-4">
              <img src={gogglesHatFigure} alt="" className="lg:w-64" />
              <img src={girlInRedGoggles2} alt="" className="lg:w-64" />
            </div>
          </div>
        </div>
      </div>

      {/* Hero Cards */}
      <div className="flex w-full justify-evenly fixed -bottom-80 z-50">
        {/* Workshops Card */}
        <div className="w-96 bg-stone-50/10 text-white rounded-3xl p-4 flex flex-col justify-center space-y-5 backdrop-blur-3xl relative transform transition-transform duration-300 hover:-translate-y-80">
          <h3 className="w-full text-3xl text-center">Workshops</h3>
          <div className="flex justify-center">
            <div className="w-40 h-40 rounded-full bg-white"></div>
          </div>

          <div className="flex justify-center">
            <div className="w-64 h-1 rounded-full bg-white"></div>
          </div>

          <p className="text-center  ">
            Join in on some of our all-level friendly workshops where we focus
            on learning new technical skills and networking with other students.{" "}
            <span className="text-orange-400 underline">
              Click to View Workshops
            </span>
          </p>
        </div>
        {/* Mentorship Card */}
        <div className="w-96 bg-stone-50/10 text-white rounded-3xl p-4 flex flex-col justify-center space-y-5 backdrop-blur-3xl relative transform transition-transform duration-300 hover:-translate-y-80">
          <h3 className="w-full text-3xl text-center">Mentorship</h3>
          <div className="flex justify-center">
            <div className="w-40 h-40 rounded-full bg-white"></div>
          </div>

          <div className="flex justify-center">
            <div className="w-64 h-1 rounded-full bg-white"></div>
          </div>

          <p className="text-center  ">
            Join in on some of our all-level friendly workshops where we focus
            on learning new technical skills and networking with other students.{" "}
            <span className="text-orange-400 underline">
              Click to View More.
            </span>
          </p>
        </div>
        {/* Projects Card */}
        <div className="w-96 bg-stone-50/10 text-white rounded-3xl p-4 flex flex-col justify-center space-y-5 backdrop-blur-3xl relative transform transition-transform duration-300 hover:-translate-y-80">
          <h3 className="w-full text-3xl text-center">Projects</h3>
          <div className="flex justify-center">
            <div className="w-40 h-40 rounded-full bg-white"></div>
          </div>

          <div className="flex justify-center">
            <div className="w-64 h-1 rounded-full bg-white"></div>
          </div>

          <p className="text-center  ">
            Join in on some of our all-level friendly workshops where we focus
            on learning new technical skills and networking with other students.{" "}
            <span className="text-orange-400 underline cursor-pointer">
              Click to View Projects
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
