import React, { useState } from "react";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(null);

  return (
    <nav className="flex justify-between items-center px-10 py-4 z-60 bg-white shadow-md relative">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="/logo.svg" alt="Logo" href ='/' className="w-10 h-10" />
        <span className="text-lg text-stone-800 font-bold" href="/">HIMRAHI</span>
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-6 font-semibold">
        {/* Certifications Dropdown */}
        <li
          className="relative group"
          onMouseEnter={() => setShowDropdown("certifications")}
          onMouseLeave={() => setShowDropdown(null)}
        >
          <a
            href="#"
            className="flex items-center h-full py-2 hover:underline decoration-2 underline-offset-4 transition-all"
          >
            Certifications
          </a>

          {/* Triangle */}
          {showDropdown === "certifications" && (
            <span className="absolute -top-2 left-6 w-3 h-3 rotate-45 bg-white border-l border-t border-gray-200 z-50"></span>
          )}

          <div
            className={`absolute top-full left-0 w-[600px] bg-white shadow-2xl border border-gray-200 rounded-xl p-6 z-50 grid grid-cols-3 gap-6 text-sm text-gray-800 transform transition-all duration-300 ease-in-out ${
              showDropdown === "certifications"
                ? "opacity-100 visible translate-y-2 scale-100"
                : "opacity-0 invisible -translate-y-2 scale-95"
            }`}
          >
            {/* Air */}
            <div>
              <h4 className="font-bold mb-2 text-blue-600">Air</h4>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="block py-1 px-2 rounded-md hover:bg-blue-50 hover:text-blue-700 transition-all">
                    Paragliding
                  </a>
                </li>
                <li>
                  <a href="#" className="block py-1 px-2 rounded-md hover:bg-blue-50 hover:text-blue-700 transition-all">
                    Zip line
                  </a>
                </li>
                <li>
                  <a href="#" className="block py-1 px-2 rounded-md hover:bg-blue-50 hover:text-blue-700 transition-all">
                    Sky Driving
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-700 font-semibold hover:underline underline-offset-4 block text-center mt-2">
                    More...
                  </a>
                </li>
              </ul>
            </div>

            {/* Water */}
            <div>
              <h4 className="font-bold mb-2 text-blue-600">Water</h4>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="block py-1 px-2 rounded-md hover:bg-blue-50 hover:text-blue-700 transition-all">
                    Rain Rafting
                  </a>
                </li>
                <li>
                  <a href="#" className="block py-1 px-2 rounded-md hover:bg-blue-50 hover:text-blue-700 transition-all">
                    Scuba Diving
                  </a>
                </li>
                <li>
                  <a href="#" className="block py-1 px-2 rounded-md hover:bg-blue-50 hover:text-blue-700 transition-all">
                    Jet Skiing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-700 font-semibold hover:underline underline-offset-4 block text-center mt-2">
                    More...
                  </a>
                </li>
              </ul>
            </div>

            {/* Land */}
            <div>
              <h4 className="font-bold mb-2 text-blue-600">Land</h4>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="block py-1 px-2 rounded-md hover:bg-blue-50 hover:text-blue-700 transition-all">
                    Rock Climbing
                  </a>
                </li>
                <li>
                  <a href="#" className="block py-1 px-2 rounded-md hover:bg-blue-50 hover:text-blue-700 transition-all">
                    Off-Roading
                  </a>
                </li>
                <li>
                  <a href="#" className="block py-1 px-2 rounded-md hover:bg-blue-50 hover:text-blue-700 transition-all">
                    Forest Trekking
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-700 font-semibold hover:underline underline-offset-4 block text-center mt-2">
                    More...
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>

        {/* Triangle Escapes */}
        <li>
          <a
            href="#"
            className="flex items-center h-full py-2 hover:underline decoration-2 underline-offset-4 transition-all"
          >
            Triangle Escapes
          </a>
        </li>

        {/* Support */}
        <li>
          <a
            href="#"
            className="flex items-center h-full py-2 hover:underline decoration-2 underline-offset-4 transition-all"
          >
            Support
          </a>
        </li>

        {/* About Company Dropdown */}
        <li
          className="relative group"
          onMouseEnter={() => setShowDropdown("about")}
          onMouseLeave={() => setShowDropdown(null)}
        >
          <a
            href="#"
            className="flex items-center h-full py-2 hover:underline decoration-2 underline-offset-4 transition-all"
          >
            About Company
          </a>

          {/* Triangle */}
          {showDropdown === "about" && (
            <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-white border-l border-t border-gray-200 z-50"></span>
          )}

          <div
            className={`absolute top-full left-1/2 -translate-x-1/2 w-[300px] bg-white shadow-2xl border border-gray-200 rounded-xl p-6 z-50 grid grid-cols-3 gap-4 text-sm text-gray-800 transform transition-all duration-300 ease-in-out ${
              showDropdown === "about"
                ? "opacity-100 visible translate-y-2 scale-100"
                : "opacity-0 invisible -translate-y-2 scale-95"
            }`}
          >
            {/* ABOUT */}
            <div>
              <h4 className="font-bold mb-2 text-blue-600">ABOUT</h4>
              <ul className="space-y-1">
                <li>
                  <a
  href="#"
  onClick={(e) => e.preventDefault()}
  className="flex items-center h-full py-2 hover:underline decoration-2 underline-offset-4 transition-all"
>
  About Company
</a>

                </li>
                <li>
                  <a href="#" className="block py-1 px-2 rounded-md hover:bg-blue-50 hover:text-blue-700 transition-all">
                    Newsroom
                  </a>
                </li>
                <li>
                  <a href="#" className="block py-1 px-2 rounded-md hover:bg-blue-50 hover:text-blue-700 transition-all">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            {/* Work With Us */}
            <div>
              <h4 className="font-bold mb-2 text-blue-600">WORK WITH US</h4>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="block py-1 px-2 rounded-md hover:bg-blue-50 hover:text-blue-700 transition-all">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="block py-1 px-2 rounded-md hover:bg-blue-50 hover:text-blue-700 transition-all">
                    Diversity
                  </a>
                </li>
                <li>
                  <a href="#" className="block py-1 px-2 rounded-md hover:bg-blue-50 hover:text-blue-700 transition-all">
                    Our Partner
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold mb-2 text-blue-600">CONTACT</h4>
              <ul className="space-y-1">
                <li>
                  <a href="/contact" className="block py-1 px-2 rounded-md hover:bg-blue-50 hover:text-blue-700 transition-all">
                    Contact Sales
                  </a>
                </li>
                <li>
                  <a href="#" className="block py-1 px-2 rounded-md hover:bg-blue-50 hover:text-blue-700 transition-all">
                    Contact Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>

        {/* Blogs */}
        <li>
          <a
            href="#"
            className="flex items-center h-full py-2 hover:underline decoration-2 underline-offset-4 transition-all"
          >
            Blogs
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
