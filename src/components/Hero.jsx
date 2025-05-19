import React, { useState, useEffect } from "react";

const Hero = () => {
  const landImages = ["/L1.jpg", "/L2.jpeg"];
  const waterImages = ["/W1.jpg", "/W2.jpg"];
  const airImages = ["/S1.jpeg", "/S2.jpg", "/S3.jpeg"];

  const [landIndex, setLandIndex] = useState(0);
  const [waterIndex, setWaterIndex] = useState(0);
  const [airIndex, setAirIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLandIndex((prev) => (prev + 1) % landImages.length);
      setWaterIndex((prev) => (prev + 1) % waterImages.length);
      setAirIndex((prev) => (prev + 1) % airImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gradient-to-b from-green-100 to-green-300 z-90 px-4 py-12 md:py-0">
      <div className="absolute inset-0 bg-white/10 z-10"></div>
      
      {/* Left Section */}
      <div className="w-full lg:w-1/2 z-20 text-center lg:text-left lg:pl-16 mb-12 lg:mb-0">
        <h1 className="text-5xl md:text-7xl text-amber-50 font-bold font-serif tracking-wide">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-600">
            Adventure
          </span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-emerald-600">
            Triangle
          </span>
        </h1>
        <p className="text-amber-100 text-lg md:text-xl mt-4 font-medium italic">
          Choose your kick to feel alive.
        </p>
        <div className="mt-6 flex justify-center lg:justify-start">
          <input
            type="text"
            placeholder="Example Paragliding..."
            className="px-4 py-3 w-full max-w-md border rounded-lg focus:outline-none shadow-md text-amber-800 bg-white/80 placeholder:text-amber-600 font-medium"
          />
        </div>
      </div>

      {/* Right Section with Grouped Circular Images */}
      <div className="w-full lg:w-1/2 flex justify-center items-center relative z-20">
        <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px]">
          {/* Top Center - Land */}
          <img
            src={landImages[landIndex]}
            alt="Land Adventure"
            className="absolute w-40 h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 rounded-full top-0 left-1/2 -translate-x-1/2 shadow-xl transition duration-500 ease-in-out object-cover"
          />
          {/* Bottom Left - Air */}
          <img
            src={airImages[airIndex]}
            alt="Air Adventure"
            className="absolute w-40 h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 rounded-full bottom-0 left-0 md:left-4 lg:left-0 shadow-xl transition duration-500 ease-in-out object-cover"
          />
          {/* Bottom Right - Water */}
          <img
            src={waterImages[waterIndex]}
            alt="Water Adventure"
            className="absolute w-40 h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 rounded-full bottom-0 right-0 md:right-4 lg:right-0 shadow-xl transition duration-500 ease-in-out object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;