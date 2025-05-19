import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f8fafc;
  font-family: 'Inter', sans-serif;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  background: white;
  box-shadow: 0 2px 15px rgba(0,0,0,0.05);
  position: sticky;
  top: 0;
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 1rem;
  max-width: 800px;
  margin: 0 auto;
  animation: ${fadeIn} 0.4s ease-out;
`;

const BookingCard = styled.div`
  background: ${props => props.active ? '#f0f7ff' : 'white'};
  border: 2px solid ${props => props.active ? '#0066cc' : '#e5e7eb'};
  border-radius: 1.5rem;
  padding: 2rem;
  margin: 1rem 0;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${props => props.active 
    ? '0 10px 15px -3px rgba(0,102,204,0.1), 0 4px 6px -4px rgba(0,102,204,0.1)'
    : '0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)'};

  &:hover {
    transform: translateY(-2px);
    border-color: ${props => props.active ? '#0066cc' : '#c7d2fe'};
  }

  @media (max-width: 640px) {
    padding: 1.5rem;
  }
`;

const Badge = styled.span`
  background: linear-gradient(135deg, #0066cc, #004799);
  color: white;
  border-radius: 0.75rem;
  padding: 0.375rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  margin-left: 1rem;
  box-shadow: 0 2px 4px rgba(0,102,204,0.1);
`;

const ProgressBar = styled.div`
  width: 100%;
  max-width: 400px;
  height: 6px;
  background: #e5e7eb;
  border-radius: 3px;
  margin: 3rem 0;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: ${props => props.progress}%;
    background: linear-gradient(90deg, #0066cc, #004799);
    border-radius: 3px;
    transition: width 0.5s ease;
  }
`;

const NavigationFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  background: white;
  border-top: 1px solid #e5e7eb;
  margin-top: auto;
`;

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 0.875rem 2rem;
  border-radius: 0.75rem;
  font-weight: 500;
  transition: all 0.2s ease;
  cursor: pointer;
  font-size: 1rem;

  &.primary {
    background: linear-gradient(135deg, #0066cc, #004799);
    color: white;
    border: none;
    
    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 6px -1px rgba(0,102,204,0.2);
    }
  }

  &.secondary {
    background: none;
    color: #4b5563;
    border: 1px solid #e5e7eb;
    
    &:hover {
      background: #f8fafc;
      color: #0066cc;
    }
  }
`;

function Step8() {
  const navigate = useNavigate();
  const [bookingType, setBookingType] = useState('approve');
  const progress = (12 / 18) * 100;

  return (
    <Container>
      <Header>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M16 2L30 26H2L16 2Z" fill="#0066cc"/>
          </svg>
          <span style={{ fontWeight: 600, color: '#1e293b' }}>Adventure Setup</span>
        </div>
        <Button className="secondary">
          Save & Exit
        </Button>
      </Header>

      <MainContent>
        <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
          Configure Booking Preferences
        </h2>
        <p className="text-gray-600 mb-8 text-center max-w-xl">
          Choose how guests can book your adventure. You can always adjust these settings later.
        </p>

        <div className="w-full space-y-4">
          <BookingCard 
            active={bookingType === 'approve'}
            onClick={() => setBookingType('approve')}
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-gray-900">
                Approval-Based Bookings
              </h3>
              <Badge>Recommended</Badge>
            </div>
            <p className="text-gray-600 text-base leading-relaxed">
              Maintain full control by reviewing each request before confirming. 
              Ideal for new hosts wanting to manage initial bookings carefully.
            </p>
          </BookingCard>

          <BookingCard 
            active={bookingType === 'instant'}
            onClick={() => setBookingType('instant')}
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Instant Booking System
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Enable automatic confirmations for seamless bookings. 
              Best for established hosts with consistent availability.
            </p>
          </BookingCard>
        </div>

        <ProgressBar progress={progress} />
        <p className="text-sm text-gray-500 text-center">
          Progress: Step 12 of 18 • {Math.round(progress)}% Complete
        </p>
      </MainContent>

      <NavigationFooter>
        <Button 
          className="secondary" 
          onClick={() => navigate(-1)}
        >
          ← Back
        </Button>
        <Button 
          className="primary"
          onClick={() => navigate('/step-9')}
        >
          Continue →
        </Button>
      </NavigationFooter>
    </Container>
  );
}

export default Step8;