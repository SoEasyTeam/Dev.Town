import React from 'react'
import TabMenu from '../components/common/tabMenu'
import { TopMainNav } from '../components/common/nav'
import HomeNoFollower from '../components/home/HomeNoFollower'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { homeFeedAction } from '../redux/actions/homeFeedAction'
import HomeFeedBox from '../components/home/HomeFeed'

function HomePage() {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.homefeed.item);
    const localToken = useSelector(state => state.auth.token);
    const localAccountName = useSelector(state => state.auth.accountname)
    localStorage.setItem('token', localToken);
    localStorage.setItem('accountname', localAccountName);

    useEffect(() => {
        dispatch(homeFeedAction.homeFeed());
    }, [])

    return (
        <>
            <TopMainNav />
            {
                posts.length === 0 ? <HomeNoFollower /> : <HomeFeedBox />
            }
            <TabMenu />
        </>
    )
}

export default HomePage