import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { TopBasicNav } from '../components/common/TopNav'
import TabMenu from '../components/common/TabMenu';
import { MBtn } from '../components/common/Buttons'
import { DefaultProfileImg } from '../components/common/ProfileButtons'
import IconMesssageImg from '../assets/icon/icon-message-circle.png'
import IconShareImg from '../assets/icon/icon-share.png'
import Product from '../components/common/Product';
import IconPostListOn from '../assets/icon/icon-post-list-on.png'
import IconPostAlbumOff from '../assets/icon/icon-post-album-off.png'
import HomeImgPost from '../components/common/HomeImgPost';

const ProfileSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    font-family: 'Spoqa Han Sans Neo';
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

const FollowLink = styled(Link)`
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
`

const ProductLink = styled(Link)`

`

const PostLink = styled(Link)`

`

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

const PostShowBtns = styled.button`
    width: 26px;
    height: 26px;
    margin-right: 16px;
`

const ProductAreaListUl = styled.ul`
    list-style: none;
    margin-left: 16px;
    /* white-space: nowrap;
    overflow-x: scroll;
    overflow-y: hidden; */
    li {
        float:left;
        margin-right: 10px;
        margin-bottom: 19.5px;
    }
`

const PostAreaListUl = styled.ul`
    list-style: none;
    /* white-space: nowrap;
    overflow-x: scroll;
    overflow-y: hidden; */
    li {
        margin: 16px 0;
    }
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
        gap: 10px;
        margin: 24px auto 25.5px;
    }
`

const ProductArea = styled.article`
    width: 100vw;
    border-bottom: 0.5px solid #DBDBDB;
    border-top: 0.5px solid #DBDBDB;
    background: #FFFFFF;
    margin-bottom: 6px;
    .productAreaTitle {
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;
        margin: 19.5px 0 16px 16px;
    }
`

const PostArea = styled.article`
    width: 100vw;
    border-top: 0.5px solid #DBDBDB;
    background: #FFFFFF;
    img {
        width: 26px;
    }
    .postAreaTop {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        border-bottom: 0.5px solid #DBDBDB;
        height: 43px
    }

`

function ProductAreaList() {
    return (
        <li>
            <ProductLink to="#">
                <Product />
            </ProductLink>
        </li>
    )
}

function PostAreaList() {
    return (
        <li>
            <PostLink to="#">
                <HomeImgPost />
            </PostLink>
        </li>
    )
}

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
                <ProductArea>
                    <h3 className='productAreaTitle'>판매 중인 상품</h3>
                    <ProductAreaListUl>
                        <ProductAreaList />
                        <ProductAreaList />
                        <ProductAreaList />
                        <ProductAreaList />
                    </ProductAreaListUl>
                </ProductArea>
                <PostArea>
                    <div className='postAreaTop'>
                        <PostShowBtns>
                            <img src={IconPostListOn} alt='포스트리스트형식' />
                        </PostShowBtns>
                        <PostShowBtns>
                            <img src={IconPostAlbumOff} alt='포스트앨범형식' />
                        </PostShowBtns>
                    </div>
                    <PostAreaListUl>
                        <PostAreaList />
                    </PostAreaListUl>
                </PostArea>
            </ProfileSection>
            <TabMenu />
        </>
    )
}

export default YourProfilePage;