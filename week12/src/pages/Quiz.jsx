import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0); // 현재 문제 번호
  const [userAnswers, setUserAnswers] = useState([]); // 사용자가 선택한 답안

  const navigate = useNavigate();

  // 문제 API 호출
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('https://week12-api-1cc7.onrender.com/api/questions');
        setQuestions(response.data);
      } catch (error) {
        console.error('문제 불러오기 실패:', error);
      }
    };
    fetchQuestions();
  }, []);

  // 보기 선택 핸들러
  const handleSelect = (answer) => {
    const newAnswers = [...userAnswers, { id: current, answer }];
    setUserAnswers(newAnswers);

    // 마지막 문제면 result 페이지로 이동
    if (current + 1 >= questions.length) {
      navigate('/result', { state: { userAnswers: newAnswers } });
    } else {
      setCurrent(current + 1);
    }
    
  };

  // 로딩 상태 처리
  if (questions.length === 0) return <div>문제를 불러오는 중...</div>;
  
  // q처리, 현재 문제 보여주기
  const q = questions[current];

  return (
    <Container>
      {/* 문제 제목을 화면에 출력 */}
      <Title>Q{current + 1}. {q.question}</Title>
      <AnswerList>
        {/* 보기 */}
        {q.answers.map((a, index) => (
          <AnswerBtn key={index} onClick={() => handleSelect(a)}>
            {a}
          </AnswerBtn>
        ))}
      </AnswerList>
    </Container>
  );
};

export default Quiz;

const Container = styled.div`
  padding: 50px;
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 30px;
`;

const AnswerList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
`;

const AnswerBtn = styled.button`
  padding: 15px 30px;
  background-color: #ffa07a;
  border: none;
  border-radius: 12px;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    background-color: #ff8c66;
  }
`;

