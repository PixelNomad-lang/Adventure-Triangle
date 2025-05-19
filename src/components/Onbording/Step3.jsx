import React from 'react';
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

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const MainContent = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 4rem;
  max-width: 1440px;
  margin: 0 auto;
  padding: 4rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    padding: 2rem;
    gap: 2rem;
  }
`;

const TextContent = styled.div`
  max-width: 600px;
  animation: fadeIn 0.6s ease-out;

  @media (max-width: 1024px) {
    order: 1;
    text-align: center;
    max-width: 100%;
  }
`;

const IllustrationContainer = styled.div`
  position: relative;
  height: 500px;
  border-radius: 2rem;
  overflow: hidden;
  background: linear-gradient(135deg, #00b894, #007bff);
  animation: ${gradientAnimation} 15s ease infinite;
  box-shadow: 0 25px 50px -12px rgba(0,0,0,0.15);

  @media (max-width: 1024px) {
    height: 400px;
  }
`;

const StepIndicator = styled.div`
  font-size: 1rem;
  color: #64748b;
  font-weight: 500;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 2rem;
  color: #0f172a;
  background: linear-gradient(45deg, #00b894, #007bff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.25rem;
  color: #475569;
  line-height: 1.6;
  margin-bottom: 2rem;
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

const NavigationButton = styled.button`
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

function Step3() {
  const navigate = useNavigate();

  return (
    <Container>
      <Header>
        <svg width="40" height="40" viewBox="0 0 40 40">
          <path d="M20 4L36 36H4L20 4Z" fill="#00b894"/>
        </svg>
        <button
          style={{
            border: '2px solid #e2e8f0',
            borderRadius: '2rem',
            padding: '0.75rem 1.5rem',
            fontWeight: 500,
            background: 'white',
            transition: 'all 0.2s ease',
            cursor: 'pointer',
            color: '#64748b'
          }}
        >
          Save & exit
        </button>
      </Header>

      <MainContent>
        <TextContent>
          <StepIndicator>Step 3 of 12</StepIndicator>
          <Title>Pinpoint Your Adventure Location</Title>
          <Description>
            Select your adventure's precise location on our interactive map. 
            Accurate coordinates ensure adventurers can find you easily and 
            receive perfect directions to your unique experience.
          </Description>
        </TextContent>

        <IllustrationContainer>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            color: 'white'
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              background: 'white',
              borderRadius: '50%',
              margin: '0 auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              animation: 'pulse 2s infinite'
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#00b894">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <p style={{ marginTop: '1rem', fontWeight: 500 }}>Interactive Map Preview</p>
          </div>
        </IllustrationContainer>
      </MainContent>

      <NavigationFooter>
        <NavigationButton className="back" onClick={() => navigate(-1)}>
          ← Back
        </NavigationButton>
        <NavigationButton className="next" onClick={() => navigate('/step-4')}>
          Next →
        </NavigationButton>
      </NavigationFooter>
    </Container>
  );
}

export default Step3;