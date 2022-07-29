import React from 'react'
import { MlBtn } from '../../common/button/index.style.jsx';
import { NoFollowerImg, NoFollowerMainBox, SearchUserParagraph } from './index.style';
import BasicProfileImg from '../../../assets/basic-profile-img.png'

const HomeNoFollower = () => {
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

export default HomeNoFollower;