export default function SearchBar() {
  return (
    <div className="flex items-center justify-between max-w-5xl mx-auto px-4 py-2 bg-white rounded-full shadow-md border mt-8">
      {/* Where */}
      <div className="px-4 border-r flex-1">
        <label className="block text-xs font-semibold text-gray-700">Where</label>
        <input
          type="text"
          placeholder="Search destinations"
          className="w-full text-sm text-gray-900 placeholder-gray-500 focus:outline-none"
        />
      </div>
{/* Check in */}
      <div className="px-4 border-r flex-1">
        <label className="block text-xs font-semibold text-gray-700">Check in</label>
        <input
          type="date"
          className="w-full text-sm text-gray-900 placeholder-gray-500 focus:outline-none"
        />
      </div>
{/* Check out */}
      <div className="px-4 border-r flex-1">
        <label className="block text-xs font-semibold text-gray-700">Check out</label>
        <input
          type="date"
          className="w-full text-sm text-gray-900 placeholder-gray-500 focus:outline-none"
        />
      </div>
{/* Who */}
      <div className="px-4 flex-1">
        <label className="block text-xs font-semibold text-gray-700">Who</label>
        <input
          type="text"
          placeholder="Add guests"
          className="w-full text-sm text-gray-900 placeholder-gray-500 focus:outline-none"
        />
      </div>
{/* Search Button */}
      <div className="pl-4">
        <button className="bg-rose-500 hover:bg-rose-600 transition text-white rounded-full p-3">
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1011 18.5a7.5 7.5 0 005.65-2.85z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
