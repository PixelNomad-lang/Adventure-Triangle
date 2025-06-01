import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

// Components
import App from './App';
import PartnerSignup from './components/Partner/signup';
import Onboarding1 from './components/Onbording/Onboarding1';
import Onboarding2 from './components/Onbording/Onboarding2';
import Welcome from './components/Onbording/Welcome';
import Step1 from './components/Onbording/Step1';
import Step2 from './components/Onbording/Step2';
import Step3 from './components/Onbording/Step3';
import Step4 from './components/Onbording/Step4';
import Step5 from './components/Onbording/Step5';
import Step6 from './components/Onbording/Step6';
import Step7 from './components/Onbording/Step7';
import Step8 from './components/Onbording/Step8';
import Step9 from './components/Onbording/Step9';
import Step10 from './components/Onbording/Step10';
import Step11 from './components/Onbording/Step11';
import Step12 from './components/Onbording/Step12';
import AboutUs from './components/About/AboutUs';
import ContactUs from './components/ContactUs';
import Partner1 from './components/Partner/Partner1';
import BookingPage from './components/Booking/BookingPage';
import AdventureDetail from './components/Booking/AdventureDetail';
import { AuthProvider } from './components/Booking/AuthContext';
import  Login  from './components/Booking/Login';
import ReviewPayment from './components/Booking/ReviewPayment';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Wrap the entire app with AuthProvider */}
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Onboarding Routes */}
          <Route path="/onboarding1" element={<Onboarding1 />} />
          <Route path="/onboarding2" element={<Onboarding2 />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/step-1" element={<Step1 />} />
          <Route path="/step-2" element={<Step2 />} />
          <Route path="/step-3" element={<Step3 />} />
          <Route path="/step-4" element={<Step4 />} />
          <Route path="/step-5" element={<Step5 />} />
          <Route path="/step-6" element={<Step6 />} />
          <Route path="/step-7" element={<Step7 />} />
          <Route path="/step-8" element={<Step8 />} />
          <Route path="/step-9" element={<Step9 />} />
          <Route path="/step-10" element={<Step10 />} />
          <Route path="/step-11" element={<Step11 />} />
          <Route path="/step-12" element={<Step12 />} />

          {/* Partner Signup */}
          <Route path="/partner-signup" element={<PartnerSignup />} />

          {/* Main App Route */}
          <Route path="/" element={<App />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/partner" element={<Partner1 />} />  
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/adventures/:id" element={<AdventureDetail />} />
          // Add this to your Routes component
<Route path="/login" element={<Login />} />
<Route path="/review-payment" element={<ReviewPayment />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);