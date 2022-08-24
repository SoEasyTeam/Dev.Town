import styled from 'styled-components';

export const PostSection = styled.section`
padding: 0 16px 20px 16px;
`

export const UploadForm = styled.form`
    height: 100vh;
    display: flex;
    flex-direction: column;
`;

export const UploadSection = styled.section`
    display: flex;
    justify-content: center;
    gap: 20px;
    padding: 50px;
`;

export const UploadInputSection = styled.section`
    flex-direction: column;
    .uploadInput {
        width: 70vw;
        height: auto;
        border: none;
    }

    .uploadInput::placeholder {
        position: absolute;
        top: 0;
    }

    .preview-area {
        display: flex;
        gap: 5px;
        overflow-x: auto;
        height: 171px;
    }
    .preview-area .preview-item {
        border-radius: 10px;
        width: 168px;
        height: 171px;
        object-fit: cover;
        max-height: 126px;
    }
`;

export const UploadImgInput = styled.input`
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
    padding: 0;
`;

export const CommentUl = styled.ul`
    border-top: 1px solid #DBDBDB;
    padding-bottom: 79px;
`