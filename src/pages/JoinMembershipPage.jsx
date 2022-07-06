import React from 'react'
import styled from 'styled-components';
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
    .nextBtnWrap {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

const NextBtn = styled(LBtn)`
    margin: 30px 0 20px;
`

const JoinEmailInput = styled(EmailInput).attrs({
    placeholder: '이메일 주소를 입력해 주세요.'
})``

const JoinPassWordInput = styled(PassWordInput).attrs({
    placeholder: '비밀번호를 설정해 주세요.'
})``

function JoinMembershipPage() {
    return (
        <LoginMain>
            <h1 className='ir'>데브타운 회원가입 화면</h1>
            <h2 className='loginTitle'>이메일로 회원가입</h2>
            <form className='loginForm'>
                <TextLabel>이메일</TextLabel>
                <JoinEmailInput />
                <TextLabel>비밀번호</TextLabel>
                <JoinPassWordInput />
            </form>
            <div className='nextBtnWrap'>
                <NextBtn>다음</NextBtn>
            </div>
        </LoginMain>
    )
}

export default JoinMembershipPage;
