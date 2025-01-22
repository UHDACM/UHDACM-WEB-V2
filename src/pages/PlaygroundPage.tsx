import { useNavigate } from "react-router-dom";
import PersonTile from "../components/PersonTile/PersonTile";
import Navbar from "../components/Navbar/Navbar";

const shortText =
  "Placeat illo, consequuntur inventore, recusandae repellendus illum harum quo atque rem voluptatem minima dolorum velit.";
const longText =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod repudiandae ipsam reprehenderit corporis deleniti iusto architecto quibusdam doloremque consectetur, placeat illo, consequuntur inventore, recusandae repellendus illum harum quo atque rem voluptatem minima dolorum velit. Laborum, optio, enim eveniet cum, dolore deleniti quae eaque praesentium voluptatibus quibusdam quos tenetur animi? Nostrum, placeat illo, consequuntur inventore, recusandae repellendus illum harum quo atque rem voluptatem minima dolorum velit. Laborum, optio, enim eveniet cum, dolore deleniti quae eaque praesentium voluptatibus quibusdam quos tenetur animi? Nostrum, placeat illo, consequuntur inventore, recusandae repellendus illum harum quo atque rem voluptatem minima dolorum velit. Laborum, optio, enim eveniet cum, dolore deleniti quae eaque praesentium voluptatibus quibusdam quos tenetur animi? Nostrum.";
export default function PlaygroundPage() {
  return (
    <>
      <div className="w-screen h-screen flex items-center justify-center align-middle relative">
        <PGPHeader />
        <PersonTile
          previewTitle="Gael C."
          fullTitle="Gael Bomboclat Cruz"
          previewSubTitle="Developer"
          fullSubtitle="Developer"
          socials={[
            {
              icon: "personal_site",
              href: "https://deiahri.github.io/portfolio",
            },
            {
              icon: "youtube",
              href: "https://www.youtube.com/@DeiahriDev-kz6xs",
            },
          ]}
          fullDescription={longText}
          img={'https://deiahri.github.io/portfolio/img/Photo-of-me-rounded.png'}
        />
      </div>
      <div style={{ height: "200vw" }} />
      {/* added this to test components that should be fixed to the screen on scroll */}
    </>
  );
}

function PGPHeader() {
  const navigate = useNavigate();
  return (
    <>
      <div className="absolute bottom-2 left-2">
        <button onClick={() => navigate("/")} className="border-gray-300">
          Back
        </button>
      </div>
      <Navbar />
      {/* <Button label={'hello'} /> */}
    </>
  );
}
