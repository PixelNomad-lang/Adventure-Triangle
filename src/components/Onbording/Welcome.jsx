import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowRight, FiX } from 'react-icons/fi';

function Welcome() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/step-1");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white flex flex-col">
      {/* Header with Exit Button */}
      <div className="w-full flex justify-end p-6">
        <button 
          className="bg-white hover:bg-gray-100 text-gray-800 text-sm font-medium px-4 py-2 rounded-full shadow-sm border border-gray-200 flex items-center space-x-1"
          onClick={() => navigate('/')}
        >
          <FiX className="w-4 h-4" />
          <span>Exit</span>
        </button>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-8 max-w-7xl mx-auto">
        {/* Left section */}
        <div className="flex-1 flex flex-col justify-center items-start space-y-8 mb-12 md:mb-0 md:pr-10">
          <div className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Start your hosting journey
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Begin your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600">Adventure</span> with us
          </h1>
          
          <p className="text-lg text-gray-600">
            Join thousands of hosts on Adventure Triangle and turn your extra space into extra income.
          </p>
          
          <div className="hidden md:block relative w-full mt-8">
            <div className="absolute -left-10 -top-10 w-32 h-32 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
            <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
            <img
              src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="Happy host"
              className="relative rounded-2xl shadow-xl border-8 border-white w-full max-w-md"
            />
          </div>
        </div>

        {/* Right section */}
        <div className="flex-1 flex flex-col space-y-8 bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100 max-w-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">How it works</h2>
          <p className="text-gray-500 mb-6">Get started in just a few simple steps</p>
          
          {/* Step 1 */}
          <div className="flex items-start space-x-4 p-4 hover:bg-indigo-50 rounded-xl transition-all duration-200">
            <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
              <span className="text-indigo-700 font-bold">1</span>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900">Tell us about your place</h3>
              <p className="text-gray-600 text-sm mt-1">
                Share some basic info, such as location and guest capacity.
              </p>
            </div>
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
              <img src="/bed-icon.png" alt="Bed" className="w-6 h-6" />
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start space-x-4 p-4 hover:bg-indigo-50 rounded-xl transition-all duration-200">
            <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
              <span className="text-indigo-700 font-bold">2</span>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900">Make it stand out</h3>
              <p className="text-gray-600 text-sm mt-1">
                Add photos, a compelling title, and description.
              </p>
            </div>
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
              <img src="/decor-icon.png" alt="Decor" className="w-6 h-6" />
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start space-x-4 p-4 hover:bg-indigo-50 rounded-xl transition-all duration-200">
            <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
              <span className="text-indigo-700 font-bold">3</span>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900">Finish up and publish</h3>
              <p className="text-gray-600 text-sm mt-1">
                Set your price, verify details, and publish your listing.
              </p>
            </div>
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
              <img src="/door-icon.png" alt="Door" className="w-6 h-6" />
            </div>
          </div>

          {/* Button */}
          <button 
            onClick={handleSubmit}
            className="mt-6 bg-gradient-to-r from-indigo-600 to-pink-600 hover:from-indigo-700 hover:to-pink-700 text-white font-medium py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <span>Get started</span>
            <FiArrowRight className="w-5 h-5" />
          </button>
          
          <p className="text-xs text-gray-400 text-center mt-4">
            By continuing, you agree to Adventure Triangle's Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Welcome;