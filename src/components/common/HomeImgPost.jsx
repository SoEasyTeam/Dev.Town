import React from 'react';
import { ProfileLogoImg, NameIdBox, NickNameP, IdP } from './UserSearch';
import EllipseImg from '../../assets/basic-profile-img.png';
import styled from 'styled-components';
import {
    DateParagraph,
    HomePostBox,
    HomePostParagraph,
    HomePostProfileBox,
    HomePostSmallBox,
    LikePostRowBox,
    SettingBtn,
    HomePostProfileLogoImg,
    HomePostProfileNickName,
} from './HomePost';
import IconCommentImg from '../../assets/post-img-example.png';

function HomeImgPost({ profileimg, nickname, id, postparagraph, postsrc }) {
    return (
        <>
            <HomePostBox>
                <HomePostProfileBox>
                    <HomePostProfileLogoImg src={profileimg} alt='프로필로고' />
                    <NameIdBox>
                        <HomePostProfileNickName>
                            {nickname}
                        </HomePostProfileNickName>
                        <IdP>@ {id}</IdP>
                    </NameIdBox>
                    <SettingBtn />
                </HomePostProfileBox>
                <HomePostSmallBox>
                    <HomePostParagraph>
                        {postparagraph}
                    </HomePostParagraph>
                    <img
                        className='post-img'
                        src={postsrc}
                        alt='포스트이미지'
                    />
                    <LikePostRowBox />
                    <DateParagraph>2020년 10월 21일</DateParagraph>
                </HomePostSmallBox>
            </HomePostBox>
        </>
    );
}

export default HomeImgPost;
