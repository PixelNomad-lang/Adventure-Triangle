import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Container = styled.div`
  min-height: 100vh;
  background: #f8f9fa;
  font-family: 'Inter', sans-serif;
  position: relative;
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
  z-index: 100;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const ProgressBar = styled.div`
  height: 4px;
  background: #e9ecef;
  border-radius: 2px;
  position: relative;
  margin: 2rem 0;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: ${props => props.progress}%;
    background: #00b894;
    transition: width 0.5s ease;
  }
`;

const AdventureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 2rem;
`;

const AdventureCard = styled.button`
  padding: 1.5rem;
  border: 2px solid ${props => props.selected ? '#00b894' : '#e9ecef'};
  background: ${props => props.selected ? '#f0faf8' : 'white'};
  border-radius: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0,184,148,0.1);
  }

  span {
    font-weight: 600;
    color: ${props => props.selected ? '#00b894' : '#495057'};
  }
`;

const FormContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 2rem;
  animation: ${fadeIn} 0.4s ease-out;
`;

const FloatingLabel = styled.div`
  position: relative;
  margin: 2rem 0;

  textarea {
    width: 100%;
    padding: 1.5rem;
    border: 2px solid #e9ecef;
    border-radius: 1rem;
    font-size: 1rem;
    transition: all 0.2s ease;
    min-height: 150px;

    &:focus {
      border-color: #00b894;
      outline: none;
    }
  }

  label {
    position: absolute;
    top: -0.8rem;
    left: 1rem;
    background: white;
    padding: 0 0.5rem;
    color: #6c757d;
    font-size: 0.9rem;
  }
`;

const MapContainer = styled.div`
  height: 400px;
  border-radius: 1.5rem;
  overflow: hidden;
  background: linear-gradient(145deg, #00b894 0%, #007bff 100%);
  position: relative;
  margin: 2rem 0;

  &::after {
    content: 'Map Integration';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 1.5rem;
    opacity: 0.8;
  }
`;

const NumberInput = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 2rem 0;

  button {
    width: 40px;
    height: 40px;
    border: 2px solid #00b894;
    background: white;
    border-radius: 50%;
    font-size: 1.2rem;
    color: #00b894;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      background: #00b894;
      color: white;
    }
  }

  span {
    font-size: 1.5rem;
    min-width: 50px;
    text-align: center;
    font-weight: 600;
    color: #212529;
  }
`;

const NavigationFooter = styled.footer`
  position: sticky;
  bottom: 0;
  background: white;
  border-top: 2px solid #e9ecef;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`;

const PrimaryButton = styled.button`
  background: #00b894;
  color: white;
  border: none;
  padding: 1rem 2.5rem;
  border-radius: 2rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: #00997a;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0,184,148,0.3);
  }
`;

const adventures = [
  'Trekking', 'Hiking', 'Camping', 'Rafting', 'Bungee Jumping',
  'Paragliding', 'Rock Climbing', 'Scuba Diving', 'Surfing', 'Kayaking',
  'Skydiving', 'Mountain Biking', 'Zip Lining', 'Caving', 'Horse Riding',
  'Snowboarding', 'Skiing', 'Safari', 'Hot Air Balloon', 'Fishing'
];

function Step2() {
  const [selected, setSelected] = useState([]);
  const [step, setStep] = useState(1);
  const [businessAnswer, setBusinessAnswer] = useState('');
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
    if (step < 4) setStep(step + 1);
    else navigate('/step-3');
  };

  const getProgress = () => {
    return (step / 4) * 100;
  };

  return (
    <Container>
      <Header>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M16 2L30 26H2L16 2Z" fill="#00b894"/>
          </svg>
          <span style={{ fontWeight: 600, fontSize: '1.2rem' }}>Adventure Setup</span>
        </div>
        <ProgressBar progress={getProgress()}/>
      </Header>

      {step === 1 && (
        <FormContainer>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Select Your Adventure Types</h2>
          <p style={{ color: '#6c757d', marginBottom: '2rem' }}>
            Choose all that apply to your location
          </p>
          <AdventureGrid>
            {adventures.map(adventure => (
              <AdventureCard
                key={adventure}
                onClick={() => handleSelect(adventure)}
                selected={selected.includes(adventure)}
              >
                <span>{adventure}</span>
              </AdventureCard>
            ))}
          </AdventureGrid>
        </FormContainer>
      )}

      {step === 2 && (
        <FormContainer>
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Describe Your Adventure Business</h2>
          <FloatingLabel>
            <label>Business Description</label>
            <textarea
              value={businessAnswer}
              onChange={e => setBusinessAnswer(e.target.value)}
              placeholder="Tell us about your unique adventure offerings..."
            />
          </FloatingLabel>
        </FormContainer>
      )}

      {step === 3 && (
        <FormContainer>
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Location Details</h2>
          <MapContainer />
          <input
            type="text"
            value={locationInput}
            onChange={e => setLocationInput(e.target.value)}
            placeholder="Enter coordinates (lat, lng)..."
            style={{
              width: '100%',
              padding: '1rem',
              border: '2px solid #e9ecef',
              borderRadius: '1rem',
              marginBottom: '2rem'
            }}
          />
        </FormContainer>
      )}

      {step === 4 && (
        <FormContainer>
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Final Details</h2>
          <div style={{ marginBottom: '2rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Adventure Type</label>
            <input
              value={type}
              onChange={e => setType(e.target.value)}
              placeholder="e.g. Extreme Sports"
              style={{
                width: '100%',
                padding: '1rem',
                border: '2px solid #e9ecef',
                borderRadius: '1rem'
              }}
            />
          </div>

          <NumberInput>
            <span>Staff Members:</span>
            <button onClick={() => setStaff(Math.max(1, staff - 1))}>-</button>
            <span>{staff}</span>
            <button onClick={() => setStaff(staff + 1)}>+</button>
          </NumberInput>

          <NumberInput>
            <span>Security Personnel:</span>
            <button onClick={() => setSecurity(Math.max(1, security - 1))}>-</button>
            <span>{security}</span>
            <button onClick={() => setSecurity(security + 1)}>+</button>
          </NumberInput>

          <NumberInput>
            <span>Daily Limit:</span>
            <button onClick={() => setLimit(Math.max(1, limit - 1))}>-</button>
            <span>{limit}</span>
            <button onClick={() => setLimit(limit + 1)}>+</button>
          </NumberInput>
        </FormContainer>
      )}

      <NavigationFooter>
        <button
          onClick={() => step > 1 ? setStep(step - 1) : null}
          style={{
            padding: '1rem 2rem',
            border: 'none',
            background: 'none',
            color: step > 1 ? '#00b894' : '#ccc',
            cursor: step > 1 ? 'pointer' : 'default'
          }}
        >
          ← Previous
        </button>
        <PrimaryButton onClick={handleNext}>
          {step === 4 ? 'Complete Setup' : 'Next Step'}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
          </svg>
        </PrimaryButton>
      </NavigationFooter>
    </Container>
  );
}

export default Step2;