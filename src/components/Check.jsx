import React, { useState } from 'react';

function AdventureTourFeatures() {
  const [activeTab, setActiveTab] = useState('features');

  return (
    <div className="relative py-20 px-4 sm:px-6 lg:px-8 z-20 opacity-80">
      {/* Solid background overlay to ensure content visibility */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 z-0"></div>
      
      {/* Content container with higher z-index */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header with animated gradient */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-800 bg-blue-200 rounded-full mb-4">
            HIMRAHI ADVENTURES TECH
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-800">
              Elevate Your Adventure Tours
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            Transform how you plan, manage, and deliver unforgettable outdoor experiences with our 
            <span className="font-semibold text-blue-700"> adventure-specific </span>
            tour management platform.
          </p>
        </div>

        {/* Interactive tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-xl bg-white p-1 shadow-md">
            <button
              onClick={() => setActiveTab('features')}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all ${
                activeTab === 'features' 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Core Features
            </button>
            <button
              onClick={() => setActiveTab('solutions')}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all ${
                activeTab === 'solutions' 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Adventure Solutions
            </button>
            <button
              onClick={() => setActiveTab('integrations')}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all ${
                activeTab === 'integrations' 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Mountain Tech
            </button>
          </div>
        </div>

        {/* Feature cards with adventure themes - now with solid backgrounds */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {/* Tour Booking */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all hover:-translate-y-2 hover:shadow-xl">
            <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
              <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Adventure Booking</h3>
              <p className="text-gray-600 mb-6">Create stunning tour packages for treks, climbs, and expeditions with flexible options.</p>
              <a href="#" className="inline-flex items-center text-blue-600 font-medium group">
                Explore booking options
                <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Itinerary Access */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all hover:-translate-y-2 hover:shadow-xl">
            <div className="h-48 bg-gradient-to-br from-teal-500 to-emerald-700 flex items-center justify-center">
              <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Live Itineraries</h3>
              <p className="text-gray-600 mb-6">Real-time updates, weather alerts, and GPS tracking for outdoor adventures.</p>
              <a href="#" className="inline-flex items-center text-teal-600 font-medium group">
                See itinerary features
                <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Check-in System */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all hover:-translate-y-2 hover:shadow-xl">
            <div className="h-48 bg-gradient-to-br from-purple-500 to-indigo-700 flex items-center justify-center">
              <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Smart Check-in</h3>
              <p className="text-gray-600 mb-6">QR codes, digital waivers, and gear check for seamless adventure starts.</p>
              <a href="#" className="inline-flex items-center text-indigo-600 font-medium group">
                Learn about check-in
                <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* CTA with adventure theme */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 sm:p-12 shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ready to Transform Your Adventure Tours?</h3>
          <p className="text-blue-100 text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of adventure companies using Himrahi to deliver unforgettable outdoor experiences.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-lg hover:bg-gray-100 transition shadow-lg">
              Schedule a Demo
            </button>
            <button className="bg-transparent border-2 border-white text-white font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-lg hover:bg-white hover:bg-opacity-10 transition shadow-lg">
              Explore Features
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdventureTourFeatures;