import { useNavigate } from "react-router-dom";
import PersonTile from "../components/PersonTile/PersonTile";
import Navbar from "../components/Navbar/Navbar";
import { icons } from "lucide-react";
import EventTile from "../components/EventTile/EventTile.jsx"
import EventPhoto from "../components/EventTile/acm.png"


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
            {
              icon: 'facebook',
              href: "https://www.youtube.com/@DeiahriDev-kz6xs",
            },
            {
                icon: 'instagram',
            },
            {
                icon: 'linkedin'
            },
            {
                icon: 'x'
            },
            
          ]}
          fullDescription={longText}
          img={
            "https://deiahri.github.io/portfolio/img/Photo-of-me-rounded.png"
          }
        />
      </div>
      <div style={{ height: "200vw" }} />
      {/* added this to test components that should be fixed to the screen on scroll */}
    </>
  );
}

function PGPHeader() {
    const navigate = useNavigate();
  
    const events = [
      {
        title: "Tech Conference 2025",
        location: "N420 ",
        description:
          "Join us for a day of insightful talks and networking opportunities with industry leaders.",
        date: "2/10/2025",
        startTime: "1:00PM",
        endTime: "5:00PM",
        status: "live",
        photo: "https://th.bing.com/th/id/OIP.HTd1AzW78Qb1PNcIHSxydgHaEk?rs=1&pid=ImgDetMain",
      },
      {
        title: "Design Workshop",
        location: "New York, NY",
        description:
          "Learn the latest trends in design with hands-on activities and expert guidance. Learn the latest trends in design with hands-on activities and expert guidance",
        date: "2/10/2025",
        startTime: "1:00PM",
        endTime: "5:00PM",
        status: "upcoming",
        photo: "https://www.liveabout.com/thmb/qgTDxoMnDXir0RugxsmPEPVrpHw=/5171x3448/filters:fill(auto,1)/98841996-56a34ef95f9b58b7d0d16c26.jpg",
      },
      {
        title: "Design Workshop",
        location: "New York, NY",
        description:
          "Learn the latest trends in design with hands-on activities and expert guidance. Learn the latest trends in design with hands-on activities and expert guidance",
        date: "2/10/2025",
        startTime: "1:00PM",
        endTime: "5:00PM",
        status: "upcoming",
        photo: "https://www.liveabout.com/thmb/qgTDxoMnDXir0RugxsmPEPVrpHw=/5171x3448/filters:fill(auto,1)/98841996-56a34ef95f9b58b7d0d16c26.jpg",
      },
      {
        title: "Design Workshop",
        location: "New York, NY",
        description:
          "Learn the latest trends in design with hands-on activities and expert guidance. Learn the latest trends in design with hands-on activities and expert guidance",
        date: "2/10/2025",
        startTime: "1:00PM",
        endTime: "5:00PM",
        status: "upcoming",
        photo: "https://www.liveabout.com/thmb/qgTDxoMnDXir0RugxsmPEPVrpHw=/5171x3448/filters:fill(auto,1)/98841996-56a34ef95f9b58b7d0d16c26.jpg",
      },
      {
        title: "Design Workshop",
        location: "New York, NY",
        description:
          "Learn the latest trends in design with hands-on activities and expert guidance. Learn the latest trends in design with hands-on activities and expert guidance",
        date: "2/10/2025",
        startTime: "1:00PM",
        endTime: "5:00PM",
        status: "upcoming",
        photo: "https://www.liveabout.com/thmb/qgTDxoMnDXir0RugxsmPEPVrpHw=/5171x3448/filters:fill(auto,1)/98841996-56a34ef95f9b58b7d0d16c26.jpg",
      },
    ];
  
    const upcomingEvents = events.filter((event) => event.status === "upcoming");
    const otherEvents = events.filter((event) => event.status !== "upcoming");
  
    return (
      <>
        <div className="absolute bottom-2 left-2">
          <button onClick={() => navigate("/")} className="border-gray-300">
            Back
          </button>
        </div>

        <Navbar />
  
        <div className="p-8 bg-zinc-900 space-y-8">
          {/* Other Events */}
          <div className="space-y-4">
            {otherEvents.map((event, index) => (
              <EventTile
                key={index}
                title={event.title}
                location={event.location}
                description={event.description}
                date={event.date}
                startTime={event.startTime}
                endTime={event.endTime}
                status={event.status}
                photo={event.photo}
              />
            ))}
          </div>
  
          {/* Upcoming Events Section */}
          {upcomingEvents.length > 0 && (
            <div>
              <h2 className="text-xl font-bold text-white mb-4">Upcoming Events</h2>
              <div className="w-96 space-y-2 overflow-y-auto max-h-64 p-4 rounded-lg bg-zinc-800">
                {upcomingEvents.map((event, index) => (
                  <EventTile
                    key={index}
                    title={event.title}
                    location={event.location}
                    description={event.description}
                    date={event.date}
                    status={event.status}
                    photo={event.photo}
                    startTime={event.startTime}
                    endTime={event.endTime}
                    small
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </>
    );
  }
  
  
