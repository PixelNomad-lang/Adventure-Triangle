import React, { useRef, useState } from 'react';
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

const UploadArea = styled.div`
  border: 2px dashed #cbd5e1;
  border-radius: 1.5rem;
  padding: 3rem;
  text-align: center;
  transition: all 0.3s ease;
  background: white;
  cursor: pointer;
  margin-bottom: 2rem;

  &:hover {
    border-color: #00b894;
    background: #f0fdfa;
    transform: translateY(-2px);
  }

  p {
    color: #64748b;
    margin-top: 1rem;
  }
`;

const ImagePreview = styled.div`
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);

  &:hover {
    transform: translateY(-4px);
  }

  img {
    width: 240px;
    height: 240px;
    object-fit: cover;
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1.5rem;
  width: 100%;
  max-width: 800px;
  margin-bottom: 2rem;
`;

const RemoveButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: rgba(255,255,255,0.9);
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #fff;
    transform: scale(1.1);
  }
`;

const TitleInput = styled.input`
  width: 100%;
  max-width: 600px;
  padding: 1.25rem;
  font-size: 1.25rem;
  border: 2px solid #cbd5e1;
  border-radius: 1rem;
  transition: all 0.3s ease;
  text-align: center;

  &:focus {
    outline: none;
    border-color: #00b894;
    box-shadow: 0 0 0 3px rgba(0,184,148,0.2);
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

function Step4() {
  const [step, setStep] = useState(1);
  const [coverImage, setCoverImage] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);
  const [title, setTitle] = useState('');
  const fileInputRef = useRef(null);
  const galleryInputRef = useRef(null);
  const navigate = useNavigate();

  const handleCoverChange = (e) => {
    const file = e.target.files[0];
    if (file) setCoverImage(file);
  };

  const handleGalleryChange = (e) => {
    const files = Array.from(e.target.files);
    setGalleryImages(prev => [...prev, ...files].slice(0, 4));
  };

  const handleRemoveGallery = (index) => {
    setGalleryImages(galleryImages.filter((_, i) => i !== index));
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
        {step === 1 && (
          <>
            <StepIndicator>Step 4 • Main Cover</StepIndicator>
            <Title>Showcase Your Adventure</Title>
            <Instruction>
              Upload a stunning cover image that represents your adventure's spirit.
              Recommended size: 2000x1200 pixels
            </Instruction>

            <UploadArea onClick={() => fileInputRef.current.click()}>
              {coverImage ? (
                <ImagePreview>
                  <img src={URL.createObjectURL(coverImage)} alt="Cover preview" />
                </ImagePreview>
              ) : (
                <>
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="#64748b">
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                  </svg>
                  <p>Click to upload main cover image</p>
                </>
              )}
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleCoverChange}
                style={{ display: 'none' }}
              />
            </UploadArea>
          </>
        )}

        {step === 2 && (
          <>
            <StepIndicator>Step 4 • Gallery</StepIndicator>
            <Title>Build Your Visual Story</Title>
            <Instruction>
              Add 4 high-quality photos showing different aspects of your adventure
            </Instruction>

            <GalleryGrid>
              {galleryImages.map((img, idx) => (
                <ImagePreview key={idx}>
                  <img src={URL.createObjectURL(img)} alt={`Gallery ${idx + 1}`} />
                  <RemoveButton onClick={() => handleRemoveGallery(idx)}>
                    ×
                  </RemoveButton>
                </ImagePreview>
              ))}
              {[...Array(4 - galleryImages.length)].map((_, idx) => (
                <UploadArea
                  key={idx}
                  onClick={() => galleryImages.length < 4 && galleryInputRef.current.click()}
                  style={{ minHeight: '160px' }}
                >
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="#64748b">
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                  </svg>
                </UploadArea>
              ))}
            </GalleryGrid>
            <input
              type="file"
              multiple
              accept="image/*"
              ref={galleryInputRef}
              onChange={handleGalleryChange}
              style={{ display: 'none' }}
            />
          </>
        )}

        {step === 3 && (
          <>
            <StepIndicator>Step 4 • Final Touch</StepIndicator>
            <Title>Craft Your Adventure Title</Title>
            <Instruction>
              Create an engaging title that captures your adventure's essence
              (Max 60 characters)
            </Instruction>

            <TitleInput
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value.slice(0, 60))}
              placeholder="e.g. 'Epic Mountain Sunrise Trek'"
            />
            <div style={{ color: '#64748b', marginTop: '1rem' }}>
              {title.length}/60 characters
            </div>
          </>
        )}
      </MainContent>

      <NavigationFooter>
        <NavButton
          className="back"
          onClick={() => {
            if (step === 3) setStep(2);
            else if (step === 2) setStep(1);
            else navigate(-1);
          }}
        >
          ← Back
        </NavButton>
        
        {step === 1 && (
          <NavButton
            className="next"
            onClick={() => setStep(2)}
            disabled={!coverImage}
          >
            Continue →
          </NavButton>
        )}

        {step === 2 && (
          <NavButton
            className="next"
            onClick={() => setStep(3)}
            disabled={galleryImages.length < 4}
          >
            Continue →
          </NavButton>
        )}

        {step === 3 && (
          <NavButton
            className="next"
            onClick={() => navigate('/step-5')}
            disabled={title.trim().length === 0}
          >
            Publish Adventure →
          </NavButton>
        )}
      </NavigationFooter>
    </Container>
  );
}

export default Step4;