import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { TopBasicNav } from '../components/common/TopNav';
import { MBtn } from '../components/common/Buttons';
import { DefaultProfileImg } from '../components/common/ProfileButtons';

const ProfileName = styled.h3`
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
`

const ProfileAccount = styled.span`
    display: inline-block;
    margin-top: 6px;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #767676;
`

const ProfileIntro = styled.p`
    margin-top: 16px;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #767676;
`

const FollowLink = styled(Link)`
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
`

const MyProfileEditBtn = styled(MBtn)`
    background-color: var(--bg-color);
`

const MyProfileProductBtn = styled(MBtn)`
    background-color: var(--bg-color);
`

const ProfileAreaCol = styled.article`
    display: flex;
    flex-direction: column;
    width: 100vw;
    text-align: center;
    border-bottom: 0.5px solid #DBDBDB;
    background: #FFFFFF;
    margin-bottom: 6px;
    .profileTop{
        display:flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        margin-top: 29.5px;
        padding: 0 18px;
        .followers {
            width: 43px;
        }
        .followings {
            width: 43px;
        }
        p {
            font-weight: 400;
            font-size: 10px;
            line-height: 12px;
            color: #767676;
            margin-top: 6px;
        }
        .profileTopImg {
            width: 110px;
        }
    }
    .profileMiddle {
        margin-top: 16px; 
    }
    .profileBottom {
        display: flex;
        gap: 12px;
        margin: 24px auto 25.5px;
    }
`

function UserProfile() {
    const [userData, setUserData] = useState()

    useEffect(() => {
        const getData = async () => {
            const res = await fetch("https://mandarin.api.weniv.co.kr/profile/dev_town", {
                method: "GET",
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyY2MwZTMzODJmZGNjNzEyZjQzYTQ3OCIsImV4cCI6MTY2MjcyNDIyOCwiaWF0IjoxNjU3NTQwMjI4fQ.Ohb9djNDM7WSYGCsZwJmOaUqQfS6KaCXTaxLy4VUQ-0"
                }
            })
            const json = await res.json()
            console.log(json)
            setUserData(json)
        }
        getData()
    }, [])

    if (!userData) {
        return <div>데이터 없을 때 화면 띄우기</div>
    }

    return (
        <>
            <ProfileAreaCol>
                <div className='profileTop'>
                    <div className='followers'>
                        <FollowLink to='#'>{userData.profile.followerCount}</FollowLink>
                        <p>followers</p>
                    </div>
                    <div className='profileTopImg'>
                        <DefaultProfileImg />
                    </div>
                    <div className='followings'>
                        <FollowLink to='#'>{userData.profile.followingCount}</FollowLink>
                        <p>followings</p>
                    </div>
                </div>
                <div className='profileMiddle'>
                    <ProfileName>{userData.profile.username}</ProfileName>
                    <ProfileAccount>@ {userData.profile.accountname}</ProfileAccount>
                    <ProfileIntro>{userData.profile.intro}</ProfileIntro>
                </div>
                <div className='profileBottom'>
                    <MyProfileEditBtn>프로필 수정</MyProfileEditBtn>
                    <MyProfileProductBtn>상품 등록</MyProfileProductBtn>
                </div>
            </ProfileAreaCol>
        </>
    )
}
export default UserProfile;



