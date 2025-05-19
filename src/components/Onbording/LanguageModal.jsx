import { X } from "lucide-react";
import { useState } from "react";
import Languages from "../../data/languages.json";
import Currencies from "../../data/currencies.json";

const LanguageModal = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState("language");

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl w-[600px] max-h-[80vh] overflow-y-auto shadow-lg p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          <X size={20} />
        </button>

        {/* Tabs */}
        <div className="flex border-b mb-4">
          <button
            onClick={() => setActiveTab("language")}
            className={`px-4 py-2 font-medium ${
              activeTab === "language"
                ? "border-b-2 border-black"
                : "text-gray-500"
            }`}
          >
            Language and region
          </button>
          <button
            onClick={() => setActiveTab("currency")}
            className={`px-4 py-2 font-medium ${
              activeTab === "currency"
                ? "border-b-2 border-black"
                : "text-gray-500"
            }`}
          >
            Currency
          </button>
        </div>

        {/* Content */}
        {activeTab === "language" ? (
          <div>
            <div className="bg-gray-100 p-3 rounded-md mb-4 text-sm flex justify-between items-center">
              <span>
                Automatically translate descriptions and reviews to English.
              </span>
              <input type="checkbox" className="accent-black" defaultChecked />
            </div>

            {/* Suggested */}
            <h3 className="text-lg font-semibold mb-2">
              Suggested languages and regions
            </h3>
            <div className="grid grid-cols-3 gap-2 text-sm mb-6">
              {Languages.suggested.map((item, index) => (
                <span key={index}>
                  {item.language} <br /> {item.region}
                </span>
              ))}
            </div>

            {/* All languages */}
            <h3 className="text-lg font-semibold mb-2">
              Choose a language and region
            </h3>
            <div className="grid grid-cols-3 gap-3 text-sm">
              {Languages.all.map((item, index) => (
                <button key={index} className="border rounded-lg p-2">
                  {item.language}
                  <br />
                  {item.region}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <h3 className="text-lg font-semibold mb-2">Choose a currency</h3>
            <div className="grid grid-cols-3 gap-3 text-sm">
              {Currencies.map((item, index) => (
                <button key={index} className="border rounded-lg p-2">
                  {item.code} - {item.name} {item.symbol}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageModal;
