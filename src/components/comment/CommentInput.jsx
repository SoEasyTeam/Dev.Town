import { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ProfileImg } from '../profile/userProfile/index.style';
import { commentListAction } from '../../redux/actions/commentListAction'

const CommentBox = styled.form`
    width: 100%;
    display: flex;
    position: fixed;
    bottom: 0;
    border-top: 0.5px solid #dbdbdb;
`;
const ProfileImgBox = styled.div`
    /* min-width: 36px; */
    padding: 10px;
    
    /* margin: 12px; */
`;
const MyProfileOnComment = styled(ProfileImg)`
    width: 36px;
    height: 36px;
`
const CommentInput = styled.input`
    flex-grow: 1;
    border: none;
    padding: 0 10px;
`;

const CommentSubmitBtn = styled.button`
    min-width: 60px;
    padding: 5px;
    background-color: white;
    cursor: pointer;
`;

export default function CommentInputBox() {
    const dispatch = useDispatch()
    const token = useSelector(state => state.auth.token);
    const { id } = useParams();
    const postViewId = useSelector(state => state.homefeed.item).map((i) => i.id);
    const postId = postViewId.filter(i => i === id);
    const [comment, setComment] = useState('')
    const profileImg = useSelector(state => state.auth)

    console.log(profileImg);
    const handleOnSubmit = (e) => {
        e.preventDefault()
        dispatch(commentListAction.writeComment(postId, token, comment))
        dispatch(commentListAction.commentList(postId, token))
        e.target.value = ''
    }

    const handleOnChange = (e) => {
        setComment(e.target.value)
    }

    // const resetInput = (e)=>{
    //     setComment(e.target.value = '')
    // }
    return (
        <CommentBox onSubmit={handleOnSubmit}>
            <ProfileImgBox>
                <MyProfileOnComment src={profileImg.image} />
            </ProfileImgBox>
            <CommentInput placeholder='댓글 입력하기...' required onChange={handleOnChange} />
            <CommentSubmitBtn>게시</CommentSubmitBtn>
        </CommentBox>
    );
}
