import React from 'react';
import { useNavigate } from 'react-router-dom';

function Step3() {
  const navigate = useNavigate();

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: '#fff'
    }}>
      {/* Top Bar */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '24px 40px 0 40px'
      }}>
        <img src="/logo.png" alt="Logo" style={{ height: 36 }} />
        <button
          style={{
            border: '1px solid #222',
            borderRadius: 24,
            padding: '10px 28px',
            fontWeight: 600,
            background: '#fff',
            fontSize: 16,
            cursor: 'pointer'
          }}
        >
          Save & exit
        </button>
      </div>

      {/* Main Content */}
      <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 80px'
      }}>
        {/* Left: Text */}
        <div style={{ maxWidth: 540 }}>
          <div style={{ fontSize: 18, color: '#555', marginBottom: 16 }}>Step 3</div>
          <div style={{ fontSize: 48, fontWeight: 700, lineHeight: 1.1, marginBottom: 24 }}>
            Pinpoint your adventure location
          </div>
          <div style={{ fontSize: 20, color: '#444', marginBottom: 0 }}>
            In this step, you’ll select your adventure’s location on the map and confirm the coordinates. This helps guests find you easily and ensures accurate directions.
          </div>
        </div>
        {/* Right: Adventure Triangle Illustration */}
        <div>
          {/* Replace with your own SVG or image for an adventure triangle */}
          <img
            src="/adventure-triangle.png"
            alt="Adventure Triangle"
            style={{ width: 400, height: 400, objectFit: 'contain' }}
            onError={e => {
              // fallback SVG if image not found
              e.target.outerHTML = `
                <svg width="400" height="400" viewBox="0 0 400 400">
                  <polygon points="200,40 360,360 40,360" fill="#e6f0ff" stroke="#007bff" strokeWidth="8"/>
                  <circle cx="200" cy="200" r="30" fill="#007bff" />
                  <text x="200" y="390" fontSize="32" textAnchor="middle" fill="#007bff" fontWeight="bold">Adventure</text>
                </svg>
              `;
            }}
          />
        </div>
      </div>

      {/* Bottom Navigation */}
      <div style={{
        borderTop: '4px solid #222',
        marginTop: 32,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '24px 80px'
      }}>
        <button
          style={{
            background: 'none',
            border: 'none',
            color: '#222',
            fontSize: 18,
            textDecoration: 'underline',
            cursor: 'pointer'
          }}
          onClick={() => navigate(-1)}
        >
          Back
        </button>
        <button
          style={{
            background: '#222',
            color: '#fff',
            border: 'none',
            borderRadius: 12,
            fontSize: 20,
            fontWeight: 600,
            padding: '12px 48px',
            cursor: 'pointer'
          }}
          onClick={() => navigate('/step-4')}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Step3;