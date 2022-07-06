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
} from './HomePost';
import IconCommentImg from '../../assets/post-img-example.png';

function HomeImgPost() {
    return (
        <>
            <HomePostBox>
                <HomePostProfileBox>
                    <HomePostProfileLogoImg src={EllipseImg} alt='프로필로고' />
                    <NameIdBox>
                        <NickNameP>애월읍 위니브 감귤농장</NickNameP>
                        <IdP>@ weniv_Mandarin</IdP>
                    </NameIdBox>
                    <SettingBtn />
                </HomePostProfileBox>
                <HomePostSmallBox>
                    <HomePostParagraph>
                        옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의
                        위하여, 뿐이다. 이상의 청춘의 뼈 따뜻한 그들의 그와
                        약동하다. 대고, 못할 넣는 풍부하게 뛰노는 인생의 힘있다.
                    </HomePostParagraph>
                    <img
                        className='post-img'
                        src={IconCommentImg}
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
