import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import BasicProfileImg from '../../assets/basic-profile-img.png'
import { MlBtn } from '../common/Buttons'

const NoFollowerMainBox = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    padding-top: 220px;
`

const NoFollowerImg = styled.img`
    width: 100px;
    height: 100px;
`

const SearchUserParagraph = styled.p`
    font-family: 'Spoqa Han Sans Neo';
    font-size: 14px;
    font-weight: 400;
    line-height: 14px;
    text-align: center;
`

export const HomeNoFollower = () => {
    return (
        <>
            <NoFollowerMainBox>
                <NoFollowerImg src={BasicProfileImg}/>
                <SearchUserParagraph>유저를 검색해 팔로우 해보세요!</SearchUserParagraph>
                <MlBtn to='#'>검색하기</MlBtn>
            </NoFollowerMainBox>
        </>
    )
}
