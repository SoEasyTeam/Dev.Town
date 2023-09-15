import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { joinAction } from '@redux/actions/joinAction';
import JoinProfileImg from '@public/assets/images/basic-profile-img.png';
import {
    ProfileImgInput,
    Profilelabel,
    ProfileSettingForm,
    SignUpBtn,
} from '@components/join/ProfileSetting/index.style';
import {
    ProfileId,
    ProfileIntroduce,
    ProfileNameInput,
    TextLabel,
} from '@components/common/textActiveInput/index.style';
import { WarningParagraph } from '@components/login/LoginMain/index.style';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { checkUserId } from '@/utils/checkAuth';

const schema = yup
    .object({
        username: yup
            .string()
            .min(2, '사용자 이름이 2~10자 이내여야 합니다.')
            .max(10, '사용자 이름이 2~10자 이내여야 합니다.'),
        userId: yup
            .string()
            .matches(
                checkUserId,
                '영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.'
            ),
    })
    .required();

function ProfileSetting() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { email, password } = useSelector((state) => state.join);
    const { message } = useSelector((state) => state.joinfinal);
    const [itemImage, setItemImage] = useState(JoinProfileImg);

    const onChangeProfileImg = (event) => {
        if (parseInt(event.target.files[0].size) > 100000) {
            alert('이미지 파일 100KB 이하로 해주세요.');
            return;
        }

        let reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (event) => {
            let readerUrl = event.target.result;
            setItemImage(readerUrl);
        };
    };

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const userIdValue = watch('userId');
    useEffect(() => {
        if (!userIdValue) return;
        dispatch(joinAction.accountValid(userIdValue));
    }, [userIdValue]);

    const onSubmit = (formData) => {
        const { username, userId, introduce } = formData;
        dispatch(
            joinAction.joinfinal(
                email,
                password,
                username,
                userId,
                introduce,
                itemImage
            )
        );
    };

    useEffect(() => {
        if (message !== '회원가입 성공') return;
        dispatch(joinAction.joinfinal('initial'));
        navigate('/login');
    }, [message]);

    return (
        <ProfileSettingForm onSubmit={handleSubmit(onSubmit)}>
            <h1 className='ir'>데브타운 프로필 설정 화면</h1>
            <h2 className='profile-title'>프로필 설정</h2>
            <p className='subtitle-p'>나중에 언제든지 변경할 수 있습니다.</p>
            <Profilelabel htmlFor='profileImg'>
                <img
                    className='joinprofile-img'
                    src={itemImage}
                    alt='프로필이미지'
                />
            </Profilelabel>
            <ProfileImgInput
                onChange={onChangeProfileImg}
                id='profileImg'
                type='file'
                accept='image/*'
            />
            <div className='input-cont'>
                <TextLabel>사용자 이름</TextLabel>
                <ProfileNameInput name='username' {...register('username')} />
            </div>
            <div className='input-cont'>
                <TextLabel>계정 ID</TextLabel>
                <ProfileId name='userId' {...register('userId')} />
            </div>
            <div className='input-cont'>
                <TextLabel>소개</TextLabel>
                <ProfileIntroduce name='introduce' {...register('introduce')} />
                <WarningParagraph
                    visible={!!errors.username || !!message || !!errors.userId}
                >
                    {errors.username?.message ||
                        errors.userId?.message ||
                        message}
                </WarningParagraph>
            </div>
            <SignUpBtn disabled={message !== '사용 가능한 계정ID 입니다.'}>
                데브타운 시작하기
            </SignUpBtn>
        </ProfileSettingForm>
    );
}

export default ProfileSetting;
