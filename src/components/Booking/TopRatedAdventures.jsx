// TopRatedAdventures.js
import AdventureCard from "./AdventureCard";

export default function TopRatedAdventures({ adventures }) {
  const topRated = adventures.filter(item => item.rating >= 4.8).slice(0, 6);
  
  return (
    <div className="mb-16">
      <h3 className="text-2xl font-semibold mb-6">Top Rated Adventures</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topRated.map((adventure) => (
          <AdventureCard key={adventure.id} adventure={adventure} layout="topRated" />
        ))}
      </div>
    </div>
  );
}