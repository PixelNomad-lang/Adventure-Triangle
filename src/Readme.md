##   circle  will   be  larger  
##    image  will  be  change  according  to   their  region  
##  example   Activity..



##  triangle escapes   drop  down   element Air , water  and   
##   aCTIVITY  ,  BOOKING   INSTEAD  OF    ,   24*7   RATING  AND FEEDBACK  
##    ALL   ACTIVITY  MANAGE  ALL   PARTNERS  
###  TRUSTED  BY THOUSAND  OUR  PARTNER   


###    LISTED   BY   NO       IMAGE    BBOK   NOW      CLICK   


###  TRIANGLE   WILL    BE  MORE    

##   22/04

what  is  new  in  Himrahi   
after     contact   in  which  client  contact   
footer   
Triangles       Escapes    
we  show  activity    See   more   ...
About  us  
blog    
latest  news  
  
  carrer
  diversity   
  Our   partner  

  only  touch     their  circumference      of  hero   section   
  

  import { useState, useEffect, useRef } from 'react';

const AutoHoverTriangle = () => {
  const [hoveredZone, setHoveredZone] = useState(null);
  const [autoHoverActive, setAutoHoverActive] = useState(true);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const animationRef = useRef();

  // Enhanced images with adventure-themed pictures
  const zoneImages = {
    AGB: [
      "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1518632618335-df838848f9f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    ],
    AGC: [
      "https://images.unsplash.com/photo-1504470695779-75300268aa0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1513415277900-a62401e19be4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    ],
    BGC: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1501554728187-ce583db33af7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    ]
  };

  // Triangle points with enhanced styling
  const points = {
    A: { 
      x: 300, y: 80, 
      name: "Air Adventure", 
      color: "bg-blue-500",
      icon: "✈️"
    },
    B: { 
      x: 80, y: 360, 
      name: "Water Adventure", 
      color: "bg-teal-500",
      icon: "🌊"
    },
    C: { 
      x: 520, y: 360, 
      name: "Land Adventure", 
      color: "bg-green-500",
      icon: "⛰️"
    },
    G: { 
      x: 300, y: 260, 
      name: "Central Hub", 
      color: "bg-purple-600",
      icon: "✨"
    }
  };

  const zoneNames = {
    AGB: "Air Adventures",
    AGC: "Water Adventures", 
    BGC: "Land Adventures"
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

  // Auto-hover effect with image cycling
  useEffect(() => {
    if (!autoHoverActive) return;

    const zones = ['AGB', 'AGC', 'BGC'];
    let currentIndex = 0;

    const interval = setInterval(() => {
      setHoveredZone(zones[currentIndex]);
      
      // Cycle through images for the current zone
      const imageInterval = setInterval(() => {
        setImageIndex(prev => (prev + 1) % 3);
      }, 3000);
      
      setTimeout(() => {
        clearInterval(imageInterval);
      }, 6000);
      
      currentIndex = (currentIndex + 1) % zones.length;
      
      if (currentIndex === 0) {
        setTimeout(() => {
          setAutoHoverActive(false);
          setHoveredZone(null);
        }, 6000);
        clearInterval(interval);
      }
    }, 7000);

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
  const circularText = "HimRahi Adventures • Thrills • Excitement • Memories • ";
  const radius = 240;
  const centerX = 300;
  const centerY = 220;

  // Handle book now click
  const handleBookNow = (activity) => {
    alert(`Booking ${activity} now!`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-6xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 bg-clip-text text-transparent py-4">
          Adventure Triangle Park
        </h1>
        <p className="text-center text-white/80 text-xl mb-12 max-w-3xl mx-auto">
          Explore our three realms of adventure - Air, Water, and Land. Each zone offers unique 
          experiences that will get your adrenaline pumping!
        </p>

        <div className="relative h-[700px] w-full max-w-5xl mx-auto mb-12">
          <svg 
            className="w-full h-full"
            viewBox="0 0 600 450"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Gradient Definitions */}
            <defs>
              <linearGradient id="zoneGradientAGB" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
                <stop offset="100%" stopColor="rgba(99, 102, 241, 0.1)" />
              </linearGradient>
              <linearGradient id="zoneGradientAGC" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(20, 184, 166, 0.3)" />
                <stop offset="100%" stopColor="rgba(6, 182, 212, 0.1)" />
              </linearGradient>
              <linearGradient id="zoneGradientBGC" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(34, 197, 94, 0.3)" />
                <stop offset="100%" stopColor="rgba(22, 163, 74, 0.1)" />
              </linearGradient>
              
              {/* Glow effects */}
              <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Rotating circular text */}
            <g transform={`rotate(${rotationAngle}, ${centerX}, ${centerY})`}>
              {Array.from(circularText.repeat(3)).map((char, index) => {
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
                    fill="rgba(255,255,255,0.7)"
                    fontSize="14"
                    fontWeight="600"
                    transform={`rotate(${angle + 90}, ${x}, ${y})`}
                    className="font-mono tracking-wider"
                  >
                    {char}
                  </text>
                );
              })}
            </g>

            {/* Connecting lines with animation */}
            {['AG', 'BG', 'CG'].map((line) => (
              <line
                key={line}
                x1={points[line[0]].x}
                y1={points[line[0]].y}
                x2={points[line[1]].x}
                y2={points[line[1]].y}
                stroke="rgba(255,255,255,0.15)"
                strokeWidth="2"
                strokeDasharray="5,5"
              />
            ))}

            {/* Zone Polygons with individual gradients */}
            {['AGB', 'AGC', 'BGC'].map((key) => (
              <g key={key}>
                <polygon
                  points={
                    key === 'AGB'
                      ? `${points.A.x},${points.A.y} ${points.G.x},${points.G.y} ${points.B.x},${points.B.y}`
                      : key === 'AGC'
                        ? `${points.A.x},${points.A.y} ${points.G.x},${points.G.y} ${points.C.x},${points.C.y}`
                        : `${points.B.x},${points.B.y} ${points.G.x},${points.G.y} ${points.C.x},${points.C.y}`
                  }
                  fill={`url(#zoneGradient${key})`}
                  stroke={hoveredZone === key ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.2)'}
                  strokeWidth={hoveredZone === key ? '4' : '2'}
                  onMouseEnter={() => {
                    setHoveredZone(key);
                    setAutoHoverActive(false);
                    setImageIndex(0);
                  }}
                  onMouseLeave={() => setHoveredZone(null)}
                  className="cursor-pointer transition-all duration-500"
                  style={{ 
                    pointerEvents: 'fill',
                    filter: hoveredZone === key ? 'drop-shadow(0 0 20px rgba(255,255,255,0.3))' : 'none'
                  }}
                />
                
                {/* Subtle floating particles in zones */}
                {Array.from({ length: 15 }).map((_, i) => {
                  // Random position within the zone
                  const x = zoneCenters[key].x + (Math.random() * 100 - 50);
                  const y = zoneCenters[key].y + (Math.random() * 80 - 40);
                  
                  return (
                    <circle
                      key={i}
                      cx={x}
                      cy={y}
                      r={Math.random() * 1.5}
                      fill="rgba(255,255,255,0.3)"
                      className={`transition-all duration-1000 ${hoveredZone === key ? 'opacity-100' : 'opacity-0'}`}
                      style={{
                        animation: `float ${3 + Math.random() * 4}s infinite ease-in-out`
                      }}
                    />
                  );
                })}
              </g>
            ))}

            {/* Zone Names with better typography */}
            {['AGB', 'AGC', 'BGC'].map((key) => (
              <text
                key={key}
                x={zoneCenters[key].x}
                y={zoneCenters[key].y + 4}
                textAnchor="middle"
                className={`font-bold text-2xl ${
                  key === 'AGB' ? 'fill-blue-300' : 
                  key === 'AGC' ? 'fill-teal-300' : 'fill-green-300'
                }`}
                style={{ 
                  textShadow: '0 2px 10px rgba(0,0,0,0.5)',
                  opacity: hoveredZone === key ? 1 : 0.7,
                  transition: 'opacity 0.3s ease'
                }}
              >
                {zoneNames[key]}
              </text>
            ))}

            {/* Vertex Points with enhanced styling */}
            {['A', 'B', 'C', 'G'].map((key) => (
              <g 
                key={key} 
                transform={`translate(${points[key].x},${points[key].y})`}
                className="transition-transform duration-300 hover:scale-125"
                onMouseEnter={() => {
                  if (key !== 'G') {
                    setHoveredZone(key === 'A' ? 'AGB' : key === 'B' ? 'AGB' : 'BGC');
                    setAutoHoverActive(false);
                  }
                }}
              >
                {/* Glowing circle */}
                <circle
                  r="20"
                  fill={points[key].color}
                  fillOpacity="0.2"
                  className={`${hoveredZone && hoveredZone.includes(key) ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
                  filter="url(#glow)"
                />
                
                {/* Main point */}
                <circle
                  r="12"
                  fill={points[key].color}
                  stroke="white"
                  strokeWidth="2"
                />
                
                {/* Icon */}
                <text
                  x="0"
                  y="5"
                  textAnchor="middle"
                  fill="white"
                  fontSize="16"
                  fontWeight="bold"
                >
                  {points[key].icon}
                </text>
                
                {/* Point name */}
                <text
                  x="0"
                  y={key === 'A' ? -30 : 40}
                  textAnchor="middle"
                  fill="white"
                  fontSize="14"
                  fontWeight="600"
                  className="opacity-80"
                >
                  {points[key].name}
                </text>
              </g>
            ))}
          </svg>

          {/* Enhanced Activity Display with Images and Book Now Button */}
          {hoveredZone && (
            <div 
              className={`absolute p-8 rounded-3xl backdrop-blur-xl border-2 border-white/30 shadow-2xl ${
                hoveredZone === 'AGB' ? 'bg-blue-900/40' :
                hoveredZone === 'AGC' ? 'bg-teal-900/40' : 'bg-green-900/40'
              } text-white transition-all duration-500`}
              style={{
                left: `${points.G.x - 180}px`,
                top: `${points.G.y + 40}px`,
                width: '380px',
                zIndex: 10,
                animation: 'fadeIn 0.5s ease-out'
              }}
            >
              <h3 className="font-bold text-3xl mb-6 flex items-center gap-3">
                <span className={`p-4 rounded-xl ${
                  hoveredZone === 'AGB' ? 'bg-blue-600/50' :
                  hoveredZone === 'AGC' ? 'bg-teal-600/50' : 
                  'bg-green-600/50'
                }`}>
                  {zoneNames[hoveredZone]}
                </span>
              </h3>
              
              {/* Activity Images Carousel with fade effect */}
              <div className="mb-6 relative h-48 rounded-xl overflow-hidden shadow-lg">
                {zoneImages[hoveredZone].map((img, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
                      index === imageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <img
                      src={img}
                      alt={zoneActivities[hoveredZone][index]}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white font-bold text-xl">
                      {zoneActivities[hoveredZone][index]}
                    </div>
                  </div>
                ))}
                <div className="absolute bottom-4 right-4 flex gap-2">
                  {[0, 1, 2].map((i) => (
                    <button
                      key={i}
                      onClick={() => setImageIndex(i)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        i === imageIndex ? 'bg-white w-6' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              <ul className="space-y-4 mb-6">
                {zoneActivities[hoveredZone].map((activity, index) => (
                  <li 
                    key={index}
                    className="flex items-center justify-between gap-4 p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-colors border border-white/10"
                  >
                    <div className="flex items-center gap-4">
                      <span className={`text-2xl ${
                        hoveredZone === 'AGB' ? 'text-blue-300' :
                        hoveredZone === 'AGC' ? 'text-teal-300' : 'text-green-300'
                      }`}>✦</span>
                      <span className="font-medium">{activity}</span>
                    </div>
                    <button
                      onClick={() => handleBookNow(activity)}
                      className={`px-4 py-2 rounded-lg font-medium ${
                        hoveredZone === 'AGB' ? 'bg-blue-600 hover:bg-blue-700' :
                        hoveredZone === 'AGC' ? 'bg-teal-600 hover:bg-teal-700' : 
                        'bg-green-600 hover:bg-green-700'
                      } transition-colors shadow-md hover:shadow-lg`}
                    >
                      Book Now
                    </button>
                  </li>
                ))}
              </ul>
              
              {/* Package Deal */}
              <div className="bg-black/20 p-4 rounded-xl mb-6 border border-white/10">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-lg">Full Package Deal</h4>
                    <p className="text-sm opacity-80">All 3 activities + gear</p>
                  </div>
                  <span className="text-xl font-bold">
                    ${hoveredZone === 'AGB' ? '299' : hoveredZone === 'AGC' ? '349' : '279'}
                  </span>
                </div>
              </div>
              
              {/* Book All Button */}
              <button
                onClick={() => handleBookNow(zoneNames[hoveredZone] + " Package")}
                className={`w-full py-3 px-6 rounded-xl font-bold text-lg flex items-center justify-center gap-2 ${
                  hoveredZone === 'AGB' ? 'bg-blue-600 hover:bg-blue-700' :
                  hoveredZone === 'AGC' ? 'bg-teal-600 hover:bg-teal-700' : 
                  'bg-green-600 hover:bg-green-700'
                } transition-colors shadow-xl hover:scale-[1.02] transition-transform`}
              >
                <span>Book Complete Package</span>
                <span>→</span>
              </button>
            </div>
          )}
        </div>

        {/* Reset Auto Tour Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => {
              setAutoHoverActive(true);
              setHoveredZone(null);
            }}
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-full text-white font-medium shadow-lg transition-all hover:shadow-xl"
          >
            Restart Zone Tour
          </button>
        </div>
      </div>

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default AutoHoverTriangle;