import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { TopFollowingNav } from '@components/common/nav';
import UserFollow from '@components/list/followList';
import { FollowBoxUl } from '@components/list/followList/index.style';
import { API_URL } from '@constants/defaultUrl';

const FollowingList = ({ userFollowingData }) => {
    return (
        <>
            {userFollowingData &&
                userFollowingData.map((following) => {
                    return (
                        <div key={following._id}>
                            <UserFollow
                                name={following.username}
                                accountname={following.accountname}
                                src={following.image}
                                isfollow={following.isfollow}
                            />
                        </div>
                    );
                })}
        </>
    );
};

function FollowingPage(props) {
    const token = sessionStorage.getItem('token');
    const [userFollowingData, setUserFollowingData] = useState('');

    const location = useLocation();
    const checkAccountName = () => {
        if (location.pathname.split('/')[1] === 'following') {
            const accountname = location.search.split('id=')[1];
            return accountname;
        }
    };
    const accountname = checkAccountName();

    const getData = async (account) => {
        const res = await fetch(`${API_URL}/profile/${account}/following`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-type': 'application/json',
            },
        });
        const json = await res.json();
        setUserFollowingData(json);
    };

    useEffect(() => {
        if (props.accountname) {
            getData(props.accountname);
        } else {
            getData(accountname);
        }
    }, []);

    return (
        <>
            <TopFollowingNav />
            <FollowBoxUl>
                <FollowingList userFollowingData={userFollowingData} />
            </FollowBoxUl>
        </>
    );
}

export default FollowingPage;
