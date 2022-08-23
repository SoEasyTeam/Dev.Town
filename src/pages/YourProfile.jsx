import { React, useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import UserProfile from '../components/profile/userProfile'
import UserProduct from '../components/profile/userProduct';
import UserPost from '../components/profile/userPost';
import { TopBasicNav } from '../components/common/nav';
import TabMenu from '../components/common/tabMenu';
import { AlertLogoutModal } from '../components/common/alert'
import { ProfileSection } from '../components/profile/userProfile/index.style';

function YourProfilePage(props) {
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

    //data 받아오기
    const [userData, setUserData] = useState();
    const token = sessionStorage.getItem('token');

    const getData = async (account) => {
        const res = await fetch(`https://mandarin.api.weniv.co.kr/profile/${account}`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-type": "application/json"
            }
        })
        const json = await res.json()
        setUserData(json)
    }

    useEffect(() => {
        if (props.accountname) {
            getData(props.accountname)
        }
        else {
            getData(accountname)
        }
    }, [])

    if (!userData) {
        return <></>
    }

    return (
        <>
            <TopBasicNav alertOnModal={alertOnModal} />
            <ProfileSection>
                <UserProfile userData={userData} />
                <UserProduct accountname={accountname} />
                <UserPost accountname={accountname} />
            </ProfileSection>
            <TabMenu />
            {alertOn === true ? <AlertLogoutModal alertOffModal={alertOffModal} /> : ''}
        </>
    )
}

export default YourProfilePage;