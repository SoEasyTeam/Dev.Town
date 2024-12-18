import React from 'react';
import { MlBtn } from '@components/common/button/index.style.jsx';
import {
    NoFollowerImg,
    NoFollowerMainBox,
    SearchUserParagraph,
} from '@components/home/HomeNoFollower/index.style';
import BasicProfileImg from '@public/assets/images/basic-profile-img.png';

const HomeNoFollower = () => {
    return (
        <>
            <NoFollowerMainBox>
                <NoFollowerImg src={BasicProfileImg} />
                <SearchUserParagraph>
                    유저를 검색해 팔로우 해보세요!
                </SearchUserParagraph>
                <MlBtn to='/search'>검색하기</MlBtn>
            </NoFollowerMainBox>
        </>
    );
};

export default HomeNoFollower;
