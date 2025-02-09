import { useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar/Navbar";
// import topSectionBG from "../pexels-rovenimages-com-344613-949587.jpg";
// import altTopSectionBG from "../assets/alt-bg.jpg";
// import altTopSectionBG2 from "../ACM_GIM_1.jpg";
// import ACMGIM1 from "../assets/ACM_GIM_1.jpg";
import Button from "../components/Button/Button";
import girlInGoggles from "../assets/girl_in_goggles.png";

import "../CSS/Homepage.css";

export default function HomePage() {
  // const navigate = useNavigate();
  return (
    <div className="hero-bg w-screen h-screen">
      {/* Entire Home page hero section */}
      <div className="flex justify-evenly">
        <div
          className="h-screen flex flex-col justify-center space-y-8"
          style={{ width: "35rem" }}
        >
          {/* Hero section with text and figures */}
          <div className="flex justify-center">
            {/* Hero text */}
            <div className="flex flex-col space-y-4 w-full">
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
            <Button label={'Join ACM'}/>
            <Button label={'View Events'}/>
          </div>
        </div>
        <div className="h-screen flex flex-col justify-center">
          <img
            src={girlInGoggles}
            alt=""
            style={{ width: "30rem", height: "45rem" }}
          />
        </div>
      </div>
    </div>
  );
}
