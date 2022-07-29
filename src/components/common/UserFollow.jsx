import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SBtn } from './Buttons';
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

const FollowPageLink = styled(Link)`
    display: inherit;
`

const FollowSBtn = styled(SBtn)`
    font-family: 'Spoqa Han Sans Neo';
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    position: absolute;
    right: 0px;
    top: 11px;
`

function UserFollow({ src, name, accountname, isfollow }) {
    const [isFollow, setIsFollow] = useState(isfollow);
    const [isFollowWord, setIsFollowWord] = useState('팔로우');
    const [isUnfollowWord, setIsUnfollowWord] = useState('취소');
    function changeIsFollow() {
        console.log('팔로우취소 가동!', isfollow)
        setIsFollow(!isFollow);
        if (isFollowWord === '팔로우' || isUnfollowWord === '취소') {
            setIsFollowWord('취소')
            setIsUnfollowWord('팔로우')
        } else {
            setIsFollowWord('팔로우')
            setIsUnfollowWord('취소')
        }
    }

    return (
        <>
            <UserFollowBox>
                <FollowPageLink to='/yourpage' >
                    <ProfileLogoImg src={src} alt='프로필로고' />
                    <NameIdBox>
                        <NickNameP>{name}</NickNameP>
                        <IdP>@ {accountname}</IdP>
                    </NameIdBox>
                </FollowPageLink>
                <FollowSBtn onClick={changeIsFollow} isFollowed={isFollow}>{isfollow ? isUnfollowWord : isFollowWord}</FollowSBtn>
            </UserFollowBox>
        </>
    );
}

export default UserFollow;
