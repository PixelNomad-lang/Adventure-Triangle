import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const adventures = [
  'Trekking', 'Hiking', 'Camping', 'Rafting', 'Bungee Jumping',
  'Paragliding', 'Rock Climbing', 'Scuba Diving', 'Surfing', 'Kayaking',
  'Skydiving', 'Mountain Biking', 'Zip Lining', 'Caving', 'Horse Riding',
  'Snowboarding', 'Skiing', 'Safari', 'Hot Air Balloon', 'Fishing',
  'Sailing', 'Snorkeling', 'ATV Riding', 'Sandboarding', 'Wildlife Watching'
  // ...add more if needed
];

function Step2() {
  const [selected, setSelected] = useState([]);
  const [step, setStep] = useState(1);
  const [businessAnswer, setBusinessAnswer] = useState('');
  const [location, setLocation] = useState({ lat: '', lng: '' });
  const [locationInput, setLocationInput] = useState('');
  const [type, setType] = useState('');
  const [staff, setStaff] = useState(1);
  const [security, setSecurity] = useState(1);
  const [limit, setLimit] = useState(1);
  const navigate = useNavigate();

  const handleSelect = (adventure) => {
    setSelected(prev =>
      prev.includes(adventure)
        ? prev.filter(item => item !== adventure)
        : [...prev, adventure]
    );
  };

  const handleNext = () => {
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    } else if (step === 3) {
      setStep(4);
    } else if (step === 4) {
      // Save logic here if needed
      navigate('/step-3');
    }
  };

  // For demonstration, the map is a placeholder div.
  // Replace with your preferred map integration.
  const handleLocationConfirm = (e) => {
    e.preventDefault();
    // Simulate extracting lat/lng from input
    const [lat, lng] = locationInput.split(',').map(s => s.trim());
    setLocation({ lat, lng });
    handleNext();
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Top Bar */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '16px', borderBottom: '1px solid #eee'
      }}>
        <div>
          <img src="/logo.png" alt="Logo" style={{ height: 40 }} />
        </div>
        <div style={{ display: 'flex', gap: 12 }}>
          <button>Question</button>
          <button>Save</button>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>

      {/* Step 1: Adventure Selection */}
      {step === 1 && (
        <div style={{ flex: 1, padding: '32px 16px' }}>
          <h2>Which of these adventures describe your service?</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: 16,
            marginTop: 24
          }}>
            {adventures.map(adventure => (
              <button
                key={adventure}
                onClick={() => handleSelect(adventure)}
                style={{
                  padding: '16px',
                  borderRadius: 8,
                  border: selected.includes(adventure) ? '2px solid #007bff' : '1px solid #ccc',
                  background: selected.includes(adventure) ? '#e6f0ff' : '#fff',
                  cursor: 'pointer',
                  fontWeight: selected.includes(adventure) ? 'bold' : 'normal'
                }}
              >
                {adventure}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Adventure Business Question */}
      {step === 2 && (
        <div style={{ flex: 1, padding: '32px 16px' }}>
          <h2>Q2: Tell us about your Adventure Business</h2>
          <textarea
            value={businessAnswer}
            onChange={e => setBusinessAnswer(e.target.value)}
            placeholder="Describe your adventure business..."
            style={{ width: '100%', minHeight: 120, marginTop: 24, padding: 12, borderRadius: 8, border: '1px solid #ccc' }}
          />
          <div style={{ marginTop: 24 }}>
            <button onClick={handleNext} style={{
              padding: '12px 32px',
              borderRadius: 24,
              background: '#007bff',
              color: '#fff',
              border: 'none',
              fontSize: 16,
              fontWeight: 'bold',
              cursor: 'pointer'
            }}>Next</button>
          </div>
        </div>
      )}

      {/* Step 3: Location with Map and Confirm Form */}
      {step === 3 && (
        <div style={{ flex: 1, padding: '32px 16px' }}>
          <h2>Q3: Where is your adventure located?</h2>
          <div style={{ height: 300, marginBottom: 24, borderRadius: 8, background: '#e6e6e6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* Replace this with your map integration */}
            <span style={{ color: '#888' }}>Map Placeholder</span>
          </div>
          <form onSubmit={handleLocationConfirm}>
            <label>
              Confirm Location (lat, lng):
              <input
                type="text"
                value={locationInput}
                onChange={e => setLocationInput(e.target.value)}
                placeholder="e.g. 28.7041, 77.1025"
                style={{ marginLeft: 8, padding: 8, borderRadius: 6, border: '1px solid #ccc', width: 200 }}
              />
            </label>
            <button type="submit" style={{
              marginLeft: 16,
              padding: '8px 24px',
              borderRadius: 20,
              background: '#007bff',
              color: '#fff',
              border: 'none',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}>Confirm & Next</button>
          </form>
        </div>
      )}

      {/* Step 4: Basic Info with + / - Controls */}
      {step === 4 && (
        <div style={{ flex: 1, padding: '32px 16px' }}>
          <h2>Q4: Basic Info about your Adventure</h2>
          <div style={{ marginBottom: 24 }}>
            <label>
              Type of Adventure:
              <input
                value={type}
                onChange={e => setType(e.target.value)}
                placeholder="e.g. Trekking"
                style={{ marginLeft: 8, padding: 8, borderRadius: 6, border: '1px solid #ccc', width: 200 }}
              />
            </label>
          </div>
          <div style={{ marginBottom: 24 }}>
            <label style={{ marginRight: 16 }}>Number of Staff:</label>
            <button
              onClick={() => setStaff(Math.max(1, staff - 1))}
              style={{
                width: 36, height: 36, borderRadius: '50%', border: '1px solid #ccc', background: '#fff', fontSize: 20, marginRight: 8
              }}>-</button>
            <span style={{ fontSize: 20, minWidth: 24, display: 'inline-block', textAlign: 'center' }}>{staff}</span>
            <button
              onClick={() => setStaff(staff + 1)}
              style={{
                width: 36, height: 36, borderRadius: '50%', border: '1px solid #ccc', background: '#fff', fontSize: 20, marginLeft: 8
              }}>+</button>
          </div>
          <div style={{ marginBottom: 24 }}>
            <label style={{ marginRight: 16 }}>Number of Security:</label>
            <button
              onClick={() => setSecurity(Math.max(1, security - 1))}
              style={{
                width: 36, height: 36, borderRadius: '50%', border: '1px solid #ccc', background: '#fff', fontSize: 20, marginRight: 8
              }}>-</button>
            <span style={{ fontSize: 20, minWidth: 24, display: 'inline-block', textAlign: 'center' }}>{security}</span>
            <button
              onClick={() => setSecurity(security + 1)}
              style={{
                width: 36, height: 36, borderRadius: '50%', border: '1px solid #ccc', background: '#fff', fontSize: 20, marginLeft: 8
              }}>+</button>
          </div>
          <div style={{ marginBottom: 24 }}>
            <label style={{ marginRight: 16 }}>Limit:</label>
            <button
              onClick={() => setLimit(Math.max(1, limit - 1))}
              style={{
                width: 36, height: 36, borderRadius: '50%', border: '1px solid #ccc', background: '#fff', fontSize: 20, marginRight: 8
              }}>-</button>
            <span style={{ fontSize: 20, minWidth: 24, display: 'inline-block', textAlign: 'center' }}>{limit}</span>
            <button
              onClick={() => setLimit(limit + 1)}
              style={{
                width: 36, height: 36, borderRadius: '50%', border: '1px solid #ccc', background: '#fff', fontSize: 20, marginLeft: 8
              }}>+</button>
          </div>
          <button onClick={handleNext} style={{
            padding: '12px 32px',
            borderRadius: 24,
            background: '#007bff',
            color: '#fff',
            border: 'none',
            fontSize: 16,
            fontWeight: 'bold',
            cursor: 'pointer'
          }}>Next</button>
        </div>
      )}

      {/* Bottom Right Next Button */}
      {step === 1 && (
        <div style={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 100
        }}>
          <button
            onClick={handleNext}
            style={{
              padding: '12px 32px',
              borderRadius: 24,
              background: '#007bff',
              color: '#fff',
              border: 'none',
              fontSize: 16,
              fontWeight: 'bold',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              cursor: 'pointer'
            }}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default Step2;