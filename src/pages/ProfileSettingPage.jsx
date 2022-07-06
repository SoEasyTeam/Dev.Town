import React from 'react'
import styled from 'styled-components'

const ProfileSettingBox = styled.div`
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
        color: #000000;
        margin-bottom: 12px;
    }
    .subtitle-p {
        font-family: 'Spoqa Han Sans Neo';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 14px;
        text-align: center;
        color: #767676;
        margin-bottom: 30px;
    }
`

function ProfileSettingPage() {
  return (
    <ProfileSettingBox>
      <h1 className='profile-title'>프로필 설정</h1>
      <p className='subtitle-p'>나중에 언제든지 변경할 수 있습니다.</p>
      <div className=''>

      </div>
    </ProfileSettingBox>
  )
}

export default ProfileSettingPage