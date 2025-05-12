import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: #ffffff;
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 15px;
`;

const Title = styled.h1`
  font-size: 24px;
`;

function Header() {
  return (
    <HeaderWrapper>
      <Logo src="/assets/star.png" alt="star logo" />
      <Title>Yugyum Portfolio</Title>
    </HeaderWrapper>
  );
}

export default Header;
