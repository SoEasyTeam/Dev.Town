import React from 'react'
import TabMenu from '../components/common/TabMenu'
import { TopMainNav } from '../components/common/TopNav'
import HomeImgPost from '../components/common/HomeImgPost'
import HomePost from '../components/common/HomePost'
import styled from 'styled-components'
import { HomeNoFollower } from '../components/home/HomeNoFollower'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { homeFeedAction } from '../redux/actions/homeFeedAction'

function HomePage() {
    const token = useSelector(state => state.auth.token);
    const accountname = useSelector(state => state.auth.accountname);
    const dispatch = useDispatch();
    const posts = useSelector(state=>state.homefeed.item);
    console.log(posts);
    
    useEffect(() => {
        dispatch(homeFeedAction.homeFeed(token, accountname));
    },[])
    return (
        <>
            <TopMainNav />
            {
                posts.length === 0 ? <HomeNoFollower/> : <HomePost />
            } 
            <TabMenu />
        </>
    )
}

export default HomePage