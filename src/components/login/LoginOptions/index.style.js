import styled from 'styled-components';
import iconKakao from '@public/assets/images/kakao.png';
import iconGoogle from '@public/assets/images/google.png';
import iconFacebook from '@public/assets/images/facebook.png';

export const LogInColBox = styled.div`
    position: relative;
    inset: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: var(--main-color);
    ${({ isActive }) => {
        return isActive === true ? null : `visibility: hidden`;
    }};
    ${({ isActive }) => {
        return isActive === true ? `z-index: 1` : null;
    }};
    ${({ isActive }) => {
        return isActive === true ? `opacity: 1` : `opacity: 0`;
    }};
    ${({ isActive }) => {
        return isActive === true ? `animation: 1.5s ease-in forwards` : null;
    }};
    .img-logo-white {
        width: 202px;
        height: 120px;
        transform: translateY(-185px);
    }
    .login-box-col {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        font-family: 'Spoqa Han Sans Neo';
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        width: 100%;
        height: 45%;
        bottom: 0;
        padding: 35px;
        background-color: var(--bg-color);
        border-radius: 20px 20px 0 0;
        gap: 20px;
        .options-login-row {
            display: flex;
            align-items: center;
            justify-content: center;
            top: 0;
            width: 90%;
            height: 3.5rem;
            font-size: 1.01rem;
            border: 1px solid #f2c94c;
            border-radius: 44px;
            &:hover {
                font-weight: bold;
            }
            &:nth-child(1) {
                background: url(${iconKakao}) no-repeat left 16px center;
            }
            &:nth-child(2) {
                border: 1px solid #767676;
                background: url(${iconGoogle}) no-repeat left 16px center;
            }
            &:nth-child(3) {
                border: 1px solid #2d9cdb;
                background: url(${iconFacebook}) no-repeat left 16px center;
            }
        }
        .signup-box-row {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 2rem;
            margin-top: 10px;
            .email-link {
                &::after {
                    content: '';
                    display: inline-block;
                    width: 1px;
                    height: 1rem;
                    background-color: #000;
                    vertical-align: bottom;
                    line-height: 1rem;
                    transform: translatex(1rem);
                    cursor: none;
                }
                &:hover {
                    font-weight: bold;
                }
            }
            .join-link {
                &:hover {
                    font-weight: bold;
                }
            }
        }
    }
`;
