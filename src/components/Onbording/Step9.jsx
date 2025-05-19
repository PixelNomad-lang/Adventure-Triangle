import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Step9() {
  const navigate = useNavigate();
  const [welcomeType, setWelcomeType] = useState('any');

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
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <img src="/logo.png" alt="Logo" style={{ height: 36 }} />
          <span style={{ color: '#007bff', fontWeight: 600, cursor: 'pointer', fontSize: 18 }}>Questions?</span>
        </div>
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
        justifyContent: 'center',
        flexDirection: 'column'
      }}>
        <div style={{ fontSize: 18, color: '#555', marginBottom: 16 }}>Choose who to welcome for your first adventure reservation</div>
        <div style={{ fontSize: 20, color: '#444', marginBottom: 16, textAlign: 'center' }}>
          After your first guest, anyone can book your adventure. <span style={{ color: '#007bff', cursor: 'pointer' }}>Learn more</span>
        </div>

        <div style={{
          background: welcomeType === 'any' ? '#e6f0ff' : '#fff',
          border: welcomeType === 'any' ? '2px solid #007bff' : '1px solid #ccc',
          borderRadius: 16,
          padding: 24,
          marginBottom: 16,
          width: 420,
          cursor: 'pointer'
        }}
          onClick={() => setWelcomeType('any')}
        >
          <div style={{ fontWeight: 600, fontSize: 20, marginBottom: 8 }}>
            Any guest
          </div>
          <div style={{ color: '#555', fontSize: 16 }}>
            Get reservations faster when you welcome anyone from the adventure community.
          </div>
        </div>

        <div style={{
          background: welcomeType === 'experienced' ? '#e6f0ff' : '#fff',
          border: welcomeType === 'experienced' ? '2px solid #007bff' : '1px solid #ccc',
          borderRadius: 16,
          padding: 24,
          width: 420,
          cursor: 'pointer'
        }}
          onClick={() => setWelcomeType('experienced')}
        >
          <div style={{ fontWeight: 600, fontSize: 20, marginBottom: 8 }}>
            An experienced guest
          </div>
          <div style={{ color: '#555', fontSize: 16 }}>
            For your first guest, welcome someone with a good track record who can offer tips for how to be a great Adventure Host.
          </div>
        </div>

        <div style={{
          fontSize: 18,
          color: '#888',
          marginTop: 40
        }}>
          Your progress: step 13 out of 18.
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
          onClick={() => navigate('/step-10')}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Step9;