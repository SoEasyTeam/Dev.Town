import { useState, React } from 'react';
import styled from 'styled-components';
import { TopBasicNav } from '../components/common/TopNav';
import TabMenu from '../components/common/TabMenu';
import UserProfile from '../components/profile/UserProfile'
import UserProduct from '../components/profile/UserProduct';
import UserPost from '../components/profile/UserPost';
import { AlertLogoutModal } from '../components/common/AlertModal'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

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

function MyProfilePage() {
    const [alertOn, setAlertOn] = useState(false);
    function alertOnModal() {
        setAlertOn(true);
    }
    
    function alertOffModal() {
        document.body.style.overflow = "unset";
        setAlertOn(false);
    }

    const token = useSelector(state => state.auth.token);
    const accountname = useSelector(state => state.auth.accountname);

    return (
        <>
            <TopBasicNav alertOnModal={alertOnModal} />
            <ProfileSection>
                <UserProfile token={token} accountname={accountname}/>
                <UserProduct token={token} accountname={accountname}/>
                <UserPost token={token} accountname={accountname}/>
            </ProfileSection>
            <TabMenu/>
            {alertOn === true ? <AlertLogoutModal alertOffModal={alertOffModal} /> : ''}
        </>
    )
}

export default MyProfilePage;