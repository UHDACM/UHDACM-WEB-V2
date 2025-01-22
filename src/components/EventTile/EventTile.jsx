// EventTile.jsx
import React from "react";
import "../EventTile/EventTile.css";
import ShareIcon from "../EventTile/share-icon.svg";

const EventTile = ({
  title,
  location,
  description,
  date,
  status,
  photo,
  small,
}) => {
  const statusColors = {
    live: "bg-red-500 text-white",
    upcoming: "bg-blue-500 text-white",
    past: "bg-gray-400 text-white",
  };

  if (small) {
    // Compact layout for upcoming events
    return (
      <div className="rounded-lg shadow-md p-2 h-28 bg-zinc-900 flex space-x-4 relative transition-transform transform hover:scale-105">
        {photo && (
          <img
            src={photo}
            alt={title}
            className="rounded-lg w-16 h-16 object-cover"
          />
        )}
        <div className="flex flex-col justify-between flex-grow">
          <h3 className="text-sm font-semibold text-white">{title}</h3>
          <p className="text-xs text-white">
            <span className="font-medium">Location:</span> {location}
          </p>
          <p className="text-xs text-white italic">{date}</p>
        </div>
      </div>
    );
  }

  // Default layout for other events
  return (
    <div className="w-96 bg-zinc-800 rounded-lg shadow-md p-4 flex flex-col space-y-4 relative transition-transform transform hover:scale-105">
      {photo && (
        <img
          src={photo}
          alt={`${title} event`}
          className="w-full h-40 object-cover rounded-t-lg"
        />
      )}
      {status && (
        <div
          className={`absolute top-2 right-2 text-xs font-bold px-2 py-1 rounded ${statusColors[status]}`}
        >
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </div>
      )}
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="text-sm text-gray-600">
        <span className="font-medium">Location:</span> {location}
      </p>
      <p className="text-sm text-gray-700 line-clamp-3">{description}</p>
      <p className="text-sm text-gray-500 italic">{date}</p>
    </div>
  );
};

export default EventTile;
