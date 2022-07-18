import React from 'react'
import TabMenu from '../components/common/TabMenu'
import { TopMainNav } from '../components/common/TopNav'
import HomeImgPost from '../components/common/HomeImgPost'
import HomePost from '../components/common/HomePost'
import styled from 'styled-components'
import { HomeNoFollower } from '../components/home/HomeNoFollower'

function HomePage() {
    return (
        <>
            <TopMainNav />
            <HomeNoFollower/>
            <TabMenu />
        </>
    )
}

export default HomePage