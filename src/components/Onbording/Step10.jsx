import React from 'react';
import { useNavigate } from 'react-router-dom';

function Step10() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/step-11');
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-md space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Final Step: A Few More Questions</h2>

      <div className="space-y-4">
        {/* Question 1 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            1. What are you most excited about in this new role?
          </label>
          <textarea
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="3"
            placeholder="Share your excitement..."
          />
        </div>

        {/* Question 2 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            2. Do you have any concerns or questions before getting started?
          </label>
          <textarea
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="3"
            placeholder="Let us know..."
          />
        </div>

        {/* Question 3 (for partner) */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            3. Is there anything you'd like us to share with your partner?
          </label>
          <textarea
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="3"
            placeholder="Write your message to your partner..."
          />
        </div>
      </div>

      <button
        onClick={handleNext}
        className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Next
      </button>
    </div>
  );
}

export default Step10;
