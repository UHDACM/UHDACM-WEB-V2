import { useNavigate } from "react-router-dom";
// import Button from "../components/Button/Button";
// import Navbar from "../components/Navbar/Navbar";
import EventTile from "../components/EventTile/EventTile.jsx"
import EventPhoto from "../components/EventTile/acm.png"



export default function PlaygroundPage() {
    return (
        <>
            <div className='w-screen h-screen flex items-center justify-center align-middle relative'>
                <PGPHeader/>
            </div>
        </>
    );
}

function PGPHeader() {
    const navigate = useNavigate();
  
    const events = [
      {
        title: "Tech Conference 2025",
        location: "San Francisco, CA",
        description:
          "Join us for a day of insightful talks and networking opportunities with industry leaders.",
        date: "January 25, 2025",
        status: "live",
        photo: "https://th.bing.com/th/id/OIP.HTd1AzW78Qb1PNcIHSxydgHaEk?rs=1&pid=ImgDetMain",
      },
      {
        title: "Design Workshop",
        location: "New York, NY",
        description:
          "Learn the latest trends in design with hands-on activities and expert guidance.",
        date: "February 10, 2025",
        status: "upcoming",
        photo: "https://www.liveabout.com/thmb/qgTDxoMnDXir0RugxsmPEPVrpHw=/5171x3448/filters:fill(auto,1)/98841996-56a34ef95f9b58b7d0d16c26.jpg",
      },
      {
        title: "Design Workshop",
        location: "New York, NY",
        description:
          "Learn the latest trends in design with hands-on activities and expert guidance.",
        date: "February 10, 2025",
        status: "upcoming",
        photo: "https://www.liveabout.com/thmb/qgTDxoMnDXir0RugxsmPEPVrpHw=/5171x3448/filters:fill(auto,1)/98841996-56a34ef95f9b58b7d0d16c26.jpg",
      },
      {
        title: "Design Workshop",
        location: "New York, NY",
        description:
          "Learn the latest trends in design with hands-on activities and expert guidance.",
        date: "February 10, 2025",
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
                status={event.status}
                photo={event.photo}
              />
            ))}
          </div>
  
          {/* Upcoming Events Section */}
          {upcomingEvents.length > 0 && (
            <div>
              <h2 className="text-xl font-bold text-white mb-4">Upcoming Events</h2>
              <div className="space-y-2 overflow-y-auto max-h-64 p-4 rounded-lg bg-zinc-800">
                {upcomingEvents.map((event, index) => (
                  <EventTile
                    key={index}
                    title={event.title}
                    location={event.location}
                    description={event.description}
                    date={event.date}
                    status={event.status}
                    photo={event.photo}
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
  
  
