import { React, useState } from 'react';
import { useSelector } from 'react-redux';
import { MyPostModal } from '../modal';
import LikePostRowBox from './LkePostRowBox'
import { NameIdBox, IdP } from '../search/index.style';
import { SettingBtn, HomePostProfileNickName, HomePostProfileLogoImg, HomePostBox, HomePostProfileBox, HomePostSmallLink, HomePostParagraph, DateParagraph, HomePostProfileLink } from './index.style'


function HomeImgPost({ profileimg, nickname, id, postparagraph, postsrc, heartCount, hearted, commentCount, year, month, day, alertOnModal, postId }) {

    const post = useSelector(state => state.getPost)
    console.log('좋아요포스트', hearted)
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
                <HomePostProfileBox >
                    <HomePostProfileLink to={{ pathname: '/yourpage', search: `?id=${id}` }}>
                        <HomePostProfileLogoImg src={profileimg} alt='프로필로고' />
                        <NameIdBox>
                            <HomePostProfileNickName>
                                {nickname}
                            </HomePostProfileNickName>
                            <IdP>@ {id}</IdP>
                        </NameIdBox>
                    </HomePostProfileLink>
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
                <LikePostRowBox heartCount={heartCount} commentCount={commentCount} postId={postId} hearted={hearted} />
                <DateParagraph>{year}년 {month}월 {day}일</DateParagraph>
            </HomePostBox>
            {modalOn === true ? <MyPostModal openModal={openModal} closeModal={closeModal} alertOnModal={alertOnModal} id={id} /> : ''}

        </>
    );
}

export default HomeImgPost;
