import { useEffect } from "react"
import styled from "styled-components"
import { DefaultProfileImg } from "../common/ProfileButtons"
import moreBtn from '../../assets/icon/icon-more-vertical.png'
import { useDispatch, useSelector} from "react-redux"

const CommentItemLi = styled.li`

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 50px;
    margin: 10px 0;
    gap: 20px;
    .profile-img {
        width: 36px;
    }
`

const CommentInfo = styled.div`
    gap: 6px;
    line-height: 40px;
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
    margin-left: 140px;
`
const Comment = styled.p`
    font-size: 14px;
`

function CommentItem({CommentFrom, CommentDate, Comment}){
    // const commentList = useSelector(state=>state.commentList.comments)

    return (
        <CommentItemLi>
            <div className="profile-img">
                <DefaultProfileImg/>
            </div>
            <div className="comment-box">
                <CommentInfo>
                    <CommentFrom>{CommentFrom}</CommentFrom>
                    <CommentDate>{CommentDate}</CommentDate>
                    <DetailOptionsBtn src={moreBtn}/>
                </CommentInfo>
                <Comment>{Comment}</Comment>
            </div>
        </CommentItemLi>
    )
}

export default CommentItem