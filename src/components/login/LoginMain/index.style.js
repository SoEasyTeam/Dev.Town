import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { LBtn } from '../../common/button/index.style';

export const LoginContainer = styled.section`
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
`;

export const LoginBtn = styled(LBtn)`
    margin: 30px 0 20px;
    ${({ disabled }) => {
        return disabled === false
            ? `background-color: var(--main-color);`
            : `background-color: var(--main-disabled-color);`;
    }}
`;

export const JoinEmailLink = styled(Link)`
    font-family: 'Spoqa Han Sans Neo';
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
`;

export const WarningParagraph = styled.strong`
    display: none;
    font-family: 'Spoqa Han Sans Neo';
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    text-align: left;
    color: #eb5757;
    ${({ visible }) => {
        return visible === true ? `display: block` : `display: none`;
    }}
`;
