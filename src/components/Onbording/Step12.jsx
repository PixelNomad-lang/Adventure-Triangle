import React from 'react';
import { useNavigate } from 'react-router-dom';

function Step12() {
  const navigate = useNavigate();

  const handleFinish = () => {
    navigate('/'); // Navigate to the main page
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-md space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">One Last Thing</h2>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          What do you hope to achieve in your first 90 days here?
        </label>
        <textarea
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="4"
          placeholder="Share your goals or vision for the next few months..."
        />
      </div>

      <button
        onClick={handleFinish}
        className="mt-6 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
      >
        Finish & Go to Main Page
      </button>
    </div>
  );
}

export default Step12;
