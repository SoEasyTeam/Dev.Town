import styled from 'styled-components';
import { DefaultProfileImg } from './ProfileButtons';

const CommentBox = styled.div`
    width: 100%;
    height: 61px;
    display: flex;
    border: 1px solid black;
`

const ProfileImgBox = styled.div`
    min-width: 36px;
    margin: 12px;
`

const CommentInput = styled.input`
    flex-grow: 1;
    border: none;
`

const CommentSubmitBtn = styled.button`
    min-width: 60px;
    padding: 5px;
`

export default function Comment() {
    return (
        <CommentBox>
            <ProfileImgBox>
                <DefaultProfileImg />
            </ProfileImgBox>
            <CommentInput placeholder='댓글 입력하기...' required />
            <CommentSubmitBtn>게시</CommentSubmitBtn>
        </CommentBox>
    )
}