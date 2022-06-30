import React from 'react';
import { ProfileLogoImg, NameIdBox, NickNameP, IdP } from './UserSearch';
import EllipseImg from '../../assets/Ellipse-1.png';
import styled from 'styled-components';
import { UserFollowBox } from './UserFollow';
import SettingImg from '../../assets/icon/s-icon-more-vertical.png';

const SettingBtn = styled.button`
    background-image: url(${SettingImg});
    width: 18px;
    height: 18px;
    position: absolute;
    right: 0px;
    top: 4px;
`;

const HomePostBox = styled.div`
    width: 358px;
    margin: 0 auto;
`;

const HomePostProfileBox = styled(UserFollowBox)`
    margin-bottom: 12px;
`;

const HomePostSmallBox = styled.div`
    margin-left: 54px;
`;

const HomePostParagraph = styled.p`
    margin-bottom: 16px;
    font-family: 'Spoqa Han Sans Neo';
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    text-align: left;
`;

const DateParagraph = styled.p`
    font-family: 'Spoqa Han Sans Neo';
    font-size: 10px;
    font-weight: 400;
    line-height: 12px;
    letter-spacing: 0em;
    text-align: left;
`;

const HomePost = () => {
    return (
        <>
            <HomePostBox>
                <HomePostProfileBox>
                    <ProfileLogoImg src={EllipseImg} alt='프로필로고' />
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
                    <DateParagraph>2020년 10월 21일</DateParagraph>
                </HomePostSmallBox>
            </HomePostBox>
        </>
    );
};

export default HomePost;
