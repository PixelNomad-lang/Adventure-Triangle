import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-b from-white to-blue-50">
      <Header />
      <section className="min-h-screen text-gray-800 overflow-hidden">
        {/* Hero Section */}
        <div className="relative py-20 px-4 md:px-20 bg-gradient-to-r from-blue-500 to-blue-700 text-white">
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeIn">
              About <span className="text-yellow-300">Himrahi</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 animate-fadeIn delay-100">
              Where <span className="font-bold">adventure</span> meets{' '}
              <span className="font-bold">passion</span> across{' '}
              <span className="underline decoration-yellow-300">sky, land, and sea</span>
            </p>
            <div className="absolute -bottom-1 left-0 right-0 h-20 bg-gradient-to-t from-blue-50 to-transparent"></div>
          </div>
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-yellow-300 mix-blend-overlay animate-float"></div>
              <div className="absolute top-1/3 right-1/3 w-32 h-32 rounded-full bg-white mix-blend-overlay animate-float delay-2000"></div>
              <div className="absolute bottom-1/4 right-1/4 w-28 h-28 rounded-full bg-yellow-300 mix-blend-overlay animate-float delay-4000"></div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 md:px-20 py-16 relative -mt-10">
          {/* Adventure Triangle Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-200 transition">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15l4-8 4 8m-4-8h4m5 0h4m-9 8h4m5 0h4m-9-8h4m5 0h4"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Air Adventures</h3>
              <p className="text-gray-600 leading-relaxed">
                Soar through the skies with paragliding, zip-lining, and hot air ballooning experiences that will take your breath away.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-200 transition">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15l4-8 4 8m-4-8h4m5 0h4m-9 8h4m5 0h4m-9-8h4m5 0h4"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Water Adventures</h3>
              <p className="text-gray-600 leading-relaxed">
                Dive into crystal-clear waters for rafting, kayaking, and snorkeling adventures that will make a splash in your memories.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-200 transition">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15l4-8 4 8m-4-8h4m5 0h4m-9 8h4m5 0h4m-9-8h4m5 0h4"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Land Adventures</h3>
              <p className="text-gray-600 leading-relaxed">
                Conquer mountain trails, explore scenic routes, and experience the thrill of outdoor adventures on solid ground.
              </p>
            </div>
          </div>

          {/* Mission Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-10 text-white mb-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504609773096-104ff2c73ca4?q=80&w=2070&auto=format&fit=crop')] opacity-20 bg-cover bg-center"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <span className="w-8 h-1 bg-yellow-300 mr-4"></span>
                Our Mission
              </h2>
              <p className="text-lg md:text-xl leading-relaxed max-w-4xl">
                At Himrahi, we believe that adventure is not just an activity, but a transformative experience. Our mission is to connect people with nature's most exhilarating moments while maintaining the highest standards of safety and environmental responsibility. We curate experiences that challenge, inspire, and create lifelong memories.
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-4 gap-6 mb-20">
            <div className="bg-white p-6 rounded-xl text-center shadow-md">
              <div className="text-4xl font-bold text-blue-600 mb-2">10K+</div>
              <div className="text-gray-600">Happy Adventurers</div>
            </div>
            <div className="bg-white p-6 rounded-xl text-center shadow-md">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Unique Locations</div>
            </div>
            <div className="bg-white p-6 rounded-xl text-center shadow-md">
              <div className="text-4xl font-bold text-blue-600 mb-2">15</div>
              <div className="text-gray-600">Adventure Types</div>
            </div>
            <div className="bg-white p-6 rounded-xl text-center shadow-md">
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600">Safety Record</div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Ready for Your Next Adventure?</h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Join thousands of adventurers who've trusted Himrahi for unforgettable experiences in the most breathtaking locations.
            </p>
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-8 py-4 rounded-full hover:shadow-lg transition-all font-semibold hover:scale-105 transform"
            >
              Start Your Journey Today
            </a>
          </div>
        </div>
      </section>
      <Footer />
      
      {/* Add these to your global CSS */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        .delay-100 {
          animation-delay: 0.1s;
        }
        .delay-2000 {
          animation-delay: 2s;
        }
        .delay-4000 {
          animation-delay: 4s;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default AboutUs;