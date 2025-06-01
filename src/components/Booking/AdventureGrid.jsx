// AdventureGrid.js
import AdventureCard from "./AdventureCard";

export default function AdventureGrid({ adventures, title, showCount }) {
  return (
    <div className="mb-16">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-semibold">{title}</h3>
        {showCount && (
          <div className="text-sm text-gray-500">
            Showing {adventures.length} adventures
          </div>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {adventures.map((adventure) => (
          <AdventureCard key={adventure.id} adventure={adventure} layout="grid" />
        ))}
      </div>
    </div>
  );
}