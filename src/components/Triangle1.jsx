import { useState, useEffect, useRef } from 'react';

const AutoHoverTriangle = () => {
  const [hoveredZone, setHoveredZone] = useState(null);
  const [autoHoverActive, setAutoHoverActive] = useState(true);
  const [rotationAngle, setRotationAngle] = useState(0);
  const animationRef = useRef();

  // Sample images for each zone (replace with your actual image URLs)
  const zoneImages = {
    AGB: [
      "https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1518632618335-df838848f9f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    ],
    AGC: [
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1513415277900-a62401e19be4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1504470695779-75300268aa0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    ],
    BGC: [
      "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1501554728187-ce583db33af7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    ]
  };

  // Increased triangle size
  const points = {
    A: { x: 300, y: 80, name: "Air Adventure", color: "bg-blue-500" },
    B: { x: 80, y: 360, name: "Water Adventure", color: "bg-teal-500" },
    C: { x: 520, y: 360, name: "Land Adventure", color: "bg-green-500" },
    G: { x: 300, y: 260, name: "Central Hub", color: "bg-purple-600" }
  };

  const zoneNames = {
    AGB: "Air ",
    AGC: "Water ", 
    BGC: "Land "
  };

  const zoneActivities = {
    AGB: ["Paragliding", "Zip Line", "Sky Diving"],
    AGC: ["River Rafting", "Scuba Diving", "Jet Skiing"],
    BGC: ["Rock Climbing", "Off-Roading", "Forest Trekking"]
  };

  // Calculate zone centers
  const zoneCenters = {
    AGB: {
      x: (points.A.x + points.G.x + points.B.x) / 3,
      y: (points.A.y + points.G.y + points.B.y) / 3,
    },
    AGC: {
      x: (points.A.x + points.G.x + points.C.x) / 3,
      y: (points.A.y + points.G.y + points.C.y) / 3,
    },
    BGC: {
      x: (points.B.x + points.G.x + points.C.x) / 3,
      y: (points.B.y + points.G.y + points.C.y) / 3,
    },
  };

  // Auto-hover effect
  useEffect(() => {
    if (!autoHoverActive) return;

    const zones = ['AGB', 'AGC', 'BGC'];
    let currentIndex = 0;

    const interval = setInterval(() => {
      setHoveredZone(zones[currentIndex]);
      currentIndex = (currentIndex + 1) % zones.length;
      
      if (currentIndex === 0) {
        setTimeout(() => {
          setAutoHoverActive(false);
          setHoveredZone(null);
        }, 5000);
        clearInterval(interval);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [autoHoverActive]);

  // Animation for rotating circular text
  useEffect(() => {
    const animate = () => {
      setRotationAngle(prevAngle => (prevAngle + 0.5) % 360);
      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  // Create circular text
  const circularText = "HimRahi Adventures • ";
  const radius = 240;
  const centerX = 300;
  const centerY = 220;

  // Handle book now click
  const handleBookNow = (activity) => {
    alert(`Booking ${activity} now!`);
    // In a real app, you would redirect to booking page or open a modal
  };
  // Array of background images to cycle through
  const backgroundImages = [
    "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80", // Mountain lake
    "https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80", // Desert canyon
    "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80", // Forest waterfall
    "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80", // Mountain hiking
    "https://images.unsplash.com/photo-1518632618335-df838848f9f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80", // Tropical beach
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80", // Snowy mountains
    "https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80", // Desert dunes
    "https://images.unsplash.com/photo-1513415277900-a62401e19be4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80", // Underwater coral
    "https://images.unsplash.com/photo-1504470695779-75300268aa0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80", // Jungle river
    "https://images.unsplash.com/photo-1501554728187-ce583db33af7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"  // Cliff diving
  ];

  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  // Background image rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      {/* Fixed Background with changing images */}
      <div 
        className="fixed inset-0 z-0 h-screen transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${backgroundImages[currentBgIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          opacity: 1
        }}
      >
        {/* Semi-transparent overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      {/* Scrollable Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="min-h-screen flex flex-col justify-center">
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent pt-12">
              Adventure Triangle Park
            </h1>

            <div className="relative h-[600px] w-full max-w-4xl mx-auto mb-12">
              <svg 
                className="w-full h-full"
                viewBox="0 0 600 400"
                preserveAspectRatio="xMidYMid meet"
              >
                {/* Gradient Definitions */}
                <defs>
                  <linearGradient id="AGBGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(59, 130, 246, 0.7)" />
                    <stop offset="100%" stopColor="rgba(16, 185, 129, 0.7)" />
                  </linearGradient>
                  <linearGradient id="AGCGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(59, 130, 246, 0.7)" />
                    <stop offset="100%" stopColor="rgba(5, 150, 105, 0.7)" />
                  </linearGradient>
                  <linearGradient id="BGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(16, 185, 129, 0.7)" />
                    <stop offset="100%" stopColor="rgba(5, 150, 105, 0.7)" />
                  </linearGradient>
                  <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="5" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Rotating circular text */}
                <g transform={`rotate(${rotationAngle}, ${centerX}, ${centerY})`}>
                  {Array.from(circularText.repeat(5)).map((char, index) => {
                    const angle = (index * 360 / circularText.length) - 90;
                    const radian = angle * (Math.PI / 180);
                    const x = centerX + radius * Math.cos(radian);
                    const y = centerY + radius * Math.sin(radian);
                    
                    return (
                      <text
                        key={index}
                        x={x}
                        y={y}
                        textAnchor="middle"
                        fill="#4F46E5"
                        fontSize="16"
                        fontWeight="600"
                        opacity={index < 3 ? 0 : 1}
                        transform={`rotate(${angle + 90}, ${x}, ${y})`}
                        className="font-mono"
                      >
                        {char}
                      </text>
                    );
                  })}
                </g>

                {/* Solid Triangle Base */}
                <polygon
                  points={`${points.A.x},${points.A.y} ${points.B.x},${points.B.y} ${points.C.x},${points.C.y}`}
                  fill="rgba(255, 255, 255, 0.1)"
                  stroke="rgba(255, 255, 255, 0.3)"
                  strokeWidth="2"
                />

                {/* Zone Polygons with solid colors */}
                {['AGB', 'AGC', 'BGC'].map((key) => (
                  <polygon
                    key={key}
                    points={
                      key === 'AGB'
                        ? `${points.A.x},${points.A.y} ${points.G.x},${points.G.y} ${points.B.x},${points.B.y}`
                        : key === 'AGC'
                          ? `${points.A.x},${points.A.y} ${points.G.x},${points.G.y} ${points.C.x},${points.C.y}`
                          : `${points.B.x},${points.B.y} ${points.G.x},${points.G.y} ${points.C.x},${points.C.y}`
                    }
                    fill={
                      key === 'AGB' ? 'url(#AGBGradient)' :
                      key === 'AGC' ? 'url(#AGCGradient)' : 'url(#BGradient)'
                    }
                    stroke={hoveredZone === key ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.3)'}
                    strokeWidth={hoveredZone === key ? '3' : '1.5'}
                    onMouseEnter={() => {
                      setHoveredZone(key);
                      setAutoHoverActive(false);
                    }}
                    onMouseLeave={() => setHoveredZone(null)}
                    className="cursor-pointer transition-all duration-300"
                    style={{ 
                      pointerEvents: 'fill',
                      filter: hoveredZone === key ? 'drop-shadow(0 0 12px rgba(99, 102, 241, 0.5))' : 'none',
                      opacity: hoveredZone && hoveredZone !== key ? 0.7 : 1
                    }}
                  />
                ))}

                {/* Zone Names */}
                {['AGB', 'AGC', 'BGC'].map((key) => (
                  <text
                    key={key}
                    x={zoneCenters[key].x}
                    y={zoneCenters[key].y + 4}
                    textAnchor="middle"
                    className={`font-bold text-xl ${
                      key === 'AGB' ? 'fill-blue-100' : 
                      key === 'AGC' ? 'fill-teal-100' : 'fill-green-100'
                    }`}
                    style={{ 
                      textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                      opacity: hoveredZone === key ? 1 : 0.8
                    }}
                  >
                    {zoneNames[key]}
                  </text>
                ))}

                {/* Vertex Points with animation */}
                {['A', 'B', 'C', 'G'].map((key) => (
                  <g key={key} transform={`translate(${points[key].x},${points[key].y})`}>
                    <circle
                      r="2"
                      fill={key === 'G' ? "#8B5CF6" : 
                            key === 'A' ? "#3B82F6" : 
                            key === 'B' ? "#10B981" : "#059669"}
                      stroke="white"
                      strokeWidth="1"
                      className="animate-pulse"
                      style={{ filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.5))' }}
                    />
                   
                  </g>
                ))}

                {/* Central Hub Label */}
               
              </svg>

              {/* Enhanced Activity Display with Images and Book Now Button */}
              {hoveredZone && (
                <div 
                  className={`absolute p-6 rounded-2xl backdrop-blur-lg border border-white/20 shadow-2xl ${
                    hoveredZone === 'AGB' ? 'bg-blue-600/30' :
                    hoveredZone === 'AGC' ? 'bg-teal-600/30' : 'bg-green-600/30'
                  } text-white`}
                  style={{
                    left: `${points.G.x - 150}px`,
                    top: `${points.G.y + 20}px`,
                    width: '320px',
                    zIndex: 10,
                    animation: 'slideIn 0.3s ease-out'
                  }}
                >
                  <h3 className="font-bold text-2xl mb-4 flex items-center gap-2">
                    <span className="p-3 bg-white/10 rounded-lg">{zoneNames[hoveredZone]}</span>
                  </h3>
                  
                  {/* Activity Images Carousel */}
                  <div className="mb-4 relative h-40 rounded-lg overflow-hidden">
                    {zoneImages[hoveredZone].map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt={zoneActivities[hoveredZone][index]}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                          index === 0 ? 'opacity-100' : 'opacity-0'
                        }`}
                      />
                    ))}
                  </div>
                  
                  <ul className="space-y-3 mb-4">
                    {zoneActivities[hoveredZone].map((activity, index) => (
                      <li 
                        key={index}
                        className="flex items-center justify-between gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <span className={`text-xl ${
                            hoveredZone === 'AGB' ? 'text-blue-300' :
                            hoveredZone === 'AGC' ? 'text-teal-300' : 'text-green-300'
                          }`}>▹</span>
                          <span>{activity}</span>
                        </div>
                        <button
                          onClick={() => handleBookNow(activity)}
                          className={`px-3 py-1 text-sm rounded-md ${
                            hoveredZone === 'AGB' ? 'bg-blue-500 hover:bg-blue-600' :
                            hoveredZone === 'AGC' ? 'bg-teal-500 hover:bg-teal-600' : 
                            'bg-green-500 hover:bg-green-600'
                          } transition-colors`}
                        >
                          Book
                        </button>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Book All Button */}
                  <button
                    onClick={() => handleBookNow(zoneNames[hoveredZone] + "Package")}
                    className={`w-full py-2 px-4 rounded-lg font-bold ${
                      hoveredZone === 'AGB' ? 'bg-blue-600 hover:bg-blue-700' :
                      hoveredZone === 'AGC' ? 'bg-teal-600 hover:bg-teal-700' : 
                      'bg-green-600 hover:bg-green-700'
                    } transition-colors`}
                  >
                    See All Activities
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Additional Content Sections */}
        <div className="bg-white/10 backdrop-blur-md">
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-4xl mx-auto text-white">
              <h2 className="text-4xl font-bold mb-8">About Adventure Triangle</h2>
              <div className="space-y-6 text-lg">
                <p>
                  The Adventure Triangle Park is a premier destination for thrill-seekers and nature enthusiasts alike. 
                  Nestled in the heart of breathtaking landscapes, our park offers three distinct zones of exhilarating 
                  activities designed to push your limits while ensuring maximum safety.
                </p>
                <p>
                  Our certified guides have years of experience in their respective adventure fields, providing 
                  not just safety supervision but also expert tips to enhance your experience. Whether you're 
                  a first-timer or an experienced adventurer, we have something to challenge and excite you.
                </p>
                <p>
                  The park was founded in 2010 with a mission to make adventure sports more accessible while 
                  maintaining the highest safety standards. Since then, we've hosted over 50,000 adventurers 
                  from around the world.
                </p>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4 py-20">
            <h2 className="text-4xl font-bold mb-12 text-center text-white">Our Adventure Zones</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Air Adventures",
                  description: "Soar through the skies with our exhilarating air activities",
                  activities: ["Paragliding", "Skydiving", "Zip Lining", "Hot Air Balloon"],
                  color: "from-blue-500 to-indigo-600"
                },
                {
                  title: "Water Adventures",
                  description: "Ride the waves and explore underwater wonders",
                  activities: ["White Water Rafting", "Scuba Diving", "Jet Skiing", "Kayaking"],
                  color: "from-teal-500 to-cyan-600"
                },
                {
                  title: "Land Adventures",
                  description: "Challenge yourself with our ground-based thrills",
                  activities: ["Rock Climbing", "Mountain Biking", "Off-Roading", "Forest Trekking"],
                  color: "from-green-500 to-emerald-600"
                }
              ].map((zone, index) => (
                <div key={index} className="bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className={`h-3 bg-gradient-to-r ${zone.color}`}></div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-white">{zone.title}</h3>
                    <p className="text-white/80 mb-4">{zone.description}</p>
                    <ul className="space-y-2 mb-6">
                      {zone.activities.map((activity, i) => (
                        <li key={i} className="flex items-center">
                          <span className="w-2 h-2 rounded-full bg-white mr-2"></span>
                          <span className="text-white">{activity}</span>
                        </li>
                      ))}
                    </ul>
                    <button className={`w-full py-3 px-6 rounded-lg font-bold bg-gradient-to-r ${zone.color} hover:opacity-90 transition-opacity`}>
                      Explore {zone.title}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoHoverTriangle;