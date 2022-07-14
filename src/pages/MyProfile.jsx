import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { TopBasicNav } from '../components/common/TopNav';
import TabMenu from '../components/common/TabMenu';
import HomeImgPost from '../components/common/HomeImgPost';
import IconPostListOn from '../assets/icon/icon-post-list-on.png';
import IconPostAlbumOff from '../assets/icon/icon-post-album-off.png';
import UserProfile from '../features/UserProfile';
import UserProduct from '../features/UserProduct';

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

const PostLink = styled(Link)`

`

const PostShowBtns = styled.button`
    width: 26px;
    height: 26px;
    margin-right: 16px;
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
const PostAreaListUl = styled.ul`
    list-style: none;
    li {
        margin: 16px 0;
    }
`
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
                <UserProduct />
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