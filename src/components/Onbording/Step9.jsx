import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #00b894, #007bff, #004799);
  background-size: 400% 400%;
  animation: ${gradientAnimation} 15s ease infinite;
  font-family: 'Inter', sans-serif;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
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
`;

const AdventureCard = styled.div`
  background: ${props => props.active ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.8)'};
  border: 2px solid ${props => props.active ? '#00b894' : 'transparent'};
  border-radius: 1.5rem;
  padding: 2rem;
  margin: 1rem 0;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(5px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 640px) {
    padding: 1.5rem;
  }
`;

const ProgressContainer = styled.div`
  width: 100%;
  max-width: 400px;
  height: 8px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  margin: 2rem 0;
  overflow: hidden;
`;

const ProgressBar = styled.div`
  width: ${props => (props.step/18)*100}%;
  height: 100%;
  background: #fff;
  border-radius: 4px;
  transition: width 0.5s ease;
`;

const NavigationFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  margin-top: auto;
`;

const NavButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 2rem;
  border-radius: 2rem;
  font-weight: 600;
  transition: all 0.2s ease;
  cursor: pointer;
  font-size: 1rem;
  background: ${props => props.primary ? 'linear-gradient(135deg, #00b894, #007bff)' : 'transparent'};
  color: ${props => props.primary ? '#fff' : '#2d3436'};
  border: ${props => !props.primary && '2px solid rgba(0, 0, 0, 0.1)'};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.primary && '0 5px 15px rgba(0,184,148,0.3)'};
    background: ${props => !props.primary && 'rgba(255, 255, 255, 0.8)'};
  }
`;

function Step9() {
  const navigate = useNavigate();
  const [welcomeType, setWelcomeType] = useState('any');
  const currentStep = 13;

  return (
    <Container>
      <Header>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M16 2L30 26H2L16 2Z" fill="#00b894"/>
          </svg>
          <span style={{ fontWeight: 600, color: '#2d3436' }}>Adventure Host</span>
        </div>
        <NavButton>Save & Exit</NavButton>
      </Header>

      <MainContent>
        <h2 style={{ 
          fontSize: '2rem',
          color: '#fff',
          textAlign: 'center',
          marginBottom: '1rem',
          textShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          Welcome Your First Adventurers
        </h2>
        
        <p style={{ 
          fontSize: '1.125rem',
          color: 'rgba(255,255,255,0.9)',
          textAlign: 'center',
          marginBottom: '2rem',
          maxWidth: '600px'
        }}>
          Choose who to welcome for your first adventure reservation. 
          <span style={{ 
            color: '#fff',
            textDecoration: 'underline',
            cursor: 'pointer',
            marginLeft: '0.5rem'
          }}>
            Learn more
          </span>
        </p>

        <div style={{ width: '100%', maxWidth: '600px' }}>
          <AdventureCard 
            active={welcomeType === 'any'}
            onClick={() => setWelcomeType('any')}
          >
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
              <div style={{
                width: '40px',
                height: '40px',
                background: '#00b894',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '1rem'
              }}>
                <span style={{ color: '#fff', fontSize: '1.5rem' }}>🌍</span>
              </div>
              <h3 style={{ 
                fontSize: '1.5rem',
                fontWeight: 600,
                color: '#2d3436'
              }}>
                Open Community
                <span style={{
                  background: 'linear-gradient(135deg, #00b894, #007bff)',
                  color: '#fff',
                  borderRadius: '0.75rem',
                  padding: '0.25rem 1rem',
                  fontSize: '0.875rem',
                  marginLeft: '1rem'
                }}>
                  Recommended
                </span>
              </h3>
            </div>
            <p style={{ 
              color: '#636e72',
              lineHeight: 1.6,
              fontSize: '1rem'
            }}>
              Fast-track your hosting journey by welcoming adventurers from our global community.
              Perfect for building quick momentum and diverse experiences.
            </p>
          </AdventureCard>

          <AdventureCard 
            active={welcomeType === 'experienced'}
            onClick={() => setWelcomeType('experienced')}
          >
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
              <div style={{
                width: '40px',
                height: '40px',
                background: '#007bff',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '1rem'
              }}>
                <span style={{ color: '#fff', fontSize: '1.5rem' }}>⭐</span>
              </div>
              <h3 style={{ 
                fontSize: '1.5rem',
                fontWeight: 600,
                color: '#2d3436'
              }}>
                Seasoned Adventurers
              </h3>
            </div>
            <p style={{ 
              color: '#636e72',
              lineHeight: 1.6,
              fontSize: '1rem'
            }}>
              Start with experienced explorers who can provide valuable feedback 
              and help refine your adventure offering.
            </p>
          </AdventureCard>
        </div>

        <ProgressContainer>
          <ProgressBar step={currentStep} />
        </ProgressContainer>
        
        <p style={{ 
          color: 'rgba(255,255,255,0.9)',
          fontSize: '0.875rem',
          textAlign: 'center'
        }}>
          Journey Progress: Step {currentStep} of 18 • {Math.round((currentStep/18)*100)}% Complete
        </p>
      </MainContent>

      <NavigationFooter>
        <NavButton onClick={() => navigate(-1)}>
          ← Back
        </NavButton>
        <NavButton primary onClick={() => navigate('/step-10')}>
          Continue →
        </NavButton>
      </NavigationFooter>
    </Container>
  );
}

export default Step9; 