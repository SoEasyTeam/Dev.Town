import React from 'react';
import { ProfileLogoImg, NameIdBox, NickNameP, IdP } from './UserSearch';
import EllipseImg from '../../assets/basic-profile-img.png';
import styled from 'styled-components';
import { UserFollowBox } from './UserFollow';
import SettingImg from '../../assets/icon/s-icon-more-vertical.png';
import { Link } from 'react-router-dom';
import IconHeartImg from '../../assets/icon/icon-heart.png';
import IconCommentImg from '../../assets/icon/icon-message-circle.png';

export const SettingBtn = styled.button`
    background-image: url(${SettingImg});
    width: 18px;
    height: 18px;
    position: absolute;
    right: 0px;
    top: 4px;
`;

export const HomePostProfileNickName = styled(NickNameP)`
    margin-bottom: 2px;
`

export const HomePostProfileLogoImg = styled(ProfileLogoImg)`
    width: 42px;
    height: 42px;
`

export const HomePostBox = styled.div`
    width: 358px;
    margin: 0 auto;
    padding-bottom: 4px;
`;

export const HomePostProfileBox = styled(UserFollowBox)`
    margin-bottom: 16px;
    width: 100%;
`;

export const HomePostSmallBox = styled.div`
    margin-left: 54px;
    .post-img {
        margin-bottom: 12px;
        width: 304px;
        border: 0.5px solid #DBDBDB;
        border-radius: 10px;
    }
`;

export const HomePostParagraph = styled.p`
    margin-bottom: 16px;
    font-family: 'Spoqa Han Sans Neo';
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    text-align: left;
`;

export const DateParagraph = styled.p`
    font-family: 'Spoqa Han Sans Neo';
    font-size: 10px;
    font-weight: 400;
    line-height: 12px;
    letter-spacing: 0em;
    text-align: left;
    margin-top: 16px;
    color: #767676;
`;

export const LikePostBox = styled.div`
    display: flex;
    gap: 22px;

    .like-btn {
        position: relative;
    }

    .heart-img {
        width: 20px;
        height: 20px;
        margin-right: 6px;
    }

    .likecount-span {
        position: absolute;
        font-family: 'Spoqa Han Sans Neo';
        font-size: 12px;
        font-weight: 400;
        line-height: 12px;
        text-align: left;
        color: #767676;
        top: 3px;
    }

    .comment-link {
        position: relative;
    }

    .comment-img {
        width: 20px;
        height: 20px;
        margin-right: 6px;
    }

    .comment-span {
        position: absolute;
        font-family: 'Spoqa Han Sans Neo';
        font-size: 12px;
        font-weight: 400;
        line-height: 12px;
        text-align: left;
        color: #767676;
        top: 3px;
    }
`;

export const LikePostRowBox = () => {
    return (
        <LikePostBox>
            <button className='like-btn'>
                <img className='heart-img' src={IconHeartImg} alt='하트버튼' />
                <span className='likecount-span'>58</span>
            </button>
            <Link to='#' className='comment-link'>
                <img
                    className='comment-img'
                    src={IconCommentImg}
                    alt='댓글링크'
                />
                <span className='comment-span'>12</span>
            </Link>
        </LikePostBox>
    );
};

const HomePost = () => {
    return (
        <>
            <HomePostBox>
                <HomePostProfileBox>
                    <HomePostProfileLogoImg src={EllipseImg} alt="프로필로고" />
                    <NameIdBox>
                        <HomePostProfileNickName>애월읍 위니브 감귤농장</HomePostProfileNickName>
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
                    <LikePostRowBox />
                    <DateParagraph>2020년 10월 21일</DateParagraph>
                </HomePostSmallBox>
            </HomePostBox>
        </>
    );
};

export default HomePost;
