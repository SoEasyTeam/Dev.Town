import React from 'react'
import styled from 'styled-components'
import JoinProfileImg from '../assets/basic-profile-img.png'
import UploadfileImg from '../assets/upload-file.png'
import { LBtn } from '../components/common/Buttons'
import { ProfileId, ProfileIntroduce, ProfileNameInput, TextLabel } from '../components/common/TextAciveInput'

const ProfileSettingBox = styled.form`
    width: 100vw;
    padding: 30px 34px;
    display: flex;
    flex-direction: column;
    .profile-title {
        font-family: 'Spoqa Han Sans Neo';
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 30px;
        text-align: center;
        color: var(--main-title-color);
        margin-bottom: 12px;
    }
    .subtitle-p {
        font-family: 'Spoqa Han Sans Neo';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 14px;
        text-align: center;
        color: var(--subtitle-text);
        margin-bottom: 30px;
    }
    .input-cont {
        margin: 0 auto;
    }
`

export const ProfileBtn = styled.button`
    margin: 0 auto 30px;
    position: relative;
        .joinprofile-img{
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
`

const SignUpBtn = styled(LBtn)`
    margin: 14px auto 0;
`

function ProfileSettingPage() {
    return (
        <ProfileSettingBox id='profileJoinForm' method='post'>
            <h2 className='profile-title'>프로필 설정</h2>
            <p className='subtitle-p'>나중에 언제든지 변경할 수 있습니다.</p>
            <ProfileBtn>
                <img className='joinprofile-img' src={JoinProfileImg} alt="프로필이미지" />
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
            <SignUpBtn>감귤마켓 시작하기</SignUpBtn>
        </ProfileSettingBox>
    )
}

export default ProfileSettingPage