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
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 4rem;
  max-width: 1440px;
  margin: 0 auto;
  padding: 4rem 2rem;
  animation: ${fadeIn} 0.6s ease-out;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    padding: 2rem;
  }
`;

const TextContent = styled.div`
  max-width: 600px;
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

const DescriptionEditor = styled.div`
  position: relative;
  background: white;
  border-radius: 1.5rem;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 12px rgba(0,0,0,0.1);
  }
`;

const AdventureTextarea = styled.textarea`
  width: 100%;
  min-height: 300px;
  padding: 1.5rem;
  border: 2px solid #e2e8f0;
  border-radius: 1rem;
  font-size: 1.125rem;
  line-height: 1.6;
  color: #475569;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #00b894;
    box-shadow: 0 0 0 3px rgba(0,184,148,0.2);
  }

  &::placeholder {
    color: #94a3b8;
  }
`;

const CharacterCounter = styled.div`
  text-align: right;
  color: ${props => props.over ? '#dc2626' : '#64748b'};
  font-size: 0.875rem;
  margin-top: 1rem;
`;

const InspirationSection = styled.div`
  background: linear-gradient(135deg, #00b89410, #007bff10);
  border-radius: 1.5rem;
  padding: 2rem;
  margin-top: 2rem;
`;

const InspirationTitle = styled.h3`
  font-size: 1.25rem;
  color: #0f172a;
  margin-bottom: 1rem;
`;

const InspirationList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const InspirationItem = styled.li`
  padding: 0.5rem 0;
  color: #475569;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '•';
    color: #00b894;
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

function Step6() {
  const [description, setDescription] = useState('');
  const navigate = useNavigate();
  const charLimit = 2000;

  const handleDescriptionChange = (e) => {
    if (e.target.value.length <= charLimit) {
      setDescription(e.target.value);
    }
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
        <TextContent>
          <StepIndicator>Step 6 of 12</StepIndicator>
          <Title>Craft Your Adventure Story</Title>
          
          <DescriptionEditor>
            <AdventureTextarea
              value={description}
              onChange={handleDescriptionChange}
              placeholder="Describe the essence of your adventure... 
• What unique experiences await guests?
• What makes your location special?
• Any hidden gems or local secrets?"
            />
            <CharacterCounter over={description.length > charLimit}>
              {description.length}/{charLimit}
            </CharacterCounter>
          </DescriptionEditor>

          <InspirationSection>
            <InspirationTitle>Writing Tips</InspirationTitle>
            <InspirationList>
              <InspirationItem>Highlight unique terrain features</InspirationItem>
              <InspirationItem>Mention wildlife encounters</InspirationItem>
              <InspirationItem>Describe sunrise/sunset views</InspirationItem>
              <InspirationItem>Include difficulty levels</InspirationItem>
              <InspirationItem>Note seasonal variations</InspirationItem>
            </InspirationList>
          </InspirationSection>
        </TextContent>

        <div style={{
          background: 'linear-gradient(135deg, #00b89430, #007bff30)',
          borderRadius: '1.5rem',
          padding: '2rem',
          height: '600px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <img 
            src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg" 
            alt="Writing inspiration" 
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '1rem'
            }}
          />
        </div>
      </MainContent>

      <NavigationFooter>
        <NavButton className="back" onClick={() => navigate(-1)}>
          ← Back
        </NavButton>
        <NavButton
          className="next"
          onClick={() => navigate('/step-7')}
          disabled={description.length < 100}
        >
          Continue →
        </NavButton>
      </NavigationFooter>
    </Container>
  );
}

export default Step6;