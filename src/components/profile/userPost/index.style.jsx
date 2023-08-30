import styled from 'styled-components';
import IconPostListOn from '@public/assets/icon/icon-post-list-on.png';
import IconPostListOff from '@public/assets/icon/icon-post-list-off.png';
import IconPostAlbumOff from '@public/assets/icon/icon-post-album-off.png';
import IconPostAlbumOn from '@public/assets/icon/icon-post-album-on.png';

export const PostListBtns = styled.button`
    width: 26px;
    height: 26px;
    margin-right: 16px;
    ${({ isActive }) => {
        return isActive === true
            ? `background-image: url(${IconPostListOn});`
            : `background-image: url(${IconPostListOff});`;
    }}
`;

export const PostAlbumBtns = styled.button`
    width: 26px;
    height: 26px;
    margin-right: 16px;
    ${({ isActive }) => {
        return isActive === true
            ? `background-image: url(${IconPostAlbumOff});`
            : `background-image: url(${IconPostAlbumOn});`;
    }}
`;

export const PostArea = styled.article`
    width: 100vw;
    border-top: 0.5px solid #dbdbdb;
    background: #ffffff;
    .postBtnImg {
        width: 26px;
    }
    .postAreaTop {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        border-bottom: 0.5px solid #dbdbdb;
        height: 43px;
    }
`;
export const PostAreaListUl = styled.ul`
    list-style: none;
    padding: 16px 0px;
`;

export const AlbumBox = styled.div`
    margin: 0 auto;
    width: 390px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
`;
export const AlbumLi = styled.li`
    img {
        display: block;
        width: 114px;
        height: 114px;
        border: 0.5px solid #dbdbdb;
        margin: 0 auto;
    }
`;
