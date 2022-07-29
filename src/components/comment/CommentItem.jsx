import { useEffect } from "react"
import styled from "styled-components"
import { DefaultProfileImg } from "../common/button"
import moreBtn from '../../assets/icon/icon-more-vertical.png'
import { useDispatch, useSelector } from "react-redux"

const CommentItemLi = styled.li`
    display: flex;
    padding: 0 50px;
    margin: 20px 0;
    gap: 20px;
    .profile-img {
        width: 36px;
        margin-right: 10px;
    }
`
const CommentorProfileImg = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`
const CommentInfo = styled.div`
    gap: 6px;
    line-height: 20px;
`

const CommentFrom = styled.b`
    font-size: 11px;
    margin-right: 20px;
`
const CommentDate = styled.span`
    font-size: 10px;
    color: var(--subtitle-text);
`

const DetailOptionsBtn = styled.img`
    width: 20px;
    position: absolute;
    right: 10px;
`
const Comment = styled.p`
    font-size: 14px;
    line-height: 20px;
`

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