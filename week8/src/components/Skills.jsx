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

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const SkillCard = styled.div`
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 30px 20px;
  font-size: 20px;
  font-weight: 500;
  color: #333;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

function Skills() {
  return (
    <Section>
      <Title>My Skills</Title>
      <SkillGrid>
        <SkillCard>React</SkillCard>
        <SkillCard>JavaScript</SkillCard>
        <SkillCard>HTML / CSS</SkillCard>
        <SkillCard>Git & GitHub</SkillCard>
      </SkillGrid>
    </Section>
  );
}

export default Skills;
