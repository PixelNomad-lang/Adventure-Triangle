import { useState } from 'react';
import { FcGoogle, FcPhoneAndroid } from 'react-icons/fc';
import { FaFacebook, FaApple, FaCheck } from 'react-icons/fa';

export default function AuthPortal() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    countryCode: '+1',
    password: '',
    agreedToTerms: false
  });

  const countryCodes = [
    { code: '+1', flag: '🇺🇸' },
    { code: '+44', flag: '🇬🇧' },
    { code: '+91', flag: '🇮🇳' },
    { code: '+61', flag: '🇦🇺' },
    // Add more country codes
  ];

  const toggleAuthMode = () => setIsLogin(!isLogin);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white/10 backdrop-blur-lg rounded-3xl shadow-xl border border-white/20">
        {/* Company Header */}
        <div className="p-8 border-b border-white/20">
          <div className="flex items-center justify-center gap-4">
            <img 
              src="/logo.svg" 
              alt="Adventure Triangle Logo"
              className="w-16 h-16"
            />
            <div>
              <h1 className="text-3xl font-bold text-white">Adventure Triangle</h1>
              <p className="text-white/80">Global Partner Network</p>
            </div>
          </div>
        </div>

        <div className="p-8 space-y-6">
          {/* Auth Toggle */}
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setIsLogin(true)}
              className={`px-6 py-2 rounded-full ${
                isLogin ? 'bg-blue-600 text-white' : 'bg-white/10 text-white/70'
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`px-6 py-2 rounded-full ${
                !isLogin ? 'bg-blue-600 text-white' : 'bg-white/10 text-white/70'
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Social Auth Grid */}
          <div className="grid grid-cols-3 gap-4">
            <button className="p-3 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center gap-2 text-white">
              <FcGoogle className="text-xl" />
              Google
            </button>
            <button className="p-3 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center gap-2 text-white">
              <FaApple className="text-xl" />
              Apple
            </button>
            <button className="p-3 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center gap-2 text-white">
              <FcPhoneAndroid className="text-xl" />
              Phone
            </button>
          </div>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20" />
            </div>
            <div className="relative flex justify-center">
              <span className="px-4 bg-transparent text-white/80 text-sm">
                or continue with {isLogin ? 'email' : 'email signup'}
              </span>
            </div>
          </div>

          {/* Dynamic Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50"
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            )}

            {/* Email/Phone Section */}
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
              
              {!isLogin && (
                <div className="flex gap-2">
                  <select 
                    className="w-1/3 p-3 bg-white/10 border border-white/20 rounded-lg text-white"
                    value={formData.countryCode}
                    onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                  >
                    {countryCodes.map(({ code, flag }) => (
                      <option key={code} value={code}>
                        {flag} {code}
                      </option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-2/3 p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50"
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              )}
            </div>

            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50"
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />

            {/* Terms Agreement */}
            {!isLogin && (
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-1 w-5 h-5 accent-blue-500"
                  checked={formData.agreedToTerms}
                  onChange={(e) => setFormData({ ...formData, agreedToTerms: e.target.checked })}
                  required
                />
                <label htmlFor="terms" className="text-white/80 text-sm">
                  I agree to the{' '}
                  <a href="/terms" className="text-blue-400 hover:underline">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="/privacy" className="text-blue-400 hover:underline">
                    Privacy Policy
                  </a>
                </label>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg flex items-center justify-center gap-2"
              disabled={!isLogin && !formData.agreedToTerms}
            >
              <FaCheck />
              {isLogin ? 'Login to Dashboard' : 'Create Account'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}