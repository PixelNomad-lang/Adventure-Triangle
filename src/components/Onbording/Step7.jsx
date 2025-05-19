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
  max-width: 1440px;
  margin: 0 auto;
`;

const ProgressContainer = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  margin: 2rem auto;
`;

const ProgressCircle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: conic-gradient(
    #00b894 ${props => props.progress}%,
    #e2e8f0 ${props => props.progress}% 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    width: 84%;
    height: 84%;
    background: white;
    border-radius: 50%;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }
`;

const ProgressText = styled.div`
  position: relative;
  z-index: 1;
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(45deg, #00b894, #007bff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ContentWrapper = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
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
  background: linear-gradient(45deg, #00b894, #007bff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1.25rem;
  color: #475569;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const Checklist = styled.div`
  display: grid;
  gap: 1rem;
  margin: 2rem 0;
`;

const ChecklistItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }

  svg {
    color: #00b894;
    flex-shrink: 0;
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
    flex-direction: column;
    gap: 1rem;
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

function Step7() {
  const navigate = useNavigate();
  const progress = (11 / 18) * 100;

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
        <ContentWrapper>
          <StepIndicator>Step 11 of 18</StepIndicator>
          <Title>Finalize Your Adventure</Title>
          <Description>
            Complete these final steps to publish your adventure and start welcoming guests
          </Description>

          <ProgressContainer>
            <ProgressCircle progress={progress}>
              <ProgressText>{Math.round(progress)}%</ProgressText>
            </ProgressCircle>
          </ProgressContainer>

          <Checklist>
            <ChecklistItem>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
              <span>Adventure details completed</span>
            </ChecklistItem>
            <ChecklistItem>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
              <span>Location verified</span>
            </ChecklistItem>
            <ChecklistItem>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V8h2v4z"/>
              </svg>
              <span>Pricing setup required</span>
            </ChecklistItem>
            <ChecklistItem>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V8h2v4z"/>
              </svg>
              <span>Safety verification pending</span>
            </ChecklistItem>
          </Checklist>
        </ContentWrapper>
      </MainContent>

      <NavigationFooter>
        <NavButton className="back" onClick={() => navigate(-1)}>
          ← Back
        </NavButton>
        <NavButton className="next" onClick={() => navigate('/step-8')}>
          Continue →
        </NavButton>
      </NavigationFooter>
    </Container>
  );
}

export default Step7;