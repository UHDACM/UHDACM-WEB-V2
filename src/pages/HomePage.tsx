import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import topSectionBG from "../assets/pexels-rovenimages-com-344613-949587.jpg";
import ACMGIM1 from "../assets/ACM_GIM_1.jpg";
import Button from "../components/Button/Button";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <>
      {/* <Navbar/> */}
      <div className="w-screen flex flex-col bg-gray-900">
        <div className="w-screen h-screen relative overflow-hidden">
          <img
            className="blur-md"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: -10,
              opacity: 0.5,
            }}
            src={topSectionBG}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "0%",
              margin: 20,
              maxWidth: 500,
              color: "white",
              transform: "translate(0%, -50%)",
            }}
          >
            <div style={{ fontSize: "2rem", fontWeight: 600 }}>
              <p style={{ margin: 0 }}>Advance your mastery</p>
              <p style={{ margin: 0 }}>Create new Solutions</p>
              <p style={{ margin: 0 }}>Make an impact</p>
            </div>
            <div>
              <p>
                "The future of computing is about connecting people and enabling
                them to create like never before."
              </p>
              <p style={{ marginLeft: 20 }}>
                — Satya Nadella, CEO of Microsoft
              </p>
            </div>
            <div
              style={{
                marginTop: 60,
                display: "flex",
                justifyContent: "start",
                flexWrap: "wrap",
                position: "static",
              }}
            >
              <Button label="Join ACM" />
              <div style={{ width: 10, height: 0 }} />
              <Button label="View Events" />
            </div>
          </div>
        </div>
        <div className="w-screen" style={{ marginTop: 100, margin: 40, color: 'white' }}>
          <p
            style={{
              margin: 0,
              fontSize: "2rem",
              fontWeight: 600,
              color: "white",
            }}
          >
            About ACM @ UHD
          </p>
          <img
            style={{
              width: 450,
              height: 300,
              objectFit: "cover",
              borderRadius: 10,
            }}
            src={ACMGIM1}
          />
          <p style={{ textWrap: 'wrap'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla veniam veritatis sed repellendus suscipit rerum quo, officiis unde ea placeat dicta iusto magnam, laudantium dolorem. In deleniti porro numquam modi, unde quo veritatis neque ipsam eveniet aperiam corrupti, repudiandae fuga sit accusamus quam praesentium magnam voluptate! A, eveniet reprehenderit. Aliquam!</p>
        </div>
      </div>
    </>
  );
}
