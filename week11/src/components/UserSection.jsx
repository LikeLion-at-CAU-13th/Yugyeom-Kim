import React from 'react'
import styled from 'styled-components'
import UserCard from './UserCard'
import PageSelection from './PageSelection'

// 필터 상태, 현재 페이지, 유저 데이터 등 props로 전달받음
const UserSection = ({ filter, userData, curPage, setUserData, setCurPage, allData, offset }) => {
  return (
        <UserSecLayout>
            <UserCardBox>
              { userData.map((data, idx) => 
                <UserCard 
                  key={idx} 
                  data={data} 
                />
              )}
            </UserCardBox>
              {allData.length > 0 && (
                <PageSelection 
                  curPage={curPage} // 현재 페이지 번호
                  setCurPage={setCurPage} // 페이지 전환 함수
                  allData={allData} // 전체 데이터 (페이지 수 계산용)
                  offset={offset} // 한 페이지에 보여줄 수
                />
              )}
        </UserSecLayout>
  )
}

export default UserSection

const UserSecLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  align-items: center;
  gap: 2rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
`

const UserCardBox = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
`