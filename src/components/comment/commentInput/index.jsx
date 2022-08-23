import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { commentListAction } from '../../../redux/actions/commentListAction'
import { CommentBox, ProfileImgBox, MyProfileOnComment, CommentInput, CommentSubmitBtn } from './index.style';

export default function CommentInputBox({postId}) {
    const dispatch = useDispatch();
    const token = useSelector(state => state.auth.token);
    const [comment, setComment] = useState('')
    const profileImg = useSelector(state => state.auth)
    console.log(postId);

    const handleOnSubmit = (e) => {
        e.preventDefault()
        dispatch(commentListAction.writeComment(postId, token, comment))
        setTimeout(() => {
            dispatch(commentListAction.commentList(postId, token))
        }, 500);
        console.log('~~~~~~~~~댓글받아와!!');
        setComment('')
    }

    const handleOnChange = (e) => {
        setComment(e.target.value)
    }

    return (
        <CommentBox onSubmit={handleOnSubmit}>
            <ProfileImgBox>
                <MyProfileOnComment src={profileImg.image} />
            </ProfileImgBox>
            <CommentInput placeholder='댓글 입력하기...' required value = {comment} onChange={handleOnChange} />
            <CommentSubmitBtn >게시</CommentSubmitBtn>
        </CommentBox>
    );
}
