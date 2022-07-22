import { React, useState } from 'react';
import { NameIdBox, IdP } from './UserSearch';
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
import { MyPostModal } from './Modal';


function HomeImgPost({ profileimg, nickname, id, postparagraph, postsrc, heartCount, commentCount, year, month, day }) {
    console.log(postsrc);
    // console.log(heartCount, commentCount)

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
                    <LikePostRowBox heartCount={heartCount} commentCount={commentCount} />
                    <DateParagraph>{year}년 {month}월 {day}일</DateParagraph>
                </HomePostSmallBox>
            </HomePostBox>
            {modalOn === true ? <MyPostModal openModal={openModal} closeModal={closeModal} /> : ''}
        </>
    );
}

export default HomeImgPost;
