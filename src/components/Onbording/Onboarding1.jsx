import React, { useState } from 'react';
import AdventurePopup from './AdventurePopup';
import EasyToJoinAdventure from './EasyToJoinAdventure';
import AdventureProtection from './AdventureProtection';
import AdventureTools from './AdventureTools';
import AdventureFAQ from './AdventureFAQ';
import Footer from "../../components/Footer";
import { useNavigate } from 'react-router-dom';

function Onboarding1() {
  const [services, setServices] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const [partnerData, setPartnerData] = useState(null);
  const navigate = useNavigate();

  const totalEarning = partnerData
    ? partnerData.pricePerService * services
    : 10000 * services;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100">
      {/* Animated Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="flex items-center group cursor-pointer">
          <img 
            src="./log.svg" 
            alt="Adventure logo" 
            className="h-12 w-12 mr-3 transition-transform duration-300 group-hover:rotate-12" 
          />
          <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Adventure Triangle
          </span>
        </div>
        <button
          onClick={() => navigate('/onboarding2')}
          className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-semibold px-8 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M6 2a1 1 0 011-1h6a1 1 0 011 1v1h3a2 2 0 012 2v10a2 2 0 01-2 2H3a2 2 0 01-2-2V5a2 2 0 012-2h3V2zm6 2H8v1h4V4zm4 3H3v9h14V7h-1z" clipRule="evenodd" />
          </svg>
          Start Adventure Setup
        </button>
      </header>

      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-16 max-w-7xl mx-auto relative">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="pattern-dots pattern-green-500 pattern-bg-white pattern-opacity-20 pattern-size-4" />
        </div>

        {/* Content Section */}
        <div className="max-w-2xl text-center lg:text-left mb-16 lg:mb-0 lg:mr-12 relative z-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 text-gray-900 leading-tight">
            Turn Your Adventure Into
            <span className="block mt-4 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
              ${totalEarning.toLocaleString()}
            </span>
          </h1>

          {/* Interactive Calculator Card */}
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100 mb-8 transform hover:scale-[1.01] transition-transform">
            <div className="mb-6">
              <p className="text-xl font-semibold text-gray-800 mb-2">
                <span className="text-green-600">{services} Adventure{services > 1 ? 's' : ''}</span> • 
                ${partnerData?.pricePerService || 6500}/experience
              </p>
              <div className="relative pt-8">
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={services}
                  onChange={(e) => setServices(Number(e.target.value))}
                  className="w-full h-3 bg-gradient-to-r from-green-200 to-blue-200 rounded-full appearance-none cursor-pointer range-lg accent-green-600"
                />
                <div className="absolute bottom-full left-0 right-0 flex justify-between text-sm text-gray-500">
                  <span>1</span>
                  <span>20 Adventures</span>
                </div>
              </div>
            </div>

            {/* Location Selector */}
            <button
              onClick={() => setShowPopup(true)}
              className="w-full group flex items-center gap-4 px-6 py-4 rounded-xl border-2 border-dashed border-green-200 bg-white/50 hover:bg-white transition-all duration-300"
            >
              <div className="bg-green-100 p-3 rounded-xl group-hover:bg-green-200 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-lg font-medium text-gray-800 group-hover:text-green-700 transition-colors">
                  {partnerData?.location || 'Choose Location'} • {partnerData?.adventureType || 'Adventure Type'}
                </p>
                <p className="text-gray-600 text-sm">
                  {partnerData?.zones || 'Select your adventure zones'}
                </p>
              </div>
            </button>
          </div>
        </div>

        {/* Interactive Globe */}
        <div className="relative w-80 h-80 lg:w-96 lg:h-96 group perspective-1000">
          <div className="absolute inset-0 rounded-full overflow-hidden shadow-2xl border-8 border-white transform rotate-[5deg] group-hover:rotate-0 transition-transform duration-500 hover:shadow-2xl hover:border-green-200">
            <iframe
              className="w-full h-full rounded-full"
              src={`https://maps.google.com/maps?q=${partnerData?.location || 'Mumbai'}&z=13&output=embed`}
              allowFullScreen
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-6 py-2 rounded-full shadow-lg border border-green-100">
            <span className="text-sm font-medium text-green-800">Adventure Location</span>
          </div>
        </div>

        {/* Popup */}
        {showPopup && (
          <AdventurePopup
            onClose={() => setShowPopup(false)}
            onSave={(data) => {
              setPartnerData(data);
              setShowPopup(false);
            }}
          />
        )}
      </div>

      {/* Feature Sections */}
      <div className="space-y-20 py-20 px-6 max-w-7xl mx-auto">
        <EasyToJoinAdventure />
        <AdventureProtection />
        <AdventureTools />
        <AdventureFAQ />
      </div>

      <Footer />
    </div>
  );
}

export default Onboarding1;