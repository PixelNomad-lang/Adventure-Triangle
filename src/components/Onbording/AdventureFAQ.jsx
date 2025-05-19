import { useState } from "react";

const FAQSection = ({ title, questions }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left py-4 flex justify-between items-center text-lg font-medium"
      >
        {title}
        <span className="text-xl">{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && (
        <ul className="pl-4 pb-4 text-gray-600 space-y-2">
          {questions.map((q, i) => (
            <li key={i}>• {q}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default function AdventureFAQ() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">
        Your Adventure Questions,
        <br className="hidden md:block" /> <span className="text-black">Answered</span>
      </h2>

      <div className="divide-y">
        <FAQSection
          title="Top questions"
          questions={[
            "What is the Adventure Triangle Park?",
            "Do I need to book activities in advance?",
            "Is the park suitable for all ages?",
          ]}
        />
        <FAQSection
          title="Adventure Zones"
          questions={[
            "What activities are available in the Air Zone?",
            "What can I do in the Water Zone?",
            "Are there hiking trails in the Land Zone?",
          ]}
        />
        <FAQSection
          title="Safety & Guidelines"
          questions={[
            "Are helmets and safety gear provided?",
            "What’s the park’s cancellation policy?",
            "Are pets allowed in the park?",
          ]}
        />
      </div>

      <div className="mt-12 text-center">
        <h3 className="text-xl font-semibold">Still have questions?</h3>
        <p className="text-gray-500 mb-6">
          Get answers from a park guide or adventure expert.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition">
          Ask a guide
        </button>
      </div>
    </section>
  );
}
