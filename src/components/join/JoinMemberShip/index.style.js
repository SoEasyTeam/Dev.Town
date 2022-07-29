import { LBtn } from '../../common/button/index.style';
import {
    EmailInput,
    PassWordInput,
} from '../../common/textActiveInput/index.style';
import styled from 'styled-components';

export const LoginMain = styled.section`
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
`;

export const NextBtn = styled(LBtn)`
    margin: 30px 0 20px;
    ${({ disabled }) => {
        return disabled === false
            ? `background-color: var(--main-color);`
            : `background-color: var(--main-disabled-color);`;
    }}
`;

export const JoinEmailInput = styled(EmailInput).attrs({
    placeholder: '이메일 주소를 입력해 주세요.',
})``;

export const JoinPassWordInput = styled(PassWordInput).attrs({
    placeholder: '비밀번호를 설정해 주세요.',
})``;
