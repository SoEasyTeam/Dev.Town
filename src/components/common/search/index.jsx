import React from 'react';
import EllipseImg from '@public/assets/images/Ellipse-1.png';
import {
    UserSearchBox,
    ProfileLogoImg,
    NameIdBox,
    NickNameP,
    IdP,
} from '@components/common/search/index.style';
import { BasicProfileImg } from '@components/common/button/index.style';

const UserSearch = () => {
    return (
        <>
            <UserSearchBox>
                <ProfileLogoImg
                    src={EllipseImg}
                    alt='프로필로고'
                    onError={BasicProfileImg}
                />
                <NameIdBox>
                    <NickNameP>애월읍 위니브 감귤농장</NickNameP>
                    <IdP>@ weniv_Mandarin</IdP>
                </NameIdBox>
            </UserSearchBox>
        </>
    );
};

export default UserSearch;
