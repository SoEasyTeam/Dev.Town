import { useState } from 'react';
import { Link } from "react-router-dom";
import LikePostBox from "./index.style";
import IconEmptyHeartImg from '../../../../assets/icon/icon-heart.png';
import IconHeartImg from '../../../../assets/icon/icon-heart-active.png'
import IconCommentImg from '../../../../assets/icon/icon-message-circle.png';

const LikePostRowBox = ({ heartCount, commentCount, postId, hearted }) => {
    console.log('하트', hearted)
    console.log('하트수', heartCount)
    const [isHeart, setIsHeart] = useState(hearted);
    // const [isHeartCount, setIsHeartCount] = useState(heartCount);

    function handleHeartOn() {
        console.log('좋아요버튼 on');
        setIsHeart(true);
        // setIsHeartCount(heartCount);
    }

    function handleHeartOff() {
        console.log('좋아요버튼 off');
        setIsHeart(false);
        // setIsHeartCount(heartCount);
    }

    return (
        <LikePostBox>
            <button className='like-btn' onClick={isHeart ? handleHeartOff : handleHeartOn}>
                <img className='heart-img' src={isHeart ? IconHeartImg : IconEmptyHeartImg} alt='하트버튼' />
                <span className='likecount-span'>{heartCount}</span>
            </button>
            <Link className='comment-btn' to={`./post/${postId}`}>
                <img
                    className='comment-img'
                    src={IconCommentImg}
                    alt='댓글링크'
                />
                <span className='comment-span'>{commentCount}</span>
            </Link>
        </LikePostBox>
    );
};

export default LikePostRowBox