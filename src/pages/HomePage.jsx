import React from 'react'
import TabMenu from '../components/common/TabMenu'
import { TopMainNav } from '../components/common/TopNav'
import HomeNoFollower from '../components/home/HomeNoFollower'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { homeFeedAction } from '../redux/actions/homeFeedAction'
import HomeFeedBox from '../components/home/HomeFeed'

function HomePage() {
    const dispatch = useDispatch();
    const posts = useSelector(state=>state.homefeed.item);

    useEffect(() => {
        dispatch(homeFeedAction.homeFeed());
    },[])

    return (
        <>
            <TopMainNav />
            {
                posts.length === 0 ? <HomeNoFollower/> : <HomeFeedBox />
            } 
            <TabMenu />
        </>
    )
}

export default HomePage