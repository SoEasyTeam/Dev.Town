import { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import IconFillImg from '../../assets/upload-file.png'
import { DefaultProfileImg } from '../common/ProfileButtons';

import {commentListAction} from '../../redux/actions/commentListAction'

const CommentBox = styled.form`
    width: 100%;
    height: 61px;
    display: flex;
    position: absolute;
    bottom: 0;
    border: 0.5px solid #dbdbdb;
`;
const ProfileImgBox = styled.div`
    min-width: 36px;
    margin: 12px;
`;

const CommentInput = styled.input`
    flex-grow: 1;
    border: none;
    padding: 0 20px;
`;

const CommentSubmitBtn = styled.button`
    min-width: 60px;
    padding: 5px;
`;

export default function CommentInputBox() {
    const dispatch = useDispatch()
    const token = useSelector(state => state.auth.token);
    const { id } = useParams();
    const postViewId = useSelector(state => state.homefeed.item).map((i) => i.id);
    const postId = postViewId.filter(i => i === id);
    const [comment, setComment]=useState('')


    const handleOnSubmit = (e) =>{
        e.preventDefault()
        dispatch(commentListAction.writeComment(postId,token, comment))
        dispatch(commentListAction.commentList(postId,token))
    }

    const handleOnChange = (e)=>{
        setComment(e.target.value)
    }

    // const resetInput = (e)=>{
    //     setComment(e.target.value = '')
    // }
    return (
        <CommentBox onSubmit={handleOnSubmit}>
            <ProfileImgBox>
                <DefaultProfileImg />
            </ProfileImgBox>
            <CommentInput placeholder='댓글 입력하기...' required onChange={handleOnChange} value={comment}/>
            <CommentSubmitBtn>게시</CommentSubmitBtn>
        </CommentBox>
    );
}
