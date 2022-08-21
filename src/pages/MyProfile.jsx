import { React, useState } from 'react';
import UserProfile from '../components/profile/userProfile'
import UserProduct from '../components/profile/userProduct';
import UserPost from '../components/profile/userPost';
import { TopBasicNav } from '../components/common/nav';
import TabMenu from '../components/common/tabMenu';
import { AlertLogoutModal } from '../components/common/alert'
import { ProfileSection } from '../components/profile/userProfile/index.style'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function MyProfilePage() {
    const [alertOn, setAlertOn] = useState(false);
    const localTokenValid = useSelector(state=>state.token.tokenValid);
    const history = useHistory();
    console.log(localTokenValid)
    function alertOnModal() {
        setAlertOn(true);
    }
    function alertOffModal() {
        document.body.style.overflow = "unset";
        setAlertOn(false);
    }

    useEffect(() => {
        if(localTokenValid.isValid === null || localTokenValid.isValid === 'null'){
            history.push('*')
        }
    },[localTokenValid, history])

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