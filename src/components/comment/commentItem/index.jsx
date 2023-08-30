import moreBtn from '@public/assets/icon/icon-more-vertical.png';
import { React, useState } from 'react';
import { YourPostModal } from '@components/common/modal';
import {
    CommentItemLi,
    CommentorProfileImg,
    CommentInfo,
    CommentFrom,
    CommentDate,
    DetailOptionsBtn,
    Comment,
    ProfileImgLink,
} from '@components/comment/commentItem/index.style';

function CommentItem({
    commentFrom,
    commentorImg,
    commentYear,
    commentMonth,
    commentDay,
    comment,
    alertOnModal,
    id,
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
            <CommentItemLi>
                <ProfileImgLink
                    to={{ pathname: '/yourpage', search: `?id=${id}` }}
                >
                    <CommentorProfileImg src={commentorImg} />
                </ProfileImgLink>
                <div className='comment-box'>
                    <CommentInfo>
                        <CommentFrom>{commentFrom}</CommentFrom>
                        <CommentDate>
                            {commentYear}.{commentMonth}.{commentDay}
                        </CommentDate>
                        <DetailOptionsBtn src={moreBtn} onClick={openModal} />
                    </CommentInfo>
                    <Comment>{comment}</Comment>
                </div>
            </CommentItemLi>
            {modalOn === true ? (
                <YourPostModal
                    openModal={openModal}
                    closeModal={closeModal}
                    alertOnModal={alertOnModal}
                />
            ) : (
                ''
            )}
        </>
    );
}

export default CommentItem;
