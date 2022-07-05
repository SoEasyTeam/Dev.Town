import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { TopBasicNav } from '../components/common/TopNav'
import TabMenu from '../components/common/TabMenu';
import { MBtn } from '../components/common/Buttons'
import { DefaultProfileImg } from '../components/common/ProfileButtons'
import IconMesssageImg from '../assets/icon/icon-message-circle.png'
import IconShareImg from '../assets/icon/icon-share.png'
import YourProfile from './YourProfile';

const ProfileLink = styled(Link)`
    img {
        width: 20px;
        height: 20px;
        display: block;
        margin: 0 auto;
    }
`;

const CircleBtns = styled.button`
    width: 34px;
    height: 34px;
    border: 1px solid #dbdbdb;
    border-radius: 30px;
    img {
        display: block;
        width: 20px;
        margin: 0 auto;
    }
`

const FollowLink = styled(Link)`
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
`

const ProfileSection = styled.section`
    display: flex;
    flex-direction: column;
    padding-top: 47.5px;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    font-family: 'Spoqa Han Sans Neo';
    border-bottom: 0.5px solid #DBDBDB;
    background: #FFFFFF;
`
const ProfileAreaCol = styled.article`
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    text-align: center;

    .profileTop{
        display:flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        width: 390px;
        margin-top: 30px;
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
    .profileMiddle{
        margin-top: 16px; 
    }
    .profileBottom {
        display: flex;
        gap: 10px;
        margin: 24px auto 26px;
        /* margin-top: 24px ; */
    }
`

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

function YourProfilePage() {
    return (
        <>
            <TopBasicNav />

            <ProfileSection>
                <ProfileAreaCol>
                    <div className='profileTop'>
                        <div className='followers'>
                            <FollowLink to='#'>0</FollowLink>
                            <p>followers</p>
                        </div>
                        <div className='profileTopImg'>
                            <DefaultProfileImg />
                        </div>
                        <div className='followings'>
                            <FollowLink to='#'>0</FollowLink>
                            <p>followings</p>
                        </div>
                    </div>
                    <div className='profileMiddle'>
                        <ProfileName>애월읍 위니브 감귤농장</ProfileName>
                        <ProfileAccount>@ weniv_Mandarin</ProfileAccount>
                        <ProfileIntro>애월읍 감귤 전국 배송, 귤따기 체험, 감귤 농장</ProfileIntro>
                    </div>
                    <div className='profileBottom'>
                        <CircleBtns>
                            <img src={IconMesssageImg} alt='채팅링크' />
                        </CircleBtns>
                        <MBtn />
                        <CircleBtns>
                            <img src={IconShareImg} alt='공유링크' />
                        </CircleBtns>
                    </div>
                </ProfileAreaCol>
                {/* <ProductArea></ProductArea>
                <PostArea></PostArea> */}
            </ProfileSection>

            <TabMenu />
        </>
    )
}

export default YourProfilePage;