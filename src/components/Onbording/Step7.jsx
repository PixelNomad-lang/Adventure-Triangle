import React from 'react';
import { useNavigate } from 'react-router-dom';

function Step7() {
  const navigate = useNavigate();

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#fff',
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
        <img src="/logo.png" alt="Logo" style={{ height: 36, maxWidth: '100%', objectFit: 'contain' }} />
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
          maxWidth: 700,
          textAlign: 'center'
        }}>
          {/* Step Indicator */}
          <div style={{
            fontSize: 18,
            color: '#555',
            marginBottom: 12
          }}>
            Step 11 of 18
          </div>

          {/* Main Heading */}
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            marginBottom: 24,
            lineHeight: 1.2,
            color: '#222'
          }}>
            Finish up and publish
          </h1>

          {/* Description */}
          <p style={{
            fontSize: 20,
            color: '#555',
            marginBottom: 32,
            padding: '0 10px',
            lineHeight: 1.5
          }}>
            Finally, you’ll choose booking settings, set up pricing and publish your listing.
          </p>

          {/* Progress */}
          <div style={{
            fontSize: 18,
            color: '#888',
            marginBottom: 40
          }}>
            Your progress: step 11 out of 18.
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
        {/* Back Button */}
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

        {/* Next Button */}
        <button
          onClick={() => navigate('/step-8')}
          style={{
            backgroundColor: '#222',
            color: '#fff',
            border: 'none',
            borderRadius: 12,
            fontSize: 20,
            fontWeight: 600,
            padding: '12px 48px',
            cursor: 'pointer',
            opacity: 1,
            transition: 'background-color 0.2s, opacity 0.2s'
          }}
        >
          Next
        </button>
      </footer>

      {/* Responsive styles via media queries (can be added to external CSS if preferred) */}
      <style jsx>{`
        @media(max-width: 768px) {
          main {
            padding: 20px 10px;
          }
          footer {
            flexDirection: column;
            alignItems: center;
            gap: 12px;
            padding: 20px 20px;
          }
          button {
            width: 100%;
            max-width: 200px;
            font-size: 1rem;
            padding: 12px;
          }
        }
      `}</style>
    </div>
  );
}

export default Step7;