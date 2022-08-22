import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { commentListAction } from '../../../redux/actions/commentListAction'
import { useParams } from 'react-router-dom';
import { CommentBox, ProfileImgBox, MyProfileOnComment, CommentInput, CommentSubmitBtn } from './index.style';

export default function CommentInputBox() {
    const dispatch = useDispatch()
    const token = useSelector(state => state.auth.token);
    const { id } = useParams();
    const postViewId = useSelector(state => state.homefeed.item).map((i) => i.id);
    const postId = postViewId.filter(i => i === id);
    const [comment, setComment] = useState('')
    const profileImg = useSelector(state => state.auth)

    const handleOnSubmit = (e) => {
        e.preventDefault()
        dispatch(commentListAction.writeComment(postId, token, comment))
        dispatch(commentListAction.commentList(postId, token))
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
