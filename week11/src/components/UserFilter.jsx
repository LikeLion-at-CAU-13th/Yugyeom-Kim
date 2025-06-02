import React from 'react'
import styled from 'styled-components'
import { filterType } from '../constants/filterType'
import { getAllUsers, getGenderUser, getPartUser, getPerPage } from '../apis/userlist'
import { getAllByAltText } from '@testing-library/dom'

// 필터 상태(filter), 데이터 설정 함수들(setFilter 등), 페이지당 개수(offset), 전체 데이터 설정(setAllData)을 props로 받음
const UserFilter = ({filter, setFilter, setUserData, setCurPage, offset, setAllData}) => {
    
    // 각 필터 버튼 클릭 시 실행되는 비동기 함수
    const handleClick = async(type, param) => {
        let response = []; // API 응답 결과를 저장할 변수
        
        // type이 'all'일 경우 전체 데이터 요청
        if(type === "all") {
            response = await getAllUsers();
        } else if (type === "gender") { // type이 'gender'일 경우
            response = await getGenderUser(param);
        } else if (type === "part") { // type이 'part'일 경우
            response = await getPartUser(param);
        }

        // 필터링된 전체 데이터를 allData에 저장 (페이지네이션 기준이 되는 전체 목록)
        setAllData(response);

        // 첫 페이지에 보여줄 데이터만 잘라서 userData에 설정
        setUserData(response.slice(0, offset));  // offset 사용

        // 필터를 클릭하면 페이지를 1페이지로 초기화
        setCurPage(1);

        // 현재 필터 상태를 param 값으로 업데이트
        setFilter(param);
    };

  return (
    <FilterLayout>
        {filterType.map((data, idx) =>
            <FilterBox 
                key={idx}
                $active={filter === data.param} // 현재 선택된 필터인지 여부 확인 (스타일링에 사용)
                onClick={() => handleClick(data.type, data.param)} // 버튼 클릭 시 필터링 함수 실행
            >
                {data.title}  
            </FilterBox>
        )}
    </FilterLayout>
  )
}

export default UserFilter

const FilterLayout = styled.div`
    display: flex;
    width: 90%;
    justify-content: space-between;
    overflow-x: scroll;
    padding-left: 2rem;
    padding-right: 2rem;
    margin-top: 2rem;
    gap: 2rem;
    &::-webkit-scrollbar{
        display: none;
    }
`

const FilterBox = styled.div`
  display: flex;
  padding: 1rem 4rem;
  border-radius: 1rem;
  font-size: 3rem;
  white-space: nowrap;
  background-color: ${(props) => (props.$active ? "#FF7710" : "transparent")};
  color: ${(props) => (props.$active ? "white" : "black")};
  transition: 0.2s ease;

  &:hover {
    cursor: pointer;
    opacity: 0.85;
  }
`

