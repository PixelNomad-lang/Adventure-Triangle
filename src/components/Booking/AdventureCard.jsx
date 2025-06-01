// AdventureCard.js
import { FaHeart, FaStar, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";


export default function AdventureCard({ adventure, layout = "grid" }) {
  const cardClasses = {
    grid: "rounded-xl shadow-md hover:shadow-lg bg-white transition duration-300 overflow-hidden cursor-pointer group",
    slider: "min-w-[300px] rounded-xl shadow-md hover:shadow-lg bg-white transition duration-300 relative flex-shrink-0 cursor-pointer group",
    topRated: "rounded-xl shadow-md hover:shadow-lg bg-white transition duration-300 overflow-hidden flex cursor-pointer group"
  };
  const imageContainerClasses = {
    grid: "relative h-48 overflow-hidden",
    slider: "relative h-48 overflow-hidden rounded-t-xl",
    topRated: "relative w-1/3 flex-shrink-0"
  };

  return (
    <Link to={`/adventures/${adventure.id}`} className={cardClasses[layout]}>
      <div className={imageContainerClasses[layout]}>
        <img
          src={adventure.image}
          alt={adventure.title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
          loading="lazy"
        />
        <div className="absolute top-2 left-2 bg-white text-xs font-semibold px-2 py-1 rounded-full">
          {adventure.continent}
        </div>
        <div className="absolute top-2 right-2 bg-white p-2 rounded-full hover:bg-red-100 cursor-pointer">
          <FaHeart className="text-gray-700 hover:text-red-500" />
        </div>
      </div>
      <div className={layout === "topRated" ? "p-4 w-2/3" : "p-4"}>
        <h3 className="font-semibold text-lg mb-1 group-hover:text-indigo-600">{adventure.title}</h3>
        <div className="flex items-center text-gray-600 text-sm mb-2">
          <FaMapMarkerAlt className="mr-1" />
          <span>{adventure.location}</span>
        </div>
        {layout !== "topRated" && (
          <div className="flex items-center text-gray-600 text-sm mb-3">
            <FaClock className="mr-1" />
            <span>{adventure.duration}</span>
            <span className="mx-2">•</span>
            <span className="capitalize">{adventure.difficulty}</span>
          </div>
        )}
        <p className="text-gray-800 font-medium mb-2">{adventure.price}</p>
        <div className="flex items-center gap-1 text-sm text-gray-600">
          <FaStar className="text-yellow-500" />
          <span>{adventure.rating}</span>
          <span className="text-gray-400 ml-2">{adventure.type}</span>
          {layout === "topRated" && adventure.rating >= 4.8 && (
            <span className="text-gray-400 ml-2 text-xs bg-yellow-50 px-2 py-0.5 rounded-full">
              Top Rated
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}