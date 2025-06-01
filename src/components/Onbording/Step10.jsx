import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const starPulse = keyframes`
  0% { opacity: 0.2; }
  50% { opacity: 1; }
  100% { opacity: 0.2; }
`;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
  font-family: 'Space Mono', monospace;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 300%;
    height: 300%;
    background: url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='50' cy='50' r='1' fill='%23ffffff'/%3E%3C/svg%3E");
    animation: ${starPulse} 3s infinite;
    opacity: 0.3;
  }
`;

const CosmicForm = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  border-radius: 2rem;
  padding: 3rem;
  width: 100%;
  max-width: 800px;
  margin: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 2rem;
    margin: 1rem;
  }
`;

const FormTitle = styled.h2`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 2rem;
  text-align: center;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -1rem;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 2px;
    background: linear-gradient(90deg, transparent, #7f7fd5, transparent);
  }
`;

const QuestionContainer = styled.div`
  margin-bottom: 2.5rem;
  position: relative;
`;

const QuestionLabel = styled.label`
  display: block;
  font-size: 1.1rem;
  color: #7f7fd5;
  margin-bottom: 1rem;
  padding-left: 1.5rem;
  position: relative;

  &::before {
    content: '✦';
    position: absolute;
    left: 0;
    top: 0;
    color: #7f7fd5;
    font-size: 1.2rem;
  }
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(127, 127, 213, 0.3);
  border-radius: 1rem;
  padding: 1.5rem;
  color: #fff;
  font-size: 1rem;
  line-height: 1.6;
  transition: all 0.3s ease;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #7f7fd5;
    box-shadow: 0 0 15px rgba(127, 127, 213, 0.3);
    background: rgba(0, 0, 0, 0.5);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  background: linear-gradient(135deg, #7f7fd5, #86a8e7, #91eae4);
  color: #fff;
  border: none;
  padding: 1.5rem;
  border-radius: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  overflow: hidden;

  &::before {
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
    box-shadow: 0 5px 15px rgba(127, 127, 213, 0.4);

    &::before {
      left: 150%;
    }
  }
`;

function Step10() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/step-11');
  };

  return (
    <Container>
      <CosmicForm>
        <FormTitle>Final Transmission</FormTitle>
        
        <QuestionContainer>
          <QuestionLabel>
            Are You  Provide  Any  Certificate ?
          </QuestionLabel>
          <StyledTextarea
            rows="3"
            placeholder="Channel your celestial inspiration..."
          />
        </QuestionContainer>

        <QuestionContainer>
          <QuestionLabel>
            What mysteries of the universe give you pause?
          </QuestionLabel>
          <StyledTextarea
            rows="3"
            placeholder="Reveal your cosmic concerns..."
          />
        </QuestionContainer>

        <QuestionContainer>
          <QuestionLabel>
            Message for your star-bound companions
          </QuestionLabel>
          <StyledTextarea
            rows="3"
            placeholder="Compose your interstellar missive..."
          />
        </QuestionContainer>

        <SubmitButton onClick={handleNext}>
          Initiate Launch Sequence
        </SubmitButton>
      </CosmicForm>
    </Container>
  );
}

export default Step10;