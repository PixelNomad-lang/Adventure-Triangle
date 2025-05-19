import React, { useState } from 'react';
import { Globe, Menu, X, Mail, Facebook } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';
import countryCodes from '../../Data/countryCodes.json';
import LanguageModal from './LanguageModal';
import Footer from '../Footer';
import SignupForm from './SignupForm';

function Onboarding2() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleContinue = () => {
    setIsLoggedIn(true);
  };

  if (isLoggedIn) {
    return <SignupForm />;
  }

  return (
    <header className="relative bg-white min-h-screen">
      {/* Top Navbar */}
      <div className="flex items-center justify-between px-6 py-3 shadow-md bg-white">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Adventure Triangle" className="h-8" />
          <span className="text-xl font-bold text-rose-500">Adventure</span>
          <span className="text-xl font-bold">Triangle</span>
        </div>

        {/* Right Actions */}
        <div className="flex items-center space-x-4">
          <button className="text-sm font-medium text-pink-500">Become a Partner</button>

          {/* Language Selector */}
          <button onClick={() => setIsModalOpen(true)} className="p-2 rounded-full hover:bg-gray-100">
            <Globe size={20} />
          </button>

          {/* Menu Toggle */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-full hover:bg-gray-100">
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Language Modal */}
      {isModalOpen && <LanguageModal onClose={() => setIsModalOpen(false)} />}

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute right-6 mt-2 w-64 bg-white shadow-lg border rounded-lg py-2 z-50">
          <div className="px-4 py-2 border-b text-sm font-semibold">Help Centre</div>
          <button className="w-full text-left px-4 py-3 hover:bg-gray-100 flex justify-between items-start">
            <div>
              <div className="font-semibold">Become a host</div>
              <div className="text-xs text-gray-600 max-w-[160px]">
                It’s easy to start hosting and earn extra income.
              </div>
            </div>
            <img src="/adventure-icon.png" alt="Adventure Icon" className="h-10 w-10 object-contain" />
          </button>
          <button className="w-full text-left px-4 py-2 hover:bg-gray-100">Refer a Partner</button>
          <button className="w-full text-left px-4 py-2 hover:bg-gray-100">Find a co-Partner</button>
          <button className="w-full text-left px-4 py-2 hover:bg-gray-100">Log in or sign up</button>
        </div>
      )}

      {/* Login/Signup Card */}
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 space-y-4">
          <h2 className="text-center font-semibold text-lg">Log in or sign up</h2>
          <h3 className="text-2xl font-bold text-center">Welcome to Adventure  Triangle</h3>

          {/* Country/Region Selector */}
          <div>
            <label className="text-sm font-medium block mb-1">Country/Region</label>
            <select className="w-full p-2 rounded-md border">
              {countryCodes.map((country, index) => (
                <option key={index} value={country.dial_code}>
                  {country.name} ({country.dial_code})
                </option>
              ))}
            </select>
          </div>

          {/* Phone Number Input */}
          <div>
            <label className="text-sm font-medium block mb-1">Phone number</label>
            <input
              type="tel"
              placeholder="Phone number"
              className="w-full border rounded-md p-2"
            />
          </div>

          {/* Disclaimer */}
          <p className="text-xs text-gray-500">
            We’ll call or text you to confirm your number. Standard message and data rates apply.{' '}
            <span className="underline cursor-pointer">Privacy Policy</span>
          </p>

          {/* Continue Button */}
          <button
            onClick={handleContinue}
            className="w-full bg-rose-500 hover:bg-rose-600 text-white font-semibold py-2 rounded-md"
          >
            Continue
          </button>

          {/* Divider */}
          <div className="flex items-center gap-4">
            <div className="flex-1 border-t" />
            <span className="text-gray-400 text-sm">or</span>
            <div className="flex-1 border-t" />
          </div>

          {/* Auth Buttons */}
          <button className="w-full flex items-center gap-2 border p-2 rounded-md hover:bg-gray-100">
            <FcGoogle size={20} />
            <span className="flex-grow text-center font-medium">Continue with Google</span>
          </button>

          <button className="w-full flex items-center gap-2 border p-2 rounded-md hover:bg-gray-100">
            <FaApple size={20} />
            <span className="flex-grow text-center font-medium">Continue with Apple</span>
          </button>

          <button className="w-full flex items-center gap-2 border p-2 rounded-md hover:bg-gray-100">
            <Mail size={18} />
            <span className="flex-grow text-center font-medium">Continue with email</span>
          </button>

          <button className="w-full flex items-center gap-2 border p-2 rounded-md hover:bg-gray-100">
            <Facebook size={18} className="text-blue-600" />
            <span className="flex-grow text-center font-medium">Continue with Facebook</span>
          </button>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </header>
  );
}

export default Onboarding2;
