import styled from 'styled-components';
import { DefaultProfileImg } from './ProfileButtons';
import IconFillImg from '../../assets/upload-file.png'

const CommentBox = styled.div`
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

export default function Comment() {
    return (
        <>
            <CommentBox>
                <ProfileImgBox>
                    <DefaultProfileImg />
                </ProfileImgBox>
                <CommentInput placeholder='댓글 입력하기...' required />
                <CommentSubmitBtn>게시</CommentSubmitBtn>
            </CommentBox>
        </>
    );
}
