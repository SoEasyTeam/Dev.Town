import React from 'react'
import TabMenu from '../components/common/TabMenu'
import { TopMainNav } from '../components/common/TopNav'
import HomeImgPost from '../components/common/HomeImgPost'
import HomePost from '../components/common/HomePost'
import styled from 'styled-components'
import { HomeNoFollower } from '../components/home/HomeNoFollower'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function HomePage() {
    const token = useSelector(state => state.auth.token);
    const dispatch = useDispatch();
    useEffect(() => {
    },[])
    return (
        <>
            <TopMainNav />
            <HomeNoFollower/>
            <TabMenu />
        </>
    )
}

export default HomePage