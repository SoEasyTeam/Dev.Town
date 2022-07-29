import { React, useState } from 'react';
import UserProfile from '../components/profile/userProfile'
import UserProduct from '../components/profile/userProduct';
import UserPost from '../components/profile/userPost';
import { TopBasicNav } from '../components/common/nav';
import TabMenu from '../components/common/TabMenu';
import { AlertLogoutModal } from '../components/common/alert'
import { ProfileSection } from '../components/profile/userProfile/index.style'

function MyProfilePage() {
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
                <UserProfile />
                <UserProduct />
                <UserPost />
            </ProfileSection>
            <TabMenu />
            {alertOn === true ? <AlertLogoutModal alertOffModal={alertOffModal} /> : ''}
        </>
    )
}

export default MyProfilePage;