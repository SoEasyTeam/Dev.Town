import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TopNavRowBox = styled.div`
width: 100vw;
position: sticky;
z-index: 10;
top: 0;
background-color: var(--bg-color);
border-bottom: 0.5px solid #dbdbdb;
display: flex;
justify-content: space-between;
padding: 8px 16px;
.navTitle {
    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    margin: 5px 0;
}
.chatTitle {
    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    margin: 7px;
}
`;

export const TopNavRowBoxLeft = styled.div`
width: 100vw;
position: sticky;
z-index: 10;
top: 0;
background-color: var(--bg-color);
border-bottom: 0.5px solid #DBDBDB;
display: flex;
justify-content: flex-start;
padding: 8px 16px;
.chatTitle {
    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    margin: 7px;
}
.followLeft {
    margin-left: 8px;
}
`

export const TopNavLinkS = styled.div`
padding: 5px 0;
cursor: pointer;
img {
    width: 22px;
    height: 22px;
    display: block;
    margin: 0 auto;
}
`;

export const TopNavLink = styled.div`
padding: 4px 0;
cursor: pointer;
img {
    width: 24px;
    height: 24px;
    display: block;
    margin: 0 auto;
}
`;

export const TopSearchLink = styled(Link)`
padding: 4px 0;
img {
    width: 24px;
    height: 24px;
    display: block;
    margin: 0 auto;
}
`

export const SearchInput = styled.input.attrs({
    type: 'text',
    id: 'search',
    placeholder: '계정 검색',
})`
background: #f2f2f2;
border-radius: 32px;
border: none;
box-sizing: content-box;
font-family: 'Spoqa Han Sans Neo';
font-size: 14px;
font-weight: 400;
line-height: 18px;
text-align: left;
width: 80%;
padding: 7px 16px;
margin-left: 4px;
`;

