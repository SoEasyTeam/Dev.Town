import { Link } from 'react-router-dom';
import logoImgWhite from '@public/assets/images/logo-white.png';
import { LogInColBox } from '@components/login/LoginOptions/index.style';

function LoginOptions({ isActive }) {
    return (
        <LogInColBox isActive={isActive}>
            <img
                className='img-logo-white'
                src={logoImgWhite}
                alt='데브타운 로그인'
            />
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
                    <Link to='/login' className='email-link'>
                        이메일로 로그인
                    </Link>
                    <Link to='/join' className='join-link'>
                        회원가입
                    </Link>
                </div>
            </div>
        </LogInColBox>
    );
}

export default LoginOptions;
