import React from 'react'
import styled from 'styled-components';
import { EmailInput, PassWordInput, TextLabel } from '../components/common/TextAciveInput'
const LoginMain = styled.section`
    width: 100vw;
    .loginTitle {
        font-family: 'Spoqa Han Sans Neo';
        font-weight: 500;
        font-size: 24px;
        line-height: 30px;
        text-align: center;
        margin: 30px 0 40px;
    }
    .loginForm {
        padding-left: 5%;
    }
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
                <button type="button" className="loginBtn">로그인</button>
            </form>
            <div>
                <a href='#'>이메일로 회원가입</a>
            </div>
        </LoginMain>
    )
}

export default LoginPage;
