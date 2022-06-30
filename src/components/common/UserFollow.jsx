import React from 'react';
import styled from 'styled-components';
import {
    UserSearchBox,
    NameIdBox,
    NickNameP,
    IdP,
    ProfileLogoImg,
} from './UserSearch';
import EllipseImg from '../../assets/Ellipse-1.png';

export const UserFollowBox = styled(UserSearchBox)`
    position: relative;
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

function UserFollow() {
    return (
        <>
            <UserFollowBox>
                <ProfileLogoImg src={EllipseImg} alt='프로필로고' />
                <NameIdBox>
                    <NickNameP>애월읍 위니브 감귤농장</NickNameP>
                    <IdP>@ weniv_Mandarin</IdP>
                </NameIdBox>
                <FollowBtn>팔로우</FollowBtn>
            </UserFollowBox>
        </>
    );
}

export default UserFollow;
