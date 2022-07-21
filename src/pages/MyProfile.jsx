import React from 'react';
import styled from 'styled-components';
import { TopBasicNav } from '../components/common/TopNav';
import TabMenu from '../components/common/TabMenu';
import UserProfile from '../features/UserProfile';
import UserProduct from '../features/UserProduct';
import UserPost from '../features/UserPost';

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


function MyProfilePage({ setModalOn }) {
    return (
        <>
            <TopBasicNav />
            <ProfileSection>
                <UserProfile />
                <UserProduct setModalOn={setModalOn} />
                <UserPost />
            </ProfileSection>
            <TabMenu />
        </>
    )
}

export default MyProfilePage;