import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowImg from '@public/assets/icon/icon-arrow-left.png';
import MoreImg from '@public/assets/icon/icon-more-vertical.png';
import SearchImg from '@public/assets/icon/icon-search.png';
import { MsBtn } from '@components/common/button/index.style';
import { ProfileModal } from '@components/common/modal';
import {
    TopNavRowBox,
    TopNavRowBoxLeft,
    TopNavLinkS,
    TopNavLink,
    TopSearchLink,
    SearchInput,
} from '@components/common/nav/index.style';

function ArrowLeftLink() {
    const navigate = useNavigate();
    document.body.style.overflow = 'unset';
    return (
        <>
            <TopNavLinkS
                onClick={() => {
                    navigate(-1);
                }}
            >
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
    );
}

function TopFollowingNav() {
    return (
        <>
            <TopNavRowBoxLeft>
                <ArrowLeftLink />
                <p className='chatTitle followLeft'>Followings</p>
            </TopNavRowBoxLeft>
        </>
    );
}

function TopBasicNav({ alertOnModal }) {
    // 모달창
    const [modalOn, setModalOn] = useState(false);
    function openModal() {
        setModalOn(true);
    }
    function closeModal() {
        document.body.style.overflow = 'unset';
        setModalOn(false);
    }
    return (
        <>
            <TopNavRowBox>
                <ArrowLeftLink />
                <TopNavLink onClick={openModal}>
                    <img src={MoreImg} alt='더보기링크' />
                </TopNavLink>
            </TopNavRowBox>
            {modalOn === true ? (
                <ProfileModal
                    openModal={openModal}
                    closeModal={closeModal}
                    alertOnModal={alertOnModal}
                />
            ) : (
                ''
            )}
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
                <TopSearchLink to='/search'>
                    <img
                        src={SearchImg}
                        alt='찾기링크'
                        style={{ cursor: 'pointer' }}
                    />
                </TopSearchLink>
            </TopNavRowBox>
        </>
    );
}

function TopUploadNav() {
    return (
        <>
            <TopNavRowBox>
                <ArrowLeftLink />
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
                <p className='chatTitle'>리액트 면접 질문</p>
                <TopNavLink>
                    <img src={MoreImg} alt='더보기링크' />
                </TopNavLink>
            </TopNavRowBox>
        </>
    );
}

export {
    TopFollowerNav,
    TopFollowingNav,
    TopBasicNav,
    TopSearchNav,
    TopMainNav,
    TopUploadNav,
    TopChatNav,
    ArrowLeftLink,
};
