import { useEffect } from "react"
import styled from "styled-components"
import { DefaultProfileImg } from "../common/ProfileButtons"
import moreBtn from '../../assets/icon/icon-more-vertical.png'

const CommentListSection = styled.section`

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px;
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
    src: ${moreBtn};
    width: 20px;
    margin-left: 140px;
`
const Comment = styled.p`
    font-size: 14px;
`

function CommentList(){

    useEffect(()=>{},)
    return (
        <CommentListSection>
            <div className="profile-img">
            <DefaultProfileImg/>
            </div>
            <div className="comment-box">
            <CommentInfo>
                <CommentFrom>서귀포시 농장 주인</CommentFrom>
                <CommentDate>2022.07.24</CommentDate>
                <DetailOptionsBtn src={moreBtn}/>
            </CommentInfo>
            <Comment>방가방가</Comment>
            </div>
        </CommentListSection>

    )
}

export default CommentList