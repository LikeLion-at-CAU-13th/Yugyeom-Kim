import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { getMyPage } from '../apis/user';
import { useNavigate } from 'react-router-dom';

const Mypage = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getMyPage(localStorage.getItem("access"))
    .then((data) => {
      setData(data);
      setLoading(false);
    })
    .catch((error) => {
      alert("토큰 기한 만료");
    })
  }, []);

  const onLogout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    alert("로그아웃되었습니다.");
    navigate("/");
  };

  if(loading) return <div>로딩중 ...</div>

  return (
    <Wrapper>
      <Title>마이페이지</Title>
      <div>이름: {data.name}</div>
      <div>나이: {data.age}</div>
      <LogoutButton onClick={onLogout}>로그아웃</LogoutButton>
    </Wrapper>
  )
}

export default Mypage

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
  border: 3px solid #89cdf6;
  padding: 30px;
  border-radius: 3%;
  font-size: 20px;
  width: 300px;
  div {
    font-size: 25px;
  }
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin-top: 15px;
  margin-bottom: 30px;
  color: #585858;
  font-family: SUITE;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;

const LogoutButton = styled.button`
  margin-top: 30px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #ff8a8a;
  color: white;
  font-weight: 700;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: #ff8a8a;
    box-shadow: 0 0 3px 3px #ff8a8a;
  }
`;
