import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheckCircle, FiDollarSign, FiUsers, FiBarChart2, FiGlobe, FiMapPin, FiAward, FiShield } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer';

const PartnerPage = () => {
  const navigate = useNavigate();
  const handlePartnerLogin = () => {
    navigate('/onboarding1'); // change to the actual route you want
  };
  const [activeTab, setActiveTab] = useState('overview');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    companyName: '',
    website: '',
    country: '',
    yearsInBusiness: '',
    adventurePrograms: [],
    specialty: '',
    groupSize: '',
    certifications: [],
    insurance: '',
    equipment: '',
    expectations: '',
    referral: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Hero Section Background Image
  const heroBg = {
    backgroundImage: "url('https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed"
  };

  // Form Section Background
  const formBg = {
    backgroundImage: "linear-gradient(rgba(255,255,255,0.95), rgba(255,255,255,0.95)), url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=60')",
    backgroundSize: "cover",
    backgroundPosition: "center"
  };

  const partnerBenefits = [
    {
      icon: <FiDollarSign className="text-4xl mb-4 text-blue-600" />,
      title: "Revenue Sharing",
      description: "Earn competitive commissions for every booking made through your platform"
    },
    {
      icon: <FiUsers className="text-4xl mb-4 text-green-600" />,
      title: "Global Audience",
      description: "Access millions of travelers from around the world"
    },
    {
      icon: <FiBarChart2 className="text-4xl mb-4 text-purple-600" />,
      title: "Performance Dashboard",
      description: "Real-time analytics to track your performance and earnings"
    },
    {
      icon: <FiGlobe className="text-4xl mb-4 text-orange-600" />,
      title: "Marketing Support",
      description: "Co-marketing opportunities and promotional materials"
    }
  ];

  const successStories = [
    {
      name: "Adventure Co.",
      logo: "https://cdn.worldvectorlogo.com/logos/adobe.svg",
      stats: "300% revenue growth in first year",
      quote: "Partnering opened up new markets we couldn't reach on our own."
    },
    {
      name: "Travel Hub",
      logo: "https://cdn.worldvectorlogo.com/logos/bookingcom.svg",
      stats: "50,000+ bookings facilitated",
      quote: "The integration was seamless and the support exceptional."
    },
    {
      name: "Explore Worldwide",
      logo: "https://cdn.worldvectorlogo.com/logos/expedia.svg",
      stats: "Expanded to 15 new countries",
      quote: "Our partnership helped us scale faster than we imagined."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      
      
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
            
              <div className="hidden md:ml-10 md:flex md:space-x-8">
                {['overview', 'benefits', 'success', 'join'].map((tab) => (
                  <button 
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-300 ${
                      activeTab === tab 
                        ? 'border-blue-500 text-gray-900' 
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center">
              <button
      onClick={handlePartnerLogin}
      className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
    >
      Partner Login
    </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden bg-white border-t">
        <div className="flex justify-around">
          {['overview', 'benefits', 'success', 'join'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-2 text-xs font-medium transition-colors duration-300 ${
                activeTab === tab 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden" style={heroBg}>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/70"></div>
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <div className="pt-20 sm:pt-24 lg:pt-20 lg:pb-14 lg:overflow-hidden">
              <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="sm:text-center lg:text-left"
                >
                  <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                    <span className="block">Grow Your Adventure</span>
                    <span className="block text-blue-200">Business With Us</span>
                  </h1>
                  <p className="mt-3 text-lg text-blue-100 sm:mt-5 sm:text-xl sm:max-w-xl sm:mx-auto md:mt-5 md:text-2xl lg:mx-0">
                    Join our global network of adventure partners and unlock new opportunities for growth.
                  </p>
                  <div className="mt-8 sm:mt-10 sm:flex sm:justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4">
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setActiveTab('join')}
                      className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-blue-900 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 transition-all duration-300"
                    >
                      Become a Partner <FiArrowRight className="ml-2" />
                    </motion.button>
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-blue-600/90 hover:bg-blue-700/90 md:py-4 md:text-lg md:px-10 transition-all duration-300"
                    >
                      Learn More
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview Section */}
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Partnership Made Simple
              </h2>
              <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">
                Our partner program is designed to help adventure businesses succeed by connecting them with our global community.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <FiCheckCircle className="h-8 w-8 text-blue-600" />,
                  title: "Easy Integration",
                  description: "Simple API integration with comprehensive documentation and dedicated support"
                },
                {
                  icon: <FiUsers className="h-8 w-8 text-green-600" />,
                  title: "Dedicated Support",
                  description: "Your success is our priority. Our partner managers are here to help"
                },
                {
                  icon: <FiBarChart2 className="h-8 w-8 text-purple-600" />,
                  title: "Flexible Options",
                  description: "Multiple partnership models that fit your business needs"
                },
                {
                  icon: <FiMapPin className="h-8 w-8 text-red-600" />,
                  title: "Global Reach",
                  description: "Access travelers from all over the world"
                },
                {
                  icon: <FiAward className="h-8 w-8 text-yellow-600" />,
                  title: "Premium Branding",
                  description: "Leverage our trusted brand in your marketing"
                },
                {
                  icon: <FiShield className="h-8 w-8 text-indigo-600" />,
                  title: "Secure Payments",
                  description: "Reliable and secure payment processing"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
                >
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-center text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-center">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 sm:p-12 text-white">
                  <h3 className="text-2xl font-bold mb-6">How Our Partnership Works</h3>
                  <div className="space-y-6">
                    {[
                      {
                        step: "1",
                        title: "Apply to the Program",
                        description: "Complete our simple application form to get started"
                      },
                      {
                        step: "2",
                        title: "Integration & Onboarding",
                        description: "Connect your systems using our developer-friendly API"
                      },
                      {
                        step: "3",
                        title: "Launch & Earn",
                        description: "Begin earning commissions on qualified bookings"
                      }
                    ].map((item, index) => (
                      <div key={index} className="flex">
                        <div className="flex-shrink-0">
                          <span className="flex items-center justify-center h-10 w-10 rounded-full bg-white/20 text-white font-bold">
                            {item.step}
                          </span>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-medium">{item.title}</h4>
                          <p className="mt-1 text-blue-100">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white p-8 sm:p-12 flex items-center justify-center">
                  <img
                    className="w-full h-auto max-w-md"
                    src="https://illustrations.popsy.co/amber/digital-nomad.svg"
                    alt="Partnership process"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Benefits Section */}
        {activeTab === 'benefits' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Partner Benefits
              </h2>
              <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">
                Discover how our partnership program can help grow your adventure business.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {partnerBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10 }}
                  className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center"
                >
                  <div className="flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-20 bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl shadow-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 sm:p-12 text-white">
                  <h3 className="text-2xl font-bold mb-6">Revenue Potential</h3>
                  <p className="mb-6 text-green-100 text-lg">
                    Our top adventure partners earn over $100,000 annually through our commission program.
                  </p>
                  <div className="space-y-4">
                    {[
                      "Competitive commission rates",
                      "Monthly payouts",
                      "Volume-based bonuses",
                      "Seasonal promotions",
                      "Repeat customer incentives"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center">
                        <FiCheckCircle className="h-5 w-5 text-green-300 mr-3" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white p-8 sm:p-12 flex items-center justify-center">
                  <img
                    className="w-full h-auto max-w-md"
                    src="https://illustrations.popsy.co/amber/business-plan.svg"
                    alt="Revenue potential"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Success Stories Section */}
        {activeTab === 'success' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Partner Success Stories
              </h2>
              <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">
                Hear from adventure businesses that have grown with our partner program.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {successStories.map((story, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <img 
                        src={story.logo} 
                        alt={story.name} 
                        className="h-12 w-auto object-contain"
                      />
                      <h3 className="ml-4 text-xl font-bold text-gray-900">{story.name}</h3>
                    </div>
                    <p className="text-gray-600 italic mb-4">"{story.quote}"</p>
                    <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg inline-block text-sm font-medium">
                      {story.stats}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-20 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl shadow-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 sm:p-12 text-white">
                  <h3 className="text-2xl font-bold mb-6">Ready to Get Started?</h3>
                  <p className="text-purple-100 text-lg mb-8">
                    Join thousands of adventure partners who are growing their businesses with us.
                  </p>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveTab('join')}
                    className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-medium rounded-full shadow-lg text-purple-700 bg-white hover:bg-gray-100 transition-all duration-300"
                  >
                    Apply Now <FiArrowRight className="ml-2" />
                  </motion.button>
                </div>
                <div className="bg-white p-8 sm:p-12 flex items-center justify-center">
                  <img
                    className="w-full h-auto max-w-md"
                    src="https://illustrations.popsy.co/amber/team-work.svg"
                    alt="Get started"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Join Us Section */}
        {activeTab === 'join' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Join Our Adventure Partner Program
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Complete this form and our team will get back to you within 2 business days.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden" style={formBg}>
              <div className="p-8 sm:p-12">
                <form className="space-y-8">
                  {/* Personal Information */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-900 border-b pb-2">Personal Information</h3>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                          First Name*
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          id="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                          Last Name*
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          id="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email Address*
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Phone Number (with country code)*
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                        required
                      />
                    </div>
                  </div>

                  {/* Business Information */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-900 border-b pb-2">Business Information</h3>
                    
                    <div>
                      <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                        Company/Organization Name*
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        id="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="website" className="block text-sm font-medium text-gray-700">
                        Website URL
                      </label>
                      <input
                        type="url"
                        name="website"
                        id="website"
                        value={formData.website}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                        placeholder="https://"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                          Country/Region of Operation*
                        </label>
                        <select
                          name="country"
                          id="country"
                          value={formData.country}
                          onChange={handleChange}
                          className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                          required
                        >
                          <option value="">Select a country</option>
                          <option value="US">United States</option>
                          <option value="CA">Canada</option>
                          <option value="UK">United Kingdom</option>
                          <option value="AU">Australia</option>
                          <option value="NZ">New Zealand</option>
                          <option value="IN">India</option>
                          <option value="NP">Nepal</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="yearsInBusiness" className="block text-sm font-medium text-gray-700">
                          Years in Adventure Business*
                        </label>
                        <select
                          name="yearsInBusiness"
                          id="yearsInBusiness"
                          value={formData.yearsInBusiness}
                          onChange={handleChange}
                          className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                          required
                        >
                          <option value="">Select</option>
                          <option value="0-1">0-1 years</option>
                          <option value="1-3">1-3 years</option>
                          <option value="3-5">3-5 years</option>
                          <option value="5+">5+ years</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Adventure Programs */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-900 border-b pb-2">Adventure Programs</h3>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        What types of adventure programs do you offer? (Select all that apply)*
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                          "Trekking/Hiking",
                          "Mountaineering",
                          "Rock Climbing",
                          "White Water Rafting",
                          "Kayaking/Canoeing",
                          "Wildlife Safaris",
                          "Cultural Tours",
                          "Cycling Tours",
                          "Skiing/Snowboarding",
                          "Paragliding",
                          "Scuba Diving",
                          "Other Water Sports"
                        ].map((program) => (
                          <div key={program} className="flex items-start">
                            <div className="flex items-center h-5">
                              <input
                                id={`program-${program}`}
                                name="adventurePrograms"
                                type="checkbox"
                                value={program}
                                checked={formData.adventurePrograms?.includes(program) || false}
                                onChange={(e) => {
                                  const { value, checked } = e.target;
                                  setFormData(prev => ({
                                    ...prev,
                                    adventurePrograms: checked
                                      ? [...(prev.adventurePrograms || []), value]
                                      : (prev.adventurePrograms || []).filter(p => p !== value)
                                  }));
                                }}
                                className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                              />
                            </div>
                            <label htmlFor={`program-${program}`} className="ml-3 block text-sm text-gray-700">
                              {program}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="specialty" className="block text-sm font-medium text-gray-700">
                        What is your specialty or unique offering?*
                      </label>
                      <textarea
                        id="specialty"
                        name="specialty"
                        rows={3}
                        value={formData.specialty}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="groupSize" className="block text-sm font-medium text-gray-700">
                        Typical group size you can handle*
                      </label>
                      <select
                        name="groupSize"
                        id="groupSize"
                        value={formData.groupSize}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                        required
                      >
                        <option value="">Select</option>
                        <option value="1-5">1-5 people</option>
                        <option value="6-10">6-10 people</option>
                        <option value="11-15">11-15 people</option>
                        <option value="16-20">16-20 people</option>
                        <option value="20+">20+ people</option>
                      </select>
                    </div>
                  </div>

                  {/* Operational Details */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-900 border-b pb-2">Operational Details</h3>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Do you have the following certifications? (Select all that apply)
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                          "First Aid Certified",
                          "Wilderness First Responder",
                          "Leave No Trace Certified",
                          "Mountain Guide Certification",
                          "River Guide Certification",
                          "Other Safety Certifications"
                        ].map((cert) => (
                          <div key={cert} className="flex items-start">
                            <div className="flex items-center h-5">
                              <input
                                id={`cert-${cert}`}
                                name="certifications"
                                type="checkbox"
                                value={cert}
                                checked={formData.certifications?.includes(cert) || false}
                                onChange={(e) => {
                                  const { value, checked } = e.target;
                                  setFormData(prev => ({
                                    ...prev,
                                    certifications: checked
                                      ? [...(prev.certifications || []), value]
                                      : (prev.certifications || []).filter(c => c !== value)
                                  }));
                                }}
                                className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                              />
                            </div>
                            <label htmlFor={`cert-${cert}`} className="ml-3 block text-sm text-gray-700">
                              {cert}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="insurance" className="block text-sm font-medium text-gray-700">
                          Do you have liability insurance?*
                        </label>
                        <select
                          name="insurance"
                          id="insurance"
                          value={formData.insurance}
                          onChange={handleChange}
                          className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                          required
                        >
                          <option value="">Select</option>
                          <option value="yes">Yes</option>
                          <option value="no">No, but planning to get</option>
                          <option value="none">No</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="equipment" className="block text-sm font-medium text-gray-700">
                          Do you provide equipment for participants?*
                        </label>
                        <select
                          name="equipment"
                          id="equipment"
                          value={formData.equipment}
                          onChange={handleChange}
                          className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                          required
                        >
                          <option value="">Select</option>
                          <option value="full">Full equipment provided</option>
                          <option value="partial">Some equipment provided</option>
                          <option value="none">Participants bring their own</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Partnership Expectations */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-900 border-b pb-2">Partnership Expectations</h3>
                    
                    <div>
                      <label htmlFor="expectations" className="block text-sm font-medium text-gray-700">
                        What are you looking for in this partnership?*
                      </label>
                      <textarea
                        id="expectations"
                        name="expectations"
                        rows={4}
                        value={formData.expectations}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="referral" className="block text-sm font-medium text-gray-700">
                        How did you hear about us?
                      </label>
                      <select
                        name="referral"
                        id="referral"
                        value={formData.referral}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      >
                        <option value="">Select</option>
                        <option value="search">Search Engine</option>
                        <option value="social">Social Media</option>
                        <option value="recommendation">Recommendation</option>
                        <option value="event">Industry Event</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Terms and Submit */}
                  <div className="pt-6">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="terms"
                          name="terms"
                          type="checkbox"
                          className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                          required
                        />
                      </div>
                      <label htmlFor="terms" className="ml-3 block text-sm text-gray-700">
                        I agree to the <a href="#" className="text-blue-600 hover:text-blue-500">Terms of Service</a> and <a href="#" className="text-blue-600 hover:text-blue-500">Privacy Policy</a>*
                      </label>
                    </div>
                    
                    <div className="mt-8">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="w-full flex justify-center py-4 px-6 border border-transparent rounded-full shadow-lg text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300"
                      >
                        Submit Partner Application
                      </motion.button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Next Steps */}
            <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-blue-800 mb-6 text-center">After You Apply</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    icon: <FiCheckCircle className="h-6 w-6 text-blue-600" />,
                    title: "Application Review",
                    description: "Our team will review your details within 2 business days"
                  },
                  {
                    icon: <FiUsers className="h-6 w-6 text-green-600" />,
                    title: "Verification Call",
                    description: "We'll schedule a call to verify details and discuss options"
                  },
                  {
                    icon: <FiBarChart2 className="h-6 w-6 text-purple-600" />,
                    title: "Onboarding",
                    description: "Access to partner portal, marketing materials, and training"
                  },
                  {
                    icon: <FiGlobe className="h-6 w-6 text-orange-600" />,
                    title: "Launch",
                    description: "We'll help you set up listings and launch your programs"
                  }
                ].map((step, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                    <div className="flex justify-center mb-4">
                      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-50">
                        {step.icon}
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-center text-gray-900 mb-2">{step.title}</h4>
                    <p className="text-gray-600 text-center text-sm">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </main>

      {/* Footer CTA */}
      <div className="bg-gradient-to-r from-gray-900 to-blue-900">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              <span className="block">Ready to grow your adventure business?</span>
              <span className="block text-blue-300">Join our partner program today.</span>
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-blue-100">
              Thousands of adventure providers trust our platform to expand their reach and increase bookings.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-8 flex lg:mt-0 lg:flex-shrink-0 justify-center lg:justify-start"
          >
            <div className="inline-flex rounded-full shadow">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab('join')}
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 transition-all duration-300"
              >
                Get Started
              </motion.button>
            </div>
            <div className="ml-3 inline-flex rounded-full shadow">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-blue-600 bg-white hover:bg-gray-50 transition-all duration-300"
              >
                Learn more
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PartnerPage;