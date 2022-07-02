import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import logoImgWhite from '../../assets/logo-white.png';
import iconKakao from '../../assets/kakao.png'
import iconGoogle from '../../assets/google.png'
import iconFacebook from '../../assets/facebook.png'

const LogInOptionsFadeIn = keyframes`
    from {
        opacity: 0;
        display: none;
    }
    to {
        opacity: 1;
    }
`;

const LogInColBox = styled.div`
    position: relative;
    inset: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 1.01rem;
    background-color: var(--main-color);
    animation: ${LogInOptionsFadeIn} 2.5s ease-in forwards;

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
        width: 100%;
        height: 45%;
        bottom: 0;
        padding: 35px;
        background-color: var(--bg-color);
        border-radius: 20px 20px 0 0;

        .options-login-row {
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            top: 0;
            width: 90%;
            height: 3.2rem;
            font-size: 1.01rem;
            border: 1px solid #F2C94C;
            border-radius: 44px;

            &:nth-child(1) {
                transform: translatey(calc(100%));
                &::before {
                    position: absolute;
                    left: 1rem;
                    content: '';
                    width: 24px;
                    height: 24px;
                    background-image: url(${iconKakao});
                    background-repeat: none;
                    background-position: center;
                }
            }

            &:nth-child(2) {
                transform: translatey(calc(100% * 2.5));
                border: 1px solid #767676;
                &::before {
                    position: absolute;
                    left: 1rem;
                    content: '';
                    width: 24px;
                    height: 24px;
                    background-image: url(${iconGoogle});
                    background-repeat: none;
                    background-position: center;
                }
            }

            &:nth-child(3) {
                transform: translatey(calc(100% * 4));
                border: 1px solid #2D9CDB;
                &::before {
                    position: absolute;
                    left: 1rem;
                    content: '';
                    width: 24px;
                    height: 24px;
                    background-image: url(${iconFacebook});
                    background-repeat: none;
                    background-position: center;
                }
            }
        }

        .signup-box-row {
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            transform: translatey(calc(650%));
            gap: 2rem;

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
            }
        }
    }
`

export default function LoginOptions() {
    return (
        <LogInColBox>
            <img className='img-logo-white' src={logoImgWhite} alt='데브타운 로그인' />
            <div className='login-box-col'>
                <button className='options-login-row' type='button'>
                    카카오톡 계정으로 로그인
                </button>
                <button className='options-login-row' type='button'>
                    구글 계정으로 로그인
                </button>
                <button className='options-login-row' type='button'>
                    페이스북 계정으로 로그인
                </button>  
                <div className='signup-box-row'>
                    <Link to className='email-link'>이메일로 로그인</Link>
                    <Link to >회원가입</Link>
                </div>
            </div>
        </LogInColBox>
    )
}