import styled from 'styled-components';
import IconPostListOn from '../../../assets/icon/icon-post-list-on.png';
import IconPostListOff from '../../../assets/icon/icon-post-list-off.png';
import IconPostAlbumOff from '../../../assets/icon/icon-post-album-off.png';
import IconPostAlbumOn from '../../../assets/icon/icon-post-album-on.png';

export const PostListBtns = styled.button`
width: 26px;
height: 26px;
margin-right: 16px;
${({ isActive }) => {
        return isActive === true ? `background-image: url(${IconPostListOn});` : `background-image: url(${IconPostListOff});`;
    }}
`

export const PostAlbumBtns = styled.button`
width: 26px;
height: 26px;
margin-right: 16px; 
${({ isActive }) => {
        return isActive === true ? `background-image: url(${IconPostAlbumOff});` : `background-image: url(${IconPostAlbumOn});`
    }}
`

export const PostArea = styled.article`
width: 100vw;
border-top: 0.5px solid #DBDBDB;
background: #FFFFFF;
.postBtnImg {
    width: 26px;
}
.postAreaTop {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-bottom: 0.5px solid #DBDBDB;
    height: 43px
}
`
export const PostAreaListUl = styled.ul`
list-style: none;
li {
    margin: 20px 0;
}
`
