import { createContext } from 'react';

// ModalContext 생성
// 전역에서 모달의 열림 상태와 열기/닫기 함수를 공유하기 위한 Context
export const ModalContext = createContext({
  isOpen: false, // 모달이 열렸는지 여부 (기본값: 닫힘)
  openModal: () => {}, // 모달을 여는 함수 (기본은 빈 함수로 설정)
  closeModal: () => {}, // 모달을 닫는 함수 (기본은 빈 함수로 설정)
});