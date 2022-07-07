import React from 'react';
import styled from 'styled-components';
import { TopUploadNav } from '../components/common/TopNav'
import JoinProfileImg from '../assets/basic-profile-img.png';
import UploadfileImg from '../assets/upload-file.png';
import {
    ProfileId,
    ProfileIntroduce,
    ProfileNameInput,
    TextLabel,
} from '../components/common/TextAciveInput';

const ProfileSettingBox = styled.form`
    width: 100vw;
    padding: 30px 34px;
    display: flex;
    flex-direction: column;
    .input-cont {
        margin: 0 auto;
    }
`;

export const ProfileBtn = styled.button`
    margin: 0 auto 30px;
    position: relative;
    .joinprofile-img {
        width: 110px;
        height: 110px;
    }
    &::after {
        position: absolute;
        content: '';
        right: 0px;
        bottom: 0px;
        width: 36px;
        height: 36px;
        background: url(${UploadfileImg}) no-repeat center / 36px 36px;
        border-radius: 50%;
    }
`;

function ProfileSettingPage() {
    return (
        <>
            <TopUploadNav />
            <ProfileSettingBox id='profileJoinForm' method='post'>
                <h1 className='ir'>프로필 수정</h1>
                <ProfileBtn>
                    <img
                        className='joinprofile-img'
                        src={JoinProfileImg}
                        alt='프로필이미지'
                    />
                </ProfileBtn>
                <div className='input-cont'>
                    <TextLabel>사용자 이름</TextLabel>
                    <ProfileNameInput />
                </div>
                <div className='input-cont'>
                    <TextLabel>계정 ID</TextLabel>
                    <ProfileId />
                </div>
                <div className='input-cont'>
                    <TextLabel>소개</TextLabel>
                    <ProfileIntroduce />
                </div>
            </ProfileSettingBox>
        </>
    );
}

export default ProfileSettingPage;
