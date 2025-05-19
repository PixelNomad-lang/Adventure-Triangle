import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Step4() {
  const [step, setStep] = useState(1); // 1: main cover, 2: gallery, 3: title
  const [coverImage, setCoverImage] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);
  const [title, setTitle] = useState('');
  const fileInputRef = useRef(null);
  const galleryInputRef = useRef(null);
  const navigate = useNavigate();

  // Handle main cover image upload
  const handleCoverChange = (e) => {
    const file = e.target.files[0];
    if (file) setCoverImage(file);
  };

  // Handle gallery images upload (max 4)
  const handleGalleryChange = (e) => {
    const files = Array.from(e.target.files);
    setGalleryImages(prev => [...prev, ...files].slice(0, 4));
  };

  const handleRemoveGallery = (index) => {
    setGalleryImages(galleryImages.filter((_, i) => i !== index));
  };

  // Main render
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: '#fff'
    }}>
      {/* Top Bar */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '24px 40px 0 40px'
      }}>
        <img src="/logo.png" alt="Logo" style={{ height: 36 }} />
        <button
          style={{
            border: '1px solid #222',
            borderRadius: 24,
            padding: '10px 28px',
            fontWeight: 600,
            background: '#fff',
            fontSize: 16,
            cursor: 'pointer'
          }}
        >
          Save & exit
        </button>
      </div>

      {/* Main Content */}
      <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }}>
        {step === 1 && (
          <>
            <div style={{ fontSize: 18, color: '#555', marginBottom: 16 }}>Step 4</div>
            <div style={{ fontSize: 48, fontWeight: 700, lineHeight: 1.1, marginBottom: 24 }}>
              Upload your main cover image
            </div>
            <div style={{ fontSize: 20, color: '#444', marginBottom: 32, textAlign: 'center' }}>
              Add a main cover photo to showcase your adventure.
            </div>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={handleCoverChange}
            />
            <button
              onClick={() => fileInputRef.current.click()}
              style={{
                padding: '12px 32px',
                borderRadius: 24,
                background: '#007bff',
                color: '#fff',
                border: 'none',
                fontSize: 16,
                fontWeight: 'bold',
                cursor: 'pointer',
                marginBottom: 24
              }}
            >
              {coverImage ? "Change Main Cover Image" : "Select Main Cover Image"}
            </button>
            {coverImage && (
              <div style={{ marginBottom: 32 }}>
                <img
                  src={URL.createObjectURL(coverImage)}
                  alt="cover"
                  style={{ width: 200, height: 200, objectFit: 'cover', borderRadius: 12, border: '1px solid #ccc' }}
                />
              </div>
            )}
          </>
        )}

        {step === 2 && (
          <>
            <div style={{ fontSize: 18, color: '#555', marginBottom: 16 }}>Step 4</div>
            <div style={{ fontSize: 48, fontWeight: 700, lineHeight: 1.1, marginBottom: 24 }}>
              Add 4 more cover photos
            </div>
            <div style={{ fontSize: 20, color: '#444', marginBottom: 32, textAlign: 'center' }}>
              Add 4 more photos to give guests a better idea of your adventure.
            </div>
            <input
              type="file"
              multiple
              accept="image/*"
              ref={galleryInputRef}
              style={{ display: 'none' }}
              onChange={handleGalleryChange}
              disabled={galleryImages.length >= 4}
            />
            <button
              onClick={() => galleryInputRef.current.click()}
              style={{
                padding: '12px 32px',
                borderRadius: 24,
                background: '#007bff',
                color: '#fff',
                border: 'none',
                fontSize: 16,
                fontWeight: 'bold',
                cursor: galleryImages.length >= 4 ? 'not-allowed' : 'pointer',
                marginBottom: 24
              }}
              disabled={galleryImages.length >= 4}
            >
              {galleryImages.length >= 4 ? "Maximum 4 images" : "Select Images"}
            </button>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 32 }}>
              {galleryImages.map((img, idx) => (
                <div key={idx} style={{ position: 'relative' }}>
                  <img
                    src={URL.createObjectURL(img)}
                    alt="gallery"
                    style={{ width: 120, height: 120, objectFit: 'cover', borderRadius: 12, border: '1px solid #ccc' }}
                  />
                  <button
                    onClick={() => handleRemoveGallery(idx)}
                    style={{
                      position: 'absolute',
                      top: 4,
                      right: 4,
                      background: '#fff',
                      border: 'none',
                      borderRadius: '50%',
                      width: 24,
                      height: 24,
                      cursor: 'pointer',
                      fontWeight: 'bold',
                      color: '#d00'
                    }}
                    title="Remove"
                  >×</button>
                </div>
              ))}
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <div style={{ fontSize: 18, color: '#555', marginBottom: 16 }}>Step 4</div>
            <div style={{ fontSize: 48, fontWeight: 700, lineHeight: 1.1, marginBottom: 24 }}>
              Give your adventure a title
            </div>
            <div style={{ fontSize: 20, color: '#444', marginBottom: 32, textAlign: 'center' }}>
              Create a catchy title for your adventure listing.
            </div>
            <input
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="e.g. Himalayan Sunrise Trek"
              style={{
                width: 400,
                padding: '12px 16px',
                fontSize: 20,
                borderRadius: 8,
                border: '1px solid #ccc',
                marginBottom: 32
              }}
            />
          </>
        )}
      </div>

      {/* Bottom Navigation */}
      <div style={{
        borderTop: '4px solid #222',
        marginTop: 32,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '24px 80px'
      }}>
        <button
          style={{
            background: 'none',
            border: 'none',
            color: '#222',
            fontSize: 18,
            textDecoration: 'underline',
            cursor: 'pointer'
          }}
          onClick={() => {
            if (step === 3) setStep(2);
            else if (step === 2) setStep(1);
            else navigate(-1);
          }}
        >
          Back
        </button>
        {step === 1 && (
          <button
            style={{
              background: '#222',
              color: '#fff',
              border: 'none',
              borderRadius: 12,
              fontSize: 20,
              fontWeight: 600,
              padding: '12px 48px',
              cursor: 'pointer'
            }}
            onClick={() => setStep(2)}
            disabled={!coverImage}
          >
            Next
          </button>
        )}
        {step === 2 && (
          <button
            style={{
              background: '#222',
              color: '#fff',
              border: 'none',
              borderRadius: 12,
              fontSize: 20,
              fontWeight: 600,
              padding: '12px 48px',
              cursor: 'pointer'
            }}
            onClick={() => setStep(3)}
            disabled={galleryImages.length < 4}
          >
            Next
          </button>
        )}
        {step === 3 && (
          <button
            style={{
              background: '#222',
              color: '#fff',
              border: 'none',
              borderRadius: 12,
              fontSize: 20,
              fontWeight: 600,
              padding: '12px 48px',
              cursor: 'pointer'
            }}
            onClick={() => navigate('/step-5')}
            disabled={title.trim().length === 0}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default Step4;