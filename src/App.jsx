import { useState, useEffect, lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import AdventuresStats from './components/AdventureStats'
import Partner from './components/Partner'
import AutoHoverTriangle from './components/Triangle1'
import Check from './components/Check'
import WhatsNew from './components/New'
import AdventureContactForm from './components/AdventureContactForm'
import Footer from './components/Footer'
import ParadoxAdventure from './components/ParadoxAdventure'
import ParadoxBackground from './components/ParadoxBackground'

// Lazy load components
const AboutUs = lazy(() => import('./components/About/AboutUs'))
const ContactUs = lazy(() => import('./components/ContactUs'))
const Partner1 = lazy(() => import('./components/Partner/Partner1'))
const Onboarding1 = lazy(() => import('./components/Onbording/Onboarding1'))
const Onboarding2 = lazy(() => import('./components/Onbording/Onboarding2'))
const Welcome = lazy(() => import('./components/Onbording/Welcome'))
const Step1 = lazy(() => import('./components/Onbording/Step1'))

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  </div>
)

function App() {
  const [showChatbot, setShowChatbot] = useState(false)
  const [messages, setMessages] = useState([
    { text: "Hello! I'm AdventureBot. How can I help you today?", sender: 'bot' }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isChatbotLoaded, setIsChatbotLoaded] = useState(false)

  // Load chatbot component only when needed
  useEffect(() => {
    if (showChatbot && !isChatbotLoaded) {
      setIsChatbotLoaded(true)
    }
  }, [showChatbot])

  // Common adventure questions and answers
  const botResponses = {
    'hi': "Hello adventurer! How can I assist you today?",
    'hello': "Greetings! Ready for your next adventure?",
    'help': "I can help with booking information, activity details, safety guidelines, and general inquiries about Adventure Triangle Park.",
    'booking': "You can book adventures through our website or contact our support team at bookings@adventuretriangle.com",
    'activities': "We offer three adventure zones: Air (paragliding, zip-lining), Water (rafting, jet ski), and Land (ATV rides, trekking).",
    'safety': "All activities follow strict safety protocols with certified guides and top-quality equipment.",
    'partner': "Simple making partner  with  just  two steps: 1. Fill out the partnership form on our website. 2. Our team will review and get back to you within 48 hours.",
    'contact': "Call us at 971.4568.4914 or email info@adventuretriangle.com",
    'default': "I'm sorry, I didn't understand that. Could you rephrase or ask about bookings, activities, or safety?"
  }

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    // Add user message
    setMessages(prev => [...prev, { text: inputValue, sender: 'user' }])

    // Process input and get bot response
    const userInput = inputValue.toLowerCase()
    let response = botResponses.default

    Object.keys(botResponses).forEach(key => {
      if (userInput.includes(key)) {
        response = botResponses[key]
      }
    })

    // Add bot response after a short delay
    setTimeout(() => {
      setMessages(prev => [...prev, { text: response, sender: 'bot' }])
    }, 500)

    setInputValue('')
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage()
    }
  }

  return (
    <Routes>
      <Route path="/" element={
        <div className="relative">
          <ParadoxBackground />
          <Header />
          <Hero />
          <AdventuresStats />
          <Partner />
          <AutoHoverTriangle />
          <ParadoxAdventure />
          <Check />
          <WhatsNew />
          <AdventureContactForm />
          <Footer />

          {/* Chatbot button - always visible */}
          <button
            onClick={() => setShowChatbot(!showChatbot)}
            className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all z-50"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </button>

          {/* Chatbot interface - loaded only when needed */}
          {showChatbot && isChatbotLoaded && (
            <div className="fixed bottom-6 right-6 z-50">
              <div className="w-80 h-96 bg-white rounded-t-xl shadow-xl flex flex-col border border-gray-200">
                {/* Chat header */}
                <div
                  className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-3 rounded-t-xl flex justify-between items-center"
                  onClick={() => setShowChatbot(!showChatbot)}
                >
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-2">
                      <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="font-bold">AdventureBot</h3>
                  </div>
                  <button className="text-white hover:text-gray-200">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Chat messages */}
                <div className="flex-1 p-4 overflow-y-auto">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`mb-3 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs p-3 rounded-lg ${message.sender === 'user'
                          ? 'bg-blue-600 text-white rounded-br-none'
                          : 'bg-gray-100 text-gray-800 rounded-bl-none'}`}
                      >
                        {message.text}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chat input */}
                <div className="p-3 border-t border-gray-200">
                  <div className="flex">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type your question..."
                      className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      onClick={handleSendMessage}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      } />

      <Route path="/about" element={
        <Suspense fallback={<LoadingSpinner />}>
          <AboutUs />
        </Suspense>
      } />
      <Route path="/contact" element={
        <Suspense fallback={<LoadingSpinner />}>
          <ContactUs />
        </Suspense>
      } />
      <Route path="/partner" element={
        <Suspense fallback={<LoadingSpinner />}>
          <Partner1 />
        </Suspense>
      } />
      <Route path="/onboarding" element={
        <Suspense fallback={<LoadingSpinner />}>
          <Onboarding1 />
        </Suspense>
      } />
    </Routes>
  )
}

export default App