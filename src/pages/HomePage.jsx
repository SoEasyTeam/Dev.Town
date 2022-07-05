import React from 'react'
import TabMenu from '../components/common/TabMenu'
import { TopMainNav } from '../components/common/TopNav'
import HomeImgPost from '../components/common/HomeImgPost'
import HomePost from '../components/common/HomePost'
import styled from 'styled-components'

function HomePage() {
    return (
        <>
            <TopMainNav />
            <HomeImgPost />
            <HomeImgPost />
            <HomeImgPost />
            <HomeImgPost />
            <HomePost />
            <TabMenu />
        </>
    )
}

export default HomePage