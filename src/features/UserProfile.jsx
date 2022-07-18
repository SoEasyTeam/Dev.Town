import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
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
    // 사용자데이터 동적으로 받아오기
    const [userData, setUserData] = useState()

    // Promise : 현재에는 당장 얻을 수는 없지만 가까운 미래에는 얻을 수 있는 어떤 데이터에 접근하기 위한 방법 제공
    // 맨 처음 한번만 렌더링될때 useEffect 실행 []
    useEffect(() => {
        // 비동기
        // async : 프로미스 반환
        const getData = async () => {
            // await : 프로미스가 처리될 때까지 기다림
            // fetch(url, options) :  API의 URL을 인자로 받고, 미래 시점에 얻게될 API 호출 결과를 Promise 타입의 객체로 반환 
            // > api호출 성공시 response객체 resolve, 실패시 error객체 reject
            // "https://mandarin.api.weniv.co.kr/profile/${accountname}"
            // "Bearer ${token}"
            const res = await fetch("https://mandarin.api.weniv.co.kr/profile/dev_town", {
                // HTTP 요청 헤더
                method: "GET",
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyY2MwZTMzODJmZGNjNzEyZjQzYTQ3OCIsImV4cCI6MTY2Mjk0OTQxMCwiaWF0IjoxNjU3NzY1NDEwfQ.Z8_J_6Sol0yPyNgzbOrlJCiwuo4num9dqBY1PsgwtVk",
                    "Content-type": "application/json"
                }
            })
            // response 객체로부터 JSON 포멧의 응답을 자바스크립트 객체로 변환하여 얻어오기
            const json = await res.json()
            // 잘 받아왔는지 확인
            console.log(json)
            // 받아온 데이터를 userData에 넣기
            setUserData(json)
        }
        // 실행
        getData()
    }, [])

    // 데이터가 없는 경우 나올 화면
    if (!userData) {
        console.log('로그인 정보 없음');
        return <div>데이터 없을 때 화면 띄우기</div>
    }

    // 데이터가 있는 경우 나올 화면
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



