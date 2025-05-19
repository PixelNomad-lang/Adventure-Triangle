// AdventureTools.jsx
import React from 'react';

const tools = [
  {
    title: 'Activity Editor',
    subtitle: 'Showcase every zone of your adventure',
    image: '/images/adventure-listing.png', // replace with your actual image path
  },
  {
    title: 'Schedule & Bookings',
    subtitle: 'Manage availability, dates, and pricing',
    image: '/images/adventure-calendar.png',
  },
  {
    title: 'Messages',
    subtitle: 'Chat with guests and adventure guides',
    image: '/images/adventure-messages.png',
  },
];

export default function AdventureTools() {
  return (
    <section className="bg-white py-16 px-4 text-center font-['Outfit']">
      <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-10">
        All the tools you need <br /> to host, all in one app
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {tools.map((tool, index) => (
          <div key={index} className="space-y-4">
            <div className="w-full aspect-[9/16] bg-gray-100 rounded-xl overflow-hidden shadow-lg">
              <img
                src={tool.image}
                alt={tool.title}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">{tool.title}</h3>
            <p className="text-sm text-gray-500">{tool.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
