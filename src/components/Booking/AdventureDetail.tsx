// AdventureDetail.js
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { globalAdventureData } from "./data";
import { useAuth } from "./AuthContext"; // Assuming you have an AuthContext
import React from 'react'; // Add React import to fix JSX errors

// Add type definitions
interface Certification {
  id: number;
  name: string;
  difficulty: string[];
  price: number;
}

interface BookingDetails {
  persons: number;
  days: number;
  startDate: string;
}

export default function AdventureDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useAuth(); // Get authentication status
  const adventure = globalAdventureData.find(item => item.id.toString() === id);
  const [selectedCertification, setSelectedCertification] = useState<Certification | null>(null);
  const [totalPrice, setTotalPrice] = useState<number>(adventure?.price || 0);
  const [showBookingForm, setShowBookingForm] = useState<boolean>(false);
  const [bookingDetails, setBookingDetails] = useState<BookingDetails>({
    persons: 1,
    days: 1,
    startDate: '',
  });

  // Get nearby adventures (same continent, different location)
  const nearbyAdventures = globalAdventureData.filter(item =>
    item.continent === adventure?.continent &&
    item.location !== adventure?.location
  ).slice(0, 3); // Show only 3 nearby adventures

  // Get related adventures (same type/category, different location)
  const relatedAdventures = globalAdventureData.filter(item =>
    item.type === adventure?.type &&
    item.id !== adventure?.id
  ).slice(0, 3); // Show only 3 related adventures

  if (!adventure) {
    return <div className="text-center mt-10 text-red-500">Adventure not found!</div>;
  }

  // Certification options with difficulty-based pricing
  const certificationOptions = [
    { id: 1, name: "Basic Completion Certificate", difficulty: ["Easy"], price: 20 },
    { id: 2, name: "Adventure Achievement Certificate", difficulty: ["Easy", "Medium"], price: 40 },
    { id: 3, name: "Advanced Explorer Certification", difficulty: ["Medium", "Hard"], price: 60 },
    { id: 4, name: "Universal Adventurer Diploma", difficulty: ["Hard", "Extreme"], price: 100 },
  ];

  const handleCertificationSelect = (cert) => {
    setSelectedCertification(cert);
    setTotalPrice(adventure.price + cert.price);
  };

  const calculateTotalPrice = () => {
    if (!adventure) return 0;
    const basePrice = Number(adventure.price) * bookingDetails.persons * bookingDetails.days;
    const certificationPrice = selectedCertification ? selectedCertification.price : 0;
    return basePrice + certificationPrice;
  };

  const handleBookingFormSubmit = (e) => {
    e.preventDefault();
    const finalPrice = calculateTotalPrice();
    setTotalPrice(finalPrice);
    setShowBookingForm(false);

    // Proceed to review and payment page with booking details
    navigate('/review-payment', {
      state: {
        adventure,
        certification: selectedCertification,
        totalPrice: finalPrice,
        bookingDetails
      }
    });
  };

  const handleBookNow = () => {
    if (!currentUser) {
      // Redirect to login page with state to come back after authentication
      navigate('/login', { state: { from: `/adventures/${id}` } });
      return;
    }
    setShowBookingForm(true);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-xl rounded-2xl mt-8">

      {/* Header with title and rating */}
      <div className="flex justify-between items-start mb-6">
        <h1 className="text-4xl font-bold text-gray-900">{adventure.title}</h1>
        <div className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-lg font-semibold">
          ★ {adventure.rating} Universal Rating
        </div>
      </div>

      {/* Main content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left column - Image and basic info */}
        <div className="lg:col-span-2 space-y-6">
          <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
            <img
              src={adventure.image}
              alt={adventure.title}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <h2 className="text-2xl font-bold text-white">{adventure.location}</h2>
              <p className="text-gray-200">{adventure.continent} • {adventure.type}</p>
            </div>
          </div>

          {/* Adventure highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <p className="text-gray-500">Duration</p>
              <p className="font-bold text-lg">{adventure.duration}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <p className="text-gray-500">Difficulty</p>
              <p className="font-bold text-lg">{adventure.difficulty}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <p className="text-gray-500">Group Size</p>
              <p className="font-bold text-lg">{adventure.groupSize || "2-12"}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <p className="text-gray-500">Languages</p>
              <p className="font-bold text-lg">{adventure.languages || "English, Local"}</p>
            </div>
          </div>

          {/* Description */}
          <div className="mt-6">
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">Universal Adventure Experience</h3>
            <p className="text-gray-700 leading-relaxed">{adventure.description}</p>
          </div>

          {/* What's included */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">What This Universal Adventure Offers</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {adventure.included?.map((item, index) => (
                <div key={index} className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700">{item}</p>
                </div>
              )) || (
                  <>
                    <div className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-gray-700">Professional guides with universal training</p>
                    </div>
                    <div className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-gray-700">All necessary equipment</p>
                    </div>
                    <div className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-gray-700">Safety briefing and orientation</p>
                    </div>
                    <div className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-gray-700">Cultural immersion activities</p>
                    </div>
                  </>
                )}
            </div>
          </div>
        </div>

        {/* Right column - Booking card */}
        <div className="lg:col-span-1">
          <div className="bg-gray-50 p-6 rounded-xl shadow-md sticky top-6">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Book Your Adventure</h3>

            {/* Price display */}
            <div className="mb-6">
              <p className="text-gray-600">Starting from</p>
              <p className="text-3xl font-bold text-indigo-700">{adventure.price}</p>
              <p className="text-sm text-gray-500">per person</p>
            </div>

            {/* Certification options */}
            <div className="mb-6">
              <h4 className="font-semibold mb-3 text-gray-700">Add Universal Certification</h4>
              <div className="space-y-2">
                {certificationOptions
                  .filter(cert => cert.difficulty.includes(adventure.difficulty))
                  .map(cert => (
                    <div
                      key={cert.id}
                      className={`p-3 border rounded-lg cursor-pointer transition-colors ${selectedCertification?.id === cert.id ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200 hover:border-indigo-300'}`}
                      onClick={() => handleCertificationSelect(cert)}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">{cert.name}</p>
                          <p className="text-sm text-gray-600">+${cert.price}</p>
                        </div>
                        {selectedCertification?.id === cert.id && (
                          <svg className="h-5 w-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Total price */}
            <div className="border-t border-gray-200 pt-4 mb-6">
              <div className="flex justify-between items-center">
                <p className="font-semibold text-gray-700">Total</p>
                <p className="text-xl font-bold text-indigo-700">{totalPrice}</p>
              </div>
            </div>

            {/* Book button */}
            <button
              onClick={handleBookNow}
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-4 rounded-lg font-bold hover:from-indigo-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg"
            >
              {selectedCertification ? 'Book with Certification' : 'Book Now'}
            </button>

            {/* Universal benefits */}
            <div className="mt-6 pt-4 border-t border-gray-200">
              <h4 className="font-semibold mb-2 text-gray-700">Universal Benefits</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <svg className="h-4 w-4 text-green-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Globally recognized certification</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-4 w-4 text-green-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Digital badge for social sharing</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-4 w-4 text-green-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Access to global adventurer community</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials section */}
      <div className="mt-16">
        <h3 className="text-2xl font-semibold mb-6 text-gray-800">Universal Adventurer Testimonials</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-800 font-bold mr-3">
                  {item}
                </div>
                <div>
                  <p className="font-medium">Adventurer from {['Canada', 'Japan', 'Brazil'][item - 1]}</p>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`h-4 w-4 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">"This adventure changed my perspective on the world. The universal approach made it accessible and meaningful regardless of my background."</p>
            </div>
          ))}
        </div>
      </div>

      {/* Related Adventures section */}
      <div className="mt-16">
        <h3 className="text-2xl font-semibold mb-6 text-gray-800">More {adventure.type} Adventures</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedAdventures.map((relatedAdventure) => (
            <div
              key={relatedAdventure.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => navigate(`/adventures/${relatedAdventure.id}`)}
            >
              <div className="relative h-48">
                <img
                  src={relatedAdventure.image}
                  alt={relatedAdventure.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-sm font-semibold">
                  ★ {relatedAdventure.rating}
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-lg mb-1">{relatedAdventure.title}</h4>
                <p className="text-gray-600 text-sm mb-2">{relatedAdventure.location}, {relatedAdventure.continent}</p>
                <div className="flex justify-between items-center">
                  <span className="text-indigo-600 font-semibold">{relatedAdventure.price}</span>
                  <span className="text-sm text-gray-500">{relatedAdventure.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Nearby Adventures section */}
      <div className="mt-16">
        <h3 className="text-2xl font-semibold mb-6 text-gray-800">More Adventures in {adventure.continent}</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {nearbyAdventures.map((nearbyAdventure) => (
            <div
              key={nearbyAdventure.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => navigate(`/adventures/${nearbyAdventure.id}`)}
            >
              <div className="relative h-48">
                <img
                  src={nearbyAdventure.image}
                  alt={nearbyAdventure.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-sm font-semibold">
                  ★ {nearbyAdventure.rating}
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-lg mb-1">{nearbyAdventure.title}</h4>
                <p className="text-gray-600 text-sm mb-2">{nearbyAdventure.location} • {nearbyAdventure.type}</p>
                <div className="flex justify-between items-center">
                  <span className="text-indigo-600 font-semibold">{nearbyAdventure.price}</span>
                  <span className="text-sm text-gray-500">{nearbyAdventure.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Booking Form Modal */}
      {showBookingForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800">Book Your Adventure</h3>
              <button
                onClick={() => setShowBookingForm(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleBookingFormSubmit} className="space-y-6" jsx="true">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Persons
                </label>
                <input
                  type="number"
                  min="1"
                  max="20"
                  value={bookingDetails.persons}
                  onChange={(e) => setBookingDetails({ ...bookingDetails, persons: parseInt(e.target.value) })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Days
                </label>
                <input
                  type="number"
                  min="1"
                  max="30"
                  value={bookingDetails.days}
                  onChange={(e) => setBookingDetails({ ...bookingDetails, days: parseInt(e.target.value) })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Start Date
                </label>
                <input
                  type="date"
                  value={bookingDetails.startDate}
                  onChange={(e) => setBookingDetails({ ...bookingDetails, startDate: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>

              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-600">Base Price</span>
                  <span className="font-semibold">${adventure.price * bookingDetails.persons * bookingDetails.days}</span>
                </div>
                {selectedCertification && (
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-600">Certification</span>
                    <span className="font-semibold">+${selectedCertification.price}</span>
                  </div>
                )}
                <div className="flex justify-between items-center text-lg font-bold">
                  <span>Total Price</span>
                  <span className="text-indigo-600">${calculateTotalPrice()}</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-4 rounded-lg font-bold hover:from-indigo-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg"
              >
                Confirm Booking
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}