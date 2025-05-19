import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const adventureHighlights = [
  'Thrilling',
  'Scenic',
  'Beginner-friendly',
  'Challenging',
  'Wildlife-rich',
  'Eco-friendly'
];

function Step5() {
  const [selected, setSelected] = useState([]);
  const navigate = useNavigate();

  const handleSelect = (highlight) => {
    if (selected.includes(highlight)) {
      setSelected(selected.filter(h => h !== highlight));
    } else if (selected.length < 2) {
      setSelected([...selected, highlight]);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#f9fafb',
      fontFamily: `'Helvetica Neue', Helvetica, Arial, sans-serif`,
      color: '#222'
    }}>
      {/* Top Bar */}
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '24px 40px',
        backgroundColor: '#fff',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 1000
      }}>
        <img src="/logo.png" alt="Logo" style={{ height: 36, objectFit: 'contain' }} />
        <button
          style={{
            border: '1px solid #222',
            borderRadius: 24,
            padding: '10px 28px',
            fontWeight: 600,
            background: '#fff',
            fontSize: 16,
            cursor: 'pointer',
            transition: 'background-color 0.3s, box-shadow 0.3s'
          }}
        >
          Save & exit
        </button>
      </header>

      {/* Main Content */}
      <main style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          width: '100%',
          maxWidth: '800px',
          textAlign: 'center'
        }}>
          {/* Step Indicator */}
          <div style={{
            fontSize: 18,
            color: '#555',
            marginBottom: 8
          }}>
            Step 5
          </div>

          {/* Main Heading */}
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            marginBottom: 24,
            lineHeight: 1.2,
            color: '#222'
          }}>
            Next, let's describe your adventure
          </h1>

          {/* Subtext */}
          <p style={{
            fontSize: 20,
            color: '#555',
            marginBottom: 32,
            padding: '0 10px',
            lineHeight: 1.5
          }}>
            Choose up to 2 highlights. We'll use these to get your description started.
          </p>

          {/* Highlights Buttons */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            justifyContent: 'center',
            marginBottom: 40
          }}>
            {adventureHighlights.map((highlight) => {
              const isSelected = selected.includes(highlight);
              const isDisabled = !isSelected && selected.length >= 2;

              return (
                <button
                  key={highlight}
                  onClick={() => handleSelect(highlight)}
                  disabled={isDisabled}
                  style={{
                    padding: '12px 24px',
                    borderRadius: '24px',
                    border: isSelected ? '2px solid #007bff' : '1px solid #ccc',
                    backgroundColor: isSelected ? '#e6f0ff' : '#fff',
                    color: '#222',
                    fontSize: 18,
                    fontWeight: isSelected ? 600 : 400,
                    cursor: isDisabled ? 'not-allowed' : 'pointer',
                    boxShadow: isSelected ? '0 4px 8px rgba(0,0,0,0.1)' : 'none',
                    transition: 'all 0.2s',
                    minWidth: 140
                  }}
                >
                  {highlight}
                </button>
              );
            })}
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <footer style={{
        borderTop: '4px solid #222',
        padding: '24px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        boxShadow: '0 -2px 8px rgba(0,0,0,0.1)',
        flexWrap: 'wrap'
      }}>
        <button
          onClick={() => navigate(-1)}
          style={{
            background: 'none',
            border: 'none',
            color: '#222',
            fontSize: 18,
            textDecoration: 'underline',
            cursor: 'pointer',
            padding: '8px 16px',
            transition: 'color 0.2s'
          }}
          onMouseOver={(e) => (e.target.style.color = '#007bff')}
          onMouseOut={(e) => (e.target.style.color = '#222')}
        >
          Back
        </button>
        <button
          onClick={() => navigate('/step-6')}
          disabled={selected.length === 0}
          style={{
            backgroundColor: '#222',
            color: '#fff',
            border: 'none',
            borderRadius: 12,
            fontSize: 20,
            fontWeight: 600,
            padding: '12px 48px',
            cursor: selected.length === 0 ? 'not-allowed' : 'pointer',
            opacity: selected.length === 0 ? 0.5 : 1,
            transition: 'background-color 0.2s, opacity 0.2s'
          }}
          onMouseOver={(e) => {
            if (selected.length > 0) e.target.style.backgroundColor = '#000'
          }}
          onMouseOut={(e) => {
            if (selected.length > 0) e.target.style.backgroundColor = '#222'
          }}
        >
          Next
        </button>
      </footer>
    </div>
  );
}

export default Step5;