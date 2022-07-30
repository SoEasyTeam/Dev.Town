import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
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

function FollowerPage() {
    const token = useSelector(state => state.auth.token);
    const accountname = useSelector(state => state.auth.accountname);
    const [userFollowerData, setUserFollowerData] = useState('')
    const getData = async () => {
        const res = await fetch(`https://mandarin.api.weniv.co.kr/profile/${accountname}/follower`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-type": "application/json"
            }
        })
        const json = await res.json()
        console.log('팔로워 : ', json)
        setUserFollowerData(json)
    }

    useEffect(() => {
        getData()
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