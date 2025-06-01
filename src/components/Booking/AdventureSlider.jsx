// AdventureSlider.js
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRef } from "react";
import AdventureCard from "./AdventureCard";
export default function AdventureSlider({ adventures, title, viewAllLink }) {
  const sliderRef = useRef(null);
  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };
const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };
 return (
    <div className="relative mb-16">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-semibold">{title}</h3>
        {viewAllLink && (
          <a href="/adventures" className="text-indigo-600 hover:text-indigo-800 font-medium">
            View All Adventures →
          </a>
        )}
      </div>
       <div className="relative">
        <button 
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 focus:outline-none hidden md:block"
        >
          <FaChevronLeft className="text-gray-700 text-lg" />
        </button>
         <div 
          ref={sliderRef}
          className="flex space-x-6 overflow-x-auto pb-6 scrollbar-hide"
        >
          {adventures.map((adventure) => (
            <AdventureCard key={adventure.id} adventure={adventure} layout="slider" />
          ))}
        </div>
        
        <button 
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 focus:outline-none hidden md:block"
        >
          <FaChevronRight className="text-gray-700 text-lg" />
        </button>
      </div>
    </div>
  );
}