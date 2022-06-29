import React from 'react';
import styled from 'styled-components';
import EllipseImg from '../../assets/Ellipse-1.png';

export const UserSearchBox = styled.div`
    width: 100vw;
    display: flex;
`;

export const ProfileLogoImg = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`;

export const NameIdBox = styled.div`
    padding: 5px 0px 6px 12px;
`;

export const NickNameP = styled.p`
    font-family: 'Spoqa Han Sans Neo';
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    text-align: left;
    margin-bottom: 6px;
`;

export const IdP = styled.p`
    font-family: 'Spoqa Han Sans Neo';
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    text-align: left;
    color: #767676;
`;

const UserSearch = () => {
    return (
        <>
            <UserSearchBox>
                <ProfileLogoImg src={EllipseImg} alt="프로필로고" />
                <NameIdBox>
                    <NickNameP>애월읍 위니브 감귤농장</NickNameP>
                    <IdP>@ weniv_Mandarin</IdP>
                </NameIdBox>
            </UserSearchBox>
        </>
    );
};

export default UserSearch;
