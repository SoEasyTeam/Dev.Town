import styled from 'styled-components';
import { DefaultProfileImg } from '../common/ProfileButtons';
import IconFillImg from '../../assets/upload-file.png'
import { useDispatch, useSelector } from 'react-redux';
import {commentAction} from '../../redux/actions/commentAction'

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


    const handleOnSubmit = (e) =>{
        e.preventDefault()
        // dispatch(commentAction.postComment(post_id, token, content))
    }
    return (
        <CommentBox onSubmit={handleOnSubmit}>
            <ProfileImgBox>
                <DefaultProfileImg />
            </ProfileImgBox>
            <CommentInput placeholder='댓글 입력하기...' required />
            <CommentSubmitBtn>게시</CommentSubmitBtn>
        </CommentBox>
    );
}
