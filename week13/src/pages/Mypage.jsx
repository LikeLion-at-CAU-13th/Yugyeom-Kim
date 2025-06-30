import React, { useContext } from 'react'
import { Button, Title, Wrapper } from '../components/layout/common'
import { useRecoilValue, useResetRecoilState } from 'recoil'
import { emailAtom, isSubmittedAtom, userNameAtom } from '../recoil/atom'
import { ThemeColorContext } from '../context/context'
import { useNavigate } from 'react-router-dom'

const Mypage = () => {
    const userName = useRecoilValue(userNameAtom);
    const mode = useContext(ThemeColorContext);

    const navigate = useNavigate();
    const resetUserName = useResetRecoilState(userNameAtom);
    const resetEmail = useResetRecoilState(emailAtom);
    const resetIsSubmitted = useResetRecoilState(isSubmittedAtom);

    const handleReset = () => {
      resetUserName();
      resetEmail();
      resetIsSubmitted();
      navigate("/");
    }

  return (
    <Wrapper>
      <Title>Welcome {userName}!</Title>
      <Button mode={mode.button} onClick={handleReset}>
        Reset
      </Button>
    </Wrapper>
  )
}

export default Mypage
