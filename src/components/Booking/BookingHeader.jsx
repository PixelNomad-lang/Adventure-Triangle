import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { HiOutlineMenu } from 'react-icons/hi';
import { useFilter } from './FilterContext';

function BookingHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const handleDropdown = (section) => {
    setActiveDropdown(activeDropdown === section ? null : section);
  };

   const { setActiveFilter } = useFilter();

  const handleFilterClick = (item) => {
    setActiveFilter(item); // sync with global filter
    setActiveDropdown(null); // close dropdown
  };

  const dropdownItems = {
    Air: ['Paragliding', 'Skydiving', 'Hot Air Balloon'],
    Water: ['Rafting', 'Jet Ski', 'Scuba Diving'],
    Land: ['Hiking', 'ATV Ride', 'Zip Lining'],
  };

  return (
    <header className="flex items-center justify-between p-4 bg-gray-400 shadow-sm relative">
      {/* Left: Logo */}
      <div className="w-32 h-10 rounded-xl overflow-hidden">
        <img src="/logo.svg" alt="Adventure Triangle Logo" className="h-full w-full object-contain" />
      </div>

      {/* Center: Navigation with Dropdowns */}
      <nav className="hidden md:flex space-x-8 relative">
        {['Air', 'Water', 'Land'].map((category) => (
          <div key={category} className="relative group">
            <button
              onClick={() => handleDropdown(category)}
              className="font-medium text-gray-700 hover:text-blue-600"
            >
              {category}
            </button>
            {activeDropdown === category && (
              <div className="absolute top-8 left-0 bg-white shadow-lg rounded-lg py-2 w-44 z-40">
                {dropdownItems[category].map((item) => (
                  <a
                    key={item}
                    onClick={() => handleFilterClick(item)}
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Right: Profile + Hamburger */}
      <div className="flex items-center space-x-4">
        <button onClick={toggleMenu} className="relative focus:outline-none">
          <FaUserCircle className="text-2xl text-gray-700" />
        </button>
        <button onClick={toggleMenu} className="relative focus:outline-none ">
          <HiOutlineMenu className="text-2xl text-gray-700" />
        </button>
      </div>

      {/* Dropdown Menu */}
      {menuOpen && (
        <div className="absolute right-4 top-16 w-64 bg-white shadow-xl rounded-lg py-2 z-50">
          <ul className="text-sm text-gray-700 space-y-2 px-4 py-2">
            <li><a href="#" className="block hover:text-blue-600">Become a Partner</a></li>
            <li><a href="#" className="block hover:text-blue-600">Wishlist</a></li>
            <li><a href="#" className="block hover:text-blue-600">Trips</a></li>
            <li><a href="#" className="block hover:text-blue-600">Message</a></li>
            <li><a href="#" className="block hover:text-blue-600">Profile</a></li>
            <li><a href="#" className="block hover:text-blue-600">Notification</a></li>
            <li><a href="#" className="block hover:text-blue-600">Account Setting</a></li>
            <li><a href="#" className="block hover:text-blue-600">Language</a></li>
            <li><a href="#" className="block hover:text-blue-600">Help</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default BookingHeader;
