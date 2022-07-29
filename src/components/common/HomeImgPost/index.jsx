import { React, useState } from 'react';
import { useSelector } from 'react-redux';
import { MyPostModal } from '../modal';
import LikePostRowBox from './likePostRowBox';
import { NameIdBox, IdP } from '../UserSearch';
import {SettingBtn, HomePostProfileNickName, HomePostProfileLogoImg,HomePostBox,HomePostProfileBox,HomePostSmallLink,HomePostParagraph,DateParagraph} from './index.style'


function HomeImgPost({ profileimg, nickname, id, postparagraph, postsrc, heartCount, commentCount, year, month, day, alertOnModal, postId }) {

    const post = useSelector(state=>state.getPost)
    // 모달창
    const [modalOn, setModalOn] = useState(false);

    function openModal() {
        setModalOn(true);
    }
    function closeModal() {
        document.body.style.overflow = "unset";
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
                <HomePostSmallLink to={`./post/${postId}`}>
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
                </HomePostSmallLink>
                <LikePostRowBox heartCount={heartCount} commentCount={commentCount} postId={postId} />
                <DateParagraph>{year}년 {month}월 {day}일</DateParagraph>
            </HomePostBox>
            {modalOn === true ? <MyPostModal openModal={openModal} closeModal={closeModal} alertOnModal={alertOnModal} id={id} /> : ''}

        </>
    );
}

export default HomeImgPost;
