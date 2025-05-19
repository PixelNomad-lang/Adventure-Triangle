export default function EasyToJoinAdventure() {
  return (
    <section className="relative bg-gradient-to-br from-[#f0f4f8] via-[#e0eafc] to-[#f0f4f8] py-20 px-8 text-center overflow-hidden font-outfit">
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-purple-200 rounded-full opacity-20 -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-green-200 rounded-full opacity-20 -z-10 animate-pulse slow"></div>
      
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-gray-800 tracking-wide max-w-3xl mx-auto font-playfair">
        Join a <span className="text-gradient font-playfair bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600">Global Network</span> of Adventurers on{' '}
        <span className="font-patrick text-5xl text-green-600">Adventure Triangle</span>
      </h2>

      {/* Mobile UI Showcase */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-16 mb-20 px-4">
        <div className="w-80 bg-white rounded-xl shadow-xl hover:shadow-2xl transition-transform duration-300 p-4">
          <img
            src="/your-mobile-screen-1.png"
            alt="Explore Adventures"
            className="w-full rounded-lg"
          />
        </div>
        <div className="w-80 bg-white rounded-xl shadow-xl hover:shadow-2xl transition-transform duration-300 p-4">
          <img
            src="/your-mobile-screen-2.png"
            alt="Connect & Join"
            className="w-full rounded-lg"
          />
        </div>
      </div>

      {/* Features / Benefits */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        {/* Feature 1 */}
        <div className="bg-white rounded-xl shadow-lg p-8 hover:scale-105 hover:shadow-xl transition-transform duration-300 border-t-4 border-purple-400">
          <div className="flex justify-center mb-4">
            <div className="bg-purple-100 p-4 rounded-full shadow-lg">
              {/* Globe icon for global connection */}
              <svg
                className="w-8 h-8 text-purple-600"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={2} />
                <line x1={2} y1={12} x2={22} y2={12} stroke="currentColor" strokeWidth={2} />
                <line x1={12} y1={2} x2={12} y2={22} stroke="currentColor" strokeWidth={2} />
              </svg>
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-3 text-gray-800 font-outfit">Seamless Global Connections</h3>
          <p className="text-gray-600 text-sm font-patrick">
            Connect with adventurers worldwide and plan your next journey effortlessly.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-white rounded-xl shadow-lg p-8 hover:scale-105 hover:shadow-xl transition-transform duration-300 border-t-4 border-indigo-400">
          <div className="flex justify-center mb-4">
            <div className="bg-indigo-100 p-4 rounded-full shadow-lg">
              {/* Calendar icon for event planning */}
              <svg
                className="w-8 h-8 text-indigo-600"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x={3} y={4} width={18} height={18} rx={2} stroke="currentColor" strokeWidth={2} />
                <line x1={16} y1={2} x2={16} y2={6} stroke="currentColor" strokeWidth={2} />
                <line x1={8} y1={2} x2={8} y2={6} stroke="currentColor" strokeWidth={2} />
                <line x1={3} y1={10} x2={21} y2={10} stroke="currentColor" strokeWidth={2} />
              </svg>
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-3 text-gray-800 font-outfit">Global Event & Meetup Planning</h3>
          <p className="text-gray-600 text-sm font-patrick">
            Organize and discover events with a community that spans the globe.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-white rounded-xl shadow-lg p-8 hover:scale-105 hover:shadow-xl transition-transform duration-300 border-t-4 border-green-400">
          <div className="flex justify-center mb-4">
            <div className="bg-green-100 p-4 rounded-full shadow-lg">
              {/* People icon for community */}
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx={12} cy={8} r={4} stroke="currentColor" strokeWidth={2} />
                <path d="M4 20c0-4 4-6 8-6s8 2 8 6" stroke="currentColor" strokeWidth={2} />
              </svg>
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-3 text-gray-800 font-outfit">Trusted by Adventurers Worldwide</h3>
          <p className="text-gray-600 text-sm font-patrick">
            Join a vibrant community that spans borders and cultures, sharing unforgettable experiences.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12">
        <a
          href="#signup"
          className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 text-lg font-patrick"
        >
          Get Started Now
        </a>
      </div>
    </section>
  );
}