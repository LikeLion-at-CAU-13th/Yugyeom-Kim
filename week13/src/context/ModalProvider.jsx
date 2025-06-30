import React, { useState } from 'react';
import { ModalContext } from './modalContext';

const ModalProvider = ({ children }) => {
   // 모달의 열림/닫힘 상태를 관리하는 state (기본값: false = 닫힘)
  const [isOpen, setIsOpen] = useState(false);

  // 모달을 여는 함수
  const openModal = () => setIsOpen(true);

  // 모달을 닫는 함수
  const closeModal = () => setIsOpen(false);

  return (
    // Context Provider를 통해 전역으로 상태와 함수를 전달
    <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;