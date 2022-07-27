import { useState, React } from 'react';
import styled from 'styled-components';
import { TopBasicNav } from '../components/common/TopNav';
import TabMenu from '../components/common/TabMenu';
import OtherProfile from '../components/profile/OtherProfile'
import UserProduct from '../components/profile/UserProduct';
import UserPost from '../components/profile/UserPost';
import { AlertLogoutModal } from '../components/common/AlertModal'
import { useEffect } from 'react';

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


function YourProfilePage() {
    const [alertOn, setAlertOn] = useState(false);
    function alertOnModal() {
        setAlertOn(true);
    }
    function alertOffModal() {
        document.body.style.overflow = "unset";
        setAlertOn(false);
    }

    return (
        <>
            <TopBasicNav alertOnModal={alertOnModal} />
            <ProfileSection>
                <OtherProfile />
                <UserProduct />
                <UserPost />
            </ProfileSection>
            <TabMenu />
            {alertOn === true ? <AlertLogoutModal alertOffModal={alertOffModal} /> : ''}
        </>
    )
}

export default YourProfilePage;