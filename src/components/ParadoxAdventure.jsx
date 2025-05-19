import { useState, useEffect } from 'react';

const ParadoxAdventure = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [activeParadox, setActiveParadox] = useState(0);

  const paradoxes = [
    {
      title: "The Bootstrap Paradox",
      description: "What if you traveled back in time and gave Shakespeare his own works? Who really created them?",
      icon: "⏳"
    },
    {
      title: "The Grandfather Paradox",
      description: "If you travel back in time and prevent your grandfather's marriage, how were you born to travel back?",
      icon: "👴"
    },
    {
      title: "The Observer Paradox",
      description: "If a tree falls in a quantum forest with no one to observe it, does it make a sound in all realities?",
      icon: "👁️"
    }
  ];

  // Auto-rotate paradoxes
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveParadox((prev) => (prev + 1) % paradoxes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-gray-900 to-black">
      {/* Paradox background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {/* Impossible triangle */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border-t-4 border-r-4 border-purple-400 transform rotate-45"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 border-t-4 border-l-4 border-blue-400 transform -rotate-45"></div>
        
        {/* Infinite loop path */}
        <div className="absolute bottom-0 left-0 right-0 h-32 border-t-4 border-dashed border-white/30">
          <div className="absolute -top-4 left-1/2 w-8 h-8 bg-yellow-400 rounded-full animate-[moveHorizontally_15s_linear_infinite]"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 mb-4">
            Paradox Adventures
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Where reality bends and logic twists. Experience adventures that challenge perception.
          </p>
        </div>

        {/* Main paradox card */}
        <div className="flex justify-center mb-20">
          <div 
            className={`relative w-full max-w-md h-96 cursor-pointer transition-all duration-1000 ${isFlipped ? 'scale-95' : 'scale-100'}`}
            style={{ perspective: '1000px' }}
            onClick={() => setIsFlipped(!isFlipped)}
          >
            {/* Front side */}
            <div className={`absolute inset-0 backface-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl p-8 flex flex-col justify-center items-center transition-all duration-1000 ${isFlipped ? 'opacity-0 rotate-y-180' : 'opacity-100'}`}>
              <h3 className="text-2xl font-bold text-white mb-4">The Paradox Challenge</h3>
              <p className="text-gray-300 text-center mb-6">
                Click to reveal a mind-bending paradox that defies conventional logic
              </p>
              <div className="w-40 h-40 border-4 border-dashed border-white rounded-full flex items-center justify-center animate-[spin_20s_linear_infinite]">
                <div className="w-32 h-32 border-4 border-dashed border-purple-400 rounded-full animate-[spinReverse_25s_linear_infinite]"></div>
              </div>
            </div>

            {/* Back side */}
            <div className={`absolute inset-0 backface-hidden bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl p-8 flex flex-col justify-center items-center transition-all duration-1000 ${isFlipped ? 'opacity-100' : 'opacity-0 rotate-y-180'}`}>
              <div className="text-5xl mb-6">{paradoxes[activeParadox].icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">{paradoxes[activeParadox].title}</h3>
              <p className="text-gray-300 text-center">{paradoxes[activeParadox].description}</p>
            </div>
          </div>
        </div>

        {/* Paradox adventure options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Möbius Trek",
              description: "Hike a trail with only one surface that never ends",
              icon: "∞",
              color: "from-purple-500 to-indigo-600"
            },
            {
              title: "Quantum Crossing",
              description: "Be in two adventure zones simultaneously until observed",
              icon: "⚛️",
              color: "from-blue-500 to-teal-600"
            },
            {
              title: "Temporal Rappel",
              description: "Descend a cliff face where time flows backward",
              icon: "⏱️",
              color: "from-amber-500 to-orange-600"
            }
          ].map((adventure, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br rounded-xl p-1 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              style={{ 
                backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-from), var(--tw-gradient-to))`,
                '--tw-gradient-from': adventure.color.split(' ')[0],
                '--tw-gradient-to': adventure.color.split(' ')[2]
              }}
            >
              <div className="bg-gray-900 rounded-lg p-6 h-full flex flex-col items-center text-center">
                <div className="text-4xl mb-4">{adventure.icon}</div>
                <h4 className="text-xl font-bold text-white mb-2">{adventure.title}</h4>
                <p className="text-gray-300 flex-grow">{adventure.description}</p>
                <button className="mt-4 px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-600 text-white font-medium hover:opacity-90 transition">
                  Book Experience
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Paradox disclaimer */}
        <div className="mt-16 text-center text-gray-400 text-sm">
          <p>Warning: These experiences may cause temporary cognitive dissonance.</p>
          <p className="mt-1">All adventurers must sign a reality waiver before participating.</p>
        </div>
      </div>

      {/* Custom animation definitions */}
      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spinReverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes moveHorizontally {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100vw); }
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
};

export default ParadoxAdventure;