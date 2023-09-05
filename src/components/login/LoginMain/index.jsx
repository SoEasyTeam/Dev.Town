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
import { authSchema } from '@/utils/checkAuth';
import { yupResolver } from '@hookform/resolvers/yup';

function LoginMain() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(false);

    let { token } = useSelector((state) => state.auth);
    let { message } = useSelector((state) => state.auth);

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({
        resolver: yupResolver(authSchema),
    });

    console.log(isValid);

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
                    {...register('email')}
                    placeholder={'example@example.com'}
                />
                <TextLabel>비밀번호</TextLabel>
                <PassWordInput
                    name='password'
                    type={'password'}
                    {...register('password')}
                    placeholder={'********'}
                />
                <WarningParagraph visible={!!errors || message}>
                    {errors.email?.message ||
                        errors.password?.message ||
                        message}
                </WarningParagraph>
                <div className='loginBtnWrap'>
                    <LoginBtn disabled={false} type='submit'>
                        로그인
                    </LoginBtn>
                    <JoinEmailLink to='/join'>이메일로 회원가입</JoinEmailLink>
                </div>
            </form>
        </LoginContainer>
    );
}

export default LoginMain;
