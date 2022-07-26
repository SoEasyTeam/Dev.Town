import React from 'react'
import { useState } from 'react';
import styled from 'styled-components';
import { LBtn } from '../components/common/Buttons';
import { EmailInput, PassWordInput, TextLabel } from '../components/common/TextAciveInput'
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { joinAction } from '../redux/actions/joinAction';
import { useEffect } from 'react';
import { WarningParagraph } from './LoginPage';

const LoginMain = styled.section`
    width: 100vw;
    padding: 0 5%;
    .loginTitle {
        font-family: 'Spoqa Han Sans Neo';
        font-weight: 500;
        font-size: 24px;
        line-height: 30px;
        text-align: center;
        margin: 30px 0 40px;
    }
    .nextBtnWrap {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

const NextBtn = styled(LBtn)`
    margin: 30px 0 20px;
    ${({disabled}) => {
        return disabled === false ? `background-color: var(--main-color);` : `background-color: var(--main-disabled-color);`
    }}
`

const JoinEmailInput = styled(EmailInput).attrs({
    placeholder: '이메일 주소를 입력해 주세요.'
})``

const JoinPassWordInput = styled(PassWordInput).attrs({
    placeholder: '비밀번호를 설정해 주세요.'
})``

function JoinMembershipPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isActive, setIsActive] = useState(true);
    // const [isEmailValid, setEmailValid] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    const message = useSelector(state=> state.join.message);

    //이메일 주소 유효성 검사
    const checkEmail =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    //다음버튼 활성화 검사
    const nextSignUpActive = () => {
        return checkEmail.test(email)&&password.length>5
        ? setIsActive(false)
        : setIsActive(true);
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log('버튼 클릭')
        dispatch(joinAction.join(email,password));
    }

    useEffect(() => {
        if(message === '사용 가능한 이메일 입니다.'){
            history.push('/profilesetting');
        }
    }, [message])

    return (
        <LoginMain>
            <h1 className='ir'>데브타운 회원가입 화면</h1>
            <h2 className='loginTitle'>이메일로 회원가입</h2>
            <form className='loginForm' onSubmit={ onSubmitHandler }>
                <TextLabel>이메일</TextLabel>
                <JoinEmailInput value={email} onChange={(event) => setEmail(event.currentTarget.value)} onKeyUp={nextSignUpActive}/>
                <TextLabel>비밀번호</TextLabel>
                <JoinPassWordInput value={password} onChange={(event) => setPassword(event.currentTarget.value)} onKeyUp={nextSignUpActive}/>
                <WarningParagraph visible={isActive}>*필수 입력사항을 입력해주세요.</WarningParagraph>
                {/* <WarningParagraph visible={isEmailValid}>*이미 가입된 이메일 주소 입니다.</WarningParagraph> */}
                <div className='nextBtnWrap'>
                    <NextBtn disabled={isActive}>다음</NextBtn>
                </div>
            </form>
        </LoginMain>
    )
}

export default JoinMembershipPage;