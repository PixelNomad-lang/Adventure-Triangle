import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function Partner() {
  const logosRef = useRef(null);
  const containerRef = useRef(null);
  const [centerPosition, setCenterPosition] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [showHandshake, setShowHandshake] = useState(false);

  const navigate = useNavigate();
  
  const handleClick = () => {
    setShowHandshake(true);
    setTimeout(() => {
      navigate('/partner');
    }, 2000); // Wait for animation to complete before navigating
  };

  // Premium brand logos with color variants
  const partnerLogos = [
    { 
      url: "https://cdn.worldvectorlogo.com/logos/apple-black.svg",
      name: "Apple",
      color: "from-gray-800 to-gray-900"
    },
    { 
      url: "https://cdn.worldvectorlogo.com/logos/google-2015.svg",
      name: "Google",
      color: "from-blue-500 to-green-500"
    },
    { 
      url: "https://cdn.worldvectorlogo.com/logos/microsoft.svg",
      name: "Microsoft",
      color: "from-blue-600 to-green-500"
    },
    { 
      url: "https://cdn.worldvectorlogo.com/logos/amazon-icon.svg",
      name: "Amazon",
      color: "from-orange-400 to-yellow-300"
    },
    { 
      url: "https://cdn.worldvectorlogo.com/logos/tesla-motors.svg",
      name: "Tesla",
      color: "from-red-500 to-red-700"
    },
    { 
      url: "https://cdn.worldvectorlogo.com/logos/samsung-2.svg",
      name: "Samsung",
      color: "from-blue-700 to-blue-900"
    },
    { 
      url: "https://cdn.worldvectorlogo.com/logos/adobe.svg",
      name: "Adobe",
      color: "from-red-500 to-purple-600"
    },
    { 
      url: "https://cdn.worldvectorlogo.com/logos/nike-4.svg",
      name: "Nike",
      color: "from-black to-gray-800"
    },
    { 
      url: "https://cdn.worldvectorlogo.com/logos/pokemon.svg",
      name: "Spotify",
      color: "from-green-500 to-green-700"
    },
    { 
      url: "https://cdn.worldvectorlogo.com/logos/netflix-3.svg",
      name: "Netflix",
      color: "from-red-600 to-red-800"
    },
    { 
      url: "https://cdn.worldvectorlogo.com/logos/uber.svg",
      name: "Uber",
      color: "from-black to-gray-700"
    },
    { 
      url: "https://cdn.worldvectorlogo.com/logos/airbnb.svg",
      name: "Airbnb",
      color: "from-pink-500 to-red-500"
    }
  ];

  useEffect(() => {
    const logosContainer = logosRef.current;
    const container = containerRef.current;
    if (!logosContainer || !container) return;

    const logos = logosContainer.querySelectorAll('.logo-item');
    let position = 0;
    let animationId;
    let lastTimestamp = 0;
    const speed = isHovered ? 0.3 : 0.8; // Slower when hovered

    const updateCenterPosition = () => {
      setCenterPosition(container.offsetWidth / 2);
    };

    updateCenterPosition();
    window.addEventListener('resize', updateCenterPosition);

    const animate = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const deltaTime = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      // Only update position if enough time has passed (for smoother animations)
      if (deltaTime > 16) {
        position -= speed * (deltaTime / 16);
        
        const firstLogo = logos[0];
        if (position <= -firstLogo.offsetWidth) {
          position += firstLogo.offsetWidth;
          logosContainer.appendChild(firstLogo);
        }
        
        logosContainer.style.transform = `translateX(${position}px)`;
        
        logos.forEach(logo => {
          const logoRect = logo.getBoundingClientRect();
          const logoCenter = logoRect.left + logoRect.width / 2;
          const distanceFromCenter = Math.abs(logoCenter - centerPosition);
          const maxDistance = container.offsetWidth / 2;
          
          // Enhanced scaling curve
          const scale = Math.max(0.5, 1.8 - Math.pow(distanceFromCenter / maxDistance, 0.8) * 1.2);
          const opacity = 0.4 + (scale - 0.5) * 1.5;
          const zIndex = Math.floor(scale * 100);
          const blur = Math.max(0, (1 - scale) * 4);
          
          logo.style.transform = `scale(${scale}) perspective(1000px) translateZ(${(scale - 0.5) * 50}px)`;
          logo.style.opacity = `${opacity}`;
          logo.style.zIndex = `${zIndex}`;
          logo.style.filter = `blur(${blur}px) grayscale(${1 - scale}) brightness(${0.6 + scale * 0.4})`;
        });
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', updateCenterPosition);
    };
  }, [centerPosition, isHovered]);

  return (
    <div className="relative py-20 px-4 md:px-8 lg:px-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-100 opacity-10"
            initial={{
              x: Math.random() * 100,
              y: Math.random() * 100,
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
            }}
            animate={{
              x: Math.random() * 100,
              y: Math.random() * 100,
              transition: {
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }
            }}
          />
        ))}
      </div>
      
      {/* Handshake Animation Modal */}
     <AnimatePresence>
        {showHandshake && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 10, stiffness: 100 }}
              className="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-md mx-4"
            >
              <div className="relative w-72 h-64 mx-auto mb-6 flex items-end justify-center">
                {/* Left Person */}
                <motion.div
                  className="relative z-10"
                  initial={{ x: -80, y: 0 }}
                  animate={{ 
                    x: [-80, -40, -30],
                    y: [0, -10, 0],
                  }}
                  transition={{ 
                    duration: 0.8,
                    times: [0, 0.5, 1]
                  }}
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center shadow-md">
                    <div className="w-12 h-12 bg-blue-200 rounded-full"></div>
                  </div>
                  <motion.div 
                    className="absolute -right-6 top-1/2 w-12 h-6 bg-blue-100 rounded-l-full origin-right"
                    initial={{ rotate: 0 }}
                    animate={{
                      rotate: [0, 45, 30],
                    }}
                    transition={{
                      duration: 0.8,
                      times: [0, 0.5, 1]
                    }}
                  />
                </motion.div>

                {/* Right Person */}
                <motion.div
                  className="relative z-10"
                  initial={{ x: 80, y: 0 }}
                  animate={{ 
                    x: [80, 40, 30],
                    y: [0, -10, 0],
                  }}
                  transition={{ 
                    duration: 0.8,
                    times: [0, 0.5, 1]
                  }}
                >
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center shadow-md">
                    <div className="w-12 h-12 bg-purple-200 rounded-full"></div>
                  </div>
                  <motion.div 
                    className="absolute -left-6 top-1/2 w-12 h-6 bg-purple-100 rounded-r-full origin-left"
                    initial={{ rotate: 0 }}
                    animate={{
                      rotate: [0, -45, -30],
                    }}
                    transition={{
                      duration: 0.8,
                      times: [0, 0.5, 1]
                    }}
                  />
                </motion.div>

                {/* Connecting Hands */}
                <motion.div
                  className="absolute z-20 bottom-12 left-1/2 transform -translate-x-1/2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                >
                  <div className="w-16 h-8 bg-amber-300 rounded-full shadow-md flex items-center justify-center">
                    <div className="w-14 h-6 bg-amber-400 rounded-full"></div>
                  </div>
                </motion.div>

                {/* Shaking Animation */}
                <motion.div
                  className="absolute z-0 w-full h-1 bg-gray-200 bottom-8 left-0"
                  animate={{
                    scaleX: [1, 1.05, 1],
                    rotate: [-1, 1, -1]
                  }}
                  transition={{
                    duration: 0.2,
                    repeat: 5,
                    repeatType: "mirror"
                  }}
                />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Partnership Agreement</h3>
              <p className="text-gray-600 mb-6">We're shaking on it!</p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="w-12 h-12 mx-auto border-4 border-t-transparent border-blue-500 rounded-full animate-spin"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 max-w-8xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Global Partners</span>
          </h2>
          <p className="text-lg md:text-xl text-amber-100 max-w-3xl mx-auto">
            Collaborating with industry leaders to deliver exceptional experiences worldwide
          </p>
        </motion.div>
        
        <div 
          ref={containerRef}
          className="relative overflow-x-hidden h-42 md:h-64 lg:h-72 flex items-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div 
            ref={logosRef}
            className="absolute flex items-center space-x-8 md:space-x-12 lg:space-x-16 whitespace-nowrap h-full"
          >
            {[...Array(3)].map((_, i) => (
              <React.Fragment key={`set-${i}`}>
                {partnerLogos.map((logo, index) => (
                  <motion.div
                    key={`${i}-${index}`}
                    className="logo-item inline-flex items-center justify-center p-4 md:p-6 rounded-2xl shadow-xl backdrop-blur-sm border border-gray-200/50 hover:border-white/80"
                    style={{
                      transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                      height: '160px',
                      width: '240px',
                      willChange: 'transform, opacity, filter',
                      background: 'rgba(255, 255, 255, 0.7)'
                    }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                    }}
                  >
                    <div className="relative w-full h-full flex items-center justify-center p-4">
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${logo.color} opacity-10`}></div>
                      <img 
                        src={logo.url} 
                        alt={logo.name} 
                        className="w-auto h-auto max-h-[70%] max-w-[80%] object-contain transition-all duration-300 hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute bottom-2 left-0 right-0 text-xs font-medium text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
                        {logo.name}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Navigation dots for mobile */}
        <div className="flex justify-center mt-8 md:hidden">
          {partnerLogos.slice(0, 5).map((_, i) => (
            <button 
              key={i}
              className="w-2 h-2 mx-1 rounded-full bg-gray-300"
              aria-label={`Go to partner ${i + 1}`}
            />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mt-20"
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-amber-100 mb-6">
            Want to join our partner network?
          </h3>
          <motion.button
            onClick={handleClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Become a Partner
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

export default Partner;