import moreBtn from '../../../assets/icon/icon-more-vertical.png';
import { CommentItemLi, CommentorProfileImg, CommentInfo, CommentFrom, CommentDate, DetailOptionsBtn, Comment } from './index.style'

function CommentItem({ commentFrom, commentorImg, commentYear, commentMonth, commentDay, comment }) {
    return (
        <CommentItemLi>
            <div className="profile-img">
                <CommentorProfileImg src={commentorImg} />
            </div>
            <div className="comment-box">
                <CommentInfo>
                    <CommentFrom>{commentFrom}</CommentFrom>
                    <CommentDate>{commentYear}.{commentMonth}.{commentDay}</CommentDate>
                    <DetailOptionsBtn src={moreBtn} />
                </CommentInfo>
                <Comment>{comment}</Comment>
            </div>
        </CommentItemLi>
    )
}

export default CommentItem