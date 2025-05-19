// AdventureProtection.jsx
import React from 'react';

export default function AdventureProtection() {
  return (
    <section className="bg-white py-16 px-4 text-center font-['Outfit']">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">
        <span className="text-blue-600 font-bold">triangle</span>cover<br />
        for Adventurers
      </h2>

      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-6">
        However you explore, you’re protected
      </h3>

      <p className="text-gray-500 text-base sm:text-lg mt-4 max-w-xl mx-auto">
        Top-to-bottom protection, included every time you join an adventure on Adventure Triangle.
      </p>

      <ul className="mt-10 text-left max-w-md mx-auto space-y-6 text-gray-800 text-base sm:text-lg">
        <li className="flex justify-between border-b pb-3">
          <span>Up to $3m USD accident protection</span>
          <span className="text-green-600 font-bold">✓</span>
        </li>
        <li className="flex justify-between border-b pb-3">
          <span>Up to $1m USD liability insurance</span>
          <span className="text-green-600 font-bold">✓</span>
        </li>
        <li className="flex justify-between">
          <span>24-hour emergency support line</span>
          <span className="text-green-600 font-bold">✓</span>
        </li>
      </ul>

      <button className="mt-10 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-all">
        Learn about TriangleCover
      </button>

      <p className="text-xs text-gray-400 mt-6 max-w-md mx-auto leading-snug">
        Accident Protection reimburses for certain mishaps during adventures on Adventure Triangle.
        It’s not insurance and may apply only if participants don’t pay. Liability insurance is provided by 3rd parties.
        <a href="#" className="underline ml-1">Check details and exclusions.</a>
      </p>
    </section>
  );
}
