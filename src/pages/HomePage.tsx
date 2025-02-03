import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import topSectionBG from "../pexels-rovenimages-com-344613-949587.jpg";
import altTopSectionBG from "../assets/alt-bg.jpg";
import altTopSectionBG2 from "../ACM_GIM_1.jpg";
import ACMGIM1 from "../assets/ACM_GIM_1.jpg";
import Button from "../components/Button/Button";
import "../CSS/Homepage.css";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="w-screen flex flex-col" style={{backgroundColor: "#161618"}}>
        <div className="w-screen flex flex-col">
          <div
            className="w-screen h-lvh relative overflow-hidden bg-cover responsive-bg"
            style={{
              backgroundImage: `url(${altTopSectionBG})`,
            }}
          >
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full max-w-[90%] lg:max-w-[800px] sm:w-128 text-white bg-black/50 backdrop-blur-md p-6 rounded-lg ml-5 lg:ml-10">
              <div className="text-2xl lg:text-5xl font-semibold">
                <p className="m-0">Advance your mastery</p>
                <p className="m-0">Create new Solutions</p>
                <p className="m-0">Make an impact</p>
              </div>
              <div className="mt-4 text-base lg:text-2xl">
                <p>
                  "The future of computing is about connecting people and
                  enabling them to create like never before."
                </p>
                <p className="mt-5">— Satya Nadella, CEO of Microsoft</p>
              </div>
              <div className="mt-8 lg:mt-16 flex justify-start flex-wrap gap-4">
                <Button label={"Join ACM"} />
                <Button label={"View Events"} />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 p-6">
          <p className="text-2xl mb-2 font-bold">About ACM @ UHD</p>
          <img className="rounded-xl" src={ACMGIM1} />
          <p className="mt-3 text-sm" style={{ textWrap: "wrap" }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
            veniam veritatis sed repellendus suscipit rerum quo, officiis unde
            ea placeat dicta iusto magnam, laudantium dolorem. In deleniti porro
            numquam modi, unde quo veritatis neque ipsam eveniet aperiam
            corrupti, repudiandae fuga sit accusamus quam praesentium magnam
            voluptate! A, eveniet reprehenderit. Aliquam!
          </p>
        </div>

        <div className="mt-10 p-6 bg-stone-700/10">
          <p className="text-2xl mb-2 font-bold">About ACM @ UHD</p>
          <img className="rounded-xl" src={ACMGIM1} />
          <p className="mt-3 text-sm" style={{ textWrap: "wrap" }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
            veniam veritatis sed repellendus suscipit rerum quo, officiis unde
            ea placeat dicta iusto magnam, laudantium dolorem. In deleniti porro
            numquam modi, unde quo veritatis neque ipsam eveniet aperiam
            corrupti, repudiandae fuga sit accusamus quam praesentium magnam
            voluptate! A, eveniet reprehenderit. Aliquam!
          </p>
        </div>

        <div className="mt-10 p-6">
          <p className="text-2xl mb-2 font-bold">About ACM @ UHD</p>
          <img className="rounded-xl" src={ACMGIM1} />
          <p className="mt-3 text-sm" style={{ textWrap: "wrap" }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
            veniam veritatis sed repellendus suscipit rerum quo, officiis unde
            ea placeat dicta iusto magnam, laudantium dolorem. In deleniti porro
            numquam modi, unde quo veritatis neque ipsam eveniet aperiam
            corrupti, repudiandae fuga sit accusamus quam praesentium magnam
            voluptate! A, eveniet reprehenderit. Aliquam!
          </p>
        </div>
      </div>
    </>
  );
      </div>
    </>
  );
}

