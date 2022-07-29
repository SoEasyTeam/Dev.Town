import React from 'react';
import EllipseImg from '../../../assets/Ellipse-1.png';
import { UserSearchBox, ProfileLogoImg, NameIdBox, NickNameP, IdP } from './index.style'

const UserSearch = () => {
    return (
        <>
            <UserSearchBox>
                <ProfileLogoImg src={EllipseImg} alt='프로필로고' />
                <NameIdBox>
                    <NickNameP>애월읍 위니브 감귤농장</NickNameP>
                    <IdP>@ weniv_Mandarin</IdP>
                </NameIdBox>
            </UserSearchBox>
        </>
    );
};

export default UserSearch;
