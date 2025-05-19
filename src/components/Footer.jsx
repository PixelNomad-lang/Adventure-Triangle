import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0b0c3d] to-[#1a1c5a] text-white px-4 sm:px-8 lg:px-16 py-12 opacity-70">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12">
          {/* Logo and About */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <div className="flex items-center mb-4">
              <img src="/logo-white.svg" alt="Himrahi Adventure" className="h-10 mr-2" />
              <span className="text-xl font-bold">Himrahi</span>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Creating unforgettable adventure experiences since 2010. Push your limits with our certified guides.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition">
                <img src="/icons/facebook.svg" alt="Facebook" className="h-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition">
                <img src="/icons/instagram.svg" alt="Instagram" className="h-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition">
                <img src="/icons/youtube.svg" alt="YouTube" className="h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white flex items-center">
              <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>
              Company
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Press</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Adventure Zones */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white flex items-center">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
              Adventures
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition">Air Zone</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Water Zone</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Land Zone</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">All Activities</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white flex items-center">
              <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
              Support
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Safety</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">FAQs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Community</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white flex items-center">
              <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="w-4 h-4 mt-1 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:9714568494" className="text-gray-300 hover:text-white transition">971.4568.4914</a>
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 mt-1 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@himrahi.com" className="text-gray-300 hover:text-white transition">info@himrahi.com</a>
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 mt-1 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-300">Adventure Triangle Park</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-12 mb-8">
          <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
            <h3 className="text-lg font-bold mb-2">Stay Updated on New Adventures</h3>
            <p className="text-gray-300 text-sm mb-4">Subscribe to get exclusive offers and adventure tips</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-white placeholder-gray-400"
              />
              <button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold px-6 py-3 rounded-lg transition-all shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright and Legal */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Himrahi Adventure Triangle. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;