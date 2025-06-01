import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const AutoHoverTriangle = () => {
  const [hoveredZone, setHoveredZone] = useState(null);
  const [autoHoverActive, setAutoHoverActive] = useState(true);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [isManualHover, setIsManualHover] = useState(false);
  const [hoverDelay, setHoverDelay] = useState(3000); // 3 seconds delay
  const [particleEffect, setParticleEffect] = useState(false);
  const animationRef = useRef();
  const navigate = useNavigate();

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
    B: { x: 80, y: 360, name: "Water Adventure", color: "bg-purple-500" },
    C: { x: 520, y: 360, name: "Land Adventure", color: "bg-orange-500" },
    G: { x: 300, y: 260, name: "Central Hub", color: "bg-green-700" }
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

  // Enhanced auto-hover effect with variable timing
  useEffect(() => {
    if (!autoHoverActive || isManualHover) return;

    const zones = ['AGB', 'AGC', 'BGC'];
    let currentIndex = 0;
    let timeoutId;

    const startHoverSequence = () => {
      setHoveredZone(zones[currentIndex]);
      currentIndex = (currentIndex + 1) % zones.length;

      // Add particle effect when zone changes
      setParticleEffect(true);
      setTimeout(() => setParticleEffect(false), 1000);

      if (currentIndex === 0) {
        timeoutId = setTimeout(() => {
          setAutoHoverActive(false);
          setHoveredZone(null);
          // Restart after a longer pause
          setTimeout(() => {
            setAutoHoverActive(true);
          }, 5000);
        }, hoverDelay);
      } else {
        timeoutId = setTimeout(startHoverSequence, hoverDelay);
      }
    };

    startHoverSequence();

    return () => {
      clearTimeout(timeoutId);
    };
  }, [autoHoverActive, isManualHover, hoverDelay]);

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
    navigate('/booking', { state: { activity } });
  };

  // Particle effect component
  const ParticleEffect = ({ x, y, color }) => {
    const particles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      angle: (i * 360) / 20,
      distance: Math.random() * 30 + 20,
    }));

    return (
      <g transform={`translate(${x},${y})`}>
        {particles.map((particle) => {
          const radian = (particle.angle * Math.PI) / 180;
          const px = Math.cos(radian) * particle.distance;
          const py = Math.sin(radian) * particle.distance;
          return (
            <circle
              key={particle.id}
              cx={px}
              cy={py}
              r="2"
              fill={color}
              opacity="0.6"
              className="animate-ping"
              style={{
                animationDuration: `${Math.random() * 1 + 0.5}s`,
                animationDelay: `${Math.random() * 0.5}s`,
              }}
            />
          );
        })}
      </g>
    );
  };

  // Handle zone hover with enhanced effects
  const handleZoneHover = (zone) => {
    setIsManualHover(true);
    setHoveredZone(zone);
    setAutoHoverActive(false);
    setParticleEffect(true);
    setTimeout(() => setParticleEffect(false), 1000);
  };

  // Handle zone leave with smooth transition
  const handleZoneLeave = () => {
    setIsManualHover(false);
    setHoveredZone(null);
    setTimeout(() => {
      if (!isManualHover) {
        setAutoHoverActive(true);
      }
    }, 2000);
  };

  // Array of background images to cycle through
  const backgroundImages = [
    "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1518632618335-df838848f9f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1513415277900-a62401e19be4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1504470695779-75300268aa0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1501554728187-ce583db33af7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
  ];

  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  // Background image rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Add globe rotation state
  const [globeRotation, setGlobeRotation] = useState(0);

  // Add globe rotation effect
  useEffect(() => {
    const animateGlobe = () => {
      setGlobeRotation(prev => (prev + 1) % 360);
      requestAnimationFrame(animateGlobe);
    };
    requestAnimationFrame(animateGlobe);
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
              Adventure Triangle
            </h1>

            <div className="relative h-[600px] w-full max-w-4xl mx-auto mb-12">
              <svg
                className="w-full h-full"
                viewBox="0 0 600 400"
                preserveAspectRatio="xMidYMid meet"
              >
                {/* Gradient Definitions */}
                <defs>
                  {/* Define a green fill for the recycling arrows */}
                  <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(34, 197, 94, 0.9)" />
                    <stop offset="100%" stopColor="rgba(21, 128, 61, 0.7)" />
                  </linearGradient>
                  {/* Update gradients for realistic Earth colors */}
                  <radialGradient id="oceanGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                    <stop offset="0%" stopColor="rgba(30, 144, 255, 0.9)" />
                    <stop offset="50%" stopColor="rgba(0, 119, 182, 0.8)" />
                    <stop offset="100%" stopColor="rgba(0, 105, 148, 0.7)" />
                  </radialGradient>

                  <linearGradient id="landGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(34, 197, 94, 0.9)" />
                    <stop offset="50%" stopColor="rgba(22, 163, 74, 0.8)" />
                    <stop offset="100%" stopColor="rgba(21, 128, 61, 0.7)" />
                  </linearGradient>

                  <linearGradient id="globeHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(255, 255, 255, 0.4)" />
                    <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
                  </linearGradient>

                  <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                    <feOffset dx="0" dy="2" result="offsetblur" />
                    <feComponentTransfer>
                      <feFuncA type="linear" slope="0.3" />
                    </feComponentTransfer>
                    <feMerge>
                      <feMergeNode />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Revolving Globe in Center */}
                <g transform="translate(300, 200)">
                  {/* Globe Container */}
                  <g transform={`rotate(${globeRotation})`}>
                    {/* Base Earth Circle with ocean color */}
                    <circle
                      r="70"
                      fill="url(#oceanGradient)"
                      stroke="rgba(255, 255, 255, 0.3)"
                      strokeWidth="2"
                    />

                    {/* Continents with realistic colors */}
                    <g transform="scale(1.7)" fill="url(#landGradient)" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="0.5">
                      {/* North America */}
                      <path d="M-15,-20 Q-10,-25 0,-25 T15,-20 T10,-10 T-10,-10 T-15,-20" />
                      {/* South America */}
                      <path d="M-10,10 Q-5,5 0,5 T10,10 T5,25 T-5,25 T-10,10" />
                      {/* Europe */}
                      <path d="M-5,-15 Q0,-20 5,-15 T10,-5 T5,0 T-5,0 T-10,-5 T-5,-15" />
                      {/* Africa */}
                      <path d="M-10,-5 Q-5,-10 0,-10 T10,-5 T5,15 T-5,15 T-10,-5" />
                      {/* Asia */}
                      <path d="M5,-15 Q15,-20 25,-15 T30,-5 T25,5 T15,5 T5,-5 T5,-15" />
                      {/* Australia */}
                      <path d="M20,15 Q25,10 30,15 T35,25 T25,25 T20,15" />
                    </g>

                    {/* Atmosphere Glow */}
                    <circle
                      r="72"
                      fill="none"
                      stroke="rgba(255, 255, 255, 0.1)"
                      strokeWidth="2"
                      className="animate-pulse"
                    />

                    {/* Highlight Effect */}
                    <circle
                      r="68"
                      fill="url(#globeHighlight)"
                      opacity="0.2"
                    />
                  </g>
                </g>

                {/* Rotating circular text */}
                <g transform={`rotate(${rotationAngle}, 300, 200)`}>
                  {Array.from(circularText.repeat(5)).map((char, index) => {
                    const angle = (index * 360 / circularText.length) - 90;
                    const radian = angle * (Math.PI / 180);
                    const radius = 150;
                    const x = 300 + radius * Math.cos(radian);
                    const y = 200 + radius * Math.sin(radian);

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

                {/* Add Recycling Arrow Paths */}
                {/* Arrow 1 (Top) - Map to AGB (Air) */}
                <path
                  d="M300,80
                       L250,180 Q260,190 270,185 L280,170 Q290,165 300,170
                       Q310,165 320,170 L330,185 Q340,190 350,180 Z"
                  fill="url(#arrowGradient)"
                  stroke={hoveredZone === 'AGB' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.3)'}
                  strokeWidth={hoveredZone === 'AGB' ? '3' : '1.5'}
                  onMouseEnter={() => handleZoneHover('AGB')}
                  onMouseLeave={handleZoneLeave}
                  className="cursor-pointer transition-all duration-500"
                  style={{
                    pointerEvents: 'fill',
                    filter: hoveredZone === 'AGB' ? 'drop-shadow(0 0 20px rgba(34, 197, 94, 0.7))' : 'none',
                    opacity: hoveredZone && hoveredZone !== 'AGB' ? 0.7 : 1,
                    transform: hoveredZone === 'AGB' ? 'scale(1.02)' : 'scale(1)',
                    transformOrigin: 'center',
                  }}
                />
                {/* Arrow 2 (Left) - Map to BGC (Land) */}
                <path
                  d="M80,360
                       L180,310 Q190,300 185,290 L170,280 Q165,270 170,260
                       Q165,250 170,240 L185,230 Q190,220 180,210 Z"
                  fill="url(#arrowGradient)"
                  stroke={hoveredZone === 'BGC' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.3)'}
                  strokeWidth={hoveredZone === 'BGC' ? '3' : '1.5'}
                  onMouseEnter={() => handleZoneHover('BGC')}
                  onMouseLeave={handleZoneLeave}
                  className="cursor-pointer transition-all duration-500"
                  style={{
                    pointerEvents: 'fill',
                    filter: hoveredZone === 'BGC' ? 'drop-shadow(0 0 20px rgba(34, 197, 94, 0.7))' : 'none',
                    opacity: hoveredZone && hoveredZone !== 'BGC' ? 0.7 : 1,
                    transform: hoveredZone === 'BGC' ? 'scale(1.02)' : 'scale(1)',
                    transformOrigin: 'center',
                  }}
                  transform="rotate(120, 300, 200)"
                />
                {/* Arrow 3 (Right) - Map to AGC (Water) */}
                <path
                  d="M520,360
                       L420,310 Q410,300 415,290 L430,280 Q435,270 430,260
                       Q435,250 430,240 L415,230 Q410,220 420,210 Z"
                  fill="url(#arrowGradient)"
                  stroke={hoveredZone === 'AGC' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.3)'}
                  strokeWidth={hoveredZone === 'AGC' ? '3' : '1.5'}
                  onMouseEnter={() => handleZoneHover('AGC')}
                  onMouseLeave={handleZoneLeave}
                  className="cursor-pointer transition-all duration-500"
                  style={{
                    pointerEvents: 'fill',
                    filter: hoveredZone === 'AGC' ? 'drop-shadow(0 0 20px rgba(34, 197, 94, 0.7))' : 'none',
                    opacity: hoveredZone && hoveredZone !== 'AGC' ? 0.7 : 1,
                    transform: hoveredZone === 'AGC' ? 'scale(1.02)' : 'scale(1)',
                    transformOrigin: 'center',
                  }}
                  transform="rotate(240, 300, 200)"
                />

                {/* Update Particle effect positioning */}
                {particleEffect && hoveredZone === 'AGB' && (
                  <ParticleEffect
                    x={300}
                    y={140}
                    color={'#22C55E'}
                  />
                )}
                {particleEffect && hoveredZone === 'BGC' && (
                  <ParticleEffect
                    x={180}
                    y={280}
                    color={'#22C55E'}
                  />
                )}
                {particleEffect && hoveredZone === 'AGC' && (
                  <ParticleEffect
                    x={420}
                    y={280}
                    color={'#22C55E'}
                  />
                )}

                {/* Update Enhanced Zone Names with animations */}
                {['AGB', 'AGC', 'BGC'].map((key) => (
                  <text
                    key={key}
                    x={key === 'AGB' ? 300 : key === 'BGC' ? 180 : 420}
                    y={key === 'AGB' ? 145 : 285}
                    textAnchor="middle"
                    className={`font-bold text-xl transition-all duration-500 fill-white`}
                    style={{
                      textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                      opacity: hoveredZone === key ? 1 : 0.8,
                      transform: hoveredZone === key ? 'scale(1.1)' : 'scale(1)',
                      transformOrigin: 'center',
                    }}
                  >
                    {zoneNames[key]}
                  </text>
                ))}
              </svg>

              {/* Enhanced Activity Display with Images and Book Now Button */}
              {hoveredZone && (
                <div
                  className={`absolute p-6 rounded-2xl backdrop-blur-lg border border-white/20 shadow-2xl bg-green-600/30 text-white`}
                  style={{
                    left: `50%`,
                    top: `50%`,
                    transform: `translate(-50%, -50%)`,
                    width: '320px',
                    zIndex: 10,
                    animation: 'slideIn 0.3s ease-out'
                  }}
                >
                  <h3 className="font-bold text-2xl mb-4 flex items-center gap-2">
                    <span className="p-3 bg-white/10 rounded-lg">{zoneNames[hoveredZone]}</span>
                  </h3>

                  <div className="mb-4 relative h-40 rounded-lg overflow-hidden">
                    {zoneImages[hoveredZone].map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt={zoneActivities[hoveredZone][index]}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${index === 0 ? 'opacity-100' : 'opacity-0'
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
                          <span className={`text-xl text-green-300`}>▹</span>
                          <span>{activity}</span>
                        </div>
                        <button
                          onClick={() => handleBookNow(activity)}
                          className={`px-3 py-1 text-sm rounded-md bg-green-500 hover:bg-green-600 transition-colors`}
                        >
                          Book
                        </button>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handleBookNow(zoneNames[hoveredZone] + "Package")}
                    className={`w-full py-2 px-4 rounded-lg font-bold bg-green-600 hover:bg-green-700 transition-colors`}
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
                    <button
                      className={`w-full py-3 px-6 rounded-lg font-bold bg-gradient-to-r ${zone.color} hover:opacity-90 transition-opacity`}
                      onClick={() => handleBookNow(zone.title)}
                    >
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