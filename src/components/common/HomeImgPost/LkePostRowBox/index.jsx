import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import LikePostBox from "./index.style";
import IconEmptyHeartImg from '../../../../assets/icon/icon-heart.png';
import IconHeartImg from '../../../../assets/icon/icon-heart-active.png'
import IconCommentImg from '../../../../assets/icon/icon-message-circle.png';

const LikePostRowBox = ({ heartCount, commentCount, postId, hearted }) => {
    const token = sessionStorage.getItem('token');
    const [isHeart, setIsHeart] = useState('');
    const [newHeartCount, setNewHeartCount] = useState('');

    useEffect(() => {
        setNewHeartCount(heartCount);
        setIsHeart(hearted);
    }, []);

    const handleHeartOn = async () => {
        if (isHeart) {
            const res = await fetch(`https://mandarin.api.weniv.co.kr/post/${postId}/unheart`, {
                method: "delete",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-type": "application/json"
                }
            })
            const json = await res.json()
            setIsHeart(false);
            setNewHeartCount(json.post.heartCount);
        } else {
            const res = await fetch(`https://mandarin.api.weniv.co.kr/post/${postId}/heart`, {
                method: "post",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-type": "application/json"
                }
            })
            const json = await res.json()
            setIsHeart(true);
            setNewHeartCount(json.post.heartCount);
        }
    }

    return (
        <LikePostBox>
            <button className='like-btn' onClick={handleHeartOn}>
                <img className='heart-img' src={isHeart ? IconHeartImg : IconEmptyHeartImg} alt='하트버튼' />
                <span className='likecount-span'>{newHeartCount}</span>
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