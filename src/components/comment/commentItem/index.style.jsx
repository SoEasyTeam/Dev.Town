import { Link } from "react-router-dom";
import styled from "styled-components"

export const CommentItemLi = styled.li`
    display: flex;
    padding: 0 50px;
    margin-top: 20px;
    gap: 20px;
    .profile-img {
        width: 36px;
        margin-right: 10px;
    }
`

export const CommentorProfileImg = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 0.5px solid #DBDBDB;
`

export const CommentInfo = styled.div`
    gap: 6px;
    line-height: 20px;
`

export const CommentFrom = styled.b`
    font-size: 11px;
    margin-right: 20px;
`

export const CommentDate = styled.span`
    font-size: 10px;
    color: var(--subtitle-text);
`

export const DetailOptionsBtn = styled.img`
    width: 20px;
    position: absolute;
    right: 10px;
`

export const Comment = styled.p`
    font-size: 14px;
    line-height: 20px;
`

export const ProfileImgLink = styled(Link)`
    display: inherit;  
`
