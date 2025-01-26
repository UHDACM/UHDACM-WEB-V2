// EventTile.jsx
import React from "react";
import "../EventTile/EventTile.css";
import ShareIcon from "../EventTile/share-icon.svg";

const EventTile = ({
  title,
  location,
  description,
  date,
  startTime,
  endTime,
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
      <div className="rounded-lg shadow-md p-2 h-28 bg-zinc-900 flex flex-col relative justify-between transition-transform transform hover:scale-105">
        <div className="flex space-x-4">
          {photo && (
            <img
              src={photo}
              alt={title}
              className="rounded-lg w-16 h-16 object-cover"
            />
          )}
          <div className="flex flex-col justify-between flex-grow">
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-semibold text-white">{title}</h3>
              <p className="text-xs bg-white text-black px-4 py-0.5 rounded-2xl font-semibold">
                Open
              </p>
            </div>
            <p className="text-xs text-white line-clamp-2">{description}</p>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <p className="text-xs text-white flex justify-between items-center">
              <span className="font-medium">
                <svg
                  width="15"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22.5C11.7667 22.5 11.5667 22.4333 11.4 22.3C11.2333 22.1667 11.1083 21.9917 11.025 21.775C10.7083 20.8417 10.3083 19.9667 9.825 19.15C9.35833 18.3333 8.7 17.375 7.85 16.275C7 15.175 6.30833 14.125 5.775 13.125C5.25833 12.125 5 10.9167 5 9.5C5 7.55 5.675 5.9 7.025 4.55C8.39167 3.18333 10.05 2.5 12 2.5C13.95 2.5 15.6 3.18333 16.95 4.55C18.3167 5.9 19 7.55 19 9.5C19 11.0167 18.7083 12.2833 18.125 13.3C17.5583 14.3 16.9 15.2917 16.15 16.275C15.25 17.475 14.5667 18.475 14.1 19.275C13.65 20.0583 13.275 20.8917 12.975 21.775C12.8917 22.0083 12.7583 22.1917 12.575 22.325C12.4083 22.4417 12.2167 22.5 12 22.5ZM12 18.925C12.2833 18.3583 12.6 17.8 12.95 17.25C13.3167 16.7 13.85 15.9667 14.55 15.05C15.2667 14.1167 15.85 13.2583 16.3 12.475C16.7667 11.675 17 10.6833 17 9.5C17 8.11667 16.5083 6.94167 15.525 5.975C14.5583 4.99167 13.3833 4.5 12 4.5C10.6167 4.5 9.43333 4.99167 8.45 5.975C7.48333 6.94167 7 8.11667 7 9.5C7 10.6833 7.225 11.675 7.675 12.475C8.14167 13.2583 8.73333 14.1167 9.45 15.05C10.15 15.9667 10.675 16.7 11.025 17.25C11.3917 17.8 11.7167 18.3583 12 18.925ZM12 12C12.7 12 13.2917 11.7583 13.775 11.275C14.2583 10.7917 14.5 10.2 14.5 9.5C14.5 8.8 14.2583 8.20833 13.775 7.725C13.2917 7.24167 12.7 7 12 7C11.3 7 10.7083 7.24167 10.225 7.725C9.74167 8.20833 9.5 8.8 9.5 9.5C9.5 10.2 9.74167 10.7917 10.225 11.275C10.7083 11.7583 11.3 12 12 12Z"
                    fill="#FEF7FF"
                  />
                </svg>
              </span>{" "}
              {location}
            </p>
            <p className="text-xs italic">
              {date} {startTime} - {endTime}
            </p>
          </div>
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
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-xs bg-white text-black px-4 py-0.5 rounded-2xl font-semibold">Open</p>
      </div>
      <p className="text-sm text-gray-500 italic">{`${date} ${startTime} - ${endTime}`}</p>
      <p className="text-sm text-white line-clamp-3">{description}</p>
      <div className="flex justify-between items-center space-x-4">
        <p className="text-sm text-white flex items-center">
          <span className="font-medium">
            <svg
              width="24"
              height=""
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22.5C11.7667 22.5 11.5667 22.4333 11.4 22.3C11.2333 22.1667 11.1083 21.9917 11.025 21.775C10.7083 20.8417 10.3083 19.9667 9.825 19.15C9.35833 18.3333 8.7 17.375 7.85 16.275C7 15.175 6.30833 14.125 5.775 13.125C5.25833 12.125 5 10.9167 5 9.5C5 7.55 5.675 5.9 7.025 4.55C8.39167 3.18333 10.05 2.5 12 2.5C13.95 2.5 15.6 3.18333 16.95 4.55C18.3167 5.9 19 7.55 19 9.5C19 11.0167 18.7083 12.2833 18.125 13.3C17.5583 14.3 16.9 15.2917 16.15 16.275C15.25 17.475 14.5667 18.475 14.1 19.275C13.65 20.0583 13.275 20.8917 12.975 21.775C12.8917 22.0083 12.7583 22.1917 12.575 22.325C12.4083 22.4417 12.2167 22.5 12 22.5ZM12 18.925C12.2833 18.3583 12.6 17.8 12.95 17.25C13.3167 16.7 13.85 15.9667 14.55 15.05C15.2667 14.1167 15.85 13.2583 16.3 12.475C16.7667 11.675 17 10.6833 17 9.5C17 8.11667 16.5083 6.94167 15.525 5.975C14.5583 4.99167 13.3833 4.5 12 4.5C10.6167 4.5 9.43333 4.99167 8.45 5.975C7.48333 6.94167 7 8.11667 7 9.5C7 10.6833 7.225 11.675 7.675 12.475C8.14167 13.2583 8.73333 14.1167 9.45 15.05C10.15 15.9667 10.675 16.7 11.025 17.25C11.3917 17.8 11.7167 18.3583 12 18.925ZM12 12C12.7 12 13.2917 11.7583 13.775 11.275C14.2583 10.7917 14.5 10.2 14.5 9.5C14.5 8.8 14.2583 8.20833 13.775 7.725C13.2917 7.24167 12.7 7 12 7C11.3 7 10.7083 7.24167 10.225 7.725C9.74167 8.20833 9.5 8.8 9.5 9.5C9.5 10.2 9.74167 10.7917 10.225 11.275C10.7083 11.7583 11.3 12 12 12Z"
                fill="#FEF7FF"
              />
            </svg>
          </span>
          {""}
          {location}
        </p>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.33325 9.99984V16.6665C5.33325 17.1085 5.50885 17.5325 5.82141 17.845C6.13397 18.1576 6.55789 18.3332 6.99992 18.3332H16.9999C17.4419 18.3332 17.8659 18.1576 18.1784 17.845C18.491 17.5325 18.6666 17.1085 18.6666 16.6665V9.99984M15.3333 4.99984L11.9999 1.6665M11.9999 1.6665L8.66659 4.99984M11.9999 1.6665V12.4998"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default EventTile;
