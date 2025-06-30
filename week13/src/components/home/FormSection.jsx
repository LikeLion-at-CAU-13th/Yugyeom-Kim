import React, { useContext } from 'react';
import Form from './Form';
import { Button, Wrapper } from '../layout/common';
import { ThemeColorContext } from '../../context/context';
import { ModalContext } from '../../context/modalContext';


const FormSection = () => {
  const mode = useContext(ThemeColorContext);
  const { openModal } = useContext(ModalContext); // 모달 열기

  const handleBtn = () => {
    openModal(); // 제출 시 모달 열기
  };

  return (
    <Wrapper>
      <Form type='home' inputType='이름' />
      <Form type='email' inputType='이메일' />
      <Form type='date' inputType='생년월일' />
      <Button mode={mode.button} onClick={handleBtn}>제출</Button>
    </Wrapper>
  );
};

export default FormSection;