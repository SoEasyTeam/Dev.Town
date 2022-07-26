import { React, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ArrowImg from '../../assets/icon/icon-arrow-left.png';
import MoreImg from '../../assets/icon/icon-more-vertical.png';
import SearchImg from '../../assets/icon/icon-search.png';
import { MsBtn } from './Buttons';
import { useHistory } from 'react-router-dom';
import { ProfileModal } from './Modal';

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

export const TopNavLinkS = styled(Link)`
    padding: 5px 0;
    img {
        width: 22px;
        height: 22px;
        display: block;
        margin: 0 auto;
    }
`;

export const TopNavLink = styled(Link)`
    padding: 4px 0;
    img {
        width: 24px;
        height: 24px;
        display: block;
        margin: 0 auto;
    }
`;

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


function ArrowLeftLink() {
    let history = useHistory();
    return (
        <>
            <TopNavLinkS onClick={() => { history.goBack(); }}>
                <img src={ArrowImg} alt='뒤로가기링크' />
            </TopNavLinkS>
        </>
    );
}

function TopFollowerNav() {
    return (
        <>
            <TopNavRowBoxLeft>
                <ArrowLeftLink />
                <p className='chatTitle followLeft'>Followers</p>
            </TopNavRowBoxLeft>
        </>
    )
}

function TopFollowingNav() {
    return (
        <>
            <TopNavRowBoxLeft>
                <ArrowLeftLink />
                <p className='chatTitle followLeft'>Followings</p>
            </TopNavRowBoxLeft>
        </>
    )
}

function TopBasicNav({ alertOnModal }) {
    // 모달창
    const [modalOn, setModalOn] = useState(false);
    function openModal() {
        setModalOn(true);
    }
    function closeModal() {
        document.body.style.overflow = "unset";
        setModalOn(false);
    }
    return (
        <>
            <TopNavRowBox>
                <ArrowLeftLink to='/'/>
                <TopNavLink onClick={openModal} to='/'>
                    <img src={MoreImg} alt='더보기링크' />
                </TopNavLink>
            </TopNavRowBox>
            {modalOn === true ? <ProfileModal openModal={openModal} closeModal={closeModal} alertOnModal={alertOnModal} /> : ''}
        </>
    );
}

function TopSearchNav({ onChange }) {
    return (
        <>
            <TopNavRowBox>
                <ArrowLeftLink />
                <SearchInput onChange={onChange} />
            </TopNavRowBox>
        </>
    );
}

function TopMainNav() {
    return (
        <>
            <TopNavRowBox>
                <p className='navTitle'>데브타운 피드</p>
                <TopNavLink to='/search'>
                    <img src={SearchImg} alt='찾기링크' style={{ cursor: 'pointer' }} />
                </TopNavLink>
            </TopNavRowBox>
        </>
    );
}

function TopUploadNav() {
    return (
        <>
            <TopNavRowBox>
                <ArrowLeftLink to='' />
                <MsBtn type='submit'>저장</MsBtn>
            </TopNavRowBox>
        </>
    );
}

function TopChatNav() {
    return (
        <>
            <TopNavRowBox>
                <ArrowLeftLink />
                <p className='chatTitle'>애월읍 위니브 감귤농장</p>
                <TopNavLink to='#'>
                    <img src={MoreImg} alt='더보기링크' />
                </TopNavLink>
            </TopNavRowBox>
        </>
    );
}

export { TopFollowerNav, TopFollowingNav, TopBasicNav, TopSearchNav, TopMainNav, TopUploadNav, TopChatNav, ArrowLeftLink };

