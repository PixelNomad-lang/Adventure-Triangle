export default function WhatsNew() {
  const items = [
    {
      title: 'Mountain Trek 2025',
      subtitle: 'Registration is open for our thrilling Himalayan trek!',
      details: 'June 10-15, 2025 | Manali to Leh',
      action: 'Register now',
    },
    {
      title: 'Get Certified',
      subtitle: 'Become a certified Himrahi trek leader',
      details: 'Free certification, all year round',
      action: 'Learn more',
    },
    {
      title: 'Adventure Trends',
      subtitle: 'Top destinations & outdoor trends for 2025',
      details: 'Download our free adventure eBook',
      action: 'Download eBook',
    },
  ];

  return (
    <section className="bg-gray-50 py-12 opacity-50">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-10 z-10">
        What's New at Himrahi Adventure
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
        {items.map((item, index) => (
          <div key={index} className="bg-white p-6 shadow-md rounded-lg">
            <h4 className="text-sm text-gray-500 uppercase mb-2">{item.title}</h4>
            <p className="text-lg font-semibold text-blue-900 mb-1">{item.subtitle}</p>
            <p className="text-sm text-gray-600 mb-4">{item.details}</p>
            <button className="text-blue-600 font-medium hover:underline">
              {item.action} →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
