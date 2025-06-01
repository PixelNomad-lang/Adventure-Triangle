// Filters.js
export default function Filters({ 
  activeFilter, 
  setActiveFilter, 
  activeContinent, 
  setActiveContinent,
  continents,
  adventureTypes
}) {
  return (
    <>
      {/* Continent Filters */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Filter by Continent</h3>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setActiveContinent("All")}
            className={`px-4 py-2 rounded-full text-sm font-medium ${activeContinent === "All" ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'}`}
          >
            All Continents
          </button>
          {continents.map(continent => (
            <button
              key={continent}
              onClick={() => setActiveContinent(continent)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${activeContinent === continent ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'}`}
            >
              {continent}
            </button>
          ))}
        </div>
      </div>

      {/* Type Filters */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Filter by Activity Type</h3>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setActiveFilter("All")}
            className={`px-4 py-2 rounded-full text-sm font-medium ${activeFilter === "All" ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'}`}
          >
            All Activities
          </button>
          {adventureTypes.map(type => (
            <button
              key={type}
              onClick={() => setActiveFilter(type)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${activeFilter === type ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'}`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}