import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 80px 20px;
  text-align: center;
  background-color: #f5f5f5;
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 50px;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  max-width: 800px;
  margin: 0 auto;
`;

const ContactCard = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 30px 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  font-size: 18px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
`;

const ContactText = styled.p`
  margin-bottom: 10px;
`;

const ContactLink = styled.a`
  font-size: 18px;
  color: #0077cc;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const IconImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-bottom: 15px;
  border-radius: 12px;
`;


function Contact() {
  return (
    <Section>
      <Title>Contact Me</Title>
      <CardGrid>
        <ContactCard>
            <IconImage src="/assets/card1.jpg" alt="Card-Icon1" />
            <ContactText>📧 Email</ContactText>
            <ContactLink href="mailto:kyg021003@gmail.com">kyg021003@gmail.com</ContactLink>
        </ContactCard>

        <ContactCard>   
            <IconImage src="/assets/card2.jpg" alt="Card-Icon2" />
            <ContactText>🔗 GitHub</ContactText>
            <ContactLink href="https://github.com/kimyugyum" target="_blank" rel="noopener noreferrer">github.com/kimyugyum          </ContactLink>
        </ContactCard>

        <ContactCard>
            <IconImage src="/assets/card3.jpg" alt="Card-Icon3" />
            <ContactText>🔗 Velog</ContactText>
            <ContactLink href="https://velog.io/@6_yummy/posts" target="_blank" rel="noopener noreferrer">velog.io/@6_yummy/</ContactLink>
        </ContactCard>

        <ContactCard>
            <IconImage src="/assets/card4.jpg" alt="Card-Icon4" />
            <ContactText>🔗 Instagram</ContactText>
            <ContactLink href="https://www.instagram.com/6_yummy/" target="_blank" rel="noopener noreferrer">instagram.com/6_yummy//</ContactLink>
        </ContactCard>
      </CardGrid>
    </Section>
  );
}

export default Contact;
