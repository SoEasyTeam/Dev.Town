import { React, useState } from 'react';
import { useLocation } from "react-router-dom";
import UserProfile from '../components/profile/userProfile'
import UserProduct from '../components/profile/userProduct';
import UserPost from '../components/profile/userPost';
import { TopBasicNav } from '../components/common/nav';
import TabMenu from '../components/common/tabMenu';
import { AlertLogoutModal } from '../components/common/alert'
import { ProfileSection } from '../components/profile/userProfile/index.style';

function YourProfilePage() {
    const [alertOn, setAlertOn] = useState(false);
    function alertOnModal() {
        setAlertOn(true);
    }
    function alertOffModal() {
        document.body.style.overflow = "unset";
        setAlertOn(false);
    }
    const location = useLocation();
    const checkAccountName = () => {
        if (location.pathname.split("/")[1] === "yourpage") {
            const accountname = location.search.split("id=")[1];
            return accountname;
        }
    };

    const accountname = checkAccountName();

    return (
        <>
            <TopBasicNav alertOnModal={alertOnModal} />
            <ProfileSection>
                <UserProfile accountname={accountname} />
                <UserProduct accountname={accountname} />
                <UserPost productaccountname={accountname} />
            </ProfileSection>
            <TabMenu />
            {alertOn === true ? <AlertLogoutModal alertOffModal={alertOffModal} /> : ''}
        </>
    )
}

export default YourProfilePage;