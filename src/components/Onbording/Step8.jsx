import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Step8() {
  const navigate = useNavigate();
  const [bookingType, setBookingType] = useState('approve');

  // Reusable styles
  const containerStyles = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    background: '#fff',
    padding: '0 2rem',
    '@media (max-width: 768px)': {
      padding: '0 1rem'
    }
  };

  const cardStyles = (isActive) => ({
    background: isActive ? '#f0f6ff' : '#fff',
    border: `2px solid ${isActive ? '#0066cc' : '#e0e0e0'}`,
    borderRadius: '1rem',
    padding: '1.5rem',
    marginBottom: '1rem',
    width: '100%',
    maxWidth: '28rem',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    boxShadow: isActive ? '0 4px 12px rgba(0,102,204,0.1)' : 'none',
    ':hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 12px rgba(0,102,204,0.15)'
    }
  });

  const badgeStyles = {
    background: '#0066cc',
    color: '#fff',
    borderRadius: '0.5rem',
    fontSize: '0.875rem',
    padding: '0.25rem 0.75rem',
    marginLeft: '0.75rem',
    fontWeight: 500
  };

  return (
    <div style={containerStyles}>
      {/* Top Bar */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '2rem 0',
        borderBottom: '1px solid #e0e0e0',
        marginBottom: '2rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <img 
            src="/logo.png" 
            alt="Logo" 
            style={{ height: '2.25rem', width: 'auto' }} 
          />
          <span style={{ 
            color: '#0066cc',
            fontWeight: 500,
            cursor: 'pointer',
            fontSize: '1rem',
            ':hover': { textDecoration: 'underline' }
          }}>
            Questions?
          </span>
        </div>
        <button
          style={{
            border: '1px solid #333',
            borderRadius: '2rem',
            padding: '0.75rem 1.5rem',
            fontWeight: 500,
            background: '#fff',
            fontSize: '0.875rem',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            ':hover': {
              background: '#f5f5f5'
            }
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
        flexDirection: 'column',
        padding: '2rem 0'
      }}>
        <h2 style={{ 
          fontSize: '1.5rem',
          color: '#333',
          marginBottom: '1rem',
          textAlign: 'center'
        }}>
          Pick your booking settings
        </h2>
        <p style={{ 
          fontSize: '1rem',
          color: '#666',
          marginBottom: '2rem',
          textAlign: 'center',
          maxWidth: '36rem',
          lineHeight: 1.5
        }}>
          You can change this at any time. {' '}
          <a href="#help" style={{ 
            color: '#0066cc',
            textDecoration: 'none',
            ':hover': { textDecoration: 'underline' }
          }}>
            Learn more
          </a>
        </p>

        {/* Booking Options */}
        <div style={{ width: '100%', maxWidth: '28rem', margin: '0 auto' }}>
          <div 
            style={cardStyles(bookingType === 'approve')}
            onClick={() => setBookingType('approve')}
          >
            <div style={{ 
              display: 'flex',
              alignItems: 'center',
              marginBottom: '0.5rem'
            }}>
              <h3 style={{ 
                fontWeight: 600,
                fontSize: '1.125rem',
                color: '#333'
              }}>
                Approve your first 5 bookings
              </h3>
              <span style={badgeStyles}>
                Recommended
              </span>
            </div>
            <p style={{ 
              color: '#666',
              fontSize: '0.875rem',
              lineHeight: 1.5
            }}>
              Start by reviewing reservation requests, then switch to Instant Book 
              so guests can book automatically.
            </p>
          </div>

          <div 
            style={cardStyles(bookingType === 'instant')}
            onClick={() => setBookingType('instant')}
          >
            <h3 style={{ 
              fontWeight: 600,
              fontSize: '1.125rem',
              color: '#333',
              marginBottom: '0.5rem'
            }}>
              Use Instant Book
            </h3>
            <p style={{ 
              color: '#666',
              fontSize: '0.875rem',
              lineHeight: 1.5
            }}>
              Let guests book automatically.
            </p>
          </div>
        </div>

        {/* Progress */}
        <div style={{ 
          fontSize: '0.875rem',
          color: '#999',
          marginTop: '3rem',
          textAlign: 'center'
        }}>
          Your progress: step 12 out of 18
        </div>
      </div>

      {/* Bottom Navigation */}
      <div style={{
        borderTop: '1px solid #e0e0e0',
        padding: '2rem 0',
        marginTop: '2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <button
          style={{
            background: 'none',
            border: 'none',
            color: '#333',
            fontSize: '1rem',
            cursor: 'pointer',
            padding: '0.75rem 1.5rem',
            borderRadius: '0.5rem',
            ':hover': {
              background: '#f5f5f5'
            }
          }}
          onClick={() => navigate(-1)}
        >
          Back
        </button>
        <button
          style={{
            background: '#333',
            color: '#fff',
            border: 'none',
            borderRadius: '0.5rem',
            fontSize: '1rem',
            fontWeight: 500,
            padding: '0.75rem 2rem',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            ':hover': {
              background: '#444',
              transform: 'translateY(-1px)'
            }
          }}
          onClick={() => navigate('/step-9')}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Step8;