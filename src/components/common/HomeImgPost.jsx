import React from 'react';
import { NameIdBox, IdP } from './UserSearch';
import {
    DateParagraph,
    HomePostLink,
    HomePostParagraph,
    HomePostProfileBox,
    HomePostSmallBox,
    LikePostRowBox,
    SettingBtn,
    HomePostProfileLogoImg,
    HomePostProfileNickName,
} from './HomePost';

function HomeImgPost({ profileimg, nickname, id, postparagraph, postsrc, heartCount, commentCount, year, month, day }) {
    console.log(heartCount, commentCount)
    return (
        <>
            <HomePostLink>
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
                    <LikePostRowBox heartCount={heartCount} commentCount={commentCount} />
                    <DateParagraph>{year}년 {month}월 {day}일</DateParagraph>
                </HomePostSmallBox>
            </HomePostLink>
        </>
    );
}

export default HomeImgPost;
