import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { userAnswers } = location.state || {};

  const [score, setScore] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchResult = async () => {
      if (!userAnswers) return;

      try {
        // 1. 사용자 답안 서버로 전송해 채점
        const res1 = await axios.post(
          'https://week12-api-1cc7.onrender.com/api/answers',
          { answers: userAnswers }
        );

        // 2. 정답 배열 기반 점수 계산
        const resultArray = res1.data.results;
        
        const score = Array.isArray(resultArray)
          ? resultArray.filter((r) => r.correct === true).length
          : 0;

        setScore(score);

        // 3. 점수 기반 메시지 받아오기
        const res2 = await axios.get(
          `https://week12-api-1cc7.onrender.com/api/result?score=${score}`
        );
        setMessage(res2.data.message);
      } catch (err) {
        console.error("❌ 오류 발생:", err);
        setMessage('결과를 불러오는 데 실패했습니다.');
      }
    };

    fetchResult();
  }, [userAnswers]);

  const retry = () => {
    navigate('/quiz');
  };

  const goHome = () => {
    navigate('/');
  };


  if (!userAnswers) return <Container>잘못된 접근입니다.</Container>;
  if (message === '') return <Container>채점 중...</Container>;

  return (
    <Container>
      <h2>🎉 퀴즈 결과 🎉</h2>
      <ScoreText>당신의 점수: {score} / 5</ScoreText>
      <MessageText>{message}</MessageText>
      <ButtonGroup>
        <RetryButton onClick={retry}>다시 풀기</RetryButton>
        <HomeButton onClick={goHome}>홈으로</HomeButton>
      </ButtonGroup>
    </Container>
  );
};

export default Result;

const Container = styled.div`
  padding: 50px;
  text-align: center;
`;

const ScoreText = styled.h3`
  margin: 20px 0;
  font-size: 24px;
`;

const MessageText = styled.p`
  font-size: 20px;
  margin-bottom: 30px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
`;

const RetryButton = styled.button`
  padding: 10px 25px;
  font-size: 16px;
  border: none;
  border-radius: 12px;
  background-color: #5ac8fa;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #4aaee8;
  }
`;

  const HomeButton = styled(RetryButton)`
    background-color: #8bc34a;

    &:hover {
      background-color: #76b042;
    }
`;