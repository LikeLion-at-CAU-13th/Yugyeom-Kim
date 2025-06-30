import React from 'react'
import { birthDateAtom, emailAtom, userNameAtom } from '../../recoil/atom'
import { useSetRecoilState } from 'recoil';

const Form = ({type, inputType}) => {
    const setUserName = useSetRecoilState(userNameAtom);
    const setEmail = useSetRecoilState(emailAtom);
    const setBirthDate = useSetRecoilState(birthDateAtom);

    const onChange = (e) => {
        const value = e.target.value;
        if (inputType === '이름') {
            setUserName(value);
        } else if(inputType === '이메일') {
            setEmail(value);
        } else if (inputType === '생년월일') { // 상태 데이터 추가
            setBirthDate(value);
        }
    }
    return (
    <>
        <div>{inputType}</div>
        <input type={type} onChange={onChange}/>
    </>
  )
}

export default Form
