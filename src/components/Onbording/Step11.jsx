import React from 'react';
import { Card, Button, Typography, Space, Divider } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Title, Text } = Typography;

function Step11() {
  const navigate = useNavigate();
  const handleNext = () => {
    navigate('/step-12');
  };
  const questions = [
    {
      title: "🏡 Hosting Opportunities",
      questions: [
        "How can I list my property as an adventure destination?",
        "What types of unique stays are you looking for?",
        "What are the requirements to become a host?",
        "How does the booking and payment process work?"
      ]
    },
    {
      title: "🤝 Partnership Programs",
      questions: [
        "Do you offer affiliate or referral programs?",
        "How can local businesses partner with Adventure?",
        "What benefits do partners receive?",
        "Are there co-marketing opportunities available?"
      ]
    },
    {
      title: "🚀 Onboarding Process",
      questions: [
        "How long does the onboarding process take?",
        "What documentation will I need to provide?",
        "Is there training available for new hosts/partners?",
        "Who can I contact if I need help during onboarding?"
      ]
    },
    {
      title: "🌍 Adventure Experiences",
      questions: [
        "Can I offer guided experiences along with accommodations?",
        "How do you help hosts create unique adventure packages?",
        "What safety standards need to be met for activities?",
        "How are experiences marketed to travelers?"
      ]
    }
  ];



  return (
    <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: '40px', color: '#1a73e8' }}>
        Adventure Hosting & Partnership Questions
      </Title>
      
      <Text strong style={{ display: 'block', textAlign: 'center', marginBottom: '40px', fontSize: '16px' }}>
        Let's explore how we can work together to create unforgettable experiences!
      </Text>
      
      <Divider />
      
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        {questions.map((section, index) => (
          <Card 
            key={index}
            title={<Text strong style={{ fontSize: '18px' }}>{section.title}</Text>}
            bordered={false}
            headStyle={{ borderBottom: '1px solid #f0f0f0' }}
            style={{ borderRadius: '12px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}
          >
            <Space direction="vertical" size="middle">
              {section.questions.map((question, qIndex) => (
                <Button 
                  key={qIndex} 
                  type="text" 
                  block 
                  style={{ textAlign: 'left', padding: '12px 16px' }}
                >
                  {question}
                </Button>
              ))}
            </Space>
          </Card>
        ))}
      </Space>
      
      <Divider />
      
      <div style={{ textAlign: 'center', marginTop: '32px' }}>
        <Button 
          type="primary" 
          size="large" 
          onClick={handleNext}
          style={{ 
            marginRight: '16px',
            backgroundColor: '#ff7e33',
            borderColor: '#ff7e33',
            padding: '0 40px',
            height: '48px',
            borderRadius: '24px',
            fontWeight: '600'
          }}
        >
          Next Step
        </Button>
        <Button 
          size="large"
          style={{
            padding: '0 40px',
            height: '48px',
            borderRadius: '24px',
            fontWeight: '600'
          }}
        >
          Contact Our Team
        </Button>
      </div>
    </div>
  );
}

export default Step11;