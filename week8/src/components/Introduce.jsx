import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;
  padding: 60px 20px;
  background-color: #f9f9f9;
`;

const ProfileImage = styled.img`
  width: 300px;
  height: 400px;
  object-fit: cover;
  border-radius: 20%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const ProfileText = styled.div`
  max-width: 500px;
  text-align: left;
`;

const Summary = styled.ul`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 10px;
  list-style: none;
  margin-top: 20px;
`;

const SummaryItem = styled.li`
  margin-bottom: 10px;
`;

function Introduce() {
  return (
    <Section>
      <ProfileImage src="/assets/profile.jpg" alt="Profile" />
      <ProfileText>
        <h2>Hello, I'm Yugyum Kim</h2>
        <p>안녕하세요, 멋쟁이 사자처럼 13기 프론트엔드 파트에 합류한 김유겸입니다.<br/>
        예술공학부 3학년에 재학 중입니다. 많이 부족하지만 열심히 하겠습니다!</p>
        <Summary>
          <SummaryItem>MBTI : ENTP</SummaryItem>
          <SummaryItem>거주지 : 인천</SummaryItem>
          <SummaryItem>취미 : ⚽ 축구보기, 🎵 음악듣기</SummaryItem>
          <SummaryItem><b>🙏 I can do all this by the power of Christ. [Philippians 4:13]</b></SummaryItem>
        </Summary>
      </ProfileText>
    </Section>
  );
}

export default Introduce;
