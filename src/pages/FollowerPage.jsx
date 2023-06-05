import { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
import { TopFollowerNav } from '../components/common/nav'
import UserFollow from '../components/list/followList';
import { FollowBoxUl } from '../components/list/followList/index.style';

const FollowList = ({ userFollowerData }) => {
    return (
        <>
            {userFollowerData &&
                userFollowerData.map((follower) => {
                    return (
                        <div key={follower._id} >
                            <UserFollow
                                name={follower.username}
                                accountname={follower.accountname}
                                src={follower.image}
                                isfollow={follower.isfollow}
                            />
                        </div>
                    )
                })
            }
        </>
    )
}

function FollowerPage(props) {
    const token = sessionStorage.getItem('token');
    const [userFollowerData, setUserFollowerData] = useState('')

    const location = useLocation();
    const checkAccountName = () => {
        if (location.pathname.split("/")[1] === "follower") {
            const accountname = location.search.split("id=")[1];
            return accountname;
        }
    };
    const accountname = checkAccountName();

    const getData = async (account) => {
        const res = await fetch(`https://api.mandarin.weniv.co.kr/profile/${account}/follower`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-type": "application/json"
            }
        })
        const json = await res.json()
        setUserFollowerData(json)
    }

    useEffect(() => {
        if (props.accountname) {
            getData(props.accountname)
        }
        else {
            getData(accountname)
        }
    }, [])

    return (
        <>
            <TopFollowerNav />
            <FollowBoxUl>
                <FollowList userFollowerData={userFollowerData} />
            </FollowBoxUl>
        </>

    )
}

export default FollowerPage