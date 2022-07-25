import { React, useState } from 'react';
import { useSelector } from 'react-redux';
import { ProfileLogoImg, NameIdBox, NickNameP, IdP } from './UserSearch';
import styled from 'styled-components';
import { UserFollowBox } from './UserFollow';
import SettingImg from '../../assets/icon/s-icon-more-vertical.png';
import IconHeartImg from '../../assets/icon/icon-heart.png';
import IconCommentImg from '../../assets/icon/icon-message-circle.png';
import { MyPostModal } from './Modal';


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
`;

export const HomePostProfileLogoImg = styled(ProfileLogoImg)`
    width: 42px;
    height: 42px;
`;

export const HomePostBox = styled.div`
    display: block;
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
        border: 0.5px solid #dbdbdb;
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
    margin-left: 54px;
    color: #767676;
`;

export const LikePostBox = styled.div`
    display: flex;
    gap: 22px;
    margin-left: 54px;
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
        text-align: left;
        color: #767676;
        top: 3px;
    }
    .comment-btn {
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
        text-align: left;
        color: #767676;
        top: 3px;
    }
`;

export const LikePostRowBox = ({ heartCount, commentCount }) => {
    return (
        <LikePostBox>
            <button className='like-btn'>
                <img className='heart-img' src={IconHeartImg} alt='하트버튼' />
                <span className='likecount-span'>{heartCount}</span>
            </button>
            <button className='comment-btn'>
                <img
                    className='comment-img'
                    src={IconCommentImg}
                    alt='댓글링크'
                />
                <span className='comment-span'>{commentCount}</span>
            </button>
        </LikePostBox>
    );
};

function HomeImgPost({ profileimg, nickname, id, postparagraph, postsrc, heartCount, commentCount, year, month, day, alertOnModal }) {
    // 모달창
    const [modalOn, setModalOn] = useState(false);
    function openModal() {
        setModalOn(true);

    }
    function closeModal() {
        setModalOn(false);
    }

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
                    <SettingBtn onClick={openModal} />
                </HomePostProfileBox>
                <HomePostSmallBox>
                    <HomePostParagraph>
                        {postparagraph}
                    </HomePostParagraph>
                    {
                        postsrc === '' || typeof (postsrc) === 'undefined' ? null :
                            <img
                                className='post-img'
                                src={postsrc}
                                alt='포스트이미지'
                            />
                    }
                </HomePostSmallBox>
                <LikePostRowBox heartCount={heartCount} commentCount={commentCount} />
                <DateParagraph>{year}년 {month}월 {day}일</DateParagraph>
            </HomePostBox>
            {modalOn === true ? <MyPostModal openModal={openModal} closeModal={closeModal} alertOnModal={alertOnModal} id={id} /> : ''}
        </>
    );
}

export default HomeImgPost;
