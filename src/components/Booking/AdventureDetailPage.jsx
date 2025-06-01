// AdventureDetailPage.js
import { FaStar, FaMapMarkerAlt, FaClock, FaUserFriends, FaCheck, FaCalendarAlt } from "react-icons/fa";
import BookingHeader from './BookingHeader';
export default function AdventureDetailPage({ adventure }) {
  if (!adventure) {
    return <div className="text-center py-20">Loading adventure details...</div>;
  }

  // Mock reviews data - in a real app, this would come from props or API
  const reviews = [
    { id: 1, name: "Sarah Johnson", rating: 5, comment: "An unforgettable experience! The guides were amazing.", date: "2024-03-15" },
    { id: 2, name: "Mike Thompson", rating: 4, comment: "Great adventure, would recommend to everyone.", date: "2024-03-10" },
    { id: 3, name: "Emma Davis", rating: 5, comment: "The views were breathtaking. Perfect organization.", date: "2024-03-05" }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <BookingHeader />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <img
            src={adventure.image}
            alt={adventure.title}
            className="w-full rounded-xl shadow-md"
          />
          {/* Additional Images Gallery */}
          <div className="grid grid-cols-3 gap-4 mt-4">
            <img src={adventure.image} alt="Gallery 1" className="rounded-lg shadow-sm hover:opacity-75 transition" />
            <img src={adventure.image} alt="Gallery 2" className="rounded-lg shadow-sm hover:opacity-75 transition" />
            <img src={adventure.image} alt="Gallery 3" className="rounded-lg shadow-sm hover:opacity-75 transition" />
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{adventure.title}</h1>
          <div className="flex items-center text-gray-600 mb-4">
            <FaMapMarkerAlt className="mr-2" />
            <span>{adventure.location}, {adventure.continent}</span>
          </div>

          <div className="flex items-center mb-6">
            <div className="flex items-center bg-yellow-50 px-3 py-1 rounded-full mr-4">
              <FaStar className="text-yellow-500 mr-1" />
              <span className="font-medium">{adventure.rating}</span>
            </div>
            <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full font-medium">
              {adventure.type}
            </span>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">About this adventure</h2>
            <p className="text-gray-700">{adventure.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-600 mb-1">Duration</h3>
              <p>{adventure.duration}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-600 mb-1">Difficulty</h3>
              <p className="capitalize">{adventure.difficulty}</p>
            </div>
          </div>

          {/* What's Included Section */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-3">What's Included</h2>
            <div className="space-y-2">
              <div className="flex items-center">
                <FaCheck className="text-green-500 mr-2" />
                <span>Professional guide</span>
              </div>
              <div className="flex items-center">
                <FaCheck className="text-green-500 mr-2" />
                <span>All necessary equipment</span>
              </div>
              <div className="flex items-center">
                <FaCheck className="text-green-500 mr-2" />
                <span>Lunch and snacks</span>
              </div>
              <div className="flex items-center">
                <FaCheck className="text-green-500 mr-2" />
                <span>Transportation to/from meeting point</span>
              </div>
              <div className="flex items-center">
                <FaCheck className="text-green-500 mr-2" />
                <span>Photos of your adventure</span>
              </div>
            </div>
          </div>

          {/* Additional Details */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-3">Additional Details</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <FaUserFriends className="text-gray-600 mr-2" />
                <span>Group size: 2-8 people</span>
              </div>
              <div className="flex items-center">
                <FaClock className="text-gray-600 mr-2" />
                <span>Start time: 8:00 AM</span>
              </div>
              <div className="flex items-center">
                <FaCalendarAlt className="text-gray-600 mr-2" />
                <span>Available: Year-round</span>
              </div>
            </div>
          </div>

          <div className="bg-indigo-50 p-6 rounded-xl mb-6">
            <h3 className="text-xl font-bold text-indigo-800 mb-2">{adventure.price}</h3>
            <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition">
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold">{review.name}</h3>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`{i < review.rating ? 'text-yellow-500' : 'text-gray-300'} mr-1`}
                      />
                    ))}
                  </div>
                </div>
                <span className="text-gray-500 text-sm">{review.date}</span>
              </div>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}