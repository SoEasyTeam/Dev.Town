import React from 'react';
import styled from 'styled-components';
import {
    UserSearchBox,
    NameIdBox,
    NickNameP,
    IdP,
    ProfileLogoImg,
} from './UserSearch';

export const UserFollowBox = styled(UserSearchBox)`
    position: relative;
    margin-bottom: 16px;
`;

const FollowBtn = styled.button`
    width: 56px;
    height: 28px;
    font-family: 'Spoqa Han Sans Neo';
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    text-align: center;
    background: var(--main-color);
    border-radius: 26px;
    color: var(--bg-color);
    position: absolute;
    right: 0px;
    top: 11px;
`;

function UserFollow({ src, name, accountname, isfollow }) {
    function moveProfilePage() {
        console.log('프로필로 이동')
        // window.location.href = '/myprofile'
    }

    return (
        <>
            <UserFollowBox onClick={moveProfilePage}>
                <ProfileLogoImg src={src} alt='프로필로고' />
                <NameIdBox>
                    <NickNameP>{name}</NickNameP>
                    <IdP>@ {accountname}</IdP>
                </NameIdBox>
                <FollowBtn>팔로우</FollowBtn>
            </UserFollowBox>
        </>
    );
}

export default UserFollow;
