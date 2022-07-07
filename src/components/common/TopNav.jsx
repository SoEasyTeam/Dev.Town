import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ArrowImg from '../../assets/icon/icon-arrow-left.png';
import MoreImg from '../../assets/icon/icon-more-vertical.png';
import SearchImg from '../../assets/icon/icon-search.png';
import { MsBtn } from './Buttons';

const TopNavRowBox = styled.div`
    width: 100vw;
    position: sticky;
    z-index: 10;
    top: 0;
    background-color: var(--bg-color);
    border-bottom: 0.5px solid #dbdbdb;
    display: flex;
    justify-content: space-between;
    padding: 8px 16px;
    .NavTitle {
        font-family: 'Spoqa Han Sans Neo';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        margin: 5px 0;
    }
    .ChatTitle {
        font-family: 'Spoqa Han Sans Neo';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 18px;
        margin: 7px;
    }
`;

const TopNavLinkS = styled(Link)`
    padding: 5px 0;
    img {
        width: 22px;
        height: 22px;
        display: block;
        margin: 0 auto;
    }
`;

const TopNavLink = styled(Link)`
    padding: 4px 0;
    img {
        width: 24px;
        height: 24px;
        display: block;
        margin: 0 auto;
    }
`;

const SearchInput = styled.input.attrs({
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

function ArrowLeftLink() {
    return (
        <>
            <TopNavLinkS to='#'>
                <img src={ArrowImg} alt='뒤로가기링크' />
            </TopNavLinkS>
        </>
    );
}

function TopBasicNav() {
    return (
        <>
            <TopNavRowBox>
                <ArrowLeftLink />
                <TopNavLink to='#'>
                    <img src={MoreImg} alt='더보기링크' />
                </TopNavLink>
            </TopNavRowBox>
        </>
    );
}

function TopSearchNav() {
    return (
        <>
            <TopNavRowBox>
                <ArrowLeftLink />
                <SearchInput />
            </TopNavRowBox>
        </>
    );
}

function TopMainNav() {
    return (
        <>
            <TopNavRowBox>
                <p className='NavTitle'>데브타운 피드</p>
                <TopNavLink to='#'>
                    <img src={SearchImg} alt='찾기링크' />
                </TopNavLink>
            </TopNavRowBox>
        </>
    );
}

function TopUploadNav() {
    return (
        <>
            <TopNavRowBox>
                <ArrowLeftLink />
                <MsBtn />
            </TopNavRowBox>
        </>
    );
}

function TopChatNav() {
    return (
        <>
            <TopNavRowBox>
                <ArrowLeftLink />
                <p className='ChatTitle'>애월읍 위니브 감귤농장</p>
                <TopNavLink to='#'>
                    <img src={MoreImg} alt='더보기링크' />
                </TopNavLink>
            </TopNavRowBox>
        </>
    );
}

export { TopBasicNav, TopSearchNav, TopMainNav, TopUploadNav, TopChatNav };
