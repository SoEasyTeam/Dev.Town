import React from 'react'
import styled from 'styled-components';
import TextAciveInput from '../components/common/TextAciveInput';

const LoginMain = styled.section`
    width: 100vw;
    /* height: 820px; */
    .loginTitle {
        font-family: 'Spoqa Han Sans Neo';
        font-weight: 500;
        font-size: 24px;
        line-height: 30px;
        text-align: center;
        margin: 30px 0 40px;
    }
`

function LoginPage() {
    return (
        <LoginMain>
            <h1 className='ir'>데브타운 로그인 화면</h1>
            <h2 className='loginTitle'>로그인</h2>
            <form className='loginForm'>
                <fieldset>
                    <label for='inputId'>이메일</label>
                    <input type='text' id='inputId' placeholder='이메일'></input>
                </fieldset>
                <fieldset>
                    <label for='inputPw'>비밀번호</label>
                    <input type='password' id='inputPw' placeholder='비밀번호'></input>
                    <strong className="inputError">아이디 혹은 비밀번호와 일치하지 않습니다.</strong>
                </fieldset>
                <button type="button" className="loginBtn">로그인</button>
            </form>
        </LoginMain>
    )
}

export default LoginPage;
