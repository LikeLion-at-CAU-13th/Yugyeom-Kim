import React from 'react';
import styled from 'styled-components';

// 페이지 번호 UI를 표시하는 컴포넌트
const PageSelection = ({ curPage, setCurPage, setUserData, allData, offset }) => {
  // 전체 페이지 수 계산: 전체 유저 수 ÷ 페이지당 표시할 수
  const totalPage = Math.ceil(allData.length / offset); // Math.ceil() -> 소수점 이하를 무조건 올림하여 정수로 만드는 함수

  // 페이지 번호 클릭 시 실행되는 함수
  const handleClick = (page) => {
    setCurPage(page); // 현재 페이지 상태를 변경하면, 부모 useEffect에서 자동으로 userData가 업데이트됨
  };


  return (
    <SelectionLayout>
      {[...Array(totalPage)].map((_, idx) => (
        <PageBox
          key={idx} // 반복 요소에 고유 key 부여
          $active={curPage === idx + 1} // 현재 페이지인지 확인하여 스타일 제어용 props
          onClick={() => handleClick(idx + 1)} // 클릭 시 해당 페이지로 이동
        >
          {idx + 1}
        </PageBox>
      ))}
    </SelectionLayout>
  );
};

export default PageSelection;

const SelectionLayout = styled.div`
  display: flex;
  gap: 3rem;
  margin-bottom: 2rem;
`;

const PageBox = styled.div`
  font-size: 2rem;
  color: ${(props) => (props.$active ? "#000000" : "#C9C9C9")};
  &:hover {
    cursor: pointer;
    color: white;
  }
`;
