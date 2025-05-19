// components/SignupForm.jsx
import React, { useState } from "react";
import { Globe, Menu, X } from "lucide-react";
import LanguageModal from "./LanguageModal";
import { Mail, Facebook } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";

function SignupForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
   const navigate = useNavigate();


    const handleSubmit = (e) => {
    e.preventDefault();
    // Optionally validate inputs here
    navigate("/welcome"); // or whatever your route path is for Welcome.tsx
  };

  return (
    <header className="relative">
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-3 shadow-md bg-white">
        {/* Left: Logo */}
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Adventure Triangle" className="h-8" />
          <span className="text-xl font-bold text-rose-500">Adventure</span>
          <span className="text-xl font-bold">Triangle</span>
        </div>

        {/* Spacer */}
        <div className="flex-1"></div>

        {/* Right: Actions */}
        <div className="flex items-center space-x-4">
          <button className="text-sm font-medium text-pink-500">Become a Partner</button>

          {/* Language Button */}
          <button onClick={() => setIsModalOpen(true)} className="p-2 rounded-full hover:bg-gray-100">
            <Globe size={20} />
          </button>

          {/* Menu Button */}
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

      {/* Signup Form Main Content */}
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 space-y-4">
          <h2 className="text-center font-semibold text-lg">Finish signing up</h2>
          <div>
            <label className="text-sm block font-medium mb-1">First name on ID</label>
            <input type="text" className="w-full border rounded-md p-2" />
          </div>
          <div>
            <label className="text-sm block font-medium mb-1">Last name on ID</label>
            <input type="text" className="w-full border rounded-md p-2" />
          </div>
          <div>
            <label className="text-sm block font-medium mb-1">Date of Birth</label>
            <input type="date" className="w-full border rounded-md p-2" />
          </div>
          <div>
            <label className="text-sm block font-medium mb-1">Email</label>
            <input type="email" className="w-full border rounded-md p-2" defaultValue="shuklabalmukund12@gmail.com" />
          </div>
          <div>
            <label className="text-sm block font-medium mb-1">Password</label>
            <input type="password" className="w-full border rounded-md p-2" />
          </div>
          <button 
          type="submit"
          onClick={handleSubmit}
          className="w-full bg-pink-600 text-white font-semibold py-2 rounded-md">
            Agree and continue
          </button>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </header>
  );
}

export default SignupForm;
