import { React, useState } from 'react';
import { useSelector } from 'react-redux';
import { MyPostModal } from '@components/common/modal';
import LikePostRowBox from '@components/common/HomeImgPost/LkePostRowBox';
import { NameIdBox, IdP } from '@components/common/search/index.style';
import {
    SettingBtn,
    HomePostProfileNickName,
    HomePostProfileLogoImg,
    HomePostBox,
    HomePostProfileBox,
    HomePostSmallLink,
    HomePostParagraph,
    DateParagraph,
    HomePostProfileLink,
} from '@components/common/HomeImgPost/index.style';
import DefaultProfileImg from '@public/assets/icon/icon-user.svg';
import DefaultPostImg from '@public/assets/images/404.svg';

const defaultImgTypeObject = {
    profile: DefaultProfileImg,
    post: DefaultPostImg,
};

function HomeImgPost({
    profileimg,
    nickname,
    id,
    postparagraph,
    postsrc,
    heartCount,
    hearted,
    commentCount,
    year,
    month,
    day,
    alertOnModal,
    postId,
    userPostData,
}) {
    const post = useSelector((state) => state.getPost);

    // 모달창
    const [modalOn, setModalOn] = useState(false);

    function openModal() {
        setModalOn(true);
    }

    function closeModal() {
        document.body.style.overflow = 'unset';
        setModalOn(false);
    }

    const onErrorImg = (defaultImgType) => (e) => {
        e.target.src = defaultImgTypeObject[defaultImgType];
    };

    return (
        <>
            <HomePostBox>
                <HomePostProfileBox>
                    <HomePostProfileLink
                        to={{ pathname: '/yourpage', search: `?id=${id}` }}
                    >
                        <HomePostProfileLogoImg
                            src={profileimg}
                            alt='프로필로고'
                            onError={onErrorImg('profile')}
                        />
                        <NameIdBox>
                            <HomePostProfileNickName>
                                {nickname}
                            </HomePostProfileNickName>
                            <IdP>@ {id}</IdP>
                        </NameIdBox>
                    </HomePostProfileLink>
                    <SettingBtn onClick={openModal} />
                </HomePostProfileBox>
                <HomePostSmallLink to={`/post/${postId}`}>
                    <HomePostParagraph>{postparagraph}</HomePostParagraph>
                    {postsrc === '' || typeof postsrc === 'undefined' ? null : (
                        <img
                            className='post-img'
                            src={postsrc}
                            onError={onErrorImg('post')}
                            alt='포스트이미지'
                        />
                    )}
                </HomePostSmallLink>
                <LikePostRowBox
                    userPostData={userPostData}
                    heartCount={heartCount}
                    commentCount={commentCount}
                    postId={postId}
                    hearted={hearted}
                />
                <DateParagraph>
                    {year}년 {month}월 {day}일
                </DateParagraph>
            </HomePostBox>
            {modalOn === true ? (
                <MyPostModal
                    openModal={openModal}
                    closeModal={closeModal}
                    alertOnModal={alertOnModal}
                    id={id}
                />
            ) : (
                ''
            )}
        </>
    );
}

export default HomeImgPost;
