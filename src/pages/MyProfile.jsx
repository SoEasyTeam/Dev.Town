import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { TopBasicNav } from '../components/common/TopNav';
import TabMenu from '../components/common/TabMenu';
import Product from '../components/common/Product';
import HomeImgPost from '../components/common/HomeImgPost';
import IconPostListOn from '../assets/icon/icon-post-list-on.png';
import IconPostAlbumOff from '../assets/icon/icon-post-album-off.png';
import UserProfile from '../features/UserProfile';

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

const ProductLink = styled(Link)`

`

const PostLink = styled(Link)`

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

function MyProfilePage() {
    return (
        <>
            <TopBasicNav />
            <ProfileSection>
                <UserProfile />
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

export default MyProfilePage;