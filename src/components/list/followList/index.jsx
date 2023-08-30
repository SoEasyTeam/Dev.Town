import { useState } from 'react';
import {
    NameIdBox,
    NickNameP,
    IdP,
    ProfileLogoImg,
} from '@components/common/search/index.style';
import {
    UserFollowBox,
    FollowPageLink,
} from '@components/list/followList/index.style';
import { FollowSBtn } from '@components/common/button/index';
import { API_URL } from '@constants/defaultUrl';

function UserFollow({ src, name, accountname, isfollow }) {
    const token = sessionStorage.getItem('token');
    const [isFollowed, setIsFollowed] = useState(isfollow);
    const changeFollow = async () => {
        if (isFollowed) {
            await fetch(`${API_URL}/profile/${accountname}/unfollow`, {
                method: 'delete',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-type': 'application/json',
                },
            }).then((res) => {
                setIsFollowed(false);
            });
        } else {
            await fetch(`${API_URL}/profile/${accountname}/follow`, {
                method: 'post',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-type': 'application/json',
                },
            }).then((res) => {
                setIsFollowed(true);
            });
        }
    };

    return (
        <>
            <UserFollowBox>
                <FollowPageLink
                    to={{ pathname: '/yourpage', search: `?id=${accountname}` }}
                >
                    <ProfileLogoImg src={src} alt='프로필로고' />
                    <NameIdBox>
                        <NickNameP>{name}</NickNameP>
                        <IdP>@ {accountname}</IdP>
                    </NameIdBox>
                </FollowPageLink>
                <FollowSBtn
                    changeFollow={changeFollow}
                    isFollowed={isFollowed}
                ></FollowSBtn>
            </UserFollowBox>
        </>
    );
}

export default UserFollow;
