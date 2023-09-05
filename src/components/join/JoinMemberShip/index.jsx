import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { WarningParagraph } from '@components/login/LoginMain/index.style';
import { joinAction } from '@redux/actions/joinAction';
import {
    EmailInput,
    PassWordInput,
    TextLabel,
} from '@components/common/textActiveInput/index.style';
import {
    LoginMain,
    NextBtn,
} from '@components/join/JoinMemberShip/index.style';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { checkEmail } from '@/utils/checkLogin';

function JoinMembership() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { message } = useSelector((state) => state.join);

    const schema = yup
        .object({
            email: yup
                .string()
                .matches(checkEmail, '이메일 양식에 맞게 입력해주세요.')
                .required('이메일을 입력해주세요.'),
            password: yup
                .string()
                .min(6, '비밀번호 최소 6자리 이상으로 입력해주세요.')
                .required('패스워드를 입력해주세요.'),
        })
        .required();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (formData) => {
        const { email, password } = formData;
        dispatch(joinAction.join(email, password));

        if (message !== '이미 가입된 이메일 주소 입니다.' && !!errors) {
            navigate('/profilesetting');
        }
    };

    const emailValue = watch('email');
    useEffect(() => {
        if (!checkEmail.test(emailValue)) return;
        dispatch(joinAction.join(emailValue, ''));
    }, [emailValue]);

    return (
        <LoginMain>
            <h1 className='ir'>데브타운 회원가입 화면</h1>
            <h2 className='loginTitle'>이메일로 회원가입</h2>
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
                    label={'비밀번호'}
                    placeholder={'********'}
                />
                <WarningParagraph visible={!!errors || message}>
                    {errors.email?.message ||
                        errors.password?.message ||
                        message}
                </WarningParagraph>
                <div className='nextBtnWrap'>
                    <NextBtn disabled={false}>다음</NextBtn>
                </div>
            </form>
        </LoginMain>
    );
}

export default JoinMembership;
