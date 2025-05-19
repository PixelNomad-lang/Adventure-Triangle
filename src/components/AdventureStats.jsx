import React from 'react';

function AdventureStats() {
  return (
    <div className="relative">
      {/* Solid white background for this section */}
      <div className="absolute inset-0 bg-white z-0"></div>
      
      {/* Content with higher z-index */}
      <div className="relative z-10 min-h-screen flex flex-col md:flex-row items-center justify-center p-10 gap-10">
        
        {/* Left Section */}
        <div className="relative w-full md:w-1/2 flex justify-center items-center">
          <div className="relative">
            {/* Combined Image */}
            <img 
              src="/L1.jpg" 
              alt="Event Check-in" 
              className="rounded-xl shadow-xl w-full max-w-md border-4 border-white"
            />

            {/* Users Love Us Badge */}
            <div className="absolute top-4 right-4 bg-white border border-gray-200 px-3 py-1 rounded-full shadow-lg flex items-center gap-2 text-sm font-semibold">
              <img src="/L1.jpg" alt="G2" className="w-4 h-4 rounded-full" /> 
              <span>Users Love Us</span>
            </div>

            {/* Floating Agenda Card */}
            <div className="absolute -bottom-8 left-4 bg-white rounded-xl shadow-lg p-4 w-64 text-sm space-y-1 border border-gray-100">
              <div className="flex items-center gap-2 text-blue-600 font-semibold">
                <span role="img" aria-label="clap">👏</span> 
                <span>Agenda at a Glance</span>
              </div>
              <div className="text-gray-800">
                <p>Day 1 — ✔️ Check-in</p>
                <p>Day 2 — 🎤 Keynote</p>
                <p>Day 3 — 🤝 Networking</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-8 leading-snug text-gray-900">
            Your all-in-one solution <br />for every adventure
          </h1>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/90 p-4 rounded-lg shadow">
              <p className="text-3xl font-bold text-indigo-600">7M+</p>
              <p className="text-sm text-gray-600">adventures booked</p>
            </div>
            <div className="bg-white/90 p-4 rounded-lg shadow">
              <p className="text-3xl font-bold text-teal-600">315M+</p>
              <p className="text-sm text-gray-600">happy customers</p>
            </div>
            <div className="bg-white/90 p-4 rounded-lg shadow">
              <p className="text-3xl font-bold text-amber-600">1K+</p>
              <p className="text-sm text-gray-600">5-star ratings</p>
            </div>
            <div className="bg-white/90 p-4 rounded-lg shadow">
              <p className="text-3xl font-bold text-green-600">24/7</p>
              <p className="text-sm text-gray-600">support available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdventureStats;