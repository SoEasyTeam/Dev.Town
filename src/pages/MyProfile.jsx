import { React, useState, useEffect } from 'react';
import UserProfile from '@components/profile/userProfile';
import UserProduct from '@components/profile/userProduct';
import UserPost from '@components/profile/userPost';
import { TopBasicNav } from '@components/common/nav';
import TabMenu from '@components/common/tabMenu';
import { AlertLogoutModal } from '@components/common/alert';
import { ProfileSection } from '@components/profile/userProfile/index.style';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '@constants/defaultUrl';
//data 받아오기

function MyProfilePage(props) {
    const [alertOn, setAlertOn] = useState(false);

    function alertOnModal() {
        setAlertOn(true);
    }
    function alertOffModal() {
        document.body.style.overflow = 'unset';
        setAlertOn(false);
    }

    //data 받아오기
    const [userData, setUserData] = useState();
    const Myaccountname = sessionStorage.getItem('accountname');
    const token = sessionStorage.getItem('token');
    const navigate = useNavigate();

    const getData = async (account) => {
        if (account !== 'null' && account !== null) {
            const res = await fetch(`${API_URL}/profile/${account}`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-type': 'application/json',
                },
            });
            const json = await res.json();
            setUserData(json);
        } else {
            navigate('*');
        }
    };

    useEffect(() => {
        if (props.accountname) {
            getData(props.accountname);
        } else {
            getData(Myaccountname);
        }
    }, []);

    if (!userData) {
        return <></>;
    }

    return (
        <>
            <TopBasicNav alertOnModal={alertOnModal} />
            <ProfileSection>
                <UserProfile userData={userData} />
                <UserProduct />
                <UserPost />
            </ProfileSection>
            <TabMenu />
            {alertOn === true ? (
                <AlertLogoutModal alertOffModal={alertOffModal} />
            ) : (
                ''
            )}
        </>
    );
}

export default MyProfilePage;
