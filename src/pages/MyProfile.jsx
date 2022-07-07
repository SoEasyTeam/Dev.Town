import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { TopBasicNav } from '../components/common/TopNav';
import { MBtn } from '../components/common/Buttons';
import { DefaultProfileImg } from '../components/common/ProfileButtons';
import TabMenu from '../components/common/TabMenu';
import Product from '../components/common/Product';
import HomeImgPost from '../components/common/HomeImgPost';
import IconPostListOn from '../assets/icon/icon-post-list-on.png';
import IconPostAlbumOff from '../assets/icon/icon-post-album-off.png';

const ProfileSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 0 auto;
    font-family: 'Spoqa Han Sans Neo';
    background-color: #F2F2F2;
    min-height: 892px;
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

const MyProfileEditBtn = styled(MBtn)`
    background-color: var(--bg-color);
`

const MyProfileProductBtn = styled(MBtn)`
    background-color: var(--bg-color);
`

const PostShowBtns = styled.button`
    width: 26px;
    height: 26px;
    margin-right: 16px;
`

const ProductAreaListUl = styled.ul`
    list-style: none;
    margin-left: 16px;
    height: 152px;
    display: flex;
    white-space: nowrap;
    overflow-x: auto;
    li {
        float:left;
        margin-right: 16px;
        margin-bottom: 19.5px;
    }
`

const PostAreaListUl = styled.ul`
    list-style: none;
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
        gap: 12px;
        margin: 24px auto 25.5px;
    }
`

const ProductArea = styled.article`
    width: 100vw;
    border-bottom: 0.5px solid #DBDBDB;
    border-top: 0.5px solid #DBDBDB;
    background: #FFFFFF;
    margin-bottom: 6px;
    .productAreaDiv {
        max-width: 640px;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
    }
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
    .postBtnImg {
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
                        <MyProfileEditBtn>프로필 수정</MyProfileEditBtn>
                        <MyProfileProductBtn>상품 등록</MyProfileProductBtn>
                    </div>
                </ProfileAreaCol>
                <ProductArea>
                    <div className='productAreaDiv'>
                        <h3 className='productAreaTitle'>판매 중인 상품</h3>
                        <ProductAreaListUl>
                            <ProductAreaList />
                            <ProductAreaList />
                            <ProductAreaList />
                            <ProductAreaList />
                        </ProductAreaListUl>
                    </div>
                </ProductArea>
                <PostArea>
                    <div className='postAreaTop'>
                        <PostShowBtns>
                            <img className='postBtnImg' src={IconPostListOn} alt='포스트리스트형식' />
                        </PostShowBtns>
                        <PostShowBtns>
                            <img className='postBtnImg' src={IconPostAlbumOff} alt='포스트앨범형식' />
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