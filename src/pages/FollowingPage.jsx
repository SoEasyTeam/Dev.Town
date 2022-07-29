import { useEffect, useState } from 'react'
import { TopFollowingNav } from '../components/common/nav'
import { useSelector } from 'react-redux';
import UserFollow from '../components/common/UserFollow';
import { FollowBoxUl } from '../components/list/followList/Follow.style';

const FollowingList = ({ userFollowingData }) => {
    return (
        <>
            {userFollowingData &&
                userFollowingData.map((following) => {
                    return (
                        <div key={following._id} >
                            <UserFollow
                                name={following.username}
                                accountname={following.accountname}
                                src={following.image}
                                isfollow={following.isfollow}
                            />
                        </div>
                    )
                })
            }
        </>
    )
}

function FollowingPage() {
    const token = useSelector(state => state.auth.token);
    const accountname = useSelector(state => state.auth.accountname);
    const [userFollowingData, setUserFollowingData] = useState('')
    const getData = async () => {
        const res = await fetch(`https://mandarin.api.weniv.co.kr/profile/${accountname}/following`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-type": "application/json"
            }
        })
        const json = await res.json()
        console.log('팔로워 : ', json)
        setUserFollowingData(json)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <TopFollowingNav />
            <FollowBoxUl>
                <FollowingList userFollowingData={userFollowingData} />
            </FollowBoxUl>
        </>

    )
}

export default FollowingPage