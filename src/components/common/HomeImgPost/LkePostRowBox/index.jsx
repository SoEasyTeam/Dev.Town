import { Link } from "react-router-dom";
import LikePostBox from "./index.style";
import IconHeartImg from '../../../../assets/icon/icon-heart.png';
import IconCommentImg from '../../../../assets/icon/icon-message-circle.png';

const LikePostRowBox = ({ heartCount, commentCount, postId }) => {
    return (
        <LikePostBox>
            <button className='like-btn'>
                <img className='heart-img' src={IconHeartImg} alt='하트버튼' />
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