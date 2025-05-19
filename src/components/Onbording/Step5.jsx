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
  padding: 2rem 4rem;
  background: white;
  box-shadow: 0 2px 15px rgba(0,0,0,0.05);
  position: sticky;
  top: 0;
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  animation: ${fadeIn} 0.6s ease-out;
`;

const StepIndicator = styled.div`
  font-size: 0.875rem;
  color: #64748b;
  font-weight: 500;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: #0f172a;
  text-align: center;
  background: linear-gradient(45deg, #00b894, #007bff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Instruction = styled.p`
  font-size: 1.25rem;
  color: #475569;
  line-height: 1.6;
  margin-bottom: 2rem;
  text-align: center;
  max-width: 600px;
`;

const HighlightGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1.5rem;
  width: 100%;
  max-width: 800px;
  margin-bottom: 2rem;
`;

const HighlightButton = styled.button`
  padding: 1.25rem;
  border-radius: 1.5rem;
  border: 2px solid ${props => props.selected ? '#00b894' : '#e2e8f0'};
  background: ${props => props.selected ? '#f0fdfa' : 'white'};
  color: ${props => props.selected ? '#00b894' : '#475569'};
  font-weight: 600;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0,184,148,0.1);
  }

  &:disabled {
    opacity: 0.6;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, #00b89430, #007bff30);
    opacity: ${props => props.selected ? 0.1 : 0};
    transition: opacity 0.3s ease;
  }
`;

const NavigationFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 4rem;
  border-top: 2px solid #e2e8f0;
  background: white;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const NavButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2.5rem;
  border-radius: 2rem;
  font-weight: 600;
  transition: all 0.2s ease;
  cursor: pointer;

  &.next {
    background: linear-gradient(45deg, #00b894, #007bff);
    color: white;
    border: none;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0,184,148,0.3);
    }

    &:disabled {
      background: #cbd5e1;
      cursor: not-allowed;
    }
  }

  &.back {
    background: none;
    color: #64748b;
    border: none;
    
    &:hover {
      color: #00b894;
    }
  }
`;

const adventureHighlights = [
  'Thrilling Experience', 'Scenic Views', 'Beginner Friendly', 
  'Advanced Challenge', 'Wildlife Encounters', 'Eco Conscious',
  'Historical Sites', 'Night Adventure', 'Family Friendly',
  'Photography Hotspot', 'Water Activities', 'Mountain Trek'
];

function Step5() {
  const [selected, setSelected] = useState([]);
  const navigate = useNavigate();

  const handleSelect = (highlight) => {
    setSelected(prev => 
      prev.includes(highlight) 
        ? prev.filter(h => h !== highlight) 
        : prev.length < 2 ? [...prev, highlight] : prev
    );
  };

  return (
    <Container>
      <Header>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M20 4L36 36H4L20 4Z" fill="#00b894"/>
        </svg>
        <button
          style={{
            border: '2px solid #e2e8f0',
            borderRadius: '2rem',
            padding: '0.75rem 1.5rem',
            fontWeight: 500,
            background: 'white',
            color: '#64748b',
            cursor: 'pointer'
          }}
        >
          Save & exit
        </button>
      </Header>

      <MainContent>
        <StepIndicator>Step 5 of 12</StepIndicator>
        <Title>Craft Your Adventure Identity</Title>
        <Instruction>
          Select up to 2 defining characteristics that best represent your unique experience
        </Instruction>

        <HighlightGrid>
          {adventureHighlights.map((highlight) => {
            const isSelected = selected.includes(highlight);
            const isDisabled = !isSelected && selected.length >= 2;

            return (
              <HighlightButton
                key={highlight}
                onClick={() => handleSelect(highlight)}
                selected={isSelected}
                disabled={isDisabled}
              >
                {highlight}
              </HighlightButton>
            );
          })}
        </HighlightGrid>
      </MainContent>

      <NavigationFooter>
        <NavButton className="back" onClick={() => navigate(-1)}>
          ← Back
        </NavButton>
        <NavButton
          className="next"
          onClick={() => navigate('/step-6')}
          disabled={selected.length === 0}
        >
          Continue →
        </NavButton>
      </NavigationFooter>
    </Container>
  );
}

export default Step5;