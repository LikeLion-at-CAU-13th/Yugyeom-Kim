import React, { useContext } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { userNameAtom, emailAtom, birthDateAtom, isSubmittedAtom } from '../../recoil/atom';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ModalContext } from '../../context/modalContext';

const ConfirmModal = () => {
  // 모달이 열렸는지 여부와 닫는 함수
  const { isOpen, closeModal } = useContext(ModalContext);

  // 사용자 입력값을 recoil에서 가져옴
  const name = useRecoilValue(userNameAtom);
  const email = useRecoilValue(emailAtom);
  const birth = useRecoilValue(birthDateAtom);

  // 제출 상태를 true로 바꾸는 setter
  const setSubmitted = useSetRecoilState(isSubmittedAtom);
  const navigate = useNavigate();

  const handleConfirm = () => {
    setSubmitted(true); // 제출 상태 true로 설정
    closeModal();          
    navigate('/mypage');
  };

  // 모달이 열리지 않은 상태라면 아무것도 렌더링하지 않음
  if (!isOpen) return null;

  return (
    <Overlay>
      <ModalBox>
        <h3>입력한 정보가 맞나요?</h3>
        <p>이름: {name}</p>
        <p>이메일: {email}</p>
        <p>생년월일: {birth}</p>
        <ButtonGroup>
          <button onClick={handleConfirm}>확인</button>
          <button onClick={closeModal}>취소</button>
        </ButtonGroup>
      </ModalBox>
    </Overlay>
  );
};

export default ConfirmModal;

const Overlay = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBox = styled.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  text-align: center;
`;

const ButtonGroup = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
`;