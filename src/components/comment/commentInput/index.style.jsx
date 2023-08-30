import styled from 'styled-components';
import { ProfileImg } from '@components/profile/userProfile/index.style';

export const CommentBox = styled.form`
    width: 100%;
    display: flex;
    position: fixed;
    bottom: 0;
    border-top: 0.5px solid #dbdbdb;
`;

export const ProfileImgBox = styled.div`
    padding: 10px;
`;

export const MyProfileOnComment = styled(ProfileImg)`
    width: 36px;
    height: 36px;
`;

export const CommentInput = styled.input`
    flex-grow: 1;
    border: none;
    padding: 0 10px;
`;

export const CommentSubmitBtn = styled.button`
    min-width: 60px;
    padding: 5px;
    background-color: white;
    cursor: pointer;
`;
