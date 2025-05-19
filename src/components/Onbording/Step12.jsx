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
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
  background-size: 400% 400%;
  animation: ${gradientAnimation} 15s ease infinite;
  padding: 2rem;
`;

const GlassCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  border-radius: 2rem;
  padding: 3rem;
  width: 100%;
  max-width: 800px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #7dd3fc;
  margin-bottom: 2rem;
  text-align: center;
  text-shadow: 0 0 15px rgba(125, 211, 252, 0.3);
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -1rem;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: linear-gradient(90deg, transparent, #7dd3fc, transparent);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(125, 211, 252, 0.3);
  border-radius: 1.5rem;
  padding: 1.5rem;
  color: #fff;
  font-size: 1.1rem;
  line-height: 1.6;
  transition: all 0.3s ease;
  resize: vertical;
  min-height: 150px;

  &:focus {
    outline: none;
    border-color: #7dd3fc;
    box-shadow: 0 0 25px rgba(125, 211, 252, 0.2);
    background: rgba(0, 0, 0, 0.5);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
    font-style: italic;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  background: linear-gradient(135deg, #7dd3fc, #38bdf8);
  color: #0f172a;
  border: none;
  padding: 1.5rem;
  border-radius: 1.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  margin-top: 2rem;

  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg, 
      transparent, 
      rgba(255, 255, 255, 0.2), 
      transparent);
    transform: rotate(45deg);
    transition: all 0.5s ease;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(125, 211, 252, 0.4);

    &::after {
      left: 150%;
    }
  }
`;

function Step12() {
  const navigate = useNavigate();

  const handleFinish = () => {
    navigate('/');
    // Trigger confetti animation here if desired
  };

  return (
    <Container>
      <GlassCard>
        <Title>Final Horizon</Title>
        
        <div style={{ marginBottom: '2rem' }}>
          <label style={{
            display: 'block',
            color: '#7dd3fc',
            fontSize: '1.1rem',
            marginBottom: '1rem',
            paddingLeft: '1.5rem',
            position: 'relative'
          }}>
            <span style={{
              position: 'absolute',
              left: 0,
              top: '2px',
              fontSize: '1.5rem'
            }}>✦</span>
            What legacy will you forge in your first 90 dawns?
          </label>
          <TextArea
            placeholder="Carve your ambitions into the stars...\n• Share your celestial vision\n• Map your cosmic objectives\n• Declare your stellar milestones"
          />
        </div>

        <SubmitButton onClick={handleFinish}>
          Launch into the Future 🚀
        </SubmitButton>
      </GlassCard>
    </Container>
  );
}

export default Step12;