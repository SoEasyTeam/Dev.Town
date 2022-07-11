import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { LBtn } from '../components/common/Buttons';
import { EmailInput, PassWordInput, TextLabel } from '../components/common/TextAciveInput'

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
    .loginBtnWrap {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

const LoginBtn = styled(LBtn)`
    margin: 30px 0 20px;
`

const JoinEmailLink = styled(Link)`
    font-family: 'Spoqa Han Sans Neo';
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

function LoginPage() {
    return (
        <LoginMain>
            <h1 className='ir'>데브타운 로그인 화면</h1>
            <h2 className='loginTitle'>로그인</h2>
            <form className='loginForm'>
                <TextLabel>이메일</TextLabel>
                <EmailInput />
                <TextLabel>비밀번호</TextLabel>
                <PassWordInput />
                <div className='loginBtnWrap'>
                    <LoginBtn>로그인</LoginBtn>
                </div>
            </form>
            <JoinEmailLink to='#'>이메일로 회원가입</JoinEmailLink>
        </LoginMain>
    )
}

export default LoginPage;