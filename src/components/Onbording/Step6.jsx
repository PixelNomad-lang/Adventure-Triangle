import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Step6() {
  const [description, setDescription] = useState('');
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
        justifyContent: 'center',
        flexDirection: 'column'
      }}>
        <div style={{ fontSize: 18, color: '#555', marginBottom: 16 }}>Step 6</div>
        <div style={{ fontSize: 48, fontWeight: 700, lineHeight: 1.1, marginBottom: 24 }}>
          Write your adventure description
        </div>
        <div style={{ fontSize: 20, color: '#444', marginBottom: 32, textAlign: 'center' }}>
          Share what makes your adventure unique. Guests will see this description on your listing.
        </div>
        <textarea
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder="Describe your adventure experience, what guests can expect, and any special highlights..."
          style={{
            width: 500,
            minHeight: 140,
            padding: 16,
            fontSize: 18,
            borderRadius: 10,
            border: '1px solid #ccc',
            marginBottom: 32,
            resize: 'vertical'
          }}
        />
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
          onClick={() => navigate('/step-7')}
          disabled={description.trim().length < 30}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Step6;