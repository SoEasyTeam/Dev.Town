import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authenticateAction } from '@redux/actions/authenticateAction';
import {
    EmailInput,
    PassWordInput,
    TextLabel,
} from '@components/common/textActiveInput/index.style';
import {
    JoinEmailLink,
    LoginBtn,
    LoginContainer,
    WarningParagraph,
} from '@components/login/LoginMain/index.style';
import { useForm } from 'react-hook-form';
import { checkEmail } from '@/utils/checkLogin';

function LoginMain() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(false);

    let { token } = useSelector((state) => state.auth);
    let { message } = useSelector((state) => state.auth);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: 'onChange' });

    const onSubmit = (formData) => {
        const { email, password } = formData;
        dispatch(authenticateAction.login(email, password));
        setIsLogin(true);
    };

    useEffect(() => {
        if (!token) return;
        if (token && !isLogin) {
            sessionStorage.clear();
            return;
        }

        setIsLogin(true);
        navigate('/home');
    }, [token]);

    return (
        <LoginContainer>
            <h1 className='ir'>데브타운 로그인 화면</h1>
            <h2 className='loginTitle'>로그인</h2>
            <form className='loginForm' onSubmit={handleSubmit(onSubmit)}>
                <TextLabel>이메일</TextLabel>
                <EmailInput
                    name='email'
                    {...register('email', {
                        required: '이메일을 입력해주세요.',
                        pattern: {
                            value: checkEmail,
                        },
                    })}
                    placeholder={'example@example.com'}
                />
                <TextLabel>비밀번호</TextLabel>
                <PassWordInput
                    name='password'
                    type={'password'}
                    {...register('password', {
                        required: '패스워드를 입력해주세요.',
                        minLength: {
                            value: 6,
                        },
                    })}
                    label={'비밀번호'}
                    placeholder={'********'}
                />
                <WarningParagraph visible={!!message}>
                    * {message}
                </WarningParagraph>
                <div className='loginBtnWrap'>
                    <LoginBtn
                        disabled={!!Object.keys(errors).length}
                        type='submit'
                    >
                        로그인
                    </LoginBtn>
                    <JoinEmailLink to='/join'>이메일로 회원가입</JoinEmailLink>
                </div>
            </form>
        </LoginContainer>
    );
}

export default LoginMain;
