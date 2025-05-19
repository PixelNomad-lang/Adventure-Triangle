import React, { useState } from 'react';

const AdventureContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    zone: '',
    preferredDate: '',
    message: '',
    agreeToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // You can send the formData to your backend or API
  };

  return (
    <div className="relative overflow-hidden py-16 px-4 sm:px-8 z-10">
      {/* Adventure-themed background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-700 via-emerald-600 to-teal-500 opacity-95 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1900&q=80')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Info Section */}
          <div className="text-white">
            <div className="inline-block px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm mb-6">
              <span className="font-semibold">ADVENTURE AWAITS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Ready for Your <span className="text-yellow-300">Next Thrill?</span>
            </h2>
            <p className="text-lg mb-8 text-white/90 leading-relaxed">
              Whether you're flying through the air, conquering wild rapids, or exploring rugged terrains — 
              <span className="font-semibold"> Adventure Triangle Park</span> offers heart-pounding experiences 
              with top-tier safety standards.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-400/20 p-2 rounded-full">
                  <svg className="w-6 h-6 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Three Zones of Adventure</h4>
                  <p className="text-white/80">Choose your perfect adrenaline rush</p>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10">
                  <h5 className="font-bold text-blue-200">Air</h5>
                  <p className="text-sm text-white/80">Paragliding, Zip-lining</p>
                </div>
                <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10">
                  <h5 className="font-bold text-teal-200">Water</h5>
                  <p className="text-sm text-white/80">Rafting, Jet Ski</p>
                </div>
                <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10">
                  <h5 className="font-bold text-green-200">Land</h5>
                  <p className="text-sm text-white/80">ATV Rides, Trekking</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-600 to-green-700 p-6 text-white">
              <h3 className="text-2xl font-bold">Adventure Booking Form</h3>
              <p className="text-white/90">Secure your spot for an unforgettable experience</p>
            </div>
            
            <div className="p-6 space-y-5">
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Full Name *</label>
                <input
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  required
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">Email *</label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    required
                  />
                </div>
                
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">Phone *</label>
                  <input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Adventure Zone *</label>
                <select
                  name="zone"
                  value={formData.zone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  required
                >
                  <option value="">Select your adventure</option>
                  <option value="Air">Air Adventures (Paragliding, Zip-lining)</option>
                  <option value="Water">Water Adventures (Rafting, Jet Ski)</option>
                  <option value="Land">Land Adventures (ATV Rides, Trekking)</option>
                </select>
              </div>
              
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Preferred Date *</label>
                <input
                  name="preferredDate"
                  type="date"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  required
                />
              </div>
              
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Special Requests</label>
                <textarea
                  name="message"
                  rows="3"
                  placeholder="Tell us about your adventure expectations..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                ></textarea>
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    className="w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label className="font-medium text-gray-700">
                    I agree to the <a href="#" className="text-emerald-600 hover:underline">terms, conditions</a> and 
                    <a href="#" className="text-emerald-600 hover:underline"> safety guidelines</a>
                  </label>
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-700 hover:to-green-800 text-white font-bold py-3 px-4 rounded-lg shadow-md transition-all duration-300 transform hover:scale-[1.02]"
              >
                Book My Adventure Now
                <svg className="w-4 h-4 inline ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdventureContactForm;