import { useState } from 'react'
import { SettingBtn, HomePostProfileNickName, HomePostProfileLogoImg, HomePostBox, HomePostProfileBox, HomePostSmallBox, HomePostParagraph, DateParagraph, LikePostBox, HomePostProfileLink } from './index.style'
import { ProfileLogoImg, NameIdBox, NickNameP, IdP } from '../search/index.style'
import LikePostRowBox from '../HomeImgPost/LkePostRowBox'
import { MyPostModal } from '../modal';


function PostInDetail({
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
}) {
    // 모달창
    const [modalOn, setModalOn] = useState(false);

    function openModal() {
        setModalOn(true);
    }
    function closeModal() {
        document.body.style.overflow = 'unset';
        setModalOn(false);
    }

    return (
        <>
            <HomePostBox>
                <HomePostProfileBox>
                    <HomePostProfileLink to={{ pathname: '/yourpage', search: `?id=${id}` }}>
                        <HomePostProfileLogoImg
                            src={profileimg}
                            alt='프로필로고'
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
                <HomePostSmallBox>
                    <HomePostParagraph>{postparagraph}</HomePostParagraph>
                    {postsrc === '' ||
                        typeof postsrc === 'undefined' ? null : (
                        <img
                            className='post-img'
                            src={postsrc}
                            alt='포스트이미지'
                        />
                    )}
                </HomePostSmallBox>
                <LikePostRowBox
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

export default PostInDetail;