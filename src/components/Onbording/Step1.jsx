import React from 'react';
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
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const SaveExitButton = styled.button`
  border: 2px solid #e9ecef;
  border-radius: 2rem;
  padding: 0.75rem 1.5rem;
  background: white;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: #00b894;
    color: #00b894;
  }
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  max-width: 1400px;
  margin: 4rem auto 0;
  padding: 0 2rem;
  animation: ${fadeIn} 0.6s ease-out;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    margin-top: 2rem;
    gap: 2rem;
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const TextContent = styled.div`
  max-width: 600px;
  padding-right: 2rem;

  @media (max-width: 1024px) {
    padding-right: 0;
    max-width: 100%;
  }
`;

const StepIndicator = styled.div`
  color: #6c757d;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  color: #212529;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1.125rem;
  color: #495057;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const ImageContainer = styled.div`
  position: relative;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 12px 24px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 1024px) {
    max-width: 500px;
    margin: 0 auto;
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

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const NavigationButton = styled.button`
  border: none;
  padding: 0.875rem 2rem;
  border-radius: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &.next {
    background: #00b894;
    color: white;
    
    &:hover {
      background: #00997a;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(0,184,148,0.3);
    }
  }

  &.back {
    background: none;
    color: #6c757d;
    
    &:hover {
      color: #00b894;
      text-decoration: underline;
    }
  }
`;

function Step1() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/step-2');
  }

  return (
    <Container>
      <Header>
        <LogoContainer>
          <svg width="40" height="40" viewBox="0 0 40 40">
            <polygon points="20,4 36,36 4,36" fill="#00b894" />
          </svg>
          <span style={{ fontWeight: 600, color: '#212529' }}>AdventureHost</span>
        </LogoContainer>
        <SaveExitButton>
          Save & exit
        </SaveExitButton>
      </Header>

      <ContentWrapper>
        <TextContent>
          <StepIndicator>Step 1 of 12</StepIndicator>
          <Title>Tell us about your adventure spot</Title>
          <Description>
            In this step, we'll ask you about your adventure location type, booking preferences, 
            location details, and maximum capacity. Share your unique space with adventure 
            enthusiasts worldwide.
          </Description>
        </TextContent>

        <ImageContainer>
          <img
            src="https://cdn.pixabay.com/photo/2017/01/31/13/14/mountains-2028294_1280.png"
            alt="Adventure location preview"
            style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
          />
        </ImageContainer>
      </ContentWrapper>

      <NavigationFooter>
        <NavigationButton className="back">
          ← Back
        </NavigationButton>
        <NavigationButton 
          onClick={handleNext}
          className="next"
        >
          Next →
        </NavigationButton>
      </NavigationFooter>
    </Container>
  );
}

export default Step1;