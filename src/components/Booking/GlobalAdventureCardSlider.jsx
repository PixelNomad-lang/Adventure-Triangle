// GlobalAdventureCardSlider.js
import { useState } from "react";
import { globalAdventureData, continents, adventureTypes } from "./data";
import Filters from "./Filters";
import AdventureSlider from "./AdventureSlider";
import AdventureGrid from "./AdventureGrid";
import TopRatedAdventures from "./TopRatedAdventures";
import  { useFilter } from "./FilterContext"; // Import the context

export default function GlobalAdventureCardSlider() {
  const { activeFilter, setActiveFilter, activeContinent, setActiveContinent } = useFilter();


  const filteredAdventures = globalAdventureData.filter(item => {
    const typeMatch = activeFilter === "All" || item.type === activeFilter;
    const continentMatch = activeContinent === "All" || item.continent === activeContinent;
    return typeMatch && continentMatch;
  });

  return (
    <div className="bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with filters */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Global Adventure Experiences</h1>
          <p className="text-xl text-gray-600">Discover thrilling activities across the world</p>
        </div>
        
        <Filters 
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          activeContinent={activeContinent}
          setActiveContinent={setActiveContinent}
          continents={continents}
          adventureTypes={adventureTypes}
        />

        <AdventureSlider 
          adventures={filteredAdventures} 
          title="Featured Adventures" 
          viewAllLink={true}
        />

        <AdventureGrid 
          adventures={filteredAdventures} 
          title="All Adventures" 
          showCount={true}
        />

        <TopRatedAdventures adventures={filteredAdventures} />
      </div>
    </div>
  );
}