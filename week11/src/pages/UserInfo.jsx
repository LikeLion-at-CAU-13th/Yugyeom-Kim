import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import UserFilter from '../components/UserFilter';
import UserSection from '../components/UserSection';
import { getAllUsers } from '../apis/userlist';

const UserInfo = () => {
    const[filter, setFilter] = useState("all"); // 현재 선택된 필터 상태
    const[curPage, setCurPage] = useState(1); // 현재 페이지 번호
    const[userData, setUserData] = useState([]); // 현재 페이지에 보여줄 사용자 데이터
    const [allData, setAllData] = useState([]); // 전체 사용자 데이터
    const offset = 5; // 페이지당 보여줄 유저 수

useEffect(() => {
  const fetchData = async () => {
    const data = await getAllUsers(); // 서버에서 전체 유저 데이터 불러오기
    console.log("getAllUsers 응답 데이터:", data); 
    setAllData(data); // 전체 데이터 상태로 저장
  };
  fetchData();
}, []);

useEffect(() => {
  console.log("페이지 변경 또는 전체 데이터 변경됨");
  console.log("현재 페이지:", curPage);
  console.log("전체 유저 수:", allData.length);
  const startIdx = (curPage - 1) * offset; // 시작 인덱스 계산
  const pagedData = allData.slice(startIdx, startIdx + offset); // 해당 페이지에 보여줄 유저만 자르기
  console.log("보여줄 userData:", pagedData);
  setUserData(pagedData); // 잘라낸 유저 데이터를 화면에 표시
}, [allData, curPage, offset]);


  return (
    <MainLayout>
      <h1>🦁13기 아기사자 리스트🦁</h1>
        <ContentBox>
            <UserFilter 
                filter={filter} // 현재 선택된 필터값
                setFilter={setFilter} // 필터값 업데이트 함수
                setUserData={setUserData} // 필터 클릭 시 보여줄 데이터 설정
                setCurPage={setCurPage} // 필터 클릭 시 1페이지로 초기화
                offset={offset} // 페이지당 데이터 수 전달
                setAllData={setAllData} // 필터 클릭 시 전체 데이터 변경
              />
            <UserSection 
              filter={filter} // 현재 필터 정보 전달
              userData={userData} // 현재 페이지에 보여줄 유저 데이터
              curPage={curPage} // 현재 페이지
              setUserData={setUserData} // (PageSelection 안에서 불필요하긴 하나 일단 전달됨)
              setCurPage={setCurPage} // 페이지 클릭 시 업데이트
              allData={allData} // 전체 유저 수 전달 → 총 페이지 수 계산용
              offset={offset} // 페이지당 몇 명인지 전달              
              />
        </ContentBox>
    </MainLayout>
  )
}

export default UserInfo

const MainLayout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    & > h1{
        font-size: 3.5rem;
        margin-top: 5rem;
        margin-bottom: 5rem;
    }
`

const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 95%;
    border-radius: 1rem;
    border : 5px solid #FF7710;
`