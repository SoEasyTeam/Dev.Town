import styled from "styled-components";

const LikePostBox = styled.div`
    display: flex;
    gap: 22px;
    margin-left: 54px;
    .like-btn {
        position: relative;
    }
    .heart-img {
        width: 20px;
        height: 20px;
        margin-right: 6px;
    }
    .likecount-span {
        position: absolute;
        font-family: 'Spoqa Han Sans Neo';
        font-size: 12px;
        font-weight: 400;
        text-align: left;
        color: #767676;
        top: 3px;
    }
    .comment-btn {
        position: relative;
    }
    .comment-img {
        width: 20px;
        height: 20px;
        margin-right: 6px;
    }
    .comment-span {
        position: absolute;
        font-family: 'Spoqa Han Sans Neo';
        font-size: 12px;
        font-weight: 400;
        text-align: left;
        color: #767676;
        top: 3px;
    }
`;

export default LikePostBox