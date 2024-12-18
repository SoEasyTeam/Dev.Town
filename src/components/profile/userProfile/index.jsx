import { React, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { profileAction } from '@redux/actions/profileAction';
import IconMesssageImg from '@public/assets/icon/icon-message-circle.png';
import IconShareImg from '@public/assets/icon/icon-share.png';
import {
    ProfileName,
    ProfileAccount,
    ProfileIntro,
    FollowLink,
    MyProfileBtn,
    ProfileAreaCol,
    ProfileImg,
    CircleBtns,
} from '@components/profile/userProfile/index.style';
import { FollowMBtn } from '@components/common/button/index';
import { API_URL } from '@constants/defaultUrl';

function UserProfile({ userData }) {
    const Myaccountname = sessionStorage.getItem('accountname');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = sessionStorage.getItem('token');
    const [isFollowed, setIsFollowed] = useState(userData.profile.isfollow);
    const [newUserData, setNewUserData] = useState(userData);

    const changeFollow = async () => {
        if (isFollowed) {
            const res = await fetch(
                `${API_URL}/profile/${userData.profile.accountname}/unfollow`,
                {
                    method: 'delete',
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-type': 'application/json',
                    },
                }
            );
            const json = await res.json();
            setNewUserData(json);
            setIsFollowed(false);
        } else {
            const res = await fetch(
                `${API_URL}/profile/${userData.profile.accountname}/follow`,
                {
                    method: 'post',
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-type': 'application/json',
                    },
                }
            );
            const json = await res.json();
            setNewUserData(json);
            setIsFollowed(true);
        }
    };

    const onClickModal = (event) => {
        event.preventDefault();
        dispatch(profileAction.profileModificationModal(userData));
        navigate('/profilemodification');
    };

    return (
        <>
            <ProfileAreaCol>
                <div className='profileTop'>
                    <div className='followers'>
                        <FollowLink
                            to={{
                                pathname: '/follower',
                                search: `?id=${userData.profile.accountname}`,
                            }}
                        >
                            {newUserData.profile.followerCount}
                        </FollowLink>
                        <p>followers</p>
                    </div>
                    <div className='profileTopImg'>
                        <ProfileImg
                            src={userData.profile.image}
                            alt='프로필이미지'
                        />
                    </div>
                    <div className='followings'>
                        <FollowLink
                            to={{
                                pathname: '/following',
                                search: `?id=${userData.profile.accountname}`,
                            }}
                        >
                            {userData.profile.followingCount}
                        </FollowLink>
                        <p>followings</p>
                    </div>
                </div>
                <div className='profileMiddle'>
                    <ProfileName>{userData.profile.username}</ProfileName>
                    <ProfileAccount>
                        @ {userData.profile.accountname}
                    </ProfileAccount>
                    <ProfileIntro>{userData.profile.intro}</ProfileIntro>
                </div>
                <div className='profileBottom'>
                    {Myaccountname !== userData.profile.accountname ? (
                        <>
                            <CircleBtns>
                                <img src={IconMesssageImg} alt='채팅링크' />
                            </CircleBtns>
                            <FollowMBtn
                                isFollowed={isFollowed}
                                changeFollow={changeFollow}
                            ></FollowMBtn>
                            <CircleBtns>
                                <img src={IconShareImg} alt='공유링크' />
                            </CircleBtns>
                        </>
                    ) : (
                        <>
                            <MyProfileBtn onClick={onClickModal}>
                                프로필 수정
                            </MyProfileBtn>
                            <MyProfileBtn as={Link} to='/product'>
                                상품 등록
                            </MyProfileBtn>
                        </>
                    )}
                </div>
            </ProfileAreaCol>
        </>
    );
}

export default UserProfile;
