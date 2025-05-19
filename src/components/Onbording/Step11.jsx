import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
  padding: 2rem;
  background: linear-gradient(135deg, #0f172a, #1e293b);
  font-family: 'Inter', sans-serif;
`;

const StyledCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  border-radius: 1.5rem;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  margin-bottom: 2rem;
`;

const SectionTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: #7dd3fc;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-left: 1rem;
  border-left: 4px solid #7dd3fc;
`;

const QuestionButton = styled(motion.button)`
  width: 100%;
  text-align: left;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  color: #f8fafc;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    background: rgba(125, 211, 252, 0.1);
    border-color: #7dd3fc;
    transform: translateX(10px);
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ActionButton = styled(motion.button)`
  padding: 1.25rem 2.5rem;
  border-radius: 0.75rem;
  font-weight: 600;
  font-size: 1.1rem;
  border: none;
  cursor: pointer;
  background: linear-gradient(135deg, #7dd3fc, #38bdf8);
  color: #0f172a;
  position: relative;
  overflow: hidden;
  
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
    &::after {
      left: 150%;
    }
  }
`;

const questions = [
  // ... (same questions array as before)
];

function Step11() {
  const navigate = useNavigate();

  return (
    <Container>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
            Adventure Collaboration Portal
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Explore partnership dimensions and unlock extraordinary hosting opportunities
          </p>
        </div>

        <GridContainer>
          {questions.map((section, index) => (
            <StyledCard
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <SectionTitle>
                <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  {section.title.includes('🏡') && '🏡'}
                  {section.title.includes('🤝') && '🤝'}
                  {section.title.includes('🚀') && '🚀'}
                  {section.title.includes('🌍') && '🌍'}
                </div>
                {section.title.replace(/[^a-zA-Z ]/g, '')}
              </SectionTitle>
              
              <div className="space-y-3">
                {section.questions.map((question, qIndex) => (
                  <QuestionButton
                    key={qIndex}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {question}
                  </QuestionButton>
                ))}
              </div>
            </StyledCard>
          ))}
        </GridContainer>

        <div className="flex justify-center gap-4 mt-16">
          <ActionButton
            onClick={() => navigate('/step-12')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Continue Expedition →
          </ActionButton>
          <ActionButton
            style={{ background: 'linear-gradient(135deg, #94a3b8, #64748b)' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Trailblazers
          </ActionButton>
        </div>
      </motion.div>
    </Container>
  );
}

export default Step11;