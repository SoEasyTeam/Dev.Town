import React from 'react';
import styled from 'styled-components';
import { TopBasicNav } from '../components/common/TopNav';
import TabMenu from '../components/common/TabMenu';
import UserProfile from '../features/UserProfile';
import UserProduct from '../features/UserProduct';
import UserPost from '../features/UserPost';
import Modal from '../features/Modal';
import { useHistory } from 'react-router-dom';
import Dimmer from '../features/Dimmer';
import { useRef } from 'react';

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


function MyProfilePage({ onOpenModal }) {
    // const history = useHistory();
    // const outSection = useRef();
    return (
        <>
            <TopBasicNav />
            {/* <Dimmer onClick={() => history.replace('/myprofile')} /> */}
            <ProfileSection>
                <UserProfile />
                <UserProduct onOpenModal={onOpenModal} />
                <UserPost />
            </ProfileSection>
            <TabMenu />
        </>
    )
}

export default MyProfilePage;